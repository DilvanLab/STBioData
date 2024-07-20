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

goog.provide('goog.string.TypedString');



/**
 * Wrapper for strings that conform to a data type or language.
 *
 * Implementations of this interface are wrappers for strings, and typically
 * associate a type contract with the wrapped string.  Concrete implementations
 * of this interface may choose to implement additional run-time type checking,
 * see for example {@code goog.html.SafeHtml}. If available, client code that
 * needs to ensure type membership of an object should use the type's function
 * to assert type membership, such as {@code goog.html.SafeHtml.unwrap}.
 * @interface
 */
goog.string.TypedString = function() {};


/**
 * Interface marker of the TypedString interface.
 *
 * This property can be used to determine at runtime whether or not an object
 * implements this interface.  All implementations of this interface set this
 * property to {@code true}.
 * @type {boolean}
 */
goog.string.TypedString.prototype.implementsGoogStringTypedString;


/**
 * Retrieves this wrapped string's value.
 * @return {string} The wrapped string's value.
 */
goog.string.TypedString.prototype.getTypedStringValue;
