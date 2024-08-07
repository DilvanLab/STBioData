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
 * @fileoverview Datastructure: Queue.
 *
 *
 * This file provides the implementation of a FIFO Queue structure.
 * API is similar to that of com.google.common.collect.IntQueue
 *
 * The implementation is a classic 2-stack queue.
 * There's a "front" stack and a "back" stack.
 * Items are pushed onto "back" and popped from "front".
 * When "front" is empty, we replace "front" with reverse(back).
 *
 * Example:
 * front                         back            op
 * []                            []              enqueue 1
 * []                            [1]             enqueue 2
 * []                            [1,2]           enqueue 3
 * []                            [1,2,3]         dequeue -> ...
 * [3,2,1]                       []              ... -> 1
 * [3,2]                         []              enqueue 4
 * [3,2]                         [4]             dequeue -> 2
 * [3]                           [4]
 *
 * Front and back are simple javascript arrays. We rely on
 * Array.push and Array.pop being O(1) amortized.
 *
 * Note: In V8, queues, up to a certain size, can be implemented
 * just fine using Array.push and Array.shift, but other JavaScript
 * engines do not have the optimization of Array.shift.
 *
 */

goog.provide('goog.structs.Queue');

goog.require('goog.array');



/**
 * Class for FIFO Queue data structure.
 *
 * @constructor
 * @template T
 */
goog.structs.Queue = function() {
  /**
   * @private {!Array<T>} Front stack. Items are pop()'ed from here.
   */
  this.front_ = [];
  /**
   * @private {!Array<T>} Back stack. Items are push()'ed here.
   */
  this.back_ = [];
};


/**
 * Flips the back stack onto the front stack if front is empty,
 * to prepare for peek() or dequeue().
 *
 * @private
 */
goog.structs.Queue.prototype.maybeFlip_ = function() {
  if (goog.array.isEmpty(this.front_)) {
    this.front_ = this.back_;
    this.front_.reverse();
    this.back_ = [];
  }
};


/**
 * Puts the specified element on this queue.
 * @param {T} element The element to be added to the queue.
 */
goog.structs.Queue.prototype.enqueue = function(element) {
  this.back_.push(element);
};


/**
 * Retrieves and removes the head of this queue.
 * @return {T} The element at the head of this queue. Returns undefined if the
 *     queue is empty.
 */
goog.structs.Queue.prototype.dequeue = function() {
  this.maybeFlip_();
  return this.front_.pop();
};


/**
 * Retrieves but does not remove the head of this queue.
 * @return {T} The element at the head of this queue. Returns undefined if the
 *     queue is empty.
 */
goog.structs.Queue.prototype.peek = function() {
  this.maybeFlip_();
  return goog.array.peek(this.front_);
};


/**
 * Returns the number of elements in this queue.
 * @return {number} The number of elements in this queue.
 */
goog.structs.Queue.prototype.getCount = function() {
  return this.front_.length + this.back_.length;
};


/**
 * Returns true if this queue contains no elements.
 * @return {boolean} true if this queue contains no elements.
 */
goog.structs.Queue.prototype.isEmpty = function() {
  return goog.array.isEmpty(this.front_) && goog.array.isEmpty(this.back_);
};


/**
 * Removes all elements from the queue.
 */
goog.structs.Queue.prototype.clear = function() {
  this.front_ = [];
  this.back_ = [];
};


/**
 * Returns true if the given value is in the queue.
 * @param {T} obj The value to look for.
 * @return {boolean} Whether the object is in the queue.
 */
goog.structs.Queue.prototype.contains = function(obj) {
  return goog.array.contains(this.front_, obj) ||
      goog.array.contains(this.back_, obj);
};


/**
 * Removes the first occurrence of a particular value from the queue.
 * @param {T} obj Object to remove.
 * @return {boolean} True if an element was removed.
 */
goog.structs.Queue.prototype.remove = function(obj) {
  return goog.array.removeLast(this.front_, obj) ||
      goog.array.remove(this.back_, obj);
};


/**
 * Returns all the values in the queue.
 * @return {!Array<T>} An array of the values in the queue.
 */
goog.structs.Queue.prototype.getValues = function() {
  var res = [];
  // Add the front array in reverse, then the back array.
  for (var i = this.front_.length - 1; i >= 0; --i) {
    res.push(this.front_[i]);
  }
  var len = this.back_.length;
  for (var i = 0; i < len; ++i) {
    res.push(this.back_[i]);
  }
  return res;
};
