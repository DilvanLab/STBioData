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
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40394 = arguments.length;
var i__26546__auto___40395 = (0);
while(true){
if((i__26546__auto___40395 < len__26545__auto___40394)){
args__26552__auto__.push((arguments[i__26546__auto___40395]));

var G__40396 = (i__26546__auto___40395 + (1));
i__26546__auto___40395 = G__40396;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq40393){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40393));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40398 = arguments.length;
var i__26546__auto___40399 = (0);
while(true){
if((i__26546__auto___40399 < len__26545__auto___40398)){
args__26552__auto__.push((arguments[i__26546__auto___40399]));

var G__40400 = (i__26546__auto___40399 + (1));
i__26546__auto___40399 = G__40400;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq40397){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40397));
});

var g_QMARK__40401 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_40402 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__40401){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__40401))
,null));
var mkg_40403 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__40401,g_40402){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__40401,g_40402))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__40401,g_40402,mkg_40403){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__40401).call(null,x);
});})(g_QMARK__40401,g_40402,mkg_40403))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__40401,g_40402,mkg_40403){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_40403).call(null,gfn);
});})(g_QMARK__40401,g_40402,mkg_40403))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__40401,g_40402,mkg_40403){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_40402).call(null,generator);
});})(g_QMARK__40401,g_40402,mkg_40403))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__40365__auto___40423 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__40365__auto___40423){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40424 = arguments.length;
var i__26546__auto___40425 = (0);
while(true){
if((i__26546__auto___40425 < len__26545__auto___40424)){
args__26552__auto__.push((arguments[i__26546__auto___40425]));

var G__40426 = (i__26546__auto___40425 + (1));
i__26546__auto___40425 = G__40426;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40423))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40423){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40423),args);
});})(g__40365__auto___40423))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__40365__auto___40423){
return (function (seq40404){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40404));
});})(g__40365__auto___40423))
;


var g__40365__auto___40427 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__40365__auto___40427){
return (function cljs$spec$gen$alpha$list(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40428 = arguments.length;
var i__26546__auto___40429 = (0);
while(true){
if((i__26546__auto___40429 < len__26545__auto___40428)){
args__26552__auto__.push((arguments[i__26546__auto___40429]));

var G__40430 = (i__26546__auto___40429 + (1));
i__26546__auto___40429 = G__40430;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40427))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40427){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40427),args);
});})(g__40365__auto___40427))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__40365__auto___40427){
return (function (seq40405){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40405));
});})(g__40365__auto___40427))
;


var g__40365__auto___40431 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__40365__auto___40431){
return (function cljs$spec$gen$alpha$map(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40432 = arguments.length;
var i__26546__auto___40433 = (0);
while(true){
if((i__26546__auto___40433 < len__26545__auto___40432)){
args__26552__auto__.push((arguments[i__26546__auto___40433]));

var G__40434 = (i__26546__auto___40433 + (1));
i__26546__auto___40433 = G__40434;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40431))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40431){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40431),args);
});})(g__40365__auto___40431))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__40365__auto___40431){
return (function (seq40406){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40406));
});})(g__40365__auto___40431))
;


var g__40365__auto___40435 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__40365__auto___40435){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40436 = arguments.length;
var i__26546__auto___40437 = (0);
while(true){
if((i__26546__auto___40437 < len__26545__auto___40436)){
args__26552__auto__.push((arguments[i__26546__auto___40437]));

var G__40438 = (i__26546__auto___40437 + (1));
i__26546__auto___40437 = G__40438;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40435))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40435){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40435),args);
});})(g__40365__auto___40435))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__40365__auto___40435){
return (function (seq40407){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40407));
});})(g__40365__auto___40435))
;


var g__40365__auto___40439 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__40365__auto___40439){
return (function cljs$spec$gen$alpha$set(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40440 = arguments.length;
var i__26546__auto___40441 = (0);
while(true){
if((i__26546__auto___40441 < len__26545__auto___40440)){
args__26552__auto__.push((arguments[i__26546__auto___40441]));

var G__40442 = (i__26546__auto___40441 + (1));
i__26546__auto___40441 = G__40442;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40439))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40439){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40439),args);
});})(g__40365__auto___40439))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__40365__auto___40439){
return (function (seq40408){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40408));
});})(g__40365__auto___40439))
;


