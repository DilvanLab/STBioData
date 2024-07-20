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
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args34426 = [];
var len__26545__auto___34432 = arguments.length;
var i__26546__auto___34433 = (0);
while(true){
if((i__26546__auto___34433 < len__26545__auto___34432)){
args34426.push((arguments[i__26546__auto___34433]));

var G__34434 = (i__26546__auto___34433 + (1));
i__26546__auto___34433 = G__34434;
continue;
} else {
}
break;
}

var G__34428 = args34426.length;
switch (G__34428) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34426.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34429 = (function (f,blockable,meta34430){
this.f = f;
this.blockable = blockable;
this.meta34430 = meta34430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34431,meta34430__$1){
var self__ = this;
var _34431__$1 = this;
return (new cljs.core.async.t_cljs$core$async34429(self__.f,self__.blockable,meta34430__$1));
});

cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34431){
var self__ = this;
var _34431__$1 = this;
return self__.meta34430;
});

cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34429.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34430","meta34430",721131375,null)], null);
});

cljs.core.async.t_cljs$core$async34429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34429";

cljs.core.async.t_cljs$core$async34429.cljs$lang$ctorPrWriter = (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async34429");
});

cljs.core.async.__GT_t_cljs$core$async34429 = (function cljs$core$async$__GT_t_cljs$core$async34429(f__$1,blockable__$1,meta34430){
return (new cljs.core.async.t_cljs$core$async34429(f__$1,blockable__$1,meta34430));
});

}

return (new cljs.core.async.t_cljs$core$async34429(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args34438 = [];
var len__26545__auto___34441 = arguments.length;
var i__26546__auto___34442 = (0);
while(true){
if((i__26546__auto___34442 < len__26545__auto___34441)){
args34438.push((arguments[i__26546__auto___34442]));

var G__34443 = (i__26546__auto___34442 + (1));
i__26546__auto___34442 = G__34443;
continue;
} else {
}
break;
}

var G__34440 = args34438.length;
switch (G__34440) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34438.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args34445 = [];
var len__26545__auto___34448 = arguments.length;
var i__26546__auto___34449 = (0);
while(true){
if((i__26546__auto___34449 < len__26545__auto___34448)){
args34445.push((arguments[i__26546__auto___34449]));

var G__34450 = (i__26546__auto___34449 + (1));
i__26546__auto___34449 = G__34450;
continue;
} else {
}
break;
}

var G__34447 = args34445.length;
switch (G__34447) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34445.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args34452 = [];
var len__26545__auto___34455 = arguments.length;
var i__26546__auto___34456 = (0);
while(true){
if((i__26546__auto___34456 < len__26545__auto___34455)){
args34452.push((arguments[i__26546__auto___34456]));

var G__34457 = (i__26546__auto___34456 + (1));
i__26546__auto___34456 = G__34457;
continue;
} else {
}
break;
}

var G__34454 = args34452.length;
switch (G__34454) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34452.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34459 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34459);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34459,ret){
return (function (){
return fn1.call(null,val_34459);
});})(val_34459,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args34460 = [];
var len__26545__auto___34463 = arguments.length;
var i__26546__auto___34464 = (0);
while(true){
if((i__26546__auto___34464 < len__26545__auto___34463)){
args34460.push((arguments[i__26546__auto___34464]));

var G__34465 = (i__26546__auto___34464 + (1));
i__26546__auto___34464 = G__34465;
continue;
} else {
}
break;
}

var G__34462 = args34460.length;
switch (G__34462) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34460.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26355__auto___34467 = n;
var x_34468 = (0);
while(true){
if((x_34468 < n__26355__auto___34467)){
(a[x_34468] = (0));

var G__34469 = (x_34468 + (1));
x_34468 = G__34469;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34470 = (i + (1));
i = G__34470;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34474 = (function (flag,meta34475){
this.flag = flag;
this.meta34475 = meta34475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34476,meta34475__$1){
var self__ = this;
var _34476__$1 = this;
return (new cljs.core.async.t_cljs$core$async34474(self__.flag,meta34475__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34476){
var self__ = this;
var _34476__$1 = this;
return self__.meta34475;
});})(flag))
;

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34474.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34475","meta34475",108229954,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34474";

cljs.core.async.t_cljs$core$async34474.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async34474");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34474 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34474(flag__$1,meta34475){
return (new cljs.core.async.t_cljs$core$async34474(flag__$1,meta34475));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34474(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34480 = (function (flag,cb,meta34481){
this.flag = flag;
this.cb = cb;
this.meta34481 = meta34481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34482,meta34481__$1){
var self__ = this;
var _34482__$1 = this;
return (new cljs.core.async.t_cljs$core$async34480(self__.flag,self__.cb,meta34481__$1));
});

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34482){
var self__ = this;
var _34482__$1 = this;
return self__.meta34481;
});

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34481","meta34481",1496348691,null)], null);
});

cljs.core.async.t_cljs$core$async34480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34480";

cljs.core.async.t_cljs$core$async34480.cljs$lang$ctorPrWriter = (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async34480");
});

cljs.core.async.__GT_t_cljs$core$async34480 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34480(flag__$1,cb__$1,meta34481){
return (new cljs.core.async.t_cljs$core$async34480(flag__$1,cb__$1,meta34481));
});

}

