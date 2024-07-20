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
 * @fileoverview Simple freelist.
 *
 * An anterative to goog.structs.SimplePool, it imposes the requirement that the
 * objects in the list contain a "next" property that can be used to maintain
 * the pool.
 */

goog.provide('goog.async.FreeList');


/**
 * @template ITEM
 */
goog.async.FreeList = goog.defineClass(null, {
  /**
   * @param {function():ITEM} create
   * @param {function(ITEM):void} reset
   * @param {number} limit
   */
  constructor: function(create, reset, limit) {
    /** @private @const {number} */
    this.limit_ = limit;
    /** @private @const {function()} */
    this.create_ = create;
    /** @private @const {function(ITEM):void} */
    this.reset_ = reset;

    /** @private {number} */
    this.occupants_ = 0;
    /** @private {ITEM} */
    this.head_ = null;
  },

  /**
   * @return {ITEM}
   */
  get: function() {
    var item;
    if (this.occupants_ > 0) {
      this.occupants_--;
      item = this.head_;
      this.head_ = item.next;
      item.next = null;
    } else {
      item = this.create_();
    }
    return item;
  },

  /**
   * @param {ITEM} item An item available for possible future reuse.
   */
  put: function(item) {
    this.reset_(item);
    if (this.occupants_ < this.limit_) {
      this.occupants_++;
      item.next = this.head_;
      this.head_ = item;
    }
  },

  /**
   * Visible for testing.
   * @package
   * @return {number}
   */
  occupants: function() { return this.occupants_; }
});
