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
 * @fileoverview Datastructure: Priority Queue.
 *
 *
 * This file provides the implementation of a Priority Queue. Smaller priorities
 * move to the front of the queue. If two values have the same priority,
 * it is arbitrary which value will come to the front of the queue first.
 */

// TODO(user): Should this rely on natural ordering via some Comparable
//     interface?


goog.provide('goog.structs.PriorityQueue');

goog.require('goog.structs.Heap');



/**
 * Class for Priority Queue datastructure.
 *
 * @constructor
 * @extends {goog.structs.Heap<number, VALUE>}
 * @template VALUE
 * @final
 */
goog.structs.PriorityQueue = function() {
  goog.structs.Heap.call(this);
};
goog.inherits(goog.structs.PriorityQueue, goog.structs.Heap);


/**
 * Puts the specified value in the queue.
 * @param {number} priority The priority of the value. A smaller value here
 *     means a higher priority.
 * @param {VALUE} value The value.
 */
goog.structs.PriorityQueue.prototype.enqueue = function(priority, value) {
  this.insert(priority, value);
};


/**
 * Retrieves and removes the head of this queue.
 * @return {VALUE} The element at the head of this queue. Returns undefined if
 *     the queue is empty.
 */
goog.structs.PriorityQueue.prototype.dequeue = function() {
  return this.remove();
};
