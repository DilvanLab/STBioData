/*
 * STBioData is an application to integrate, retrieve, and visualize biodiversity data using
 * spatiotemporal information. It uses semantics, data visualization and mapping
 * techniques to achieve that.
 *
 * Copyright (c) 2018-2024  Dilvan A. Moreira
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

/**
 * @fileoverview A global registry for entry points into a program,
 * so that they can be instrumented. Each module should register their
 * entry points with this registry. Designed to be compiled out
 * if no instrumentation is requested.
 *
 * Entry points may be registered before or after a call to
 * goog.debug.entryPointRegistry.monitorAll. If an entry point is registered
 * later, the existing monitor will instrument the new entry point.
 *
 * @author nicksantos@google.com (Nick Santos)
 */

goog.provide('goog.debug.EntryPointMonitor');
goog.provide('goog.debug.entryPointRegistry');

goog.require('goog.asserts');



/**
 * @interface
 */
goog.debug.EntryPointMonitor = function() {};


/**
 * Instruments a function.
 *
 * @param {!Function} fn A function to instrument.
 * @return {!Function} The instrumented function.
 */
goog.debug.EntryPointMonitor.prototype.wrap;


/**
 * Try to remove an instrumentation wrapper created by this monitor.
 * If the function passed to unwrap is not a wrapper created by this
 * monitor, then we will do nothing.
 *
 * Notice that some wrappers may not be unwrappable. For example, if other
 * monitors have applied their own wrappers, then it will be impossible to
 * unwrap them because their wrappers will have captured our wrapper.
 *
 * So it is important that entry points are unwrapped in the reverse
 * order that they were wrapped.
 *
 * @param {!Function} fn A function to unwrap.
 * @return {!Function} The unwrapped function, or {@code fn} if it was not
 *     a wrapped function created by this monitor.
 */
goog.debug.EntryPointMonitor.prototype.unwrap;


/**
 * An array of entry point callbacks.
 * @type {!Array<function(!Function)>}
 * @private
 */
goog.debug.entryPointRegistry.refList_ = [];


/**
 * Monitors that should wrap all the entry points.
 * @type {!Array<!goog.debug.EntryPointMonitor>}
 * @private
 */
goog.debug.entryPointRegistry.monitors_ = [];


/**
 * Whether goog.debug.entryPointRegistry.monitorAll has ever been called.
 * Checking this allows the compiler to optimize out the registrations.
 * @type {boolean}
 * @private
 */
goog.debug.entryPointRegistry.monitorsMayExist_ = false;


/**
 * Register an entry point with this module.
 *
 * The entry point will be instrumented when a monitor is passed to
 * goog.debug.entryPointRegistry.monitorAll. If this has already occurred, the
 * entry point is instrumented immediately.
 *
 * @param {function(!Function)} callback A callback function which is called
 *     with a transforming function to instrument the entry point. The callback
 *     is responsible for wrapping the relevant entry point with the
 *     transforming function.
 */
goog.debug.entryPointRegistry.register = function(callback) {
  // Don't use push(), so that this can be compiled out.
  goog.debug.entryPointRegistry
      .refList_[goog.debug.entryPointRegistry.refList_.length] = callback;
  // If no one calls monitorAll, this can be compiled out.
  if (goog.debug.entryPointRegistry.monitorsMayExist_) {
    var monitors = goog.debug.entryPointRegistry.monitors_;
    for (var i = 0; i < monitors.length; i++) {
      callback(goog.bind(monitors[i].wrap, monitors[i]));
    }
  }
};


/**
 * Configures a monitor to wrap all entry points.
 *
 * Entry points that have already been registered are immediately wrapped by
 * the monitor. When an entry point is registered in the future, it will also
 * be wrapped by the monitor when it is registered.
 *
 * @param {!goog.debug.EntryPointMonitor} monitor An entry point monitor.
 */
goog.debug.entryPointRegistry.monitorAll = function(monitor) {
  goog.debug.entryPointRegistry.monitorsMayExist_ = true;
  var transformer = goog.bind(monitor.wrap, monitor);
  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer);
  }
  goog.debug.entryPointRegistry.monitors_.push(monitor);
};


/**
 * Try to unmonitor all the entry points that have already been registered. If
 * an entry point is registered in the future, it will not be wrapped by the
 * monitor when it is registered. Note that this may fail if the entry points
 * have additional wrapping.
 *
 * @param {!goog.debug.EntryPointMonitor} monitor The last monitor to wrap
 *     the entry points.
 * @throws {Error} If the monitor is not the most recently configured monitor.
 */
goog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {
  var monitors = goog.debug.entryPointRegistry.monitors_;
  goog.asserts.assert(
      monitor == monitors[monitors.length - 1],
      'Only the most recent monitor can be unwrapped.');
  var transformer = goog.bind(monitor.unwrap, monitor);
  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {
    goog.debug.entryPointRegistry.refList_[i](transformer);
  }
  monitors.length--;
};
