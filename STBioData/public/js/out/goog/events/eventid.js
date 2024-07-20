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

goog.provide('goog.events.EventId');



/**
 * A templated class that is used when registering for events. Typical usage:
 *
 *    /** @type {goog.events.EventId<MyEventObj>} *\
 *    var myEventId = new goog.events.EventId(
 *        goog.events.getUniqueId(('someEvent'));
 *
 *    // No need to cast or declare here since the compiler knows the
 *    // correct type of 'evt' (MyEventObj).
 *    something.listen(myEventId, function(evt) {});
 *
 * @param {string} eventId
 * @template T
 * @constructor
 * @struct
 * @final
 */
goog.events.EventId = function(eventId) {
  /** @const */ this.id = eventId;
};


/**
 * @override
 */
goog.events.EventId.prototype.toString = function() {
  return this.id;
};
