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
var or__25432__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25432__auto__){
return or__25432__auto__;
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
var or__25432__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39321_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39321_SHARP_));
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
var seq__39326 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39327 = null;
var count__39328 = (0);
var i__39329 = (0);
while(true){
if((i__39329 < count__39328)){
var n = cljs.core._nth.call(null,chunk__39327,i__39329);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39330 = seq__39326;
var G__39331 = chunk__39327;
var G__39332 = count__39328;
var G__39333 = (i__39329 + (1));
seq__39326 = G__39330;
chunk__39327 = G__39331;
count__39328 = G__39332;
i__39329 = G__39333;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39326);
if(temp__4657__auto__){
var seq__39326__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39326__$1)){
var c__26251__auto__ = cljs.core.chunk_first.call(null,seq__39326__$1);
var G__39334 = cljs.core.chunk_rest.call(null,seq__39326__$1);
var G__39335 = c__26251__auto__;
var G__39336 = cljs.core.count.call(null,c__26251__auto__);
var G__39337 = (0);
seq__39326 = G__39334;
chunk__39327 = G__39335;
count__39328 = G__39336;
i__39329 = G__39337;
continue;
} else {
var n = cljs.core.first.call(null,seq__39326__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39338 = cljs.core.next.call(null,seq__39326__$1);
var G__39339 = null;
var G__39340 = (0);
var G__39341 = (0);
seq__39326 = G__39338;
chunk__39327 = G__39339;
count__39328 = G__39340;
i__39329 = G__39341;
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

var seq__39392_39403 = cljs.core.seq.call(null,deps);
var chunk__39393_39404 = null;
var count__39394_39405 = (0);
var i__39395_39406 = (0);
while(true){
if((i__39395_39406 < count__39394_39405)){
var dep_39407 = cljs.core._nth.call(null,chunk__39393_39404,i__39395_39406);
topo_sort_helper_STAR_.call(null,dep_39407,(depth + (1)),state);

var G__39408 = seq__39392_39403;
var G__39409 = chunk__39393_39404;
var G__39410 = count__39394_39405;
var G__39411 = (i__39395_39406 + (1));
seq__39392_39403 = G__39408;
chunk__39393_39404 = G__39409;
count__39394_39405 = G__39410;
i__39395_39406 = G__39411;
continue;
} else {
var temp__4657__auto___39412 = cljs.core.seq.call(null,seq__39392_39403);
if(temp__4657__auto___39412){
var seq__39392_39413__$1 = temp__4657__auto___39412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39392_39413__$1)){
var c__26251__auto___39414 = cljs.core.chunk_first.call(null,seq__39392_39413__$1);
var G__39415 = cljs.core.chunk_rest.call(null,seq__39392_39413__$1);
var G__39416 = c__26251__auto___39414;
var G__39417 = cljs.core.count.call(null,c__26251__auto___39414);
var G__39418 = (0);
seq__39392_39403 = G__39415;
chunk__39393_39404 = G__39416;
count__39394_39405 = G__39417;
i__39395_39406 = G__39418;
continue;
} else {
var dep_39419 = cljs.core.first.call(null,seq__39392_39413__$1);
topo_sort_helper_STAR_.call(null,dep_39419,(depth + (1)),state);

var G__39420 = cljs.core.next.call(null,seq__39392_39413__$1);
var G__39421 = null;
var G__39422 = (0);
var G__39423 = (0);
seq__39392_39403 = G__39420;
chunk__39393_39404 = G__39421;
count__39394_39405 = G__39422;
i__39395_39406 = G__39423;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39396){
var vec__39400 = p__39396;
var seq__39401 = cljs.core.seq.call(null,vec__39400);
var first__39402 = cljs.core.first.call(null,seq__39401);
var seq__39401__$1 = cljs.core.next.call(null,seq__39401);
var x = first__39402;
var xs = seq__39401__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39400,seq__39401,first__39402,seq__39401__$1,x,xs,get_deps__$1){
return (function (p1__39342_SHARP_){
return clojure.set.difference.call(null,p1__39342_SHARP_,x);
});})(vec__39400,seq__39401,first__39402,seq__39401__$1,x,xs,get_deps__$1))
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
var seq__39436 = cljs.core.seq.call(null,provides);
var chunk__39437 = null;
var count__39438 = (0);
var i__39439 = (0);
while(true){
if((i__39439 < count__39438)){
var prov = cljs.core._nth.call(null,chunk__39437,i__39439);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39440_39448 = cljs.core.seq.call(null,requires);
var chunk__39441_39449 = null;
var count__39442_39450 = (0);
var i__39443_39451 = (0);
while(true){
if((i__39443_39451 < count__39442_39450)){
var req_39452 = cljs.core._nth.call(null,chunk__39441_39449,i__39443_39451);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39452,prov);

var G__39453 = seq__39440_39448;
var G__39454 = chunk__39441_39449;
var G__39455 = count__39442_39450;
var G__39456 = (i__39443_39451 + (1));
seq__39440_39448 = G__39453;
chunk__39441_39449 = G__39454;
count__39442_39450 = G__39455;
i__39443_39451 = G__39456;
continue;
} else {
var temp__4657__auto___39457 = cljs.core.seq.call(null,seq__39440_39448);
if(temp__4657__auto___39457){
var seq__39440_39458__$1 = temp__4657__auto___39457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39440_39458__$1)){
var c__26251__auto___39459 = cljs.core.chunk_first.call(null,seq__39440_39458__$1);
var G__39460 = cljs.core.chunk_rest.call(null,seq__39440_39458__$1);
var G__39461 = c__26251__auto___39459;
var G__39462 = cljs.core.count.call(null,c__26251__auto___39459);
var G__39463 = (0);
seq__39440_39448 = G__39460;
chunk__39441_39449 = G__39461;
count__39442_39450 = G__39462;
i__39443_39451 = G__39463;
continue;
} else {
var req_39464 = cljs.core.first.call(null,seq__39440_39458__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39464,prov);

var G__39465 = cljs.core.next.call(null,seq__39440_39458__$1);
var G__39466 = null;
var G__39467 = (0);
var G__39468 = (0);
seq__39440_39448 = G__39465;
chunk__39441_39449 = G__39466;
count__39442_39450 = G__39467;
i__39443_39451 = G__39468;
continue;
}
} else {
}
}
break;
}

