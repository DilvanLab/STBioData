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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__8150__auto__ = [];
var len__8143__auto___22460 = arguments.length;
var i__8144__auto___22461 = (0);
while(true){
if((i__8144__auto___22461 < len__8143__auto___22460)){
args__8150__auto__.push((arguments[i__8144__auto___22461]));

var G__22462 = (i__8144__auto___22461 + (1));
i__8144__auto___22461 = G__22462;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq22459){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22459));
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
var args__8150__auto__ = [];
var len__8143__auto___22464 = arguments.length;
var i__8144__auto___22465 = (0);
while(true){
if((i__8144__auto___22465 < len__8143__auto___22464)){
args__8150__auto__.push((arguments[i__8144__auto___22465]));

var G__22466 = (i__8144__auto___22465 + (1));
i__8144__auto___22465 = G__22466;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq22463){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22463));
});

var g_QMARK__22467 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_22468 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__22467){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__22467))
,null));
var mkg_22469 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__22467,g_22468){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__22467,g_22468))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__22467,g_22468,mkg_22469){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__22467).call(null,x);
});})(g_QMARK__22467,g_22468,mkg_22469))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__22467,g_22468,mkg_22469){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_22469).call(null,gfn);
});})(g_QMARK__22467,g_22468,mkg_22469))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__22467,g_22468,mkg_22469){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_22468).call(null,generator);
});})(g_QMARK__22467,g_22468,mkg_22469))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__22431__auto___22489 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__22431__auto___22489){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22490 = arguments.length;
var i__8144__auto___22491 = (0);
while(true){
if((i__8144__auto___22491 < len__8143__auto___22490)){
args__8150__auto__.push((arguments[i__8144__auto___22491]));

var G__22492 = (i__8144__auto___22491 + (1));
i__8144__auto___22491 = G__22492;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22489))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22489){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22489),args);
});})(g__22431__auto___22489))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__22431__auto___22489){
return (function (seq22470){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22470));
});})(g__22431__auto___22489))
;


var g__22431__auto___22493 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__22431__auto___22493){
return (function cljs$spec$gen$alpha$list(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22494 = arguments.length;
var i__8144__auto___22495 = (0);
while(true){
if((i__8144__auto___22495 < len__8143__auto___22494)){
args__8150__auto__.push((arguments[i__8144__auto___22495]));

var G__22496 = (i__8144__auto___22495 + (1));
i__8144__auto___22495 = G__22496;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22493))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22493){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22493),args);
});})(g__22431__auto___22493))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__22431__auto___22493){
return (function (seq22471){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22471));
});})(g__22431__auto___22493))
;


var g__22431__auto___22497 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__22431__auto___22497){
return (function cljs$spec$gen$alpha$map(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22498 = arguments.length;
var i__8144__auto___22499 = (0);
while(true){
if((i__8144__auto___22499 < len__8143__auto___22498)){
args__8150__auto__.push((arguments[i__8144__auto___22499]));

var G__22500 = (i__8144__auto___22499 + (1));
i__8144__auto___22499 = G__22500;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22497))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22497){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22497),args);
});})(g__22431__auto___22497))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__22431__auto___22497){
return (function (seq22472){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22472));
});})(g__22431__auto___22497))
;


var g__22431__auto___22501 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__22431__auto___22501){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22502 = arguments.length;
var i__8144__auto___22503 = (0);
while(true){
if((i__8144__auto___22503 < len__8143__auto___22502)){
args__8150__auto__.push((arguments[i__8144__auto___22503]));

var G__22504 = (i__8144__auto___22503 + (1));
i__8144__auto___22503 = G__22504;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22501))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22501){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22501),args);
});})(g__22431__auto___22501))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__22431__auto___22501){
return (function (seq22473){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22473));
});})(g__22431__auto___22501))
;


var g__22431__auto___22505 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__22431__auto___22505){
return (function cljs$spec$gen$alpha$set(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22506 = arguments.length;
var i__8144__auto___22507 = (0);
while(true){
if((i__8144__auto___22507 < len__8143__auto___22506)){
args__8150__auto__.push((arguments[i__8144__auto___22507]));

var G__22508 = (i__8144__auto___22507 + (1));
i__8144__auto___22507 = G__22508;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22505))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22505){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22505),args);
});})(g__22431__auto___22505))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__22431__auto___22505){
return (function (seq22474){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22474));
});})(g__22431__auto___22505))
;


