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
goog.provide('cljs_react_material_ui.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('clojure.walk');
goog.require('sablono.util');
cljs_react_material_ui.core.transform_keys = (function cljs_react_material_ui$core$transform_keys(t,coll){

var transform = (function cljs_react_material_ui$core$transform_keys_$_transform(p__9525){
var vec__9529 = p__9525;
var k = cljs.core.nth.call(null,vec__9529,(0),null);
var v = cljs.core.nth.call(null,vec__9529,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t.call(null,k),v], null);
});
return clojure.walk.postwalk.call(null,(function (x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,transform,x));
} else {
return x;
}
}),coll);
});
cljs_react_material_ui.core.props_kebab__GT_camel__GT_js = cljs.core.comp.call(null,cljs.core.clj__GT_js,sablono.util.camel_case_keys);
cljs_react_material_ui.core.create_mui_cmp = (function cljs_react_material_ui$core$create_mui_cmp(var_args){
var args9532 = [];
var len__8143__auto___9535 = arguments.length;
var i__8144__auto___9536 = (0);
while(true){
if((i__8144__auto___9536 < len__8143__auto___9535)){
args9532.push((arguments[i__8144__auto___9536]));

var G__9537 = (i__8144__auto___9536 + (1));
i__8144__auto___9536 = G__9537;
continue;
} else {
}
break;
}

var G__9534 = args9532.length;
switch (G__9534) {
case 2:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9532.length)].join('')));

}
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$2 = (function (react_class,args){
var first_arg = cljs.core.first.call(null,args);
var args__$1 = (((cljs.core.map_QMARK_.call(null,first_arg)) || ((first_arg == null)))?args:cljs.core.cons.call(null,cljs.core.PersistentArrayMap.EMPTY,args));
return cljs.core.apply.call(null,React.createElement,react_class,cljs_react_material_ui.core.props_kebab__GT_camel__GT_js.call(null,cljs.core.first.call(null,args__$1)),cljs.core.rest.call(null,args__$1));
});

cljs_react_material_ui.core.create_mui_cmp.cljs$core$IFn$_invoke$arity$3 = (function (root_obj,type,args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,(root_obj[type]),args);
});

cljs_react_material_ui.core.create_mui_cmp.cljs$lang$maxFixedArity = 3;

cljs_react_material_ui.core.get_mui_theme = (function cljs_react_material_ui$core$get_mui_theme(var_args){
var args9539 = [];
var len__8143__auto___9542 = arguments.length;
var i__8144__auto___9543 = (0);
while(true){
if((i__8144__auto___9543 < len__8143__auto___9542)){
args9539.push((arguments[i__8144__auto___9543]));

var G__9544 = (i__8144__auto___9543 + (1));
i__8144__auto___9543 = G__9544;
continue;
} else {
}
break;
}

var G__9541 = args9539.length;
switch (G__9541) {
case 0:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9539.length)].join('')));

}
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_react_material_ui.core.get_mui_theme.call(null,null);
});

cljs_react_material_ui.core.get_mui_theme.cljs$core$IFn$_invoke$arity$1 = (function (raw_theme){
return MaterialUIStyles.getMuiTheme(cljs.core.clj__GT_js.call(null,cljs_react_material_ui.core.transform_keys.call(null,sablono.util.camel_case,raw_theme)));
});

cljs_react_material_ui.core.get_mui_theme.cljs$lang$maxFixedArity = 1;

cljs_react_material_ui.core.color = (function cljs_react_material_ui$core$color(color_key){
return (MaterialUIStyles["colors"][cljs.core.name.call(null,sablono.util.camel_case.call(null,color_key))]);
});
cljs_react_material_ui.core.make_selectable = (MaterialUI["makeSelectable"]);
cljs_react_material_ui.core.create_mui_el = cljs.core.partial.call(null,cljs_react_material_ui.core.create_mui_cmp,MaterialUI);
cljs_react_material_ui.core.css_transition_group = (function cljs_react_material_ui$core$css_transition_group(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9547 = arguments.length;
var i__8144__auto___9548 = (0);
while(true){
if((i__8144__auto___9548 < len__8143__auto___9547)){
args__8150__auto__.push((arguments[i__8144__auto___9548]));

var G__9549 = (i__8144__auto___9548 + (1));
i__8144__auto___9548 = G__9549;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"CSSTransitionGroup",args);
});

cljs_react_material_ui.core.css_transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.css_transition_group.cljs$lang$applyTo = (function (seq9546){
return cljs_react_material_ui.core.css_transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9546));
});

cljs_react_material_ui.core.transition_group = (function cljs_react_material_ui$core$transition_group(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9551 = arguments.length;
var i__8144__auto___9552 = (0);
while(true){
if((i__8144__auto___9552 < len__8143__auto___9551)){
args__8150__auto__.push((arguments[i__8144__auto___9552]));

var G__9553 = (i__8144__auto___9552 + (1));
i__8144__auto___9552 = G__9553;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,React.addons,"TransitionGroup",args);
});

cljs_react_material_ui.core.transition_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.transition_group.cljs$lang$applyTo = (function (seq9550){
return cljs_react_material_ui.core.transition_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9550));
});

cljs_react_material_ui.core.selectable_list = (function cljs_react_material_ui$core$selectable_list(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9555 = arguments.length;
var i__8144__auto___9556 = (0);
while(true){
if((i__8144__auto___9556 < len__8143__auto___9555)){
args__8150__auto__.push((arguments[i__8144__auto___9556]));

var G__9557 = (i__8144__auto___9556 + (1));
i__8144__auto___9556 = G__9557;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_cmp.call(null,cljs_react_material_ui.core.make_selectable.call(null,(MaterialUI["List"])),args);
});

cljs_react_material_ui.core.selectable_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.selectable_list.cljs$lang$applyTo = (function (seq9554){
return cljs_react_material_ui.core.selectable_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9554));
});

