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

goog.provide('goog.async.WorkItem');
goog.provide('goog.async.WorkQueue');

goog.require('goog.asserts');
goog.require('goog.async.FreeList');


// TODO(johnlenz): generalize the WorkQueue if this is used by more
// than goog.async.run.



/**
 * A low GC workqueue. The key elements of this design:
 *   - avoids the need for goog.bind or equivalent by carrying scope
 *   - avoids the need for array reallocation by using a linked list
 *   - minimizes work entry objects allocation by recycling objects
 * @constructor
 * @final
 * @struct
 */
goog.async.WorkQueue = function() {
  this.workHead_ = null;
  this.workTail_ = null;
};


/** @define {number} The maximum number of entries to keep for recycling. */
goog.define('goog.async.WorkQueue.DEFAULT_MAX_UNUSED', 100);


/** @const @private {goog.async.FreeList<goog.async.WorkItem>} */
goog.async.WorkQueue.freelist_ = new goog.async.FreeList(
    function() { return new goog.async.WorkItem(); },
    function(item) { item.reset(); }, goog.async.WorkQueue.DEFAULT_MAX_UNUSED);


/**
 * @param {function()} fn
 * @param {Object|null|undefined} scope
 */
goog.async.WorkQueue.prototype.add = function(fn, scope) {
  var item = this.getUnusedItem_();
  item.set(fn, scope);

  if (this.workTail_) {
    this.workTail_.next = item;
    this.workTail_ = item;
  } else {
    goog.asserts.assert(!this.workHead_);
    this.workHead_ = item;
    this.workTail_ = item;
  }
};


/**
 * @return {goog.async.WorkItem}
 */
goog.async.WorkQueue.prototype.remove = function() {
  var item = null;

  if (this.workHead_) {
    item = this.workHead_;
    this.workHead_ = this.workHead_.next;
    if (!this.workHead_) {
      this.workTail_ = null;
    }
    item.next = null;
  }
  return item;
};


/**
 * @param {goog.async.WorkItem} item
 */
goog.async.WorkQueue.prototype.returnUnused = function(item) {
  goog.async.WorkQueue.freelist_.put(item);
};


/**
 * @return {goog.async.WorkItem}
 * @private
 */
goog.async.WorkQueue.prototype.getUnusedItem_ = function() {
  return goog.async.WorkQueue.freelist_.get();
};



/**
 * @constructor
 * @final
 * @struct
 */
goog.async.WorkItem = function() {
  /** @type {?function()} */
  this.fn = null;
  /** @type {Object|null|undefined} */
  this.scope = null;
  /** @type {?goog.async.WorkItem} */
  this.next = null;
};


/**
 * @param {function()} fn
 * @param {Object|null|undefined} scope
 */
goog.async.WorkItem.prototype.set = function(fn, scope) {
  this.fn = fn;
  this.scope = scope;
  this.next = null;
};


/** Reset the work item so they don't prevent GC before reuse */
goog.async.WorkItem.prototype.reset = function() {
  this.fn = null;
  this.scope = null;
  this.next = null;
};