return (new cljs.core.async.t_cljs$core$async34480(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34483_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34483_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34484_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34484_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25432__auto__ = wport;
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34485 = (i + (1));
i = G__34485;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25432__auto__ = ret;
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__25420__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25420__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25420__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26552__auto__ = [];
var len__26545__auto___34491 = arguments.length;
var i__26546__auto___34492 = (0);
while(true){
if((i__26546__auto___34492 < len__26545__auto___34491)){
args__26552__auto__.push((arguments[i__26546__auto___34492]));

var G__34493 = (i__26546__auto___34492 + (1));
i__26546__auto___34492 = G__34493;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((1) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26553__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34488){
var map__34489 = p__34488;
var map__34489__$1 = ((((!((map__34489 == null)))?((((map__34489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34489):map__34489);
var opts = map__34489__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34486){
var G__34487 = cljs.core.first.call(null,seq34486);
var seq34486__$1 = cljs.core.next.call(null,seq34486);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34487,seq34486__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args34494 = [];
var len__26545__auto___34544 = arguments.length;
var i__26546__auto___34545 = (0);
while(true){
if((i__26546__auto___34545 < len__26545__auto___34544)){
args34494.push((arguments[i__26546__auto___34545]));

var G__34546 = (i__26546__auto___34545 + (1));
i__26546__auto___34545 = G__34546;
continue;
} else {
}
break;
}

var G__34496 = args34494.length;
switch (G__34496) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34494.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34381__auto___34548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___34548){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___34548){
return (function (state_34520){
var state_val_34521 = (state_34520[(1)]);
if((state_val_34521 === (7))){
var inst_34516 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34522_34549 = state_34520__$1;
(statearr_34522_34549[(2)] = inst_34516);

(statearr_34522_34549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (1))){
var state_34520__$1 = state_34520;
var statearr_34523_34550 = state_34520__$1;
(statearr_34523_34550[(2)] = null);

(statearr_34523_34550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (4))){
var inst_34499 = (state_34520[(7)]);
var inst_34499__$1 = (state_34520[(2)]);
var inst_34500 = (inst_34499__$1 == null);
var state_34520__$1 = (function (){var statearr_34524 = state_34520;
(statearr_34524[(7)] = inst_34499__$1);

return statearr_34524;
})();
if(cljs.core.truth_(inst_34500)){
var statearr_34525_34551 = state_34520__$1;
(statearr_34525_34551[(1)] = (5));

} else {
var statearr_34526_34552 = state_34520__$1;
(statearr_34526_34552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (13))){
var state_34520__$1 = state_34520;
var statearr_34527_34553 = state_34520__$1;
(statearr_34527_34553[(2)] = null);

(statearr_34527_34553[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (6))){
var inst_34499 = (state_34520[(7)]);
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34520__$1,(11),to,inst_34499);
} else {
if((state_val_34521 === (3))){
var inst_34518 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34520__$1,inst_34518);
} else {
if((state_val_34521 === (12))){
var state_34520__$1 = state_34520;
var statearr_34528_34554 = state_34520__$1;
(statearr_34528_34554[(2)] = null);

(statearr_34528_34554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (2))){
var state_34520__$1 = state_34520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34520__$1,(4),from);
} else {
if((state_val_34521 === (11))){
var inst_34509 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
if(cljs.core.truth_(inst_34509)){
var statearr_34529_34555 = state_34520__$1;
(statearr_34529_34555[(1)] = (12));

} else {
var statearr_34530_34556 = state_34520__$1;
(statearr_34530_34556[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (9))){
var state_34520__$1 = state_34520;
var statearr_34531_34557 = state_34520__$1;
(statearr_34531_34557[(2)] = null);

(statearr_34531_34557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (5))){
var state_34520__$1 = state_34520;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34532_34558 = state_34520__$1;
(statearr_34532_34558[(1)] = (8));

} else {
var statearr_34533_34559 = state_34520__$1;
(statearr_34533_34559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (14))){
var inst_34514 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34534_34560 = state_34520__$1;
(statearr_34534_34560[(2)] = inst_34514);

(statearr_34534_34560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (10))){
var inst_34506 = (state_34520[(2)]);
var state_34520__$1 = state_34520;
var statearr_34535_34561 = state_34520__$1;
(statearr_34535_34561[(2)] = inst_34506);

(statearr_34535_34561[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34521 === (8))){
var inst_34503 = cljs.core.async.close_BANG_.call(null,to);
var state_34520__$1 = state_34520;
var statearr_34536_34562 = state_34520__$1;
(statearr_34536_34562[(2)] = inst_34503);

(statearr_34536_34562[(1)] = (10));


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
});})(c__34381__auto___34548))
;
return ((function (switch__34269__auto__,c__34381__auto___34548){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_34540 = [null,null,null,null,null,null,null,null];
(statearr_34540[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_34540[(1)] = (1));

return statearr_34540;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_34520){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_34520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e34541){if((e34541 instanceof Object)){
var ex__34273__auto__ = e34541;
var statearr_34542_34563 = state_34520;
(statearr_34542_34563[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34564 = state_34520;
state_34520 = G__34564;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_34520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_34520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___34548))
})();
var state__34383__auto__ = (function (){var statearr_34543 = f__34382__auto__.call(null);
(statearr_34543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___34548);

return statearr_34543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___34548))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34752){
var vec__34753 = p__34752;
var v = cljs.core.nth.call(null,vec__34753,(0),null);
var p = cljs.core.nth.call(null,vec__34753,(1),null);
var job = vec__34753;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34381__auto___34939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___34939,res,vec__34753,v,p,job,jobs,results){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___34939,res,vec__34753,v,p,job,jobs,results){
return (function (state_34760){
var state_val_34761 = (state_34760[(1)]);
if((state_val_34761 === (1))){
var state_34760__$1 = state_34760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34760__$1,(2),res,v);
} else {
if((state_val_34761 === (2))){
var inst_34757 = (state_34760[(2)]);
var inst_34758 = cljs.core.async.close_BANG_.call(null,res);
var state_34760__$1 = (function (){var statearr_34762 = state_34760;
(statearr_34762[(7)] = inst_34757);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34760__$1,inst_34758);
} else {
return null;
}
}
});})(c__34381__auto___34939,res,vec__34753,v,p,job,jobs,results))
;
return ((function (switch__34269__auto__,c__34381__auto___34939,res,vec__34753,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0 = (function (){
var statearr_34766 = [null,null,null,null,null,null,null,null];
(statearr_34766[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__);

(statearr_34766[(1)] = (1));

return statearr_34766;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1 = (function (state_34760){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_34760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e34767){if((e34767 instanceof Object)){
var ex__34273__auto__ = e34767;
var statearr_34768_34940 = state_34760;
(statearr_34768_34940[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34941 = state_34760;
state_34760 = G__34941;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = function(state_34760){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1.call(this,state_34760);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___34939,res,vec__34753,v,p,job,jobs,results))
})();
var state__34383__auto__ = (function (){var statearr_34769 = f__34382__auto__.call(null);
(statearr_34769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___34939);

return statearr_34769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___34939,res,vec__34753,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34770){
var vec__34771 = p__34770;
var v = cljs.core.nth.call(null,vec__34771,(0),null);
var p = cljs.core.nth.call(null,vec__34771,(1),null);
var job = vec__34771;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26355__auto___34942 = n;
var __34943 = (0);
while(true){
if((__34943 < n__26355__auto___34942)){
var G__34774_34944 = type;
var G__34774_34945__$1 = (((G__34774_34944 instanceof cljs.core.Keyword))?G__34774_34944.fqn:null);
switch (G__34774_34945__$1) {
case "compute":
var c__34381__auto___34947 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34943,c__34381__auto___34947,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (__34943,c__34381__auto___34947,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async){
return (function (state_34787){
var state_val_34788 = (state_34787[(1)]);
if((state_val_34788 === (1))){
var state_34787__$1 = state_34787;
var statearr_34789_34948 = state_34787__$1;
(statearr_34789_34948[(2)] = null);

(statearr_34789_34948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (2))){
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34787__$1,(4),jobs);
} else {
if((state_val_34788 === (3))){
var inst_34785 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34787__$1,inst_34785);
} else {
if((state_val_34788 === (4))){
var inst_34777 = (state_34787[(2)]);
var inst_34778 = process.call(null,inst_34777);
var state_34787__$1 = state_34787;
if(cljs.core.truth_(inst_34778)){
var statearr_34790_34949 = state_34787__$1;
(statearr_34790_34949[(1)] = (5));

} else {
var statearr_34791_34950 = state_34787__$1;
(statearr_34791_34950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (5))){
var state_34787__$1 = state_34787;
var statearr_34792_34951 = state_34787__$1;
(statearr_34792_34951[(2)] = null);

(statearr_34792_34951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (6))){
var state_34787__$1 = state_34787;
var statearr_34793_34952 = state_34787__$1;
(statearr_34793_34952[(2)] = null);

(statearr_34793_34952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34788 === (7))){
var inst_34783 = (state_34787[(2)]);
var state_34787__$1 = state_34787;
var statearr_34794_34953 = state_34787__$1;
(statearr_34794_34953[(2)] = inst_34783);

(statearr_34794_34953[(1)] = (3));


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
});})(__34943,c__34381__auto___34947,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async))
;
return ((function (__34943,switch__34269__auto__,c__34381__auto___34947,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0 = (function (){
var statearr_34798 = [null,null,null,null,null,null,null];
(statearr_34798[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__);

(statearr_34798[(1)] = (1));

return statearr_34798;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1 = (function (state_34787){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_34787);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e34799){if((e34799 instanceof Object)){
var ex__34273__auto__ = e34799;
var statearr_34800_34954 = state_34787;
(statearr_34800_34954[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34955 = state_34787;
state_34787 = G__34955;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = function(state_34787){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1.call(this,state_34787);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__;
})()
;})(__34943,switch__34269__auto__,c__34381__auto___34947,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async))
})();
var state__34383__auto__ = (function (){var statearr_34801 = f__34382__auto__.call(null);
(statearr_34801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___34947);

return statearr_34801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(__34943,c__34381__auto___34947,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async))
);


break;
case "async":
var c__34381__auto___34956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34943,c__34381__auto___34956,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (__34943,c__34381__auto___34956,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async){
return (function (state_34814){
var state_val_34815 = (state_34814[(1)]);
if((state_val_34815 === (1))){
var state_34814__$1 = state_34814;
var statearr_34816_34957 = state_34814__$1;
(statearr_34816_34957[(2)] = null);

(statearr_34816_34957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34815 === (2))){
var state_34814__$1 = state_34814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34814__$1,(4),jobs);
} else {
if((state_val_34815 === (3))){
var inst_34812 = (state_34814[(2)]);
var state_34814__$1 = state_34814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34814__$1,inst_34812);
} else {
if((state_val_34815 === (4))){
var inst_34804 = (state_34814[(2)]);
var inst_34805 = async.call(null,inst_34804);
var state_34814__$1 = state_34814;
if(cljs.core.truth_(inst_34805)){
var statearr_34817_34958 = state_34814__$1;
(statearr_34817_34958[(1)] = (5));

} else {
var statearr_34818_34959 = state_34814__$1;
(statearr_34818_34959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34815 === (5))){
var state_34814__$1 = state_34814;
var statearr_34819_34960 = state_34814__$1;
(statearr_34819_34960[(2)] = null);

(statearr_34819_34960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34815 === (6))){
var state_34814__$1 = state_34814;
var statearr_34820_34961 = state_34814__$1;
(statearr_34820_34961[(2)] = null);

(statearr_34820_34961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34815 === (7))){
var inst_34810 = (state_34814[(2)]);
var state_34814__$1 = state_34814;
var statearr_34821_34962 = state_34814__$1;
(statearr_34821_34962[(2)] = inst_34810);

(statearr_34821_34962[(1)] = (3));


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
});})(__34943,c__34381__auto___34956,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async))
;
return ((function (__34943,switch__34269__auto__,c__34381__auto___34956,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0 = (function (){
var statearr_34825 = [null,null,null,null,null,null,null];
(statearr_34825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__);

(statearr_34825[(1)] = (1));

return statearr_34825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1 = (function (state_34814){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_34814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e34826){if((e34826 instanceof Object)){
var ex__34273__auto__ = e34826;
var statearr_34827_34963 = state_34814;
(statearr_34827_34963[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34964 = state_34814;
state_34814 = G__34964;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = function(state_34814){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1.call(this,state_34814);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__;
})()
;})(__34943,switch__34269__auto__,c__34381__auto___34956,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async))
})();
var state__34383__auto__ = (function (){var statearr_34828 = f__34382__auto__.call(null);
(statearr_34828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___34956);

return statearr_34828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(__34943,c__34381__auto___34956,G__34774_34944,G__34774_34945__$1,n__26355__auto___34942,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34774_34945__$1)].join('')));

}

var G__34965 = (__34943 + (1));
__34943 = G__34965;
continue;
} else {
}
break;
}

var c__34381__auto___34966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___34966,jobs,results,process,async){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___34966,jobs,results,process,async){
return (function (state_34850){
var state_val_34851 = (state_34850[(1)]);
if((state_val_34851 === (1))){
var state_34850__$1 = state_34850;
var statearr_34852_34967 = state_34850__$1;
(statearr_34852_34967[(2)] = null);

(statearr_34852_34967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (2))){
var state_34850__$1 = state_34850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34850__$1,(4),from);
} else {
if((state_val_34851 === (3))){
var inst_34848 = (state_34850[(2)]);
var state_34850__$1 = state_34850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34850__$1,inst_34848);
} else {
if((state_val_34851 === (4))){
var inst_34831 = (state_34850[(7)]);
var inst_34831__$1 = (state_34850[(2)]);
var inst_34832 = (inst_34831__$1 == null);
var state_34850__$1 = (function (){var statearr_34853 = state_34850;
(statearr_34853[(7)] = inst_34831__$1);

return statearr_34853;
})();
if(cljs.core.truth_(inst_34832)){
var statearr_34854_34968 = state_34850__$1;
(statearr_34854_34968[(1)] = (5));

} else {
var statearr_34855_34969 = state_34850__$1;
(statearr_34855_34969[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (5))){
var inst_34834 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34850__$1 = state_34850;
var statearr_34856_34970 = state_34850__$1;
(statearr_34856_34970[(2)] = inst_34834);

(statearr_34856_34970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (6))){
var inst_34831 = (state_34850[(7)]);
var inst_34836 = (state_34850[(8)]);
var inst_34836__$1 = cljs.core.async.chan.call(null,(1));
var inst_34837 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34838 = [inst_34831,inst_34836__$1];
var inst_34839 = (new cljs.core.PersistentVector(null,2,(5),inst_34837,inst_34838,null));
var state_34850__$1 = (function (){var statearr_34857 = state_34850;
(statearr_34857[(8)] = inst_34836__$1);

return statearr_34857;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34850__$1,(8),jobs,inst_34839);
} else {
if((state_val_34851 === (7))){
var inst_34846 = (state_34850[(2)]);
var state_34850__$1 = state_34850;
var statearr_34858_34971 = state_34850__$1;
(statearr_34858_34971[(2)] = inst_34846);

(statearr_34858_34971[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34851 === (8))){
var inst_34836 = (state_34850[(8)]);
var inst_34841 = (state_34850[(2)]);
var state_34850__$1 = (function (){var statearr_34859 = state_34850;
(statearr_34859[(9)] = inst_34841);

return statearr_34859;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34850__$1,(9),results,inst_34836);
} else {
if((state_val_34851 === (9))){
var inst_34843 = (state_34850[(2)]);
var state_34850__$1 = (function (){var statearr_34860 = state_34850;
(statearr_34860[(10)] = inst_34843);

return statearr_34860;
})();
var statearr_34861_34972 = state_34850__$1;
(statearr_34861_34972[(2)] = null);

(statearr_34861_34972[(1)] = (2));


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
});})(c__34381__auto___34966,jobs,results,process,async))
;
return ((function (switch__34269__auto__,c__34381__auto___34966,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0 = (function (){
var statearr_34865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__);

(statearr_34865[(1)] = (1));

return statearr_34865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1 = (function (state_34850){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_34850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e34866){if((e34866 instanceof Object)){
var ex__34273__auto__ = e34866;
var statearr_34867_34973 = state_34850;
(statearr_34867_34973[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34974 = state_34850;
state_34850 = G__34974;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = function(state_34850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1.call(this,state_34850);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___34966,jobs,results,process,async))
})();
var state__34383__auto__ = (function (){var statearr_34868 = f__34382__auto__.call(null);
(statearr_34868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___34966);

return statearr_34868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___34966,jobs,results,process,async))
);


var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__,jobs,results,process,async){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__,jobs,results,process,async){
return (function (state_34906){
var state_val_34907 = (state_34906[(1)]);
if((state_val_34907 === (7))){
var inst_34902 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_34908_34975 = state_34906__$1;
(statearr_34908_34975[(2)] = inst_34902);

(statearr_34908_34975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (20))){
var state_34906__$1 = state_34906;
var statearr_34909_34976 = state_34906__$1;
(statearr_34909_34976[(2)] = null);

(statearr_34909_34976[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (1))){
var state_34906__$1 = state_34906;
var statearr_34910_34977 = state_34906__$1;
(statearr_34910_34977[(2)] = null);

(statearr_34910_34977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (4))){
var inst_34871 = (state_34906[(7)]);
var inst_34871__$1 = (state_34906[(2)]);
var inst_34872 = (inst_34871__$1 == null);
var state_34906__$1 = (function (){var statearr_34911 = state_34906;
(statearr_34911[(7)] = inst_34871__$1);

return statearr_34911;
})();
if(cljs.core.truth_(inst_34872)){
var statearr_34912_34978 = state_34906__$1;
(statearr_34912_34978[(1)] = (5));

} else {
var statearr_34913_34979 = state_34906__$1;
(statearr_34913_34979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (15))){
var inst_34884 = (state_34906[(8)]);
var state_34906__$1 = state_34906;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34906__$1,(18),to,inst_34884);
} else {
if((state_val_34907 === (21))){
var inst_34897 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_34914_34980 = state_34906__$1;
(statearr_34914_34980[(2)] = inst_34897);

(statearr_34914_34980[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (13))){
var inst_34899 = (state_34906[(2)]);
var state_34906__$1 = (function (){var statearr_34915 = state_34906;
(statearr_34915[(9)] = inst_34899);

return statearr_34915;
})();
var statearr_34916_34981 = state_34906__$1;
(statearr_34916_34981[(2)] = null);

(statearr_34916_34981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (6))){
var inst_34871 = (state_34906[(7)]);
var state_34906__$1 = state_34906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34906__$1,(11),inst_34871);
} else {
if((state_val_34907 === (17))){
var inst_34892 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
if(cljs.core.truth_(inst_34892)){
var statearr_34917_34982 = state_34906__$1;
(statearr_34917_34982[(1)] = (19));

} else {
var statearr_34918_34983 = state_34906__$1;
(statearr_34918_34983[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (3))){
var inst_34904 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34906__$1,inst_34904);
} else {
if((state_val_34907 === (12))){
var inst_34881 = (state_34906[(10)]);
var state_34906__$1 = state_34906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34906__$1,(14),inst_34881);
} else {
if((state_val_34907 === (2))){
var state_34906__$1 = state_34906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34906__$1,(4),results);
} else {
if((state_val_34907 === (19))){
var state_34906__$1 = state_34906;
var statearr_34919_34984 = state_34906__$1;
(statearr_34919_34984[(2)] = null);

(statearr_34919_34984[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (11))){
var inst_34881 = (state_34906[(2)]);
var state_34906__$1 = (function (){var statearr_34920 = state_34906;
(statearr_34920[(10)] = inst_34881);

return statearr_34920;
})();
var statearr_34921_34985 = state_34906__$1;
(statearr_34921_34985[(2)] = null);

(statearr_34921_34985[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (9))){
var state_34906__$1 = state_34906;
var statearr_34922_34986 = state_34906__$1;
(statearr_34922_34986[(2)] = null);

(statearr_34922_34986[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (5))){
var state_34906__$1 = state_34906;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34923_34987 = state_34906__$1;
(statearr_34923_34987[(1)] = (8));

} else {
var statearr_34924_34988 = state_34906__$1;
(statearr_34924_34988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (14))){
var inst_34886 = (state_34906[(11)]);
var inst_34884 = (state_34906[(8)]);
var inst_34884__$1 = (state_34906[(2)]);
var inst_34885 = (inst_34884__$1 == null);
var inst_34886__$1 = cljs.core.not.call(null,inst_34885);
var state_34906__$1 = (function (){var statearr_34925 = state_34906;
(statearr_34925[(11)] = inst_34886__$1);

(statearr_34925[(8)] = inst_34884__$1);

return statearr_34925;
})();
if(inst_34886__$1){
var statearr_34926_34989 = state_34906__$1;
(statearr_34926_34989[(1)] = (15));

} else {
var statearr_34927_34990 = state_34906__$1;
(statearr_34927_34990[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (16))){
var inst_34886 = (state_34906[(11)]);
var state_34906__$1 = state_34906;
var statearr_34928_34991 = state_34906__$1;
(statearr_34928_34991[(2)] = inst_34886);

(statearr_34928_34991[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (10))){
var inst_34878 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_34929_34992 = state_34906__$1;
(statearr_34929_34992[(2)] = inst_34878);

(statearr_34929_34992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (18))){
var inst_34889 = (state_34906[(2)]);
var state_34906__$1 = state_34906;
var statearr_34930_34993 = state_34906__$1;
(statearr_34930_34993[(2)] = inst_34889);

(statearr_34930_34993[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34907 === (8))){
var inst_34875 = cljs.core.async.close_BANG_.call(null,to);
var state_34906__$1 = state_34906;
var statearr_34931_34994 = state_34906__$1;
(statearr_34931_34994[(2)] = inst_34875);

(statearr_34931_34994[(1)] = (10));


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
});})(c__34381__auto__,jobs,results,process,async))
;
return ((function (switch__34269__auto__,c__34381__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0 = (function (){
var statearr_34935 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__);

(statearr_34935[(1)] = (1));

return statearr_34935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1 = (function (state_34906){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_34906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e34936){if((e34936 instanceof Object)){
var ex__34273__auto__ = e34936;
var statearr_34937_34995 = state_34906;
(statearr_34937_34995[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34996 = state_34906;
state_34906 = G__34996;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__ = function(state_34906){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1.call(this,state_34906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34270__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__,jobs,results,process,async))
})();
var state__34383__auto__ = (function (){var statearr_34938 = f__34382__auto__.call(null);
(statearr_34938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_34938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__,jobs,results,process,async))
);

return c__34381__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args34997 = [];
var len__26545__auto___35000 = arguments.length;
var i__26546__auto___35001 = (0);
while(true){
if((i__26546__auto___35001 < len__26545__auto___35000)){
args34997.push((arguments[i__26546__auto___35001]));

var G__35002 = (i__26546__auto___35001 + (1));
i__26546__auto___35001 = G__35002;
continue;
} else {
}
break;
}

var G__34999 = args34997.length;
switch (G__34999) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args34997.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args35004 = [];
var len__26545__auto___35007 = arguments.length;
var i__26546__auto___35008 = (0);
while(true){
if((i__26546__auto___35008 < len__26545__auto___35007)){
args35004.push((arguments[i__26546__auto___35008]));

var G__35009 = (i__26546__auto___35008 + (1));
i__26546__auto___35008 = G__35009;
continue;
} else {
}
break;
}

var G__35006 = args35004.length;
switch (G__35006) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35004.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args35011 = [];
var len__26545__auto___35064 = arguments.length;
var i__26546__auto___35065 = (0);
while(true){
if((i__26546__auto___35065 < len__26545__auto___35064)){
args35011.push((arguments[i__26546__auto___35065]));

var G__35066 = (i__26546__auto___35065 + (1));
i__26546__auto___35065 = G__35066;
continue;
} else {
}
break;
}

var G__35013 = args35011.length;
switch (G__35013) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35011.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34381__auto___35068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___35068,tc,fc){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___35068,tc,fc){
return (function (state_35039){
var state_val_35040 = (state_35039[(1)]);
if((state_val_35040 === (7))){
var inst_35035 = (state_35039[(2)]);
var state_35039__$1 = state_35039;
var statearr_35041_35069 = state_35039__$1;
(statearr_35041_35069[(2)] = inst_35035);

(statearr_35041_35069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (1))){
var state_35039__$1 = state_35039;
var statearr_35042_35070 = state_35039__$1;
(statearr_35042_35070[(2)] = null);

(statearr_35042_35070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (4))){
var inst_35016 = (state_35039[(7)]);
var inst_35016__$1 = (state_35039[(2)]);
var inst_35017 = (inst_35016__$1 == null);
var state_35039__$1 = (function (){var statearr_35043 = state_35039;
(statearr_35043[(7)] = inst_35016__$1);

return statearr_35043;
})();
if(cljs.core.truth_(inst_35017)){
var statearr_35044_35071 = state_35039__$1;
(statearr_35044_35071[(1)] = (5));

} else {
var statearr_35045_35072 = state_35039__$1;
(statearr_35045_35072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (13))){
var state_35039__$1 = state_35039;
var statearr_35046_35073 = state_35039__$1;
(statearr_35046_35073[(2)] = null);

(statearr_35046_35073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (6))){
var inst_35016 = (state_35039[(7)]);
var inst_35022 = p.call(null,inst_35016);
var state_35039__$1 = state_35039;
if(cljs.core.truth_(inst_35022)){
var statearr_35047_35074 = state_35039__$1;
(statearr_35047_35074[(1)] = (9));

} else {
var statearr_35048_35075 = state_35039__$1;
(statearr_35048_35075[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (3))){
var inst_35037 = (state_35039[(2)]);
var state_35039__$1 = state_35039;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35039__$1,inst_35037);
} else {
if((state_val_35040 === (12))){
var state_35039__$1 = state_35039;
var statearr_35049_35076 = state_35039__$1;
(statearr_35049_35076[(2)] = null);

(statearr_35049_35076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (2))){
var state_35039__$1 = state_35039;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35039__$1,(4),ch);
} else {
if((state_val_35040 === (11))){
var inst_35016 = (state_35039[(7)]);
var inst_35026 = (state_35039[(2)]);
var state_35039__$1 = state_35039;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35039__$1,(8),inst_35026,inst_35016);
} else {
if((state_val_35040 === (9))){
var state_35039__$1 = state_35039;
var statearr_35050_35077 = state_35039__$1;
(statearr_35050_35077[(2)] = tc);

(statearr_35050_35077[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (5))){
var inst_35019 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35020 = cljs.core.async.close_BANG_.call(null,fc);
var state_35039__$1 = (function (){var statearr_35051 = state_35039;
(statearr_35051[(8)] = inst_35019);

return statearr_35051;
})();
var statearr_35052_35078 = state_35039__$1;
(statearr_35052_35078[(2)] = inst_35020);

(statearr_35052_35078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (14))){
var inst_35033 = (state_35039[(2)]);
var state_35039__$1 = state_35039;
var statearr_35053_35079 = state_35039__$1;
(statearr_35053_35079[(2)] = inst_35033);

(statearr_35053_35079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (10))){
var state_35039__$1 = state_35039;
var statearr_35054_35080 = state_35039__$1;
(statearr_35054_35080[(2)] = fc);

(statearr_35054_35080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35040 === (8))){
var inst_35028 = (state_35039[(2)]);
var state_35039__$1 = state_35039;
if(cljs.core.truth_(inst_35028)){
var statearr_35055_35081 = state_35039__$1;
(statearr_35055_35081[(1)] = (12));

} else {
var statearr_35056_35082 = state_35039__$1;
(statearr_35056_35082[(1)] = (13));

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
});})(c__34381__auto___35068,tc,fc))
;
return ((function (switch__34269__auto__,c__34381__auto___35068,tc,fc){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_35060 = [null,null,null,null,null,null,null,null,null];
(statearr_35060[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_35060[(1)] = (1));

return statearr_35060;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_35039){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_35039);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e35061){if((e35061 instanceof Object)){
var ex__34273__auto__ = e35061;
var statearr_35062_35083 = state_35039;
(statearr_35062_35083[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35039);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35084 = state_35039;
state_35039 = G__35084;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_35039){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_35039);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___35068,tc,fc))
})();
var state__34383__auto__ = (function (){var statearr_35063 = f__34382__auto__.call(null);
(statearr_35063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___35068);

return statearr_35063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___35068,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__){
return (function (state_35148){
var state_val_35149 = (state_35148[(1)]);
if((state_val_35149 === (7))){
var inst_35144 = (state_35148[(2)]);
var state_35148__$1 = state_35148;
var statearr_35150_35171 = state_35148__$1;
(statearr_35150_35171[(2)] = inst_35144);

(statearr_35150_35171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (1))){
var inst_35128 = init;
var state_35148__$1 = (function (){var statearr_35151 = state_35148;
(statearr_35151[(7)] = inst_35128);

return statearr_35151;
})();
var statearr_35152_35172 = state_35148__$1;
(statearr_35152_35172[(2)] = null);

(statearr_35152_35172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (4))){
var inst_35131 = (state_35148[(8)]);
var inst_35131__$1 = (state_35148[(2)]);
var inst_35132 = (inst_35131__$1 == null);
var state_35148__$1 = (function (){var statearr_35153 = state_35148;
(statearr_35153[(8)] = inst_35131__$1);

return statearr_35153;
})();
if(cljs.core.truth_(inst_35132)){
var statearr_35154_35173 = state_35148__$1;
(statearr_35154_35173[(1)] = (5));

} else {
var statearr_35155_35174 = state_35148__$1;
(statearr_35155_35174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (6))){
var inst_35131 = (state_35148[(8)]);
var inst_35135 = (state_35148[(9)]);
var inst_35128 = (state_35148[(7)]);
var inst_35135__$1 = f.call(null,inst_35128,inst_35131);
var inst_35136 = cljs.core.reduced_QMARK_.call(null,inst_35135__$1);
var state_35148__$1 = (function (){var statearr_35156 = state_35148;
(statearr_35156[(9)] = inst_35135__$1);

return statearr_35156;
})();
if(inst_35136){
var statearr_35157_35175 = state_35148__$1;
(statearr_35157_35175[(1)] = (8));

} else {
var statearr_35158_35176 = state_35148__$1;
(statearr_35158_35176[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (3))){
var inst_35146 = (state_35148[(2)]);
var state_35148__$1 = state_35148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35148__$1,inst_35146);
} else {
if((state_val_35149 === (2))){
var state_35148__$1 = state_35148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35148__$1,(4),ch);
} else {
if((state_val_35149 === (9))){
var inst_35135 = (state_35148[(9)]);
var inst_35128 = inst_35135;
var state_35148__$1 = (function (){var statearr_35159 = state_35148;
(statearr_35159[(7)] = inst_35128);

return statearr_35159;
})();
var statearr_35160_35177 = state_35148__$1;
(statearr_35160_35177[(2)] = null);

(statearr_35160_35177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (5))){
var inst_35128 = (state_35148[(7)]);
var state_35148__$1 = state_35148;
var statearr_35161_35178 = state_35148__$1;
(statearr_35161_35178[(2)] = inst_35128);

(statearr_35161_35178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (10))){
var inst_35142 = (state_35148[(2)]);
var state_35148__$1 = state_35148;
var statearr_35162_35179 = state_35148__$1;
(statearr_35162_35179[(2)] = inst_35142);

(statearr_35162_35179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35149 === (8))){
var inst_35135 = (state_35148[(9)]);
var inst_35138 = cljs.core.deref.call(null,inst_35135);
var state_35148__$1 = state_35148;
var statearr_35163_35180 = state_35148__$1;
(statearr_35163_35180[(2)] = inst_35138);

(statearr_35163_35180[(1)] = (10));


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
});})(c__34381__auto__))
;
return ((function (switch__34269__auto__,c__34381__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34270__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34270__auto____0 = (function (){
var statearr_35167 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35167[(0)] = cljs$core$async$reduce_$_state_machine__34270__auto__);

(statearr_35167[(1)] = (1));

return statearr_35167;
});
var cljs$core$async$reduce_$_state_machine__34270__auto____1 = (function (state_35148){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_35148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e35168){if((e35168 instanceof Object)){
var ex__34273__auto__ = e35168;
var statearr_35169_35181 = state_35148;
(statearr_35169_35181[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35182 = state_35148;
state_35148 = G__35182;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34270__auto__ = function(state_35148){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34270__auto____1.call(this,state_35148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34270__auto____0;
cljs$core$async$reduce_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34270__auto____1;
return cljs$core$async$reduce_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__))
})();
var state__34383__auto__ = (function (){var statearr_35170 = f__34382__auto__.call(null);
(statearr_35170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_35170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__))
);

return c__34381__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args35183 = [];
var len__26545__auto___35235 = arguments.length;
var i__26546__auto___35236 = (0);
while(true){
if((i__26546__auto___35236 < len__26545__auto___35235)){
args35183.push((arguments[i__26546__auto___35236]));

var G__35237 = (i__26546__auto___35236 + (1));
i__26546__auto___35236 = G__35237;
continue;
} else {
}
break;
}

var G__35185 = args35183.length;
switch (G__35185) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35183.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__){
return (function (state_35210){
var state_val_35211 = (state_35210[(1)]);
if((state_val_35211 === (7))){
var inst_35192 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35212_35239 = state_35210__$1;
(statearr_35212_35239[(2)] = inst_35192);

(statearr_35212_35239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (1))){
var inst_35186 = cljs.core.seq.call(null,coll);
var inst_35187 = inst_35186;
var state_35210__$1 = (function (){var statearr_35213 = state_35210;
(statearr_35213[(7)] = inst_35187);

return statearr_35213;
})();
var statearr_35214_35240 = state_35210__$1;
(statearr_35214_35240[(2)] = null);

(statearr_35214_35240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (4))){
var inst_35187 = (state_35210[(7)]);
var inst_35190 = cljs.core.first.call(null,inst_35187);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35210__$1,(7),ch,inst_35190);
} else {
if((state_val_35211 === (13))){
var inst_35204 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35215_35241 = state_35210__$1;
(statearr_35215_35241[(2)] = inst_35204);

(statearr_35215_35241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (6))){
var inst_35195 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35195)){
var statearr_35216_35242 = state_35210__$1;
(statearr_35216_35242[(1)] = (8));

} else {
var statearr_35217_35243 = state_35210__$1;
(statearr_35217_35243[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (3))){
var inst_35208 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35210__$1,inst_35208);
} else {
if((state_val_35211 === (12))){
var state_35210__$1 = state_35210;
var statearr_35218_35244 = state_35210__$1;
(statearr_35218_35244[(2)] = null);

(statearr_35218_35244[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (2))){
var inst_35187 = (state_35210[(7)]);
var state_35210__$1 = state_35210;
if(cljs.core.truth_(inst_35187)){
var statearr_35219_35245 = state_35210__$1;
(statearr_35219_35245[(1)] = (4));

} else {
var statearr_35220_35246 = state_35210__$1;
(statearr_35220_35246[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (11))){
var inst_35201 = cljs.core.async.close_BANG_.call(null,ch);
var state_35210__$1 = state_35210;
var statearr_35221_35247 = state_35210__$1;
(statearr_35221_35247[(2)] = inst_35201);

(statearr_35221_35247[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (9))){
var state_35210__$1 = state_35210;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35222_35248 = state_35210__$1;
(statearr_35222_35248[(1)] = (11));

} else {
var statearr_35223_35249 = state_35210__$1;
(statearr_35223_35249[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (5))){
var inst_35187 = (state_35210[(7)]);
var state_35210__$1 = state_35210;
var statearr_35224_35250 = state_35210__$1;
(statearr_35224_35250[(2)] = inst_35187);

(statearr_35224_35250[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (10))){
var inst_35206 = (state_35210[(2)]);
var state_35210__$1 = state_35210;
var statearr_35225_35251 = state_35210__$1;
(statearr_35225_35251[(2)] = inst_35206);

(statearr_35225_35251[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35211 === (8))){
var inst_35187 = (state_35210[(7)]);
var inst_35197 = cljs.core.next.call(null,inst_35187);
var inst_35187__$1 = inst_35197;
var state_35210__$1 = (function (){var statearr_35226 = state_35210;
(statearr_35226[(7)] = inst_35187__$1);

return statearr_35226;
})();
var statearr_35227_35252 = state_35210__$1;
(statearr_35227_35252[(2)] = null);

(statearr_35227_35252[(1)] = (2));


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
});})(c__34381__auto__))
;
return ((function (switch__34269__auto__,c__34381__auto__){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_35231 = [null,null,null,null,null,null,null,null];
(statearr_35231[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_35231[(1)] = (1));

return statearr_35231;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_35210){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_35210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e35232){if((e35232 instanceof Object)){
var ex__34273__auto__ = e35232;
var statearr_35233_35253 = state_35210;
(statearr_35233_35253[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35254 = state_35210;
state_35210 = G__35254;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_35210){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_35210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__))
})();
var state__34383__auto__ = (function (){var statearr_35234 = f__34382__auto__.call(null);
(statearr_35234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_35234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__))
);

return c__34381__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26100__auto__ = (((_ == null))?null:_);
var m__26101__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,_);
} else {
var m__26101__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26100__auto__ = (((m == null))?null:m);
var m__26101__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26101__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26100__auto__ = (((m == null))?null:m);
var m__26101__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,m,ch);
} else {
var m__26101__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26100__auto__ = (((m == null))?null:m);
var m__26101__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,m);
} else {
var m__26101__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35480 = (function (ch,cs,meta35481){
this.ch = ch;
this.cs = cs;
this.meta35481 = meta35481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35482,meta35481__$1){
var self__ = this;
var _35482__$1 = this;
return (new cljs.core.async.t_cljs$core$async35480(self__.ch,self__.cs,meta35481__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35482){
var self__ = this;
var _35482__$1 = this;
return self__.meta35481;
});})(cs))
;

cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35480.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35480.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35481","meta35481",1072846353,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35480";

cljs.core.async.t_cljs$core$async35480.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async35480");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async35480 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35480(ch__$1,cs__$1,meta35481){
return (new cljs.core.async.t_cljs$core$async35480(ch__$1,cs__$1,meta35481));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35480(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34381__auto___35705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___35705,cs,m,dchan,dctr,done){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___35705,cs,m,dchan,dctr,done){
return (function (state_35617){
var state_val_35618 = (state_35617[(1)]);
if((state_val_35618 === (7))){
var inst_35613 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35619_35706 = state_35617__$1;
(statearr_35619_35706[(2)] = inst_35613);

(statearr_35619_35706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (20))){
var inst_35516 = (state_35617[(7)]);
var inst_35528 = cljs.core.first.call(null,inst_35516);
var inst_35529 = cljs.core.nth.call(null,inst_35528,(0),null);
var inst_35530 = cljs.core.nth.call(null,inst_35528,(1),null);
var state_35617__$1 = (function (){var statearr_35620 = state_35617;
(statearr_35620[(8)] = inst_35529);

return statearr_35620;
})();
if(cljs.core.truth_(inst_35530)){
var statearr_35621_35707 = state_35617__$1;
(statearr_35621_35707[(1)] = (22));

} else {
var statearr_35622_35708 = state_35617__$1;
(statearr_35622_35708[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (27))){
var inst_35558 = (state_35617[(9)]);
var inst_35485 = (state_35617[(10)]);
var inst_35560 = (state_35617[(11)]);
var inst_35565 = (state_35617[(12)]);
var inst_35565__$1 = cljs.core._nth.call(null,inst_35558,inst_35560);
var inst_35566 = cljs.core.async.put_BANG_.call(null,inst_35565__$1,inst_35485,done);
var state_35617__$1 = (function (){var statearr_35623 = state_35617;
(statearr_35623[(12)] = inst_35565__$1);

return statearr_35623;
})();
if(cljs.core.truth_(inst_35566)){
var statearr_35624_35709 = state_35617__$1;
(statearr_35624_35709[(1)] = (30));

} else {
var statearr_35625_35710 = state_35617__$1;
(statearr_35625_35710[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (1))){
var state_35617__$1 = state_35617;
var statearr_35626_35711 = state_35617__$1;
(statearr_35626_35711[(2)] = null);

(statearr_35626_35711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (24))){
var inst_35516 = (state_35617[(7)]);
var inst_35535 = (state_35617[(2)]);
var inst_35536 = cljs.core.next.call(null,inst_35516);
var inst_35494 = inst_35536;
var inst_35495 = null;
var inst_35496 = (0);
var inst_35497 = (0);
var state_35617__$1 = (function (){var statearr_35627 = state_35617;
(statearr_35627[(13)] = inst_35495);

(statearr_35627[(14)] = inst_35535);

(statearr_35627[(15)] = inst_35496);

(statearr_35627[(16)] = inst_35494);

(statearr_35627[(17)] = inst_35497);

return statearr_35627;
})();
var statearr_35628_35712 = state_35617__$1;
(statearr_35628_35712[(2)] = null);

(statearr_35628_35712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (39))){
var state_35617__$1 = state_35617;
var statearr_35632_35713 = state_35617__$1;
(statearr_35632_35713[(2)] = null);

(statearr_35632_35713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (4))){
var inst_35485 = (state_35617[(10)]);
var inst_35485__$1 = (state_35617[(2)]);
var inst_35486 = (inst_35485__$1 == null);
var state_35617__$1 = (function (){var statearr_35633 = state_35617;
(statearr_35633[(10)] = inst_35485__$1);

return statearr_35633;
})();
if(cljs.core.truth_(inst_35486)){
var statearr_35634_35714 = state_35617__$1;
(statearr_35634_35714[(1)] = (5));

} else {
var statearr_35635_35715 = state_35617__$1;
(statearr_35635_35715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (15))){
var inst_35495 = (state_35617[(13)]);
var inst_35496 = (state_35617[(15)]);
var inst_35494 = (state_35617[(16)]);
var inst_35497 = (state_35617[(17)]);
var inst_35512 = (state_35617[(2)]);
var inst_35513 = (inst_35497 + (1));
var tmp35629 = inst_35495;
var tmp35630 = inst_35496;
var tmp35631 = inst_35494;
var inst_35494__$1 = tmp35631;
var inst_35495__$1 = tmp35629;
var inst_35496__$1 = tmp35630;
var inst_35497__$1 = inst_35513;
var state_35617__$1 = (function (){var statearr_35636 = state_35617;
(statearr_35636[(13)] = inst_35495__$1);

(statearr_35636[(18)] = inst_35512);

(statearr_35636[(15)] = inst_35496__$1);

(statearr_35636[(16)] = inst_35494__$1);

(statearr_35636[(17)] = inst_35497__$1);

return statearr_35636;
})();
var statearr_35637_35716 = state_35617__$1;
(statearr_35637_35716[(2)] = null);

(statearr_35637_35716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (21))){
var inst_35539 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35641_35717 = state_35617__$1;
(statearr_35641_35717[(2)] = inst_35539);

(statearr_35641_35717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (31))){
var inst_35565 = (state_35617[(12)]);
var inst_35569 = done.call(null,null);
var inst_35570 = cljs.core.async.untap_STAR_.call(null,m,inst_35565);
var state_35617__$1 = (function (){var statearr_35642 = state_35617;
(statearr_35642[(19)] = inst_35569);

return statearr_35642;
})();
var statearr_35643_35718 = state_35617__$1;
(statearr_35643_35718[(2)] = inst_35570);

(statearr_35643_35718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (32))){
var inst_35559 = (state_35617[(20)]);
var inst_35557 = (state_35617[(21)]);
var inst_35558 = (state_35617[(9)]);
var inst_35560 = (state_35617[(11)]);
var inst_35572 = (state_35617[(2)]);
var inst_35573 = (inst_35560 + (1));
var tmp35638 = inst_35559;
var tmp35639 = inst_35557;
var tmp35640 = inst_35558;
var inst_35557__$1 = tmp35639;
var inst_35558__$1 = tmp35640;
var inst_35559__$1 = tmp35638;
var inst_35560__$1 = inst_35573;
var state_35617__$1 = (function (){var statearr_35644 = state_35617;
(statearr_35644[(20)] = inst_35559__$1);

(statearr_35644[(21)] = inst_35557__$1);

(statearr_35644[(22)] = inst_35572);

(statearr_35644[(9)] = inst_35558__$1);

(statearr_35644[(11)] = inst_35560__$1);

return statearr_35644;
})();
var statearr_35645_35719 = state_35617__$1;
(statearr_35645_35719[(2)] = null);

(statearr_35645_35719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (40))){
var inst_35585 = (state_35617[(23)]);
var inst_35589 = done.call(null,null);
var inst_35590 = cljs.core.async.untap_STAR_.call(null,m,inst_35585);
var state_35617__$1 = (function (){var statearr_35646 = state_35617;
(statearr_35646[(24)] = inst_35589);

return statearr_35646;
})();
var statearr_35647_35720 = state_35617__$1;
(statearr_35647_35720[(2)] = inst_35590);

(statearr_35647_35720[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (33))){
var inst_35576 = (state_35617[(25)]);
var inst_35578 = cljs.core.chunked_seq_QMARK_.call(null,inst_35576);
var state_35617__$1 = state_35617;
if(inst_35578){
var statearr_35648_35721 = state_35617__$1;
(statearr_35648_35721[(1)] = (36));

} else {
var statearr_35649_35722 = state_35617__$1;
(statearr_35649_35722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (13))){
var inst_35506 = (state_35617[(26)]);
var inst_35509 = cljs.core.async.close_BANG_.call(null,inst_35506);
var state_35617__$1 = state_35617;
var statearr_35650_35723 = state_35617__$1;
(statearr_35650_35723[(2)] = inst_35509);

(statearr_35650_35723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (22))){
var inst_35529 = (state_35617[(8)]);
var inst_35532 = cljs.core.async.close_BANG_.call(null,inst_35529);
var state_35617__$1 = state_35617;
var statearr_35651_35724 = state_35617__$1;
(statearr_35651_35724[(2)] = inst_35532);

(statearr_35651_35724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (36))){
var inst_35576 = (state_35617[(25)]);
var inst_35580 = cljs.core.chunk_first.call(null,inst_35576);
var inst_35581 = cljs.core.chunk_rest.call(null,inst_35576);
var inst_35582 = cljs.core.count.call(null,inst_35580);
var inst_35557 = inst_35581;
var inst_35558 = inst_35580;
var inst_35559 = inst_35582;
var inst_35560 = (0);
var state_35617__$1 = (function (){var statearr_35652 = state_35617;
(statearr_35652[(20)] = inst_35559);

(statearr_35652[(21)] = inst_35557);

(statearr_35652[(9)] = inst_35558);

(statearr_35652[(11)] = inst_35560);

return statearr_35652;
})();
var statearr_35653_35725 = state_35617__$1;
(statearr_35653_35725[(2)] = null);

(statearr_35653_35725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (41))){
var inst_35576 = (state_35617[(25)]);
var inst_35592 = (state_35617[(2)]);
var inst_35593 = cljs.core.next.call(null,inst_35576);
var inst_35557 = inst_35593;
var inst_35558 = null;
var inst_35559 = (0);
var inst_35560 = (0);
var state_35617__$1 = (function (){var statearr_35654 = state_35617;
(statearr_35654[(20)] = inst_35559);

(statearr_35654[(21)] = inst_35557);

(statearr_35654[(27)] = inst_35592);

(statearr_35654[(9)] = inst_35558);

(statearr_35654[(11)] = inst_35560);

return statearr_35654;
})();
var statearr_35655_35726 = state_35617__$1;
(statearr_35655_35726[(2)] = null);

(statearr_35655_35726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (43))){
var state_35617__$1 = state_35617;
var statearr_35656_35727 = state_35617__$1;
(statearr_35656_35727[(2)] = null);

(statearr_35656_35727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (29))){
var inst_35601 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35657_35728 = state_35617__$1;
(statearr_35657_35728[(2)] = inst_35601);

(statearr_35657_35728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (44))){
var inst_35610 = (state_35617[(2)]);
var state_35617__$1 = (function (){var statearr_35658 = state_35617;
(statearr_35658[(28)] = inst_35610);

return statearr_35658;
})();
var statearr_35659_35729 = state_35617__$1;
(statearr_35659_35729[(2)] = null);

(statearr_35659_35729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (6))){
var inst_35549 = (state_35617[(29)]);
var inst_35548 = cljs.core.deref.call(null,cs);
var inst_35549__$1 = cljs.core.keys.call(null,inst_35548);
var inst_35550 = cljs.core.count.call(null,inst_35549__$1);
var inst_35551 = cljs.core.reset_BANG_.call(null,dctr,inst_35550);
var inst_35556 = cljs.core.seq.call(null,inst_35549__$1);
var inst_35557 = inst_35556;
var inst_35558 = null;
var inst_35559 = (0);
var inst_35560 = (0);
var state_35617__$1 = (function (){var statearr_35660 = state_35617;
(statearr_35660[(20)] = inst_35559);

(statearr_35660[(21)] = inst_35557);

(statearr_35660[(9)] = inst_35558);

(statearr_35660[(29)] = inst_35549__$1);

(statearr_35660[(11)] = inst_35560);

(statearr_35660[(30)] = inst_35551);

return statearr_35660;
})();
var statearr_35661_35730 = state_35617__$1;
(statearr_35661_35730[(2)] = null);

(statearr_35661_35730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (28))){
var inst_35557 = (state_35617[(21)]);
var inst_35576 = (state_35617[(25)]);
var inst_35576__$1 = cljs.core.seq.call(null,inst_35557);
var state_35617__$1 = (function (){var statearr_35662 = state_35617;
(statearr_35662[(25)] = inst_35576__$1);

return statearr_35662;
})();
if(inst_35576__$1){
var statearr_35663_35731 = state_35617__$1;
(statearr_35663_35731[(1)] = (33));

} else {
var statearr_35664_35732 = state_35617__$1;
(statearr_35664_35732[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (25))){
var inst_35559 = (state_35617[(20)]);
var inst_35560 = (state_35617[(11)]);
var inst_35562 = (inst_35560 < inst_35559);
var inst_35563 = inst_35562;
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35563)){
var statearr_35665_35733 = state_35617__$1;
(statearr_35665_35733[(1)] = (27));

} else {
var statearr_35666_35734 = state_35617__$1;
(statearr_35666_35734[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (34))){
var state_35617__$1 = state_35617;
var statearr_35667_35735 = state_35617__$1;
(statearr_35667_35735[(2)] = null);

(statearr_35667_35735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (17))){
var state_35617__$1 = state_35617;
var statearr_35668_35736 = state_35617__$1;
(statearr_35668_35736[(2)] = null);

(statearr_35668_35736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (3))){
var inst_35615 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35617__$1,inst_35615);
} else {
if((state_val_35618 === (12))){
var inst_35544 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35669_35737 = state_35617__$1;
(statearr_35669_35737[(2)] = inst_35544);

(statearr_35669_35737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (2))){
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35617__$1,(4),ch);
} else {
if((state_val_35618 === (23))){
var state_35617__$1 = state_35617;
var statearr_35670_35738 = state_35617__$1;
(statearr_35670_35738[(2)] = null);

(statearr_35670_35738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (35))){
var inst_35599 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35671_35739 = state_35617__$1;
(statearr_35671_35739[(2)] = inst_35599);

(statearr_35671_35739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (19))){
var inst_35516 = (state_35617[(7)]);
var inst_35520 = cljs.core.chunk_first.call(null,inst_35516);
var inst_35521 = cljs.core.chunk_rest.call(null,inst_35516);
var inst_35522 = cljs.core.count.call(null,inst_35520);
var inst_35494 = inst_35521;
var inst_35495 = inst_35520;
var inst_35496 = inst_35522;
var inst_35497 = (0);
var state_35617__$1 = (function (){var statearr_35672 = state_35617;
(statearr_35672[(13)] = inst_35495);

(statearr_35672[(15)] = inst_35496);

(statearr_35672[(16)] = inst_35494);

(statearr_35672[(17)] = inst_35497);

return statearr_35672;
})();
var statearr_35673_35740 = state_35617__$1;
(statearr_35673_35740[(2)] = null);

(statearr_35673_35740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (11))){
var inst_35516 = (state_35617[(7)]);
var inst_35494 = (state_35617[(16)]);
var inst_35516__$1 = cljs.core.seq.call(null,inst_35494);
var state_35617__$1 = (function (){var statearr_35674 = state_35617;
(statearr_35674[(7)] = inst_35516__$1);

return statearr_35674;
})();
if(inst_35516__$1){
var statearr_35675_35741 = state_35617__$1;
(statearr_35675_35741[(1)] = (16));

} else {
var statearr_35676_35742 = state_35617__$1;
(statearr_35676_35742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (9))){
var inst_35546 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35677_35743 = state_35617__$1;
(statearr_35677_35743[(2)] = inst_35546);

(statearr_35677_35743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (5))){
var inst_35492 = cljs.core.deref.call(null,cs);
var inst_35493 = cljs.core.seq.call(null,inst_35492);
var inst_35494 = inst_35493;
var inst_35495 = null;
var inst_35496 = (0);
var inst_35497 = (0);
var state_35617__$1 = (function (){var statearr_35678 = state_35617;
(statearr_35678[(13)] = inst_35495);

(statearr_35678[(15)] = inst_35496);

(statearr_35678[(16)] = inst_35494);

(statearr_35678[(17)] = inst_35497);

return statearr_35678;
})();
var statearr_35679_35744 = state_35617__$1;
(statearr_35679_35744[(2)] = null);

(statearr_35679_35744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (14))){
var state_35617__$1 = state_35617;
var statearr_35680_35745 = state_35617__$1;
(statearr_35680_35745[(2)] = null);

(statearr_35680_35745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (45))){
var inst_35607 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35681_35746 = state_35617__$1;
(statearr_35681_35746[(2)] = inst_35607);

(statearr_35681_35746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (26))){
var inst_35549 = (state_35617[(29)]);
var inst_35603 = (state_35617[(2)]);
var inst_35604 = cljs.core.seq.call(null,inst_35549);
var state_35617__$1 = (function (){var statearr_35682 = state_35617;
(statearr_35682[(31)] = inst_35603);

return statearr_35682;
})();
if(inst_35604){
var statearr_35683_35747 = state_35617__$1;
(statearr_35683_35747[(1)] = (42));

} else {
var statearr_35684_35748 = state_35617__$1;
(statearr_35684_35748[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (16))){
var inst_35516 = (state_35617[(7)]);
var inst_35518 = cljs.core.chunked_seq_QMARK_.call(null,inst_35516);
var state_35617__$1 = state_35617;
if(inst_35518){
var statearr_35685_35749 = state_35617__$1;
(statearr_35685_35749[(1)] = (19));

} else {
var statearr_35686_35750 = state_35617__$1;
(statearr_35686_35750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (38))){
var inst_35596 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35687_35751 = state_35617__$1;
(statearr_35687_35751[(2)] = inst_35596);

(statearr_35687_35751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (30))){
var state_35617__$1 = state_35617;
var statearr_35688_35752 = state_35617__$1;
(statearr_35688_35752[(2)] = null);

(statearr_35688_35752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (10))){
var inst_35495 = (state_35617[(13)]);
var inst_35497 = (state_35617[(17)]);
var inst_35505 = cljs.core._nth.call(null,inst_35495,inst_35497);
var inst_35506 = cljs.core.nth.call(null,inst_35505,(0),null);
var inst_35507 = cljs.core.nth.call(null,inst_35505,(1),null);
var state_35617__$1 = (function (){var statearr_35689 = state_35617;
(statearr_35689[(26)] = inst_35506);

return statearr_35689;
})();
if(cljs.core.truth_(inst_35507)){
var statearr_35690_35753 = state_35617__$1;
(statearr_35690_35753[(1)] = (13));

} else {
var statearr_35691_35754 = state_35617__$1;
(statearr_35691_35754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (18))){
var inst_35542 = (state_35617[(2)]);
var state_35617__$1 = state_35617;
var statearr_35692_35755 = state_35617__$1;
(statearr_35692_35755[(2)] = inst_35542);

(statearr_35692_35755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (42))){
var state_35617__$1 = state_35617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35617__$1,(45),dchan);
} else {
if((state_val_35618 === (37))){
var inst_35576 = (state_35617[(25)]);
var inst_35585 = (state_35617[(23)]);
var inst_35485 = (state_35617[(10)]);
var inst_35585__$1 = cljs.core.first.call(null,inst_35576);
var inst_35586 = cljs.core.async.put_BANG_.call(null,inst_35585__$1,inst_35485,done);
var state_35617__$1 = (function (){var statearr_35693 = state_35617;
(statearr_35693[(23)] = inst_35585__$1);

return statearr_35693;
})();
if(cljs.core.truth_(inst_35586)){
var statearr_35694_35756 = state_35617__$1;
(statearr_35694_35756[(1)] = (39));

} else {
var statearr_35695_35757 = state_35617__$1;
(statearr_35695_35757[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35618 === (8))){
var inst_35496 = (state_35617[(15)]);
var inst_35497 = (state_35617[(17)]);
var inst_35499 = (inst_35497 < inst_35496);
var inst_35500 = inst_35499;
var state_35617__$1 = state_35617;
if(cljs.core.truth_(inst_35500)){
var statearr_35696_35758 = state_35617__$1;
(statearr_35696_35758[(1)] = (10));

} else {
var statearr_35697_35759 = state_35617__$1;
(statearr_35697_35759[(1)] = (11));

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
});})(c__34381__auto___35705,cs,m,dchan,dctr,done))
;
return ((function (switch__34269__auto__,c__34381__auto___35705,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34270__auto__ = null;
var cljs$core$async$mult_$_state_machine__34270__auto____0 = (function (){
var statearr_35701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35701[(0)] = cljs$core$async$mult_$_state_machine__34270__auto__);

(statearr_35701[(1)] = (1));

return statearr_35701;
});
var cljs$core$async$mult_$_state_machine__34270__auto____1 = (function (state_35617){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_35617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e35702){if((e35702 instanceof Object)){
var ex__34273__auto__ = e35702;
var statearr_35703_35760 = state_35617;
(statearr_35703_35760[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35761 = state_35617;
state_35617 = G__35761;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34270__auto__ = function(state_35617){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34270__auto____1.call(this,state_35617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34270__auto____0;
cljs$core$async$mult_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34270__auto____1;
return cljs$core$async$mult_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___35705,cs,m,dchan,dctr,done))
})();
var state__34383__auto__ = (function (){var statearr_35704 = f__34382__auto__.call(null);
(statearr_35704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___35705);

return statearr_35704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___35705,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args35762 = [];
var len__26545__auto___35765 = arguments.length;
var i__26546__auto___35766 = (0);
while(true){
if((i__26546__auto___35766 < len__26545__auto___35765)){
args35762.push((arguments[i__26546__auto___35766]));

var G__35767 = (i__26546__auto___35766 + (1));
i__26546__auto___35766 = G__35767;
continue;
} else {
}
break;
}

var G__35764 = args35762.length;
switch (G__35764) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args35762.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26100__auto__ = (((m == null))?null:m);
var m__26101__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,m,ch);
} else {
var m__26101__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26100__auto__ = (((m == null))?null:m);
var m__26101__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,m,ch);
} else {
var m__26101__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26100__auto__ = (((m == null))?null:m);
var m__26101__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,m);
} else {
var m__26101__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26100__auto__ = (((m == null))?null:m);
var m__26101__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,m,state_map);
} else {
var m__26101__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26100__auto__ = (((m == null))?null:m);
var m__26101__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,m,mode);
} else {
var m__26101__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26552__auto__ = [];
var len__26545__auto___35779 = arguments.length;
var i__26546__auto___35780 = (0);
while(true){
if((i__26546__auto___35780 < len__26545__auto___35779)){
args__26552__auto__.push((arguments[i__26546__auto___35780]));

var G__35781 = (i__26546__auto___35780 + (1));
i__26546__auto___35780 = G__35781;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((3) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26553__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35773){
var map__35774 = p__35773;
var map__35774__$1 = ((((!((map__35774 == null)))?((((map__35774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35774.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35774):map__35774);
var opts = map__35774__$1;
var statearr_35776_35782 = state;
(statearr_35776_35782[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35774,map__35774__$1,opts){
return (function (val){
var statearr_35777_35783 = state;
(statearr_35777_35783[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35774,map__35774__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35778_35784 = state;
(statearr_35778_35784[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35769){
var G__35770 = cljs.core.first.call(null,seq35769);
var seq35769__$1 = cljs.core.next.call(null,seq35769);
var G__35771 = cljs.core.first.call(null,seq35769__$1);
var seq35769__$2 = cljs.core.next.call(null,seq35769__$1);
var G__35772 = cljs.core.first.call(null,seq35769__$2);
var seq35769__$3 = cljs.core.next.call(null,seq35769__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35770,G__35771,G__35772,seq35769__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35952 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35952 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35953){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35953 = meta35953;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35954,meta35953__$1){
var self__ = this;
var _35954__$1 = this;
return (new cljs.core.async.t_cljs$core$async35952(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35953__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35954){
var self__ = this;
var _35954__$1 = this;
return self__.meta35953;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35952.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35952.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35953","meta35953",-1903573270,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35952.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35952.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35952";

cljs.core.async.t_cljs$core$async35952.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async35952");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35952 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35952(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35953){
return (new cljs.core.async.t_cljs$core$async35952(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35953));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35952(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34381__auto___36119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___36119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___36119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36056){
var state_val_36057 = (state_36056[(1)]);
if((state_val_36057 === (7))){
var inst_35971 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36058_36120 = state_36056__$1;
(statearr_36058_36120[(2)] = inst_35971);

(statearr_36058_36120[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (20))){
var inst_35983 = (state_36056[(7)]);
var state_36056__$1 = state_36056;
var statearr_36059_36121 = state_36056__$1;
(statearr_36059_36121[(2)] = inst_35983);

(statearr_36059_36121[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (27))){
var state_36056__$1 = state_36056;
var statearr_36060_36122 = state_36056__$1;
(statearr_36060_36122[(2)] = null);

(statearr_36060_36122[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (1))){
var inst_35958 = (state_36056[(8)]);
var inst_35958__$1 = calc_state.call(null);
var inst_35960 = (inst_35958__$1 == null);
var inst_35961 = cljs.core.not.call(null,inst_35960);
var state_36056__$1 = (function (){var statearr_36061 = state_36056;
(statearr_36061[(8)] = inst_35958__$1);

return statearr_36061;
})();
if(inst_35961){
var statearr_36062_36123 = state_36056__$1;
(statearr_36062_36123[(1)] = (2));

} else {
var statearr_36063_36124 = state_36056__$1;
(statearr_36063_36124[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (24))){
var inst_36007 = (state_36056[(9)]);
var inst_36016 = (state_36056[(10)]);
var inst_36030 = (state_36056[(11)]);
var inst_36030__$1 = inst_36007.call(null,inst_36016);
var state_36056__$1 = (function (){var statearr_36064 = state_36056;
(statearr_36064[(11)] = inst_36030__$1);

return statearr_36064;
})();
if(cljs.core.truth_(inst_36030__$1)){
var statearr_36065_36125 = state_36056__$1;
(statearr_36065_36125[(1)] = (29));

} else {
var statearr_36066_36126 = state_36056__$1;
(statearr_36066_36126[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (4))){
var inst_35974 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_35974)){
var statearr_36067_36127 = state_36056__$1;
(statearr_36067_36127[(1)] = (8));

} else {
var statearr_36068_36128 = state_36056__$1;
(statearr_36068_36128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (15))){
var inst_36001 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_36001)){
var statearr_36069_36129 = state_36056__$1;
(statearr_36069_36129[(1)] = (19));

} else {
var statearr_36070_36130 = state_36056__$1;
(statearr_36070_36130[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (21))){
var inst_36006 = (state_36056[(12)]);
var inst_36006__$1 = (state_36056[(2)]);
var inst_36007 = cljs.core.get.call(null,inst_36006__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36008 = cljs.core.get.call(null,inst_36006__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36009 = cljs.core.get.call(null,inst_36006__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36056__$1 = (function (){var statearr_36071 = state_36056;
(statearr_36071[(9)] = inst_36007);

(statearr_36071[(13)] = inst_36008);

(statearr_36071[(12)] = inst_36006__$1);

return statearr_36071;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36056__$1,(22),inst_36009);
} else {
if((state_val_36057 === (31))){
var inst_36038 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_36038)){
var statearr_36072_36131 = state_36056__$1;
(statearr_36072_36131[(1)] = (32));

} else {
var statearr_36073_36132 = state_36056__$1;
(statearr_36073_36132[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (32))){
var inst_36015 = (state_36056[(14)]);
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36056__$1,(35),out,inst_36015);
} else {
if((state_val_36057 === (33))){
var inst_36006 = (state_36056[(12)]);
var inst_35983 = inst_36006;
var state_36056__$1 = (function (){var statearr_36074 = state_36056;
(statearr_36074[(7)] = inst_35983);

return statearr_36074;
})();
var statearr_36075_36133 = state_36056__$1;
(statearr_36075_36133[(2)] = null);

(statearr_36075_36133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (13))){
var inst_35983 = (state_36056[(7)]);
var inst_35990 = inst_35983.cljs$lang$protocol_mask$partition0$;
var inst_35991 = (inst_35990 & (64));
var inst_35992 = inst_35983.cljs$core$ISeq$;
var inst_35993 = (cljs.core.PROTOCOL_SENTINEL === inst_35992);
var inst_35994 = (inst_35991) || (inst_35993);
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_35994)){
var statearr_36076_36134 = state_36056__$1;
(statearr_36076_36134[(1)] = (16));

} else {
var statearr_36077_36135 = state_36056__$1;
(statearr_36077_36135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (22))){
var inst_36016 = (state_36056[(10)]);
var inst_36015 = (state_36056[(14)]);
var inst_36014 = (state_36056[(2)]);
var inst_36015__$1 = cljs.core.nth.call(null,inst_36014,(0),null);
var inst_36016__$1 = cljs.core.nth.call(null,inst_36014,(1),null);
var inst_36017 = (inst_36015__$1 == null);
var inst_36018 = cljs.core._EQ_.call(null,inst_36016__$1,change);
var inst_36019 = (inst_36017) || (inst_36018);
var state_36056__$1 = (function (){var statearr_36078 = state_36056;
(statearr_36078[(10)] = inst_36016__$1);

(statearr_36078[(14)] = inst_36015__$1);

return statearr_36078;
})();
if(cljs.core.truth_(inst_36019)){
var statearr_36079_36136 = state_36056__$1;
(statearr_36079_36136[(1)] = (23));

} else {
var statearr_36080_36137 = state_36056__$1;
(statearr_36080_36137[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (36))){
var inst_36006 = (state_36056[(12)]);
var inst_35983 = inst_36006;
var state_36056__$1 = (function (){var statearr_36081 = state_36056;
(statearr_36081[(7)] = inst_35983);

return statearr_36081;
})();
var statearr_36082_36138 = state_36056__$1;
(statearr_36082_36138[(2)] = null);

(statearr_36082_36138[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (29))){
var inst_36030 = (state_36056[(11)]);
var state_36056__$1 = state_36056;
var statearr_36083_36139 = state_36056__$1;
(statearr_36083_36139[(2)] = inst_36030);

(statearr_36083_36139[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (6))){
var state_36056__$1 = state_36056;
var statearr_36084_36140 = state_36056__$1;
(statearr_36084_36140[(2)] = false);

(statearr_36084_36140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (28))){
var inst_36026 = (state_36056[(2)]);
var inst_36027 = calc_state.call(null);
var inst_35983 = inst_36027;
var state_36056__$1 = (function (){var statearr_36085 = state_36056;
(statearr_36085[(15)] = inst_36026);

(statearr_36085[(7)] = inst_35983);

return statearr_36085;
})();
var statearr_36086_36141 = state_36056__$1;
(statearr_36086_36141[(2)] = null);

(statearr_36086_36141[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (25))){
var inst_36052 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36087_36142 = state_36056__$1;
(statearr_36087_36142[(2)] = inst_36052);

(statearr_36087_36142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (34))){
var inst_36050 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36088_36143 = state_36056__$1;
(statearr_36088_36143[(2)] = inst_36050);

(statearr_36088_36143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (17))){
var state_36056__$1 = state_36056;
var statearr_36089_36144 = state_36056__$1;
(statearr_36089_36144[(2)] = false);

(statearr_36089_36144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (3))){
var state_36056__$1 = state_36056;
var statearr_36090_36145 = state_36056__$1;
(statearr_36090_36145[(2)] = false);

(statearr_36090_36145[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (12))){
var inst_36054 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36056__$1,inst_36054);
} else {
if((state_val_36057 === (2))){
var inst_35958 = (state_36056[(8)]);
var inst_35963 = inst_35958.cljs$lang$protocol_mask$partition0$;
var inst_35964 = (inst_35963 & (64));
var inst_35965 = inst_35958.cljs$core$ISeq$;
var inst_35966 = (cljs.core.PROTOCOL_SENTINEL === inst_35965);
var inst_35967 = (inst_35964) || (inst_35966);
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_35967)){
var statearr_36091_36146 = state_36056__$1;
(statearr_36091_36146[(1)] = (5));

} else {
var statearr_36092_36147 = state_36056__$1;
(statearr_36092_36147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (23))){
var inst_36015 = (state_36056[(14)]);
var inst_36021 = (inst_36015 == null);
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_36021)){
var statearr_36093_36148 = state_36056__$1;
(statearr_36093_36148[(1)] = (26));

} else {
var statearr_36094_36149 = state_36056__$1;
(statearr_36094_36149[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (35))){
var inst_36041 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
if(cljs.core.truth_(inst_36041)){
var statearr_36095_36150 = state_36056__$1;
(statearr_36095_36150[(1)] = (36));

} else {
var statearr_36096_36151 = state_36056__$1;
(statearr_36096_36151[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (19))){
var inst_35983 = (state_36056[(7)]);
var inst_36003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35983);
var state_36056__$1 = state_36056;
var statearr_36097_36152 = state_36056__$1;
(statearr_36097_36152[(2)] = inst_36003);

(statearr_36097_36152[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (11))){
var inst_35983 = (state_36056[(7)]);
var inst_35987 = (inst_35983 == null);
var inst_35988 = cljs.core.not.call(null,inst_35987);
var state_36056__$1 = state_36056;
if(inst_35988){
var statearr_36098_36153 = state_36056__$1;
(statearr_36098_36153[(1)] = (13));

} else {
var statearr_36099_36154 = state_36056__$1;
(statearr_36099_36154[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (9))){
var inst_35958 = (state_36056[(8)]);
var state_36056__$1 = state_36056;
var statearr_36100_36155 = state_36056__$1;
(statearr_36100_36155[(2)] = inst_35958);

(statearr_36100_36155[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (5))){
var state_36056__$1 = state_36056;
var statearr_36101_36156 = state_36056__$1;
(statearr_36101_36156[(2)] = true);

(statearr_36101_36156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (14))){
var state_36056__$1 = state_36056;
var statearr_36102_36157 = state_36056__$1;
(statearr_36102_36157[(2)] = false);

(statearr_36102_36157[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (26))){
var inst_36016 = (state_36056[(10)]);
var inst_36023 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36016);
var state_36056__$1 = state_36056;
var statearr_36103_36158 = state_36056__$1;
(statearr_36103_36158[(2)] = inst_36023);

(statearr_36103_36158[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (16))){
var state_36056__$1 = state_36056;
var statearr_36104_36159 = state_36056__$1;
(statearr_36104_36159[(2)] = true);

(statearr_36104_36159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (38))){
var inst_36046 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36105_36160 = state_36056__$1;
(statearr_36105_36160[(2)] = inst_36046);

(statearr_36105_36160[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (30))){
var inst_36007 = (state_36056[(9)]);
var inst_36016 = (state_36056[(10)]);
var inst_36008 = (state_36056[(13)]);
var inst_36033 = cljs.core.empty_QMARK_.call(null,inst_36007);
var inst_36034 = inst_36008.call(null,inst_36016);
var inst_36035 = cljs.core.not.call(null,inst_36034);
var inst_36036 = (inst_36033) && (inst_36035);
var state_36056__$1 = state_36056;
var statearr_36106_36161 = state_36056__$1;
(statearr_36106_36161[(2)] = inst_36036);

(statearr_36106_36161[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (10))){
var inst_35958 = (state_36056[(8)]);
var inst_35979 = (state_36056[(2)]);
var inst_35980 = cljs.core.get.call(null,inst_35979,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35981 = cljs.core.get.call(null,inst_35979,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35982 = cljs.core.get.call(null,inst_35979,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35983 = inst_35958;
var state_36056__$1 = (function (){var statearr_36107 = state_36056;
(statearr_36107[(16)] = inst_35982);

(statearr_36107[(17)] = inst_35980);

(statearr_36107[(18)] = inst_35981);

(statearr_36107[(7)] = inst_35983);

return statearr_36107;
})();
var statearr_36108_36162 = state_36056__$1;
(statearr_36108_36162[(2)] = null);

(statearr_36108_36162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (18))){
var inst_35998 = (state_36056[(2)]);
var state_36056__$1 = state_36056;
var statearr_36109_36163 = state_36056__$1;
(statearr_36109_36163[(2)] = inst_35998);

(statearr_36109_36163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (37))){
var state_36056__$1 = state_36056;
var statearr_36110_36164 = state_36056__$1;
(statearr_36110_36164[(2)] = null);

(statearr_36110_36164[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36057 === (8))){
var inst_35958 = (state_36056[(8)]);
var inst_35976 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35958);
var state_36056__$1 = state_36056;
var statearr_36111_36165 = state_36056__$1;
(statearr_36111_36165[(2)] = inst_35976);

(statearr_36111_36165[(1)] = (10));


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
});})(c__34381__auto___36119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34269__auto__,c__34381__auto___36119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34270__auto__ = null;
var cljs$core$async$mix_$_state_machine__34270__auto____0 = (function (){
var statearr_36115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36115[(0)] = cljs$core$async$mix_$_state_machine__34270__auto__);

(statearr_36115[(1)] = (1));

return statearr_36115;
});
var cljs$core$async$mix_$_state_machine__34270__auto____1 = (function (state_36056){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_36056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e36116){if((e36116 instanceof Object)){
var ex__34273__auto__ = e36116;
var statearr_36117_36166 = state_36056;
(statearr_36117_36166[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36167 = state_36056;
state_36056 = G__36167;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34270__auto__ = function(state_36056){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34270__auto____1.call(this,state_36056);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34270__auto____0;
cljs$core$async$mix_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34270__auto____1;
return cljs$core$async$mix_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___36119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34383__auto__ = (function (){var statearr_36118 = f__34382__auto__.call(null);
(statearr_36118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___36119);

return statearr_36118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___36119,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26100__auto__ = (((p == null))?null:p);
var m__26101__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26101__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26100__auto__ = (((p == null))?null:p);
var m__26101__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,p,v,ch);
} else {
var m__26101__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args36168 = [];
var len__26545__auto___36171 = arguments.length;
var i__26546__auto___36172 = (0);
while(true){
if((i__26546__auto___36172 < len__26545__auto___36171)){
args36168.push((arguments[i__26546__auto___36172]));

var G__36173 = (i__26546__auto___36172 + (1));
i__26546__auto___36172 = G__36173;
continue;
} else {
}
break;
}

var G__36170 = args36168.length;
switch (G__36170) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36168.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26100__auto__ = (((p == null))?null:p);
var m__26101__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,p);
} else {
var m__26101__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26100__auto__ = (((p == null))?null:p);
var m__26101__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,p,v);
} else {
var m__26101__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args36176 = [];
var len__26545__auto___36301 = arguments.length;
var i__26546__auto___36302 = (0);
while(true){
if((i__26546__auto___36302 < len__26545__auto___36301)){
args36176.push((arguments[i__26546__auto___36302]));

var G__36303 = (i__26546__auto___36302 + (1));
i__26546__auto___36302 = G__36303;
continue;
} else {
}
break;
}

var G__36178 = args36176.length;
switch (G__36178) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36176.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25432__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25432__auto__,mults){
return (function (p1__36175_SHARP_){
if(cljs.core.truth_(p1__36175_SHARP_.call(null,topic))){
return p1__36175_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36175_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25432__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36179 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36180){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36180 = meta36180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36181,meta36180__$1){
var self__ = this;
var _36181__$1 = this;
return (new cljs.core.async.t_cljs$core$async36179(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36180__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36181){
var self__ = this;
var _36181__$1 = this;
return self__.meta36180;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36179.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36179.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36180","meta36180",-821007215,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36179";

cljs.core.async.t_cljs$core$async36179.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async36179");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async36179 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36179(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36180){
return (new cljs.core.async.t_cljs$core$async36179(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36180));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36179(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34381__auto___36305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___36305,mults,ensure_mult,p){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___36305,mults,ensure_mult,p){
return (function (state_36253){
var state_val_36254 = (state_36253[(1)]);
if((state_val_36254 === (7))){
var inst_36249 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
var statearr_36255_36306 = state_36253__$1;
(statearr_36255_36306[(2)] = inst_36249);

(statearr_36255_36306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (20))){
var state_36253__$1 = state_36253;
var statearr_36256_36307 = state_36253__$1;
(statearr_36256_36307[(2)] = null);

(statearr_36256_36307[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (1))){
var state_36253__$1 = state_36253;
var statearr_36257_36308 = state_36253__$1;
(statearr_36257_36308[(2)] = null);

(statearr_36257_36308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (24))){
var inst_36232 = (state_36253[(7)]);
var inst_36241 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36232);
var state_36253__$1 = state_36253;
var statearr_36258_36309 = state_36253__$1;
(statearr_36258_36309[(2)] = inst_36241);

(statearr_36258_36309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (4))){
var inst_36184 = (state_36253[(8)]);
var inst_36184__$1 = (state_36253[(2)]);
var inst_36185 = (inst_36184__$1 == null);
var state_36253__$1 = (function (){var statearr_36259 = state_36253;
(statearr_36259[(8)] = inst_36184__$1);

return statearr_36259;
})();
if(cljs.core.truth_(inst_36185)){
var statearr_36260_36310 = state_36253__$1;
(statearr_36260_36310[(1)] = (5));

} else {
var statearr_36261_36311 = state_36253__$1;
(statearr_36261_36311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (15))){
var inst_36226 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
var statearr_36262_36312 = state_36253__$1;
(statearr_36262_36312[(2)] = inst_36226);

(statearr_36262_36312[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (21))){
var inst_36246 = (state_36253[(2)]);
var state_36253__$1 = (function (){var statearr_36263 = state_36253;
(statearr_36263[(9)] = inst_36246);

return statearr_36263;
})();
var statearr_36264_36313 = state_36253__$1;
(statearr_36264_36313[(2)] = null);

(statearr_36264_36313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (13))){
var inst_36208 = (state_36253[(10)]);
var inst_36210 = cljs.core.chunked_seq_QMARK_.call(null,inst_36208);
var state_36253__$1 = state_36253;
if(inst_36210){
var statearr_36265_36314 = state_36253__$1;
(statearr_36265_36314[(1)] = (16));

} else {
var statearr_36266_36315 = state_36253__$1;
(statearr_36266_36315[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (22))){
var inst_36238 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
if(cljs.core.truth_(inst_36238)){
var statearr_36267_36316 = state_36253__$1;
(statearr_36267_36316[(1)] = (23));

} else {
var statearr_36268_36317 = state_36253__$1;
(statearr_36268_36317[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (6))){
var inst_36234 = (state_36253[(11)]);
var inst_36184 = (state_36253[(8)]);
var inst_36232 = (state_36253[(7)]);
var inst_36232__$1 = topic_fn.call(null,inst_36184);
var inst_36233 = cljs.core.deref.call(null,mults);
var inst_36234__$1 = cljs.core.get.call(null,inst_36233,inst_36232__$1);
var state_36253__$1 = (function (){var statearr_36269 = state_36253;
(statearr_36269[(11)] = inst_36234__$1);

(statearr_36269[(7)] = inst_36232__$1);

return statearr_36269;
})();
if(cljs.core.truth_(inst_36234__$1)){
var statearr_36270_36318 = state_36253__$1;
(statearr_36270_36318[(1)] = (19));

} else {
var statearr_36271_36319 = state_36253__$1;
(statearr_36271_36319[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (25))){
var inst_36243 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
var statearr_36272_36320 = state_36253__$1;
(statearr_36272_36320[(2)] = inst_36243);

(statearr_36272_36320[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (17))){
var inst_36208 = (state_36253[(10)]);
var inst_36217 = cljs.core.first.call(null,inst_36208);
var inst_36218 = cljs.core.async.muxch_STAR_.call(null,inst_36217);
var inst_36219 = cljs.core.async.close_BANG_.call(null,inst_36218);
var inst_36220 = cljs.core.next.call(null,inst_36208);
var inst_36194 = inst_36220;
var inst_36195 = null;
var inst_36196 = (0);
var inst_36197 = (0);
var state_36253__$1 = (function (){var statearr_36273 = state_36253;
(statearr_36273[(12)] = inst_36196);

(statearr_36273[(13)] = inst_36194);

(statearr_36273[(14)] = inst_36195);

(statearr_36273[(15)] = inst_36197);

(statearr_36273[(16)] = inst_36219);

return statearr_36273;
})();
var statearr_36274_36321 = state_36253__$1;
(statearr_36274_36321[(2)] = null);

(statearr_36274_36321[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (3))){
var inst_36251 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36253__$1,inst_36251);
} else {
if((state_val_36254 === (12))){
var inst_36228 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
var statearr_36275_36322 = state_36253__$1;
(statearr_36275_36322[(2)] = inst_36228);

(statearr_36275_36322[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (2))){
var state_36253__$1 = state_36253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36253__$1,(4),ch);
} else {
if((state_val_36254 === (23))){
var state_36253__$1 = state_36253;
var statearr_36276_36323 = state_36253__$1;
(statearr_36276_36323[(2)] = null);

(statearr_36276_36323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (19))){
var inst_36234 = (state_36253[(11)]);
var inst_36184 = (state_36253[(8)]);
var inst_36236 = cljs.core.async.muxch_STAR_.call(null,inst_36234);
var state_36253__$1 = state_36253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36253__$1,(22),inst_36236,inst_36184);
} else {
if((state_val_36254 === (11))){
var inst_36194 = (state_36253[(13)]);
var inst_36208 = (state_36253[(10)]);
var inst_36208__$1 = cljs.core.seq.call(null,inst_36194);
var state_36253__$1 = (function (){var statearr_36277 = state_36253;
(statearr_36277[(10)] = inst_36208__$1);

return statearr_36277;
})();
if(inst_36208__$1){
var statearr_36278_36324 = state_36253__$1;
(statearr_36278_36324[(1)] = (13));

} else {
var statearr_36279_36325 = state_36253__$1;
(statearr_36279_36325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (9))){
var inst_36230 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
var statearr_36280_36326 = state_36253__$1;
(statearr_36280_36326[(2)] = inst_36230);

(statearr_36280_36326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (5))){
var inst_36191 = cljs.core.deref.call(null,mults);
var inst_36192 = cljs.core.vals.call(null,inst_36191);
var inst_36193 = cljs.core.seq.call(null,inst_36192);
var inst_36194 = inst_36193;
var inst_36195 = null;
var inst_36196 = (0);
var inst_36197 = (0);
var state_36253__$1 = (function (){var statearr_36281 = state_36253;
(statearr_36281[(12)] = inst_36196);

(statearr_36281[(13)] = inst_36194);

(statearr_36281[(14)] = inst_36195);

(statearr_36281[(15)] = inst_36197);

return statearr_36281;
})();
var statearr_36282_36327 = state_36253__$1;
(statearr_36282_36327[(2)] = null);

(statearr_36282_36327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (14))){
var state_36253__$1 = state_36253;
var statearr_36286_36328 = state_36253__$1;
(statearr_36286_36328[(2)] = null);

(statearr_36286_36328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (16))){
var inst_36208 = (state_36253[(10)]);
var inst_36212 = cljs.core.chunk_first.call(null,inst_36208);
var inst_36213 = cljs.core.chunk_rest.call(null,inst_36208);
var inst_36214 = cljs.core.count.call(null,inst_36212);
var inst_36194 = inst_36213;
var inst_36195 = inst_36212;
var inst_36196 = inst_36214;
var inst_36197 = (0);
var state_36253__$1 = (function (){var statearr_36287 = state_36253;
(statearr_36287[(12)] = inst_36196);

(statearr_36287[(13)] = inst_36194);

(statearr_36287[(14)] = inst_36195);

(statearr_36287[(15)] = inst_36197);

return statearr_36287;
})();
var statearr_36288_36329 = state_36253__$1;
(statearr_36288_36329[(2)] = null);

(statearr_36288_36329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (10))){
var inst_36196 = (state_36253[(12)]);
var inst_36194 = (state_36253[(13)]);
var inst_36195 = (state_36253[(14)]);
var inst_36197 = (state_36253[(15)]);
var inst_36202 = cljs.core._nth.call(null,inst_36195,inst_36197);
var inst_36203 = cljs.core.async.muxch_STAR_.call(null,inst_36202);
var inst_36204 = cljs.core.async.close_BANG_.call(null,inst_36203);
var inst_36205 = (inst_36197 + (1));
var tmp36283 = inst_36196;
var tmp36284 = inst_36194;
var tmp36285 = inst_36195;
var inst_36194__$1 = tmp36284;
var inst_36195__$1 = tmp36285;
var inst_36196__$1 = tmp36283;
var inst_36197__$1 = inst_36205;
var state_36253__$1 = (function (){var statearr_36289 = state_36253;
(statearr_36289[(12)] = inst_36196__$1);

(statearr_36289[(13)] = inst_36194__$1);

(statearr_36289[(14)] = inst_36195__$1);

(statearr_36289[(17)] = inst_36204);

(statearr_36289[(15)] = inst_36197__$1);

return statearr_36289;
})();
var statearr_36290_36330 = state_36253__$1;
(statearr_36290_36330[(2)] = null);

(statearr_36290_36330[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (18))){
var inst_36223 = (state_36253[(2)]);
var state_36253__$1 = state_36253;
var statearr_36291_36331 = state_36253__$1;
(statearr_36291_36331[(2)] = inst_36223);

(statearr_36291_36331[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36254 === (8))){
var inst_36196 = (state_36253[(12)]);
var inst_36197 = (state_36253[(15)]);
var inst_36199 = (inst_36197 < inst_36196);
var inst_36200 = inst_36199;
var state_36253__$1 = state_36253;
if(cljs.core.truth_(inst_36200)){
var statearr_36292_36332 = state_36253__$1;
(statearr_36292_36332[(1)] = (10));

} else {
var statearr_36293_36333 = state_36253__$1;
(statearr_36293_36333[(1)] = (11));

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
});})(c__34381__auto___36305,mults,ensure_mult,p))
;
return ((function (switch__34269__auto__,c__34381__auto___36305,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_36297 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36297[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_36297[(1)] = (1));

return statearr_36297;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_36253){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_36253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e36298){if((e36298 instanceof Object)){
var ex__34273__auto__ = e36298;
var statearr_36299_36334 = state_36253;
(statearr_36299_36334[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36335 = state_36253;
state_36253 = G__36335;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_36253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_36253);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___36305,mults,ensure_mult,p))
})();
var state__34383__auto__ = (function (){var statearr_36300 = f__34382__auto__.call(null);
(statearr_36300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___36305);

return statearr_36300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___36305,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args36336 = [];
var len__26545__auto___36339 = arguments.length;
var i__26546__auto___36340 = (0);
while(true){
if((i__26546__auto___36340 < len__26545__auto___36339)){
args36336.push((arguments[i__26546__auto___36340]));

var G__36341 = (i__26546__auto___36340 + (1));
i__26546__auto___36340 = G__36341;
continue;
} else {
}
break;
}

var G__36338 = args36336.length;
switch (G__36338) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36336.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args36343 = [];
var len__26545__auto___36346 = arguments.length;
var i__26546__auto___36347 = (0);
while(true){
if((i__26546__auto___36347 < len__26545__auto___36346)){
args36343.push((arguments[i__26546__auto___36347]));

var G__36348 = (i__26546__auto___36347 + (1));
i__26546__auto___36347 = G__36348;
continue;
} else {
}
break;
}

var G__36345 = args36343.length;
switch (G__36345) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36343.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args36350 = [];
var len__26545__auto___36421 = arguments.length;
var i__26546__auto___36422 = (0);
while(true){
if((i__26546__auto___36422 < len__26545__auto___36421)){
args36350.push((arguments[i__26546__auto___36422]));

var G__36423 = (i__26546__auto___36422 + (1));
i__26546__auto___36422 = G__36423;
continue;
} else {
}
break;
}

var G__36352 = args36350.length;
switch (G__36352) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36350.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34381__auto___36425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___36425,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___36425,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36391){
var state_val_36392 = (state_36391[(1)]);
if((state_val_36392 === (7))){
var state_36391__$1 = state_36391;
var statearr_36393_36426 = state_36391__$1;
(statearr_36393_36426[(2)] = null);

(statearr_36393_36426[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (1))){
var state_36391__$1 = state_36391;
var statearr_36394_36427 = state_36391__$1;
(statearr_36394_36427[(2)] = null);

(statearr_36394_36427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (4))){
var inst_36355 = (state_36391[(7)]);
var inst_36357 = (inst_36355 < cnt);
var state_36391__$1 = state_36391;
if(cljs.core.truth_(inst_36357)){
var statearr_36395_36428 = state_36391__$1;
(statearr_36395_36428[(1)] = (6));

} else {
var statearr_36396_36429 = state_36391__$1;
(statearr_36396_36429[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (15))){
var inst_36387 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36397_36430 = state_36391__$1;
(statearr_36397_36430[(2)] = inst_36387);

(statearr_36397_36430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (13))){
var inst_36380 = cljs.core.async.close_BANG_.call(null,out);
var state_36391__$1 = state_36391;
var statearr_36398_36431 = state_36391__$1;
(statearr_36398_36431[(2)] = inst_36380);

(statearr_36398_36431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (6))){
var state_36391__$1 = state_36391;
var statearr_36399_36432 = state_36391__$1;
(statearr_36399_36432[(2)] = null);

(statearr_36399_36432[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (3))){
var inst_36389 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36391__$1,inst_36389);
} else {
if((state_val_36392 === (12))){
var inst_36377 = (state_36391[(8)]);
var inst_36377__$1 = (state_36391[(2)]);
var inst_36378 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36377__$1);
var state_36391__$1 = (function (){var statearr_36400 = state_36391;
(statearr_36400[(8)] = inst_36377__$1);

return statearr_36400;
})();
if(cljs.core.truth_(inst_36378)){
var statearr_36401_36433 = state_36391__$1;
(statearr_36401_36433[(1)] = (13));

} else {
var statearr_36402_36434 = state_36391__$1;
(statearr_36402_36434[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (2))){
var inst_36354 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36355 = (0);
var state_36391__$1 = (function (){var statearr_36403 = state_36391;
(statearr_36403[(7)] = inst_36355);

(statearr_36403[(9)] = inst_36354);

return statearr_36403;
})();
var statearr_36404_36435 = state_36391__$1;
(statearr_36404_36435[(2)] = null);

(statearr_36404_36435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (11))){
var inst_36355 = (state_36391[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36391,(10),Object,null,(9));
var inst_36364 = chs__$1.call(null,inst_36355);
var inst_36365 = done.call(null,inst_36355);
var inst_36366 = cljs.core.async.take_BANG_.call(null,inst_36364,inst_36365);
var state_36391__$1 = state_36391;
var statearr_36405_36436 = state_36391__$1;
(statearr_36405_36436[(2)] = inst_36366);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36391__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (9))){
var inst_36355 = (state_36391[(7)]);
var inst_36368 = (state_36391[(2)]);
var inst_36369 = (inst_36355 + (1));
var inst_36355__$1 = inst_36369;
var state_36391__$1 = (function (){var statearr_36406 = state_36391;
(statearr_36406[(10)] = inst_36368);

(statearr_36406[(7)] = inst_36355__$1);

return statearr_36406;
})();
var statearr_36407_36437 = state_36391__$1;
(statearr_36407_36437[(2)] = null);

(statearr_36407_36437[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (5))){
var inst_36375 = (state_36391[(2)]);
var state_36391__$1 = (function (){var statearr_36408 = state_36391;
(statearr_36408[(11)] = inst_36375);

return statearr_36408;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36391__$1,(12),dchan);
} else {
if((state_val_36392 === (14))){
var inst_36377 = (state_36391[(8)]);
var inst_36382 = cljs.core.apply.call(null,f,inst_36377);
var state_36391__$1 = state_36391;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36391__$1,(16),out,inst_36382);
} else {
if((state_val_36392 === (16))){
var inst_36384 = (state_36391[(2)]);
var state_36391__$1 = (function (){var statearr_36409 = state_36391;
(statearr_36409[(12)] = inst_36384);

return statearr_36409;
})();
var statearr_36410_36438 = state_36391__$1;
(statearr_36410_36438[(2)] = null);

(statearr_36410_36438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (10))){
var inst_36359 = (state_36391[(2)]);
var inst_36360 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36391__$1 = (function (){var statearr_36411 = state_36391;
(statearr_36411[(13)] = inst_36359);

return statearr_36411;
})();
var statearr_36412_36439 = state_36391__$1;
(statearr_36412_36439[(2)] = inst_36360);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36391__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36392 === (8))){
var inst_36373 = (state_36391[(2)]);
var state_36391__$1 = state_36391;
var statearr_36413_36440 = state_36391__$1;
(statearr_36413_36440[(2)] = inst_36373);

(statearr_36413_36440[(1)] = (5));


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
});})(c__34381__auto___36425,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34269__auto__,c__34381__auto___36425,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_36417 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36417[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_36417[(1)] = (1));

return statearr_36417;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_36391){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_36391);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e36418){if((e36418 instanceof Object)){
var ex__34273__auto__ = e36418;
var statearr_36419_36441 = state_36391;
(statearr_36419_36441[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36391);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36442 = state_36391;
state_36391 = G__36442;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_36391){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_36391);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___36425,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34383__auto__ = (function (){var statearr_36420 = f__34382__auto__.call(null);
(statearr_36420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___36425);

return statearr_36420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___36425,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args36444 = [];
var len__26545__auto___36502 = arguments.length;
var i__26546__auto___36503 = (0);
while(true){
if((i__26546__auto___36503 < len__26545__auto___36502)){
args36444.push((arguments[i__26546__auto___36503]));

var G__36504 = (i__26546__auto___36503 + (1));
i__26546__auto___36503 = G__36504;
continue;
} else {
}
break;
}

var G__36446 = args36444.length;
switch (G__36446) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36444.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34381__auto___36506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___36506,out){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___36506,out){
return (function (state_36478){
var state_val_36479 = (state_36478[(1)]);
if((state_val_36479 === (7))){
var inst_36458 = (state_36478[(7)]);
var inst_36457 = (state_36478[(8)]);
var inst_36457__$1 = (state_36478[(2)]);
var inst_36458__$1 = cljs.core.nth.call(null,inst_36457__$1,(0),null);
var inst_36459 = cljs.core.nth.call(null,inst_36457__$1,(1),null);
var inst_36460 = (inst_36458__$1 == null);
var state_36478__$1 = (function (){var statearr_36480 = state_36478;
(statearr_36480[(9)] = inst_36459);

(statearr_36480[(7)] = inst_36458__$1);

(statearr_36480[(8)] = inst_36457__$1);

return statearr_36480;
})();
if(cljs.core.truth_(inst_36460)){
var statearr_36481_36507 = state_36478__$1;
(statearr_36481_36507[(1)] = (8));

} else {
var statearr_36482_36508 = state_36478__$1;
(statearr_36482_36508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (1))){
var inst_36447 = cljs.core.vec.call(null,chs);
var inst_36448 = inst_36447;
var state_36478__$1 = (function (){var statearr_36483 = state_36478;
(statearr_36483[(10)] = inst_36448);

return statearr_36483;
})();
var statearr_36484_36509 = state_36478__$1;
(statearr_36484_36509[(2)] = null);

(statearr_36484_36509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (4))){
var inst_36448 = (state_36478[(10)]);
var state_36478__$1 = state_36478;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36478__$1,(7),inst_36448);
} else {
if((state_val_36479 === (6))){
var inst_36474 = (state_36478[(2)]);
var state_36478__$1 = state_36478;
var statearr_36485_36510 = state_36478__$1;
(statearr_36485_36510[(2)] = inst_36474);

(statearr_36485_36510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (3))){
var inst_36476 = (state_36478[(2)]);
var state_36478__$1 = state_36478;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36478__$1,inst_36476);
} else {
if((state_val_36479 === (2))){
var inst_36448 = (state_36478[(10)]);
var inst_36450 = cljs.core.count.call(null,inst_36448);
var inst_36451 = (inst_36450 > (0));
var state_36478__$1 = state_36478;
if(cljs.core.truth_(inst_36451)){
var statearr_36487_36511 = state_36478__$1;
(statearr_36487_36511[(1)] = (4));

} else {
var statearr_36488_36512 = state_36478__$1;
(statearr_36488_36512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (11))){
var inst_36448 = (state_36478[(10)]);
var inst_36467 = (state_36478[(2)]);
var tmp36486 = inst_36448;
var inst_36448__$1 = tmp36486;
var state_36478__$1 = (function (){var statearr_36489 = state_36478;
(statearr_36489[(11)] = inst_36467);

(statearr_36489[(10)] = inst_36448__$1);

return statearr_36489;
})();
var statearr_36490_36513 = state_36478__$1;
(statearr_36490_36513[(2)] = null);

(statearr_36490_36513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (9))){
var inst_36458 = (state_36478[(7)]);
var state_36478__$1 = state_36478;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36478__$1,(11),out,inst_36458);
} else {
if((state_val_36479 === (5))){
var inst_36472 = cljs.core.async.close_BANG_.call(null,out);
var state_36478__$1 = state_36478;
var statearr_36491_36514 = state_36478__$1;
(statearr_36491_36514[(2)] = inst_36472);

(statearr_36491_36514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (10))){
var inst_36470 = (state_36478[(2)]);
var state_36478__$1 = state_36478;
var statearr_36492_36515 = state_36478__$1;
(statearr_36492_36515[(2)] = inst_36470);

(statearr_36492_36515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36479 === (8))){
var inst_36448 = (state_36478[(10)]);
var inst_36459 = (state_36478[(9)]);
var inst_36458 = (state_36478[(7)]);
var inst_36457 = (state_36478[(8)]);
var inst_36462 = (function (){var cs = inst_36448;
var vec__36453 = inst_36457;
var v = inst_36458;
var c = inst_36459;
return ((function (cs,vec__36453,v,c,inst_36448,inst_36459,inst_36458,inst_36457,state_val_36479,c__34381__auto___36506,out){
return (function (p1__36443_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36443_SHARP_);
});
;})(cs,vec__36453,v,c,inst_36448,inst_36459,inst_36458,inst_36457,state_val_36479,c__34381__auto___36506,out))
})();
var inst_36463 = cljs.core.filterv.call(null,inst_36462,inst_36448);
var inst_36448__$1 = inst_36463;
var state_36478__$1 = (function (){var statearr_36493 = state_36478;
(statearr_36493[(10)] = inst_36448__$1);

return statearr_36493;
})();
var statearr_36494_36516 = state_36478__$1;
(statearr_36494_36516[(2)] = null);

(statearr_36494_36516[(1)] = (2));


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
});})(c__34381__auto___36506,out))
;
return ((function (switch__34269__auto__,c__34381__auto___36506,out){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_36498 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36498[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_36498[(1)] = (1));

return statearr_36498;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_36478){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_36478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e36499){if((e36499 instanceof Object)){
var ex__34273__auto__ = e36499;
var statearr_36500_36517 = state_36478;
(statearr_36500_36517[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36518 = state_36478;
state_36478 = G__36518;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_36478){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_36478);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___36506,out))
})();
var state__34383__auto__ = (function (){var statearr_36501 = f__34382__auto__.call(null);
(statearr_36501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___36506);

return statearr_36501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___36506,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args36519 = [];
var len__26545__auto___36568 = arguments.length;
var i__26546__auto___36569 = (0);
while(true){
if((i__26546__auto___36569 < len__26545__auto___36568)){
args36519.push((arguments[i__26546__auto___36569]));

var G__36570 = (i__26546__auto___36569 + (1));
i__26546__auto___36569 = G__36570;
continue;
} else {
}
break;
}

var G__36521 = args36519.length;
switch (G__36521) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36519.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34381__auto___36572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___36572,out){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___36572,out){
return (function (state_36545){
var state_val_36546 = (state_36545[(1)]);
if((state_val_36546 === (7))){
var inst_36527 = (state_36545[(7)]);
var inst_36527__$1 = (state_36545[(2)]);
var inst_36528 = (inst_36527__$1 == null);
var inst_36529 = cljs.core.not.call(null,inst_36528);
var state_36545__$1 = (function (){var statearr_36547 = state_36545;
(statearr_36547[(7)] = inst_36527__$1);

return statearr_36547;
})();
if(inst_36529){
var statearr_36548_36573 = state_36545__$1;
(statearr_36548_36573[(1)] = (8));

} else {
var statearr_36549_36574 = state_36545__$1;
(statearr_36549_36574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36546 === (1))){
var inst_36522 = (0);
var state_36545__$1 = (function (){var statearr_36550 = state_36545;
(statearr_36550[(8)] = inst_36522);

return statearr_36550;
})();
var statearr_36551_36575 = state_36545__$1;
(statearr_36551_36575[(2)] = null);

(statearr_36551_36575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36546 === (4))){
var state_36545__$1 = state_36545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36545__$1,(7),ch);
} else {
if((state_val_36546 === (6))){
var inst_36540 = (state_36545[(2)]);
var state_36545__$1 = state_36545;
var statearr_36552_36576 = state_36545__$1;
(statearr_36552_36576[(2)] = inst_36540);

(statearr_36552_36576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36546 === (3))){
var inst_36542 = (state_36545[(2)]);
var inst_36543 = cljs.core.async.close_BANG_.call(null,out);
var state_36545__$1 = (function (){var statearr_36553 = state_36545;
(statearr_36553[(9)] = inst_36542);

return statearr_36553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36545__$1,inst_36543);
} else {
if((state_val_36546 === (2))){
var inst_36522 = (state_36545[(8)]);
var inst_36524 = (inst_36522 < n);
var state_36545__$1 = state_36545;
if(cljs.core.truth_(inst_36524)){
var statearr_36554_36577 = state_36545__$1;
(statearr_36554_36577[(1)] = (4));

} else {
var statearr_36555_36578 = state_36545__$1;
(statearr_36555_36578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36546 === (11))){
var inst_36522 = (state_36545[(8)]);
var inst_36532 = (state_36545[(2)]);
var inst_36533 = (inst_36522 + (1));
var inst_36522__$1 = inst_36533;
var state_36545__$1 = (function (){var statearr_36556 = state_36545;
(statearr_36556[(10)] = inst_36532);

(statearr_36556[(8)] = inst_36522__$1);

return statearr_36556;
})();
var statearr_36557_36579 = state_36545__$1;
(statearr_36557_36579[(2)] = null);

(statearr_36557_36579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36546 === (9))){
var state_36545__$1 = state_36545;
var statearr_36558_36580 = state_36545__$1;
(statearr_36558_36580[(2)] = null);

(statearr_36558_36580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36546 === (5))){
var state_36545__$1 = state_36545;
var statearr_36559_36581 = state_36545__$1;
(statearr_36559_36581[(2)] = null);

(statearr_36559_36581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36546 === (10))){
var inst_36537 = (state_36545[(2)]);
var state_36545__$1 = state_36545;
var statearr_36560_36582 = state_36545__$1;
(statearr_36560_36582[(2)] = inst_36537);

(statearr_36560_36582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36546 === (8))){
var inst_36527 = (state_36545[(7)]);
var state_36545__$1 = state_36545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36545__$1,(11),out,inst_36527);
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
});})(c__34381__auto___36572,out))
;
return ((function (switch__34269__auto__,c__34381__auto___36572,out){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_36564 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36564[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_36564[(1)] = (1));

return statearr_36564;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_36545){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_36545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e36565){if((e36565 instanceof Object)){
var ex__34273__auto__ = e36565;
var statearr_36566_36583 = state_36545;
(statearr_36566_36583[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36584 = state_36545;
state_36545 = G__36584;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_36545){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_36545);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___36572,out))
})();
var state__34383__auto__ = (function (){var statearr_36567 = f__34382__auto__.call(null);
(statearr_36567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___36572);

return statearr_36567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___36572,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36592 = (function (f,ch,meta36593){
this.f = f;
this.ch = ch;
this.meta36593 = meta36593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36594,meta36593__$1){
var self__ = this;
var _36594__$1 = this;
return (new cljs.core.async.t_cljs$core$async36592(self__.f,self__.ch,meta36593__$1));
});

cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36594){
var self__ = this;
var _36594__$1 = this;
return self__.meta36593;
});

cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36595 = (function (f,ch,meta36593,_,fn1,meta36596){
this.f = f;
this.ch = ch;
this.meta36593 = meta36593;
this._ = _;
this.fn1 = fn1;
this.meta36596 = meta36596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36597,meta36596__$1){
var self__ = this;
var _36597__$1 = this;
return (new cljs.core.async.t_cljs$core$async36595(self__.f,self__.ch,self__.meta36593,self__._,self__.fn1,meta36596__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36597){
var self__ = this;
var _36597__$1 = this;
return self__.meta36596;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36585_SHARP_){
return f1.call(null,(((p1__36585_SHARP_ == null))?null:self__.f.call(null,p1__36585_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36595.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36593","meta36593",34582923,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36592","cljs.core.async/t_cljs$core$async36592",-1574803641,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36596","meta36596",-225893379,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36595";

cljs.core.async.t_cljs$core$async36595.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async36595");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async36595 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36595(f__$1,ch__$1,meta36593__$1,___$2,fn1__$1,meta36596){
return (new cljs.core.async.t_cljs$core$async36595(f__$1,ch__$1,meta36593__$1,___$2,fn1__$1,meta36596));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36595(self__.f,self__.ch,self__.meta36593,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25420__auto__ = ret;
if(cljs.core.truth_(and__25420__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25420__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36592.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36593","meta36593",34582923,null)], null);
});

cljs.core.async.t_cljs$core$async36592.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36592";

cljs.core.async.t_cljs$core$async36592.cljs$lang$ctorPrWriter = (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async36592");
});

cljs.core.async.__GT_t_cljs$core$async36592 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36592(f__$1,ch__$1,meta36593){
return (new cljs.core.async.t_cljs$core$async36592(f__$1,ch__$1,meta36593));
});

}

return (new cljs.core.async.t_cljs$core$async36592(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36601 = (function (f,ch,meta36602){
this.f = f;
this.ch = ch;
this.meta36602 = meta36602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36603,meta36602__$1){
var self__ = this;
var _36603__$1 = this;
return (new cljs.core.async.t_cljs$core$async36601(self__.f,self__.ch,meta36602__$1));
});

cljs.core.async.t_cljs$core$async36601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36603){
var self__ = this;
var _36603__$1 = this;
return self__.meta36602;
});

cljs.core.async.t_cljs$core$async36601.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36601.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36601.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36602","meta36602",-1228825091,null)], null);
});

cljs.core.async.t_cljs$core$async36601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36601";

cljs.core.async.t_cljs$core$async36601.cljs$lang$ctorPrWriter = (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async36601");
});

cljs.core.async.__GT_t_cljs$core$async36601 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36601(f__$1,ch__$1,meta36602){
return (new cljs.core.async.t_cljs$core$async36601(f__$1,ch__$1,meta36602));
});

}

return (new cljs.core.async.t_cljs$core$async36601(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36607 = (function (p,ch,meta36608){
this.p = p;
this.ch = ch;
this.meta36608 = meta36608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36609,meta36608__$1){
var self__ = this;
var _36609__$1 = this;
return (new cljs.core.async.t_cljs$core$async36607(self__.p,self__.ch,meta36608__$1));
});

cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36609){
var self__ = this;
var _36609__$1 = this;
return self__.meta36608;
});

cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36607.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36607.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36608","meta36608",90520288,null)], null);
});

cljs.core.async.t_cljs$core$async36607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36607";

cljs.core.async.t_cljs$core$async36607.cljs$lang$ctorPrWriter = (function (this__26043__auto__,writer__26044__auto__,opt__26045__auto__){
return cljs.core._write.call(null,writer__26044__auto__,"cljs.core.async/t_cljs$core$async36607");
});

cljs.core.async.__GT_t_cljs$core$async36607 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36607(p__$1,ch__$1,meta36608){
return (new cljs.core.async.t_cljs$core$async36607(p__$1,ch__$1,meta36608));
});

}

return (new cljs.core.async.t_cljs$core$async36607(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args36610 = [];
var len__26545__auto___36654 = arguments.length;
var i__26546__auto___36655 = (0);
while(true){
if((i__26546__auto___36655 < len__26545__auto___36654)){
args36610.push((arguments[i__26546__auto___36655]));

var G__36656 = (i__26546__auto___36655 + (1));
i__26546__auto___36655 = G__36656;
continue;
} else {
}
break;
}

var G__36612 = args36610.length;
switch (G__36612) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36610.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34381__auto___36658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___36658,out){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___36658,out){
return (function (state_36633){
var state_val_36634 = (state_36633[(1)]);
if((state_val_36634 === (7))){
var inst_36629 = (state_36633[(2)]);
var state_36633__$1 = state_36633;
var statearr_36635_36659 = state_36633__$1;
(statearr_36635_36659[(2)] = inst_36629);

(statearr_36635_36659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (1))){
var state_36633__$1 = state_36633;
var statearr_36636_36660 = state_36633__$1;
(statearr_36636_36660[(2)] = null);

(statearr_36636_36660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (4))){
var inst_36615 = (state_36633[(7)]);
var inst_36615__$1 = (state_36633[(2)]);
var inst_36616 = (inst_36615__$1 == null);
var state_36633__$1 = (function (){var statearr_36637 = state_36633;
(statearr_36637[(7)] = inst_36615__$1);

return statearr_36637;
})();
if(cljs.core.truth_(inst_36616)){
var statearr_36638_36661 = state_36633__$1;
(statearr_36638_36661[(1)] = (5));

} else {
var statearr_36639_36662 = state_36633__$1;
(statearr_36639_36662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (6))){
var inst_36615 = (state_36633[(7)]);
var inst_36620 = p.call(null,inst_36615);
var state_36633__$1 = state_36633;
if(cljs.core.truth_(inst_36620)){
var statearr_36640_36663 = state_36633__$1;
(statearr_36640_36663[(1)] = (8));

} else {
var statearr_36641_36664 = state_36633__$1;
(statearr_36641_36664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (3))){
var inst_36631 = (state_36633[(2)]);
var state_36633__$1 = state_36633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36633__$1,inst_36631);
} else {
if((state_val_36634 === (2))){
var state_36633__$1 = state_36633;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36633__$1,(4),ch);
} else {
if((state_val_36634 === (11))){
var inst_36623 = (state_36633[(2)]);
var state_36633__$1 = state_36633;
var statearr_36642_36665 = state_36633__$1;
(statearr_36642_36665[(2)] = inst_36623);

(statearr_36642_36665[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (9))){
var state_36633__$1 = state_36633;
var statearr_36643_36666 = state_36633__$1;
(statearr_36643_36666[(2)] = null);

(statearr_36643_36666[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (5))){
var inst_36618 = cljs.core.async.close_BANG_.call(null,out);
var state_36633__$1 = state_36633;
var statearr_36644_36667 = state_36633__$1;
(statearr_36644_36667[(2)] = inst_36618);

(statearr_36644_36667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (10))){
var inst_36626 = (state_36633[(2)]);
var state_36633__$1 = (function (){var statearr_36645 = state_36633;
(statearr_36645[(8)] = inst_36626);

return statearr_36645;
})();
var statearr_36646_36668 = state_36633__$1;
(statearr_36646_36668[(2)] = null);

(statearr_36646_36668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36634 === (8))){
var inst_36615 = (state_36633[(7)]);
var state_36633__$1 = state_36633;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36633__$1,(11),out,inst_36615);
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
});})(c__34381__auto___36658,out))
;
return ((function (switch__34269__auto__,c__34381__auto___36658,out){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_36650 = [null,null,null,null,null,null,null,null,null];
(statearr_36650[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_36650[(1)] = (1));

return statearr_36650;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_36633){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_36633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e36651){if((e36651 instanceof Object)){
var ex__34273__auto__ = e36651;
var statearr_36652_36669 = state_36633;
(statearr_36652_36669[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36670 = state_36633;
state_36633 = G__36670;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_36633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_36633);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___36658,out))
})();
var state__34383__auto__ = (function (){var statearr_36653 = f__34382__auto__.call(null);
(statearr_36653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___36658);

return statearr_36653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___36658,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36671 = [];
var len__26545__auto___36674 = arguments.length;
var i__26546__auto___36675 = (0);
while(true){
if((i__26546__auto___36675 < len__26545__auto___36674)){
args36671.push((arguments[i__26546__auto___36675]));

var G__36676 = (i__26546__auto___36675 + (1));
i__26546__auto___36675 = G__36676;
continue;
} else {
}
break;
}

var G__36673 = args36671.length;
switch (G__36673) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36671.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__){
return (function (state_36843){
var state_val_36844 = (state_36843[(1)]);
if((state_val_36844 === (7))){
var inst_36839 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
var statearr_36845_36886 = state_36843__$1;
(statearr_36845_36886[(2)] = inst_36839);

(statearr_36845_36886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (20))){
var inst_36809 = (state_36843[(7)]);
var inst_36820 = (state_36843[(2)]);
var inst_36821 = cljs.core.next.call(null,inst_36809);
var inst_36795 = inst_36821;
var inst_36796 = null;
var inst_36797 = (0);
var inst_36798 = (0);
var state_36843__$1 = (function (){var statearr_36846 = state_36843;
(statearr_36846[(8)] = inst_36796);

(statearr_36846[(9)] = inst_36797);

(statearr_36846[(10)] = inst_36798);

(statearr_36846[(11)] = inst_36795);

(statearr_36846[(12)] = inst_36820);

return statearr_36846;
})();
var statearr_36847_36887 = state_36843__$1;
(statearr_36847_36887[(2)] = null);

(statearr_36847_36887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (1))){
var state_36843__$1 = state_36843;
var statearr_36848_36888 = state_36843__$1;
(statearr_36848_36888[(2)] = null);

(statearr_36848_36888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (4))){
var inst_36784 = (state_36843[(13)]);
var inst_36784__$1 = (state_36843[(2)]);
var inst_36785 = (inst_36784__$1 == null);
var state_36843__$1 = (function (){var statearr_36849 = state_36843;
(statearr_36849[(13)] = inst_36784__$1);

return statearr_36849;
})();
if(cljs.core.truth_(inst_36785)){
var statearr_36850_36889 = state_36843__$1;
(statearr_36850_36889[(1)] = (5));

} else {
var statearr_36851_36890 = state_36843__$1;
(statearr_36851_36890[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (15))){
var state_36843__$1 = state_36843;
var statearr_36855_36891 = state_36843__$1;
(statearr_36855_36891[(2)] = null);

(statearr_36855_36891[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (21))){
var state_36843__$1 = state_36843;
var statearr_36856_36892 = state_36843__$1;
(statearr_36856_36892[(2)] = null);

(statearr_36856_36892[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (13))){
var inst_36796 = (state_36843[(8)]);
var inst_36797 = (state_36843[(9)]);
var inst_36798 = (state_36843[(10)]);
var inst_36795 = (state_36843[(11)]);
var inst_36805 = (state_36843[(2)]);
var inst_36806 = (inst_36798 + (1));
var tmp36852 = inst_36796;
var tmp36853 = inst_36797;
var tmp36854 = inst_36795;
var inst_36795__$1 = tmp36854;
var inst_36796__$1 = tmp36852;
var inst_36797__$1 = tmp36853;
var inst_36798__$1 = inst_36806;
var state_36843__$1 = (function (){var statearr_36857 = state_36843;
(statearr_36857[(8)] = inst_36796__$1);

(statearr_36857[(14)] = inst_36805);

(statearr_36857[(9)] = inst_36797__$1);

(statearr_36857[(10)] = inst_36798__$1);

(statearr_36857[(11)] = inst_36795__$1);

return statearr_36857;
})();
var statearr_36858_36893 = state_36843__$1;
(statearr_36858_36893[(2)] = null);

(statearr_36858_36893[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (22))){
var state_36843__$1 = state_36843;
var statearr_36859_36894 = state_36843__$1;
(statearr_36859_36894[(2)] = null);

(statearr_36859_36894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (6))){
var inst_36784 = (state_36843[(13)]);
var inst_36793 = f.call(null,inst_36784);
var inst_36794 = cljs.core.seq.call(null,inst_36793);
var inst_36795 = inst_36794;
var inst_36796 = null;
var inst_36797 = (0);
var inst_36798 = (0);
var state_36843__$1 = (function (){var statearr_36860 = state_36843;
(statearr_36860[(8)] = inst_36796);

(statearr_36860[(9)] = inst_36797);

(statearr_36860[(10)] = inst_36798);

(statearr_36860[(11)] = inst_36795);

return statearr_36860;
})();
var statearr_36861_36895 = state_36843__$1;
(statearr_36861_36895[(2)] = null);

(statearr_36861_36895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (17))){
var inst_36809 = (state_36843[(7)]);
var inst_36813 = cljs.core.chunk_first.call(null,inst_36809);
var inst_36814 = cljs.core.chunk_rest.call(null,inst_36809);
var inst_36815 = cljs.core.count.call(null,inst_36813);
var inst_36795 = inst_36814;
var inst_36796 = inst_36813;
var inst_36797 = inst_36815;
var inst_36798 = (0);
var state_36843__$1 = (function (){var statearr_36862 = state_36843;
(statearr_36862[(8)] = inst_36796);

(statearr_36862[(9)] = inst_36797);

(statearr_36862[(10)] = inst_36798);

(statearr_36862[(11)] = inst_36795);

return statearr_36862;
})();
var statearr_36863_36896 = state_36843__$1;
(statearr_36863_36896[(2)] = null);

(statearr_36863_36896[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (3))){
var inst_36841 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36843__$1,inst_36841);
} else {
if((state_val_36844 === (12))){
var inst_36829 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
var statearr_36864_36897 = state_36843__$1;
(statearr_36864_36897[(2)] = inst_36829);

(statearr_36864_36897[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (2))){
var state_36843__$1 = state_36843;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36843__$1,(4),in$);
} else {
if((state_val_36844 === (23))){
var inst_36837 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
var statearr_36865_36898 = state_36843__$1;
(statearr_36865_36898[(2)] = inst_36837);

(statearr_36865_36898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (19))){
var inst_36824 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
var statearr_36866_36899 = state_36843__$1;
(statearr_36866_36899[(2)] = inst_36824);

(statearr_36866_36899[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (11))){
var inst_36795 = (state_36843[(11)]);
var inst_36809 = (state_36843[(7)]);
var inst_36809__$1 = cljs.core.seq.call(null,inst_36795);
var state_36843__$1 = (function (){var statearr_36867 = state_36843;
(statearr_36867[(7)] = inst_36809__$1);

return statearr_36867;
})();
if(inst_36809__$1){
var statearr_36868_36900 = state_36843__$1;
(statearr_36868_36900[(1)] = (14));

} else {
var statearr_36869_36901 = state_36843__$1;
(statearr_36869_36901[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (9))){
var inst_36831 = (state_36843[(2)]);
var inst_36832 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36843__$1 = (function (){var statearr_36870 = state_36843;
(statearr_36870[(15)] = inst_36831);

return statearr_36870;
})();
if(cljs.core.truth_(inst_36832)){
var statearr_36871_36902 = state_36843__$1;
(statearr_36871_36902[(1)] = (21));

} else {
var statearr_36872_36903 = state_36843__$1;
(statearr_36872_36903[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (5))){
var inst_36787 = cljs.core.async.close_BANG_.call(null,out);
var state_36843__$1 = state_36843;
var statearr_36873_36904 = state_36843__$1;
(statearr_36873_36904[(2)] = inst_36787);

(statearr_36873_36904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (14))){
var inst_36809 = (state_36843[(7)]);
var inst_36811 = cljs.core.chunked_seq_QMARK_.call(null,inst_36809);
var state_36843__$1 = state_36843;
if(inst_36811){
var statearr_36874_36905 = state_36843__$1;
(statearr_36874_36905[(1)] = (17));

} else {
var statearr_36875_36906 = state_36843__$1;
(statearr_36875_36906[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (16))){
var inst_36827 = (state_36843[(2)]);
var state_36843__$1 = state_36843;
var statearr_36876_36907 = state_36843__$1;
(statearr_36876_36907[(2)] = inst_36827);

(statearr_36876_36907[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36844 === (10))){
var inst_36796 = (state_36843[(8)]);
var inst_36798 = (state_36843[(10)]);
var inst_36803 = cljs.core._nth.call(null,inst_36796,inst_36798);
var state_36843__$1 = state_36843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36843__$1,(13),out,inst_36803);
} else {
if((state_val_36844 === (18))){
var inst_36809 = (state_36843[(7)]);
var inst_36818 = cljs.core.first.call(null,inst_36809);
var state_36843__$1 = state_36843;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36843__$1,(20),out,inst_36818);
} else {
if((state_val_36844 === (8))){
var inst_36797 = (state_36843[(9)]);
var inst_36798 = (state_36843[(10)]);
var inst_36800 = (inst_36798 < inst_36797);
var inst_36801 = inst_36800;
var state_36843__$1 = state_36843;
if(cljs.core.truth_(inst_36801)){
var statearr_36877_36908 = state_36843__$1;
(statearr_36877_36908[(1)] = (10));

} else {
var statearr_36878_36909 = state_36843__$1;
(statearr_36878_36909[(1)] = (11));

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
});})(c__34381__auto__))
;
return ((function (switch__34269__auto__,c__34381__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34270__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34270__auto____0 = (function (){
var statearr_36882 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36882[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34270__auto__);

(statearr_36882[(1)] = (1));

return statearr_36882;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34270__auto____1 = (function (state_36843){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_36843);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e36883){if((e36883 instanceof Object)){
var ex__34273__auto__ = e36883;
var statearr_36884_36910 = state_36843;
(statearr_36884_36910[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36843);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36911 = state_36843;
state_36843 = G__36911;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34270__auto__ = function(state_36843){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34270__auto____1.call(this,state_36843);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34270__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34270__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__))
})();
var state__34383__auto__ = (function (){var statearr_36885 = f__34382__auto__.call(null);
(statearr_36885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_36885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__))
);

return c__34381__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36912 = [];
var len__26545__auto___36915 = arguments.length;
var i__26546__auto___36916 = (0);
while(true){
if((i__26546__auto___36916 < len__26545__auto___36915)){
args36912.push((arguments[i__26546__auto___36916]));

var G__36917 = (i__26546__auto___36916 + (1));
i__26546__auto___36916 = G__36917;
continue;
} else {
}
break;
}

var G__36914 = args36912.length;
switch (G__36914) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36912.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args36919 = [];
var len__26545__auto___36922 = arguments.length;
var i__26546__auto___36923 = (0);
while(true){
if((i__26546__auto___36923 < len__26545__auto___36922)){
args36919.push((arguments[i__26546__auto___36923]));

var G__36924 = (i__26546__auto___36923 + (1));
i__26546__auto___36923 = G__36924;
continue;
} else {
}
break;
}

var G__36921 = args36919.length;
switch (G__36921) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36919.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args36926 = [];
var len__26545__auto___36977 = arguments.length;
var i__26546__auto___36978 = (0);
while(true){
if((i__26546__auto___36978 < len__26545__auto___36977)){
args36926.push((arguments[i__26546__auto___36978]));

var G__36979 = (i__26546__auto___36978 + (1));
i__26546__auto___36978 = G__36979;
continue;
} else {
}
break;
}

var G__36928 = args36926.length;
switch (G__36928) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36926.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34381__auto___36981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___36981,out){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___36981,out){
return (function (state_36952){
var state_val_36953 = (state_36952[(1)]);
if((state_val_36953 === (7))){
var inst_36947 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36954_36982 = state_36952__$1;
(statearr_36954_36982[(2)] = inst_36947);

(statearr_36954_36982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (1))){
var inst_36929 = null;
var state_36952__$1 = (function (){var statearr_36955 = state_36952;
(statearr_36955[(7)] = inst_36929);

return statearr_36955;
})();
var statearr_36956_36983 = state_36952__$1;
(statearr_36956_36983[(2)] = null);

(statearr_36956_36983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (4))){
var inst_36932 = (state_36952[(8)]);
var inst_36932__$1 = (state_36952[(2)]);
var inst_36933 = (inst_36932__$1 == null);
var inst_36934 = cljs.core.not.call(null,inst_36933);
var state_36952__$1 = (function (){var statearr_36957 = state_36952;
(statearr_36957[(8)] = inst_36932__$1);

return statearr_36957;
})();
if(inst_36934){
var statearr_36958_36984 = state_36952__$1;
(statearr_36958_36984[(1)] = (5));

} else {
var statearr_36959_36985 = state_36952__$1;
(statearr_36959_36985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (6))){
var state_36952__$1 = state_36952;
var statearr_36960_36986 = state_36952__$1;
(statearr_36960_36986[(2)] = null);

(statearr_36960_36986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (3))){
var inst_36949 = (state_36952[(2)]);
var inst_36950 = cljs.core.async.close_BANG_.call(null,out);
var state_36952__$1 = (function (){var statearr_36961 = state_36952;
(statearr_36961[(9)] = inst_36949);

return statearr_36961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36952__$1,inst_36950);
} else {
if((state_val_36953 === (2))){
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36952__$1,(4),ch);
} else {
if((state_val_36953 === (11))){
var inst_36932 = (state_36952[(8)]);
var inst_36941 = (state_36952[(2)]);
var inst_36929 = inst_36932;
var state_36952__$1 = (function (){var statearr_36962 = state_36952;
(statearr_36962[(10)] = inst_36941);

(statearr_36962[(7)] = inst_36929);

return statearr_36962;
})();
var statearr_36963_36987 = state_36952__$1;
(statearr_36963_36987[(2)] = null);

(statearr_36963_36987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (9))){
var inst_36932 = (state_36952[(8)]);
var state_36952__$1 = state_36952;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36952__$1,(11),out,inst_36932);
} else {
if((state_val_36953 === (5))){
var inst_36932 = (state_36952[(8)]);
var inst_36929 = (state_36952[(7)]);
var inst_36936 = cljs.core._EQ_.call(null,inst_36932,inst_36929);
var state_36952__$1 = state_36952;
if(inst_36936){
var statearr_36965_36988 = state_36952__$1;
(statearr_36965_36988[(1)] = (8));

} else {
var statearr_36966_36989 = state_36952__$1;
(statearr_36966_36989[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (10))){
var inst_36944 = (state_36952[(2)]);
var state_36952__$1 = state_36952;
var statearr_36967_36990 = state_36952__$1;
(statearr_36967_36990[(2)] = inst_36944);

(statearr_36967_36990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36953 === (8))){
var inst_36929 = (state_36952[(7)]);
var tmp36964 = inst_36929;
var inst_36929__$1 = tmp36964;
var state_36952__$1 = (function (){var statearr_36968 = state_36952;
(statearr_36968[(7)] = inst_36929__$1);

return statearr_36968;
})();
var statearr_36969_36991 = state_36952__$1;
(statearr_36969_36991[(2)] = null);

(statearr_36969_36991[(1)] = (2));


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
});})(c__34381__auto___36981,out))
;
return ((function (switch__34269__auto__,c__34381__auto___36981,out){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_36973 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36973[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_36973[(1)] = (1));

return statearr_36973;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_36952){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_36952);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e36974){if((e36974 instanceof Object)){
var ex__34273__auto__ = e36974;
var statearr_36975_36992 = state_36952;
(statearr_36975_36992[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36993 = state_36952;
state_36952 = G__36993;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_36952){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_36952);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___36981,out))
})();
var state__34383__auto__ = (function (){var statearr_36976 = f__34382__auto__.call(null);
(statearr_36976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___36981);

return statearr_36976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___36981,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36994 = [];
var len__26545__auto___37064 = arguments.length;
var i__26546__auto___37065 = (0);
while(true){
if((i__26546__auto___37065 < len__26545__auto___37064)){
args36994.push((arguments[i__26546__auto___37065]));

var G__37066 = (i__26546__auto___37065 + (1));
i__26546__auto___37065 = G__37066;
continue;
} else {
}
break;
}

var G__36996 = args36994.length;
switch (G__36996) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args36994.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34381__auto___37068 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___37068,out){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___37068,out){
return (function (state_37034){
var state_val_37035 = (state_37034[(1)]);
if((state_val_37035 === (7))){
var inst_37030 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37036_37069 = state_37034__$1;
(statearr_37036_37069[(2)] = inst_37030);

(statearr_37036_37069[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (1))){
var inst_36997 = (new Array(n));
var inst_36998 = inst_36997;
var inst_36999 = (0);
var state_37034__$1 = (function (){var statearr_37037 = state_37034;
(statearr_37037[(7)] = inst_36998);

(statearr_37037[(8)] = inst_36999);

return statearr_37037;
})();
var statearr_37038_37070 = state_37034__$1;
(statearr_37038_37070[(2)] = null);

(statearr_37038_37070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (4))){
var inst_37002 = (state_37034[(9)]);
var inst_37002__$1 = (state_37034[(2)]);
var inst_37003 = (inst_37002__$1 == null);
var inst_37004 = cljs.core.not.call(null,inst_37003);
var state_37034__$1 = (function (){var statearr_37039 = state_37034;
(statearr_37039[(9)] = inst_37002__$1);

return statearr_37039;
})();
if(inst_37004){
var statearr_37040_37071 = state_37034__$1;
(statearr_37040_37071[(1)] = (5));

} else {
var statearr_37041_37072 = state_37034__$1;
(statearr_37041_37072[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (15))){
var inst_37024 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37042_37073 = state_37034__$1;
(statearr_37042_37073[(2)] = inst_37024);

(statearr_37042_37073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (13))){
var state_37034__$1 = state_37034;
var statearr_37043_37074 = state_37034__$1;
(statearr_37043_37074[(2)] = null);

(statearr_37043_37074[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (6))){
var inst_36999 = (state_37034[(8)]);
var inst_37020 = (inst_36999 > (0));
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_37020)){
var statearr_37044_37075 = state_37034__$1;
(statearr_37044_37075[(1)] = (12));

} else {
var statearr_37045_37076 = state_37034__$1;
(statearr_37045_37076[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (3))){
var inst_37032 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37034__$1,inst_37032);
} else {
if((state_val_37035 === (12))){
var inst_36998 = (state_37034[(7)]);
var inst_37022 = cljs.core.vec.call(null,inst_36998);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37034__$1,(15),out,inst_37022);
} else {
if((state_val_37035 === (2))){
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37034__$1,(4),ch);
} else {
if((state_val_37035 === (11))){
var inst_37014 = (state_37034[(2)]);
var inst_37015 = (new Array(n));
var inst_36998 = inst_37015;
var inst_36999 = (0);
var state_37034__$1 = (function (){var statearr_37046 = state_37034;
(statearr_37046[(7)] = inst_36998);

(statearr_37046[(10)] = inst_37014);

(statearr_37046[(8)] = inst_36999);

return statearr_37046;
})();
var statearr_37047_37077 = state_37034__$1;
(statearr_37047_37077[(2)] = null);

(statearr_37047_37077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (9))){
var inst_36998 = (state_37034[(7)]);
var inst_37012 = cljs.core.vec.call(null,inst_36998);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37034__$1,(11),out,inst_37012);
} else {
if((state_val_37035 === (5))){
var inst_36998 = (state_37034[(7)]);
var inst_37002 = (state_37034[(9)]);
var inst_36999 = (state_37034[(8)]);
var inst_37007 = (state_37034[(11)]);
var inst_37006 = (inst_36998[inst_36999] = inst_37002);
var inst_37007__$1 = (inst_36999 + (1));
var inst_37008 = (inst_37007__$1 < n);
var state_37034__$1 = (function (){var statearr_37048 = state_37034;
(statearr_37048[(12)] = inst_37006);

(statearr_37048[(11)] = inst_37007__$1);

return statearr_37048;
})();
if(cljs.core.truth_(inst_37008)){
var statearr_37049_37078 = state_37034__$1;
(statearr_37049_37078[(1)] = (8));

} else {
var statearr_37050_37079 = state_37034__$1;
(statearr_37050_37079[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (14))){
var inst_37027 = (state_37034[(2)]);
var inst_37028 = cljs.core.async.close_BANG_.call(null,out);
var state_37034__$1 = (function (){var statearr_37052 = state_37034;
(statearr_37052[(13)] = inst_37027);

return statearr_37052;
})();
var statearr_37053_37080 = state_37034__$1;
(statearr_37053_37080[(2)] = inst_37028);

(statearr_37053_37080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (10))){
var inst_37018 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37054_37081 = state_37034__$1;
(statearr_37054_37081[(2)] = inst_37018);

(statearr_37054_37081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (8))){
var inst_36998 = (state_37034[(7)]);
var inst_37007 = (state_37034[(11)]);
var tmp37051 = inst_36998;
var inst_36998__$1 = tmp37051;
var inst_36999 = inst_37007;
var state_37034__$1 = (function (){var statearr_37055 = state_37034;
(statearr_37055[(7)] = inst_36998__$1);

(statearr_37055[(8)] = inst_36999);

return statearr_37055;
})();
var statearr_37056_37082 = state_37034__$1;
(statearr_37056_37082[(2)] = null);

(statearr_37056_37082[(1)] = (2));


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
});})(c__34381__auto___37068,out))
;
return ((function (switch__34269__auto__,c__34381__auto___37068,out){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_37060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37060[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_37060[(1)] = (1));

return statearr_37060;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_37034){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_37034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e37061){if((e37061 instanceof Object)){
var ex__34273__auto__ = e37061;
var statearr_37062_37083 = state_37034;
(statearr_37062_37083[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37084 = state_37034;
state_37034 = G__37084;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_37034){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_37034);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___37068,out))
})();
var state__34383__auto__ = (function (){var statearr_37063 = f__34382__auto__.call(null);
(statearr_37063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___37068);

return statearr_37063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___37068,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37085 = [];
var len__26545__auto___37159 = arguments.length;
var i__26546__auto___37160 = (0);
while(true){
if((i__26546__auto___37160 < len__26545__auto___37159)){
args37085.push((arguments[i__26546__auto___37160]));

var G__37161 = (i__26546__auto___37160 + (1));
i__26546__auto___37160 = G__37161;
continue;
} else {
}
break;
}

var G__37087 = args37085.length;
switch (G__37087) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args37085.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34381__auto___37163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___37163,out){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___37163,out){
return (function (state_37129){
var state_val_37130 = (state_37129[(1)]);
if((state_val_37130 === (7))){
var inst_37125 = (state_37129[(2)]);
var state_37129__$1 = state_37129;
var statearr_37131_37164 = state_37129__$1;
(statearr_37131_37164[(2)] = inst_37125);

(statearr_37131_37164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (1))){
var inst_37088 = [];
var inst_37089 = inst_37088;
var inst_37090 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37129__$1 = (function (){var statearr_37132 = state_37129;
(statearr_37132[(7)] = inst_37090);

(statearr_37132[(8)] = inst_37089);

return statearr_37132;
})();
var statearr_37133_37165 = state_37129__$1;
(statearr_37133_37165[(2)] = null);

(statearr_37133_37165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (4))){
var inst_37093 = (state_37129[(9)]);
var inst_37093__$1 = (state_37129[(2)]);
var inst_37094 = (inst_37093__$1 == null);
var inst_37095 = cljs.core.not.call(null,inst_37094);
var state_37129__$1 = (function (){var statearr_37134 = state_37129;
(statearr_37134[(9)] = inst_37093__$1);

return statearr_37134;
})();
if(inst_37095){
var statearr_37135_37166 = state_37129__$1;
(statearr_37135_37166[(1)] = (5));

} else {
var statearr_37136_37167 = state_37129__$1;
(statearr_37136_37167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (15))){
var inst_37119 = (state_37129[(2)]);
var state_37129__$1 = state_37129;
var statearr_37137_37168 = state_37129__$1;
(statearr_37137_37168[(2)] = inst_37119);

(statearr_37137_37168[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (13))){
var state_37129__$1 = state_37129;
var statearr_37138_37169 = state_37129__$1;
(statearr_37138_37169[(2)] = null);

(statearr_37138_37169[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (6))){
var inst_37089 = (state_37129[(8)]);
var inst_37114 = inst_37089.length;
var inst_37115 = (inst_37114 > (0));
var state_37129__$1 = state_37129;
if(cljs.core.truth_(inst_37115)){
var statearr_37139_37170 = state_37129__$1;
(statearr_37139_37170[(1)] = (12));

} else {
var statearr_37140_37171 = state_37129__$1;
(statearr_37140_37171[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (3))){
var inst_37127 = (state_37129[(2)]);
var state_37129__$1 = state_37129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37129__$1,inst_37127);
} else {
if((state_val_37130 === (12))){
var inst_37089 = (state_37129[(8)]);
var inst_37117 = cljs.core.vec.call(null,inst_37089);
var state_37129__$1 = state_37129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37129__$1,(15),out,inst_37117);
} else {
if((state_val_37130 === (2))){
var state_37129__$1 = state_37129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37129__$1,(4),ch);
} else {
if((state_val_37130 === (11))){
var inst_37093 = (state_37129[(9)]);
var inst_37097 = (state_37129[(10)]);
var inst_37107 = (state_37129[(2)]);
var inst_37108 = [];
var inst_37109 = inst_37108.push(inst_37093);
var inst_37089 = inst_37108;
var inst_37090 = inst_37097;
var state_37129__$1 = (function (){var statearr_37141 = state_37129;
(statearr_37141[(7)] = inst_37090);

(statearr_37141[(11)] = inst_37107);

(statearr_37141[(8)] = inst_37089);

(statearr_37141[(12)] = inst_37109);

return statearr_37141;
})();
var statearr_37142_37172 = state_37129__$1;
(statearr_37142_37172[(2)] = null);

(statearr_37142_37172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (9))){
var inst_37089 = (state_37129[(8)]);
var inst_37105 = cljs.core.vec.call(null,inst_37089);
var state_37129__$1 = state_37129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37129__$1,(11),out,inst_37105);
} else {
if((state_val_37130 === (5))){
var inst_37090 = (state_37129[(7)]);
var inst_37093 = (state_37129[(9)]);
var inst_37097 = (state_37129[(10)]);
var inst_37097__$1 = f.call(null,inst_37093);
var inst_37098 = cljs.core._EQ_.call(null,inst_37097__$1,inst_37090);
var inst_37099 = cljs.core.keyword_identical_QMARK_.call(null,inst_37090,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37100 = (inst_37098) || (inst_37099);
var state_37129__$1 = (function (){var statearr_37143 = state_37129;
(statearr_37143[(10)] = inst_37097__$1);

return statearr_37143;
})();
if(cljs.core.truth_(inst_37100)){
var statearr_37144_37173 = state_37129__$1;
(statearr_37144_37173[(1)] = (8));

} else {
var statearr_37145_37174 = state_37129__$1;
(statearr_37145_37174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (14))){
var inst_37122 = (state_37129[(2)]);
var inst_37123 = cljs.core.async.close_BANG_.call(null,out);
var state_37129__$1 = (function (){var statearr_37147 = state_37129;
(statearr_37147[(13)] = inst_37122);

return statearr_37147;
})();
var statearr_37148_37175 = state_37129__$1;
(statearr_37148_37175[(2)] = inst_37123);

(statearr_37148_37175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (10))){
var inst_37112 = (state_37129[(2)]);
var state_37129__$1 = state_37129;
var statearr_37149_37176 = state_37129__$1;
(statearr_37149_37176[(2)] = inst_37112);

(statearr_37149_37176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37130 === (8))){
var inst_37093 = (state_37129[(9)]);
var inst_37089 = (state_37129[(8)]);
var inst_37097 = (state_37129[(10)]);
var inst_37102 = inst_37089.push(inst_37093);
var tmp37146 = inst_37089;
var inst_37089__$1 = tmp37146;
var inst_37090 = inst_37097;
var state_37129__$1 = (function (){var statearr_37150 = state_37129;
(statearr_37150[(7)] = inst_37090);

(statearr_37150[(8)] = inst_37089__$1);

(statearr_37150[(14)] = inst_37102);

return statearr_37150;
})();
var statearr_37151_37177 = state_37129__$1;
(statearr_37151_37177[(2)] = null);

(statearr_37151_37177[(1)] = (2));


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
});})(c__34381__auto___37163,out))
;
return ((function (switch__34269__auto__,c__34381__auto___37163,out){
return (function() {
var cljs$core$async$state_machine__34270__auto__ = null;
var cljs$core$async$state_machine__34270__auto____0 = (function (){
var statearr_37155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37155[(0)] = cljs$core$async$state_machine__34270__auto__);

(statearr_37155[(1)] = (1));

return statearr_37155;
});
var cljs$core$async$state_machine__34270__auto____1 = (function (state_37129){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_37129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e37156){if((e37156 instanceof Object)){
var ex__34273__auto__ = e37156;
var statearr_37157_37178 = state_37129;
(statearr_37157_37178[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37179 = state_37129;
state_37129 = G__37179;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
cljs$core$async$state_machine__34270__auto__ = function(state_37129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34270__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34270__auto____1.call(this,state_37129);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34270__auto____0;
cljs$core$async$state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34270__auto____1;
return cljs$core$async$state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___37163,out))
})();
var state__34383__auto__ = (function (){var statearr_37158 = f__34382__auto__.call(null);
(statearr_37158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___37163);

return statearr_37158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___37163,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1502108326907