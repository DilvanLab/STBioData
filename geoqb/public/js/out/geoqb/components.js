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
goog.provide('geoqb.components');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.icons');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('gmaps.core');
/**
 * Convert the ajax response in clj
 */
geoqb.components.json__GT_clj = (function geoqb$components$json__GT_clj(json_string){
return cljs.core.js__GT_clj.call(null,JSON.parse(json_string));
});
var ret__26584__auto___43037 = (function (){
/**
 * Execute functions in sync way
 */
geoqb.components.timeout_macro = (function geoqb$components$timeout_macro(var_args){
var args__26552__auto__ = [];
var len__26545__auto___43038 = arguments.length;
var i__26546__auto___43039 = (0);
while(true){
if((i__26546__auto___43039 < len__26545__auto___43038)){
args__26552__auto__.push((arguments[i__26546__auto___43039]));

var G__43040 = (i__26546__auto___43039 + (1));
i__26546__auto___43039 = G__43040;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((2) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((2)),(0),null)):null);
return geoqb.components.timeout_macro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26553__auto__);
});

geoqb.components.timeout_macro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.reduce.call(null,(function (x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("timer","callOnce","timer/callOnce",941779177,null)),(function (){var x__26274__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__26274__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26274__auto__);
})(),(function (){var x__26274__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26274__auto__);
})(),(function (){var x__26274__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26274__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26274__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1000)))));
}),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),(function (){var x__26274__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26274__auto__);
})()))),cljs.core.reverse.call(null,body));
});

geoqb.components.timeout_macro.cljs$lang$maxFixedArity = (2);

geoqb.components.timeout_macro.cljs$lang$applyTo = (function (seq43034){
var G__43035 = cljs.core.first.call(null,seq43034);
var seq43034__$1 = cljs.core.next.call(null,seq43034);
var G__43036 = cljs.core.first.call(null,seq43034__$1);
var seq43034__$2 = cljs.core.next.call(null,seq43034__$1);
return geoqb.components.timeout_macro.cljs$core$IFn$_invoke$arity$variadic(G__43035,G__43036,seq43034__$2);
});

return null;
})()
;
geoqb.components.timeout_macro.cljs$lang$macro = true;

