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
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__7030__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_14870 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_14870){
return (function (){
var _STAR_always_update_STAR_14871 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14871;
}});})(_STAR_always_update_STAR_14870))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_14870;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args14872 = [];
var len__8143__auto___14875 = arguments.length;
var i__8144__auto___14876 = (0);
while(true){
if((i__8144__auto___14876 < len__8143__auto___14875)){
args14872.push((arguments[i__8144__auto___14876]));

var G__14877 = (i__8144__auto___14876 + (1));
i__8144__auto___14876 = G__14877;
continue;
} else {
}
break;
}

var G__14874 = args14872.length;
switch (G__14874) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14872.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__14883_14887 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__14884_14888 = null;
var count__14885_14889 = (0);
var i__14886_14890 = (0);
while(true){
if((i__14886_14890 < count__14885_14889)){
var v_14891 = cljs.core._nth.call(null,chunk__14884_14888,i__14886_14890);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_14891);

var G__14892 = seq__14883_14887;
var G__14893 = chunk__14884_14888;
var G__14894 = count__14885_14889;
var G__14895 = (i__14886_14890 + (1));
seq__14883_14887 = G__14892;
chunk__14884_14888 = G__14893;
count__14885_14889 = G__14894;
i__14886_14890 = G__14895;
continue;
} else {
var temp__4657__auto___14896 = cljs.core.seq.call(null,seq__14883_14887);
if(temp__4657__auto___14896){
var seq__14883_14897__$1 = temp__4657__auto___14896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14883_14897__$1)){
var c__7849__auto___14898 = cljs.core.chunk_first.call(null,seq__14883_14897__$1);
var G__14899 = cljs.core.chunk_rest.call(null,seq__14883_14897__$1);
var G__14900 = c__7849__auto___14898;
var G__14901 = cljs.core.count.call(null,c__7849__auto___14898);
var G__14902 = (0);
seq__14883_14887 = G__14899;
chunk__14884_14888 = G__14900;
count__14885_14889 = G__14901;
i__14886_14890 = G__14902;
continue;
} else {
var v_14903 = cljs.core.first.call(null,seq__14883_14897__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_14903);

var G__14904 = cljs.core.next.call(null,seq__14883_14897__$1);
var G__14905 = null;
var G__14906 = (0);
var G__14907 = (0);
seq__14883_14887 = G__14904;
chunk__14884_14888 = G__14905;
count__14885_14889 = G__14906;
i__14886_14890 = G__14907;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map