cljs_react_material_ui.core.app_bar = (function cljs_react_material_ui$core$app_bar(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9559 = arguments.length;
var i__8144__auto___9560 = (0);
while(true){
if((i__8144__auto___9560 < len__8143__auto___9559)){
args__8150__auto__.push((arguments[i__8144__auto___9560]));

var G__9561 = (i__8144__auto___9560 + (1));
i__8144__auto___9560 = G__9561;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AppBar",args);
});

cljs_react_material_ui.core.app_bar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.app_bar.cljs$lang$applyTo = (function (seq9558){
return cljs_react_material_ui.core.app_bar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9558));
});

cljs_react_material_ui.core.auto_complete = (function cljs_react_material_ui$core$auto_complete(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9563 = arguments.length;
var i__8144__auto___9564 = (0);
while(true){
if((i__8144__auto___9564 < len__8143__auto___9563)){
args__8150__auto__.push((arguments[i__8144__auto___9564]));

var G__9565 = (i__8144__auto___9564 + (1));
i__8144__auto___9564 = G__9565;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"AutoComplete",args);
});

cljs_react_material_ui.core.auto_complete.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.auto_complete.cljs$lang$applyTo = (function (seq9562){
return cljs_react_material_ui.core.auto_complete.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9562));
});

cljs_react_material_ui.core.avatar = (function cljs_react_material_ui$core$avatar(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9567 = arguments.length;
var i__8144__auto___9568 = (0);
while(true){
if((i__8144__auto___9568 < len__8143__auto___9567)){
args__8150__auto__.push((arguments[i__8144__auto___9568]));

var G__9569 = (i__8144__auto___9568 + (1));
i__8144__auto___9568 = G__9569;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Avatar",args);
});

cljs_react_material_ui.core.avatar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.avatar.cljs$lang$applyTo = (function (seq9566){
return cljs_react_material_ui.core.avatar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9566));
});

cljs_react_material_ui.core.badge = (function cljs_react_material_ui$core$badge(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9571 = arguments.length;
var i__8144__auto___9572 = (0);
while(true){
if((i__8144__auto___9572 < len__8143__auto___9571)){
args__8150__auto__.push((arguments[i__8144__auto___9572]));

var G__9573 = (i__8144__auto___9572 + (1));
i__8144__auto___9572 = G__9573;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Badge",args);
});

cljs_react_material_ui.core.badge.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.badge.cljs$lang$applyTo = (function (seq9570){
return cljs_react_material_ui.core.badge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9570));
});

cljs_react_material_ui.core.bottom_navigation = (function cljs_react_material_ui$core$bottom_navigation(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9575 = arguments.length;
var i__8144__auto___9576 = (0);
while(true){
if((i__8144__auto___9576 < len__8143__auto___9575)){
args__8150__auto__.push((arguments[i__8144__auto___9576]));

var G__9577 = (i__8144__auto___9576 + (1));
i__8144__auto___9576 = G__9577;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigation",args);
});

cljs_react_material_ui.core.bottom_navigation.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation.cljs$lang$applyTo = (function (seq9574){
return cljs_react_material_ui.core.bottom_navigation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9574));
});

cljs_react_material_ui.core.bottom_navigation_item = (function cljs_react_material_ui$core$bottom_navigation_item(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9579 = arguments.length;
var i__8144__auto___9580 = (0);
while(true){
if((i__8144__auto___9580 < len__8143__auto___9579)){
args__8150__auto__.push((arguments[i__8144__auto___9580]));

var G__9581 = (i__8144__auto___9580 + (1));
i__8144__auto___9580 = G__9581;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"BottomNavigationItem",args);
});

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.bottom_navigation_item.cljs$lang$applyTo = (function (seq9578){
return cljs_react_material_ui.core.bottom_navigation_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9578));
});

cljs_react_material_ui.core.card = (function cljs_react_material_ui$core$card(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9583 = arguments.length;
var i__8144__auto___9584 = (0);
while(true){
if((i__8144__auto___9584 < len__8143__auto___9583)){
args__8150__auto__.push((arguments[i__8144__auto___9584]));

var G__9585 = (i__8144__auto___9584 + (1));
i__8144__auto___9584 = G__9585;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Card",args);
});

cljs_react_material_ui.core.card.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card.cljs$lang$applyTo = (function (seq9582){
return cljs_react_material_ui.core.card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9582));
});

cljs_react_material_ui.core.card_actions = (function cljs_react_material_ui$core$card_actions(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9587 = arguments.length;
var i__8144__auto___9588 = (0);
while(true){
if((i__8144__auto___9588 < len__8143__auto___9587)){
args__8150__auto__.push((arguments[i__8144__auto___9588]));

var G__9589 = (i__8144__auto___9588 + (1));
i__8144__auto___9588 = G__9589;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardActions",args);
});

cljs_react_material_ui.core.card_actions.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_actions.cljs$lang$applyTo = (function (seq9586){
return cljs_react_material_ui.core.card_actions.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9586));
});

cljs_react_material_ui.core.card_header = (function cljs_react_material_ui$core$card_header(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9591 = arguments.length;
var i__8144__auto___9592 = (0);
while(true){
if((i__8144__auto___9592 < len__8143__auto___9591)){
args__8150__auto__.push((arguments[i__8144__auto___9592]));

var G__9593 = (i__8144__auto___9592 + (1));
i__8144__auto___9592 = G__9593;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardHeader",args);
});

cljs_react_material_ui.core.card_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_header.cljs$lang$applyTo = (function (seq9590){
return cljs_react_material_ui.core.card_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9590));
});