geoqb.components.save_file = (function geoqb$components$save_file(filename,t,s){
if(cljs.core.truth_(Blob)){
var b = (new Blob(s,({"type": t})));
if(cljs.core.truth_(window.navigator.msSaveBlob)){
return window.navigator.msSaveBlob(b,filename);
} else {
var link = document.createElement("a");
(link["download"] = filename);

if(cljs.core.truth_(window.webkitURL)){
(link["href"] = window.webkitURL.createObjectURL(b));
} else {
(link["href"] = window.URL.createObjectURL(b));

(link["onclick"] = ((function (link,b){
return (function geoqb$components$save_file_$_destroy_clicked(e){
return document.body.removeChild(e.target);
});})(link,b))
);

(link["style"]["display"] = "none");

document.body.appendChild(link);
}

return link.click();
}
} else {
return console.log("Browser does not support Blob");
}
});
geoqb.components.combo_select_list = (function geoqb$components$combo_select_list(type,list,quant,all){
var component_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"btn-all","btn-all",-1730789680),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Select all",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.av_playlist_add_check.call(null)], null)], null));
var update_list_BANG_ = ((function (component_state){
return (function() { 
var G__43053__delegate = function (list__$1,type__$1,f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,list__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type__$1)], null),f,args);
};
var G__43053 = function (list__$1,type__$1,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__43054__i = 0, G__43054__a = new Array(arguments.length -  3);
while (G__43054__i < G__43054__a.length) {G__43054__a[G__43054__i] = arguments[G__43054__i + 3]; ++G__43054__i;}
  args = new cljs.core.IndexedSeq(G__43054__a,0,null);
} 
return G__43053__delegate.call(this,list__$1,type__$1,f,args);};
G__43053.cljs$lang$maxFixedArity = 3;
G__43053.cljs$lang$applyTo = (function (arglist__43055){
var list__$1 = cljs.core.first(arglist__43055);
arglist__43055 = cljs.core.next(arglist__43055);
var type__$1 = cljs.core.first(arglist__43055);
arglist__43055 = cljs.core.next(arglist__43055);
var f = cljs.core.first(arglist__43055);
var args = cljs.core.rest(arglist__43055);
return G__43053__delegate(list__$1,type__$1,f,args);
});
G__43053.cljs$core$IFn$_invoke$arity$variadic = G__43053__delegate;
return G__43053;
})()
;})(component_state))
;
var reset_list_BANG_ = ((function (component_state,update_list_BANG_){
return (function (list__$1,type__$1){
var n__26355__auto__ = cljs.core.count.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)));
var i = (0);
while(true){
if((i < n__26355__auto__)){
cljs.core.swap_BANG_.call(null,list__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type__$1),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),false);

var G__43056 = (i + (1));
i = G__43056;
continue;
} else {
return null;
}
break;
}
});})(component_state,update_list_BANG_))
;
var select_all_list_BANG_ = ((function (component_state,update_list_BANG_,reset_list_BANG_){
return (function (list__$1,type__$1){
var n__26355__auto__ = cljs.core.count.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)));
var i = (0);
while(true){
if((i < n__26355__auto__)){
cljs.core.swap_BANG_.call(null,list__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type__$1),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),true);

var G__43057 = (i + (1));
i = G__43057;
continue;
} else {
return null;
}
break;
}
});})(component_state,update_list_BANG_,reset_list_BANG_))
;
var add_item_BANG_ = ((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_){
return (function (list__$1,type__$1,c){
return update_list_BANG_.call(null,list__$1,type__$1,cljs.core.conj,c);
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_))
;
var update_item_BANG_ = ((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_){
return (function (list__$1,type__$1,i){
return cljs.core.swap_BANG_.call(null,list__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type__$1),i,new cljs.core.Keyword(null,"checked","checked",-50955819)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)),i)))?false:true));
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_))
;
var btn_all_status = ((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_){
return (function (list__$1,type__$1){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1))),cljs.core.count.call(null,cljs.core.filter.call(null,((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_){
return (function (p1__43041_SHARP_){
return new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(p1__43041_SHARP_);
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_))
,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)))))){
return cljs.core.swap_BANG_.call(null,component_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-all","btn-all",-1730789680)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Deselect all",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.action_delete.call(null)], null));
} else {
return cljs.core.swap_BANG_.call(null,component_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-all","btn-all",-1730789680)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Select all",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.av_playlist_add_check.call(null)], null));
}
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_))
;
var btn_all_click = ((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status){
return (function (list__$1,type__$1){
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1))),cljs.core.count.call(null,cljs.core.filter.call(null,((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status){
return (function (p1__43042_SHARP_){
return new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(p1__43042_SHARP_);
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status))
,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)))))){
reset_list_BANG_.call(null,list__$1,type__$1);
} else {
select_all_list_BANG_.call(null,list__$1,type__$1);
}

