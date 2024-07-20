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
goog.provide('testdouble.cljs.csv');
goog.require('cljs.core');
goog.require('clojure.string');
testdouble.cljs.csv.wrap_in_quotes = (function testdouble$cljs$csv$wrap_in_quotes(s){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join('');
});
testdouble.cljs.csv.seperate = (function testdouble$cljs$csv$seperate(data,separator,quote){
if(cljs.core.truth_(quote)){
return clojure.string.join.call(null,separator,cljs.core.map.call(null,testdouble.cljs.csv.wrap_in_quotes,data));
} else {
return clojure.string.join.call(null,separator,data);
}
});
testdouble.cljs.csv.write_data = (function testdouble$cljs$csv$write_data(data,separator,newline,quote){
return clojure.string.join.call(null,newline,cljs.core.map.call(null,(function (p1__15379_SHARP_){
return testdouble.cljs.csv.seperate.call(null,p1__15379_SHARP_,separator,quote);
}),data));
});
testdouble.cljs.csv.newlines = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lf","lf",1923784290),"\n",new cljs.core.Keyword(null,"cr+lf","cr+lf",486534798),"\r\n"], null);
testdouble.cljs.csv.newline_error_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(":newline must be one of ["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,",",cljs.core.keys.call(null,testdouble.cljs.csv.newlines))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
/**
 * Writes data to String in CSV-format.
 * 
 *   Accepts the following options:
 * 
 *   :separator - field seperator
 *             (default ,)
 * 
 *   :newline   - line seperator
 *             (accepts :lf or :cr+lf)
 *             (default :lf)
 * 
 *   :quote     - wrap in quotes
 *             (default false)
 */
testdouble.cljs.csv.write_csv = (function testdouble$cljs$csv$write_csv(var_args){
var args__8150__auto__ = [];
var len__8143__auto___15384 = arguments.length;
var i__8144__auto___15385 = (0);
while(true){
if((i__8144__auto___15385 < len__8143__auto___15384)){
args__8150__auto__.push((arguments[i__8144__auto___15385]));

var G__15386 = (i__8144__auto___15385 + (1));
i__8144__auto___15385 = G__15386;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((1) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((1)),(0),null)):null);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8151__auto__);
});

testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic = (function (data,options){
var map__15382 = options;
var map__15382__$1 = ((((!((map__15382 == null)))?((((map__15382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15382.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15382):map__15382);
var separator = cljs.core.get.call(null,map__15382__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),",");
var newline = cljs.core.get.call(null,map__15382__$1,new cljs.core.Keyword(null,"newline","newline",1790071323),new cljs.core.Keyword(null,"lf","lf",1923784290));
var quote = cljs.core.get.call(null,map__15382__$1,new cljs.core.Keyword(null,"quote","quote",-262615245),false);
var temp__4655__auto__ = cljs.core.get.call(null,testdouble.cljs.csv.newlines,newline);
if(cljs.core.truth_(temp__4655__auto__)){
var newline_char = temp__4655__auto__;
return testdouble.cljs.csv.write_data.call(null,data,separator,newline_char,quote);
} else {
throw (new Error(testdouble.cljs.csv.newline_error_message));
}
});

testdouble.cljs.csv.write_csv.cljs$lang$maxFixedArity = (1);

testdouble.cljs.csv.write_csv.cljs$lang$applyTo = (function (seq15380){
var G__15381 = cljs.core.first.call(null,seq15380);
var seq15380__$1 = cljs.core.next.call(null,seq15380);
return testdouble.cljs.csv.write_csv.cljs$core$IFn$_invoke$arity$variadic(G__15381,seq15380__$1);
});


//# sourceMappingURL=csv.js.map