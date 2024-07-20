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
 * @fileoverview Common events for the network classes.
 */


goog.provide('goog.net.EventType');


/**
 * Event names for network events
 * @enum {string}
 */
goog.net.EventType = {
  COMPLETE: 'complete',
  SUCCESS: 'success',
  ERROR: 'error',
  ABORT: 'abort',
  READY: 'ready',
  READY_STATE_CHANGE: 'readystatechange',
  TIMEOUT: 'timeout',
  INCREMENTAL_DATA: 'incrementaldata',
  PROGRESS: 'progress',
  // DOWNLOAD_PROGRESS and UPLOAD_PROGRESS are special events dispatched by
  // goog.net.XhrIo to allow binding listeners specific to each type of
  // progress.
  DOWNLOAD_PROGRESS: 'downloadprogress',
  UPLOAD_PROGRESS: 'uploadprogress'
};