var g__40365__auto___40443 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__40365__auto___40443){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40444 = arguments.length;
var i__26546__auto___40445 = (0);
while(true){
if((i__26546__auto___40445 < len__26545__auto___40444)){
args__26552__auto__.push((arguments[i__26546__auto___40445]));

var G__40446 = (i__26546__auto___40445 + (1));
i__26546__auto___40445 = G__40446;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40443))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40443){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40443),args);
});})(g__40365__auto___40443))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__40365__auto___40443){
return (function (seq40409){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40409));
});})(g__40365__auto___40443))
;


var g__40365__auto___40447 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__40365__auto___40447){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40448 = arguments.length;
var i__26546__auto___40449 = (0);
while(true){
if((i__26546__auto___40449 < len__26545__auto___40448)){
args__26552__auto__.push((arguments[i__26546__auto___40449]));

var G__40450 = (i__26546__auto___40449 + (1));
i__26546__auto___40449 = G__40450;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40447))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40447){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40447),args);
});})(g__40365__auto___40447))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__40365__auto___40447){
return (function (seq40410){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40410));
});})(g__40365__auto___40447))
;


var g__40365__auto___40451 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__40365__auto___40451){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40452 = arguments.length;
var i__26546__auto___40453 = (0);
while(true){
if((i__26546__auto___40453 < len__26545__auto___40452)){
args__26552__auto__.push((arguments[i__26546__auto___40453]));

var G__40454 = (i__26546__auto___40453 + (1));
i__26546__auto___40453 = G__40454;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40451))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40451){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40451),args);
});})(g__40365__auto___40451))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__40365__auto___40451){
return (function (seq40411){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40411));
});})(g__40365__auto___40451))
;


var g__40365__auto___40455 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__40365__auto___40455){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40456 = arguments.length;
var i__26546__auto___40457 = (0);
while(true){
if((i__26546__auto___40457 < len__26545__auto___40456)){
args__26552__auto__.push((arguments[i__26546__auto___40457]));

var G__40458 = (i__26546__auto___40457 + (1));
i__26546__auto___40457 = G__40458;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40455))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40455){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40455),args);
});})(g__40365__auto___40455))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__40365__auto___40455){
return (function (seq40412){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40412));
});})(g__40365__auto___40455))
;


var g__40365__auto___40459 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__40365__auto___40459){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40460 = arguments.length;
var i__26546__auto___40461 = (0);
while(true){
if((i__26546__auto___40461 < len__26545__auto___40460)){
args__26552__auto__.push((arguments[i__26546__auto___40461]));

var G__40462 = (i__26546__auto___40461 + (1));
i__26546__auto___40461 = G__40462;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40459))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40459){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40459),args);
});})(g__40365__auto___40459))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__40365__auto___40459){
return (function (seq40413){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40413));
});})(g__40365__auto___40459))
;


var g__40365__auto___40463 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__40365__auto___40463){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40464 = arguments.length;
var i__26546__auto___40465 = (0);
while(true){
if((i__26546__auto___40465 < len__26545__auto___40464)){
args__26552__auto__.push((arguments[i__26546__auto___40465]));

var G__40466 = (i__26546__auto___40465 + (1));
i__26546__auto___40465 = G__40466;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40463))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40463){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40463),args);
});})(g__40365__auto___40463))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__40365__auto___40463){
return (function (seq40414){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40414));
});})(g__40365__auto___40463))
;


var g__40365__auto___40467 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__40365__auto___40467){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40468 = arguments.length;
var i__26546__auto___40469 = (0);
while(true){
if((i__26546__auto___40469 < len__26545__auto___40468)){
args__26552__auto__.push((arguments[i__26546__auto___40469]));

var G__40470 = (i__26546__auto___40469 + (1));
i__26546__auto___40469 = G__40470;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40467))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40467){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40467),args);
});})(g__40365__auto___40467))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__40365__auto___40467){
return (function (seq40415){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40415));
});})(g__40365__auto___40467))
;


