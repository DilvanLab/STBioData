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
 * @fileoverview Basic strippable logging definitions.
 * @see http://go/closurelogging
 *
 * @author johnlenz@google.com (John Lenz)
 */

goog.provide('goog.log');
goog.provide('goog.log.Level');
goog.provide('goog.log.LogRecord');
goog.provide('goog.log.Logger');

goog.require('goog.debug');
goog.require('goog.debug.LogManager');
goog.require('goog.debug.LogRecord');
goog.require('goog.debug.Logger');


/** @define {boolean} Whether logging is enabled. */
goog.define('goog.log.ENABLED', goog.debug.LOGGING_ENABLED);


/** @const {string} */
goog.log.ROOT_LOGGER_NAME = goog.debug.Logger.ROOT_LOGGER_NAME;



/**
 * @constructor
 * @final
 */
goog.log.Logger = goog.debug.Logger;



/**
 * @constructor
 * @final
 */
goog.log.Level = goog.debug.Logger.Level;



/**
 * @constructor
 * @final
 */
goog.log.LogRecord = goog.debug.LogRecord;


/**
 * Finds or creates a logger for a named subsystem. If a logger has already been
 * created with the given name it is returned. Otherwise a new logger is
 * created. If a new logger is created its log level will be configured based
 * on the goog.debug.LogManager configuration and it will configured to also
 * send logging output to its parent's handlers.
 * @see goog.debug.LogManager
 *
 * @param {string} name A name for the logger. This should be a dot-separated
 *     name and should normally be based on the package name or class name of
 *     the subsystem, such as goog.net.BrowserChannel.
 * @param {goog.log.Level=} opt_level If provided, override the
 *     default logging level with the provided level.
 * @return {goog.log.Logger} The named logger or null if logging is disabled.
 */
goog.log.getLogger = function(name, opt_level) {
  if (goog.log.ENABLED) {
    var logger = goog.debug.LogManager.getLogger(name);
    if (opt_level && logger) {
      logger.setLevel(opt_level);
    }
    return logger;
  } else {
    return null;
  }
};


// TODO(johnlenz): try to tighten the types to these functions.
/**
 * Adds a handler to the logger. This doesn't use the event system because
 * we want to be able to add logging to the event system.
 * @param {goog.log.Logger} logger
 * @param {Function} handler Handler function to add.
 */
goog.log.addHandler = function(logger, handler) {
  if (goog.log.ENABLED && logger) {
    logger.addHandler(handler);
  }
};


/**
 * Removes a handler from the logger. This doesn't use the event system because
 * we want to be able to add logging to the event system.
 * @param {goog.log.Logger} logger
 * @param {Function} handler Handler function to remove.
 * @return {boolean} Whether the handler was removed.
 */
goog.log.removeHandler = function(logger, handler) {
  if (goog.log.ENABLED && logger) {
    return logger.removeHandler(handler);
  } else {
    return false;
  }
};


/**
 * Logs a message. If the logger is currently enabled for the
 * given message level then the given message is forwarded to all the
 * registered output Handler objects.
 * @param {goog.log.Logger} logger
 * @param {goog.log.Level} level One of the level identifiers.
 * @param {goog.debug.Loggable} msg The message to log.
 * @param {Error|Object=} opt_exception An exception associated with the
 *     message.
 */
goog.log.log = function(logger, level, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.log(level, msg, opt_exception);
  }
};


/**
 * Logs a message at the Level.SEVERE level.
 * If the logger is currently enabled for the given message level then the
 * given message is forwarded to all the registered output Handler objects.
 * @param {goog.log.Logger} logger
 * @param {goog.debug.Loggable} msg The message to log.
 * @param {Error=} opt_exception An exception associated with the message.
 */
goog.log.error = function(logger, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.severe(msg, opt_exception);
  }
};


/**
 * Logs a message at the Level.WARNING level.
 * If the logger is currently enabled for the given message level then the
 * given message is forwarded to all the registered output Handler objects.
 * @param {goog.log.Logger} logger
 * @param {goog.debug.Loggable} msg The message to log.
 * @param {Error=} opt_exception An exception associated with the message.
 */
goog.log.warning = function(logger, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.warning(msg, opt_exception);
  }
};


/**
 * Logs a message at the Level.INFO level.
 * If the logger is currently enabled for the given message level then the
 * given message is forwarded to all the registered output Handler objects.
 * @param {goog.log.Logger} logger
 * @param {goog.debug.Loggable} msg The message to log.
 * @param {Error=} opt_exception An exception associated with the message.
 */
goog.log.info = function(logger, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.info(msg, opt_exception);
  }
};


/**
 * Logs a message at the Level.Fine level.
 * If the logger is currently enabled for the given message level then the
 * given message is forwarded to all the registered output Handler objects.
 * @param {goog.log.Logger} logger
 * @param {goog.debug.Loggable} msg The message to log.
 * @param {Error=} opt_exception An exception associated with the message.
 */
goog.log.fine = function(logger, msg, opt_exception) {
  if (goog.log.ENABLED && logger) {
    logger.fine(msg, opt_exception);
  }
};
