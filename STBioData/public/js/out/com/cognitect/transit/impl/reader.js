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

goog.provide("com.cognitect.transit.impl.reader");
goog.require("com.cognitect.transit.impl.decoder");
goog.require("com.cognitect.transit.caching");

goog.scope(function () {

    var reader  = com.cognitect.transit.impl.reader,
        decoder = com.cognitect.transit.impl.decoder,
        caching = com.cognitect.transit.caching;

    /**
     * A JSON unmarshaller
     * @constructor
     */
    reader.JSONUnmarshaller = function Transit$JSONUnmarshaller(opts) {
        this.decoder = new decoder.Decoder(opts);
    };

    /**
     * @param {string} str a JSON string
     * @param {caching.ReadCache} cache a read cache
     * @returns {*}
     */
    reader.JSONUnmarshaller.prototype.unmarshal = function (str, cache) {
        return this.decoder.decode(JSON.parse(str), cache);
    };

    /**
     * A transit reader
     * @constructor
     * @param {reader.JSONUnmarshaller} unmarshaller
     * @param {Object=} options
     */
    reader.Reader = function Transit$Reader(unmarshaller, options) {
        this.unmarshaller = unmarshaller;
        this.options = options || {};
        this.cache = this.options["cache"] ? this.options["cache"] : new caching.ReadCache();
    };

    /**
     * @param {string} str a string to be read
     * @returns {*}
     */
    reader.Reader.prototype.read = function (str) {
        var ret = this.unmarshaller.unmarshal(str, this.cache)
        this.cache.clear();
        return ret;
    };
    reader.Reader.prototype["read"] = reader.Reader.prototype.read;

});