cljs_react_material_ui.core.card_media = (function cljs_react_material_ui$core$card_media(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9595 = arguments.length;
var i__8144__auto___9596 = (0);
while(true){
if((i__8144__auto___9596 < len__8143__auto___9595)){
args__8150__auto__.push((arguments[i__8144__auto___9596]));

var G__9597 = (i__8144__auto___9596 + (1));
i__8144__auto___9596 = G__9597;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardMedia",args);
});

cljs_react_material_ui.core.card_media.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_media.cljs$lang$applyTo = (function (seq9594){
return cljs_react_material_ui.core.card_media.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9594));
});

cljs_react_material_ui.core.card_title = (function cljs_react_material_ui$core$card_title(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9599 = arguments.length;
var i__8144__auto___9600 = (0);
while(true){
if((i__8144__auto___9600 < len__8143__auto___9599)){
args__8150__auto__.push((arguments[i__8144__auto___9600]));

var G__9601 = (i__8144__auto___9600 + (1));
i__8144__auto___9600 = G__9601;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardTitle",args);
});

cljs_react_material_ui.core.card_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_title.cljs$lang$applyTo = (function (seq9598){
return cljs_react_material_ui.core.card_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9598));
});

cljs_react_material_ui.core.card_text = (function cljs_react_material_ui$core$card_text(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9603 = arguments.length;
var i__8144__auto___9604 = (0);
while(true){
if((i__8144__auto___9604 < len__8143__auto___9603)){
args__8150__auto__.push((arguments[i__8144__auto___9604]));

var G__9605 = (i__8144__auto___9604 + (1));
i__8144__auto___9604 = G__9605;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CardText",args);
});

cljs_react_material_ui.core.card_text.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.card_text.cljs$lang$applyTo = (function (seq9602){
return cljs_react_material_ui.core.card_text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9602));
});

cljs_react_material_ui.core.checkbox = (function cljs_react_material_ui$core$checkbox(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9607 = arguments.length;
var i__8144__auto___9608 = (0);
while(true){
if((i__8144__auto___9608 < len__8143__auto___9607)){
args__8150__auto__.push((arguments[i__8144__auto___9608]));

var G__9609 = (i__8144__auto___9608 + (1));
i__8144__auto___9608 = G__9609;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Checkbox",args);
});

cljs_react_material_ui.core.checkbox.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.checkbox.cljs$lang$applyTo = (function (seq9606){
return cljs_react_material_ui.core.checkbox.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9606));
});

cljs_react_material_ui.core.chip = (function cljs_react_material_ui$core$chip(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9611 = arguments.length;
var i__8144__auto___9612 = (0);
while(true){
if((i__8144__auto___9612 < len__8143__auto___9611)){
args__8150__auto__.push((arguments[i__8144__auto___9612]));

var G__9613 = (i__8144__auto___9612 + (1));
i__8144__auto___9612 = G__9613;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Chip",args);
});

cljs_react_material_ui.core.chip.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.chip.cljs$lang$applyTo = (function (seq9610){
return cljs_react_material_ui.core.chip.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9610));
});

cljs_react_material_ui.core.circular_progress = (function cljs_react_material_ui$core$circular_progress(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9615 = arguments.length;
var i__8144__auto___9616 = (0);
while(true){
if((i__8144__auto___9616 < len__8143__auto___9615)){
args__8150__auto__.push((arguments[i__8144__auto___9616]));

var G__9617 = (i__8144__auto___9616 + (1));
i__8144__auto___9616 = G__9617;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"CircularProgress",args);
});

cljs_react_material_ui.core.circular_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.circular_progress.cljs$lang$applyTo = (function (seq9614){
return cljs_react_material_ui.core.circular_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9614));
});

cljs_react_material_ui.core.date_picker = (function cljs_react_material_ui$core$date_picker(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9619 = arguments.length;
var i__8144__auto___9620 = (0);
while(true){
if((i__8144__auto___9620 < len__8143__auto___9619)){
args__8150__auto__.push((arguments[i__8144__auto___9620]));

var G__9621 = (i__8144__auto___9620 + (1));
i__8144__auto___9620 = G__9621;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DatePicker",args);
});

cljs_react_material_ui.core.date_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.date_picker.cljs$lang$applyTo = (function (seq9618){
return cljs_react_material_ui.core.date_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9618));
});

cljs_react_material_ui.core.dialog = (function cljs_react_material_ui$core$dialog(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9623 = arguments.length;
var i__8144__auto___9624 = (0);
while(true){
if((i__8144__auto___9624 < len__8143__auto___9623)){
args__8150__auto__.push((arguments[i__8144__auto___9624]));

var G__9625 = (i__8144__auto___9624 + (1));
i__8144__auto___9624 = G__9625;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Dialog",args);
});

cljs_react_material_ui.core.dialog.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.dialog.cljs$lang$applyTo = (function (seq9622){
return cljs_react_material_ui.core.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9622));
});

cljs_react_material_ui.core.divider = (function cljs_react_material_ui$core$divider(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9627 = arguments.length;
var i__8144__auto___9628 = (0);
while(true){
if((i__8144__auto___9628 < len__8143__auto___9627)){
args__8150__auto__.push((arguments[i__8144__auto___9628]));

var G__9629 = (i__8144__auto___9628 + (1));
i__8144__auto___9628 = G__9629;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Divider",args);
});

cljs_react_material_ui.core.divider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.divider.cljs$lang$applyTo = (function (seq9626){
return cljs_react_material_ui.core.divider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9626));
});

cljs_react_material_ui.core.drawer = (function cljs_react_material_ui$core$drawer(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9631 = arguments.length;
var i__8144__auto___9632 = (0);
while(true){
if((i__8144__auto___9632 < len__8143__auto___9631)){
args__8150__auto__.push((arguments[i__8144__auto___9632]));

var G__9633 = (i__8144__auto___9632 + (1));
i__8144__auto___9632 = G__9633;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Drawer",args);
});

cljs_react_material_ui.core.drawer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drawer.cljs$lang$applyTo = (function (seq9630){
return cljs_react_material_ui.core.drawer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9630));
});

