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
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__7030__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__7030__auto__){
return or__7030__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__7030__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__21387_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__21387_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__21392 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__21393 = null;
var count__21394 = (0);
var i__21395 = (0);
while(true){
if((i__21395 < count__21394)){
var n = cljs.core._nth.call(null,chunk__21393,i__21395);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21396 = seq__21392;
var G__21397 = chunk__21393;
var G__21398 = count__21394;
var G__21399 = (i__21395 + (1));
seq__21392 = G__21396;
chunk__21393 = G__21397;
count__21394 = G__21398;
i__21395 = G__21399;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21392);
if(temp__4657__auto__){
var seq__21392__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21392__$1)){
var c__7849__auto__ = cljs.core.chunk_first.call(null,seq__21392__$1);
var G__21400 = cljs.core.chunk_rest.call(null,seq__21392__$1);
var G__21401 = c__7849__auto__;
var G__21402 = cljs.core.count.call(null,c__7849__auto__);
var G__21403 = (0);
seq__21392 = G__21400;
chunk__21393 = G__21401;
count__21394 = G__21402;
i__21395 = G__21403;
continue;
} else {
var n = cljs.core.first.call(null,seq__21392__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__21404 = cljs.core.next.call(null,seq__21392__$1);
var G__21405 = null;
var G__21406 = (0);
var G__21407 = (0);
seq__21392 = G__21404;
chunk__21393 = G__21405;
count__21394 = G__21406;
i__21395 = G__21407;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__21458_21469 = cljs.core.seq.call(null,deps);
var chunk__21459_21470 = null;
var count__21460_21471 = (0);
var i__21461_21472 = (0);
while(true){
if((i__21461_21472 < count__21460_21471)){
var dep_21473 = cljs.core._nth.call(null,chunk__21459_21470,i__21461_21472);
topo_sort_helper_STAR_.call(null,dep_21473,(depth + (1)),state);

var G__21474 = seq__21458_21469;
var G__21475 = chunk__21459_21470;
var G__21476 = count__21460_21471;
var G__21477 = (i__21461_21472 + (1));
seq__21458_21469 = G__21474;
chunk__21459_21470 = G__21475;
count__21460_21471 = G__21476;
i__21461_21472 = G__21477;
continue;
} else {
var temp__4657__auto___21478 = cljs.core.seq.call(null,seq__21458_21469);
if(temp__4657__auto___21478){
var seq__21458_21479__$1 = temp__4657__auto___21478;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21458_21479__$1)){
var c__7849__auto___21480 = cljs.core.chunk_first.call(null,seq__21458_21479__$1);
var G__21481 = cljs.core.chunk_rest.call(null,seq__21458_21479__$1);
var G__21482 = c__7849__auto___21480;
var G__21483 = cljs.core.count.call(null,c__7849__auto___21480);
var G__21484 = (0);
seq__21458_21469 = G__21481;
chunk__21459_21470 = G__21482;
count__21460_21471 = G__21483;
i__21461_21472 = G__21484;
continue;
} else {
var dep_21485 = cljs.core.first.call(null,seq__21458_21479__$1);
topo_sort_helper_STAR_.call(null,dep_21485,(depth + (1)),state);

var G__21486 = cljs.core.next.call(null,seq__21458_21479__$1);
var G__21487 = null;
var G__21488 = (0);
var G__21489 = (0);
seq__21458_21469 = G__21486;
chunk__21459_21470 = G__21487;
count__21460_21471 = G__21488;
i__21461_21472 = G__21489;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__21462){
var vec__21466 = p__21462;
var seq__21467 = cljs.core.seq.call(null,vec__21466);
var first__21468 = cljs.core.first.call(null,seq__21467);
var seq__21467__$1 = cljs.core.next.call(null,seq__21467);
var x = first__21468;
var xs = seq__21467__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__21466,seq__21467,first__21468,seq__21467__$1,x,xs,get_deps__$1){
return (function (p1__21408_SHARP_){
return clojure.set.difference.call(null,p1__21408_SHARP_,x);
});})(vec__21466,seq__21467,first__21468,seq__21467__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__21502 = cljs.core.seq.call(null,provides);
var chunk__21503 = null;
var count__21504 = (0);
var i__21505 = (0);
while(true){
if((i__21505 < count__21504)){
var prov = cljs.core._nth.call(null,chunk__21503,i__21505);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21506_21514 = cljs.core.seq.call(null,requires);
var chunk__21507_21515 = null;
var count__21508_21516 = (0);
var i__21509_21517 = (0);
while(true){
if((i__21509_21517 < count__21508_21516)){
var req_21518 = cljs.core._nth.call(null,chunk__21507_21515,i__21509_21517);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21518,prov);

var G__21519 = seq__21506_21514;
var G__21520 = chunk__21507_21515;
var G__21521 = count__21508_21516;
var G__21522 = (i__21509_21517 + (1));
seq__21506_21514 = G__21519;
chunk__21507_21515 = G__21520;
count__21508_21516 = G__21521;
i__21509_21517 = G__21522;
continue;
} else {
var temp__4657__auto___21523 = cljs.core.seq.call(null,seq__21506_21514);
if(temp__4657__auto___21523){
var seq__21506_21524__$1 = temp__4657__auto___21523;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21506_21524__$1)){
var c__7849__auto___21525 = cljs.core.chunk_first.call(null,seq__21506_21524__$1);
var G__21526 = cljs.core.chunk_rest.call(null,seq__21506_21524__$1);
var G__21527 = c__7849__auto___21525;
var G__21528 = cljs.core.count.call(null,c__7849__auto___21525);
var G__21529 = (0);
seq__21506_21514 = G__21526;
chunk__21507_21515 = G__21527;
count__21508_21516 = G__21528;
i__21509_21517 = G__21529;
continue;
} else {
var req_21530 = cljs.core.first.call(null,seq__21506_21524__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21530,prov);

var G__21531 = cljs.core.next.call(null,seq__21506_21524__$1);
var G__21532 = null;
var G__21533 = (0);
var G__21534 = (0);
seq__21506_21514 = G__21531;
chunk__21507_21515 = G__21532;
count__21508_21516 = G__21533;
i__21509_21517 = G__21534;
continue;
}
} else {
}
}
break;
}

var G__21535 = seq__21502;
var G__21536 = chunk__21503;
var G__21537 = count__21504;
var G__21538 = (i__21505 + (1));
seq__21502 = G__21535;
chunk__21503 = G__21536;
count__21504 = G__21537;
i__21505 = G__21538;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21502);
if(temp__4657__auto__){
var seq__21502__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21502__$1)){
var c__7849__auto__ = cljs.core.chunk_first.call(null,seq__21502__$1);
var G__21539 = cljs.core.chunk_rest.call(null,seq__21502__$1);
var G__21540 = c__7849__auto__;
var G__21541 = cljs.core.count.call(null,c__7849__auto__);
var G__21542 = (0);
seq__21502 = G__21539;
chunk__21503 = G__21540;
count__21504 = G__21541;
i__21505 = G__21542;
continue;
} else {
var prov = cljs.core.first.call(null,seq__21502__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__21510_21543 = cljs.core.seq.call(null,requires);
var chunk__21511_21544 = null;
var count__21512_21545 = (0);
var i__21513_21546 = (0);
while(true){
if((i__21513_21546 < count__21512_21545)){
var req_21547 = cljs.core._nth.call(null,chunk__21511_21544,i__21513_21546);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21547,prov);

var G__21548 = seq__21510_21543;
var G__21549 = chunk__21511_21544;
var G__21550 = count__21512_21545;
var G__21551 = (i__21513_21546 + (1));
seq__21510_21543 = G__21548;
chunk__21511_21544 = G__21549;
count__21512_21545 = G__21550;
i__21513_21546 = G__21551;
continue;
} else {
var temp__4657__auto___21552__$1 = cljs.core.seq.call(null,seq__21510_21543);
if(temp__4657__auto___21552__$1){
var seq__21510_21553__$1 = temp__4657__auto___21552__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21510_21553__$1)){
var c__7849__auto___21554 = cljs.core.chunk_first.call(null,seq__21510_21553__$1);
var G__21555 = cljs.core.chunk_rest.call(null,seq__21510_21553__$1);
var G__21556 = c__7849__auto___21554;
var G__21557 = cljs.core.count.call(null,c__7849__auto___21554);
var G__21558 = (0);
seq__21510_21543 = G__21555;
chunk__21511_21544 = G__21556;
count__21512_21545 = G__21557;
i__21513_21546 = G__21558;
continue;
} else {
var req_21559 = cljs.core.first.call(null,seq__21510_21553__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_21559,prov);

var G__21560 = cljs.core.next.call(null,seq__21510_21553__$1);
var G__21561 = null;
var G__21562 = (0);
var G__21563 = (0);
seq__21510_21543 = G__21560;
chunk__21511_21544 = G__21561;
count__21512_21545 = G__21562;
i__21513_21546 = G__21563;
continue;
}
} else {
}
}
break;
}