var g__40365__auto___40471 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__40365__auto___40471){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40472 = arguments.length;
var i__26546__auto___40473 = (0);
while(true){
if((i__26546__auto___40473 < len__26545__auto___40472)){
args__26552__auto__.push((arguments[i__26546__auto___40473]));

var G__40474 = (i__26546__auto___40473 + (1));
i__26546__auto___40473 = G__40474;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40471))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40471){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40471),args);
});})(g__40365__auto___40471))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__40365__auto___40471){
return (function (seq40416){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40416));
});})(g__40365__auto___40471))
;


var g__40365__auto___40475 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__40365__auto___40475){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40476 = arguments.length;
var i__26546__auto___40477 = (0);
while(true){
if((i__26546__auto___40477 < len__26545__auto___40476)){
args__26552__auto__.push((arguments[i__26546__auto___40477]));

var G__40478 = (i__26546__auto___40477 + (1));
i__26546__auto___40477 = G__40478;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40475))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40475){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40475),args);
});})(g__40365__auto___40475))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__40365__auto___40475){
return (function (seq40417){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40417));
});})(g__40365__auto___40475))
;


var g__40365__auto___40479 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__40365__auto___40479){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40480 = arguments.length;
var i__26546__auto___40481 = (0);
while(true){
if((i__26546__auto___40481 < len__26545__auto___40480)){
args__26552__auto__.push((arguments[i__26546__auto___40481]));

var G__40482 = (i__26546__auto___40481 + (1));
i__26546__auto___40481 = G__40482;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40479))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40479){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40479),args);
});})(g__40365__auto___40479))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__40365__auto___40479){
return (function (seq40418){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40418));
});})(g__40365__auto___40479))
;


var g__40365__auto___40483 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__40365__auto___40483){
return (function cljs$spec$gen$alpha$return(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40484 = arguments.length;
var i__26546__auto___40485 = (0);
while(true){
if((i__26546__auto___40485 < len__26545__auto___40484)){
args__26552__auto__.push((arguments[i__26546__auto___40485]));

var G__40486 = (i__26546__auto___40485 + (1));
i__26546__auto___40485 = G__40486;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40483))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40483){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40483),args);
});})(g__40365__auto___40483))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__40365__auto___40483){
return (function (seq40419){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40419));
});})(g__40365__auto___40483))
;


var g__40365__auto___40487 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__40365__auto___40487){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40488 = arguments.length;
var i__26546__auto___40489 = (0);
while(true){
if((i__26546__auto___40489 < len__26545__auto___40488)){
args__26552__auto__.push((arguments[i__26546__auto___40489]));

var G__40490 = (i__26546__auto___40489 + (1));
i__26546__auto___40489 = G__40490;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40487))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40487){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40487),args);
});})(g__40365__auto___40487))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__40365__auto___40487){
return (function (seq40420){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40420));
});})(g__40365__auto___40487))
;


var g__40365__auto___40491 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__40365__auto___40491){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40492 = arguments.length;
var i__26546__auto___40493 = (0);
while(true){
if((i__26546__auto___40493 < len__26545__auto___40492)){
args__26552__auto__.push((arguments[i__26546__auto___40493]));

var G__40494 = (i__26546__auto___40493 + (1));
i__26546__auto___40493 = G__40494;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40491))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40491){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40491),args);
});})(g__40365__auto___40491))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__40365__auto___40491){
return (function (seq40421){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40421));
});})(g__40365__auto___40491))
;


var g__40365__auto___40495 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__40365__auto___40495){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40496 = arguments.length;
var i__26546__auto___40497 = (0);
while(true){
if((i__26546__auto___40497 < len__26545__auto___40496)){
args__26552__auto__.push((arguments[i__26546__auto___40497]));

var G__40498 = (i__26546__auto___40497 + (1));
i__26546__auto___40497 = G__40498;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40365__auto___40495))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40365__auto___40495){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__40365__auto___40495),args);
});})(g__40365__auto___40495))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__40365__auto___40495){
return (function (seq40422){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40422));
});})(g__40365__auto___40495))
;