var g__22431__auto___22509 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__22431__auto___22509){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22510 = arguments.length;
var i__8144__auto___22511 = (0);
while(true){
if((i__8144__auto___22511 < len__8143__auto___22510)){
args__8150__auto__.push((arguments[i__8144__auto___22511]));

var G__22512 = (i__8144__auto___22511 + (1));
i__8144__auto___22511 = G__22512;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22509))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22509){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22509),args);
});})(g__22431__auto___22509))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__22431__auto___22509){
return (function (seq22475){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22475));
});})(g__22431__auto___22509))
;


var g__22431__auto___22513 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__22431__auto___22513){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22514 = arguments.length;
var i__8144__auto___22515 = (0);
while(true){
if((i__8144__auto___22515 < len__8143__auto___22514)){
args__8150__auto__.push((arguments[i__8144__auto___22515]));

var G__22516 = (i__8144__auto___22515 + (1));
i__8144__auto___22515 = G__22516;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22513))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22513){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22513),args);
});})(g__22431__auto___22513))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__22431__auto___22513){
return (function (seq22476){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22476));
});})(g__22431__auto___22513))
;


var g__22431__auto___22517 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__22431__auto___22517){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22518 = arguments.length;
var i__8144__auto___22519 = (0);
while(true){
if((i__8144__auto___22519 < len__8143__auto___22518)){
args__8150__auto__.push((arguments[i__8144__auto___22519]));

var G__22520 = (i__8144__auto___22519 + (1));
i__8144__auto___22519 = G__22520;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22517))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22517){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22517),args);
});})(g__22431__auto___22517))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__22431__auto___22517){
return (function (seq22477){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22477));
});})(g__22431__auto___22517))
;


var g__22431__auto___22521 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__22431__auto___22521){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22522 = arguments.length;
var i__8144__auto___22523 = (0);
while(true){
if((i__8144__auto___22523 < len__8143__auto___22522)){
args__8150__auto__.push((arguments[i__8144__auto___22523]));

var G__22524 = (i__8144__auto___22523 + (1));
i__8144__auto___22523 = G__22524;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22521))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22521),args);
});})(g__22431__auto___22521))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__22431__auto___22521){
return (function (seq22478){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22478));
});})(g__22431__auto___22521))
;


var g__22431__auto___22525 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__22431__auto___22525){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22526 = arguments.length;
var i__8144__auto___22527 = (0);
while(true){
if((i__8144__auto___22527 < len__8143__auto___22526)){
args__8150__auto__.push((arguments[i__8144__auto___22527]));

var G__22528 = (i__8144__auto___22527 + (1));
i__8144__auto___22527 = G__22528;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22525))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22525),args);
});})(g__22431__auto___22525))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__22431__auto___22525){
return (function (seq22479){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22479));
});})(g__22431__auto___22525))
;


var g__22431__auto___22529 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__22431__auto___22529){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22530 = arguments.length;
var i__8144__auto___22531 = (0);
while(true){
if((i__8144__auto___22531 < len__8143__auto___22530)){
args__8150__auto__.push((arguments[i__8144__auto___22531]));

var G__22532 = (i__8144__auto___22531 + (1));
i__8144__auto___22531 = G__22532;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22529))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22529){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22529),args);
});})(g__22431__auto___22529))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__22431__auto___22529){
return (function (seq22480){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22480));
});})(g__22431__auto___22529))
;


var g__22431__auto___22533 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__22431__auto___22533){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22534 = arguments.length;
var i__8144__auto___22535 = (0);
while(true){
if((i__8144__auto___22535 < len__8143__auto___22534)){
args__8150__auto__.push((arguments[i__8144__auto___22535]));

var G__22536 = (i__8144__auto___22535 + (1));
i__8144__auto___22535 = G__22536;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22533))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22533){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22533),args);
});})(g__22431__auto___22533))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__22431__auto___22533){
return (function (seq22481){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22481));
});})(g__22431__auto___22533))
;


