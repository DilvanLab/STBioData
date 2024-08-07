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
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__26552__auto__ = [];
var len__26545__auto___41894 = arguments.length;
var i__26546__auto___41895 = (0);
while(true){
if((i__26546__auto___41895 < len__26545__auto___41894)){
args__26552__auto__.push((arguments[i__26546__auto___41895]));

var G__41896 = (i__26546__auto___41895 + (1));
i__26546__auto___41895 = G__41896;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((2) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__26553__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__41886_41897 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__41887_41898 = null;
var count__41888_41899 = (0);
var i__41889_41900 = (0);
while(true){
if((i__41889_41900 < count__41888_41899)){
var k_41901 = cljs.core._nth.call(null,chunk__41887_41898,i__41889_41900);
e.setAttribute(cljs.core.name.call(null,k_41901),cljs.core.get.call(null,attrs,k_41901));

var G__41902 = seq__41886_41897;
var G__41903 = chunk__41887_41898;
var G__41904 = count__41888_41899;
var G__41905 = (i__41889_41900 + (1));
seq__41886_41897 = G__41902;
chunk__41887_41898 = G__41903;
count__41888_41899 = G__41904;
i__41889_41900 = G__41905;
continue;
} else {
var temp__4657__auto___41906 = cljs.core.seq.call(null,seq__41886_41897);
if(temp__4657__auto___41906){
var seq__41886_41907__$1 = temp__4657__auto___41906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41886_41907__$1)){
var c__26251__auto___41908 = cljs.core.chunk_first.call(null,seq__41886_41907__$1);
var G__41909 = cljs.core.chunk_rest.call(null,seq__41886_41907__$1);
var G__41910 = c__26251__auto___41908;
var G__41911 = cljs.core.count.call(null,c__26251__auto___41908);
var G__41912 = (0);
seq__41886_41897 = G__41909;
chunk__41887_41898 = G__41910;
count__41888_41899 = G__41911;
i__41889_41900 = G__41912;
continue;
} else {
var k_41913 = cljs.core.first.call(null,seq__41886_41907__$1);
e.setAttribute(cljs.core.name.call(null,k_41913),cljs.core.get.call(null,attrs,k_41913));

var G__41914 = cljs.core.next.call(null,seq__41886_41907__$1);
var G__41915 = null;
var G__41916 = (0);
var G__41917 = (0);
seq__41886_41897 = G__41914;
chunk__41887_41898 = G__41915;
count__41888_41899 = G__41916;
i__41889_41900 = G__41917;
continue;
}
} else {
}
}
break;
}

var seq__41890_41918 = cljs.core.seq.call(null,children);
var chunk__41891_41919 = null;
var count__41892_41920 = (0);
var i__41893_41921 = (0);
while(true){
if((i__41893_41921 < count__41892_41920)){
var ch_41922 = cljs.core._nth.call(null,chunk__41891_41919,i__41893_41921);
e.appendChild(ch_41922);

var G__41923 = seq__41890_41918;
var G__41924 = chunk__41891_41919;
var G__41925 = count__41892_41920;
var G__41926 = (i__41893_41921 + (1));
seq__41890_41918 = G__41923;
chunk__41891_41919 = G__41924;
count__41892_41920 = G__41925;
i__41893_41921 = G__41926;
continue;
} else {
var temp__4657__auto___41927 = cljs.core.seq.call(null,seq__41890_41918);
if(temp__4657__auto___41927){
var seq__41890_41928__$1 = temp__4657__auto___41927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41890_41928__$1)){
var c__26251__auto___41929 = cljs.core.chunk_first.call(null,seq__41890_41928__$1);
var G__41930 = cljs.core.chunk_rest.call(null,seq__41890_41928__$1);
var G__41931 = c__26251__auto___41929;
var G__41932 = cljs.core.count.call(null,c__26251__auto___41929);
var G__41933 = (0);
seq__41890_41918 = G__41930;
chunk__41891_41919 = G__41931;
count__41892_41920 = G__41932;
i__41893_41921 = G__41933;
continue;
} else {
var ch_41934 = cljs.core.first.call(null,seq__41890_41928__$1);
e.appendChild(ch_41934);

var G__41935 = cljs.core.next.call(null,seq__41890_41928__$1);
var G__41936 = null;
var G__41937 = (0);
var G__41938 = (0);
seq__41890_41918 = G__41935;
chunk__41891_41919 = G__41936;
count__41892_41920 = G__41937;
i__41893_41921 = G__41938;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq41883){
var G__41884 = cljs.core.first.call(null,seq41883);
var seq41883__$1 = cljs.core.next.call(null,seq41883);
var G__41885 = cljs.core.first.call(null,seq41883__$1);
var seq41883__$2 = cljs.core.next.call(null,seq41883__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__41884,G__41885,seq41883__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__26365__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__26366__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__26367__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__26368__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__26369__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__26365__auto__,prefer_table__26366__auto__,method_cache__26367__auto__,cached_hierarchy__26368__auto__,hierarchy__26369__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__26365__auto__,prefer_table__26366__auto__,method_cache__26367__auto__,cached_hierarchy__26368__auto__,hierarchy__26369__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__26369__auto__,method_table__26365__auto__,prefer_table__26366__auto__,method_cache__26367__auto__,cached_hierarchy__26368__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_41939 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_41939.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_41939.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_41939.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_41939);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__41940,st_map){
var map__41947 = p__41940;
var map__41947__$1 = ((((!((map__41947 == null)))?((((map__41947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41947):map__41947);
var container_el = cljs.core.get.call(null,map__41947__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__41947,map__41947__$1,container_el){
return (function (p__41949){
var vec__41950 = p__41949;
var k = cljs.core.nth.call(null,vec__41950,(0),null);
var v = cljs.core.nth.call(null,vec__41950,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__41947,map__41947__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__41953,dom_str){
var map__41956 = p__41953;
var map__41956__$1 = ((((!((map__41956 == null)))?((((map__41956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41956.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41956):map__41956);
var c = map__41956__$1;
var content_area_el = cljs.core.get.call(null,map__41956__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__41958){
var map__41961 = p__41958;
var map__41961__$1 = ((((!((map__41961 == null)))?((((map__41961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41961):map__41961);
var content_area_el = cljs.core.get.call(null,map__41961__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__){
return (function (state_42004){
var state_val_42005 = (state_42004[(1)]);
if((state_val_42005 === (1))){
var inst_41989 = (state_42004[(7)]);
var inst_41989__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41990 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41991 = ["10px","10px","100%","68px","1.0"];
var inst_41992 = cljs.core.PersistentHashMap.fromArrays(inst_41990,inst_41991);
var inst_41993 = cljs.core.merge.call(null,inst_41992,style);
var inst_41994 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41989__$1,inst_41993);
var inst_41995 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41989__$1,msg);
var inst_41996 = cljs.core.async.timeout.call(null,(300));
var state_42004__$1 = (function (){var statearr_42006 = state_42004;
(statearr_42006[(8)] = inst_41994);

(statearr_42006[(9)] = inst_41995);

(statearr_42006[(7)] = inst_41989__$1);

return statearr_42006;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42004__$1,(2),inst_41996);
} else {
if((state_val_42005 === (2))){
var inst_41989 = (state_42004[(7)]);
var inst_41998 = (state_42004[(2)]);
var inst_41999 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_42000 = ["auto"];
var inst_42001 = cljs.core.PersistentHashMap.fromArrays(inst_41999,inst_42000);
var inst_42002 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41989,inst_42001);
var state_42004__$1 = (function (){var statearr_42007 = state_42004;
(statearr_42007[(10)] = inst_41998);

return statearr_42007;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42004__$1,inst_42002);
} else {
return null;
}
}
});})(c__34381__auto__))
;
return ((function (switch__34269__auto__,c__34381__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto____0 = (function (){
var statearr_42011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42011[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto__);

(statearr_42011[(1)] = (1));

return statearr_42011;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto____1 = (function (state_42004){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_42004);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e42012){if((e42012 instanceof Object)){
var ex__34273__auto__ = e42012;
var statearr_42013_42015 = state_42004;
(statearr_42013_42015[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42004);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42016 = state_42004;
state_42004 = G__42016;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto__ = function(state_42004){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto____1.call(this,state_42004);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__))
})();
var state__34383__auto__ = (function (){var statearr_42014 = f__34382__auto__.call(null);
(statearr_42014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_42014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__))
);

return c__34381__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args42017 = [];
var len__26545__auto___42020 = arguments.length;
var i__26546__auto___42021 = (0);
while(true){
if((i__26546__auto___42021 < len__26545__auto___42020)){
args42017.push((arguments[i__26546__auto___42021]));

var G__42022 = (i__26546__auto___42021 + (1));
i__26546__auto___42021 = G__42022;
continue;
} else {
}
break;
}

var G__42019 = args42017.length;
switch (G__42019) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42017.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__42024){
var map__42027 = p__42024;
var map__42027__$1 = ((((!((map__42027 == null)))?((((map__42027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42027.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42027):map__42027);
var file = cljs.core.get.call(null,map__42027__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42027__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42027__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__25432__auto__ = file;
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__42029){
var vec__42036 = p__42029;
var typ = cljs.core.nth.call(null,vec__42036,(0),null);
var line_number = cljs.core.nth.call(null,vec__42036,(1),null);
var line = cljs.core.nth.call(null,vec__42036,(2),null);
var pred__42039 = cljs.core._EQ_;
var expr__42040 = typ;
if(cljs.core.truth_(pred__42039.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__42040))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__42039.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__42040))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__42039.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__42040))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__42042_SHARP_){
return cljs.core.update_in.call(null,p1__42042_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__42043_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__42043_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__42046){
var map__42049 = p__42046;
var map__42049__$1 = ((((!((map__42049 == null)))?((((map__42049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42049.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42049):map__42049);
var exception = map__42049__$1;
var message = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__42049__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__25420__auto__ = file;
if(cljs.core.truth_(and__25420__auto__)){
return line;
} else {
return and__25420__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__42049,map__42049__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__42044_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42044_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__42049,map__42049__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__42049,map__42049__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__42045_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__42045_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__42045_SHARP_)))].join('');
});})(last_message,map__42049,map__42049__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__42051){
var map__42054 = p__42051;
var map__42054__$1 = ((((!((map__42054 == null)))?((((map__42054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42054):map__42054);
var file = cljs.core.get.call(null,map__42054__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42054__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42054__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__42059 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__42059__$1 = ((((!((map__42059 == null)))?((((map__42059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42059.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42059):map__42059);
var head = cljs.core.get.call(null,map__42059__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__42059__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__42059__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__42059__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__42059__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42059__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42059__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__42062){
var map__42065 = p__42062;
var map__42065__$1 = ((((!((map__42065 == null)))?((((map__42065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42065):map__42065);
var warning_data = map__42065__$1;
var file = cljs.core.get.call(null,map__42065__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42065__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42065__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__42065__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__42065__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__25420__auto__ = file;
if(cljs.core.truth_(and__25420__auto__)){
return line;
} else {
return and__25420__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__42065,map__42065__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__42061_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42061_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__42065,map__42065__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__42069 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__42069__$1 = ((((!((map__42069 == null)))?((((map__42069.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42069.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42069):map__42069);
var head = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42069__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__42071){
var map__42075 = p__42071;
var map__42075__$1 = ((((!((map__42075 == null)))?((((map__42075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42075):map__42075);
var warning_data = map__42075__$1;
var message = cljs.core.get.call(null,map__42075__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__42075__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42075__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42075__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42077 = message;
var G__42077__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42077),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42077);
var G__42077__$2 = (cljs.core.truth_((function (){var and__25420__auto__ = line;
if(cljs.core.truth_(and__25420__auto__)){
return column;
} else {
return and__25420__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42077__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__42077__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42077__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__42077__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__42078){
var map__42083 = p__42078;
var map__42083__$1 = ((((!((map__42083 == null)))?((((map__42083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42083):map__42083);
var warning_data = map__42083__$1;
var message = cljs.core.get.call(null,map__42083__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__42083__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42083__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42083__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__42085 = figwheel.client.heads_up.ensure_container.call(null);
var map__42085__$1 = ((((!((map__42085 == null)))?((((map__42085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42085.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42085):map__42085);
var content_area_el = cljs.core.get.call(null,map__42085__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__4657__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__4657__auto__)){
var last_child = temp__4657__auto__;
var temp__4655__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__4655__auto__)){
var message_count = temp__4655__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__){
return (function (state_42133){
var state_val_42134 = (state_42133[(1)]);
if((state_val_42134 === (1))){
var inst_42116 = (state_42133[(7)]);
var inst_42116__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_42117 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_42118 = ["0.0"];
var inst_42119 = cljs.core.PersistentHashMap.fromArrays(inst_42117,inst_42118);
var inst_42120 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42116__$1,inst_42119);
var inst_42121 = cljs.core.async.timeout.call(null,(300));
var state_42133__$1 = (function (){var statearr_42135 = state_42133;
(statearr_42135[(7)] = inst_42116__$1);

(statearr_42135[(8)] = inst_42120);

return statearr_42135;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42133__$1,(2),inst_42121);
} else {
if((state_val_42134 === (2))){
var inst_42116 = (state_42133[(7)]);
var inst_42123 = (state_42133[(2)]);
var inst_42124 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_42125 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_42126 = cljs.core.PersistentHashMap.fromArrays(inst_42124,inst_42125);
var inst_42127 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_42116,inst_42126);
var inst_42128 = cljs.core.async.timeout.call(null,(200));
var state_42133__$1 = (function (){var statearr_42136 = state_42133;
(statearr_42136[(9)] = inst_42127);

(statearr_42136[(10)] = inst_42123);

return statearr_42136;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42133__$1,(3),inst_42128);
} else {
if((state_val_42134 === (3))){
var inst_42116 = (state_42133[(7)]);
var inst_42130 = (state_42133[(2)]);
var inst_42131 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_42116,"");
var state_42133__$1 = (function (){var statearr_42137 = state_42133;
(statearr_42137[(11)] = inst_42130);

return statearr_42137;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42133__$1,inst_42131);
} else {
return null;
}
}
}
});})(c__34381__auto__))
;
return ((function (switch__34269__auto__,c__34381__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__34270__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__34270__auto____0 = (function (){
var statearr_42141 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42141[(0)] = figwheel$client$heads_up$clear_$_state_machine__34270__auto__);

(statearr_42141[(1)] = (1));

return statearr_42141;
});
var figwheel$client$heads_up$clear_$_state_machine__34270__auto____1 = (function (state_42133){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_42133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e42142){if((e42142 instanceof Object)){
var ex__34273__auto__ = e42142;
var statearr_42143_42145 = state_42133;
(statearr_42143_42145[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42146 = state_42133;
state_42133 = G__42146;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__34270__auto__ = function(state_42133){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__34270__auto____1.call(this,state_42133);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__34270__auto____0;
figwheel$client$heads_up$clear_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__34270__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__))
})();
var state__34383__auto__ = (function (){var statearr_42144 = f__34382__auto__.call(null);
(statearr_42144[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_42144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__))
);

return c__34381__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__){
return (function (state_42178){
var state_val_42179 = (state_42178[(1)]);
if((state_val_42179 === (1))){
var inst_42168 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_42178__$1 = state_42178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42178__$1,(2),inst_42168);
} else {
if((state_val_42179 === (2))){
var inst_42170 = (state_42178[(2)]);
var inst_42171 = cljs.core.async.timeout.call(null,(400));
var state_42178__$1 = (function (){var statearr_42180 = state_42178;
(statearr_42180[(7)] = inst_42170);

return statearr_42180;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42178__$1,(3),inst_42171);
} else {
if((state_val_42179 === (3))){
var inst_42173 = (state_42178[(2)]);
var inst_42174 = figwheel.client.heads_up.clear.call(null);
var state_42178__$1 = (function (){var statearr_42181 = state_42178;
(statearr_42181[(8)] = inst_42173);

return statearr_42181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42178__$1,(4),inst_42174);
} else {
if((state_val_42179 === (4))){
var inst_42176 = (state_42178[(2)]);
var state_42178__$1 = state_42178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42178__$1,inst_42176);
} else {
return null;
}
}
}
}
});})(c__34381__auto__))
;
return ((function (switch__34269__auto__,c__34381__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto____0 = (function (){
var statearr_42185 = [null,null,null,null,null,null,null,null,null];
(statearr_42185[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto__);

(statearr_42185[(1)] = (1));

return statearr_42185;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto____1 = (function (state_42178){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_42178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e42186){if((e42186 instanceof Object)){
var ex__34273__auto__ = e42186;
var statearr_42187_42189 = state_42178;
(statearr_42187_42189[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42190 = state_42178;
state_42178 = G__42190;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto__ = function(state_42178){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto____1.call(this,state_42178);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__))
})();
var state__34383__auto__ = (function (){var statearr_42188 = f__34382__auto__.call(null);
(statearr_42188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_42188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__))
);

return c__34381__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__4657__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__4657__auto__)){
var el = temp__4657__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1502108342006