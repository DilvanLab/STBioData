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
 * @fileoverview Utilities for adding, removing and setting values in
 * an Element's dataset.
 * See {@link http://www.w3.org/TR/html5/Overview.html#dom-dataset}.
 *
 * @author nicksay@google.com (Alex Nicksay)
 */

goog.provide('goog.dom.dataset');

goog.require('goog.labs.userAgent.browser');
goog.require('goog.string');
goog.require('goog.userAgent.product');


/**
 * Whether using the dataset property is allowed.
 *
 * In IE (up to and including IE 11), setting element.dataset in JS does not
 * propagate values to CSS, breaking expressions such as
 * `content: attr(data-content)` that would otherwise work.
 * See {@link https://github.com/google/closure-library/issues/396}.
 *
 * In Safari >= 9, reading from element.dataset sometimes returns
 * undefined, even though the corresponding data- attribute has a value.
 * See {@link https://bugs.webkit.org/show_bug.cgi?id=161454}.
 * @const
 * @private
 */
goog.dom.dataset.ALLOWED_ =
    !goog.userAgent.product.IE && !goog.labs.userAgent.browser.isSafari();


/**
 * The DOM attribute name prefix that must be present for it to be considered
 * for a dataset.
 * @type {string}
 * @const
 * @private
 */
goog.dom.dataset.PREFIX_ = 'data-';


/**
 * Sets a custom data attribute on an element. The key should be
 * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
 * @param {Element} element DOM node to set the custom data attribute on.
 * @param {string} key Key for the custom data attribute.
 * @param {string} value Value for the custom data attribute.
 */
goog.dom.dataset.set = function(element, key, value) {
  if (goog.dom.dataset.ALLOWED_ && element.dataset) {
    element.dataset[key] = value;
  } else {
    element.setAttribute(
        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key), value);
  }
};


/**
 * Gets a custom data attribute from an element. The key should be
 * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
 * @param {Element} element DOM node to get the custom data attribute from.
 * @param {string} key Key for the custom data attribute.
 * @return {?string} The attribute value, if it exists.
 */
goog.dom.dataset.get = function(element, key) {
  if (goog.dom.dataset.ALLOWED_ && element.dataset) {
    // Android browser (non-chrome) returns the empty string for
    // element.dataset['doesNotExist'].
    if (!(key in element.dataset)) {
      return null;
    }
    return element.dataset[key];
  } else {
    return element.getAttribute(
        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));
  }
};


/**
 * Removes a custom data attribute from an element. The key should be
  * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
 * @param {Element} element DOM node to get the custom data attribute from.
 * @param {string} key Key for the custom data attribute.
 */
goog.dom.dataset.remove = function(element, key) {
  if (goog.dom.dataset.ALLOWED_ && element.dataset) {
    // In strict mode Safari will trigger an error when trying to delete a
    // property which does not exist.
    if (goog.dom.dataset.has(element, key)) {
      delete element.dataset[key];
    }
  } else {
    element.removeAttribute(
        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));
  }
};


/**
 * Checks whether custom data attribute exists on an element. The key should be
 * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
 *
 * @param {Element} element DOM node to get the custom data attribute from.
 * @param {string} key Key for the custom data attribute.
 * @return {boolean} Whether the attribute exists.
 */
goog.dom.dataset.has = function(element, key) {
  if (goog.dom.dataset.ALLOWED_ && element.dataset) {
    return key in element.dataset;
  } else if (element.hasAttribute) {
    return element.hasAttribute(
        goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key));
  } else {
    return !!(
        element.getAttribute(
            goog.dom.dataset.PREFIX_ + goog.string.toSelectorCase(key)));
  }
};


/**
 * Gets all custom data attributes as a string map.  The attribute names will be
 * camel cased (e.g., data-foo-bar -> dataset['fooBar']).  This operation is not
 * safe for attributes having camel-cased names clashing with already existing
 * properties (e.g., data-to-string -> dataset['toString']).
 * @param {!Element} element DOM node to get the data attributes from.
 * @return {!Object} The string map containing data attributes and their
 *     respective values.
 */
goog.dom.dataset.getAll = function(element) {
  if (goog.dom.dataset.ALLOWED_ && element.dataset) {
    return element.dataset;
  } else {
    var dataset = {};
    var attributes = element.attributes;
    for (var i = 0; i < attributes.length; ++i) {
      var attribute = attributes[i];
      if (goog.string.startsWith(attribute.name, goog.dom.dataset.PREFIX_)) {
        // We use substr(5), since it's faster than replacing 'data-' with ''.
        var key = goog.string.toCamelCase(attribute.name.substr(5));
        dataset[key] = attribute.value;
      }
    }
    return dataset;
  }
};
