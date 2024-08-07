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
 * @fileoverview Error codes shared between goog.net.IframeIo and
 * goog.net.XhrIo.
 */

goog.provide('goog.net.ErrorCode');


/**
 * Error codes
 * @enum {number}
 */
goog.net.ErrorCode = {

  /**
   * There is no error condition.
   */
  NO_ERROR: 0,

  /**
   * The most common error from iframeio, unfortunately, is that the browser
   * responded with an error page that is classed as a different domain. The
   * situations, are when a browser error page  is shown -- 404, access denied,
   * DNS failure, connection reset etc.)
   *
   */
  ACCESS_DENIED: 1,

  /**
   * Currently the only case where file not found will be caused is when the
   * code is running on the local file system and a non-IE browser makes a
   * request to a file that doesn't exist.
   */
  FILE_NOT_FOUND: 2,

  /**
   * If Firefox shows a browser error page, such as a connection reset by
   * server or access denied, then it will fail silently without the error or
   * load handlers firing.
   */
  FF_SILENT_ERROR: 3,

  /**
   * Custom error provided by the client through the error check hook.
   */
  CUSTOM_ERROR: 4,

  /**
   * Exception was thrown while processing the request.
   */
  EXCEPTION: 5,

  /**
   * The Http response returned a non-successful http status code.
   */
  HTTP_ERROR: 6,

  /**
   * The request was aborted.
   */
  ABORT: 7,

  /**
   * The request timed out.
   */
  TIMEOUT: 8,

  /**
   * The resource is not available offline.
   */
  OFFLINE: 9
};


/**
 * Returns a friendly error message for an error code. These messages are for
 * debugging and are not localized.
 * @param {goog.net.ErrorCode} errorCode An error code.
 * @return {string} A message for debugging.
 */
goog.net.ErrorCode.getDebugMessage = function(errorCode) {
  switch (errorCode) {
    case goog.net.ErrorCode.NO_ERROR:
      return 'No Error';

    case goog.net.ErrorCode.ACCESS_DENIED:
      return 'Access denied to content document';

    case goog.net.ErrorCode.FILE_NOT_FOUND:
      return 'File not found';

    case goog.net.ErrorCode.FF_SILENT_ERROR:
      return 'Firefox silently errored';

    case goog.net.ErrorCode.CUSTOM_ERROR:
      return 'Application custom error';

    case goog.net.ErrorCode.EXCEPTION:
      return 'An exception occurred';

    case goog.net.ErrorCode.HTTP_ERROR:
      return 'Http response at 400 or 500 level';

    case goog.net.ErrorCode.ABORT:
      return 'Request was aborted';

    case goog.net.ErrorCode.TIMEOUT:
      return 'Request timed out';

    case goog.net.ErrorCode.OFFLINE:
      return 'The resource is not available offline';

    default:
      return 'Unrecognized error code';
  }
};