cljs_react_material_ui.core.drop_down_menu = (function cljs_react_material_ui$core$drop_down_menu(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9635 = arguments.length;
var i__8144__auto___9636 = (0);
while(true){
if((i__8144__auto___9636 < len__8143__auto___9635)){
args__8150__auto__.push((arguments[i__8144__auto___9636]));

var G__9637 = (i__8144__auto___9636 + (1));
i__8144__auto___9636 = G__9637;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"DropDownMenu",args);
});

cljs_react_material_ui.core.drop_down_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.drop_down_menu.cljs$lang$applyTo = (function (seq9634){
return cljs_react_material_ui.core.drop_down_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9634));
});

cljs_react_material_ui.core.flat_button = (function cljs_react_material_ui$core$flat_button(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9639 = arguments.length;
var i__8144__auto___9640 = (0);
while(true){
if((i__8144__auto___9640 < len__8143__auto___9639)){
args__8150__auto__.push((arguments[i__8144__auto___9640]));

var G__9641 = (i__8144__auto___9640 + (1));
i__8144__auto___9640 = G__9641;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FlatButton",args);
});

cljs_react_material_ui.core.flat_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.flat_button.cljs$lang$applyTo = (function (seq9638){
return cljs_react_material_ui.core.flat_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9638));
});

cljs_react_material_ui.core.floating_action_button = (function cljs_react_material_ui$core$floating_action_button(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9643 = arguments.length;
var i__8144__auto___9644 = (0);
while(true){
if((i__8144__auto___9644 < len__8143__auto___9643)){
args__8150__auto__.push((arguments[i__8144__auto___9644]));

var G__9645 = (i__8144__auto___9644 + (1));
i__8144__auto___9644 = G__9645;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FloatingActionButton",args);
});

cljs_react_material_ui.core.floating_action_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.floating_action_button.cljs$lang$applyTo = (function (seq9642){
return cljs_react_material_ui.core.floating_action_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9642));
});

cljs_react_material_ui.core.font_icon = (function cljs_react_material_ui$core$font_icon(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9647 = arguments.length;
var i__8144__auto___9648 = (0);
while(true){
if((i__8144__auto___9648 < len__8143__auto___9647)){
args__8150__auto__.push((arguments[i__8144__auto___9648]));

var G__9649 = (i__8144__auto___9648 + (1));
i__8144__auto___9648 = G__9649;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"FontIcon",args);
});

cljs_react_material_ui.core.font_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.font_icon.cljs$lang$applyTo = (function (seq9646){
return cljs_react_material_ui.core.font_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9646));
});

cljs_react_material_ui.core.grid_list = (function cljs_react_material_ui$core$grid_list(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9651 = arguments.length;
var i__8144__auto___9652 = (0);
while(true){
if((i__8144__auto___9652 < len__8143__auto___9651)){
args__8150__auto__.push((arguments[i__8144__auto___9652]));

var G__9653 = (i__8144__auto___9652 + (1));
i__8144__auto___9652 = G__9653;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridList",args);
});

cljs_react_material_ui.core.grid_list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_list.cljs$lang$applyTo = (function (seq9650){
return cljs_react_material_ui.core.grid_list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9650));
});

cljs_react_material_ui.core.grid_tile = (function cljs_react_material_ui$core$grid_tile(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9655 = arguments.length;
var i__8144__auto___9656 = (0);
while(true){
if((i__8144__auto___9656 < len__8143__auto___9655)){
args__8150__auto__.push((arguments[i__8144__auto___9656]));

var G__9657 = (i__8144__auto___9656 + (1));
i__8144__auto___9656 = G__9657;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"GridTile",args);
});

cljs_react_material_ui.core.grid_tile.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.grid_tile.cljs$lang$applyTo = (function (seq9654){
return cljs_react_material_ui.core.grid_tile.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9654));
});

cljs_react_material_ui.core.icon_button = (function cljs_react_material_ui$core$icon_button(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9659 = arguments.length;
var i__8144__auto___9660 = (0);
while(true){
if((i__8144__auto___9660 < len__8143__auto___9659)){
args__8150__auto__.push((arguments[i__8144__auto___9660]));

var G__9661 = (i__8144__auto___9660 + (1));
i__8144__auto___9660 = G__9661;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconButton",args);
});

cljs_react_material_ui.core.icon_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_button.cljs$lang$applyTo = (function (seq9658){
return cljs_react_material_ui.core.icon_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9658));
});

cljs_react_material_ui.core.icon_menu = (function cljs_react_material_ui$core$icon_menu(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9663 = arguments.length;
var i__8144__auto___9664 = (0);
while(true){
if((i__8144__auto___9664 < len__8143__auto___9663)){
args__8150__auto__.push((arguments[i__8144__auto___9664]));

var G__9665 = (i__8144__auto___9664 + (1));
i__8144__auto___9664 = G__9665;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"IconMenu",args);
});

cljs_react_material_ui.core.icon_menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.icon_menu.cljs$lang$applyTo = (function (seq9662){
return cljs_react_material_ui.core.icon_menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9662));
});

cljs_react_material_ui.core.linear_progress = (function cljs_react_material_ui$core$linear_progress(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9667 = arguments.length;
var i__8144__auto___9668 = (0);
while(true){
if((i__8144__auto___9668 < len__8143__auto___9667)){
args__8150__auto__.push((arguments[i__8144__auto___9668]));

var G__9669 = (i__8144__auto___9668 + (1));
i__8144__auto___9668 = G__9669;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"LinearProgress",args);
});

cljs_react_material_ui.core.linear_progress.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.linear_progress.cljs$lang$applyTo = (function (seq9666){
return cljs_react_material_ui.core.linear_progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9666));
});

