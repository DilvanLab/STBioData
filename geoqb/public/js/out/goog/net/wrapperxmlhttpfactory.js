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
 * @fileoverview Implementation of XmlHttpFactory which allows construction from
 * simple factory methods.
 * @author dbk@google.com (David Barrett-Kahn)
 */

goog.provide('goog.net.WrapperXmlHttpFactory');

/** @suppress {extraRequire} Typedef. */
goog.require('goog.net.XhrLike');
goog.require('goog.net.XmlHttpFactory');



/**
 * An xhr factory subclass which can be constructed using two factory methods.
 * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()
 * with an unchanged signature.
 * @param {function():!goog.net.XhrLike.OrNative} xhrFactory
 *     A function which returns a new XHR object.
 * @param {function():!Object} optionsFactory A function which returns the
 *     options associated with xhr objects from this factory.
 * @extends {goog.net.XmlHttpFactory}
 * @constructor
 * @final
 */
goog.net.WrapperXmlHttpFactory = function(xhrFactory, optionsFactory) {
  goog.net.XmlHttpFactory.call(this);

  /**
   * XHR factory method.
   * @type {function() : !goog.net.XhrLike.OrNative}
   * @private
   */
  this.xhrFactory_ = xhrFactory;

  /**
   * Options factory method.
   * @type {function() : !Object}
   * @private
   */
  this.optionsFactory_ = optionsFactory;
};
goog.inherits(goog.net.WrapperXmlHttpFactory, goog.net.XmlHttpFactory);


/** @override */
goog.net.WrapperXmlHttpFactory.prototype.createInstance = function() {
  return this.xhrFactory_();
};


/** @override */
goog.net.WrapperXmlHttpFactory.prototype.getOptions = function() {
  return this.optionsFactory_();
};
