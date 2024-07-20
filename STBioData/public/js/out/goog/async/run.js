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

goog.provide('goog.async.run');

goog.require('goog.async.WorkQueue');
goog.require('goog.async.nextTick');
goog.require('goog.async.throwException');


/**
 * Fires the provided callback just before the current callstack unwinds, or as
 * soon as possible after the current JS execution context.
 * @param {function(this:THIS)} callback
 * @param {THIS=} opt_context Object to use as the "this value" when calling
 *     the provided function.
 * @template THIS
 */
goog.async.run = function(callback, opt_context) {
  if (!goog.async.run.schedule_) {
    goog.async.run.initializeRunner_();
  }
  if (!goog.async.run.workQueueScheduled_) {
    // Nothing is currently scheduled, schedule it now.
    goog.async.run.schedule_();
    goog.async.run.workQueueScheduled_ = true;
  }

  goog.async.run.workQueue_.add(callback, opt_context);
};


/**
 * Initializes the function to use to process the work queue.
 * @private
 */
goog.async.run.initializeRunner_ = function() {
  // If native Promises are available in the browser, just schedule the callback
  // on a fulfilled promise, which is specified to be async, but as fast as
  // possible.  Use goog.global.Promise instead of just Promise because the
  // relevant externs may be missing, and don't alias it because this could
  // confuse the compiler into thinking the polyfill is required when it should
  // be treated as optional.
  if (String(goog.global.Promise).indexOf('[native code]') != -1) {
    var promise = goog.global.Promise.resolve(undefined);
    goog.async.run.schedule_ = function() {
      promise.then(goog.async.run.processWorkQueue);
    };
  } else {
    goog.async.run.schedule_ = function() {
      goog.async.nextTick(goog.async.run.processWorkQueue);
    };
  }
};


/**
 * Forces goog.async.run to use nextTick instead of Promise.
 *
 * This should only be done in unit tests. It's useful because MockClock
 * replaces nextTick, but not the browser Promise implementation, so it allows
 * Promise-based code to be tested with MockClock.
 *
 * However, we also want to run promises if the MockClock is no longer in
 * control so we schedule a backup "setTimeout" to the unmocked timeout if
 * provided.
 *
 * @param {function(function())=} opt_realSetTimeout
 */
goog.async.run.forceNextTick = function(opt_realSetTimeout) {
  goog.async.run.schedule_ = function() {
    goog.async.nextTick(goog.async.run.processWorkQueue);
    if (opt_realSetTimeout) {
      opt_realSetTimeout(goog.async.run.processWorkQueue);
    }
  };
};


/**
 * The function used to schedule work asynchronousely.
 * @private {function()}
 */
goog.async.run.schedule_;


/** @private {boolean} */
goog.async.run.workQueueScheduled_ = false;


/** @private {!goog.async.WorkQueue} */
goog.async.run.workQueue_ = new goog.async.WorkQueue();


if (goog.DEBUG) {
  /**
   * Reset the work queue. Only available for tests in debug mode.
   */
  goog.async.run.resetQueue = function() {
    goog.async.run.workQueueScheduled_ = false;
    goog.async.run.workQueue_ = new goog.async.WorkQueue();
  };
}


/**
 * Run any pending goog.async.run work items. This function is not intended
 * for general use, but for use by entry point handlers to run items ahead of
 * goog.async.nextTick.
 */
goog.async.run.processWorkQueue = function() {
  // NOTE: additional work queue items may be added while processing.
  var item = null;
  while (item = goog.async.run.workQueue_.remove()) {
    try {
      item.fn.call(item.scope);
    } catch (e) {
      goog.async.throwException(e);
    }
    goog.async.run.workQueue_.returnUnused(item);
  }

  // There are no more work items, allow processing to be scheduled again.
  goog.async.run.workQueueScheduled_ = false;
};
