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
 * @fileoverview Interface for a factory for creating XMLHttpRequest objects
 * and metadata about them.
 * @author dbk@google.com (David Barrett-Kahn)
 */

goog.provide('goog.net.XmlHttpFactory');

/** @suppress {extraRequire} Typedef. */
goog.require('goog.net.XhrLike');



/**
 * Abstract base class for an XmlHttpRequest factory.
 * @constructor
 */
goog.net.XmlHttpFactory = function() {};


/**
 * Cache of options - we only actually call internalGetOptions once.
 * @type {Object}
 * @private
 */
goog.net.XmlHttpFactory.prototype.cachedOptions_ = null;


/**
 * @return {!goog.net.XhrLike.OrNative} A new XhrLike instance.
 */
goog.net.XmlHttpFactory.prototype.createInstance = goog.abstractMethod;


/**
 * @return {Object} Options describing how xhr objects obtained from this
 *     factory should be used.
 */
goog.net.XmlHttpFactory.prototype.getOptions = function() {
  return this.cachedOptions_ ||
      (this.cachedOptions_ = this.internalGetOptions());
};


/**
 * Override this method in subclasses to preserve the caching offered by
 * getOptions().
 * @return {Object} Options describing how xhr objects obtained from this
 *     factory should be used.
 * @protected
 */
goog.net.XmlHttpFactory.prototype.internalGetOptions = goog.abstractMethod;
