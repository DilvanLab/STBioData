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
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__32213__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32213 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32214__i = 0, G__32214__a = new Array(arguments.length -  0);
while (G__32214__i < G__32214__a.length) {G__32214__a[G__32214__i] = arguments[G__32214__i + 0]; ++G__32214__i;}
  args = new cljs.core.IndexedSeq(G__32214__a,0,null);
} 
return G__32213__delegate.call(this,args);};
G__32213.cljs$lang$maxFixedArity = 0;
G__32213.cljs$lang$applyTo = (function (arglist__32215){
var args = cljs.core.seq(arglist__32215);
return G__32213__delegate(args);
});
G__32213.cljs$core$IFn$_invoke$arity$variadic = G__32213__delegate;
return G__32213;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__32216__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__32216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32217__i = 0, G__32217__a = new Array(arguments.length -  0);
while (G__32217__i < G__32217__a.length) {G__32217__a[G__32217__i] = arguments[G__32217__i + 0]; ++G__32217__i;}
  args = new cljs.core.IndexedSeq(G__32217__a,0,null);
} 
return G__32216__delegate.call(this,args);};
G__32216.cljs$lang$maxFixedArity = 0;
G__32216.cljs$lang$applyTo = (function (arglist__32218){
var args = cljs.core.seq(arglist__32218);
return G__32216__delegate(args);
});
G__32216.cljs$core$IFn$_invoke$arity$variadic = G__32216__delegate;
return G__32216;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1502108316771