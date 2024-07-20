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
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

/**
 * @interface
 */
cljs.core.async.impl.protocols.ReadPort = function(){};

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__26100__auto__ = (((port == null))?null:port);
var m__26101__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,port,fn1_handler);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,port,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.WritePort = function(){};

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 *                             Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((!((port == null))) && (!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__26100__auto__ = (((port == null))?null:port);
var m__26101__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,port,val,fn1_handler);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,port,val,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Channel = function(){};

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__26100__auto__ = (((chan == null))?null:chan);
var m__26101__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,chan);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((!((chan == null))) && (!((chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 == null)))){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__26100__auto__ = (((chan == null))?null:chan);
var m__26101__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,chan);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Handler = function(){};

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__26100__auto__ = (((h == null))?null:h);
var m__26101__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,h);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
}
});

/**
 * returns true if this handler may be blocked, otherwise it must not block
 */
cljs.core.async.impl.protocols.blockable_QMARK_ = (function cljs$core$async$impl$protocols$blockable_QMARK_(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(h);
} else {
var x__26100__auto__ = (((h == null))?null:h);
var m__26101__auto__ = (cljs.core.async.impl.protocols.blockable_QMARK_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,h);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.blockable_QMARK_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.blockable?",h);
}
}
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((!((h == null))) && (!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__26100__auto__ = (((h == null))?null:h);
var m__26101__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,h);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Buffer = function(){};

/**
 * returns true if buffer can accept put
 */
cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__26100__auto__ = (((b == null))?null:b);
var m__26101__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,b);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
}
});

/**
 * remove and return next item from buffer, called under chan mutex
 */
cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__26100__auto__ = (((b == null))?null:b);
var m__26101__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,b);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
}
});

/**
 * if room, add item to the buffer, returns b, called under chan mutex
 */
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__26100__auto__ = (((b == null))?null:b);
var m__26101__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,b,itm);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,b,itm);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
}
});

/**
 * called on chan closed under chan mutex, return ignored
 */
cljs.core.async.impl.protocols.close_buf_BANG_ = (function cljs$core$async$impl$protocols$close_buf_BANG_(b){
if((!((b == null))) && (!((b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 == null)))){
return b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(b);
} else {
var x__26100__auto__ = (((b == null))?null:b);
var m__26101__auto__ = (cljs.core.async.impl.protocols.close_buf_BANG_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,b);
} else {
var m__26101__auto____$1 = (cljs.core.async.impl.protocols.close_buf_BANG_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.close-buf!",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(var_args){
var args32248 = [];
var len__26545__auto___32251 = arguments.length;
var i__26546__auto___32252 = (0);
while(true){
if((i__26546__auto___32252 < len__26545__auto___32251)){
args32248.push((arguments[i__26546__auto___32252]));

var G__32253 = (i__26546__auto___32252 + (1));
i__26546__auto___32252 = G__32253;
continue;
} else {
}
break;
}

var G__32250 = args32248.length;
switch (G__32250) {
case 1:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32248.length)].join('')));

}
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error("Assert failed: (not (nil? itm))"));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
});

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs.core.async.impl.protocols.UnblockingBuffer = function(){};


//# sourceMappingURL=protocols.js.map?rel=1502108317087