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
 * @fileoverview Creates a pool of XhrIo objects to use. This allows multiple
 * XhrIo objects to be grouped together and requests will use next available
 * XhrIo object.
 *
 */

goog.provide('goog.net.XhrIoPool');

goog.require('goog.net.XhrIo');
goog.require('goog.structs.PriorityPool');



/**
 * A pool of XhrIo objects.
 * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
 *     request.
 * @param {number=} opt_minCount Minimum number of objects (Default: 0).
 * @param {number=} opt_maxCount Maximum number of objects (Default: 10).
 * @param {boolean=} opt_withCredentials Add credentials to every request
 *     (Default: false).
 * @constructor
 * @extends {goog.structs.PriorityPool}
 */
goog.net.XhrIoPool = function(
    opt_headers, opt_minCount, opt_maxCount, opt_withCredentials) {
  /**
   * Map of default headers to add to every request.
   * @type {goog.structs.Map|undefined}
   * @private
   */
  this.headers_ = opt_headers;

  /**
   * Whether a "credentialed" requests are to be sent (ones that is aware of
   * cookies and authentication). This is applicable only for cross-domain
   * requests and more recent browsers that support this part of the HTTP Access
   * Control standard.
   *
   * @see http://www.w3.org/TR/XMLHttpRequest/#the-withcredentials-attribute
   *
   * @private {boolean}
   */
  this.withCredentials_ = !!opt_withCredentials;

  // Must break convention of putting the super-class's constructor first. This
  // is because the super-class constructor calls adjustForMinMax, which calls
  // this class' createObject. In this class's implementation, it assumes that
  // there is a headers_, and will lack those if not yet present.
  goog.structs.PriorityPool.call(this, opt_minCount, opt_maxCount);
};
goog.inherits(goog.net.XhrIoPool, goog.structs.PriorityPool);


/**
 * Creates an instance of an XhrIo object to use in the pool.
 * @return {!goog.net.XhrIo} The created object.
 * @override
 */
goog.net.XhrIoPool.prototype.createObject = function() {
  var xhrIo = new goog.net.XhrIo();
  var headers = this.headers_;
  if (headers) {
    headers.forEach(function(value, key) { xhrIo.headers.set(key, value); });
  }
  if (this.withCredentials_) {
    xhrIo.setWithCredentials(true);
  }
  return xhrIo;
};


/**
 * Determine if an object has become unusable and should not be used.
 * @param {Object} obj The object to test.
 * @return {boolean} Whether the object can be reused, which is true if the
 *     object is not disposed and not active.
 * @override
 */
goog.net.XhrIoPool.prototype.objectCanBeReused = function(obj) {
  // An active XhrIo object should never be used.
  var xhr = /** @type {goog.net.XhrIo} */ (obj);
  return !xhr.isDisposed() && !xhr.isActive();
};