cljs_react_material_ui.core.list = (function cljs_react_material_ui$core$list(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9671 = arguments.length;
var i__8144__auto___9672 = (0);
while(true){
if((i__8144__auto___9672 < len__8143__auto___9671)){
args__8150__auto__.push((arguments[i__8144__auto___9672]));

var G__9673 = (i__8144__auto___9672 + (1));
i__8144__auto___9672 = G__9673;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"List",args);
});

cljs_react_material_ui.core.list.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list.cljs$lang$applyTo = (function (seq9670){
return cljs_react_material_ui.core.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9670));
});

cljs_react_material_ui.core.list_item = (function cljs_react_material_ui$core$list_item(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9675 = arguments.length;
var i__8144__auto___9676 = (0);
while(true){
if((i__8144__auto___9676 < len__8143__auto___9675)){
args__8150__auto__.push((arguments[i__8144__auto___9676]));

var G__9677 = (i__8144__auto___9676 + (1));
i__8144__auto___9676 = G__9677;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ListItem",args);
});

cljs_react_material_ui.core.list_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.list_item.cljs$lang$applyTo = (function (seq9674){
return cljs_react_material_ui.core.list_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9674));
});

cljs_react_material_ui.core.menu = (function cljs_react_material_ui$core$menu(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9679 = arguments.length;
var i__8144__auto___9680 = (0);
while(true){
if((i__8144__auto___9680 < len__8143__auto___9679)){
args__8150__auto__.push((arguments[i__8144__auto___9680]));

var G__9681 = (i__8144__auto___9680 + (1));
i__8144__auto___9680 = G__9681;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Menu",args);
});

cljs_react_material_ui.core.menu.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu.cljs$lang$applyTo = (function (seq9678){
return cljs_react_material_ui.core.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9678));
});

cljs_react_material_ui.core.menu_item = (function cljs_react_material_ui$core$menu_item(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9683 = arguments.length;
var i__8144__auto___9684 = (0);
while(true){
if((i__8144__auto___9684 < len__8143__auto___9683)){
args__8150__auto__.push((arguments[i__8144__auto___9684]));

var G__9685 = (i__8144__auto___9684 + (1));
i__8144__auto___9684 = G__9685;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MenuItem",args);
});

cljs_react_material_ui.core.menu_item.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.menu_item.cljs$lang$applyTo = (function (seq9682){
return cljs_react_material_ui.core.menu_item.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9682));
});

cljs_react_material_ui.core.mui_theme_provider = (function cljs_react_material_ui$core$mui_theme_provider(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9687 = arguments.length;
var i__8144__auto___9688 = (0);
while(true){
if((i__8144__auto___9688 < len__8143__auto___9687)){
args__8150__auto__.push((arguments[i__8144__auto___9688]));

var G__9689 = (i__8144__auto___9688 + (1));
i__8144__auto___9688 = G__9689;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"MuiThemeProvider",args);
});

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.mui_theme_provider.cljs$lang$applyTo = (function (seq9686){
return cljs_react_material_ui.core.mui_theme_provider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9686));
});

cljs_react_material_ui.core.paper = (function cljs_react_material_ui$core$paper(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9691 = arguments.length;
var i__8144__auto___9692 = (0);
while(true){
if((i__8144__auto___9692 < len__8143__auto___9691)){
args__8150__auto__.push((arguments[i__8144__auto___9692]));

var G__9693 = (i__8144__auto___9692 + (1));
i__8144__auto___9692 = G__9693;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Paper",args);
});

cljs_react_material_ui.core.paper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.paper.cljs$lang$applyTo = (function (seq9690){
return cljs_react_material_ui.core.paper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9690));
});

cljs_react_material_ui.core.popover = (function cljs_react_material_ui$core$popover(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9695 = arguments.length;
var i__8144__auto___9696 = (0);
while(true){
if((i__8144__auto___9696 < len__8143__auto___9695)){
args__8150__auto__.push((arguments[i__8144__auto___9696]));

var G__9697 = (i__8144__auto___9696 + (1));
i__8144__auto___9696 = G__9697;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Popover",args);
});

cljs_react_material_ui.core.popover.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.popover.cljs$lang$applyTo = (function (seq9694){
return cljs_react_material_ui.core.popover.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9694));
});

cljs_react_material_ui.core.radio_button = (function cljs_react_material_ui$core$radio_button(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9699 = arguments.length;
var i__8144__auto___9700 = (0);
while(true){
if((i__8144__auto___9700 < len__8143__auto___9699)){
args__8150__auto__.push((arguments[i__8144__auto___9700]));

var G__9701 = (i__8144__auto___9700 + (1));
i__8144__auto___9700 = G__9701;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButton",args);
});

cljs_react_material_ui.core.radio_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button.cljs$lang$applyTo = (function (seq9698){
return cljs_react_material_ui.core.radio_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9698));
});

cljs_react_material_ui.core.radio_button_group = (function cljs_react_material_ui$core$radio_button_group(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9703 = arguments.length;
var i__8144__auto___9704 = (0);
while(true){
if((i__8144__auto___9704 < len__8143__auto___9703)){
args__8150__auto__.push((arguments[i__8144__auto___9704]));

var G__9705 = (i__8144__auto___9704 + (1));
i__8144__auto___9704 = G__9705;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RadioButtonGroup",args);
});

cljs_react_material_ui.core.radio_button_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.radio_button_group.cljs$lang$applyTo = (function (seq9702){
return cljs_react_material_ui.core.radio_button_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9702));
});