var g__22431__auto___22537 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__22431__auto___22537){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22538 = arguments.length;
var i__8144__auto___22539 = (0);
while(true){
if((i__8144__auto___22539 < len__8143__auto___22538)){
args__8150__auto__.push((arguments[i__8144__auto___22539]));

var G__22540 = (i__8144__auto___22539 + (1));
i__8144__auto___22539 = G__22540;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22537))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22537),args);
});})(g__22431__auto___22537))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__22431__auto___22537){
return (function (seq22482){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22482));
});})(g__22431__auto___22537))
;


var g__22431__auto___22541 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__22431__auto___22541){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22542 = arguments.length;
var i__8144__auto___22543 = (0);
while(true){
if((i__8144__auto___22543 < len__8143__auto___22542)){
args__8150__auto__.push((arguments[i__8144__auto___22543]));

var G__22544 = (i__8144__auto___22543 + (1));
i__8144__auto___22543 = G__22544;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22541))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22541){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22541),args);
});})(g__22431__auto___22541))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__22431__auto___22541){
return (function (seq22483){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22483));
});})(g__22431__auto___22541))
;


var g__22431__auto___22545 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__22431__auto___22545){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22546 = arguments.length;
var i__8144__auto___22547 = (0);
while(true){
if((i__8144__auto___22547 < len__8143__auto___22546)){
args__8150__auto__.push((arguments[i__8144__auto___22547]));

var G__22548 = (i__8144__auto___22547 + (1));
i__8144__auto___22547 = G__22548;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22545))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22545),args);
});})(g__22431__auto___22545))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__22431__auto___22545){
return (function (seq22484){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22484));
});})(g__22431__auto___22545))
;


var g__22431__auto___22549 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__22431__auto___22549){
return (function cljs$spec$gen$alpha$return(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22550 = arguments.length;
var i__8144__auto___22551 = (0);
while(true){
if((i__8144__auto___22551 < len__8143__auto___22550)){
args__8150__auto__.push((arguments[i__8144__auto___22551]));

var G__22552 = (i__8144__auto___22551 + (1));
i__8144__auto___22551 = G__22552;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22549))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22549),args);
});})(g__22431__auto___22549))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__22431__auto___22549){
return (function (seq22485){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22485));
});})(g__22431__auto___22549))
;


var g__22431__auto___22553 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__22431__auto___22553){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22554 = arguments.length;
var i__8144__auto___22555 = (0);
while(true){
if((i__8144__auto___22555 < len__8143__auto___22554)){
args__8150__auto__.push((arguments[i__8144__auto___22555]));

var G__22556 = (i__8144__auto___22555 + (1));
i__8144__auto___22555 = G__22556;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22553))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22553){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22553),args);
});})(g__22431__auto___22553))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__22431__auto___22553){
return (function (seq22486){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22486));
});})(g__22431__auto___22553))
;


var g__22431__auto___22557 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__22431__auto___22557){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22558 = arguments.length;
var i__8144__auto___22559 = (0);
while(true){
if((i__8144__auto___22559 < len__8143__auto___22558)){
args__8150__auto__.push((arguments[i__8144__auto___22559]));

var G__22560 = (i__8144__auto___22559 + (1));
i__8144__auto___22559 = G__22560;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22557))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22557),args);
});})(g__22431__auto___22557))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__22431__auto___22557){
return (function (seq22487){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22487));
});})(g__22431__auto___22557))
;


var g__22431__auto___22561 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__22431__auto___22561){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22562 = arguments.length;
var i__8144__auto___22563 = (0);
while(true){
if((i__8144__auto___22563 < len__8143__auto___22562)){
args__8150__auto__.push((arguments[i__8144__auto___22563]));

var G__22564 = (i__8144__auto___22563 + (1));
i__8144__auto___22563 = G__22564;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22431__auto___22561))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22431__auto___22561){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__22431__auto___22561),args);
});})(g__22431__auto___22561))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__22431__auto___22561){
return (function (seq22488){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22488));
});})(g__22431__auto___22561))
;