var g__40378__auto___40520 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__40378__auto___40520){
return (function cljs$spec$gen$alpha$any(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40521 = arguments.length;
var i__26546__auto___40522 = (0);
while(true){
if((i__26546__auto___40522 < len__26545__auto___40521)){
args__26552__auto__.push((arguments[i__26546__auto___40522]));

var G__40523 = (i__26546__auto___40522 + (1));
i__26546__auto___40522 = G__40523;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40520))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40520){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40520);
});})(g__40378__auto___40520))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__40378__auto___40520){
return (function (seq40499){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40499));
});})(g__40378__auto___40520))
;


var g__40378__auto___40524 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__40378__auto___40524){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40525 = arguments.length;
var i__26546__auto___40526 = (0);
while(true){
if((i__26546__auto___40526 < len__26545__auto___40525)){
args__26552__auto__.push((arguments[i__26546__auto___40526]));

var G__40527 = (i__26546__auto___40526 + (1));
i__26546__auto___40526 = G__40527;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40524))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40524){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40524);
});})(g__40378__auto___40524))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__40378__auto___40524){
return (function (seq40500){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40500));
});})(g__40378__auto___40524))
;


var g__40378__auto___40528 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__40378__auto___40528){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40529 = arguments.length;
var i__26546__auto___40530 = (0);
while(true){
if((i__26546__auto___40530 < len__26545__auto___40529)){
args__26552__auto__.push((arguments[i__26546__auto___40530]));

var G__40531 = (i__26546__auto___40530 + (1));
i__26546__auto___40530 = G__40531;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40528))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40528){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40528);
});})(g__40378__auto___40528))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__40378__auto___40528){
return (function (seq40501){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40501));
});})(g__40378__auto___40528))
;


var g__40378__auto___40532 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__40378__auto___40532){
return (function cljs$spec$gen$alpha$char(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40533 = arguments.length;
var i__26546__auto___40534 = (0);
while(true){
if((i__26546__auto___40534 < len__26545__auto___40533)){
args__26552__auto__.push((arguments[i__26546__auto___40534]));

var G__40535 = (i__26546__auto___40534 + (1));
i__26546__auto___40534 = G__40535;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40532))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40532){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40532);
});})(g__40378__auto___40532))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__40378__auto___40532){
return (function (seq40502){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40502));
});})(g__40378__auto___40532))
;


var g__40378__auto___40536 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__40378__auto___40536){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40537 = arguments.length;
var i__26546__auto___40538 = (0);
while(true){
if((i__26546__auto___40538 < len__26545__auto___40537)){
args__26552__auto__.push((arguments[i__26546__auto___40538]));

var G__40539 = (i__26546__auto___40538 + (1));
i__26546__auto___40538 = G__40539;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40536))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40536){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40536);
});})(g__40378__auto___40536))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__40378__auto___40536){
return (function (seq40503){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40503));
});})(g__40378__auto___40536))
;


var g__40378__auto___40540 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__40378__auto___40540){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40541 = arguments.length;
var i__26546__auto___40542 = (0);
while(true){
if((i__26546__auto___40542 < len__26545__auto___40541)){
args__26552__auto__.push((arguments[i__26546__auto___40542]));

var G__40543 = (i__26546__auto___40542 + (1));
i__26546__auto___40542 = G__40543;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40540))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40540){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40540);
});})(g__40378__auto___40540))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__40378__auto___40540){
return (function (seq40504){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40504));
});})(g__40378__auto___40540))
;


var g__40378__auto___40544 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__40378__auto___40544){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40545 = arguments.length;
var i__26546__auto___40546 = (0);
while(true){
if((i__26546__auto___40546 < len__26545__auto___40545)){
args__26552__auto__.push((arguments[i__26546__auto___40546]));

var G__40547 = (i__26546__auto___40546 + (1));
i__26546__auto___40546 = G__40547;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40544))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40544){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40544);
});})(g__40378__auto___40544))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__40378__auto___40544){
return (function (seq40505){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40505));
});})(g__40378__auto___40544))
;