var G__21564 = cljs.core.next.call(null,seq__21502__$1);
var G__21565 = null;
var G__21566 = (0);
var G__21567 = (0);
seq__21502 = G__21564;
chunk__21503 = G__21565;
count__21504 = G__21566;
i__21505 = G__21567;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__21572_21576 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__21573_21577 = null;
var count__21574_21578 = (0);
var i__21575_21579 = (0);
while(true){
if((i__21575_21579 < count__21574_21578)){
var ns_21580 = cljs.core._nth.call(null,chunk__21573_21577,i__21575_21579);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21580);

var G__21581 = seq__21572_21576;
var G__21582 = chunk__21573_21577;
var G__21583 = count__21574_21578;
var G__21584 = (i__21575_21579 + (1));
seq__21572_21576 = G__21581;
chunk__21573_21577 = G__21582;
count__21574_21578 = G__21583;
i__21575_21579 = G__21584;
continue;
} else {
var temp__4657__auto___21585 = cljs.core.seq.call(null,seq__21572_21576);
if(temp__4657__auto___21585){
var seq__21572_21586__$1 = temp__4657__auto___21585;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21572_21586__$1)){
var c__7849__auto___21587 = cljs.core.chunk_first.call(null,seq__21572_21586__$1);
var G__21588 = cljs.core.chunk_rest.call(null,seq__21572_21586__$1);
var G__21589 = c__7849__auto___21587;
var G__21590 = cljs.core.count.call(null,c__7849__auto___21587);
var G__21591 = (0);
seq__21572_21576 = G__21588;
chunk__21573_21577 = G__21589;
count__21574_21578 = G__21590;
i__21575_21579 = G__21591;
continue;
} else {
var ns_21592 = cljs.core.first.call(null,seq__21572_21586__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_21592);

var G__21593 = cljs.core.next.call(null,seq__21572_21586__$1);
var G__21594 = null;
var G__21595 = (0);
var G__21596 = (0);
seq__21572_21576 = G__21593;
chunk__21573_21577 = G__21594;
count__21574_21578 = G__21595;
i__21575_21579 = G__21596;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__7030__auto__ = goog.require__;
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__21597__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__21597 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21598__i = 0, G__21598__a = new Array(arguments.length -  0);
while (G__21598__i < G__21598__a.length) {G__21598__a[G__21598__i] = arguments[G__21598__i + 0]; ++G__21598__i;}
  args = new cljs.core.IndexedSeq(G__21598__a,0,null);
} 
return G__21597__delegate.call(this,args);};
G__21597.cljs$lang$maxFixedArity = 0;
G__21597.cljs$lang$applyTo = (function (arglist__21599){
var args = cljs.core.seq(arglist__21599);
return G__21597__delegate(args);
});
G__21597.cljs$core$IFn$_invoke$arity$variadic = G__21597__delegate;
return G__21597;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__21600 = cljs.core._EQ_;
var expr__21601 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__21600.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__21601))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__21600,expr__21601){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__21600,expr__21601))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__21600,expr__21601){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e21603){if((e21603 instanceof Error)){
var e = e21603;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21603;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__21600,expr__21601))
} else {
if(cljs.core.truth_(pred__21600.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__21601))){
return ((function (pred__21600,expr__21601){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__21600,expr__21601){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__21600,expr__21601))
);

return deferred.addErrback(((function (deferred,pred__21600,expr__21601){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__21600,expr__21601))
);
});
;})(pred__21600,expr__21601))
} else {
if(cljs.core.truth_(pred__21600.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__21601))){
return ((function (pred__21600,expr__21601){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e21604){if((e21604 instanceof Error)){
var e = e21604;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e21604;

}
}})());
});
;})(pred__21600,expr__21601))
} else {
return ((function (pred__21600,expr__21601){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__21600,expr__21601))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__21605,callback){
var map__21608 = p__21605;
var map__21608__$1 = ((((!((map__21608 == null)))?((((map__21608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21608):map__21608);
var file_msg = map__21608__$1;
var request_url = cljs.core.get.call(null,map__21608__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__21608,map__21608__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__21608,map__21608__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__16774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto__){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto__){
return (function (state_21632){
var state_val_21633 = (state_21632[(1)]);
if((state_val_21633 === (7))){
var inst_21628 = (state_21632[(2)]);
var state_21632__$1 = state_21632;
var statearr_21634_21654 = state_21632__$1;
(statearr_21634_21654[(2)] = inst_21628);

(statearr_21634_21654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21633 === (1))){
var state_21632__$1 = state_21632;
var statearr_21635_21655 = state_21632__$1;
(statearr_21635_21655[(2)] = null);

(statearr_21635_21655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21633 === (4))){
var inst_21612 = (state_21632[(7)]);
var inst_21612__$1 = (state_21632[(2)]);
var state_21632__$1 = (function (){var statearr_21636 = state_21632;
(statearr_21636[(7)] = inst_21612__$1);

return statearr_21636;
})();
if(cljs.core.truth_(inst_21612__$1)){
var statearr_21637_21656 = state_21632__$1;
(statearr_21637_21656[(1)] = (5));

} else {
var statearr_21638_21657 = state_21632__$1;
(statearr_21638_21657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21633 === (6))){
var state_21632__$1 = state_21632;
var statearr_21639_21658 = state_21632__$1;
(statearr_21639_21658[(2)] = null);

(statearr_21639_21658[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21633 === (3))){
var inst_21630 = (state_21632[(2)]);
var state_21632__$1 = state_21632;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21632__$1,inst_21630);
} else {
if((state_val_21633 === (2))){
var state_21632__$1 = state_21632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21632__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_21633 === (11))){
var inst_21624 = (state_21632[(2)]);
var state_21632__$1 = (function (){var statearr_21640 = state_21632;
(statearr_21640[(8)] = inst_21624);

return statearr_21640;
})();
var statearr_21641_21659 = state_21632__$1;
(statearr_21641_21659[(2)] = null);

(statearr_21641_21659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21633 === (9))){
var inst_21618 = (state_21632[(9)]);
var inst_21616 = (state_21632[(10)]);
var inst_21620 = inst_21618.call(null,inst_21616);
var state_21632__$1 = state_21632;
var statearr_21642_21660 = state_21632__$1;
(statearr_21642_21660[(2)] = inst_21620);

(statearr_21642_21660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21633 === (5))){
var inst_21612 = (state_21632[(7)]);
var inst_21614 = figwheel.client.file_reloading.blocking_load.call(null,inst_21612);
var state_21632__$1 = state_21632;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21632__$1,(8),inst_21614);
} else {
if((state_val_21633 === (10))){
var inst_21616 = (state_21632[(10)]);
var inst_21622 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_21616);
var state_21632__$1 = state_21632;
var statearr_21643_21661 = state_21632__$1;
(statearr_21643_21661[(2)] = inst_21622);

(statearr_21643_21661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21633 === (8))){
var inst_21612 = (state_21632[(7)]);
var inst_21618 = (state_21632[(9)]);
var inst_21616 = (state_21632[(2)]);
var inst_21617 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_21618__$1 = cljs.core.get.call(null,inst_21617,inst_21612);
var state_21632__$1 = (function (){var statearr_21644 = state_21632;
(statearr_21644[(9)] = inst_21618__$1);

(statearr_21644[(10)] = inst_21616);

return statearr_21644;
})();
if(cljs.core.truth_(inst_21618__$1)){
var statearr_21645_21662 = state_21632__$1;
(statearr_21645_21662[(1)] = (9));

} else {
var statearr_21646_21663 = state_21632__$1;
(statearr_21646_21663[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__16774__auto__))
;
return ((function (switch__16662__auto__,c__16774__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__16663__auto__ = null;
var figwheel$client$file_reloading$state_machine__16663__auto____0 = (function (){
var statearr_21650 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21650[(0)] = figwheel$client$file_reloading$state_machine__16663__auto__);

(statearr_21650[(1)] = (1));

return statearr_21650;
});
var figwheel$client$file_reloading$state_machine__16663__auto____1 = (function (state_21632){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_21632);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e21651){if((e21651 instanceof Object)){
var ex__16666__auto__ = e21651;
var statearr_21652_21664 = state_21632;
(statearr_21652_21664[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21632);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21665 = state_21632;
state_21632 = G__21665;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__16663__auto__ = function(state_21632){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__16663__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__16663__auto____1.call(this,state_21632);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__16663__auto____0;
figwheel$client$file_reloading$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__16663__auto____1;
return figwheel$client$file_reloading$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto__))
})();
var state__16776__auto__ = (function (){var statearr_21653 = f__16775__auto__.call(null);
(statearr_21653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto__);

return statearr_21653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto__))
);

return c__16774__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__21666,callback){
var map__21669 = p__21666;
var map__21669__$1 = ((((!((map__21669 == null)))?((((map__21669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21669):map__21669);
var file_msg = map__21669__$1;
var namespace = cljs.core.get.call(null,map__21669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__21669,map__21669__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__21669,map__21669__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__21671){
var map__21674 = p__21671;
var map__21674__$1 = ((((!((map__21674 == null)))?((((map__21674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21674.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21674):map__21674);
var file_msg = map__21674__$1;
var namespace = cljs.core.get.call(null,map__21674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__21676){
var map__21679 = p__21676;
var map__21679__$1 = ((((!((map__21679 == null)))?((((map__21679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21679.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21679):map__21679);
var file_msg = map__21679__$1;
var namespace = cljs.core.get.call(null,map__21679__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__7018__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__7018__auto__){
var or__7030__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
var or__7030__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__7030__auto____$1)){
return or__7030__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__7018__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__21681,callback){
var map__21684 = p__21681;
var map__21684__$1 = ((((!((map__21684 == null)))?((((map__21684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21684):map__21684);
var file_msg = map__21684__$1;
var request_url = cljs.core.get.call(null,map__21684__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__21684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__16774__auto___21788 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___21788,out){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___21788,out){
return (function (state_21770){
var state_val_21771 = (state_21770[(1)]);
if((state_val_21771 === (1))){
var inst_21744 = cljs.core.seq.call(null,files);
var inst_21745 = cljs.core.first.call(null,inst_21744);
var inst_21746 = cljs.core.next.call(null,inst_21744);
var inst_21747 = files;
var state_21770__$1 = (function (){var statearr_21772 = state_21770;
(statearr_21772[(7)] = inst_21746);

(statearr_21772[(8)] = inst_21747);

(statearr_21772[(9)] = inst_21745);

return statearr_21772;
})();
var statearr_21773_21789 = state_21770__$1;
(statearr_21773_21789[(2)] = null);

(statearr_21773_21789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (2))){
var inst_21753 = (state_21770[(10)]);
var inst_21747 = (state_21770[(8)]);
var inst_21752 = cljs.core.seq.call(null,inst_21747);
var inst_21753__$1 = cljs.core.first.call(null,inst_21752);
var inst_21754 = cljs.core.next.call(null,inst_21752);
var inst_21755 = (inst_21753__$1 == null);
var inst_21756 = cljs.core.not.call(null,inst_21755);
var state_21770__$1 = (function (){var statearr_21774 = state_21770;
(statearr_21774[(10)] = inst_21753__$1);

(statearr_21774[(11)] = inst_21754);

return statearr_21774;
})();
if(inst_21756){
var statearr_21775_21790 = state_21770__$1;
(statearr_21775_21790[(1)] = (4));

} else {
var statearr_21776_21791 = state_21770__$1;
(statearr_21776_21791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (3))){
var inst_21768 = (state_21770[(2)]);
var state_21770__$1 = state_21770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21770__$1,inst_21768);
} else {
if((state_val_21771 === (4))){
var inst_21753 = (state_21770[(10)]);
var inst_21758 = figwheel.client.file_reloading.reload_js_file.call(null,inst_21753);
var state_21770__$1 = state_21770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21770__$1,(7),inst_21758);
} else {
if((state_val_21771 === (5))){
var inst_21764 = cljs.core.async.close_BANG_.call(null,out);
var state_21770__$1 = state_21770;
var statearr_21777_21792 = state_21770__$1;
(statearr_21777_21792[(2)] = inst_21764);

(statearr_21777_21792[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (6))){
var inst_21766 = (state_21770[(2)]);
var state_21770__$1 = state_21770;
var statearr_21778_21793 = state_21770__$1;
(statearr_21778_21793[(2)] = inst_21766);

(statearr_21778_21793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (7))){
var inst_21754 = (state_21770[(11)]);
var inst_21760 = (state_21770[(2)]);
var inst_21761 = cljs.core.async.put_BANG_.call(null,out,inst_21760);
var inst_21747 = inst_21754;
var state_21770__$1 = (function (){var statearr_21779 = state_21770;
(statearr_21779[(8)] = inst_21747);

(statearr_21779[(12)] = inst_21761);

return statearr_21779;
})();
var statearr_21780_21794 = state_21770__$1;
(statearr_21780_21794[(2)] = null);

(statearr_21780_21794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__16774__auto___21788,out))
;
return ((function (switch__16662__auto__,c__16774__auto___21788,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto____0 = (function (){
var statearr_21784 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21784[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto__);

(statearr_21784[(1)] = (1));

return statearr_21784;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto____1 = (function (state_21770){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_21770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e21785){if((e21785 instanceof Object)){
var ex__16666__auto__ = e21785;
var statearr_21786_21795 = state_21770;
(statearr_21786_21795[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21785;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21796 = state_21770;
state_21770 = G__21796;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto__ = function(state_21770){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto____1.call(this,state_21770);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___21788,out))
})();
var state__16776__auto__ = (function (){var statearr_21787 = f__16775__auto__.call(null);
(statearr_21787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___21788);

return statearr_21787;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___21788,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__21797,opts){
var map__21801 = p__21797;
var map__21801__$1 = ((((!((map__21801 == null)))?((((map__21801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21801.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21801):map__21801);
var eval_body = cljs.core.get.call(null,map__21801__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__21801__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__7018__auto__ = eval_body;
if(cljs.core.truth_(and__7018__auto__)){
return typeof eval_body === 'string';
} else {
return and__7018__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e21803){var e = e21803;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__21804_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21804_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__21813){
var vec__21814 = p__21813;
var k = cljs.core.nth.call(null,vec__21814,(0),null);
var v = cljs.core.nth.call(null,vec__21814,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__21817){
var vec__21818 = p__21817;
var k = cljs.core.nth.call(null,vec__21818,(0),null);
var v = cljs.core.nth.call(null,vec__21818,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__21824,p__21825){
var map__22073 = p__21824;
var map__22073__$1 = ((((!((map__22073 == null)))?((((map__22073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22073):map__22073);
var opts = map__22073__$1;
var before_jsload = cljs.core.get.call(null,map__22073__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__22073__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__22073__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__22074 = p__21825;
var map__22074__$1 = ((((!((map__22074 == null)))?((((map__22074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22074.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22074):map__22074);
var msg = map__22074__$1;
var files = cljs.core.get.call(null,map__22074__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__22074__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__22074__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__16774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_22228){
var state_val_22229 = (state_22228[(1)]);
if((state_val_22229 === (7))){
var inst_22089 = (state_22228[(7)]);
var inst_22091 = (state_22228[(8)]);
var inst_22088 = (state_22228[(9)]);
var inst_22090 = (state_22228[(10)]);
var inst_22096 = cljs.core._nth.call(null,inst_22089,inst_22091);
var inst_22097 = figwheel.client.file_reloading.eval_body.call(null,inst_22096,opts);
var inst_22098 = (inst_22091 + (1));
var tmp22230 = inst_22089;
var tmp22231 = inst_22088;
var tmp22232 = inst_22090;
var inst_22088__$1 = tmp22231;
var inst_22089__$1 = tmp22230;
var inst_22090__$1 = tmp22232;
var inst_22091__$1 = inst_22098;
var state_22228__$1 = (function (){var statearr_22233 = state_22228;
(statearr_22233[(7)] = inst_22089__$1);

(statearr_22233[(11)] = inst_22097);

(statearr_22233[(8)] = inst_22091__$1);

(statearr_22233[(9)] = inst_22088__$1);

(statearr_22233[(10)] = inst_22090__$1);

return statearr_22233;
})();
var statearr_22234_22320 = state_22228__$1;
(statearr_22234_22320[(2)] = null);

(statearr_22234_22320[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (20))){
var inst_22131 = (state_22228[(12)]);
var inst_22139 = figwheel.client.file_reloading.sort_files.call(null,inst_22131);
var state_22228__$1 = state_22228;
var statearr_22235_22321 = state_22228__$1;
(statearr_22235_22321[(2)] = inst_22139);

(statearr_22235_22321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (27))){
var state_22228__$1 = state_22228;
var statearr_22236_22322 = state_22228__$1;
(statearr_22236_22322[(2)] = null);

(statearr_22236_22322[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (1))){
var inst_22080 = (state_22228[(13)]);
var inst_22077 = before_jsload.call(null,files);
var inst_22078 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_22079 = (function (){return ((function (inst_22080,inst_22077,inst_22078,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21821_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21821_SHARP_);
});
;})(inst_22080,inst_22077,inst_22078,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22080__$1 = cljs.core.filter.call(null,inst_22079,files);
var inst_22081 = cljs.core.not_empty.call(null,inst_22080__$1);
var state_22228__$1 = (function (){var statearr_22237 = state_22228;
(statearr_22237[(13)] = inst_22080__$1);

(statearr_22237[(14)] = inst_22078);

(statearr_22237[(15)] = inst_22077);

return statearr_22237;
})();
if(cljs.core.truth_(inst_22081)){
var statearr_22238_22323 = state_22228__$1;
(statearr_22238_22323[(1)] = (2));

} else {
var statearr_22239_22324 = state_22228__$1;
(statearr_22239_22324[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (24))){
var state_22228__$1 = state_22228;
var statearr_22240_22325 = state_22228__$1;
(statearr_22240_22325[(2)] = null);

(statearr_22240_22325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (39))){
var inst_22181 = (state_22228[(16)]);
var state_22228__$1 = state_22228;
var statearr_22241_22326 = state_22228__$1;
(statearr_22241_22326[(2)] = inst_22181);

(statearr_22241_22326[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (46))){
var inst_22223 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
var statearr_22242_22327 = state_22228__$1;
(statearr_22242_22327[(2)] = inst_22223);

(statearr_22242_22327[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (4))){
var inst_22125 = (state_22228[(2)]);
var inst_22126 = cljs.core.List.EMPTY;
var inst_22127 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_22126);
var inst_22128 = (function (){return ((function (inst_22125,inst_22126,inst_22127,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21822_SHARP_){
var and__7018__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__21822_SHARP_);
if(cljs.core.truth_(and__7018__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__21822_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__21822_SHARP_)));
} else {
return and__7018__auto__;
}
});
;})(inst_22125,inst_22126,inst_22127,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22129 = cljs.core.filter.call(null,inst_22128,files);
var inst_22130 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_22131 = cljs.core.concat.call(null,inst_22129,inst_22130);
var state_22228__$1 = (function (){var statearr_22243 = state_22228;
(statearr_22243[(17)] = inst_22125);

(statearr_22243[(12)] = inst_22131);

(statearr_22243[(18)] = inst_22127);

return statearr_22243;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_22244_22328 = state_22228__$1;
(statearr_22244_22328[(1)] = (16));

} else {
var statearr_22245_22329 = state_22228__$1;
(statearr_22245_22329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (15))){
var inst_22115 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
var statearr_22246_22330 = state_22228__$1;
(statearr_22246_22330[(2)] = inst_22115);

(statearr_22246_22330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (21))){
var inst_22141 = (state_22228[(19)]);
var inst_22141__$1 = (state_22228[(2)]);
var inst_22142 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_22141__$1);
var state_22228__$1 = (function (){var statearr_22247 = state_22228;
(statearr_22247[(19)] = inst_22141__$1);

return statearr_22247;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22228__$1,(22),inst_22142);
} else {
if((state_val_22229 === (31))){
var inst_22226 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22228__$1,inst_22226);
} else {
if((state_val_22229 === (32))){
var inst_22181 = (state_22228[(16)]);
var inst_22186 = inst_22181.cljs$lang$protocol_mask$partition0$;
var inst_22187 = (inst_22186 & (64));
var inst_22188 = inst_22181.cljs$core$ISeq$;
var inst_22189 = (cljs.core.PROTOCOL_SENTINEL === inst_22188);
var inst_22190 = (inst_22187) || (inst_22189);
var state_22228__$1 = state_22228;
if(cljs.core.truth_(inst_22190)){
var statearr_22248_22331 = state_22228__$1;
(statearr_22248_22331[(1)] = (35));

} else {
var statearr_22249_22332 = state_22228__$1;
(statearr_22249_22332[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (40))){
var inst_22203 = (state_22228[(20)]);
var inst_22202 = (state_22228[(2)]);
var inst_22203__$1 = cljs.core.get.call(null,inst_22202,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_22204 = cljs.core.get.call(null,inst_22202,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_22205 = cljs.core.not_empty.call(null,inst_22203__$1);
var state_22228__$1 = (function (){var statearr_22250 = state_22228;
(statearr_22250[(21)] = inst_22204);

(statearr_22250[(20)] = inst_22203__$1);

return statearr_22250;
})();
if(cljs.core.truth_(inst_22205)){
var statearr_22251_22333 = state_22228__$1;
(statearr_22251_22333[(1)] = (41));

} else {
var statearr_22252_22334 = state_22228__$1;
(statearr_22252_22334[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (33))){
var state_22228__$1 = state_22228;
var statearr_22253_22335 = state_22228__$1;
(statearr_22253_22335[(2)] = false);

(statearr_22253_22335[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (13))){
var inst_22101 = (state_22228[(22)]);
var inst_22105 = cljs.core.chunk_first.call(null,inst_22101);
var inst_22106 = cljs.core.chunk_rest.call(null,inst_22101);
var inst_22107 = cljs.core.count.call(null,inst_22105);
var inst_22088 = inst_22106;
var inst_22089 = inst_22105;
var inst_22090 = inst_22107;
var inst_22091 = (0);
var state_22228__$1 = (function (){var statearr_22254 = state_22228;
(statearr_22254[(7)] = inst_22089);

(statearr_22254[(8)] = inst_22091);

(statearr_22254[(9)] = inst_22088);

(statearr_22254[(10)] = inst_22090);

return statearr_22254;
})();
var statearr_22255_22336 = state_22228__$1;
(statearr_22255_22336[(2)] = null);

(statearr_22255_22336[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (22))){
var inst_22149 = (state_22228[(23)]);
var inst_22144 = (state_22228[(24)]);
var inst_22141 = (state_22228[(19)]);
var inst_22145 = (state_22228[(25)]);
var inst_22144__$1 = (state_22228[(2)]);
var inst_22145__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22144__$1);
var inst_22146 = (function (){var all_files = inst_22141;
var res_SINGLEQUOTE_ = inst_22144__$1;
var res = inst_22145__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_22149,inst_22144,inst_22141,inst_22145,inst_22144__$1,inst_22145__$1,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__21823_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__21823_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_22149,inst_22144,inst_22141,inst_22145,inst_22144__$1,inst_22145__$1,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22147 = cljs.core.filter.call(null,inst_22146,inst_22144__$1);
var inst_22148 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_22149__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_22148);
var inst_22150 = cljs.core.not_empty.call(null,inst_22149__$1);
var state_22228__$1 = (function (){var statearr_22256 = state_22228;
(statearr_22256[(26)] = inst_22147);

(statearr_22256[(23)] = inst_22149__$1);

(statearr_22256[(24)] = inst_22144__$1);

(statearr_22256[(25)] = inst_22145__$1);

return statearr_22256;
})();
if(cljs.core.truth_(inst_22150)){
var statearr_22257_22337 = state_22228__$1;
(statearr_22257_22337[(1)] = (23));

} else {
var statearr_22258_22338 = state_22228__$1;
(statearr_22258_22338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (36))){
var state_22228__$1 = state_22228;
var statearr_22259_22339 = state_22228__$1;
(statearr_22259_22339[(2)] = false);

(statearr_22259_22339[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (41))){
var inst_22203 = (state_22228[(20)]);
var inst_22207 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_22208 = cljs.core.map.call(null,inst_22207,inst_22203);
var inst_22209 = cljs.core.pr_str.call(null,inst_22208);
var inst_22210 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22209)].join('');
var inst_22211 = figwheel.client.utils.log.call(null,inst_22210);
var state_22228__$1 = state_22228;
var statearr_22260_22340 = state_22228__$1;
(statearr_22260_22340[(2)] = inst_22211);

(statearr_22260_22340[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (43))){
var inst_22204 = (state_22228[(21)]);
var inst_22214 = (state_22228[(2)]);
var inst_22215 = cljs.core.not_empty.call(null,inst_22204);
var state_22228__$1 = (function (){var statearr_22261 = state_22228;
(statearr_22261[(27)] = inst_22214);

return statearr_22261;
})();
if(cljs.core.truth_(inst_22215)){
var statearr_22262_22341 = state_22228__$1;
(statearr_22262_22341[(1)] = (44));

} else {
var statearr_22263_22342 = state_22228__$1;
(statearr_22263_22342[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (29))){
var inst_22147 = (state_22228[(26)]);
var inst_22181 = (state_22228[(16)]);
var inst_22149 = (state_22228[(23)]);
var inst_22144 = (state_22228[(24)]);
var inst_22141 = (state_22228[(19)]);
var inst_22145 = (state_22228[(25)]);
var inst_22177 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_22180 = (function (){var all_files = inst_22141;
var res_SINGLEQUOTE_ = inst_22144;
var res = inst_22145;
var files_not_loaded = inst_22147;
var dependencies_that_loaded = inst_22149;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22147,inst_22181,inst_22149,inst_22144,inst_22141,inst_22145,inst_22177,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22179){
var map__22264 = p__22179;
var map__22264__$1 = ((((!((map__22264 == null)))?((((map__22264.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22264.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22264):map__22264);
var namespace = cljs.core.get.call(null,map__22264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22147,inst_22181,inst_22149,inst_22144,inst_22141,inst_22145,inst_22177,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22181__$1 = cljs.core.group_by.call(null,inst_22180,inst_22147);
var inst_22183 = (inst_22181__$1 == null);
var inst_22184 = cljs.core.not.call(null,inst_22183);
var state_22228__$1 = (function (){var statearr_22266 = state_22228;
(statearr_22266[(16)] = inst_22181__$1);

(statearr_22266[(28)] = inst_22177);

return statearr_22266;
})();
if(inst_22184){
var statearr_22267_22343 = state_22228__$1;
(statearr_22267_22343[(1)] = (32));

} else {
var statearr_22268_22344 = state_22228__$1;
(statearr_22268_22344[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (44))){
var inst_22204 = (state_22228[(21)]);
var inst_22217 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_22204);
var inst_22218 = cljs.core.pr_str.call(null,inst_22217);
var inst_22219 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22218)].join('');
var inst_22220 = figwheel.client.utils.log.call(null,inst_22219);
var state_22228__$1 = state_22228;
var statearr_22269_22345 = state_22228__$1;
(statearr_22269_22345[(2)] = inst_22220);

(statearr_22269_22345[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (6))){
var inst_22122 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
var statearr_22270_22346 = state_22228__$1;
(statearr_22270_22346[(2)] = inst_22122);

(statearr_22270_22346[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (28))){
var inst_22147 = (state_22228[(26)]);
var inst_22174 = (state_22228[(2)]);
var inst_22175 = cljs.core.not_empty.call(null,inst_22147);
var state_22228__$1 = (function (){var statearr_22271 = state_22228;
(statearr_22271[(29)] = inst_22174);

return statearr_22271;
})();
if(cljs.core.truth_(inst_22175)){
var statearr_22272_22347 = state_22228__$1;
(statearr_22272_22347[(1)] = (29));

} else {
var statearr_22273_22348 = state_22228__$1;
(statearr_22273_22348[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (25))){
var inst_22145 = (state_22228[(25)]);
var inst_22161 = (state_22228[(2)]);
var inst_22162 = cljs.core.not_empty.call(null,inst_22145);
var state_22228__$1 = (function (){var statearr_22274 = state_22228;
(statearr_22274[(30)] = inst_22161);

return statearr_22274;
})();
if(cljs.core.truth_(inst_22162)){
var statearr_22275_22349 = state_22228__$1;
(statearr_22275_22349[(1)] = (26));

} else {
var statearr_22276_22350 = state_22228__$1;
(statearr_22276_22350[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (34))){
var inst_22197 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
if(cljs.core.truth_(inst_22197)){
var statearr_22277_22351 = state_22228__$1;
(statearr_22277_22351[(1)] = (38));

} else {
var statearr_22278_22352 = state_22228__$1;
(statearr_22278_22352[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (17))){
var state_22228__$1 = state_22228;
var statearr_22279_22353 = state_22228__$1;
(statearr_22279_22353[(2)] = recompile_dependents);

(statearr_22279_22353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (3))){
var state_22228__$1 = state_22228;
var statearr_22280_22354 = state_22228__$1;
(statearr_22280_22354[(2)] = null);

(statearr_22280_22354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (12))){
var inst_22118 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
var statearr_22281_22355 = state_22228__$1;
(statearr_22281_22355[(2)] = inst_22118);

(statearr_22281_22355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (2))){
var inst_22080 = (state_22228[(13)]);
var inst_22087 = cljs.core.seq.call(null,inst_22080);
var inst_22088 = inst_22087;
var inst_22089 = null;
var inst_22090 = (0);
var inst_22091 = (0);
var state_22228__$1 = (function (){var statearr_22282 = state_22228;
(statearr_22282[(7)] = inst_22089);

(statearr_22282[(8)] = inst_22091);

(statearr_22282[(9)] = inst_22088);

(statearr_22282[(10)] = inst_22090);

return statearr_22282;
})();
var statearr_22283_22356 = state_22228__$1;
(statearr_22283_22356[(2)] = null);

(statearr_22283_22356[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (23))){
var inst_22147 = (state_22228[(26)]);
var inst_22149 = (state_22228[(23)]);
var inst_22144 = (state_22228[(24)]);
var inst_22141 = (state_22228[(19)]);
var inst_22145 = (state_22228[(25)]);
var inst_22152 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_22154 = (function (){var all_files = inst_22141;
var res_SINGLEQUOTE_ = inst_22144;
var res = inst_22145;
var files_not_loaded = inst_22147;
var dependencies_that_loaded = inst_22149;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22147,inst_22149,inst_22144,inst_22141,inst_22145,inst_22152,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22153){
var map__22284 = p__22153;
var map__22284__$1 = ((((!((map__22284 == null)))?((((map__22284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22284.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22284):map__22284);
var request_url = cljs.core.get.call(null,map__22284__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22147,inst_22149,inst_22144,inst_22141,inst_22145,inst_22152,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22155 = cljs.core.reverse.call(null,inst_22149);
var inst_22156 = cljs.core.map.call(null,inst_22154,inst_22155);
var inst_22157 = cljs.core.pr_str.call(null,inst_22156);
var inst_22158 = figwheel.client.utils.log.call(null,inst_22157);
var state_22228__$1 = (function (){var statearr_22286 = state_22228;
(statearr_22286[(31)] = inst_22152);

return statearr_22286;
})();
var statearr_22287_22357 = state_22228__$1;
(statearr_22287_22357[(2)] = inst_22158);

(statearr_22287_22357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (35))){
var state_22228__$1 = state_22228;
var statearr_22288_22358 = state_22228__$1;
(statearr_22288_22358[(2)] = true);

(statearr_22288_22358[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (19))){
var inst_22131 = (state_22228[(12)]);
var inst_22137 = figwheel.client.file_reloading.expand_files.call(null,inst_22131);
var state_22228__$1 = state_22228;
var statearr_22289_22359 = state_22228__$1;
(statearr_22289_22359[(2)] = inst_22137);

(statearr_22289_22359[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (11))){
var state_22228__$1 = state_22228;
var statearr_22290_22360 = state_22228__$1;
(statearr_22290_22360[(2)] = null);

(statearr_22290_22360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (9))){
var inst_22120 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
var statearr_22291_22361 = state_22228__$1;
(statearr_22291_22361[(2)] = inst_22120);

(statearr_22291_22361[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (5))){
var inst_22091 = (state_22228[(8)]);
var inst_22090 = (state_22228[(10)]);
var inst_22093 = (inst_22091 < inst_22090);
var inst_22094 = inst_22093;
var state_22228__$1 = state_22228;
if(cljs.core.truth_(inst_22094)){
var statearr_22292_22362 = state_22228__$1;
(statearr_22292_22362[(1)] = (7));

} else {
var statearr_22293_22363 = state_22228__$1;
(statearr_22293_22363[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (14))){
var inst_22101 = (state_22228[(22)]);
var inst_22110 = cljs.core.first.call(null,inst_22101);
var inst_22111 = figwheel.client.file_reloading.eval_body.call(null,inst_22110,opts);
var inst_22112 = cljs.core.next.call(null,inst_22101);
var inst_22088 = inst_22112;
var inst_22089 = null;
var inst_22090 = (0);
var inst_22091 = (0);
var state_22228__$1 = (function (){var statearr_22294 = state_22228;
(statearr_22294[(7)] = inst_22089);

(statearr_22294[(32)] = inst_22111);

(statearr_22294[(8)] = inst_22091);

(statearr_22294[(9)] = inst_22088);

(statearr_22294[(10)] = inst_22090);

return statearr_22294;
})();
var statearr_22295_22364 = state_22228__$1;
(statearr_22295_22364[(2)] = null);

(statearr_22295_22364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (45))){
var state_22228__$1 = state_22228;
var statearr_22296_22365 = state_22228__$1;
(statearr_22296_22365[(2)] = null);

(statearr_22296_22365[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (26))){
var inst_22147 = (state_22228[(26)]);
var inst_22149 = (state_22228[(23)]);
var inst_22144 = (state_22228[(24)]);
var inst_22141 = (state_22228[(19)]);
var inst_22145 = (state_22228[(25)]);
var inst_22164 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_22166 = (function (){var all_files = inst_22141;
var res_SINGLEQUOTE_ = inst_22144;
var res = inst_22145;
var files_not_loaded = inst_22147;
var dependencies_that_loaded = inst_22149;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22147,inst_22149,inst_22144,inst_22141,inst_22145,inst_22164,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__22165){
var map__22297 = p__22165;
var map__22297__$1 = ((((!((map__22297 == null)))?((((map__22297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22297.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22297):map__22297);
var namespace = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__22297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22147,inst_22149,inst_22144,inst_22141,inst_22145,inst_22164,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22167 = cljs.core.map.call(null,inst_22166,inst_22145);
var inst_22168 = cljs.core.pr_str.call(null,inst_22167);
var inst_22169 = figwheel.client.utils.log.call(null,inst_22168);
var inst_22170 = (function (){var all_files = inst_22141;
var res_SINGLEQUOTE_ = inst_22144;
var res = inst_22145;
var files_not_loaded = inst_22147;
var dependencies_that_loaded = inst_22149;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22147,inst_22149,inst_22144,inst_22141,inst_22145,inst_22164,inst_22166,inst_22167,inst_22168,inst_22169,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_22147,inst_22149,inst_22144,inst_22141,inst_22145,inst_22164,inst_22166,inst_22167,inst_22168,inst_22169,state_val_22229,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_22171 = setTimeout(inst_22170,(10));
var state_22228__$1 = (function (){var statearr_22299 = state_22228;
(statearr_22299[(33)] = inst_22164);

(statearr_22299[(34)] = inst_22169);

return statearr_22299;
})();
var statearr_22300_22366 = state_22228__$1;
(statearr_22300_22366[(2)] = inst_22171);

(statearr_22300_22366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (16))){
var state_22228__$1 = state_22228;
var statearr_22301_22367 = state_22228__$1;
(statearr_22301_22367[(2)] = reload_dependents);

(statearr_22301_22367[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (38))){
var inst_22181 = (state_22228[(16)]);
var inst_22199 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22181);
var state_22228__$1 = state_22228;
var statearr_22302_22368 = state_22228__$1;
(statearr_22302_22368[(2)] = inst_22199);

(statearr_22302_22368[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (30))){
var state_22228__$1 = state_22228;
var statearr_22303_22369 = state_22228__$1;
(statearr_22303_22369[(2)] = null);

(statearr_22303_22369[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (10))){
var inst_22101 = (state_22228[(22)]);
var inst_22103 = cljs.core.chunked_seq_QMARK_.call(null,inst_22101);
var state_22228__$1 = state_22228;
if(inst_22103){
var statearr_22304_22370 = state_22228__$1;
(statearr_22304_22370[(1)] = (13));

} else {
var statearr_22305_22371 = state_22228__$1;
(statearr_22305_22371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (18))){
var inst_22135 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
if(cljs.core.truth_(inst_22135)){
var statearr_22306_22372 = state_22228__$1;
(statearr_22306_22372[(1)] = (19));

} else {
var statearr_22307_22373 = state_22228__$1;
(statearr_22307_22373[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (42))){
var state_22228__$1 = state_22228;
var statearr_22308_22374 = state_22228__$1;
(statearr_22308_22374[(2)] = null);

(statearr_22308_22374[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (37))){
var inst_22194 = (state_22228[(2)]);
var state_22228__$1 = state_22228;
var statearr_22309_22375 = state_22228__$1;
(statearr_22309_22375[(2)] = inst_22194);

(statearr_22309_22375[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22229 === (8))){
var inst_22101 = (state_22228[(22)]);
var inst_22088 = (state_22228[(9)]);
var inst_22101__$1 = cljs.core.seq.call(null,inst_22088);
var state_22228__$1 = (function (){var statearr_22310 = state_22228;
(statearr_22310[(22)] = inst_22101__$1);

return statearr_22310;
})();
if(inst_22101__$1){
var statearr_22311_22376 = state_22228__$1;
(statearr_22311_22376[(1)] = (10));

} else {
var statearr_22312_22377 = state_22228__$1;
(statearr_22312_22377[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__16662__auto__,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto____0 = (function (){
var statearr_22316 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22316[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto__);

(statearr_22316[(1)] = (1));

return statearr_22316;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto____1 = (function (state_22228){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_22228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e22317){if((e22317 instanceof Object)){
var ex__16666__auto__ = e22317;
var statearr_22318_22378 = state_22228;
(statearr_22318_22378[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22379 = state_22228;
state_22228 = G__22379;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto__ = function(state_22228){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto____1.call(this,state_22228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__16776__auto__ = (function (){var statearr_22319 = f__16775__auto__.call(null);
(statearr_22319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto__);

return statearr_22319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto__,map__22073,map__22073__$1,opts,before_jsload,on_jsload,reload_dependents,map__22074,map__22074__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__16774__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__22382,link){
var map__22385 = p__22382;
var map__22385__$1 = ((((!((map__22385 == null)))?((((map__22385.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22385.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22385):map__22385);
var file = cljs.core.get.call(null,map__22385__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__22385,map__22385__$1,file){
return (function (p1__22380_SHARP_,p2__22381_SHARP_){
if(cljs.core._EQ_.call(null,p1__22380_SHARP_,p2__22381_SHARP_)){
return p1__22380_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__22385,map__22385__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__22391){
var map__22392 = p__22391;
var map__22392__$1 = ((((!((map__22392 == null)))?((((map__22392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22392):map__22392);
var match_length = cljs.core.get.call(null,map__22392__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__22392__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__22387_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__22387_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__22394_SHARP_,p2__22395_SHARP_){
return cljs.core.assoc.call(null,p1__22394_SHARP_,cljs.core.get.call(null,p2__22395_SHARP_,key),p2__22395_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_22396 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_22396);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_22396);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__22397,p__22398){
var map__22403 = p__22397;
var map__22403__$1 = ((((!((map__22403 == null)))?((((map__22403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22403.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22403):map__22403);
var on_cssload = cljs.core.get.call(null,map__22403__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__22404 = p__22398;
var map__22404__$1 = ((((!((map__22404 == null)))?((((map__22404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22404.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22404):map__22404);
var files_msg = map__22404__$1;
var files = cljs.core.get.call(null,map__22404__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map