var g__22444__auto___22586 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__22444__auto___22586){
return (function cljs$spec$gen$alpha$any(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22587 = arguments.length;
var i__8144__auto___22588 = (0);
while(true){
if((i__8144__auto___22588 < len__8143__auto___22587)){
args__8150__auto__.push((arguments[i__8144__auto___22588]));

var G__22589 = (i__8144__auto___22588 + (1));
i__8144__auto___22588 = G__22589;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22586))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22586){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22586);
});})(g__22444__auto___22586))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__22444__auto___22586){
return (function (seq22565){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22565));
});})(g__22444__auto___22586))
;


var g__22444__auto___22590 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__22444__auto___22590){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22591 = arguments.length;
var i__8144__auto___22592 = (0);
while(true){
if((i__8144__auto___22592 < len__8143__auto___22591)){
args__8150__auto__.push((arguments[i__8144__auto___22592]));

var G__22593 = (i__8144__auto___22592 + (1));
i__8144__auto___22592 = G__22593;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22590))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22590){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22590);
});})(g__22444__auto___22590))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__22444__auto___22590){
return (function (seq22566){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22566));
});})(g__22444__auto___22590))
;


var g__22444__auto___22594 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__22444__auto___22594){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22595 = arguments.length;
var i__8144__auto___22596 = (0);
while(true){
if((i__8144__auto___22596 < len__8143__auto___22595)){
args__8150__auto__.push((arguments[i__8144__auto___22596]));

var G__22597 = (i__8144__auto___22596 + (1));
i__8144__auto___22596 = G__22597;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22594))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22594){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22594);
});})(g__22444__auto___22594))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__22444__auto___22594){
return (function (seq22567){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22567));
});})(g__22444__auto___22594))
;


var g__22444__auto___22598 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__22444__auto___22598){
return (function cljs$spec$gen$alpha$char(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22599 = arguments.length;
var i__8144__auto___22600 = (0);
while(true){
if((i__8144__auto___22600 < len__8143__auto___22599)){
args__8150__auto__.push((arguments[i__8144__auto___22600]));

var G__22601 = (i__8144__auto___22600 + (1));
i__8144__auto___22600 = G__22601;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22598))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22598){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22598);
});})(g__22444__auto___22598))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__22444__auto___22598){
return (function (seq22568){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22568));
});})(g__22444__auto___22598))
;


var g__22444__auto___22602 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__22444__auto___22602){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22603 = arguments.length;
var i__8144__auto___22604 = (0);
while(true){
if((i__8144__auto___22604 < len__8143__auto___22603)){
args__8150__auto__.push((arguments[i__8144__auto___22604]));

var G__22605 = (i__8144__auto___22604 + (1));
i__8144__auto___22604 = G__22605;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22602))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22602){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22602);
});})(g__22444__auto___22602))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__22444__auto___22602){
return (function (seq22569){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22569));
});})(g__22444__auto___22602))
;


var g__22444__auto___22606 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__22444__auto___22606){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22607 = arguments.length;
var i__8144__auto___22608 = (0);
while(true){
if((i__8144__auto___22608 < len__8143__auto___22607)){
args__8150__auto__.push((arguments[i__8144__auto___22608]));

var G__22609 = (i__8144__auto___22608 + (1));
i__8144__auto___22608 = G__22609;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22606))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22606){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22606);
});})(g__22444__auto___22606))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__22444__auto___22606){
return (function (seq22570){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22570));
});})(g__22444__auto___22606))
;


var g__22444__auto___22610 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__22444__auto___22610){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22611 = arguments.length;
var i__8144__auto___22612 = (0);
while(true){
if((i__8144__auto___22612 < len__8143__auto___22611)){
args__8150__auto__.push((arguments[i__8144__auto___22612]));

var G__22613 = (i__8144__auto___22612 + (1));
i__8144__auto___22612 = G__22613;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22610))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22610){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22610);
});})(g__22444__auto___22610))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__22444__auto___22610){
return (function (seq22571){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22571));
});})(g__22444__auto___22610))
;


var g__22444__auto___22614 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__22444__auto___22614){
return (function cljs$spec$gen$alpha$double(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22615 = arguments.length;
var i__8144__auto___22616 = (0);
while(true){
if((i__8144__auto___22616 < len__8143__auto___22615)){
args__8150__auto__.push((arguments[i__8144__auto___22616]));

var G__22617 = (i__8144__auto___22616 + (1));
i__8144__auto___22616 = G__22617;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22614))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22614){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22614);
});})(g__22444__auto___22614))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__22444__auto___22614){
return (function (seq22572){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22572));
});})(g__22444__auto___22614))
;


