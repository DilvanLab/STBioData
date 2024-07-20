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

// Compiled by ClojureScript 1.9.562 {}
goog.provide('reagent.dom.server');
goog.require('cljs.core');
goog.require('cljsjs.react.dom.server');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.ratom');
goog.require('reagent.interop');
if(typeof reagent.dom.server.imported !== 'undefined'){
} else {
reagent.dom.server.imported = null;
}
reagent.dom.server.module = (function reagent$dom$server$module(){
if(!((reagent.dom.server.imported == null))){
return reagent.dom.server.imported;
} else {
if(typeof ReactDOMServer !== 'undefined'){
return reagent.dom.server.imported = ReactDOMServer;
} else {
if(typeof require !== 'undefined'){
var or__7030__auto__ = reagent.dom.server.imported = require("react-dom/server");
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
throw (new Error("require('react-dom/server') failed"));
}
} else {
throw (new Error("js/ReactDOMServer is missing"));

}
}
}
});
/**
 * Turns a component into an HTML string.
 */
reagent.dom.server.render_to_string = (function reagent$dom$server$render_to_string(component){
reagent.ratom.flush_BANG_.call(null);

var _STAR_non_reactive_STAR_14863 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.module.call(null)["renderToString"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_14863;
}});
/**
 * Turns a component into an HTML string, without data-react-id attributes, etc.
 */
reagent.dom.server.render_to_static_markup = (function reagent$dom$server$render_to_static_markup(component){
reagent.ratom.flush_BANG_.call(null);

var _STAR_non_reactive_STAR_14865 = reagent.impl.util._STAR_non_reactive_STAR_;
reagent.impl.util._STAR_non_reactive_STAR_ = true;

try{return (reagent.dom.server.module.call(null)["renderToStaticMarkup"])(reagent.impl.template.as_element.call(null,component));
}finally {reagent.impl.util._STAR_non_reactive_STAR_ = _STAR_non_reactive_STAR_14865;
}});

//# sourceMappingURL=server.js.map