var G__39469 = seq__39436;
var G__39470 = chunk__39437;
var G__39471 = count__39438;
var G__39472 = (i__39439 + (1));
seq__39436 = G__39469;
chunk__39437 = G__39470;
count__39438 = G__39471;
i__39439 = G__39472;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39436);
if(temp__4657__auto__){
var seq__39436__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39436__$1)){
var c__26251__auto__ = cljs.core.chunk_first.call(null,seq__39436__$1);
var G__39473 = cljs.core.chunk_rest.call(null,seq__39436__$1);
var G__39474 = c__26251__auto__;
var G__39475 = cljs.core.count.call(null,c__26251__auto__);
var G__39476 = (0);
seq__39436 = G__39473;
chunk__39437 = G__39474;
count__39438 = G__39475;
i__39439 = G__39476;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39436__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39444_39477 = cljs.core.seq.call(null,requires);
var chunk__39445_39478 = null;
var count__39446_39479 = (0);
var i__39447_39480 = (0);
while(true){
if((i__39447_39480 < count__39446_39479)){
var req_39481 = cljs.core._nth.call(null,chunk__39445_39478,i__39447_39480);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39481,prov);

var G__39482 = seq__39444_39477;
var G__39483 = chunk__39445_39478;
var G__39484 = count__39446_39479;
var G__39485 = (i__39447_39480 + (1));
seq__39444_39477 = G__39482;
chunk__39445_39478 = G__39483;
count__39446_39479 = G__39484;
i__39447_39480 = G__39485;
continue;
} else {
var temp__4657__auto___39486__$1 = cljs.core.seq.call(null,seq__39444_39477);
if(temp__4657__auto___39486__$1){
var seq__39444_39487__$1 = temp__4657__auto___39486__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39444_39487__$1)){
var c__26251__auto___39488 = cljs.core.chunk_first.call(null,seq__39444_39487__$1);
var G__39489 = cljs.core.chunk_rest.call(null,seq__39444_39487__$1);
var G__39490 = c__26251__auto___39488;
var G__39491 = cljs.core.count.call(null,c__26251__auto___39488);
var G__39492 = (0);
seq__39444_39477 = G__39489;
chunk__39445_39478 = G__39490;
count__39446_39479 = G__39491;
i__39447_39480 = G__39492;
continue;
} else {
var req_39493 = cljs.core.first.call(null,seq__39444_39487__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39493,prov);

var G__39494 = cljs.core.next.call(null,seq__39444_39487__$1);
var G__39495 = null;
var G__39496 = (0);
var G__39497 = (0);
seq__39444_39477 = G__39494;
chunk__39445_39478 = G__39495;
count__39446_39479 = G__39496;
i__39447_39480 = G__39497;
continue;
}
} else {
}
}
break;
}