var g__40378__auto___40548 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__40378__auto___40548){
return (function cljs$spec$gen$alpha$double(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40549 = arguments.length;
var i__26546__auto___40550 = (0);
while(true){
if((i__26546__auto___40550 < len__26545__auto___40549)){
args__26552__auto__.push((arguments[i__26546__auto___40550]));

var G__40551 = (i__26546__auto___40550 + (1));
i__26546__auto___40550 = G__40551;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40548))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40548){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40548);
});})(g__40378__auto___40548))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__40378__auto___40548){
return (function (seq40506){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40506));
});})(g__40378__auto___40548))
;


var g__40378__auto___40552 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__40378__auto___40552){
return (function cljs$spec$gen$alpha$int(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40553 = arguments.length;
var i__26546__auto___40554 = (0);
while(true){
if((i__26546__auto___40554 < len__26545__auto___40553)){
args__26552__auto__.push((arguments[i__26546__auto___40554]));

var G__40555 = (i__26546__auto___40554 + (1));
i__26546__auto___40554 = G__40555;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40552))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40552){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40552);
});})(g__40378__auto___40552))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__40378__auto___40552){
return (function (seq40507){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40507));
});})(g__40378__auto___40552))
;


var g__40378__auto___40556 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__40378__auto___40556){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40557 = arguments.length;
var i__26546__auto___40558 = (0);
while(true){
if((i__26546__auto___40558 < len__26545__auto___40557)){
args__26552__auto__.push((arguments[i__26546__auto___40558]));

var G__40559 = (i__26546__auto___40558 + (1));
i__26546__auto___40558 = G__40559;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40556))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40556){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40556);
});})(g__40378__auto___40556))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__40378__auto___40556){
return (function (seq40508){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40508));
});})(g__40378__auto___40556))
;


var g__40378__auto___40560 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__40378__auto___40560){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40561 = arguments.length;
var i__26546__auto___40562 = (0);
while(true){
if((i__26546__auto___40562 < len__26545__auto___40561)){
args__26552__auto__.push((arguments[i__26546__auto___40562]));

var G__40563 = (i__26546__auto___40562 + (1));
i__26546__auto___40562 = G__40563;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40560))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40560){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40560);
});})(g__40378__auto___40560))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__40378__auto___40560){
return (function (seq40509){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40509));
});})(g__40378__auto___40560))
;


var g__40378__auto___40564 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__40378__auto___40564){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40565 = arguments.length;
var i__26546__auto___40566 = (0);
while(true){
if((i__26546__auto___40566 < len__26545__auto___40565)){
args__26552__auto__.push((arguments[i__26546__auto___40566]));

var G__40567 = (i__26546__auto___40566 + (1));
i__26546__auto___40566 = G__40567;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40564))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40564){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40564);
});})(g__40378__auto___40564))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__40378__auto___40564){
return (function (seq40510){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40510));
});})(g__40378__auto___40564))
;


var g__40378__auto___40568 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__40378__auto___40568){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40569 = arguments.length;
var i__26546__auto___40570 = (0);
while(true){
if((i__26546__auto___40570 < len__26545__auto___40569)){
args__26552__auto__.push((arguments[i__26546__auto___40570]));

var G__40571 = (i__26546__auto___40570 + (1));
i__26546__auto___40570 = G__40571;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40568))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40568){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40568);
});})(g__40378__auto___40568))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__40378__auto___40568){
return (function (seq40511){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40511));
});})(g__40378__auto___40568))
;


var g__40378__auto___40572 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__40378__auto___40572){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40573 = arguments.length;
var i__26546__auto___40574 = (0);
while(true){
if((i__26546__auto___40574 < len__26545__auto___40573)){
args__26552__auto__.push((arguments[i__26546__auto___40574]));

var G__40575 = (i__26546__auto___40574 + (1));
i__26546__auto___40574 = G__40575;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40572))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40572){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40572);
});})(g__40378__auto___40572))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__40378__auto___40572){
return (function (seq40512){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40512));
});})(g__40378__auto___40572))
;


var g__40378__auto___40576 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__40378__auto___40576){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40577 = arguments.length;
var i__26546__auto___40578 = (0);
while(true){
if((i__26546__auto___40578 < len__26545__auto___40577)){
args__26552__auto__.push((arguments[i__26546__auto___40578]));

var G__40579 = (i__26546__auto___40578 + (1));
i__26546__auto___40578 = G__40579;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40576))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40576){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40576);
});})(g__40378__auto___40576))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__40378__auto___40576){
return (function (seq40513){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40513));
});})(g__40378__auto___40576))
;


