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
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.internal.core._EQ_ = (function cljs_time$internal$core$_EQ_(var_args){
var args__26552__auto__ = [];
var len__26545__auto___37190 = arguments.length;
var i__26546__auto___37191 = (0);
while(true){
if((i__26546__auto___37191 < len__26545__auto___37190)){
args__26552__auto__.push((arguments[i__26546__auto___37191]));

var G__37192 = (i__26546__auto___37191 + (1));
i__26546__auto___37191 = G__37192;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});

cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_.call(null,(function (p1__37187_SHARP_){
return (p1__37187_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__37188_SHARP_){
return p1__37188_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.call(null,cljs.core._EQ_,args);

}
});

cljs_time.internal.core._EQ_.cljs$lang$maxFixedArity = (0);

cljs_time.internal.core._EQ_.cljs$lang$applyTo = (function (seq37189){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37189));
});

cljs_time.internal.core.leap_year_QMARK_ = (function cljs_time$internal$core$leap_year_QMARK_(y){
if((cljs.core.mod.call(null,y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod.call(null,y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod.call(null,y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.year_corrected_dim = (function cljs_time$internal$core$year_corrected_dim(year,month){
var G__37194 = cljs_time.internal.core.days_in_month.call(null,(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,month,(1)))?(11):(month - (1))));
if(cljs.core.truth_((function (){var and__25420__auto__ = cljs_time.internal.core.leap_year_QMARK_.call(null,year);
if(cljs.core.truth_(and__25420__auto__)){
return cljs_time.internal.core._EQ_.call(null,month,(2));
} else {
return and__25420__auto__;
}
})())){
return (G__37194 + (1));
} else {
return G__37194;
}
});
cljs_time.internal.core.valid_date_QMARK_ = (function cljs_time$internal$core$valid_date_QMARK_(p__37195){
var map__37198 = p__37195;
var map__37198__$1 = ((((!((map__37198 == null)))?((((map__37198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37198.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37198):map__37198);
var d = map__37198__$1;
var years = cljs.core.get.call(null,map__37198__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var months = cljs.core.get.call(null,map__37198__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var days = cljs.core.get.call(null,map__37198__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var hours = cljs.core.get.call(null,map__37198__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var minutes = cljs.core.get.call(null,map__37198__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var seconds = cljs.core.get.call(null,map__37198__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var millis = cljs.core.get.call(null,map__37198__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var months__$1 = (months + (1));
if(cljs.core.truth_((function (){var and__25420__auto__ = years;
if(cljs.core.truth_(and__25420__auto__)){
return ((((1) <= months__$1)) && ((months__$1 <= (12)))) && ((((1) <= days)) && ((days <= cljs_time.internal.core.year_corrected_dim.call(null,years,months__$1)))) && ((((0) <= hours)) && ((hours <= (23)))) && ((((0) <= minutes)) && ((minutes <= (59)))) && ((((0) <= seconds)) && ((seconds <= (60)))) && ((((0) <= millis)) && ((millis <= (999))));
} else {
return and__25420__auto__;
}
})())){
return d;
} else {
throw cljs.core.ex_info.call(null,"Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invalid-date","invalid-date",2030506573),new cljs.core.Keyword(null,"date","date",-1463434462),d], null));
}
});
cljs_time.internal.core.index_of = (function cljs_time$internal$core$index_of(coll,x){
return cljs.core.first.call(null,cljs.core.keep_indexed.call(null,(function (p1__37201_SHARP_,p2__37200_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.call(null,p2__37200_SHARP_,x))){
return p1__37201_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Formats a string using goog.string.format.
 */
cljs_time.internal.core.format = (function cljs_time$internal$core$format(var_args){
var args__26552__auto__ = [];
var len__26545__auto___37204 = arguments.length;
var i__26546__auto___37205 = (0);
while(true){
if((i__26546__auto___37205 < len__26545__auto___37204)){
args__26552__auto__.push((arguments[i__26546__auto___37205]));

var G__37206 = (i__26546__auto___37205 + (1));
i__26546__auto___37205 = G__37206;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((1) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((1)),(0),null)):null);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26553__auto__);
});

cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var args__$1 = cljs.core.map.call(null,(function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.call(null,goog.string.format,fmt,args__$1);
});

cljs_time.internal.core.format.cljs$lang$maxFixedArity = (1);

cljs_time.internal.core.format.cljs$lang$applyTo = (function (seq37202){
var G__37203 = cljs.core.first.call(null,seq37202);
var seq37202__$1 = cljs.core.next.call(null,seq37202);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(G__37203,seq37202__$1);
});

/**
 * Remove the need to pull in gstring/format code in advanced compilation
 */
cljs_time.internal.core.zero_pad = (function cljs_time$internal$core$zero_pad(var_args){
var args37207 = [];
var len__26545__auto___37210 = arguments.length;
var i__26546__auto___37211 = (0);
while(true){
if((i__26546__auto___37211 < len__26545__auto___37210)){
args37207.push((arguments[i__26546__auto___37211]));

var G__37212 = (i__26546__auto___37211 + (1));
i__26546__auto___37211 = G__37212;
continue;
} else {
}
break;
}

var G__37209 = args37207.length;
switch (G__37209) {
case 1:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37207.length)].join('')));

}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("0"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2 = (function (n,zeros){
if(((1) > zeros)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.take.call(null,(zeros - cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''))),cljs.core.repeat.call(null,"0")))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$lang$maxFixedArity = 2;

cljs_time.internal.core.multiplied_by = (function cljs_time$internal$core$multiplied_by(period,scalar){
var scale_fn = (function cljs_time$internal$core$multiplied_by_$_scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"millis","millis",-1338288387)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seconds","seconds",-445266194)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"minutes","minutes",1319166394)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hours","hours",58380855)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"days","days",-1394072564)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"weeks","weeks",1844596125)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months","months",-45571637)], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"years","years",-1298579689)], null),scale_fn);
});

//# sourceMappingURL=core.js.map?rel=1502108327319