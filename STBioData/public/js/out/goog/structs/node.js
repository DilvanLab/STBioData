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
 * @fileoverview Generic immutable node object to be used in collections.
 *
 */


goog.provide('goog.structs.Node');



/**
 * A generic immutable node. This can be used in various collections that
 * require a node object for its item (such as a heap).
 * @param {K} key Key.
 * @param {V} value Value.
 * @constructor
 * @template K, V
 */
goog.structs.Node = function(key, value) {
  /**
   * The key.
   * @private {K}
   */
  this.key_ = key;

  /**
   * The value.
   * @private {V}
   */
  this.value_ = value;
};


/**
 * Gets the key.
 * @return {K} The key.
 */
goog.structs.Node.prototype.getKey = function() {
  return this.key_;
};


/**
 * Gets the value.
 * @return {V} The value.
 */
goog.structs.Node.prototype.getValue = function() {
  return this.value_;
};


/**
 * Clones a node and returns a new node.
 * @return {!goog.structs.Node<K, V>} A new goog.structs.Node with the same
 *     key value pair.
 */
goog.structs.Node.prototype.clone = function() {
  return new goog.structs.Node(this.key_, this.value_);
};
