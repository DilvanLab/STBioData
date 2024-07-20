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

goog.provide('goog.Thenable');

/** @suppress {extraRequire} */
goog.forwardDeclare('goog.Promise'); // for the type reference.



/**
 * Provides a more strict interface for Thenables in terms of
 * http://promisesaplus.com for interop with {@see goog.Promise}.
 *
 * @interface
 * @extends {IThenable<TYPE>}
 * @template TYPE
 */
goog.Thenable = function() {};


/**
 * Adds callbacks that will operate on the result of the Thenable, returning a
 * new child Promise.
 *
 * If the Thenable is fulfilled, the {@code onFulfilled} callback will be
 * invoked with the fulfillment value as argument, and the child Promise will
 * be fulfilled with the return value of the callback. If the callback throws
 * an exception, the child Promise will be rejected with the thrown value
 * instead.
 *
 * If the Thenable is rejected, the {@code onRejected} callback will be invoked
 * with the rejection reason as argument, and the child Promise will be rejected
 * with the return value of the callback or thrown value.
 *
 * @param {?(function(this:THIS, TYPE): VALUE)=} opt_onFulfilled A
 *     function that will be invoked with the fulfillment value if the Promise
 *     is fulfilled.
 * @param {?(function(this:THIS, *): *)=} opt_onRejected A function that will
 *     be invoked with the rejection reason if the Promise is rejected.
 * @param {THIS=} opt_context An optional context object that will be the
 *     execution context for the callbacks. By default, functions are executed
 *     with the default this.
 *
 * @return {RESULT} A new Promise that will receive the result
 *     of the fulfillment or rejection callback.
 * @template VALUE
 * @template THIS
 *
 * When a Promise (or thenable) is returned from the fulfilled callback,
 * the result is the payload of that promise, not the promise itself.
 *
 * @template RESULT := type('goog.Promise',
 *     cond(isUnknown(VALUE), unknown(),
 *       mapunion(VALUE, (V) =>
 *         cond(isTemplatized(V) && sub(rawTypeOf(V), 'IThenable'),
 *           templateTypeOf(V, 0),
 *           cond(sub(V, 'Thenable'),
 *              unknown(),
 *              V)))))
 *  =:
 *
 */
goog.Thenable.prototype.then = function(
    opt_onFulfilled, opt_onRejected, opt_context) {};


/**
 * An expando property to indicate that an object implements
 * {@code goog.Thenable}.
 *
 * {@see addImplementation}.
 *
 * @const
 */
goog.Thenable.IMPLEMENTED_BY_PROP = '$goog_Thenable';


/**
 * Marks a given class (constructor) as an implementation of Thenable, so
 * that we can query that fact at runtime. The class must have already
 * implemented the interface.
 * Exports a 'then' method on the constructor prototype, so that the objects
 * also implement the extern {@see goog.Thenable} interface for interop with
 * other Promise implementations.
 * @param {function(new:goog.Thenable,...?)} ctor The class constructor. The
 *     corresponding class must have already implemented the interface.
 */
goog.Thenable.addImplementation = function(ctor) {
  // Use bracket notation instead of goog.exportSymbol() so that the compiler
  // won't create a 'var ctor;' extern when the "create externs from exports"
  // mode is enabled.
  ctor.prototype['then'] = ctor.prototype.then;
  if (COMPILED) {
    ctor.prototype[goog.Thenable.IMPLEMENTED_BY_PROP] = true;
  } else {
    // Avoids dictionary access in uncompiled mode.
    ctor.prototype.$goog_Thenable = true;
  }
};


/**
 * @param {?} object
 * @return {boolean} Whether a given instance implements {@code goog.Thenable}.
 *     The class/superclass of the instance must call {@code addImplementation}.
 */
goog.Thenable.isImplementedBy = function(object) {
  if (!object) {
    return false;
  }
  try {
    if (COMPILED) {
      return !!object[goog.Thenable.IMPLEMENTED_BY_PROP];
    }
    return !!object.$goog_Thenable;
  } catch (e) {
    // Property access seems to be forbidden.
    return false;
  }
};
