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

goog.provide('goog.promise.Resolver');



/**
 * Resolver interface for promises. The resolver is a convenience interface that
 * bundles the promise and its associated resolve and reject functions together,
 * for cases where the resolver needs to be persisted internally.
 *
 * @interface
 * @template TYPE
 */
goog.promise.Resolver = function() {};


/**
 * The promise that created this resolver.
 * @type {!goog.Promise<TYPE>}
 */
goog.promise.Resolver.prototype.promise;


/**
 * Resolves this resolver with the specified value.
 * @type {function((TYPE|goog.Promise<TYPE>|Thenable)=)}
 */
goog.promise.Resolver.prototype.resolve;


/**
 * Rejects this resolver with the specified reason.
 * @type {function(*=): void}
 */
goog.promise.Resolver.prototype.reject;