var g__22444__auto___22618 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__22444__auto___22618){
return (function cljs$spec$gen$alpha$int(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22619 = arguments.length;
var i__8144__auto___22620 = (0);
while(true){
if((i__8144__auto___22620 < len__8143__auto___22619)){
args__8150__auto__.push((arguments[i__8144__auto___22620]));

var G__22621 = (i__8144__auto___22620 + (1));
i__8144__auto___22620 = G__22621;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22618))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22618){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22618);
});})(g__22444__auto___22618))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__22444__auto___22618){
return (function (seq22573){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22573));
});})(g__22444__auto___22618))
;


var g__22444__auto___22622 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__22444__auto___22622){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22623 = arguments.length;
var i__8144__auto___22624 = (0);
while(true){
if((i__8144__auto___22624 < len__8143__auto___22623)){
args__8150__auto__.push((arguments[i__8144__auto___22624]));

var G__22625 = (i__8144__auto___22624 + (1));
i__8144__auto___22624 = G__22625;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22622))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22622){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22622);
});})(g__22444__auto___22622))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__22444__auto___22622){
return (function (seq22574){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22574));
});})(g__22444__auto___22622))
;


var g__22444__auto___22626 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__22444__auto___22626){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22627 = arguments.length;
var i__8144__auto___22628 = (0);
while(true){
if((i__8144__auto___22628 < len__8143__auto___22627)){
args__8150__auto__.push((arguments[i__8144__auto___22628]));

var G__22629 = (i__8144__auto___22628 + (1));
i__8144__auto___22628 = G__22629;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22626))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22626){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22626);
});})(g__22444__auto___22626))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__22444__auto___22626){
return (function (seq22575){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22575));
});})(g__22444__auto___22626))
;


var g__22444__auto___22630 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__22444__auto___22630){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22631 = arguments.length;
var i__8144__auto___22632 = (0);
while(true){
if((i__8144__auto___22632 < len__8143__auto___22631)){
args__8150__auto__.push((arguments[i__8144__auto___22632]));

var G__22633 = (i__8144__auto___22632 + (1));
i__8144__auto___22632 = G__22633;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22630))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22630){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22630);
});})(g__22444__auto___22630))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__22444__auto___22630){
return (function (seq22576){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22576));
});})(g__22444__auto___22630))
;


var g__22444__auto___22634 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__22444__auto___22634){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22635 = arguments.length;
var i__8144__auto___22636 = (0);
while(true){
if((i__8144__auto___22636 < len__8143__auto___22635)){
args__8150__auto__.push((arguments[i__8144__auto___22636]));

var G__22637 = (i__8144__auto___22636 + (1));
i__8144__auto___22636 = G__22637;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22634))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22634){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22634);
});})(g__22444__auto___22634))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__22444__auto___22634){
return (function (seq22577){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22577));
});})(g__22444__auto___22634))
;


var g__22444__auto___22638 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__22444__auto___22638){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22639 = arguments.length;
var i__8144__auto___22640 = (0);
while(true){
if((i__8144__auto___22640 < len__8143__auto___22639)){
args__8150__auto__.push((arguments[i__8144__auto___22640]));

var G__22641 = (i__8144__auto___22640 + (1));
i__8144__auto___22640 = G__22641;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22638))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22638){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22638);
});})(g__22444__auto___22638))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__22444__auto___22638){
return (function (seq22578){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22578));
});})(g__22444__auto___22638))
;


var g__22444__auto___22642 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__22444__auto___22642){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22643 = arguments.length;
var i__8144__auto___22644 = (0);
while(true){
if((i__8144__auto___22644 < len__8143__auto___22643)){
args__8150__auto__.push((arguments[i__8144__auto___22644]));

var G__22645 = (i__8144__auto___22644 + (1));
i__8144__auto___22644 = G__22645;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22642))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22642){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22642);
});})(g__22444__auto___22642))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__22444__auto___22642){
return (function (seq22579){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22579));
});})(g__22444__auto___22642))
;