var G__39498 = cljs.core.next.call(null,seq__39436__$1);
var G__39499 = null;
var G__39500 = (0);
var G__39501 = (0);
seq__39436 = G__39498;
chunk__39437 = G__39499;
count__39438 = G__39500;
i__39439 = G__39501;
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
var seq__39506_39510 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39507_39511 = null;
var count__39508_39512 = (0);
var i__39509_39513 = (0);
while(true){
if((i__39509_39513 < count__39508_39512)){
var ns_39514 = cljs.core._nth.call(null,chunk__39507_39511,i__39509_39513);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39514);

var G__39515 = seq__39506_39510;
var G__39516 = chunk__39507_39511;
var G__39517 = count__39508_39512;
var G__39518 = (i__39509_39513 + (1));
seq__39506_39510 = G__39515;
chunk__39507_39511 = G__39516;
count__39508_39512 = G__39517;
i__39509_39513 = G__39518;
continue;
} else {
var temp__4657__auto___39519 = cljs.core.seq.call(null,seq__39506_39510);
if(temp__4657__auto___39519){
var seq__39506_39520__$1 = temp__4657__auto___39519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39506_39520__$1)){
var c__26251__auto___39521 = cljs.core.chunk_first.call(null,seq__39506_39520__$1);
var G__39522 = cljs.core.chunk_rest.call(null,seq__39506_39520__$1);
var G__39523 = c__26251__auto___39521;
var G__39524 = cljs.core.count.call(null,c__26251__auto___39521);
var G__39525 = (0);
seq__39506_39510 = G__39522;
chunk__39507_39511 = G__39523;
count__39508_39512 = G__39524;
i__39509_39513 = G__39525;
continue;
} else {
var ns_39526 = cljs.core.first.call(null,seq__39506_39520__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39526);

var G__39527 = cljs.core.next.call(null,seq__39506_39520__$1);
var G__39528 = null;
var G__39529 = (0);
var G__39530 = (0);
seq__39506_39510 = G__39527;
chunk__39507_39511 = G__39528;
count__39508_39512 = G__39529;
i__39509_39513 = G__39530;
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
goog.require_figwheel_backup_ = (function (){var or__25432__auto__ = goog.require__;
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
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
var G__39531__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39531 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39532__i = 0, G__39532__a = new Array(arguments.length -  0);
while (G__39532__i < G__39532__a.length) {G__39532__a[G__39532__i] = arguments[G__39532__i + 0]; ++G__39532__i;}
  args = new cljs.core.IndexedSeq(G__39532__a,0,null);
} 
return G__39531__delegate.call(this,args);};
G__39531.cljs$lang$maxFixedArity = 0;
G__39531.cljs$lang$applyTo = (function (arglist__39533){
var args = cljs.core.seq(arglist__39533);
return G__39531__delegate(args);
});
G__39531.cljs$core$IFn$_invoke$arity$variadic = G__39531__delegate;
return G__39531;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39534 = cljs.core._EQ_;
var expr__39535 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39534.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39535))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__39534,expr__39535){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__39534,expr__39535))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__39534,expr__39535){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39537){if((e39537 instanceof Error)){
var e = e39537;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39537;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__39534,expr__39535))
} else {
if(cljs.core.truth_(pred__39534.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39535))){
return ((function (pred__39534,expr__39535){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__39534,expr__39535){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39534,expr__39535))
);

return deferred.addErrback(((function (deferred,pred__39534,expr__39535){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39534,expr__39535))
);
});
;})(pred__39534,expr__39535))
} else {
if(cljs.core.truth_(pred__39534.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39535))){
return ((function (pred__39534,expr__39535){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39538){if((e39538 instanceof Error)){
var e = e39538;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39538;

}
}})());
});
;})(pred__39534,expr__39535))
} else {
return ((function (pred__39534,expr__39535){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39534,expr__39535))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39539,callback){
var map__39542 = p__39539;
var map__39542__$1 = ((((!((map__39542 == null)))?((((map__39542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39542):map__39542);
var file_msg = map__39542__$1;
var request_url = cljs.core.get.call(null,map__39542__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39542,map__39542__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39542,map__39542__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__){
return (function (state_39566){
var state_val_39567 = (state_39566[(1)]);
if((state_val_39567 === (7))){
var inst_39562 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
var statearr_39568_39588 = state_39566__$1;
(statearr_39568_39588[(2)] = inst_39562);

(statearr_39568_39588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (1))){
var state_39566__$1 = state_39566;
var statearr_39569_39589 = state_39566__$1;
(statearr_39569_39589[(2)] = null);

(statearr_39569_39589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (4))){
var inst_39546 = (state_39566[(7)]);
var inst_39546__$1 = (state_39566[(2)]);
var state_39566__$1 = (function (){var statearr_39570 = state_39566;
(statearr_39570[(7)] = inst_39546__$1);

return statearr_39570;
})();
if(cljs.core.truth_(inst_39546__$1)){
var statearr_39571_39590 = state_39566__$1;
(statearr_39571_39590[(1)] = (5));

} else {
var statearr_39572_39591 = state_39566__$1;
(statearr_39572_39591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (6))){
var state_39566__$1 = state_39566;
var statearr_39573_39592 = state_39566__$1;
(statearr_39573_39592[(2)] = null);

(statearr_39573_39592[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (3))){
var inst_39564 = (state_39566[(2)]);
var state_39566__$1 = state_39566;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39566__$1,inst_39564);
} else {
if((state_val_39567 === (2))){
var state_39566__$1 = state_39566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39566__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39567 === (11))){
var inst_39558 = (state_39566[(2)]);
var state_39566__$1 = (function (){var statearr_39574 = state_39566;
(statearr_39574[(8)] = inst_39558);

return statearr_39574;
})();
var statearr_39575_39593 = state_39566__$1;
(statearr_39575_39593[(2)] = null);

(statearr_39575_39593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (9))){
var inst_39550 = (state_39566[(9)]);
var inst_39552 = (state_39566[(10)]);
var inst_39554 = inst_39552.call(null,inst_39550);
var state_39566__$1 = state_39566;
var statearr_39576_39594 = state_39566__$1;
(statearr_39576_39594[(2)] = inst_39554);

(statearr_39576_39594[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (5))){
var inst_39546 = (state_39566[(7)]);
var inst_39548 = figwheel.client.file_reloading.blocking_load.call(null,inst_39546);
var state_39566__$1 = state_39566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39566__$1,(8),inst_39548);
} else {
if((state_val_39567 === (10))){
var inst_39550 = (state_39566[(9)]);
var inst_39556 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39550);
var state_39566__$1 = state_39566;
var statearr_39577_39595 = state_39566__$1;
(statearr_39577_39595[(2)] = inst_39556);

(statearr_39577_39595[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39567 === (8))){
var inst_39546 = (state_39566[(7)]);
var inst_39552 = (state_39566[(10)]);
var inst_39550 = (state_39566[(2)]);
var inst_39551 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39552__$1 = cljs.core.get.call(null,inst_39551,inst_39546);
var state_39566__$1 = (function (){var statearr_39578 = state_39566;
(statearr_39578[(9)] = inst_39550);

(statearr_39578[(10)] = inst_39552__$1);

return statearr_39578;
})();
if(cljs.core.truth_(inst_39552__$1)){
var statearr_39579_39596 = state_39566__$1;
(statearr_39579_39596[(1)] = (9));

} else {
var statearr_39580_39597 = state_39566__$1;
(statearr_39580_39597[(1)] = (10));

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
});})(c__34381__auto__))
;
return ((function (switch__34269__auto__,c__34381__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34270__auto__ = null;
var figwheel$client$file_reloading$state_machine__34270__auto____0 = (function (){
var statearr_39584 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39584[(0)] = figwheel$client$file_reloading$state_machine__34270__auto__);

(statearr_39584[(1)] = (1));

return statearr_39584;
});
var figwheel$client$file_reloading$state_machine__34270__auto____1 = (function (state_39566){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_39566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e39585){if((e39585 instanceof Object)){
var ex__34273__auto__ = e39585;
var statearr_39586_39598 = state_39566;
(statearr_39586_39598[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39599 = state_39566;
state_39566 = G__39599;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34270__auto__ = function(state_39566){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34270__auto____1.call(this,state_39566);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34270__auto____0;
figwheel$client$file_reloading$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34270__auto____1;
return figwheel$client$file_reloading$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__))
})();
var state__34383__auto__ = (function (){var statearr_39587 = f__34382__auto__.call(null);
(statearr_39587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_39587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__))
);

return c__34381__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39600,callback){
var map__39603 = p__39600;
var map__39603__$1 = ((((!((map__39603 == null)))?((((map__39603.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39603.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39603):map__39603);
var file_msg = map__39603__$1;
var namespace = cljs.core.get.call(null,map__39603__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39603,map__39603__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39603,map__39603__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39605){
var map__39608 = p__39605;
var map__39608__$1 = ((((!((map__39608 == null)))?((((map__39608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39608.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39608):map__39608);
var file_msg = map__39608__$1;
var namespace = cljs.core.get.call(null,map__39608__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39610){
var map__39613 = p__39610;
var map__39613__$1 = ((((!((map__39613 == null)))?((((map__39613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39613.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39613):map__39613);
var file_msg = map__39613__$1;
var namespace = cljs.core.get.call(null,map__39613__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25420__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25420__auto__){
var or__25432__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
} else {
var or__25432__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25432__auto____$1)){
return or__25432__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25420__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39615,callback){
var map__39618 = p__39615;
var map__39618__$1 = ((((!((map__39618 == null)))?((((map__39618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39618):map__39618);
var file_msg = map__39618__$1;
var request_url = cljs.core.get.call(null,map__39618__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39618__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34381__auto___39722 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___39722,out){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___39722,out){
return (function (state_39704){
var state_val_39705 = (state_39704[(1)]);
if((state_val_39705 === (1))){
var inst_39678 = cljs.core.seq.call(null,files);
var inst_39679 = cljs.core.first.call(null,inst_39678);
var inst_39680 = cljs.core.next.call(null,inst_39678);
var inst_39681 = files;
var state_39704__$1 = (function (){var statearr_39706 = state_39704;
(statearr_39706[(7)] = inst_39679);

(statearr_39706[(8)] = inst_39681);

(statearr_39706[(9)] = inst_39680);

return statearr_39706;
})();
var statearr_39707_39723 = state_39704__$1;
(statearr_39707_39723[(2)] = null);

(statearr_39707_39723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (2))){
var inst_39687 = (state_39704[(10)]);
var inst_39681 = (state_39704[(8)]);
var inst_39686 = cljs.core.seq.call(null,inst_39681);
var inst_39687__$1 = cljs.core.first.call(null,inst_39686);
var inst_39688 = cljs.core.next.call(null,inst_39686);
var inst_39689 = (inst_39687__$1 == null);
var inst_39690 = cljs.core.not.call(null,inst_39689);
var state_39704__$1 = (function (){var statearr_39708 = state_39704;
(statearr_39708[(11)] = inst_39688);

(statearr_39708[(10)] = inst_39687__$1);

return statearr_39708;
})();
if(inst_39690){
var statearr_39709_39724 = state_39704__$1;
(statearr_39709_39724[(1)] = (4));

} else {
var statearr_39710_39725 = state_39704__$1;
(statearr_39710_39725[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (3))){
var inst_39702 = (state_39704[(2)]);
var state_39704__$1 = state_39704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39704__$1,inst_39702);
} else {
if((state_val_39705 === (4))){
var inst_39687 = (state_39704[(10)]);
var inst_39692 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39687);
var state_39704__$1 = state_39704;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39704__$1,(7),inst_39692);
} else {
if((state_val_39705 === (5))){
var inst_39698 = cljs.core.async.close_BANG_.call(null,out);
var state_39704__$1 = state_39704;
var statearr_39711_39726 = state_39704__$1;
(statearr_39711_39726[(2)] = inst_39698);

(statearr_39711_39726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (6))){
var inst_39700 = (state_39704[(2)]);
var state_39704__$1 = state_39704;
var statearr_39712_39727 = state_39704__$1;
(statearr_39712_39727[(2)] = inst_39700);

(statearr_39712_39727[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39705 === (7))){
var inst_39688 = (state_39704[(11)]);
var inst_39694 = (state_39704[(2)]);
var inst_39695 = cljs.core.async.put_BANG_.call(null,out,inst_39694);
var inst_39681 = inst_39688;
var state_39704__$1 = (function (){var statearr_39713 = state_39704;
(statearr_39713[(12)] = inst_39695);

(statearr_39713[(8)] = inst_39681);

return statearr_39713;
})();
var statearr_39714_39728 = state_39704__$1;
(statearr_39714_39728[(2)] = null);

(statearr_39714_39728[(1)] = (2));


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
});})(c__34381__auto___39722,out))
;
return ((function (switch__34269__auto__,c__34381__auto___39722,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto____0 = (function (){
var statearr_39718 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39718[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto__);

(statearr_39718[(1)] = (1));

return statearr_39718;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto____1 = (function (state_39704){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_39704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e39719){if((e39719 instanceof Object)){
var ex__34273__auto__ = e39719;
var statearr_39720_39729 = state_39704;
(statearr_39720_39729[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39730 = state_39704;
state_39704 = G__39730;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto__ = function(state_39704){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto____1.call(this,state_39704);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___39722,out))
})();
var state__34383__auto__ = (function (){var statearr_39721 = f__34382__auto__.call(null);
(statearr_39721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___39722);

return statearr_39721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___39722,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39731,opts){
var map__39735 = p__39731;
var map__39735__$1 = ((((!((map__39735 == null)))?((((map__39735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39735):map__39735);
var eval_body = cljs.core.get.call(null,map__39735__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39735__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25420__auto__ = eval_body;
if(cljs.core.truth_(and__25420__auto__)){
return typeof eval_body === 'string';
} else {
return and__25420__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39737){var e = e39737;
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
return (function (p1__39738_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39738_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39747){
var vec__39748 = p__39747;
var k = cljs.core.nth.call(null,vec__39748,(0),null);
var v = cljs.core.nth.call(null,vec__39748,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39751){
var vec__39752 = p__39751;
var k = cljs.core.nth.call(null,vec__39752,(0),null);
var v = cljs.core.nth.call(null,vec__39752,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39758,p__39759){
var map__40007 = p__39758;
var map__40007__$1 = ((((!((map__40007 == null)))?((((map__40007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40007.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40007):map__40007);
var opts = map__40007__$1;
var before_jsload = cljs.core.get.call(null,map__40007__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40007__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40007__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40008 = p__39759;
var map__40008__$1 = ((((!((map__40008 == null)))?((((map__40008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40008.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40008):map__40008);
var msg = map__40008__$1;
var files = cljs.core.get.call(null,map__40008__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40008__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40008__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40162){
var state_val_40163 = (state_40162[(1)]);
if((state_val_40163 === (7))){
var inst_40025 = (state_40162[(7)]);
var inst_40024 = (state_40162[(8)]);
var inst_40023 = (state_40162[(9)]);
var inst_40022 = (state_40162[(10)]);
var inst_40030 = cljs.core._nth.call(null,inst_40023,inst_40025);
var inst_40031 = figwheel.client.file_reloading.eval_body.call(null,inst_40030,opts);
var inst_40032 = (inst_40025 + (1));
var tmp40164 = inst_40024;
var tmp40165 = inst_40023;
var tmp40166 = inst_40022;
var inst_40022__$1 = tmp40166;
var inst_40023__$1 = tmp40165;
var inst_40024__$1 = tmp40164;
var inst_40025__$1 = inst_40032;
var state_40162__$1 = (function (){var statearr_40167 = state_40162;
(statearr_40167[(7)] = inst_40025__$1);

(statearr_40167[(8)] = inst_40024__$1);

(statearr_40167[(9)] = inst_40023__$1);

(statearr_40167[(11)] = inst_40031);

(statearr_40167[(10)] = inst_40022__$1);

return statearr_40167;
})();
var statearr_40168_40254 = state_40162__$1;
(statearr_40168_40254[(2)] = null);

(statearr_40168_40254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (20))){
var inst_40065 = (state_40162[(12)]);
var inst_40073 = figwheel.client.file_reloading.sort_files.call(null,inst_40065);
var state_40162__$1 = state_40162;
var statearr_40169_40255 = state_40162__$1;
(statearr_40169_40255[(2)] = inst_40073);

(statearr_40169_40255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (27))){
var state_40162__$1 = state_40162;
var statearr_40170_40256 = state_40162__$1;
(statearr_40170_40256[(2)] = null);

(statearr_40170_40256[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (1))){
var inst_40014 = (state_40162[(13)]);
var inst_40011 = before_jsload.call(null,files);
var inst_40012 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40013 = (function (){return ((function (inst_40014,inst_40011,inst_40012,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39755_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39755_SHARP_);
});
;})(inst_40014,inst_40011,inst_40012,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40014__$1 = cljs.core.filter.call(null,inst_40013,files);
var inst_40015 = cljs.core.not_empty.call(null,inst_40014__$1);
var state_40162__$1 = (function (){var statearr_40171 = state_40162;
(statearr_40171[(14)] = inst_40012);

(statearr_40171[(13)] = inst_40014__$1);

(statearr_40171[(15)] = inst_40011);

return statearr_40171;
})();
if(cljs.core.truth_(inst_40015)){
var statearr_40172_40257 = state_40162__$1;
(statearr_40172_40257[(1)] = (2));

} else {
var statearr_40173_40258 = state_40162__$1;
(statearr_40173_40258[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (24))){
var state_40162__$1 = state_40162;
var statearr_40174_40259 = state_40162__$1;
(statearr_40174_40259[(2)] = null);

(statearr_40174_40259[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (39))){
var inst_40115 = (state_40162[(16)]);
var state_40162__$1 = state_40162;
var statearr_40175_40260 = state_40162__$1;
(statearr_40175_40260[(2)] = inst_40115);

(statearr_40175_40260[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (46))){
var inst_40157 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40176_40261 = state_40162__$1;
(statearr_40176_40261[(2)] = inst_40157);

(statearr_40176_40261[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (4))){
var inst_40059 = (state_40162[(2)]);
var inst_40060 = cljs.core.List.EMPTY;
var inst_40061 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40060);
var inst_40062 = (function (){return ((function (inst_40059,inst_40060,inst_40061,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39756_SHARP_){
var and__25420__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39756_SHARP_);
if(cljs.core.truth_(and__25420__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39756_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39756_SHARP_)));
} else {
return and__25420__auto__;
}
});
;})(inst_40059,inst_40060,inst_40061,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40063 = cljs.core.filter.call(null,inst_40062,files);
var inst_40064 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40065 = cljs.core.concat.call(null,inst_40063,inst_40064);
var state_40162__$1 = (function (){var statearr_40177 = state_40162;
(statearr_40177[(12)] = inst_40065);

(statearr_40177[(17)] = inst_40061);

(statearr_40177[(18)] = inst_40059);

return statearr_40177;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40178_40262 = state_40162__$1;
(statearr_40178_40262[(1)] = (16));

} else {
var statearr_40179_40263 = state_40162__$1;
(statearr_40179_40263[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (15))){
var inst_40049 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40180_40264 = state_40162__$1;
(statearr_40180_40264[(2)] = inst_40049);

(statearr_40180_40264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (21))){
var inst_40075 = (state_40162[(19)]);
var inst_40075__$1 = (state_40162[(2)]);
var inst_40076 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40075__$1);
var state_40162__$1 = (function (){var statearr_40181 = state_40162;
(statearr_40181[(19)] = inst_40075__$1);

return statearr_40181;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40162__$1,(22),inst_40076);
} else {
if((state_val_40163 === (31))){
var inst_40160 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40162__$1,inst_40160);
} else {
if((state_val_40163 === (32))){
var inst_40115 = (state_40162[(16)]);
var inst_40120 = inst_40115.cljs$lang$protocol_mask$partition0$;
var inst_40121 = (inst_40120 & (64));
var inst_40122 = inst_40115.cljs$core$ISeq$;
var inst_40123 = (cljs.core.PROTOCOL_SENTINEL === inst_40122);
var inst_40124 = (inst_40121) || (inst_40123);
var state_40162__$1 = state_40162;
if(cljs.core.truth_(inst_40124)){
var statearr_40182_40265 = state_40162__$1;
(statearr_40182_40265[(1)] = (35));

} else {
var statearr_40183_40266 = state_40162__$1;
(statearr_40183_40266[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (40))){
var inst_40137 = (state_40162[(20)]);
var inst_40136 = (state_40162[(2)]);
var inst_40137__$1 = cljs.core.get.call(null,inst_40136,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40138 = cljs.core.get.call(null,inst_40136,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40139 = cljs.core.not_empty.call(null,inst_40137__$1);
var state_40162__$1 = (function (){var statearr_40184 = state_40162;
(statearr_40184[(20)] = inst_40137__$1);

(statearr_40184[(21)] = inst_40138);

return statearr_40184;
})();
if(cljs.core.truth_(inst_40139)){
var statearr_40185_40267 = state_40162__$1;
(statearr_40185_40267[(1)] = (41));

} else {
var statearr_40186_40268 = state_40162__$1;
(statearr_40186_40268[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (33))){
var state_40162__$1 = state_40162;
var statearr_40187_40269 = state_40162__$1;
(statearr_40187_40269[(2)] = false);

(statearr_40187_40269[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (13))){
var inst_40035 = (state_40162[(22)]);
var inst_40039 = cljs.core.chunk_first.call(null,inst_40035);
var inst_40040 = cljs.core.chunk_rest.call(null,inst_40035);
var inst_40041 = cljs.core.count.call(null,inst_40039);
var inst_40022 = inst_40040;
var inst_40023 = inst_40039;
var inst_40024 = inst_40041;
var inst_40025 = (0);
var state_40162__$1 = (function (){var statearr_40188 = state_40162;
(statearr_40188[(7)] = inst_40025);

(statearr_40188[(8)] = inst_40024);

(statearr_40188[(9)] = inst_40023);

(statearr_40188[(10)] = inst_40022);

return statearr_40188;
})();
var statearr_40189_40270 = state_40162__$1;
(statearr_40189_40270[(2)] = null);

(statearr_40189_40270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (22))){
var inst_40078 = (state_40162[(23)]);
var inst_40075 = (state_40162[(19)]);
var inst_40083 = (state_40162[(24)]);
var inst_40079 = (state_40162[(25)]);
var inst_40078__$1 = (state_40162[(2)]);
var inst_40079__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40078__$1);
var inst_40080 = (function (){var all_files = inst_40075;
var res_SINGLEQUOTE_ = inst_40078__$1;
var res = inst_40079__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40078,inst_40075,inst_40083,inst_40079,inst_40078__$1,inst_40079__$1,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39757_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39757_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40078,inst_40075,inst_40083,inst_40079,inst_40078__$1,inst_40079__$1,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40081 = cljs.core.filter.call(null,inst_40080,inst_40078__$1);
var inst_40082 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40083__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40082);
var inst_40084 = cljs.core.not_empty.call(null,inst_40083__$1);
var state_40162__$1 = (function (){var statearr_40190 = state_40162;
(statearr_40190[(23)] = inst_40078__$1);

(statearr_40190[(26)] = inst_40081);

(statearr_40190[(24)] = inst_40083__$1);

(statearr_40190[(25)] = inst_40079__$1);

return statearr_40190;
})();
if(cljs.core.truth_(inst_40084)){
var statearr_40191_40271 = state_40162__$1;
(statearr_40191_40271[(1)] = (23));

} else {
var statearr_40192_40272 = state_40162__$1;
(statearr_40192_40272[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (36))){
var state_40162__$1 = state_40162;
var statearr_40193_40273 = state_40162__$1;
(statearr_40193_40273[(2)] = false);

(statearr_40193_40273[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (41))){
var inst_40137 = (state_40162[(20)]);
var inst_40141 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40142 = cljs.core.map.call(null,inst_40141,inst_40137);
var inst_40143 = cljs.core.pr_str.call(null,inst_40142);
var inst_40144 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40143)].join('');
var inst_40145 = figwheel.client.utils.log.call(null,inst_40144);
var state_40162__$1 = state_40162;
var statearr_40194_40274 = state_40162__$1;
(statearr_40194_40274[(2)] = inst_40145);

(statearr_40194_40274[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (43))){
var inst_40138 = (state_40162[(21)]);
var inst_40148 = (state_40162[(2)]);
var inst_40149 = cljs.core.not_empty.call(null,inst_40138);
var state_40162__$1 = (function (){var statearr_40195 = state_40162;
(statearr_40195[(27)] = inst_40148);

return statearr_40195;
})();
if(cljs.core.truth_(inst_40149)){
var statearr_40196_40275 = state_40162__$1;
(statearr_40196_40275[(1)] = (44));

} else {
var statearr_40197_40276 = state_40162__$1;
(statearr_40197_40276[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (29))){
var inst_40078 = (state_40162[(23)]);
var inst_40075 = (state_40162[(19)]);
var inst_40081 = (state_40162[(26)]);
var inst_40083 = (state_40162[(24)]);
var inst_40115 = (state_40162[(16)]);
var inst_40079 = (state_40162[(25)]);
var inst_40111 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40114 = (function (){var all_files = inst_40075;
var res_SINGLEQUOTE_ = inst_40078;
var res = inst_40079;
var files_not_loaded = inst_40081;
var dependencies_that_loaded = inst_40083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40078,inst_40075,inst_40081,inst_40083,inst_40115,inst_40079,inst_40111,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40113){
var map__40198 = p__40113;
var map__40198__$1 = ((((!((map__40198 == null)))?((((map__40198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40198):map__40198);
var namespace = cljs.core.get.call(null,map__40198__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40078,inst_40075,inst_40081,inst_40083,inst_40115,inst_40079,inst_40111,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40115__$1 = cljs.core.group_by.call(null,inst_40114,inst_40081);
var inst_40117 = (inst_40115__$1 == null);
var inst_40118 = cljs.core.not.call(null,inst_40117);
var state_40162__$1 = (function (){var statearr_40200 = state_40162;
(statearr_40200[(28)] = inst_40111);

(statearr_40200[(16)] = inst_40115__$1);

return statearr_40200;
})();
if(inst_40118){
var statearr_40201_40277 = state_40162__$1;
(statearr_40201_40277[(1)] = (32));

} else {
var statearr_40202_40278 = state_40162__$1;
(statearr_40202_40278[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (44))){
var inst_40138 = (state_40162[(21)]);
var inst_40151 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40138);
var inst_40152 = cljs.core.pr_str.call(null,inst_40151);
var inst_40153 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_40152)].join('');
var inst_40154 = figwheel.client.utils.log.call(null,inst_40153);
var state_40162__$1 = state_40162;
var statearr_40203_40279 = state_40162__$1;
(statearr_40203_40279[(2)] = inst_40154);

(statearr_40203_40279[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (6))){
var inst_40056 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40204_40280 = state_40162__$1;
(statearr_40204_40280[(2)] = inst_40056);

(statearr_40204_40280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (28))){
var inst_40081 = (state_40162[(26)]);
var inst_40108 = (state_40162[(2)]);
var inst_40109 = cljs.core.not_empty.call(null,inst_40081);
var state_40162__$1 = (function (){var statearr_40205 = state_40162;
(statearr_40205[(29)] = inst_40108);

return statearr_40205;
})();
if(cljs.core.truth_(inst_40109)){
var statearr_40206_40281 = state_40162__$1;
(statearr_40206_40281[(1)] = (29));

} else {
var statearr_40207_40282 = state_40162__$1;
(statearr_40207_40282[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (25))){
var inst_40079 = (state_40162[(25)]);
var inst_40095 = (state_40162[(2)]);
var inst_40096 = cljs.core.not_empty.call(null,inst_40079);
var state_40162__$1 = (function (){var statearr_40208 = state_40162;
(statearr_40208[(30)] = inst_40095);

return statearr_40208;
})();
if(cljs.core.truth_(inst_40096)){
var statearr_40209_40283 = state_40162__$1;
(statearr_40209_40283[(1)] = (26));

} else {
var statearr_40210_40284 = state_40162__$1;
(statearr_40210_40284[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (34))){
var inst_40131 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
if(cljs.core.truth_(inst_40131)){
var statearr_40211_40285 = state_40162__$1;
(statearr_40211_40285[(1)] = (38));

} else {
var statearr_40212_40286 = state_40162__$1;
(statearr_40212_40286[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (17))){
var state_40162__$1 = state_40162;
var statearr_40213_40287 = state_40162__$1;
(statearr_40213_40287[(2)] = recompile_dependents);

(statearr_40213_40287[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (3))){
var state_40162__$1 = state_40162;
var statearr_40214_40288 = state_40162__$1;
(statearr_40214_40288[(2)] = null);

(statearr_40214_40288[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (12))){
var inst_40052 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40215_40289 = state_40162__$1;
(statearr_40215_40289[(2)] = inst_40052);

(statearr_40215_40289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (2))){
var inst_40014 = (state_40162[(13)]);
var inst_40021 = cljs.core.seq.call(null,inst_40014);
var inst_40022 = inst_40021;
var inst_40023 = null;
var inst_40024 = (0);
var inst_40025 = (0);
var state_40162__$1 = (function (){var statearr_40216 = state_40162;
(statearr_40216[(7)] = inst_40025);

(statearr_40216[(8)] = inst_40024);

(statearr_40216[(9)] = inst_40023);

(statearr_40216[(10)] = inst_40022);

return statearr_40216;
})();
var statearr_40217_40290 = state_40162__$1;
(statearr_40217_40290[(2)] = null);

(statearr_40217_40290[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (23))){
var inst_40078 = (state_40162[(23)]);
var inst_40075 = (state_40162[(19)]);
var inst_40081 = (state_40162[(26)]);
var inst_40083 = (state_40162[(24)]);
var inst_40079 = (state_40162[(25)]);
var inst_40086 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40088 = (function (){var all_files = inst_40075;
var res_SINGLEQUOTE_ = inst_40078;
var res = inst_40079;
var files_not_loaded = inst_40081;
var dependencies_that_loaded = inst_40083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40078,inst_40075,inst_40081,inst_40083,inst_40079,inst_40086,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40087){
var map__40218 = p__40087;
var map__40218__$1 = ((((!((map__40218 == null)))?((((map__40218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40218.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40218):map__40218);
var request_url = cljs.core.get.call(null,map__40218__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40078,inst_40075,inst_40081,inst_40083,inst_40079,inst_40086,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40089 = cljs.core.reverse.call(null,inst_40083);
var inst_40090 = cljs.core.map.call(null,inst_40088,inst_40089);
var inst_40091 = cljs.core.pr_str.call(null,inst_40090);
var inst_40092 = figwheel.client.utils.log.call(null,inst_40091);
var state_40162__$1 = (function (){var statearr_40220 = state_40162;
(statearr_40220[(31)] = inst_40086);

return statearr_40220;
})();
var statearr_40221_40291 = state_40162__$1;
(statearr_40221_40291[(2)] = inst_40092);

(statearr_40221_40291[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (35))){
var state_40162__$1 = state_40162;
var statearr_40222_40292 = state_40162__$1;
(statearr_40222_40292[(2)] = true);

(statearr_40222_40292[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (19))){
var inst_40065 = (state_40162[(12)]);
var inst_40071 = figwheel.client.file_reloading.expand_files.call(null,inst_40065);
var state_40162__$1 = state_40162;
var statearr_40223_40293 = state_40162__$1;
(statearr_40223_40293[(2)] = inst_40071);

(statearr_40223_40293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (11))){
var state_40162__$1 = state_40162;
var statearr_40224_40294 = state_40162__$1;
(statearr_40224_40294[(2)] = null);

(statearr_40224_40294[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (9))){
var inst_40054 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40225_40295 = state_40162__$1;
(statearr_40225_40295[(2)] = inst_40054);

(statearr_40225_40295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (5))){
var inst_40025 = (state_40162[(7)]);
var inst_40024 = (state_40162[(8)]);
var inst_40027 = (inst_40025 < inst_40024);
var inst_40028 = inst_40027;
var state_40162__$1 = state_40162;
if(cljs.core.truth_(inst_40028)){
var statearr_40226_40296 = state_40162__$1;
(statearr_40226_40296[(1)] = (7));

} else {
var statearr_40227_40297 = state_40162__$1;
(statearr_40227_40297[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (14))){
var inst_40035 = (state_40162[(22)]);
var inst_40044 = cljs.core.first.call(null,inst_40035);
var inst_40045 = figwheel.client.file_reloading.eval_body.call(null,inst_40044,opts);
var inst_40046 = cljs.core.next.call(null,inst_40035);
var inst_40022 = inst_40046;
var inst_40023 = null;
var inst_40024 = (0);
var inst_40025 = (0);
var state_40162__$1 = (function (){var statearr_40228 = state_40162;
(statearr_40228[(7)] = inst_40025);

(statearr_40228[(8)] = inst_40024);

(statearr_40228[(9)] = inst_40023);

(statearr_40228[(32)] = inst_40045);

(statearr_40228[(10)] = inst_40022);

return statearr_40228;
})();
var statearr_40229_40298 = state_40162__$1;
(statearr_40229_40298[(2)] = null);

(statearr_40229_40298[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (45))){
var state_40162__$1 = state_40162;
var statearr_40230_40299 = state_40162__$1;
(statearr_40230_40299[(2)] = null);

(statearr_40230_40299[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (26))){
var inst_40078 = (state_40162[(23)]);
var inst_40075 = (state_40162[(19)]);
var inst_40081 = (state_40162[(26)]);
var inst_40083 = (state_40162[(24)]);
var inst_40079 = (state_40162[(25)]);
var inst_40098 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40100 = (function (){var all_files = inst_40075;
var res_SINGLEQUOTE_ = inst_40078;
var res = inst_40079;
var files_not_loaded = inst_40081;
var dependencies_that_loaded = inst_40083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40078,inst_40075,inst_40081,inst_40083,inst_40079,inst_40098,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40099){
var map__40231 = p__40099;
var map__40231__$1 = ((((!((map__40231 == null)))?((((map__40231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40231.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40231):map__40231);
var namespace = cljs.core.get.call(null,map__40231__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40231__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40078,inst_40075,inst_40081,inst_40083,inst_40079,inst_40098,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40101 = cljs.core.map.call(null,inst_40100,inst_40079);
var inst_40102 = cljs.core.pr_str.call(null,inst_40101);
var inst_40103 = figwheel.client.utils.log.call(null,inst_40102);
var inst_40104 = (function (){var all_files = inst_40075;
var res_SINGLEQUOTE_ = inst_40078;
var res = inst_40079;
var files_not_loaded = inst_40081;
var dependencies_that_loaded = inst_40083;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40078,inst_40075,inst_40081,inst_40083,inst_40079,inst_40098,inst_40100,inst_40101,inst_40102,inst_40103,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40078,inst_40075,inst_40081,inst_40083,inst_40079,inst_40098,inst_40100,inst_40101,inst_40102,inst_40103,state_val_40163,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40105 = setTimeout(inst_40104,(10));
var state_40162__$1 = (function (){var statearr_40233 = state_40162;
(statearr_40233[(33)] = inst_40098);

(statearr_40233[(34)] = inst_40103);

return statearr_40233;
})();
var statearr_40234_40300 = state_40162__$1;
(statearr_40234_40300[(2)] = inst_40105);

(statearr_40234_40300[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (16))){
var state_40162__$1 = state_40162;
var statearr_40235_40301 = state_40162__$1;
(statearr_40235_40301[(2)] = reload_dependents);

(statearr_40235_40301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (38))){
var inst_40115 = (state_40162[(16)]);
var inst_40133 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40115);
var state_40162__$1 = state_40162;
var statearr_40236_40302 = state_40162__$1;
(statearr_40236_40302[(2)] = inst_40133);

(statearr_40236_40302[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (30))){
var state_40162__$1 = state_40162;
var statearr_40237_40303 = state_40162__$1;
(statearr_40237_40303[(2)] = null);

(statearr_40237_40303[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (10))){
var inst_40035 = (state_40162[(22)]);
var inst_40037 = cljs.core.chunked_seq_QMARK_.call(null,inst_40035);
var state_40162__$1 = state_40162;
if(inst_40037){
var statearr_40238_40304 = state_40162__$1;
(statearr_40238_40304[(1)] = (13));

} else {
var statearr_40239_40305 = state_40162__$1;
(statearr_40239_40305[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (18))){
var inst_40069 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
if(cljs.core.truth_(inst_40069)){
var statearr_40240_40306 = state_40162__$1;
(statearr_40240_40306[(1)] = (19));

} else {
var statearr_40241_40307 = state_40162__$1;
(statearr_40241_40307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (42))){
var state_40162__$1 = state_40162;
var statearr_40242_40308 = state_40162__$1;
(statearr_40242_40308[(2)] = null);

(statearr_40242_40308[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (37))){
var inst_40128 = (state_40162[(2)]);
var state_40162__$1 = state_40162;
var statearr_40243_40309 = state_40162__$1;
(statearr_40243_40309[(2)] = inst_40128);

(statearr_40243_40309[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40163 === (8))){
var inst_40035 = (state_40162[(22)]);
var inst_40022 = (state_40162[(10)]);
var inst_40035__$1 = cljs.core.seq.call(null,inst_40022);
var state_40162__$1 = (function (){var statearr_40244 = state_40162;
(statearr_40244[(22)] = inst_40035__$1);

return statearr_40244;
})();
if(inst_40035__$1){
var statearr_40245_40310 = state_40162__$1;
(statearr_40245_40310[(1)] = (10));

} else {
var statearr_40246_40311 = state_40162__$1;
(statearr_40246_40311[(1)] = (11));

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
});})(c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34269__auto__,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto____0 = (function (){
var statearr_40250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40250[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto__);

(statearr_40250[(1)] = (1));

return statearr_40250;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto____1 = (function (state_40162){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_40162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e40251){if((e40251 instanceof Object)){
var ex__34273__auto__ = e40251;
var statearr_40252_40312 = state_40162;
(statearr_40252_40312[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40313 = state_40162;
state_40162 = G__40313;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto__ = function(state_40162){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto____1.call(this,state_40162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34383__auto__ = (function (){var statearr_40253 = f__34382__auto__.call(null);
(statearr_40253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_40253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__,map__40007,map__40007__$1,opts,before_jsload,on_jsload,reload_dependents,map__40008,map__40008__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34381__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40316,link){
var map__40319 = p__40316;
var map__40319__$1 = ((((!((map__40319 == null)))?((((map__40319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40319.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40319):map__40319);
var file = cljs.core.get.call(null,map__40319__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40319,map__40319__$1,file){
return (function (p1__40314_SHARP_,p2__40315_SHARP_){
if(cljs.core._EQ_.call(null,p1__40314_SHARP_,p2__40315_SHARP_)){
return p1__40314_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40319,map__40319__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40325){
var map__40326 = p__40325;
var map__40326__$1 = ((((!((map__40326 == null)))?((((map__40326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40326):map__40326);
var match_length = cljs.core.get.call(null,map__40326__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40326__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40321_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40321_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40328_SHARP_,p2__40329_SHARP_){
return cljs.core.assoc.call(null,p1__40328_SHARP_,cljs.core.get.call(null,p2__40329_SHARP_,key),p2__40329_SHARP_);
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
var loaded_f_datas_40330 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40330);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40330);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40331,p__40332){
var map__40337 = p__40331;
var map__40337__$1 = ((((!((map__40337 == null)))?((((map__40337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40337.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40337):map__40337);
var on_cssload = cljs.core.get.call(null,map__40337__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40338 = p__40332;
var map__40338__$1 = ((((!((map__40338 == null)))?((((map__40338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40338.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40338):map__40338);
var files_msg = map__40338__$1;
var files = cljs.core.get.call(null,map__40338__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1502108336248