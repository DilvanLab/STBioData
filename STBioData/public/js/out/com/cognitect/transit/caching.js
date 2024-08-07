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

goog.provide("com.cognitect.transit.caching");
goog.require("com.cognitect.transit.delimiters");

goog.scope(function() {

var caching = com.cognitect.transit.caching,
    d       = com.cognitect.transit.delimiters;

/**
 * @const
 * @type {number}
 */
caching.MIN_SIZE_CACHEABLE = 3;

/**
 * @const
 * @type {number}
 */
caching.BASE_CHAR_IDX = 48;

/**
 * @const
 * @type {number}
 */
caching.CACHE_CODE_DIGITS = 44;

/**
 * @const
 * @type {number}
 */
caching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS*caching.CACHE_CODE_DIGITS;

/**
 * @const
 * @type {number}
 */
caching.MAX_CACHE_SIZE = 4096;

caching.isCacheable = function(string, asMapKey) {
    if(string.length > caching.MIN_SIZE_CACHEABLE) {
        if(asMapKey) {
            return true;
        } else {
            var c0 = string.charAt(0),
                c1 = string.charAt(1);
            if(c0 === d.ESC) {
                return c1 === ":" || c1 === "$" || c1 === "#";
            } else {
                return false;
            }
        }
    } else {
        return false;
    }
};

// =============================================================================
// WriteCache

caching.idxToCode = function(idx) {
    var hi  = Math.floor(idx / caching.CACHE_CODE_DIGITS),
        lo  = idx % caching.CACHE_CODE_DIGITS,
        loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX)
    if(hi === 0) {
        return d.SUB + loc;
    } else {
        return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;
    }
};

/**
 * @constructor
 */
caching.WriteCache = function() {
    this.idx = 0;
    this.gen = 0;
    this.cacheSize = 0;
    this.cache = {};
};

caching.WriteCache.prototype.write = function(string, asMapKey) {
    if(caching.isCacheable(string, asMapKey)) {
        if(this.cacheSize === caching.MAX_CACHE_SIZE) {
            this.clear();
            this.gen = 0;
            this.cache = {};
        } else if(this.idx === caching.MAX_CACHE_ENTRIES) {
            this.clear();
        }
        var entry = this.cache[string];
        if(entry == null) {
            this.cache[string] = [caching.idxToCode(this.idx), this.gen];
            this.idx++;
            return string;
        } else if(entry[1] != this.gen) {
            entry[1] = this.gen;
            entry[0] = caching.idxToCode(this.idx);
            this.idx++;
            return string;
        } else {
            return entry[0];
        }
    } else {
        return string;
    }
};

caching.WriteCache.prototype.clear = function Transit$WriteCache() {
    this.idx = 0;
    this.gen++;
};

caching.writeCache = function() {
    return new caching.WriteCache();
};

// =============================================================================
// ReadCache

caching.isCacheCode = function(string) {
    return (string.charAt(0) === d.SUB) && (string.charAt(1) !== " ");
};

caching.codeToIdx = function(code) {
    if(code.length === 2) {
        return code.charCodeAt(1) - caching.BASE_CHAR_IDX;        
    } else {
        var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS,
            lo = (code.charCodeAt(2) - caching.BASE_CHAR_IDX);
        return hi + lo; 
    }
};

/**
 * @constructor
 */
caching.ReadCache = function Transit$ReadCache() {
    this.idx = 0;
    this.cache = [];
};

caching.ReadCache.prototype.write = function(obj, asMapKey) {
    if(this.idx == caching.MAX_CACHE_ENTRIES) {
        this.idx = 0;
    }
    this.cache[this.idx] = obj;
    this.idx++;
    return obj;
};

caching.ReadCache.prototype.read = function(string, asMapKey) {
    return this.cache[caching.codeToIdx(string)];
};

caching.ReadCache.prototype.clear = function() {
    this.idx = 0;
};

caching.readCache = function() {
    return new caching.ReadCache();
};

});    