var g__22444__auto___22646 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__22444__auto___22646){
return (function cljs$spec$gen$alpha$string(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22647 = arguments.length;
var i__8144__auto___22648 = (0);
while(true){
if((i__8144__auto___22648 < len__8143__auto___22647)){
args__8150__auto__.push((arguments[i__8144__auto___22648]));

var G__22649 = (i__8144__auto___22648 + (1));
i__8144__auto___22648 = G__22649;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22646))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22646){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22646);
});})(g__22444__auto___22646))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__22444__auto___22646){
return (function (seq22580){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22580));
});})(g__22444__auto___22646))
;


var g__22444__auto___22650 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__22444__auto___22650){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22651 = arguments.length;
var i__8144__auto___22652 = (0);
while(true){
if((i__8144__auto___22652 < len__8143__auto___22651)){
args__8150__auto__.push((arguments[i__8144__auto___22652]));

var G__22653 = (i__8144__auto___22652 + (1));
i__8144__auto___22652 = G__22653;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22650))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22650){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22650);
});})(g__22444__auto___22650))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__22444__auto___22650){
return (function (seq22581){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22581));
});})(g__22444__auto___22650))
;


var g__22444__auto___22654 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__22444__auto___22654){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22655 = arguments.length;
var i__8144__auto___22656 = (0);
while(true){
if((i__8144__auto___22656 < len__8143__auto___22655)){
args__8150__auto__.push((arguments[i__8144__auto___22656]));

var G__22657 = (i__8144__auto___22656 + (1));
i__8144__auto___22656 = G__22657;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22654))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22654){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22654);
});})(g__22444__auto___22654))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__22444__auto___22654){
return (function (seq22582){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22582));
});})(g__22444__auto___22654))
;


var g__22444__auto___22658 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__22444__auto___22658){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22659 = arguments.length;
var i__8144__auto___22660 = (0);
while(true){
if((i__8144__auto___22660 < len__8143__auto___22659)){
args__8150__auto__.push((arguments[i__8144__auto___22660]));

var G__22661 = (i__8144__auto___22660 + (1));
i__8144__auto___22660 = G__22661;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22658))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22658){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22658);
});})(g__22444__auto___22658))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__22444__auto___22658){
return (function (seq22583){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22583));
});})(g__22444__auto___22658))
;


var g__22444__auto___22662 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__22444__auto___22662){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22663 = arguments.length;
var i__8144__auto___22664 = (0);
while(true){
if((i__8144__auto___22664 < len__8143__auto___22663)){
args__8150__auto__.push((arguments[i__8144__auto___22664]));

var G__22665 = (i__8144__auto___22664 + (1));
i__8144__auto___22664 = G__22665;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22662))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22662){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22662);
});})(g__22444__auto___22662))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__22444__auto___22662){
return (function (seq22584){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22584));
});})(g__22444__auto___22662))
;


var g__22444__auto___22666 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__22444__auto___22666){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22667 = arguments.length;
var i__8144__auto___22668 = (0);
while(true){
if((i__8144__auto___22668 < len__8143__auto___22667)){
args__8150__auto__.push((arguments[i__8144__auto___22668]));

var G__22669 = (i__8144__auto___22668 + (1));
i__8144__auto___22668 = G__22669;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});})(g__22444__auto___22666))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__22444__auto___22666){
return (function (args){
return cljs.core.deref.call(null,g__22444__auto___22666);
});})(g__22444__auto___22666))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__22444__auto___22666){
return (function (seq22585){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22585));
});})(g__22444__auto___22666))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__8150__auto__ = [];
var len__8143__auto___22672 = arguments.length;
var i__8144__auto___22673 = (0);
while(true){
if((i__8144__auto___22673 < len__8143__auto___22672)){
args__8150__auto__.push((arguments[i__8144__auto___22673]));

var G__22674 = (i__8144__auto___22673 + (1));
i__8144__auto___22673 = G__22674;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__22670_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__22670_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq22671){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22671));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__22675_SHARP_){
return (new Date(p1__22675_SHARP_));
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

//# sourceMappingURL=alpha.js.map