cljs_react_material_ui.core.raised_button = (function cljs_react_material_ui$core$raised_button(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9707 = arguments.length;
var i__8144__auto___9708 = (0);
while(true){
if((i__8144__auto___9708 < len__8143__auto___9707)){
args__8150__auto__.push((arguments[i__8144__auto___9708]));

var G__9709 = (i__8144__auto___9708 + (1));
i__8144__auto___9708 = G__9709;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RaisedButton",args);
});

cljs_react_material_ui.core.raised_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.raised_button.cljs$lang$applyTo = (function (seq9706){
return cljs_react_material_ui.core.raised_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9706));
});

cljs_react_material_ui.core.refresh_indicator = (function cljs_react_material_ui$core$refresh_indicator(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9711 = arguments.length;
var i__8144__auto___9712 = (0);
while(true){
if((i__8144__auto___9712 < len__8143__auto___9711)){
args__8150__auto__.push((arguments[i__8144__auto___9712]));

var G__9713 = (i__8144__auto___9712 + (1));
i__8144__auto___9712 = G__9713;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"RefreshIndicator",args);
});

cljs_react_material_ui.core.refresh_indicator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.refresh_indicator.cljs$lang$applyTo = (function (seq9710){
return cljs_react_material_ui.core.refresh_indicator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9710));
});

cljs_react_material_ui.core.select_field = (function cljs_react_material_ui$core$select_field(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9715 = arguments.length;
var i__8144__auto___9716 = (0);
while(true){
if((i__8144__auto___9716 < len__8143__auto___9715)){
args__8150__auto__.push((arguments[i__8144__auto___9716]));

var G__9717 = (i__8144__auto___9716 + (1));
i__8144__auto___9716 = G__9717;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SelectField",args);
});

cljs_react_material_ui.core.select_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.select_field.cljs$lang$applyTo = (function (seq9714){
return cljs_react_material_ui.core.select_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9714));
});

cljs_react_material_ui.core.slider = (function cljs_react_material_ui$core$slider(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9719 = arguments.length;
var i__8144__auto___9720 = (0);
while(true){
if((i__8144__auto___9720 < len__8143__auto___9719)){
args__8150__auto__.push((arguments[i__8144__auto___9720]));

var G__9721 = (i__8144__auto___9720 + (1));
i__8144__auto___9720 = G__9721;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Slider",args);
});

cljs_react_material_ui.core.slider.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.slider.cljs$lang$applyTo = (function (seq9718){
return cljs_react_material_ui.core.slider.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9718));
});

cljs_react_material_ui.core.subheader = (function cljs_react_material_ui$core$subheader(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9723 = arguments.length;
var i__8144__auto___9724 = (0);
while(true){
if((i__8144__auto___9724 < len__8143__auto___9723)){
args__8150__auto__.push((arguments[i__8144__auto___9724]));

var G__9725 = (i__8144__auto___9724 + (1));
i__8144__auto___9724 = G__9725;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Subheader",args);
});

cljs_react_material_ui.core.subheader.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.subheader.cljs$lang$applyTo = (function (seq9722){
return cljs_react_material_ui.core.subheader.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9722));
});

cljs_react_material_ui.core.svg_icon = (function cljs_react_material_ui$core$svg_icon(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9727 = arguments.length;
var i__8144__auto___9728 = (0);
while(true){
if((i__8144__auto___9728 < len__8143__auto___9727)){
args__8150__auto__.push((arguments[i__8144__auto___9728]));

var G__9729 = (i__8144__auto___9728 + (1));
i__8144__auto___9728 = G__9729;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"SvgIcon",args);
});

cljs_react_material_ui.core.svg_icon.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.svg_icon.cljs$lang$applyTo = (function (seq9726){
return cljs_react_material_ui.core.svg_icon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9726));
});

cljs_react_material_ui.core.step = (function cljs_react_material_ui$core$step(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9731 = arguments.length;
var i__8144__auto___9732 = (0);
while(true){
if((i__8144__auto___9732 < len__8143__auto___9731)){
args__8150__auto__.push((arguments[i__8144__auto___9732]));

var G__9733 = (i__8144__auto___9732 + (1));
i__8144__auto___9732 = G__9733;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Step",args);
});

cljs_react_material_ui.core.step.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step.cljs$lang$applyTo = (function (seq9730){
return cljs_react_material_ui.core.step.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9730));
});

cljs_react_material_ui.core.step_button = (function cljs_react_material_ui$core$step_button(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9735 = arguments.length;
var i__8144__auto___9736 = (0);
while(true){
if((i__8144__auto___9736 < len__8143__auto___9735)){
args__8150__auto__.push((arguments[i__8144__auto___9736]));

var G__9737 = (i__8144__auto___9736 + (1));
i__8144__auto___9736 = G__9737;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepButton",args);
});

cljs_react_material_ui.core.step_button.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_button.cljs$lang$applyTo = (function (seq9734){
return cljs_react_material_ui.core.step_button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9734));
});

cljs_react_material_ui.core.step_content = (function cljs_react_material_ui$core$step_content(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9739 = arguments.length;
var i__8144__auto___9740 = (0);
while(true){
if((i__8144__auto___9740 < len__8143__auto___9739)){
args__8150__auto__.push((arguments[i__8144__auto___9740]));

var G__9741 = (i__8144__auto___9740 + (1));
i__8144__auto___9740 = G__9741;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepContent",args);
});

cljs_react_material_ui.core.step_content.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_content.cljs$lang$applyTo = (function (seq9738){
return cljs_react_material_ui.core.step_content.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9738));
});

cljs_react_material_ui.core.step_label = (function cljs_react_material_ui$core$step_label(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9743 = arguments.length;
var i__8144__auto___9744 = (0);
while(true){
if((i__8144__auto___9744 < len__8143__auto___9743)){
args__8150__auto__.push((arguments[i__8144__auto___9744]));

var G__9745 = (i__8144__auto___9744 + (1));
i__8144__auto___9744 = G__9745;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"StepLabel",args);
});

cljs_react_material_ui.core.step_label.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.step_label.cljs$lang$applyTo = (function (seq9742){
return cljs_react_material_ui.core.step_label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9742));
});