return btn_all_status.call(null,list__$1,type__$1);
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (){
return cljs.core.List.EMPTY;
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
,new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (){
return cljs.core.List.EMPTY;
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"combo-select-list",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (type__$1,list__$1,quant__$1,all__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.auto_complete,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"openOnFocus","openOnFocus",-183721789),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"maxSearchResults","maxSearchResults",176908522),new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"searchText","searchText",1869713237),new cljs.core.Keyword(null,"listStyle","listStyle",1805423737),new cljs.core.Keyword(null,"onNewRequest","onNewRequest",1619791836)],[true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("select-field-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1)].join(''),clojure.string.capitalize.call(null,type__$1),(60),true,(MaterialUI["AutoComplete"]["caseInsensitiveFilter"]),cljs.core.map_indexed.call(null,((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (idx,item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"value","value",305978217),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("item-combo-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''),new cljs.core.Keyword(null,"checked","checked",-50955819),new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"primaryText","primaryText",229382014),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)], null)], null))], null);
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1))),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("select-field-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1)].join(''),"",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"200px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null),((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (request,index){
if((index > (-1))){
if(cljs.core.truth_((function (){var or__25432__auto__ = cljs.core._EQ_.call(null,(0),quant__$1);
if(or__25432__auto__){
return or__25432__auto__;
} else {
var or__25432__auto____$1 = cljs.core.get_in.call(null,cljs.core.deref.call(null,list__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type__$1),index,new cljs.core.Keyword(null,"checked","checked",-50955819)], null));
if(cljs.core.truth_(or__25432__auto____$1)){
return or__25432__auto____$1;
} else {
return (quant__$1 > cljs.core.count.call(null,cljs.core.filter.call(null,((function (or__25432__auto____$1,or__25432__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (p1__43043_SHARP_){
return new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(p1__43043_SHARP_);
});})(or__25432__auto____$1,or__25432__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)))));
}
}
})())){
update_item_BANG_.call(null,list__$1,type__$1,index);
} else {
}

if(cljs.core.truth_(all__$1)){
return btn_all_status.call(null,list__$1,type__$1);
} else {
return null;
}
} else {
return null;
}
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
])], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"maxHeight","maxHeight",-2066822365),(190),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null),(cljs.core.truth_(all__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("item-list-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-all")].join(''),new cljs.core.Keyword(null,"rightIcon","rightIcon",1234841951),new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"btn-all","btn-all",-1730789680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,component_state))),new cljs.core.Keyword(null,"primaryText","primaryText",229382014),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"btn-all","btn-all",-1730789680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,component_state))),new cljs.core.Keyword(null,"value","value",305978217),"all",new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (){
return btn_all_click.call(null,list__$1,type__$1);
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
], null)], null):null),cljs.core.doall.call(null,(function (){var iter__26220__auto__ = ((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function geoqb$components$combo_select_list_$_iter__43049(s__43050){
return (new cljs.core.LazySeq(null,((function (component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (){
var s__43050__$1 = s__43050;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43050__$1);
if(temp__4657__auto__){
var s__43050__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43050__$2)){
var c__26218__auto__ = cljs.core.chunk_first.call(null,s__43050__$2);
var size__26219__auto__ = cljs.core.count.call(null,c__26218__auto__);
var b__43052 = cljs.core.chunk_buffer.call(null,size__26219__auto__);
if((function (){var i__43051 = (0);
while(true){
if((i__43051 < size__26219__auto__)){
var i = cljs.core._nth.call(null,c__26218__auto__,i__43051);
if(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)),i)))){
cljs.core.chunk_append.call(null,b__43052,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("item-list-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"leftIcon","leftIcon",119379033),cljs_react_material_ui.icons.content_remove_circle_outline.call(null),new cljs.core.Keyword(null,"primaryText","primaryText",229382014),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)),i)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)),i)),new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (i__43051,s__43050__$1,i,c__26218__auto__,size__26219__auto__,b__43052,s__43050__$2,temp__4657__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (){
update_item_BANG_.call(null,list__$1,type__$1,i);

if((cljs.core.count.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1))) > cljs.core.count.call(null,cljs.core.filter.call(null,((function (i__43051,s__43050__$1,i,c__26218__auto__,size__26219__auto__,b__43052,s__43050__$2,temp__4657__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (p1__43044_SHARP_){
return new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(p1__43044_SHARP_);
});})(i__43051,s__43050__$1,i,c__26218__auto__,size__26219__auto__,b__43052,s__43050__$2,temp__4657__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)))))){
return cljs.core.swap_BANG_.call(null,component_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-all","btn-all",-1730789680)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Select all",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.av_playlist_add_check.call(null)], null));
} else {
return null;
}
});})(i__43051,s__43050__$1,i,c__26218__auto__,size__26219__auto__,b__43052,s__43050__$2,temp__4657__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__43058 = (i__43051 + (1));
i__43051 = G__43058;
continue;
} else {
var G__43059 = (i__43051 + (1));
i__43051 = G__43059;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43052),geoqb$components$combo_select_list_$_iter__43049.call(null,cljs.core.chunk_rest.call(null,s__43050__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43052),null);
}
} else {
var i = cljs.core.first.call(null,s__43050__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)),i)))){
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("item-list-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"leftIcon","leftIcon",119379033),cljs_react_material_ui.icons.content_remove_circle_outline.call(null),new cljs.core.Keyword(null,"primaryText","primaryText",229382014),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)),i)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)),i)),new cljs.core.Keyword(null,"onTouchTap","onTouchTap",1973229336),((function (s__43050__$1,i,s__43050__$2,temp__4657__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (){
update_item_BANG_.call(null,list__$1,type__$1,i);

if((cljs.core.count.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1))) > cljs.core.count.call(null,cljs.core.filter.call(null,((function (s__43050__$1,i,s__43050__$2,temp__4657__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click){
return (function (p1__43044_SHARP_){
return new cljs.core.Keyword(null,"checked","checked",-50955819).cljs$core$IFn$_invoke$arity$1(p1__43044_SHARP_);
});})(s__43050__$1,i,s__43050__$2,temp__4657__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)))))){
return cljs.core.swap_BANG_.call(null,component_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-all","btn-all",-1730789680)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Select all",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.av_playlist_add_check.call(null)], null));
} else {
return null;
}
});})(s__43050__$1,i,s__43050__$2,temp__4657__auto__,component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),geoqb$components$combo_select_list_$_iter__43049.call(null,cljs.core.rest.call(null,s__43050__$2)));
} else {
var G__43060 = cljs.core.rest.call(null,s__43050__$2);
s__43050__$1 = G__43060;
continue;
}
}
} else {
return null;
}
break;
}
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
,null,null));
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
;
return iter__26220__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.keyword.call(null,type__$1).call(null,cljs.core.deref.call(null,list__$1)))));
})())], null)], null);
});})(component_state,update_list_BANG_,reset_list_BANG_,select_all_list_BANG_,add_item_BANG_,update_item_BANG_,btn_all_status,btn_all_click))
], null));
});
geoqb.components.yasqe = (function geoqb$components$yasqe(text){
var yasqe_elem = reagent.core.atom.call(null,cljs.core.List.EMPTY);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (yasqe_elem){
return (function (this$){
cljs.core.reset_BANG_.call(null,yasqe_elem,(new YASQE(document.getElementById("yasqe"),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"createShareLink","createShareLink",1725037896),false,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),true,new cljs.core.Keyword(null,"sparql","sparql",1388494024),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"showQueryButton","showQueryButton",-2001552513),false,new cljs.core.Keyword(null,"endpoint","endpoint",447890044),"http://java.icmc.usp.br:2190/sparql"], null)], null)))));

