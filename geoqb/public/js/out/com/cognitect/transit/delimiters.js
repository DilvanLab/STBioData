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

goog.provide("com.cognitect.transit.delimiters");

goog.scope(function() {

var delimiters = com.cognitect.transit.delimiters;
    
/**
 * @const
 * @type {string}
 */
delimiters.ESC     = "~";

/**
 * @const
 * @type {string}
 */
delimiters.TAG     = "#";

/**
 * @const
 * @type {string}
 */
delimiters.SUB     = "^";

/**
 * @const
 * @type {string}
 */
delimiters.RES     = "`";

/**
 * @const
 * @type {string}
 */
delimiters.ESC_TAG = "~#";

});