var g__40378__auto___40580 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__40378__auto___40580){
return (function cljs$spec$gen$alpha$string(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40581 = arguments.length;
var i__26546__auto___40582 = (0);
while(true){
if((i__26546__auto___40582 < len__26545__auto___40581)){
args__26552__auto__.push((arguments[i__26546__auto___40582]));

var G__40583 = (i__26546__auto___40582 + (1));
i__26546__auto___40582 = G__40583;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40580))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40580){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40580);
});})(g__40378__auto___40580))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__40378__auto___40580){
return (function (seq40514){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40514));
});})(g__40378__auto___40580))
;


var g__40378__auto___40584 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__40378__auto___40584){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40585 = arguments.length;
var i__26546__auto___40586 = (0);
while(true){
if((i__26546__auto___40586 < len__26545__auto___40585)){
args__26552__auto__.push((arguments[i__26546__auto___40586]));

var G__40587 = (i__26546__auto___40586 + (1));
i__26546__auto___40586 = G__40587;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40584))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40584){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40584);
});})(g__40378__auto___40584))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__40378__auto___40584){
return (function (seq40515){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40515));
});})(g__40378__auto___40584))
;


var g__40378__auto___40588 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__40378__auto___40588){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40589 = arguments.length;
var i__26546__auto___40590 = (0);
while(true){
if((i__26546__auto___40590 < len__26545__auto___40589)){
args__26552__auto__.push((arguments[i__26546__auto___40590]));

var G__40591 = (i__26546__auto___40590 + (1));
i__26546__auto___40590 = G__40591;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40588))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40588){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40588);
});})(g__40378__auto___40588))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__40378__auto___40588){
return (function (seq40516){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40516));
});})(g__40378__auto___40588))
;


var g__40378__auto___40592 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__40378__auto___40592){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40593 = arguments.length;
var i__26546__auto___40594 = (0);
while(true){
if((i__26546__auto___40594 < len__26545__auto___40593)){
args__26552__auto__.push((arguments[i__26546__auto___40594]));

var G__40595 = (i__26546__auto___40594 + (1));
i__26546__auto___40594 = G__40595;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40592))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40592){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40592);
});})(g__40378__auto___40592))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__40378__auto___40592){
return (function (seq40517){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40517));
});})(g__40378__auto___40592))
;


var g__40378__auto___40596 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__40378__auto___40596){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40597 = arguments.length;
var i__26546__auto___40598 = (0);
while(true){
if((i__26546__auto___40598 < len__26545__auto___40597)){
args__26552__auto__.push((arguments[i__26546__auto___40598]));

var G__40599 = (i__26546__auto___40598 + (1));
i__26546__auto___40598 = G__40599;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40596))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40596){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40596);
});})(g__40378__auto___40596))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__40378__auto___40596){
return (function (seq40518){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40518));
});})(g__40378__auto___40596))
;


var g__40378__auto___40600 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__40378__auto___40600){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40601 = arguments.length;
var i__26546__auto___40602 = (0);
while(true){
if((i__26546__auto___40602 < len__26545__auto___40601)){
args__26552__auto__.push((arguments[i__26546__auto___40602]));

var G__40603 = (i__26546__auto___40602 + (1));
i__26546__auto___40602 = G__40603;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});})(g__40378__auto___40600))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__40378__auto___40600){
return (function (args){
return cljs.core.deref.call(null,g__40378__auto___40600);
});})(g__40378__auto___40600))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__40378__auto___40600){
return (function (seq40519){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40519));
});})(g__40378__auto___40600))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__26552__auto__ = [];
var len__26545__auto___40606 = arguments.length;
var i__26546__auto___40607 = (0);
while(true){
if((i__26546__auto___40607 < len__26545__auto___40606)){
args__26552__auto__.push((arguments[i__26546__auto___40607]));

var G__40608 = (i__26546__auto___40607 + (1));
i__26546__auto___40607 = G__40608;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__40604_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__40604_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq40605){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40605));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__40609_SHARP_){
return (new Date(p1__40609_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1501768375165