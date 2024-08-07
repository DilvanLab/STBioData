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
 * @fileoverview Detects the specific browser and not just the rendering engine.
 *
 */

goog.provide('goog.userAgent.product');

goog.require('goog.labs.userAgent.browser');
goog.require('goog.labs.userAgent.platform');
goog.require('goog.userAgent');


/**
 * @define {boolean} Whether the code is running on the Firefox web browser.
 */
goog.define('goog.userAgent.product.ASSUME_FIREFOX', false);


/**
 * @define {boolean} Whether we know at compile-time that the product is an
 *     iPhone.
 */
goog.define('goog.userAgent.product.ASSUME_IPHONE', false);


/**
 * @define {boolean} Whether we know at compile-time that the product is an
 *     iPad.
 */
goog.define('goog.userAgent.product.ASSUME_IPAD', false);


/**
 * @define {boolean} Whether we know at compile-time that the product is an
 *     AOSP browser or WebView inside a pre KitKat Android phone or tablet.
 */
goog.define('goog.userAgent.product.ASSUME_ANDROID', false);


/**
 * @define {boolean} Whether the code is running on the Chrome web browser on
 * any platform or AOSP browser or WebView in a KitKat+ Android phone or tablet.
 */
goog.define('goog.userAgent.product.ASSUME_CHROME', false);


/**
 * @define {boolean} Whether the code is running on the Safari web browser.
 */
goog.define('goog.userAgent.product.ASSUME_SAFARI', false);


/**
 * Whether we know the product type at compile-time.
 * @type {boolean}
 * @private
 */
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE ||
    goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA ||
    goog.userAgent.product.ASSUME_FIREFOX ||
    goog.userAgent.product.ASSUME_IPHONE ||
    goog.userAgent.product.ASSUME_IPAD ||
    goog.userAgent.product.ASSUME_ANDROID ||
    goog.userAgent.product.ASSUME_CHROME ||
    goog.userAgent.product.ASSUME_SAFARI;


/**
 * Whether the code is running on the Opera web browser.
 * @type {boolean}
 */
goog.userAgent.product.OPERA = goog.userAgent.OPERA;


/**
 * Whether the code is running on an IE web browser.
 * @type {boolean}
 */
goog.userAgent.product.IE = goog.userAgent.IE;


/**
 * Whether the code is running on an Edge web browser.
 * @type {boolean}
 */
goog.userAgent.product.EDGE = goog.userAgent.EDGE;


/**
 * Whether the code is running on the Firefox web browser.
 * @type {boolean}
 */
goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ?
    goog.userAgent.product.ASSUME_FIREFOX :
    goog.labs.userAgent.browser.isFirefox();


/**
 * Whether the user agent is an iPhone or iPod (as in iPod touch).
 * @return {boolean}
 * @private
 */
goog.userAgent.product.isIphoneOrIpod_ = function() {
  return goog.labs.userAgent.platform.isIphone() ||
      goog.labs.userAgent.platform.isIpod();
};


/**
 * Whether the code is running on an iPhone or iPod touch.
 *
 * iPod touch is considered an iPhone for legacy reasons.
 * @type {boolean}
 */
goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ?
    goog.userAgent.product.ASSUME_IPHONE :
    goog.userAgent.product.isIphoneOrIpod_();


/**
 * Whether the code is running on an iPad.
 * @type {boolean}
 */
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ?
    goog.userAgent.product.ASSUME_IPAD :
    goog.labs.userAgent.platform.isIpad();


/**
 * Whether the code is running on AOSP browser or WebView inside
 * a pre KitKat Android phone or tablet.
 * @type {boolean}
 */
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ?
    goog.userAgent.product.ASSUME_ANDROID :
    goog.labs.userAgent.browser.isAndroidBrowser();


/**
 * Whether the code is running on the Chrome web browser on any platform
 * or AOSP browser or WebView in a KitKat+ Android phone or tablet.
 * @type {boolean}
 */
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ?
    goog.userAgent.product.ASSUME_CHROME :
    goog.labs.userAgent.browser.isChrome();


/**
 * @return {boolean} Whether the browser is Safari on desktop.
 * @private
 */
goog.userAgent.product.isSafariDesktop_ = function() {
  return goog.labs.userAgent.browser.isSafari() &&
      !goog.labs.userAgent.platform.isIos();
};


/**
 * Whether the code is running on the desktop Safari web browser.
 * Note: the legacy behavior here is only true for Safari not running
 * on iOS.
 * @type {boolean}
 */
goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ?
    goog.userAgent.product.ASSUME_SAFARI :
    goog.userAgent.product.isSafariDesktop_();