return cljs.core.deref.call(null,yasqe_elem).setValue(text);
});})(yasqe_elem))
,new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),((function (yasqe_elem){
return (function (){
return cljs.core.List.EMPTY;
});})(yasqe_elem))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (yasqe_elem){
return (function (state,next_state){
return null;
});})(yasqe_elem))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"Yet-Another-Sparql-Query-Editor",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (yasqe_elem){
return (function (text__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"yasqe"], null)], null);
});})(yasqe_elem))
], null));
});
/**
 * 1-Pie 2-Colum 3-Donnut 4-Geo 5-line 6-Scatter
 */
geoqb.components.draw_charts = (function geoqb$components$draw_charts(id,title,vec,type){
var container = document.getElementById(id);
var chart = (function (){var G__43065 = type;
switch (G__43065) {
case (1):
return (new google.visualization.PieChart(container));

break;
case (2):
return (new google.visualization.ColumnChart(container));

break;
case (4):
return (new google.visualization.GeoChart(container));

break;
case (5):
return (new google.visualization.LineChart(container));

break;
case (6):
return (new google.visualization.ScatterChart(container));

break;
default:
return (new google.visualization.PieChart(container));

}
})();
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"region","region",270415120),"005",new cljs.core.Keyword(null,"pieHole","pieHole",-2123545970),((cljs.core._EQ_.call(null,type,(3)))?0.4:(0)),new cljs.core.Keyword(null,"colorAxis","colorAxis",-2104489392),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"amber300","amber300",1835857693)),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"lime400","lime400",-865704704)),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"light-green400","light-green400",1143361454)),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"green300","green300",1757323556))], null)], null),new cljs.core.Keyword(null,"chartArea","chartArea",-548027544),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(10),new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(160)], null),new cljs.core.Keyword(null,"titleTextStyle","titleTextStyle",-346428562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14)], null)], null));
var data_table = (new google.visualization.DataTable());
var G__43066_43070 = type;
switch (G__43066_43070) {
case (4):
var G__43067_43072 = data_table;
G__43067_43072.addColumn("string","Country");

G__43067_43072.addColumn("number","Ocurrences");

G__43067_43072.addRows(cljs.core.clj__GT_js.call(null,vec));


break;
default:
var G__43068_43073 = data_table;
G__43068_43073.addColumn("string","Topping");

G__43068_43073.addColumn("number","Slices");

G__43068_43073.addRows(cljs.core.clj__GT_js.call(null,vec));


}

