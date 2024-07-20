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
 * @fileoverview Provides a base class for custom Error objects such that the
 * stack is correctly maintained.
 *
 * You should never need to throw goog.debug.Error(msg) directly, Error(msg) is
 * sufficient.
 *
 */

goog.provide('goog.debug.Error');



/**
 * Base class for custom error objects.
 * @param {*=} opt_msg The message associated with the error.
 * @constructor
 * @extends {Error}
 */
goog.debug.Error = function(opt_msg) {

  // Attempt to ensure there is a stack trace.
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    var stack = new Error().stack;
    if (stack) {
      this.stack = stack;
    }
  }

  if (opt_msg) {
    this.message = String(opt_msg);
  }

  /**
   * Whether to report this error to the server. Setting this to false will
   * cause the error reporter to not report the error back to the server,
   * which can be useful if the client knows that the error has already been
   * logged on the server.
   * @type {boolean}
   */
  this.reportErrorToServer = true;
};
goog.inherits(goog.debug.Error, Error);


/** @override */
goog.debug.Error.prototype.name = 'CustomError';