cljs_react_material_ui.core.stepper = (function cljs_react_material_ui$core$stepper(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9747 = arguments.length;
var i__8144__auto___9748 = (0);
while(true){
if((i__8144__auto___9748 < len__8143__auto___9747)){
args__8150__auto__.push((arguments[i__8144__auto___9748]));

var G__9749 = (i__8144__auto___9748 + (1));
i__8144__auto___9748 = G__9749;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Stepper",args);
});

cljs_react_material_ui.core.stepper.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.stepper.cljs$lang$applyTo = (function (seq9746){
return cljs_react_material_ui.core.stepper.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9746));
});

cljs_react_material_ui.core.snackbar = (function cljs_react_material_ui$core$snackbar(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9751 = arguments.length;
var i__8144__auto___9752 = (0);
while(true){
if((i__8144__auto___9752 < len__8143__auto___9751)){
args__8150__auto__.push((arguments[i__8144__auto___9752]));

var G__9753 = (i__8144__auto___9752 + (1));
i__8144__auto___9752 = G__9753;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Snackbar",args);
});

cljs_react_material_ui.core.snackbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.snackbar.cljs$lang$applyTo = (function (seq9750){
return cljs_react_material_ui.core.snackbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9750));
});

cljs_react_material_ui.core.tabs = (function cljs_react_material_ui$core$tabs(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9755 = arguments.length;
var i__8144__auto___9756 = (0);
while(true){
if((i__8144__auto___9756 < len__8143__auto___9755)){
args__8150__auto__.push((arguments[i__8144__auto___9756]));

var G__9757 = (i__8144__auto___9756 + (1));
i__8144__auto___9756 = G__9757;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tabs",args);
});

cljs_react_material_ui.core.tabs.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tabs.cljs$lang$applyTo = (function (seq9754){
return cljs_react_material_ui.core.tabs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9754));
});

cljs_react_material_ui.core.tab = (function cljs_react_material_ui$core$tab(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9759 = arguments.length;
var i__8144__auto___9760 = (0);
while(true){
if((i__8144__auto___9760 < len__8143__auto___9759)){
args__8150__auto__.push((arguments[i__8144__auto___9760]));

var G__9761 = (i__8144__auto___9760 + (1));
i__8144__auto___9760 = G__9761;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Tab",args);
});

cljs_react_material_ui.core.tab.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.tab.cljs$lang$applyTo = (function (seq9758){
return cljs_react_material_ui.core.tab.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9758));
});

cljs_react_material_ui.core.table = (function cljs_react_material_ui$core$table(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9763 = arguments.length;
var i__8144__auto___9764 = (0);
while(true){
if((i__8144__auto___9764 < len__8143__auto___9763)){
args__8150__auto__.push((arguments[i__8144__auto___9764]));

var G__9765 = (i__8144__auto___9764 + (1));
i__8144__auto___9764 = G__9765;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Table",args);
});

cljs_react_material_ui.core.table.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table.cljs$lang$applyTo = (function (seq9762){
return cljs_react_material_ui.core.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9762));
});

cljs_react_material_ui.core.table_body = (function cljs_react_material_ui$core$table_body(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9767 = arguments.length;
var i__8144__auto___9768 = (0);
while(true){
if((i__8144__auto___9768 < len__8143__auto___9767)){
args__8150__auto__.push((arguments[i__8144__auto___9768]));

var G__9769 = (i__8144__auto___9768 + (1));
i__8144__auto___9768 = G__9769;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableBody",args);
});

cljs_react_material_ui.core.table_body.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_body.cljs$lang$applyTo = (function (seq9766){
return cljs_react_material_ui.core.table_body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9766));
});

cljs_react_material_ui.core.table_footer = (function cljs_react_material_ui$core$table_footer(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9771 = arguments.length;
var i__8144__auto___9772 = (0);
while(true){
if((i__8144__auto___9772 < len__8143__auto___9771)){
args__8150__auto__.push((arguments[i__8144__auto___9772]));

var G__9773 = (i__8144__auto___9772 + (1));
i__8144__auto___9772 = G__9773;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableFooter",args);
});

cljs_react_material_ui.core.table_footer.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_footer.cljs$lang$applyTo = (function (seq9770){
return cljs_react_material_ui.core.table_footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9770));
});

cljs_react_material_ui.core.table_header = (function cljs_react_material_ui$core$table_header(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9775 = arguments.length;
var i__8144__auto___9776 = (0);
while(true){
if((i__8144__auto___9776 < len__8143__auto___9775)){
args__8150__auto__.push((arguments[i__8144__auto___9776]));

var G__9777 = (i__8144__auto___9776 + (1));
i__8144__auto___9776 = G__9777;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeader",args);
});

cljs_react_material_ui.core.table_header.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header.cljs$lang$applyTo = (function (seq9774){
return cljs_react_material_ui.core.table_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9774));
});

cljs_react_material_ui.core.table_header_column = (function cljs_react_material_ui$core$table_header_column(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9779 = arguments.length;
var i__8144__auto___9780 = (0);
while(true){
if((i__8144__auto___9780 < len__8143__auto___9779)){
args__8150__auto__.push((arguments[i__8144__auto___9780]));

var G__9781 = (i__8144__auto___9780 + (1));
i__8144__auto___9780 = G__9781;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableHeaderColumn",args);
});

cljs_react_material_ui.core.table_header_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_header_column.cljs$lang$applyTo = (function (seq9778){
return cljs_react_material_ui.core.table_header_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9778));
});