return chart.draw(data_table,options);
});
geoqb.components.create_table = (function geoqb$components$create_table(input_table){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"fixed-header","fixed-header",1093824000),true,new cljs.core.Keyword(null,"multi-selectable","multi-selectable",328837921),false,new cljs.core.Keyword(null,"display-row-checkbox","display-row-checkbox",613576250),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-select-all","display-select-all",-1148445289),false,new cljs.core.Keyword(null,"adjust-for-checkbox","adjust-for-checkbox",-849822919),false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,(function (){var iter__26220__auto__ = (function geoqb$components$create_table_$_iter__43098(s__43099){
return (new cljs.core.LazySeq(null,(function (){
var s__43099__$1 = s__43099;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43099__$1);
if(temp__4657__auto__){
var s__43099__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43099__$2)){
var c__26218__auto__ = cljs.core.chunk_first.call(null,s__43099__$2);
var size__26219__auto__ = cljs.core.count.call(null,c__26218__auto__);
var b__43101 = cljs.core.chunk_buffer.call(null,size__26219__auto__);
if((function (){var i__43100 = (0);
while(true){
if((i__43100 < size__26219__auto__)){
var i = cljs.core._nth.call(null,c__26218__auto__,i__43100);
cljs.core.chunk_append.call(null,b__43101,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,cljs.core.get.call(null,cljs.core.get.call(null,input_table,(0)),i)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__43122 = (i__43100 + (1));
i__43100 = G__43122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43101),geoqb$components$create_table_$_iter__43098.call(null,cljs.core.chunk_rest.call(null,s__43099__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43101),null);
}
} else {
var i = cljs.core.first.call(null,s__43099__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,cljs.core.get.call(null,cljs.core.get.call(null,input_table,(0)),i)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),geoqb$components$create_table_$_iter__43098.call(null,cljs.core.rest.call(null,s__43099__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26220__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.get.call(null,input_table,(0)))));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-row-checkbox","display-row-checkbox",613576250),false], null),(function (){var iter__26220__auto__ = (function geoqb$components$create_table_$_iter__43102(s__43103){
return (new cljs.core.LazySeq(null,(function (){
var s__43103__$1 = s__43103;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43103__$1);
if(temp__4657__auto__){
var s__43103__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43103__$2)){
var c__26218__auto__ = cljs.core.chunk_first.call(null,s__43103__$2);
var size__26219__auto__ = cljs.core.count.call(null,c__26218__auto__);
var b__43105 = cljs.core.chunk_buffer.call(null,size__26219__auto__);
if((function (){var i__43104 = (0);
while(true){
if((i__43104 < size__26219__auto__)){
var i = cljs.core._nth.call(null,c__26218__auto__,i__43104);
cljs.core.chunk_append.call(null,b__43105,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,(function (){var row_data = cljs.core.get.call(null,input_table,i);
var iter__26220__auto__ = ((function (i__43104,row_data,i,c__26218__auto__,size__26219__auto__,b__43105,s__43103__$2,temp__4657__auto__){
return (function geoqb$components$create_table_$_iter__43102_$_iter__43114(s__43115){
return (new cljs.core.LazySeq(null,((function (i__43104,row_data,i,c__26218__auto__,size__26219__auto__,b__43105,s__43103__$2,temp__4657__auto__){
return (function (){
var s__43115__$1 = s__43115;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__43115__$1);
if(temp__4657__auto____$1){
var s__43115__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43115__$2)){
var c__26218__auto____$1 = cljs.core.chunk_first.call(null,s__43115__$2);
var size__26219__auto____$1 = cljs.core.count.call(null,c__26218__auto____$1);
var b__43117 = cljs.core.chunk_buffer.call(null,size__26219__auto____$1);
if((function (){var i__43116 = (0);
while(true){
if((i__43116 < size__26219__auto____$1)){
var ii = cljs.core._nth.call(null,c__26218__auto____$1,i__43116);
cljs.core.chunk_append.call(null,b__43117,(function (){var cell_datum = cljs.core.get.call(null,row_data,ii);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cell_datum], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ii], null));
})());

var G__43123 = (i__43116 + (1));
i__43116 = G__43123;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43117),geoqb$components$create_table_$_iter__43102_$_iter__43114.call(null,cljs.core.chunk_rest.call(null,s__43115__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43117),null);
}
} else {
var ii = cljs.core.first.call(null,s__43115__$2);
return cljs.core.cons.call(null,(function (){var cell_datum = cljs.core.get.call(null,row_data,ii);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cell_datum], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ii], null));
})(),geoqb$components$create_table_$_iter__43102_$_iter__43114.call(null,cljs.core.rest.call(null,s__43115__$2)));
}
} else {
return null;
}
break;
}
});})(i__43104,row_data,i,c__26218__auto__,size__26219__auto__,b__43105,s__43103__$2,temp__4657__auto__))
,null,null));
});})(i__43104,row_data,i,c__26218__auto__,size__26219__auto__,b__43105,s__43103__$2,temp__4657__auto__))
;
return iter__26220__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,row_data)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__43124 = (i__43104 + (1));
i__43104 = G__43124;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43105),geoqb$components$create_table_$_iter__43102.call(null,cljs.core.chunk_rest.call(null,s__43103__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43105),null);
}
} else {
var i = cljs.core.first.call(null,s__43103__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,(function (){var row_data = cljs.core.get.call(null,input_table,i);
var iter__26220__auto__ = ((function (row_data,i,s__43103__$2,temp__4657__auto__){
return (function geoqb$components$create_table_$_iter__43102_$_iter__43118(s__43119){
return (new cljs.core.LazySeq(null,((function (row_data,i,s__43103__$2,temp__4657__auto__){
return (function (){
var s__43119__$1 = s__43119;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__43119__$1);
if(temp__4657__auto____$1){
var s__43119__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43119__$2)){
var c__26218__auto__ = cljs.core.chunk_first.call(null,s__43119__$2);
var size__26219__auto__ = cljs.core.count.call(null,c__26218__auto__);
var b__43121 = cljs.core.chunk_buffer.call(null,size__26219__auto__);
if((function (){var i__43120 = (0);
while(true){
if((i__43120 < size__26219__auto__)){
var ii = cljs.core._nth.call(null,c__26218__auto__,i__43120);
cljs.core.chunk_append.call(null,b__43121,(function (){var cell_datum = cljs.core.get.call(null,row_data,ii);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cell_datum], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ii], null));
})());

var G__43125 = (i__43120 + (1));
i__43120 = G__43125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43121),geoqb$components$create_table_$_iter__43102_$_iter__43118.call(null,cljs.core.chunk_rest.call(null,s__43119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43121),null);
}
} else {
var ii = cljs.core.first.call(null,s__43119__$2);
return cljs.core.cons.call(null,(function (){var cell_datum = cljs.core.get.call(null,row_data,ii);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cell_datum], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ii], null));
})(),geoqb$components$create_table_$_iter__43102_$_iter__43118.call(null,cljs.core.rest.call(null,s__43119__$2)));
}
} else {
return null;
}
break;
}
});})(row_data,i,s__43103__$2,temp__4657__auto__))
,null,null));
});})(row_data,i,s__43103__$2,temp__4657__auto__))
;
return iter__26220__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,row_data)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),geoqb$components$create_table_$_iter__43102.call(null,cljs.core.rest.call(null,s__43103__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__26220__auto__.call(null,cljs.core.range.call(null,(1),cljs.core.count.call(null,input_table)));
})()], null)], null)], null);
});
geoqb.components.create_table_geobio = (function geoqb$components$create_table_geobio(input_table){
var data_table = cljs.core.object_array.call(null,input_table);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bodyStyle","bodyStyle",-2118862489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table-layout","table-layout",-1260034150),"auto"], null),new cljs.core.Keyword(null,"fixed-header","fixed-header",1093824000),false,new cljs.core.Keyword(null,"multi-selectable","multi-selectable",328837921),false,new cljs.core.Keyword(null,"display-row-checkbox","display-row-checkbox",613576250),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-select-all","display-select-all",-1148445289),false,new cljs.core.Keyword(null,"adjust-for-checkbox","adjust-for-checkbox",-849822919),false], null),new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Scientific Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"ID"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Kingdom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Phylum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Class"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Order"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Family"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Genus"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Institution Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Status IUCN"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"POINT (lat,long)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Date Collected"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Name Collected"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Date Cataloguing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Name Cataloguing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Same as GBIF"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Same as IUCN"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_body,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-row-checkbox","display-row-checkbox",613576250),false,new cljs.core.Keyword(null,"preScanRows","preScanRows",1967095885),false], null),(function (){var iter__26220__auto__ = ((function (data_table){
return (function geoqb$components$create_table_geobio_$_iter__43130(s__43131){
return (new cljs.core.LazySeq(null,((function (data_table){
return (function (){
var s__43131__$1 = s__43131;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__43131__$1);
if(temp__4657__auto__){
var s__43131__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__43131__$2)){
var c__26218__auto__ = cljs.core.chunk_first.call(null,s__43131__$2);
var size__26219__auto__ = cljs.core.count.call(null,c__26218__auto__);
var b__43133 = cljs.core.chunk_buffer.call(null,size__26219__auto__);
if((function (){var i__43132 = (0);
while(true){
if((i__43132 < size__26219__auto__)){
var i = cljs.core._nth.call(null,c__26218__auto__,i__43132);
cljs.core.chunk_append.call(null,b__43133,cljs.core.with_meta(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),((1) + i)], null),((1) + i)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"scientificname"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"CodSpecie"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"kingdom"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"phylum"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"class"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"order"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"family"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"genus"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"institutionCode"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"occurrenceStatusIUCN"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"pontowkt"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"country"),"value"),new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"country"),"value")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"dateCollected"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"nameCollected"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"dateCataloguing"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"nameCataloguing"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,(function (){var same_gbif = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"sameAsGBIF"),"value");
if((same_gbif == null)){
return " ";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),same_gbif,new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),same_gbif], null);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,(function (){var same_iucn = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"sameAsIUCN"),"value");
if((same_iucn == null)){
return " ";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),same_iucn,new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),same_iucn], null);
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__43134 = (i__43132 + (1));
i__43132 = G__43134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43133),geoqb$components$create_table_geobio_$_iter__43130.call(null,cljs.core.chunk_rest.call(null,s__43131__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__43133),null);
}
} else {
var i = cljs.core.first.call(null,s__43131__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),((1) + i)], null),((1) + i)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"scientificname"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"CodSpecie"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"kingdom"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"phylum"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"class"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"order"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"family"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"genus"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"institutionCode"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"occurrenceStatusIUCN"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"pontowkt"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"country"),"value"),new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"country"),"value")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"dateCollected"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"nameCollected"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"dateCataloguing"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"nameCataloguing"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,(function (){var same_gbif = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"sameAsGBIF"),"value");
if((same_gbif == null)){
return " ";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),same_gbif,new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),same_gbif], null);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,(function (){var same_iucn = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"sameAsIUCN"),"value");
if((same_iucn == null)){
return " ";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),same_iucn,new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),same_iucn], null);
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),geoqb$components$create_table_geobio_$_iter__43130.call(null,cljs.core.rest.call(null,s__43131__$2)));
}
} else {
return null;
}
break;
}
});})(data_table))
,null,null));
});})(data_table))
;
return iter__26220__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,data_table)));
})()], null)], null)], null);
});
geoqb.components.teste = (function geoqb$components$teste(num){
return cljs.core.reset_BANG_.call(null,num,(cljs.core.deref.call(null,num) + (1)));
});

//# sourceMappingURL=components.js.map?rel=1502108343948