cljs_react_material_ui.core.table_row = (function cljs_react_material_ui$core$table_row(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9783 = arguments.length;
var i__8144__auto___9784 = (0);
while(true){
if((i__8144__auto___9784 < len__8143__auto___9783)){
args__8150__auto__.push((arguments[i__8144__auto___9784]));

var G__9785 = (i__8144__auto___9784 + (1));
i__8144__auto___9784 = G__9785;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRow",args);
});

cljs_react_material_ui.core.table_row.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row.cljs$lang$applyTo = (function (seq9782){
return cljs_react_material_ui.core.table_row.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9782));
});

cljs_react_material_ui.core.table_row_column = (function cljs_react_material_ui$core$table_row_column(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9787 = arguments.length;
var i__8144__auto___9788 = (0);
while(true){
if((i__8144__auto___9788 < len__8143__auto___9787)){
args__8150__auto__.push((arguments[i__8144__auto___9788]));

var G__9789 = (i__8144__auto___9788 + (1));
i__8144__auto___9788 = G__9789;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TableRowColumn",args);
});

cljs_react_material_ui.core.table_row_column.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.table_row_column.cljs$lang$applyTo = (function (seq9786){
return cljs_react_material_ui.core.table_row_column.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9786));
});

cljs_react_material_ui.core.text_field = (function cljs_react_material_ui$core$text_field(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9791 = arguments.length;
var i__8144__auto___9792 = (0);
while(true){
if((i__8144__auto___9792 < len__8143__auto___9791)){
args__8150__auto__.push((arguments[i__8144__auto___9792]));

var G__9793 = (i__8144__auto___9792 + (1));
i__8144__auto___9792 = G__9793;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TextField",args);
});

cljs_react_material_ui.core.text_field.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.text_field.cljs$lang$applyTo = (function (seq9790){
return cljs_react_material_ui.core.text_field.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9790));
});

cljs_react_material_ui.core.time_picker = (function cljs_react_material_ui$core$time_picker(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9795 = arguments.length;
var i__8144__auto___9796 = (0);
while(true){
if((i__8144__auto___9796 < len__8143__auto___9795)){
args__8150__auto__.push((arguments[i__8144__auto___9796]));

var G__9797 = (i__8144__auto___9796 + (1));
i__8144__auto___9796 = G__9797;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"TimePicker",args);
});

cljs_react_material_ui.core.time_picker.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.time_picker.cljs$lang$applyTo = (function (seq9794){
return cljs_react_material_ui.core.time_picker.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9794));
});

cljs_react_material_ui.core.toggle = (function cljs_react_material_ui$core$toggle(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9799 = arguments.length;
var i__8144__auto___9800 = (0);
while(true){
if((i__8144__auto___9800 < len__8143__auto___9799)){
args__8150__auto__.push((arguments[i__8144__auto___9800]));

var G__9801 = (i__8144__auto___9800 + (1));
i__8144__auto___9800 = G__9801;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toggle",args);
});

cljs_react_material_ui.core.toggle.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toggle.cljs$lang$applyTo = (function (seq9798){
return cljs_react_material_ui.core.toggle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9798));
});

cljs_react_material_ui.core.toolbar = (function cljs_react_material_ui$core$toolbar(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9803 = arguments.length;
var i__8144__auto___9804 = (0);
while(true){
if((i__8144__auto___9804 < len__8143__auto___9803)){
args__8150__auto__.push((arguments[i__8144__auto___9804]));

var G__9805 = (i__8144__auto___9804 + (1));
i__8144__auto___9804 = G__9805;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"Toolbar",args);
});

cljs_react_material_ui.core.toolbar.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar.cljs$lang$applyTo = (function (seq9802){
return cljs_react_material_ui.core.toolbar.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9802));
});

cljs_react_material_ui.core.toolbar_group = (function cljs_react_material_ui$core$toolbar_group(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9807 = arguments.length;
var i__8144__auto___9808 = (0);
while(true){
if((i__8144__auto___9808 < len__8143__auto___9807)){
args__8150__auto__.push((arguments[i__8144__auto___9808]));

var G__9809 = (i__8144__auto___9808 + (1));
i__8144__auto___9808 = G__9809;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarGroup",args);
});

cljs_react_material_ui.core.toolbar_group.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_group.cljs$lang$applyTo = (function (seq9806){
return cljs_react_material_ui.core.toolbar_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9806));
});

cljs_react_material_ui.core.toolbar_separator = (function cljs_react_material_ui$core$toolbar_separator(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9811 = arguments.length;
var i__8144__auto___9812 = (0);
while(true){
if((i__8144__auto___9812 < len__8143__auto___9811)){
args__8150__auto__.push((arguments[i__8144__auto___9812]));

var G__9813 = (i__8144__auto___9812 + (1));
i__8144__auto___9812 = G__9813;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarSeparator",args);
});

cljs_react_material_ui.core.toolbar_separator.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_separator.cljs$lang$applyTo = (function (seq9810){
return cljs_react_material_ui.core.toolbar_separator.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9810));
});

cljs_react_material_ui.core.toolbar_title = (function cljs_react_material_ui$core$toolbar_title(var_args){
var args__8150__auto__ = [];
var len__8143__auto___9815 = arguments.length;
var i__8144__auto___9816 = (0);
while(true){
if((i__8144__auto___9816 < len__8143__auto___9815)){
args__8150__auto__.push((arguments[i__8144__auto___9816]));

var G__9817 = (i__8144__auto___9816 + (1));
i__8144__auto___9816 = G__9817;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs_react_material_ui.core.create_mui_el.call(null,"ToolbarTitle",args);
});

cljs_react_material_ui.core.toolbar_title.cljs$lang$maxFixedArity = (0);

cljs_react_material_ui.core.toolbar_title.cljs$lang$applyTo = (function (seq9814){
return cljs_react_material_ui.core.toolbar_title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq9814));
});


//# sourceMappingURL=core.js.map