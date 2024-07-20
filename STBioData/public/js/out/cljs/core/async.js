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
var args16819 = [];
var len__8143__auto___16825 = arguments.length;
var i__8144__auto___16826 = (0);
while(true){
if((i__8144__auto___16826 < len__8143__auto___16825)){
args16819.push((arguments[i__8144__auto___16826]));

var G__16827 = (i__8144__auto___16826 + (1));
i__8144__auto___16826 = G__16827;
continue;
} else {
}
break;
}

var G__16821 = args16819.length;
switch (G__16821) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16819.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async16822 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16822 = (function (f,blockable,meta16823){
this.f = f;
this.blockable = blockable;
this.meta16823 = meta16823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16824,meta16823__$1){
var self__ = this;
var _16824__$1 = this;
return (new cljs.core.async.t_cljs$core$async16822(self__.f,self__.blockable,meta16823__$1));
});

cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16824){
var self__ = this;
var _16824__$1 = this;
return self__.meta16823;
});

cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async16822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async16822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta16823","meta16823",-805982157,null)], null);
});

cljs.core.async.t_cljs$core$async16822.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16822";

cljs.core.async.t_cljs$core$async16822.cljs$lang$ctorPrWriter = (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async16822");
});

cljs.core.async.__GT_t_cljs$core$async16822 = (function cljs$core$async$__GT_t_cljs$core$async16822(f__$1,blockable__$1,meta16823){
return (new cljs.core.async.t_cljs$core$async16822(f__$1,blockable__$1,meta16823));
});

}

return (new cljs.core.async.t_cljs$core$async16822(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args16831 = [];
var len__8143__auto___16834 = arguments.length;
var i__8144__auto___16835 = (0);
while(true){
if((i__8144__auto___16835 < len__8143__auto___16834)){
args16831.push((arguments[i__8144__auto___16835]));

var G__16836 = (i__8144__auto___16835 + (1));
i__8144__auto___16835 = G__16836;
continue;
} else {
}
break;
}

var G__16833 = args16831.length;
switch (G__16833) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16831.length)].join('')));

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
var args16838 = [];
var len__8143__auto___16841 = arguments.length;
var i__8144__auto___16842 = (0);
while(true){
if((i__8144__auto___16842 < len__8143__auto___16841)){
args16838.push((arguments[i__8144__auto___16842]));

var G__16843 = (i__8144__auto___16842 + (1));
i__8144__auto___16842 = G__16843;
continue;
} else {
}
break;
}

var G__16840 = args16838.length;
switch (G__16840) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16838.length)].join('')));

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
var args16845 = [];
var len__8143__auto___16848 = arguments.length;
var i__8144__auto___16849 = (0);
while(true){
if((i__8144__auto___16849 < len__8143__auto___16848)){
args16845.push((arguments[i__8144__auto___16849]));

var G__16850 = (i__8144__auto___16849 + (1));
i__8144__auto___16849 = G__16850;
continue;
} else {
}
break;
}

var G__16847 = args16845.length;
switch (G__16847) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16845.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_16852 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_16852);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_16852,ret){
return (function (){
return fn1.call(null,val_16852);
});})(val_16852,ret))
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
var args16853 = [];
var len__8143__auto___16856 = arguments.length;
var i__8144__auto___16857 = (0);
while(true){
if((i__8144__auto___16857 < len__8143__auto___16856)){
args16853.push((arguments[i__8144__auto___16857]));

var G__16858 = (i__8144__auto___16857 + (1));
i__8144__auto___16857 = G__16858;
continue;
} else {
}
break;
}

var G__16855 = args16853.length;
switch (G__16855) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16853.length)].join('')));

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
var n__7953__auto___16860 = n;
var x_16861 = (0);
while(true){
if((x_16861 < n__7953__auto___16860)){
(a[x_16861] = (0));

var G__16862 = (x_16861 + (1));
x_16861 = G__16862;
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

var G__16863 = (i + (1));
i = G__16863;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async16867 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16867 = (function (flag,meta16868){
this.flag = flag;
this.meta16868 = meta16868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16869,meta16868__$1){
var self__ = this;
var _16869__$1 = this;
return (new cljs.core.async.t_cljs$core$async16867(self__.flag,meta16868__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16869){
var self__ = this;
var _16869__$1 = this;
return self__.meta16868;
});})(flag))
;

cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16867.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async16867.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta16868","meta16868",-2026350883,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async16867.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16867";

cljs.core.async.t_cljs$core$async16867.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async16867");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async16867 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async16867(flag__$1,meta16868){
return (new cljs.core.async.t_cljs$core$async16867(flag__$1,meta16868));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async16867(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async16873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16873 = (function (flag,cb,meta16874){
this.flag = flag;
this.cb = cb;
this.meta16874 = meta16874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16875,meta16874__$1){
var self__ = this;
var _16875__$1 = this;
return (new cljs.core.async.t_cljs$core$async16873(self__.flag,self__.cb,meta16874__$1));
});

cljs.core.async.t_cljs$core$async16873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16875){
var self__ = this;
var _16875__$1 = this;
return self__.meta16874;
});

cljs.core.async.t_cljs$core$async16873.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async16873.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async16873.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async16873.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async16873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta16874","meta16874",-1173811132,null)], null);
});

cljs.core.async.t_cljs$core$async16873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16873";

cljs.core.async.t_cljs$core$async16873.cljs$lang$ctorPrWriter = (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async16873");
});

cljs.core.async.__GT_t_cljs$core$async16873 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async16873(flag__$1,cb__$1,meta16874){
return (new cljs.core.async.t_cljs$core$async16873(flag__$1,cb__$1,meta16874));
});

}

return (new cljs.core.async.t_cljs$core$async16873(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__16876_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16876_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__16877_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16877_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7030__auto__ = wport;
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16878 = (i + (1));
i = G__16878;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7030__auto__ = ret;
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7018__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7018__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7018__auto__;
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
var args__8150__auto__ = [];
var len__8143__auto___16884 = arguments.length;
var i__8144__auto___16885 = (0);
while(true){
if((i__8144__auto___16885 < len__8143__auto___16884)){
args__8150__auto__.push((arguments[i__8144__auto___16885]));

var G__16886 = (i__8144__auto___16885 + (1));
i__8144__auto___16885 = G__16886;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((1) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8151__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__16881){
var map__16882 = p__16881;
var map__16882__$1 = ((((!((map__16882 == null)))?((((map__16882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16882):map__16882);
var opts = map__16882__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq16879){
var G__16880 = cljs.core.first.call(null,seq16879);
var seq16879__$1 = cljs.core.next.call(null,seq16879);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16880,seq16879__$1);
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
var args16887 = [];
var len__8143__auto___16937 = arguments.length;
var i__8144__auto___16938 = (0);
while(true){
if((i__8144__auto___16938 < len__8143__auto___16937)){
args16887.push((arguments[i__8144__auto___16938]));

var G__16939 = (i__8144__auto___16938 + (1));
i__8144__auto___16938 = G__16939;
continue;
} else {
}
break;
}

var G__16889 = args16887.length;
switch (G__16889) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16887.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16774__auto___16941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___16941){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___16941){
return (function (state_16913){
var state_val_16914 = (state_16913[(1)]);
if((state_val_16914 === (7))){
var inst_16909 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
var statearr_16915_16942 = state_16913__$1;
(statearr_16915_16942[(2)] = inst_16909);

(statearr_16915_16942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (1))){
var state_16913__$1 = state_16913;
var statearr_16916_16943 = state_16913__$1;
(statearr_16916_16943[(2)] = null);

(statearr_16916_16943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (4))){
var inst_16892 = (state_16913[(7)]);
var inst_16892__$1 = (state_16913[(2)]);
var inst_16893 = (inst_16892__$1 == null);
var state_16913__$1 = (function (){var statearr_16917 = state_16913;
(statearr_16917[(7)] = inst_16892__$1);

return statearr_16917;
})();
if(cljs.core.truth_(inst_16893)){
var statearr_16918_16944 = state_16913__$1;
(statearr_16918_16944[(1)] = (5));

} else {
var statearr_16919_16945 = state_16913__$1;
(statearr_16919_16945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (13))){
var state_16913__$1 = state_16913;
var statearr_16920_16946 = state_16913__$1;
(statearr_16920_16946[(2)] = null);

(statearr_16920_16946[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (6))){
var inst_16892 = (state_16913[(7)]);
var state_16913__$1 = state_16913;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16913__$1,(11),to,inst_16892);
} else {
if((state_val_16914 === (3))){
var inst_16911 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16913__$1,inst_16911);
} else {
if((state_val_16914 === (12))){
var state_16913__$1 = state_16913;
var statearr_16921_16947 = state_16913__$1;
(statearr_16921_16947[(2)] = null);

(statearr_16921_16947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (2))){
var state_16913__$1 = state_16913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16913__$1,(4),from);
} else {
if((state_val_16914 === (11))){
var inst_16902 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
if(cljs.core.truth_(inst_16902)){
var statearr_16922_16948 = state_16913__$1;
(statearr_16922_16948[(1)] = (12));

} else {
var statearr_16923_16949 = state_16913__$1;
(statearr_16923_16949[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (9))){
var state_16913__$1 = state_16913;
var statearr_16924_16950 = state_16913__$1;
(statearr_16924_16950[(2)] = null);

(statearr_16924_16950[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (5))){
var state_16913__$1 = state_16913;
if(cljs.core.truth_(close_QMARK_)){
var statearr_16925_16951 = state_16913__$1;
(statearr_16925_16951[(1)] = (8));

} else {
var statearr_16926_16952 = state_16913__$1;
(statearr_16926_16952[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (14))){
var inst_16907 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
var statearr_16927_16953 = state_16913__$1;
(statearr_16927_16953[(2)] = inst_16907);

(statearr_16927_16953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (10))){
var inst_16899 = (state_16913[(2)]);
var state_16913__$1 = state_16913;
var statearr_16928_16954 = state_16913__$1;
(statearr_16928_16954[(2)] = inst_16899);

(statearr_16928_16954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16914 === (8))){
var inst_16896 = cljs.core.async.close_BANG_.call(null,to);
var state_16913__$1 = state_16913;
var statearr_16929_16955 = state_16913__$1;
(statearr_16929_16955[(2)] = inst_16896);

(statearr_16929_16955[(1)] = (10));


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
});})(c__16774__auto___16941))
;
return ((function (switch__16662__auto__,c__16774__auto___16941){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_16933 = [null,null,null,null,null,null,null,null];
(statearr_16933[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_16933[(1)] = (1));

return statearr_16933;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_16913){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_16913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e16934){if((e16934 instanceof Object)){
var ex__16666__auto__ = e16934;
var statearr_16935_16956 = state_16913;
(statearr_16935_16956[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16934;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16957 = state_16913;
state_16913 = G__16957;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_16913){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_16913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___16941))
})();
var state__16776__auto__ = (function (){var statearr_16936 = f__16775__auto__.call(null);
(statearr_16936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___16941);

return statearr_16936;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___16941))
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
return (function (p__17145){
var vec__17146 = p__17145;
var v = cljs.core.nth.call(null,vec__17146,(0),null);
var p = cljs.core.nth.call(null,vec__17146,(1),null);
var job = vec__17146;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16774__auto___17332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___17332,res,vec__17146,v,p,job,jobs,results){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___17332,res,vec__17146,v,p,job,jobs,results){
return (function (state_17153){
var state_val_17154 = (state_17153[(1)]);
if((state_val_17154 === (1))){
var state_17153__$1 = state_17153;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17153__$1,(2),res,v);
} else {
if((state_val_17154 === (2))){
var inst_17150 = (state_17153[(2)]);
var inst_17151 = cljs.core.async.close_BANG_.call(null,res);
var state_17153__$1 = (function (){var statearr_17155 = state_17153;
(statearr_17155[(7)] = inst_17150);

return statearr_17155;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17153__$1,inst_17151);
} else {
return null;
}
}
});})(c__16774__auto___17332,res,vec__17146,v,p,job,jobs,results))
;
return ((function (switch__16662__auto__,c__16774__auto___17332,res,vec__17146,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0 = (function (){
var statearr_17159 = [null,null,null,null,null,null,null,null];
(statearr_17159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__);

(statearr_17159[(1)] = (1));

return statearr_17159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1 = (function (state_17153){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_17153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e17160){if((e17160 instanceof Object)){
var ex__16666__auto__ = e17160;
var statearr_17161_17333 = state_17153;
(statearr_17161_17333[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17160;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17334 = state_17153;
state_17153 = G__17334;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = function(state_17153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1.call(this,state_17153);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___17332,res,vec__17146,v,p,job,jobs,results))
})();
var state__16776__auto__ = (function (){var statearr_17162 = f__16775__auto__.call(null);
(statearr_17162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___17332);

return statearr_17162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___17332,res,vec__17146,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__17163){
var vec__17164 = p__17163;
var v = cljs.core.nth.call(null,vec__17164,(0),null);
var p = cljs.core.nth.call(null,vec__17164,(1),null);
var job = vec__17164;
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
var n__7953__auto___17335 = n;
var __17336 = (0);
while(true){
if((__17336 < n__7953__auto___17335)){
var G__17167_17337 = type;
var G__17167_17338__$1 = (((G__17167_17337 instanceof cljs.core.Keyword))?G__17167_17337.fqn:null);
switch (G__17167_17338__$1) {
case "compute":
var c__16774__auto___17340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17336,c__16774__auto___17340,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (__17336,c__16774__auto___17340,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async){
return (function (state_17180){
var state_val_17181 = (state_17180[(1)]);
if((state_val_17181 === (1))){
var state_17180__$1 = state_17180;
var statearr_17182_17341 = state_17180__$1;
(statearr_17182_17341[(2)] = null);

(statearr_17182_17341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (2))){
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17180__$1,(4),jobs);
} else {
if((state_val_17181 === (3))){
var inst_17178 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17180__$1,inst_17178);
} else {
if((state_val_17181 === (4))){
var inst_17170 = (state_17180[(2)]);
var inst_17171 = process.call(null,inst_17170);
var state_17180__$1 = state_17180;
if(cljs.core.truth_(inst_17171)){
var statearr_17183_17342 = state_17180__$1;
(statearr_17183_17342[(1)] = (5));

} else {
var statearr_17184_17343 = state_17180__$1;
(statearr_17184_17343[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (5))){
var state_17180__$1 = state_17180;
var statearr_17185_17344 = state_17180__$1;
(statearr_17185_17344[(2)] = null);

(statearr_17185_17344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (6))){
var state_17180__$1 = state_17180;
var statearr_17186_17345 = state_17180__$1;
(statearr_17186_17345[(2)] = null);

(statearr_17186_17345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17181 === (7))){
var inst_17176 = (state_17180[(2)]);
var state_17180__$1 = state_17180;
var statearr_17187_17346 = state_17180__$1;
(statearr_17187_17346[(2)] = inst_17176);

(statearr_17187_17346[(1)] = (3));


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
});})(__17336,c__16774__auto___17340,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async))
;
return ((function (__17336,switch__16662__auto__,c__16774__auto___17340,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0 = (function (){
var statearr_17191 = [null,null,null,null,null,null,null];
(statearr_17191[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__);

(statearr_17191[(1)] = (1));

return statearr_17191;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1 = (function (state_17180){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_17180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e17192){if((e17192 instanceof Object)){
var ex__16666__auto__ = e17192;
var statearr_17193_17347 = state_17180;
(statearr_17193_17347[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17348 = state_17180;
state_17180 = G__17348;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = function(state_17180){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1.call(this,state_17180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__;
})()
;})(__17336,switch__16662__auto__,c__16774__auto___17340,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async))
})();
var state__16776__auto__ = (function (){var statearr_17194 = f__16775__auto__.call(null);
(statearr_17194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___17340);

return statearr_17194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(__17336,c__16774__auto___17340,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async))
);


break;
case "async":
var c__16774__auto___17349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__17336,c__16774__auto___17349,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (__17336,c__16774__auto___17349,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async){
return (function (state_17207){
var state_val_17208 = (state_17207[(1)]);
if((state_val_17208 === (1))){
var state_17207__$1 = state_17207;
var statearr_17209_17350 = state_17207__$1;
(statearr_17209_17350[(2)] = null);

(statearr_17209_17350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (2))){
var state_17207__$1 = state_17207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17207__$1,(4),jobs);
} else {
if((state_val_17208 === (3))){
var inst_17205 = (state_17207[(2)]);
var state_17207__$1 = state_17207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17207__$1,inst_17205);
} else {
if((state_val_17208 === (4))){
var inst_17197 = (state_17207[(2)]);
var inst_17198 = async.call(null,inst_17197);
var state_17207__$1 = state_17207;
if(cljs.core.truth_(inst_17198)){
var statearr_17210_17351 = state_17207__$1;
(statearr_17210_17351[(1)] = (5));

} else {
var statearr_17211_17352 = state_17207__$1;
(statearr_17211_17352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (5))){
var state_17207__$1 = state_17207;
var statearr_17212_17353 = state_17207__$1;
(statearr_17212_17353[(2)] = null);

(statearr_17212_17353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (6))){
var state_17207__$1 = state_17207;
var statearr_17213_17354 = state_17207__$1;
(statearr_17213_17354[(2)] = null);

(statearr_17213_17354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17208 === (7))){
var inst_17203 = (state_17207[(2)]);
var state_17207__$1 = state_17207;
var statearr_17214_17355 = state_17207__$1;
(statearr_17214_17355[(2)] = inst_17203);

(statearr_17214_17355[(1)] = (3));


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
});})(__17336,c__16774__auto___17349,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async))
;
return ((function (__17336,switch__16662__auto__,c__16774__auto___17349,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0 = (function (){
var statearr_17218 = [null,null,null,null,null,null,null];
(statearr_17218[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__);

(statearr_17218[(1)] = (1));

return statearr_17218;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1 = (function (state_17207){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_17207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e17219){if((e17219 instanceof Object)){
var ex__16666__auto__ = e17219;
var statearr_17220_17356 = state_17207;
(statearr_17220_17356[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17357 = state_17207;
state_17207 = G__17357;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = function(state_17207){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1.call(this,state_17207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__;
})()
;})(__17336,switch__16662__auto__,c__16774__auto___17349,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async))
})();
var state__16776__auto__ = (function (){var statearr_17221 = f__16775__auto__.call(null);
(statearr_17221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___17349);

return statearr_17221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(__17336,c__16774__auto___17349,G__17167_17337,G__17167_17338__$1,n__7953__auto___17335,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17167_17338__$1)].join('')));

}

var G__17358 = (__17336 + (1));
__17336 = G__17358;
continue;
} else {
}
break;
}

var c__16774__auto___17359 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___17359,jobs,results,process,async){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___17359,jobs,results,process,async){
return (function (state_17243){
var state_val_17244 = (state_17243[(1)]);
if((state_val_17244 === (1))){
var state_17243__$1 = state_17243;
var statearr_17245_17360 = state_17243__$1;
(statearr_17245_17360[(2)] = null);

(statearr_17245_17360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (2))){
var state_17243__$1 = state_17243;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17243__$1,(4),from);
} else {
if((state_val_17244 === (3))){
var inst_17241 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17243__$1,inst_17241);
} else {
if((state_val_17244 === (4))){
var inst_17224 = (state_17243[(7)]);
var inst_17224__$1 = (state_17243[(2)]);
var inst_17225 = (inst_17224__$1 == null);
var state_17243__$1 = (function (){var statearr_17246 = state_17243;
(statearr_17246[(7)] = inst_17224__$1);

return statearr_17246;
})();
if(cljs.core.truth_(inst_17225)){
var statearr_17247_17361 = state_17243__$1;
(statearr_17247_17361[(1)] = (5));

} else {
var statearr_17248_17362 = state_17243__$1;
(statearr_17248_17362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (5))){
var inst_17227 = cljs.core.async.close_BANG_.call(null,jobs);
var state_17243__$1 = state_17243;
var statearr_17249_17363 = state_17243__$1;
(statearr_17249_17363[(2)] = inst_17227);

(statearr_17249_17363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (6))){
var inst_17229 = (state_17243[(8)]);
var inst_17224 = (state_17243[(7)]);
var inst_17229__$1 = cljs.core.async.chan.call(null,(1));
var inst_17230 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17231 = [inst_17224,inst_17229__$1];
var inst_17232 = (new cljs.core.PersistentVector(null,2,(5),inst_17230,inst_17231,null));
var state_17243__$1 = (function (){var statearr_17250 = state_17243;
(statearr_17250[(8)] = inst_17229__$1);

return statearr_17250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17243__$1,(8),jobs,inst_17232);
} else {
if((state_val_17244 === (7))){
var inst_17239 = (state_17243[(2)]);
var state_17243__$1 = state_17243;
var statearr_17251_17364 = state_17243__$1;
(statearr_17251_17364[(2)] = inst_17239);

(statearr_17251_17364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17244 === (8))){
var inst_17229 = (state_17243[(8)]);
var inst_17234 = (state_17243[(2)]);
var state_17243__$1 = (function (){var statearr_17252 = state_17243;
(statearr_17252[(9)] = inst_17234);

return statearr_17252;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17243__$1,(9),results,inst_17229);
} else {
if((state_val_17244 === (9))){
var inst_17236 = (state_17243[(2)]);
var state_17243__$1 = (function (){var statearr_17253 = state_17243;
(statearr_17253[(10)] = inst_17236);

return statearr_17253;
})();
var statearr_17254_17365 = state_17243__$1;
(statearr_17254_17365[(2)] = null);

(statearr_17254_17365[(1)] = (2));


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
});})(c__16774__auto___17359,jobs,results,process,async))
;
return ((function (switch__16662__auto__,c__16774__auto___17359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0 = (function (){
var statearr_17258 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17258[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__);

(statearr_17258[(1)] = (1));

return statearr_17258;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1 = (function (state_17243){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_17243);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e17259){if((e17259 instanceof Object)){
var ex__16666__auto__ = e17259;
var statearr_17260_17366 = state_17243;
(statearr_17260_17366[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17243);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17259;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17367 = state_17243;
state_17243 = G__17367;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = function(state_17243){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1.call(this,state_17243);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___17359,jobs,results,process,async))
})();
var state__16776__auto__ = (function (){var statearr_17261 = f__16775__auto__.call(null);
(statearr_17261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___17359);

return statearr_17261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___17359,jobs,results,process,async))
);


var c__16774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto__,jobs,results,process,async){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto__,jobs,results,process,async){
return (function (state_17299){
var state_val_17300 = (state_17299[(1)]);
if((state_val_17300 === (7))){
var inst_17295 = (state_17299[(2)]);
var state_17299__$1 = state_17299;
var statearr_17301_17368 = state_17299__$1;
(statearr_17301_17368[(2)] = inst_17295);

(statearr_17301_17368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (20))){
var state_17299__$1 = state_17299;
var statearr_17302_17369 = state_17299__$1;
(statearr_17302_17369[(2)] = null);

(statearr_17302_17369[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (1))){
var state_17299__$1 = state_17299;
var statearr_17303_17370 = state_17299__$1;
(statearr_17303_17370[(2)] = null);

(statearr_17303_17370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (4))){
var inst_17264 = (state_17299[(7)]);
var inst_17264__$1 = (state_17299[(2)]);
var inst_17265 = (inst_17264__$1 == null);
var state_17299__$1 = (function (){var statearr_17304 = state_17299;
(statearr_17304[(7)] = inst_17264__$1);

return statearr_17304;
})();
if(cljs.core.truth_(inst_17265)){
var statearr_17305_17371 = state_17299__$1;
(statearr_17305_17371[(1)] = (5));

} else {
var statearr_17306_17372 = state_17299__$1;
(statearr_17306_17372[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (15))){
var inst_17277 = (state_17299[(8)]);
var state_17299__$1 = state_17299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17299__$1,(18),to,inst_17277);
} else {
if((state_val_17300 === (21))){
var inst_17290 = (state_17299[(2)]);
var state_17299__$1 = state_17299;
var statearr_17307_17373 = state_17299__$1;
(statearr_17307_17373[(2)] = inst_17290);

(statearr_17307_17373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (13))){
var inst_17292 = (state_17299[(2)]);
var state_17299__$1 = (function (){var statearr_17308 = state_17299;
(statearr_17308[(9)] = inst_17292);

return statearr_17308;
})();
var statearr_17309_17374 = state_17299__$1;
(statearr_17309_17374[(2)] = null);

(statearr_17309_17374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (6))){
var inst_17264 = (state_17299[(7)]);
var state_17299__$1 = state_17299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17299__$1,(11),inst_17264);
} else {
if((state_val_17300 === (17))){
var inst_17285 = (state_17299[(2)]);
var state_17299__$1 = state_17299;
if(cljs.core.truth_(inst_17285)){
var statearr_17310_17375 = state_17299__$1;
(statearr_17310_17375[(1)] = (19));

} else {
var statearr_17311_17376 = state_17299__$1;
(statearr_17311_17376[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (3))){
var inst_17297 = (state_17299[(2)]);
var state_17299__$1 = state_17299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17299__$1,inst_17297);
} else {
if((state_val_17300 === (12))){
var inst_17274 = (state_17299[(10)]);
var state_17299__$1 = state_17299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17299__$1,(14),inst_17274);
} else {
if((state_val_17300 === (2))){
var state_17299__$1 = state_17299;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17299__$1,(4),results);
} else {
if((state_val_17300 === (19))){
var state_17299__$1 = state_17299;
var statearr_17312_17377 = state_17299__$1;
(statearr_17312_17377[(2)] = null);

(statearr_17312_17377[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (11))){
var inst_17274 = (state_17299[(2)]);
var state_17299__$1 = (function (){var statearr_17313 = state_17299;
(statearr_17313[(10)] = inst_17274);

return statearr_17313;
})();
var statearr_17314_17378 = state_17299__$1;
(statearr_17314_17378[(2)] = null);

(statearr_17314_17378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (9))){
var state_17299__$1 = state_17299;
var statearr_17315_17379 = state_17299__$1;
(statearr_17315_17379[(2)] = null);

(statearr_17315_17379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (5))){
var state_17299__$1 = state_17299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17316_17380 = state_17299__$1;
(statearr_17316_17380[(1)] = (8));

} else {
var statearr_17317_17381 = state_17299__$1;
(statearr_17317_17381[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (14))){
var inst_17277 = (state_17299[(8)]);
var inst_17279 = (state_17299[(11)]);
var inst_17277__$1 = (state_17299[(2)]);
var inst_17278 = (inst_17277__$1 == null);
var inst_17279__$1 = cljs.core.not.call(null,inst_17278);
var state_17299__$1 = (function (){var statearr_17318 = state_17299;
(statearr_17318[(8)] = inst_17277__$1);

(statearr_17318[(11)] = inst_17279__$1);

return statearr_17318;
})();
if(inst_17279__$1){
var statearr_17319_17382 = state_17299__$1;
(statearr_17319_17382[(1)] = (15));

} else {
var statearr_17320_17383 = state_17299__$1;
(statearr_17320_17383[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (16))){
var inst_17279 = (state_17299[(11)]);
var state_17299__$1 = state_17299;
var statearr_17321_17384 = state_17299__$1;
(statearr_17321_17384[(2)] = inst_17279);

(statearr_17321_17384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (10))){
var inst_17271 = (state_17299[(2)]);
var state_17299__$1 = state_17299;
var statearr_17322_17385 = state_17299__$1;
(statearr_17322_17385[(2)] = inst_17271);

(statearr_17322_17385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (18))){
var inst_17282 = (state_17299[(2)]);
var state_17299__$1 = state_17299;
var statearr_17323_17386 = state_17299__$1;
(statearr_17323_17386[(2)] = inst_17282);

(statearr_17323_17386[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17300 === (8))){
var inst_17268 = cljs.core.async.close_BANG_.call(null,to);
var state_17299__$1 = state_17299;
var statearr_17324_17387 = state_17299__$1;
(statearr_17324_17387[(2)] = inst_17268);

(statearr_17324_17387[(1)] = (10));


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
});})(c__16774__auto__,jobs,results,process,async))
;
return ((function (switch__16662__auto__,c__16774__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0 = (function (){
var statearr_17328 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__);

(statearr_17328[(1)] = (1));

return statearr_17328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1 = (function (state_17299){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_17299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e17329){if((e17329 instanceof Object)){
var ex__16666__auto__ = e17329;
var statearr_17330_17388 = state_17299;
(statearr_17330_17388[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17389 = state_17299;
state_17299 = G__17389;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__ = function(state_17299){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1.call(this,state_17299);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16663__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto__,jobs,results,process,async))
})();
var state__16776__auto__ = (function (){var statearr_17331 = f__16775__auto__.call(null);
(statearr_17331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto__);

return statearr_17331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto__,jobs,results,process,async))
);

return c__16774__auto__;
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
var args17390 = [];
var len__8143__auto___17393 = arguments.length;
var i__8144__auto___17394 = (0);
while(true){
if((i__8144__auto___17394 < len__8143__auto___17393)){
args17390.push((arguments[i__8144__auto___17394]));

var G__17395 = (i__8144__auto___17394 + (1));
i__8144__auto___17394 = G__17395;
continue;
} else {
}
break;
}

var G__17392 = args17390.length;
switch (G__17392) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17390.length)].join('')));

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
var args17397 = [];
var len__8143__auto___17400 = arguments.length;
var i__8144__auto___17401 = (0);
while(true){
if((i__8144__auto___17401 < len__8143__auto___17400)){
args17397.push((arguments[i__8144__auto___17401]));

var G__17402 = (i__8144__auto___17401 + (1));
i__8144__auto___17401 = G__17402;
continue;
} else {
}
break;
}

var G__17399 = args17397.length;
switch (G__17399) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17397.length)].join('')));

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
var args17404 = [];
var len__8143__auto___17457 = arguments.length;
var i__8144__auto___17458 = (0);
while(true){
if((i__8144__auto___17458 < len__8143__auto___17457)){
args17404.push((arguments[i__8144__auto___17458]));

var G__17459 = (i__8144__auto___17458 + (1));
i__8144__auto___17458 = G__17459;
continue;
} else {
}
break;
}

var G__17406 = args17404.length;
switch (G__17406) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17404.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16774__auto___17461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___17461,tc,fc){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___17461,tc,fc){
return (function (state_17432){
var state_val_17433 = (state_17432[(1)]);
if((state_val_17433 === (7))){
var inst_17428 = (state_17432[(2)]);
var state_17432__$1 = state_17432;
var statearr_17434_17462 = state_17432__$1;
(statearr_17434_17462[(2)] = inst_17428);

(statearr_17434_17462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (1))){
var state_17432__$1 = state_17432;
var statearr_17435_17463 = state_17432__$1;
(statearr_17435_17463[(2)] = null);

(statearr_17435_17463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (4))){
var inst_17409 = (state_17432[(7)]);
var inst_17409__$1 = (state_17432[(2)]);
var inst_17410 = (inst_17409__$1 == null);
var state_17432__$1 = (function (){var statearr_17436 = state_17432;
(statearr_17436[(7)] = inst_17409__$1);

return statearr_17436;
})();
if(cljs.core.truth_(inst_17410)){
var statearr_17437_17464 = state_17432__$1;
(statearr_17437_17464[(1)] = (5));

} else {
var statearr_17438_17465 = state_17432__$1;
(statearr_17438_17465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (13))){
var state_17432__$1 = state_17432;
var statearr_17439_17466 = state_17432__$1;
(statearr_17439_17466[(2)] = null);

(statearr_17439_17466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (6))){
var inst_17409 = (state_17432[(7)]);
var inst_17415 = p.call(null,inst_17409);
var state_17432__$1 = state_17432;
if(cljs.core.truth_(inst_17415)){
var statearr_17440_17467 = state_17432__$1;
(statearr_17440_17467[(1)] = (9));

} else {
var statearr_17441_17468 = state_17432__$1;
(statearr_17441_17468[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (3))){
var inst_17430 = (state_17432[(2)]);
var state_17432__$1 = state_17432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17432__$1,inst_17430);
} else {
if((state_val_17433 === (12))){
var state_17432__$1 = state_17432;
var statearr_17442_17469 = state_17432__$1;
(statearr_17442_17469[(2)] = null);

(statearr_17442_17469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (2))){
var state_17432__$1 = state_17432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17432__$1,(4),ch);
} else {
if((state_val_17433 === (11))){
var inst_17409 = (state_17432[(7)]);
var inst_17419 = (state_17432[(2)]);
var state_17432__$1 = state_17432;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17432__$1,(8),inst_17419,inst_17409);
} else {
if((state_val_17433 === (9))){
var state_17432__$1 = state_17432;
var statearr_17443_17470 = state_17432__$1;
(statearr_17443_17470[(2)] = tc);

(statearr_17443_17470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (5))){
var inst_17412 = cljs.core.async.close_BANG_.call(null,tc);
var inst_17413 = cljs.core.async.close_BANG_.call(null,fc);
var state_17432__$1 = (function (){var statearr_17444 = state_17432;
(statearr_17444[(8)] = inst_17412);

return statearr_17444;
})();
var statearr_17445_17471 = state_17432__$1;
(statearr_17445_17471[(2)] = inst_17413);

(statearr_17445_17471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (14))){
var inst_17426 = (state_17432[(2)]);
var state_17432__$1 = state_17432;
var statearr_17446_17472 = state_17432__$1;
(statearr_17446_17472[(2)] = inst_17426);

(statearr_17446_17472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (10))){
var state_17432__$1 = state_17432;
var statearr_17447_17473 = state_17432__$1;
(statearr_17447_17473[(2)] = fc);

(statearr_17447_17473[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17433 === (8))){
var inst_17421 = (state_17432[(2)]);
var state_17432__$1 = state_17432;
if(cljs.core.truth_(inst_17421)){
var statearr_17448_17474 = state_17432__$1;
(statearr_17448_17474[(1)] = (12));

} else {
var statearr_17449_17475 = state_17432__$1;
(statearr_17449_17475[(1)] = (13));

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
});})(c__16774__auto___17461,tc,fc))
;
return ((function (switch__16662__auto__,c__16774__auto___17461,tc,fc){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_17453 = [null,null,null,null,null,null,null,null,null];
(statearr_17453[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_17453[(1)] = (1));

return statearr_17453;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_17432){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_17432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e17454){if((e17454 instanceof Object)){
var ex__16666__auto__ = e17454;
var statearr_17455_17476 = state_17432;
(statearr_17455_17476[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17477 = state_17432;
state_17432 = G__17477;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_17432){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_17432);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___17461,tc,fc))
})();
var state__16776__auto__ = (function (){var statearr_17456 = f__16775__auto__.call(null);
(statearr_17456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___17461);

return statearr_17456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___17461,tc,fc))
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
var c__16774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto__){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto__){
return (function (state_17541){
var state_val_17542 = (state_17541[(1)]);
if((state_val_17542 === (7))){
var inst_17537 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
var statearr_17543_17564 = state_17541__$1;
(statearr_17543_17564[(2)] = inst_17537);

(statearr_17543_17564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (1))){
var inst_17521 = init;
var state_17541__$1 = (function (){var statearr_17544 = state_17541;
(statearr_17544[(7)] = inst_17521);

return statearr_17544;
})();
var statearr_17545_17565 = state_17541__$1;
(statearr_17545_17565[(2)] = null);

(statearr_17545_17565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (4))){
var inst_17524 = (state_17541[(8)]);
var inst_17524__$1 = (state_17541[(2)]);
var inst_17525 = (inst_17524__$1 == null);
var state_17541__$1 = (function (){var statearr_17546 = state_17541;
(statearr_17546[(8)] = inst_17524__$1);

return statearr_17546;
})();
if(cljs.core.truth_(inst_17525)){
var statearr_17547_17566 = state_17541__$1;
(statearr_17547_17566[(1)] = (5));

} else {
var statearr_17548_17567 = state_17541__$1;
(statearr_17548_17567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (6))){
var inst_17524 = (state_17541[(8)]);
var inst_17528 = (state_17541[(9)]);
var inst_17521 = (state_17541[(7)]);
var inst_17528__$1 = f.call(null,inst_17521,inst_17524);
var inst_17529 = cljs.core.reduced_QMARK_.call(null,inst_17528__$1);
var state_17541__$1 = (function (){var statearr_17549 = state_17541;
(statearr_17549[(9)] = inst_17528__$1);

return statearr_17549;
})();
if(inst_17529){
var statearr_17550_17568 = state_17541__$1;
(statearr_17550_17568[(1)] = (8));

} else {
var statearr_17551_17569 = state_17541__$1;
(statearr_17551_17569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (3))){
var inst_17539 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17541__$1,inst_17539);
} else {
if((state_val_17542 === (2))){
var state_17541__$1 = state_17541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17541__$1,(4),ch);
} else {
if((state_val_17542 === (9))){
var inst_17528 = (state_17541[(9)]);
var inst_17521 = inst_17528;
var state_17541__$1 = (function (){var statearr_17552 = state_17541;
(statearr_17552[(7)] = inst_17521);

return statearr_17552;
})();
var statearr_17553_17570 = state_17541__$1;
(statearr_17553_17570[(2)] = null);

(statearr_17553_17570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (5))){
var inst_17521 = (state_17541[(7)]);
var state_17541__$1 = state_17541;
var statearr_17554_17571 = state_17541__$1;
(statearr_17554_17571[(2)] = inst_17521);

(statearr_17554_17571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (10))){
var inst_17535 = (state_17541[(2)]);
var state_17541__$1 = state_17541;
var statearr_17555_17572 = state_17541__$1;
(statearr_17555_17572[(2)] = inst_17535);

(statearr_17555_17572[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17542 === (8))){
var inst_17528 = (state_17541[(9)]);
var inst_17531 = cljs.core.deref.call(null,inst_17528);
var state_17541__$1 = state_17541;
var statearr_17556_17573 = state_17541__$1;
(statearr_17556_17573[(2)] = inst_17531);

(statearr_17556_17573[(1)] = (10));


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
});})(c__16774__auto__))
;
return ((function (switch__16662__auto__,c__16774__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__16663__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16663__auto____0 = (function (){
var statearr_17560 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17560[(0)] = cljs$core$async$reduce_$_state_machine__16663__auto__);

(statearr_17560[(1)] = (1));

return statearr_17560;
});
var cljs$core$async$reduce_$_state_machine__16663__auto____1 = (function (state_17541){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_17541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e17561){if((e17561 instanceof Object)){
var ex__16666__auto__ = e17561;
var statearr_17562_17574 = state_17541;
(statearr_17562_17574[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17575 = state_17541;
state_17541 = G__17575;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16663__auto__ = function(state_17541){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16663__auto____1.call(this,state_17541);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16663__auto____0;
cljs$core$async$reduce_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16663__auto____1;
return cljs$core$async$reduce_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto__))
})();
var state__16776__auto__ = (function (){var statearr_17563 = f__16775__auto__.call(null);
(statearr_17563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto__);

return statearr_17563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto__))
);

return c__16774__auto__;
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
var args17576 = [];
var len__8143__auto___17628 = arguments.length;
var i__8144__auto___17629 = (0);
while(true){
if((i__8144__auto___17629 < len__8143__auto___17628)){
args17576.push((arguments[i__8144__auto___17629]));

var G__17630 = (i__8144__auto___17629 + (1));
i__8144__auto___17629 = G__17630;
continue;
} else {
}
break;
}

var G__17578 = args17576.length;
switch (G__17578) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17576.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto__){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto__){
return (function (state_17603){
var state_val_17604 = (state_17603[(1)]);
if((state_val_17604 === (7))){
var inst_17585 = (state_17603[(2)]);
var state_17603__$1 = state_17603;
var statearr_17605_17632 = state_17603__$1;
(statearr_17605_17632[(2)] = inst_17585);

(statearr_17605_17632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (1))){
var inst_17579 = cljs.core.seq.call(null,coll);
var inst_17580 = inst_17579;
var state_17603__$1 = (function (){var statearr_17606 = state_17603;
(statearr_17606[(7)] = inst_17580);

return statearr_17606;
})();
var statearr_17607_17633 = state_17603__$1;
(statearr_17607_17633[(2)] = null);

(statearr_17607_17633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (4))){
var inst_17580 = (state_17603[(7)]);
var inst_17583 = cljs.core.first.call(null,inst_17580);
var state_17603__$1 = state_17603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17603__$1,(7),ch,inst_17583);
} else {
if((state_val_17604 === (13))){
var inst_17597 = (state_17603[(2)]);
var state_17603__$1 = state_17603;
var statearr_17608_17634 = state_17603__$1;
(statearr_17608_17634[(2)] = inst_17597);

(statearr_17608_17634[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (6))){
var inst_17588 = (state_17603[(2)]);
var state_17603__$1 = state_17603;
if(cljs.core.truth_(inst_17588)){
var statearr_17609_17635 = state_17603__$1;
(statearr_17609_17635[(1)] = (8));

} else {
var statearr_17610_17636 = state_17603__$1;
(statearr_17610_17636[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (3))){
var inst_17601 = (state_17603[(2)]);
var state_17603__$1 = state_17603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17603__$1,inst_17601);
} else {
if((state_val_17604 === (12))){
var state_17603__$1 = state_17603;
var statearr_17611_17637 = state_17603__$1;
(statearr_17611_17637[(2)] = null);

(statearr_17611_17637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (2))){
var inst_17580 = (state_17603[(7)]);
var state_17603__$1 = state_17603;
if(cljs.core.truth_(inst_17580)){
var statearr_17612_17638 = state_17603__$1;
(statearr_17612_17638[(1)] = (4));

} else {
var statearr_17613_17639 = state_17603__$1;
(statearr_17613_17639[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (11))){
var inst_17594 = cljs.core.async.close_BANG_.call(null,ch);
var state_17603__$1 = state_17603;
var statearr_17614_17640 = state_17603__$1;
(statearr_17614_17640[(2)] = inst_17594);

(statearr_17614_17640[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (9))){
var state_17603__$1 = state_17603;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17615_17641 = state_17603__$1;
(statearr_17615_17641[(1)] = (11));

} else {
var statearr_17616_17642 = state_17603__$1;
(statearr_17616_17642[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (5))){
var inst_17580 = (state_17603[(7)]);
var state_17603__$1 = state_17603;
var statearr_17617_17643 = state_17603__$1;
(statearr_17617_17643[(2)] = inst_17580);

(statearr_17617_17643[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (10))){
var inst_17599 = (state_17603[(2)]);
var state_17603__$1 = state_17603;
var statearr_17618_17644 = state_17603__$1;
(statearr_17618_17644[(2)] = inst_17599);

(statearr_17618_17644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17604 === (8))){
var inst_17580 = (state_17603[(7)]);
var inst_17590 = cljs.core.next.call(null,inst_17580);
var inst_17580__$1 = inst_17590;
var state_17603__$1 = (function (){var statearr_17619 = state_17603;
(statearr_17619[(7)] = inst_17580__$1);

return statearr_17619;
})();
var statearr_17620_17645 = state_17603__$1;
(statearr_17620_17645[(2)] = null);

(statearr_17620_17645[(1)] = (2));


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
});})(c__16774__auto__))
;
return ((function (switch__16662__auto__,c__16774__auto__){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_17624 = [null,null,null,null,null,null,null,null];
(statearr_17624[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_17624[(1)] = (1));

return statearr_17624;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_17603){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_17603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e17625){if((e17625 instanceof Object)){
var ex__16666__auto__ = e17625;
var statearr_17626_17646 = state_17603;
(statearr_17626_17646[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17647 = state_17603;
state_17603 = G__17647;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_17603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_17603);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto__))
})();
var state__16776__auto__ = (function (){var statearr_17627 = f__16775__auto__.call(null);
(statearr_17627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto__);

return statearr_17627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto__))
);

return c__16774__auto__;
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
var x__7698__auto__ = (((_ == null))?null:_);
var m__7699__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,_);
} else {
var m__7699__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,_);
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
var x__7698__auto__ = (((m == null))?null:m);
var m__7699__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7699__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__7698__auto__ = (((m == null))?null:m);
var m__7699__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,m,ch);
} else {
var m__7699__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,m,ch);
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
var x__7698__auto__ = (((m == null))?null:m);
var m__7699__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,m);
} else {
var m__7699__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async17873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17873 = (function (ch,cs,meta17874){
this.ch = ch;
this.cs = cs;
this.meta17874 = meta17874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async17873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17875,meta17874__$1){
var self__ = this;
var _17875__$1 = this;
return (new cljs.core.async.t_cljs$core$async17873(self__.ch,self__.cs,meta17874__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async17873.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17875){
var self__ = this;
var _17875__$1 = this;
return self__.meta17874;
});})(cs))
;

cljs.core.async.t_cljs$core$async17873.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17873.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async17873.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async17873.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17873.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17873.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async17873.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta17874","meta17874",129105238,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async17873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async17873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17873";

cljs.core.async.t_cljs$core$async17873.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async17873");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async17873 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async17873(ch__$1,cs__$1,meta17874){
return (new cljs.core.async.t_cljs$core$async17873(ch__$1,cs__$1,meta17874));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async17873(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16774__auto___18098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___18098,cs,m,dchan,dctr,done){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___18098,cs,m,dchan,dctr,done){
return (function (state_18010){
var state_val_18011 = (state_18010[(1)]);
if((state_val_18011 === (7))){
var inst_18006 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18012_18099 = state_18010__$1;
(statearr_18012_18099[(2)] = inst_18006);

(statearr_18012_18099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (20))){
var inst_17909 = (state_18010[(7)]);
var inst_17921 = cljs.core.first.call(null,inst_17909);
var inst_17922 = cljs.core.nth.call(null,inst_17921,(0),null);
var inst_17923 = cljs.core.nth.call(null,inst_17921,(1),null);
var state_18010__$1 = (function (){var statearr_18013 = state_18010;
(statearr_18013[(8)] = inst_17922);

return statearr_18013;
})();
if(cljs.core.truth_(inst_17923)){
var statearr_18014_18100 = state_18010__$1;
(statearr_18014_18100[(1)] = (22));

} else {
var statearr_18015_18101 = state_18010__$1;
(statearr_18015_18101[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (27))){
var inst_17958 = (state_18010[(9)]);
var inst_17878 = (state_18010[(10)]);
var inst_17953 = (state_18010[(11)]);
var inst_17951 = (state_18010[(12)]);
var inst_17958__$1 = cljs.core._nth.call(null,inst_17951,inst_17953);
var inst_17959 = cljs.core.async.put_BANG_.call(null,inst_17958__$1,inst_17878,done);
var state_18010__$1 = (function (){var statearr_18016 = state_18010;
(statearr_18016[(9)] = inst_17958__$1);

return statearr_18016;
})();
if(cljs.core.truth_(inst_17959)){
var statearr_18017_18102 = state_18010__$1;
(statearr_18017_18102[(1)] = (30));

} else {
var statearr_18018_18103 = state_18010__$1;
(statearr_18018_18103[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (1))){
var state_18010__$1 = state_18010;
var statearr_18019_18104 = state_18010__$1;
(statearr_18019_18104[(2)] = null);

(statearr_18019_18104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (24))){
var inst_17909 = (state_18010[(7)]);
var inst_17928 = (state_18010[(2)]);
var inst_17929 = cljs.core.next.call(null,inst_17909);
var inst_17887 = inst_17929;
var inst_17888 = null;
var inst_17889 = (0);
var inst_17890 = (0);
var state_18010__$1 = (function (){var statearr_18020 = state_18010;
(statearr_18020[(13)] = inst_17928);

(statearr_18020[(14)] = inst_17889);

(statearr_18020[(15)] = inst_17890);

(statearr_18020[(16)] = inst_17888);

(statearr_18020[(17)] = inst_17887);

return statearr_18020;
})();
var statearr_18021_18105 = state_18010__$1;
(statearr_18021_18105[(2)] = null);

(statearr_18021_18105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (39))){
var state_18010__$1 = state_18010;
var statearr_18025_18106 = state_18010__$1;
(statearr_18025_18106[(2)] = null);

(statearr_18025_18106[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (4))){
var inst_17878 = (state_18010[(10)]);
var inst_17878__$1 = (state_18010[(2)]);
var inst_17879 = (inst_17878__$1 == null);
var state_18010__$1 = (function (){var statearr_18026 = state_18010;
(statearr_18026[(10)] = inst_17878__$1);

return statearr_18026;
})();
if(cljs.core.truth_(inst_17879)){
var statearr_18027_18107 = state_18010__$1;
(statearr_18027_18107[(1)] = (5));

} else {
var statearr_18028_18108 = state_18010__$1;
(statearr_18028_18108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (15))){
var inst_17889 = (state_18010[(14)]);
var inst_17890 = (state_18010[(15)]);
var inst_17888 = (state_18010[(16)]);
var inst_17887 = (state_18010[(17)]);
var inst_17905 = (state_18010[(2)]);
var inst_17906 = (inst_17890 + (1));
var tmp18022 = inst_17889;
var tmp18023 = inst_17888;
var tmp18024 = inst_17887;
var inst_17887__$1 = tmp18024;
var inst_17888__$1 = tmp18023;
var inst_17889__$1 = tmp18022;
var inst_17890__$1 = inst_17906;
var state_18010__$1 = (function (){var statearr_18029 = state_18010;
(statearr_18029[(18)] = inst_17905);

(statearr_18029[(14)] = inst_17889__$1);

(statearr_18029[(15)] = inst_17890__$1);

(statearr_18029[(16)] = inst_17888__$1);

(statearr_18029[(17)] = inst_17887__$1);

return statearr_18029;
})();
var statearr_18030_18109 = state_18010__$1;
(statearr_18030_18109[(2)] = null);

(statearr_18030_18109[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (21))){
var inst_17932 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18034_18110 = state_18010__$1;
(statearr_18034_18110[(2)] = inst_17932);

(statearr_18034_18110[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (31))){
var inst_17958 = (state_18010[(9)]);
var inst_17962 = done.call(null,null);
var inst_17963 = cljs.core.async.untap_STAR_.call(null,m,inst_17958);
var state_18010__$1 = (function (){var statearr_18035 = state_18010;
(statearr_18035[(19)] = inst_17962);

return statearr_18035;
})();
var statearr_18036_18111 = state_18010__$1;
(statearr_18036_18111[(2)] = inst_17963);

(statearr_18036_18111[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (32))){
var inst_17950 = (state_18010[(20)]);
var inst_17953 = (state_18010[(11)]);
var inst_17951 = (state_18010[(12)]);
var inst_17952 = (state_18010[(21)]);
var inst_17965 = (state_18010[(2)]);
var inst_17966 = (inst_17953 + (1));
var tmp18031 = inst_17950;
var tmp18032 = inst_17951;
var tmp18033 = inst_17952;
var inst_17950__$1 = tmp18031;
var inst_17951__$1 = tmp18032;
var inst_17952__$1 = tmp18033;
var inst_17953__$1 = inst_17966;
var state_18010__$1 = (function (){var statearr_18037 = state_18010;
(statearr_18037[(20)] = inst_17950__$1);

(statearr_18037[(22)] = inst_17965);

(statearr_18037[(11)] = inst_17953__$1);

(statearr_18037[(12)] = inst_17951__$1);

(statearr_18037[(21)] = inst_17952__$1);

return statearr_18037;
})();
var statearr_18038_18112 = state_18010__$1;
(statearr_18038_18112[(2)] = null);

(statearr_18038_18112[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (40))){
var inst_17978 = (state_18010[(23)]);
var inst_17982 = done.call(null,null);
var inst_17983 = cljs.core.async.untap_STAR_.call(null,m,inst_17978);
var state_18010__$1 = (function (){var statearr_18039 = state_18010;
(statearr_18039[(24)] = inst_17982);

return statearr_18039;
})();
var statearr_18040_18113 = state_18010__$1;
(statearr_18040_18113[(2)] = inst_17983);

(statearr_18040_18113[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (33))){
var inst_17969 = (state_18010[(25)]);
var inst_17971 = cljs.core.chunked_seq_QMARK_.call(null,inst_17969);
var state_18010__$1 = state_18010;
if(inst_17971){
var statearr_18041_18114 = state_18010__$1;
(statearr_18041_18114[(1)] = (36));

} else {
var statearr_18042_18115 = state_18010__$1;
(statearr_18042_18115[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (13))){
var inst_17899 = (state_18010[(26)]);
var inst_17902 = cljs.core.async.close_BANG_.call(null,inst_17899);
var state_18010__$1 = state_18010;
var statearr_18043_18116 = state_18010__$1;
(statearr_18043_18116[(2)] = inst_17902);

(statearr_18043_18116[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (22))){
var inst_17922 = (state_18010[(8)]);
var inst_17925 = cljs.core.async.close_BANG_.call(null,inst_17922);
var state_18010__$1 = state_18010;
var statearr_18044_18117 = state_18010__$1;
(statearr_18044_18117[(2)] = inst_17925);

(statearr_18044_18117[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (36))){
var inst_17969 = (state_18010[(25)]);
var inst_17973 = cljs.core.chunk_first.call(null,inst_17969);
var inst_17974 = cljs.core.chunk_rest.call(null,inst_17969);
var inst_17975 = cljs.core.count.call(null,inst_17973);
var inst_17950 = inst_17974;
var inst_17951 = inst_17973;
var inst_17952 = inst_17975;
var inst_17953 = (0);
var state_18010__$1 = (function (){var statearr_18045 = state_18010;
(statearr_18045[(20)] = inst_17950);

(statearr_18045[(11)] = inst_17953);

(statearr_18045[(12)] = inst_17951);

(statearr_18045[(21)] = inst_17952);

return statearr_18045;
})();
var statearr_18046_18118 = state_18010__$1;
(statearr_18046_18118[(2)] = null);

(statearr_18046_18118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (41))){
var inst_17969 = (state_18010[(25)]);
var inst_17985 = (state_18010[(2)]);
var inst_17986 = cljs.core.next.call(null,inst_17969);
var inst_17950 = inst_17986;
var inst_17951 = null;
var inst_17952 = (0);
var inst_17953 = (0);
var state_18010__$1 = (function (){var statearr_18047 = state_18010;
(statearr_18047[(20)] = inst_17950);

(statearr_18047[(11)] = inst_17953);

(statearr_18047[(27)] = inst_17985);

(statearr_18047[(12)] = inst_17951);

(statearr_18047[(21)] = inst_17952);

return statearr_18047;
})();
var statearr_18048_18119 = state_18010__$1;
(statearr_18048_18119[(2)] = null);

(statearr_18048_18119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (43))){
var state_18010__$1 = state_18010;
var statearr_18049_18120 = state_18010__$1;
(statearr_18049_18120[(2)] = null);

(statearr_18049_18120[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (29))){
var inst_17994 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18050_18121 = state_18010__$1;
(statearr_18050_18121[(2)] = inst_17994);

(statearr_18050_18121[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (44))){
var inst_18003 = (state_18010[(2)]);
var state_18010__$1 = (function (){var statearr_18051 = state_18010;
(statearr_18051[(28)] = inst_18003);

return statearr_18051;
})();
var statearr_18052_18122 = state_18010__$1;
(statearr_18052_18122[(2)] = null);

(statearr_18052_18122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (6))){
var inst_17942 = (state_18010[(29)]);
var inst_17941 = cljs.core.deref.call(null,cs);
var inst_17942__$1 = cljs.core.keys.call(null,inst_17941);
var inst_17943 = cljs.core.count.call(null,inst_17942__$1);
var inst_17944 = cljs.core.reset_BANG_.call(null,dctr,inst_17943);
var inst_17949 = cljs.core.seq.call(null,inst_17942__$1);
var inst_17950 = inst_17949;
var inst_17951 = null;
var inst_17952 = (0);
var inst_17953 = (0);
var state_18010__$1 = (function (){var statearr_18053 = state_18010;
(statearr_18053[(20)] = inst_17950);

(statearr_18053[(11)] = inst_17953);

(statearr_18053[(29)] = inst_17942__$1);

(statearr_18053[(30)] = inst_17944);

(statearr_18053[(12)] = inst_17951);

(statearr_18053[(21)] = inst_17952);

return statearr_18053;
})();
var statearr_18054_18123 = state_18010__$1;
(statearr_18054_18123[(2)] = null);

(statearr_18054_18123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (28))){
var inst_17950 = (state_18010[(20)]);
var inst_17969 = (state_18010[(25)]);
var inst_17969__$1 = cljs.core.seq.call(null,inst_17950);
var state_18010__$1 = (function (){var statearr_18055 = state_18010;
(statearr_18055[(25)] = inst_17969__$1);

return statearr_18055;
})();
if(inst_17969__$1){
var statearr_18056_18124 = state_18010__$1;
(statearr_18056_18124[(1)] = (33));

} else {
var statearr_18057_18125 = state_18010__$1;
(statearr_18057_18125[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (25))){
var inst_17953 = (state_18010[(11)]);
var inst_17952 = (state_18010[(21)]);
var inst_17955 = (inst_17953 < inst_17952);
var inst_17956 = inst_17955;
var state_18010__$1 = state_18010;
if(cljs.core.truth_(inst_17956)){
var statearr_18058_18126 = state_18010__$1;
(statearr_18058_18126[(1)] = (27));

} else {
var statearr_18059_18127 = state_18010__$1;
(statearr_18059_18127[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (34))){
var state_18010__$1 = state_18010;
var statearr_18060_18128 = state_18010__$1;
(statearr_18060_18128[(2)] = null);

(statearr_18060_18128[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (17))){
var state_18010__$1 = state_18010;
var statearr_18061_18129 = state_18010__$1;
(statearr_18061_18129[(2)] = null);

(statearr_18061_18129[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (3))){
var inst_18008 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18010__$1,inst_18008);
} else {
if((state_val_18011 === (12))){
var inst_17937 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18062_18130 = state_18010__$1;
(statearr_18062_18130[(2)] = inst_17937);

(statearr_18062_18130[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (2))){
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18010__$1,(4),ch);
} else {
if((state_val_18011 === (23))){
var state_18010__$1 = state_18010;
var statearr_18063_18131 = state_18010__$1;
(statearr_18063_18131[(2)] = null);

(statearr_18063_18131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (35))){
var inst_17992 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18064_18132 = state_18010__$1;
(statearr_18064_18132[(2)] = inst_17992);

(statearr_18064_18132[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (19))){
var inst_17909 = (state_18010[(7)]);
var inst_17913 = cljs.core.chunk_first.call(null,inst_17909);
var inst_17914 = cljs.core.chunk_rest.call(null,inst_17909);
var inst_17915 = cljs.core.count.call(null,inst_17913);
var inst_17887 = inst_17914;
var inst_17888 = inst_17913;
var inst_17889 = inst_17915;
var inst_17890 = (0);
var state_18010__$1 = (function (){var statearr_18065 = state_18010;
(statearr_18065[(14)] = inst_17889);

(statearr_18065[(15)] = inst_17890);

(statearr_18065[(16)] = inst_17888);

(statearr_18065[(17)] = inst_17887);

return statearr_18065;
})();
var statearr_18066_18133 = state_18010__$1;
(statearr_18066_18133[(2)] = null);

(statearr_18066_18133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (11))){
var inst_17909 = (state_18010[(7)]);
var inst_17887 = (state_18010[(17)]);
var inst_17909__$1 = cljs.core.seq.call(null,inst_17887);
var state_18010__$1 = (function (){var statearr_18067 = state_18010;
(statearr_18067[(7)] = inst_17909__$1);

return statearr_18067;
})();
if(inst_17909__$1){
var statearr_18068_18134 = state_18010__$1;
(statearr_18068_18134[(1)] = (16));

} else {
var statearr_18069_18135 = state_18010__$1;
(statearr_18069_18135[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (9))){
var inst_17939 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18070_18136 = state_18010__$1;
(statearr_18070_18136[(2)] = inst_17939);

(statearr_18070_18136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (5))){
var inst_17885 = cljs.core.deref.call(null,cs);
var inst_17886 = cljs.core.seq.call(null,inst_17885);
var inst_17887 = inst_17886;
var inst_17888 = null;
var inst_17889 = (0);
var inst_17890 = (0);
var state_18010__$1 = (function (){var statearr_18071 = state_18010;
(statearr_18071[(14)] = inst_17889);

(statearr_18071[(15)] = inst_17890);

(statearr_18071[(16)] = inst_17888);

(statearr_18071[(17)] = inst_17887);

return statearr_18071;
})();
var statearr_18072_18137 = state_18010__$1;
(statearr_18072_18137[(2)] = null);

(statearr_18072_18137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (14))){
var state_18010__$1 = state_18010;
var statearr_18073_18138 = state_18010__$1;
(statearr_18073_18138[(2)] = null);

(statearr_18073_18138[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (45))){
var inst_18000 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18074_18139 = state_18010__$1;
(statearr_18074_18139[(2)] = inst_18000);

(statearr_18074_18139[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (26))){
var inst_17942 = (state_18010[(29)]);
var inst_17996 = (state_18010[(2)]);
var inst_17997 = cljs.core.seq.call(null,inst_17942);
var state_18010__$1 = (function (){var statearr_18075 = state_18010;
(statearr_18075[(31)] = inst_17996);

return statearr_18075;
})();
if(inst_17997){
var statearr_18076_18140 = state_18010__$1;
(statearr_18076_18140[(1)] = (42));

} else {
var statearr_18077_18141 = state_18010__$1;
(statearr_18077_18141[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (16))){
var inst_17909 = (state_18010[(7)]);
var inst_17911 = cljs.core.chunked_seq_QMARK_.call(null,inst_17909);
var state_18010__$1 = state_18010;
if(inst_17911){
var statearr_18078_18142 = state_18010__$1;
(statearr_18078_18142[(1)] = (19));

} else {
var statearr_18079_18143 = state_18010__$1;
(statearr_18079_18143[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (38))){
var inst_17989 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18080_18144 = state_18010__$1;
(statearr_18080_18144[(2)] = inst_17989);

(statearr_18080_18144[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (30))){
var state_18010__$1 = state_18010;
var statearr_18081_18145 = state_18010__$1;
(statearr_18081_18145[(2)] = null);

(statearr_18081_18145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (10))){
var inst_17890 = (state_18010[(15)]);
var inst_17888 = (state_18010[(16)]);
var inst_17898 = cljs.core._nth.call(null,inst_17888,inst_17890);
var inst_17899 = cljs.core.nth.call(null,inst_17898,(0),null);
var inst_17900 = cljs.core.nth.call(null,inst_17898,(1),null);
var state_18010__$1 = (function (){var statearr_18082 = state_18010;
(statearr_18082[(26)] = inst_17899);

return statearr_18082;
})();
if(cljs.core.truth_(inst_17900)){
var statearr_18083_18146 = state_18010__$1;
(statearr_18083_18146[(1)] = (13));

} else {
var statearr_18084_18147 = state_18010__$1;
(statearr_18084_18147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (18))){
var inst_17935 = (state_18010[(2)]);
var state_18010__$1 = state_18010;
var statearr_18085_18148 = state_18010__$1;
(statearr_18085_18148[(2)] = inst_17935);

(statearr_18085_18148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (42))){
var state_18010__$1 = state_18010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18010__$1,(45),dchan);
} else {
if((state_val_18011 === (37))){
var inst_17978 = (state_18010[(23)]);
var inst_17969 = (state_18010[(25)]);
var inst_17878 = (state_18010[(10)]);
var inst_17978__$1 = cljs.core.first.call(null,inst_17969);
var inst_17979 = cljs.core.async.put_BANG_.call(null,inst_17978__$1,inst_17878,done);
var state_18010__$1 = (function (){var statearr_18086 = state_18010;
(statearr_18086[(23)] = inst_17978__$1);

return statearr_18086;
})();
if(cljs.core.truth_(inst_17979)){
var statearr_18087_18149 = state_18010__$1;
(statearr_18087_18149[(1)] = (39));

} else {
var statearr_18088_18150 = state_18010__$1;
(statearr_18088_18150[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18011 === (8))){
var inst_17889 = (state_18010[(14)]);
var inst_17890 = (state_18010[(15)]);
var inst_17892 = (inst_17890 < inst_17889);
var inst_17893 = inst_17892;
var state_18010__$1 = state_18010;
if(cljs.core.truth_(inst_17893)){
var statearr_18089_18151 = state_18010__$1;
(statearr_18089_18151[(1)] = (10));

} else {
var statearr_18090_18152 = state_18010__$1;
(statearr_18090_18152[(1)] = (11));

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
});})(c__16774__auto___18098,cs,m,dchan,dctr,done))
;
return ((function (switch__16662__auto__,c__16774__auto___18098,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16663__auto__ = null;
var cljs$core$async$mult_$_state_machine__16663__auto____0 = (function (){
var statearr_18094 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18094[(0)] = cljs$core$async$mult_$_state_machine__16663__auto__);

(statearr_18094[(1)] = (1));

return statearr_18094;
});
var cljs$core$async$mult_$_state_machine__16663__auto____1 = (function (state_18010){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_18010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e18095){if((e18095 instanceof Object)){
var ex__16666__auto__ = e18095;
var statearr_18096_18153 = state_18010;
(statearr_18096_18153[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18154 = state_18010;
state_18010 = G__18154;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16663__auto__ = function(state_18010){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16663__auto____1.call(this,state_18010);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16663__auto____0;
cljs$core$async$mult_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16663__auto____1;
return cljs$core$async$mult_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___18098,cs,m,dchan,dctr,done))
})();
var state__16776__auto__ = (function (){var statearr_18097 = f__16775__auto__.call(null);
(statearr_18097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___18098);

return statearr_18097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___18098,cs,m,dchan,dctr,done))
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
var args18155 = [];
var len__8143__auto___18158 = arguments.length;
var i__8144__auto___18159 = (0);
while(true){
if((i__8144__auto___18159 < len__8143__auto___18158)){
args18155.push((arguments[i__8144__auto___18159]));

var G__18160 = (i__8144__auto___18159 + (1));
i__8144__auto___18159 = G__18160;
continue;
} else {
}
break;
}

var G__18157 = args18155.length;
switch (G__18157) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18155.length)].join('')));

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
var x__7698__auto__ = (((m == null))?null:m);
var m__7699__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,m,ch);
} else {
var m__7699__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,m,ch);
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
var x__7698__auto__ = (((m == null))?null:m);
var m__7699__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,m,ch);
} else {
var m__7699__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,m,ch);
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
var x__7698__auto__ = (((m == null))?null:m);
var m__7699__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,m);
} else {
var m__7699__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,m);
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
var x__7698__auto__ = (((m == null))?null:m);
var m__7699__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,m,state_map);
} else {
var m__7699__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,m,state_map);
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
var x__7698__auto__ = (((m == null))?null:m);
var m__7699__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,m,mode);
} else {
var m__7699__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8150__auto__ = [];
var len__8143__auto___18172 = arguments.length;
var i__8144__auto___18173 = (0);
while(true){
if((i__8144__auto___18173 < len__8143__auto___18172)){
args__8150__auto__.push((arguments[i__8144__auto___18173]));

var G__18174 = (i__8144__auto___18173 + (1));
i__8144__auto___18173 = G__18174;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((3) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8151__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18166){
var map__18167 = p__18166;
var map__18167__$1 = ((((!((map__18167 == null)))?((((map__18167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18167.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18167):map__18167);
var opts = map__18167__$1;
var statearr_18169_18175 = state;
(statearr_18169_18175[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__18167,map__18167__$1,opts){
return (function (val){
var statearr_18170_18176 = state;
(statearr_18170_18176[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__18167,map__18167__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_18171_18177 = state;
(statearr_18171_18177[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18162){
var G__18163 = cljs.core.first.call(null,seq18162);
var seq18162__$1 = cljs.core.next.call(null,seq18162);
var G__18164 = cljs.core.first.call(null,seq18162__$1);
var seq18162__$2 = cljs.core.next.call(null,seq18162__$1);
var G__18165 = cljs.core.first.call(null,seq18162__$2);
var seq18162__$3 = cljs.core.next.call(null,seq18162__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18163,G__18164,G__18165,seq18162__$3);
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
if(typeof cljs.core.async.t_cljs$core$async18345 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18345 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta18346){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta18346 = meta18346;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18347,meta18346__$1){
var self__ = this;
var _18347__$1 = this;
return (new cljs.core.async.t_cljs$core$async18345(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta18346__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_18347){
var self__ = this;
var _18347__$1 = this;
return self__.meta18346;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18345.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async18345.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta18346","meta18346",-1843538467,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async18345.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18345.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18345";

cljs.core.async.t_cljs$core$async18345.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async18345");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async18345 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async18345(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18346){
return (new cljs.core.async.t_cljs$core$async18345(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta18346));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async18345(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16774__auto___18512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___18512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___18512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_18449){
var state_val_18450 = (state_18449[(1)]);
if((state_val_18450 === (7))){
var inst_18364 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
var statearr_18451_18513 = state_18449__$1;
(statearr_18451_18513[(2)] = inst_18364);

(statearr_18451_18513[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (20))){
var inst_18376 = (state_18449[(7)]);
var state_18449__$1 = state_18449;
var statearr_18452_18514 = state_18449__$1;
(statearr_18452_18514[(2)] = inst_18376);

(statearr_18452_18514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (27))){
var state_18449__$1 = state_18449;
var statearr_18453_18515 = state_18449__$1;
(statearr_18453_18515[(2)] = null);

(statearr_18453_18515[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (1))){
var inst_18351 = (state_18449[(8)]);
var inst_18351__$1 = calc_state.call(null);
var inst_18353 = (inst_18351__$1 == null);
var inst_18354 = cljs.core.not.call(null,inst_18353);
var state_18449__$1 = (function (){var statearr_18454 = state_18449;
(statearr_18454[(8)] = inst_18351__$1);

return statearr_18454;
})();
if(inst_18354){
var statearr_18455_18516 = state_18449__$1;
(statearr_18455_18516[(1)] = (2));

} else {
var statearr_18456_18517 = state_18449__$1;
(statearr_18456_18517[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (24))){
var inst_18400 = (state_18449[(9)]);
var inst_18423 = (state_18449[(10)]);
var inst_18409 = (state_18449[(11)]);
var inst_18423__$1 = inst_18400.call(null,inst_18409);
var state_18449__$1 = (function (){var statearr_18457 = state_18449;
(statearr_18457[(10)] = inst_18423__$1);

return statearr_18457;
})();
if(cljs.core.truth_(inst_18423__$1)){
var statearr_18458_18518 = state_18449__$1;
(statearr_18458_18518[(1)] = (29));

} else {
var statearr_18459_18519 = state_18449__$1;
(statearr_18459_18519[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (4))){
var inst_18367 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
if(cljs.core.truth_(inst_18367)){
var statearr_18460_18520 = state_18449__$1;
(statearr_18460_18520[(1)] = (8));

} else {
var statearr_18461_18521 = state_18449__$1;
(statearr_18461_18521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (15))){
var inst_18394 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
if(cljs.core.truth_(inst_18394)){
var statearr_18462_18522 = state_18449__$1;
(statearr_18462_18522[(1)] = (19));

} else {
var statearr_18463_18523 = state_18449__$1;
(statearr_18463_18523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (21))){
var inst_18399 = (state_18449[(12)]);
var inst_18399__$1 = (state_18449[(2)]);
var inst_18400 = cljs.core.get.call(null,inst_18399__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18401 = cljs.core.get.call(null,inst_18399__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18402 = cljs.core.get.call(null,inst_18399__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18449__$1 = (function (){var statearr_18464 = state_18449;
(statearr_18464[(13)] = inst_18401);

(statearr_18464[(9)] = inst_18400);

(statearr_18464[(12)] = inst_18399__$1);

return statearr_18464;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18449__$1,(22),inst_18402);
} else {
if((state_val_18450 === (31))){
var inst_18431 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
if(cljs.core.truth_(inst_18431)){
var statearr_18465_18524 = state_18449__$1;
(statearr_18465_18524[(1)] = (32));

} else {
var statearr_18466_18525 = state_18449__$1;
(statearr_18466_18525[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (32))){
var inst_18408 = (state_18449[(14)]);
var state_18449__$1 = state_18449;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18449__$1,(35),out,inst_18408);
} else {
if((state_val_18450 === (33))){
var inst_18399 = (state_18449[(12)]);
var inst_18376 = inst_18399;
var state_18449__$1 = (function (){var statearr_18467 = state_18449;
(statearr_18467[(7)] = inst_18376);

return statearr_18467;
})();
var statearr_18468_18526 = state_18449__$1;
(statearr_18468_18526[(2)] = null);

(statearr_18468_18526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (13))){
var inst_18376 = (state_18449[(7)]);
var inst_18383 = inst_18376.cljs$lang$protocol_mask$partition0$;
var inst_18384 = (inst_18383 & (64));
var inst_18385 = inst_18376.cljs$core$ISeq$;
var inst_18386 = (cljs.core.PROTOCOL_SENTINEL === inst_18385);
var inst_18387 = (inst_18384) || (inst_18386);
var state_18449__$1 = state_18449;
if(cljs.core.truth_(inst_18387)){
var statearr_18469_18527 = state_18449__$1;
(statearr_18469_18527[(1)] = (16));

} else {
var statearr_18470_18528 = state_18449__$1;
(statearr_18470_18528[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (22))){
var inst_18408 = (state_18449[(14)]);
var inst_18409 = (state_18449[(11)]);
var inst_18407 = (state_18449[(2)]);
var inst_18408__$1 = cljs.core.nth.call(null,inst_18407,(0),null);
var inst_18409__$1 = cljs.core.nth.call(null,inst_18407,(1),null);
var inst_18410 = (inst_18408__$1 == null);
var inst_18411 = cljs.core._EQ_.call(null,inst_18409__$1,change);
var inst_18412 = (inst_18410) || (inst_18411);
var state_18449__$1 = (function (){var statearr_18471 = state_18449;
(statearr_18471[(14)] = inst_18408__$1);

(statearr_18471[(11)] = inst_18409__$1);

return statearr_18471;
})();
if(cljs.core.truth_(inst_18412)){
var statearr_18472_18529 = state_18449__$1;
(statearr_18472_18529[(1)] = (23));

} else {
var statearr_18473_18530 = state_18449__$1;
(statearr_18473_18530[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (36))){
var inst_18399 = (state_18449[(12)]);
var inst_18376 = inst_18399;
var state_18449__$1 = (function (){var statearr_18474 = state_18449;
(statearr_18474[(7)] = inst_18376);

return statearr_18474;
})();
var statearr_18475_18531 = state_18449__$1;
(statearr_18475_18531[(2)] = null);

(statearr_18475_18531[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (29))){
var inst_18423 = (state_18449[(10)]);
var state_18449__$1 = state_18449;
var statearr_18476_18532 = state_18449__$1;
(statearr_18476_18532[(2)] = inst_18423);

(statearr_18476_18532[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (6))){
var state_18449__$1 = state_18449;
var statearr_18477_18533 = state_18449__$1;
(statearr_18477_18533[(2)] = false);

(statearr_18477_18533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (28))){
var inst_18419 = (state_18449[(2)]);
var inst_18420 = calc_state.call(null);
var inst_18376 = inst_18420;
var state_18449__$1 = (function (){var statearr_18478 = state_18449;
(statearr_18478[(7)] = inst_18376);

(statearr_18478[(15)] = inst_18419);

return statearr_18478;
})();
var statearr_18479_18534 = state_18449__$1;
(statearr_18479_18534[(2)] = null);

(statearr_18479_18534[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (25))){
var inst_18445 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
var statearr_18480_18535 = state_18449__$1;
(statearr_18480_18535[(2)] = inst_18445);

(statearr_18480_18535[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (34))){
var inst_18443 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
var statearr_18481_18536 = state_18449__$1;
(statearr_18481_18536[(2)] = inst_18443);

(statearr_18481_18536[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (17))){
var state_18449__$1 = state_18449;
var statearr_18482_18537 = state_18449__$1;
(statearr_18482_18537[(2)] = false);

(statearr_18482_18537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (3))){
var state_18449__$1 = state_18449;
var statearr_18483_18538 = state_18449__$1;
(statearr_18483_18538[(2)] = false);

(statearr_18483_18538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (12))){
var inst_18447 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18449__$1,inst_18447);
} else {
if((state_val_18450 === (2))){
var inst_18351 = (state_18449[(8)]);
var inst_18356 = inst_18351.cljs$lang$protocol_mask$partition0$;
var inst_18357 = (inst_18356 & (64));
var inst_18358 = inst_18351.cljs$core$ISeq$;
var inst_18359 = (cljs.core.PROTOCOL_SENTINEL === inst_18358);
var inst_18360 = (inst_18357) || (inst_18359);
var state_18449__$1 = state_18449;
if(cljs.core.truth_(inst_18360)){
var statearr_18484_18539 = state_18449__$1;
(statearr_18484_18539[(1)] = (5));

} else {
var statearr_18485_18540 = state_18449__$1;
(statearr_18485_18540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (23))){
var inst_18408 = (state_18449[(14)]);
var inst_18414 = (inst_18408 == null);
var state_18449__$1 = state_18449;
if(cljs.core.truth_(inst_18414)){
var statearr_18486_18541 = state_18449__$1;
(statearr_18486_18541[(1)] = (26));

} else {
var statearr_18487_18542 = state_18449__$1;
(statearr_18487_18542[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (35))){
var inst_18434 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
if(cljs.core.truth_(inst_18434)){
var statearr_18488_18543 = state_18449__$1;
(statearr_18488_18543[(1)] = (36));

} else {
var statearr_18489_18544 = state_18449__$1;
(statearr_18489_18544[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (19))){
var inst_18376 = (state_18449[(7)]);
var inst_18396 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18376);
var state_18449__$1 = state_18449;
var statearr_18490_18545 = state_18449__$1;
(statearr_18490_18545[(2)] = inst_18396);

(statearr_18490_18545[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (11))){
var inst_18376 = (state_18449[(7)]);
var inst_18380 = (inst_18376 == null);
var inst_18381 = cljs.core.not.call(null,inst_18380);
var state_18449__$1 = state_18449;
if(inst_18381){
var statearr_18491_18546 = state_18449__$1;
(statearr_18491_18546[(1)] = (13));

} else {
var statearr_18492_18547 = state_18449__$1;
(statearr_18492_18547[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (9))){
var inst_18351 = (state_18449[(8)]);
var state_18449__$1 = state_18449;
var statearr_18493_18548 = state_18449__$1;
(statearr_18493_18548[(2)] = inst_18351);

(statearr_18493_18548[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (5))){
var state_18449__$1 = state_18449;
var statearr_18494_18549 = state_18449__$1;
(statearr_18494_18549[(2)] = true);

(statearr_18494_18549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (14))){
var state_18449__$1 = state_18449;
var statearr_18495_18550 = state_18449__$1;
(statearr_18495_18550[(2)] = false);

(statearr_18495_18550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (26))){
var inst_18409 = (state_18449[(11)]);
var inst_18416 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18409);
var state_18449__$1 = state_18449;
var statearr_18496_18551 = state_18449__$1;
(statearr_18496_18551[(2)] = inst_18416);

(statearr_18496_18551[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (16))){
var state_18449__$1 = state_18449;
var statearr_18497_18552 = state_18449__$1;
(statearr_18497_18552[(2)] = true);

(statearr_18497_18552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (38))){
var inst_18439 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
var statearr_18498_18553 = state_18449__$1;
(statearr_18498_18553[(2)] = inst_18439);

(statearr_18498_18553[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (30))){
var inst_18401 = (state_18449[(13)]);
var inst_18400 = (state_18449[(9)]);
var inst_18409 = (state_18449[(11)]);
var inst_18426 = cljs.core.empty_QMARK_.call(null,inst_18400);
var inst_18427 = inst_18401.call(null,inst_18409);
var inst_18428 = cljs.core.not.call(null,inst_18427);
var inst_18429 = (inst_18426) && (inst_18428);
var state_18449__$1 = state_18449;
var statearr_18499_18554 = state_18449__$1;
(statearr_18499_18554[(2)] = inst_18429);

(statearr_18499_18554[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (10))){
var inst_18351 = (state_18449[(8)]);
var inst_18372 = (state_18449[(2)]);
var inst_18373 = cljs.core.get.call(null,inst_18372,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18374 = cljs.core.get.call(null,inst_18372,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18375 = cljs.core.get.call(null,inst_18372,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18376 = inst_18351;
var state_18449__$1 = (function (){var statearr_18500 = state_18449;
(statearr_18500[(7)] = inst_18376);

(statearr_18500[(16)] = inst_18373);

(statearr_18500[(17)] = inst_18375);

(statearr_18500[(18)] = inst_18374);

return statearr_18500;
})();
var statearr_18501_18555 = state_18449__$1;
(statearr_18501_18555[(2)] = null);

(statearr_18501_18555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (18))){
var inst_18391 = (state_18449[(2)]);
var state_18449__$1 = state_18449;
var statearr_18502_18556 = state_18449__$1;
(statearr_18502_18556[(2)] = inst_18391);

(statearr_18502_18556[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (37))){
var state_18449__$1 = state_18449;
var statearr_18503_18557 = state_18449__$1;
(statearr_18503_18557[(2)] = null);

(statearr_18503_18557[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18450 === (8))){
var inst_18351 = (state_18449[(8)]);
var inst_18369 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18351);
var state_18449__$1 = state_18449;
var statearr_18504_18558 = state_18449__$1;
(statearr_18504_18558[(2)] = inst_18369);

(statearr_18504_18558[(1)] = (10));


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
});})(c__16774__auto___18512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16662__auto__,c__16774__auto___18512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16663__auto__ = null;
var cljs$core$async$mix_$_state_machine__16663__auto____0 = (function (){
var statearr_18508 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18508[(0)] = cljs$core$async$mix_$_state_machine__16663__auto__);

(statearr_18508[(1)] = (1));

return statearr_18508;
});
var cljs$core$async$mix_$_state_machine__16663__auto____1 = (function (state_18449){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_18449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e18509){if((e18509 instanceof Object)){
var ex__16666__auto__ = e18509;
var statearr_18510_18559 = state_18449;
(statearr_18510_18559[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18560 = state_18449;
state_18449 = G__18560;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16663__auto__ = function(state_18449){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16663__auto____1.call(this,state_18449);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16663__auto____0;
cljs$core$async$mix_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16663__auto____1;
return cljs$core$async$mix_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___18512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16776__auto__ = (function (){var statearr_18511 = f__16775__auto__.call(null);
(statearr_18511[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___18512);

return statearr_18511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___18512,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7698__auto__ = (((p == null))?null:p);
var m__7699__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7699__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__7698__auto__ = (((p == null))?null:p);
var m__7699__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,p,v,ch);
} else {
var m__7699__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args18561 = [];
var len__8143__auto___18564 = arguments.length;
var i__8144__auto___18565 = (0);
while(true){
if((i__8144__auto___18565 < len__8143__auto___18564)){
args18561.push((arguments[i__8144__auto___18565]));

var G__18566 = (i__8144__auto___18565 + (1));
i__8144__auto___18565 = G__18566;
continue;
} else {
}
break;
}

var G__18563 = args18561.length;
switch (G__18563) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18561.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7698__auto__ = (((p == null))?null:p);
var m__7699__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,p);
} else {
var m__7699__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,p);
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
var x__7698__auto__ = (((p == null))?null:p);
var m__7699__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7698__auto__)]);
if(!((m__7699__auto__ == null))){
return m__7699__auto__.call(null,p,v);
} else {
var m__7699__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7699__auto____$1 == null))){
return m__7699__auto____$1.call(null,p,v);
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
var args18569 = [];
var len__8143__auto___18694 = arguments.length;
var i__8144__auto___18695 = (0);
while(true){
if((i__8144__auto___18695 < len__8143__auto___18694)){
args18569.push((arguments[i__8144__auto___18695]));

var G__18696 = (i__8144__auto___18695 + (1));
i__8144__auto___18695 = G__18696;
continue;
} else {
}
break;
}

var G__18571 = args18569.length;
switch (G__18571) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18569.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7030__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7030__auto__,mults){
return (function (p1__18568_SHARP_){
if(cljs.core.truth_(p1__18568_SHARP_.call(null,topic))){
return p1__18568_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18568_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7030__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async18572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18572 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18573){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18573 = meta18573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_18574,meta18573__$1){
var self__ = this;
var _18574__$1 = this;
return (new cljs.core.async.t_cljs$core$async18572(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18573__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18572.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_18574){
var self__ = this;
var _18574__$1 = this;
return self__.meta18573;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18572.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18572.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18572.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18572.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18572.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async18572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18572.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18572.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18573","meta18573",-711505926,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async18572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18572";

cljs.core.async.t_cljs$core$async18572.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async18572");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async18572 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async18572(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18573){
return (new cljs.core.async.t_cljs$core$async18572(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18573));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async18572(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16774__auto___18698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___18698,mults,ensure_mult,p){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___18698,mults,ensure_mult,p){
return (function (state_18646){
var state_val_18647 = (state_18646[(1)]);
if((state_val_18647 === (7))){
var inst_18642 = (state_18646[(2)]);
var state_18646__$1 = state_18646;
var statearr_18648_18699 = state_18646__$1;
(statearr_18648_18699[(2)] = inst_18642);

(statearr_18648_18699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (20))){
var state_18646__$1 = state_18646;
var statearr_18649_18700 = state_18646__$1;
(statearr_18649_18700[(2)] = null);

(statearr_18649_18700[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (1))){
var state_18646__$1 = state_18646;
var statearr_18650_18701 = state_18646__$1;
(statearr_18650_18701[(2)] = null);

(statearr_18650_18701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (24))){
var inst_18625 = (state_18646[(7)]);
var inst_18634 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_18625);
var state_18646__$1 = state_18646;
var statearr_18651_18702 = state_18646__$1;
(statearr_18651_18702[(2)] = inst_18634);

(statearr_18651_18702[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (4))){
var inst_18577 = (state_18646[(8)]);
var inst_18577__$1 = (state_18646[(2)]);
var inst_18578 = (inst_18577__$1 == null);
var state_18646__$1 = (function (){var statearr_18652 = state_18646;
(statearr_18652[(8)] = inst_18577__$1);

return statearr_18652;
})();
if(cljs.core.truth_(inst_18578)){
var statearr_18653_18703 = state_18646__$1;
(statearr_18653_18703[(1)] = (5));

} else {
var statearr_18654_18704 = state_18646__$1;
(statearr_18654_18704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (15))){
var inst_18619 = (state_18646[(2)]);
var state_18646__$1 = state_18646;
var statearr_18655_18705 = state_18646__$1;
(statearr_18655_18705[(2)] = inst_18619);

(statearr_18655_18705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (21))){
var inst_18639 = (state_18646[(2)]);
var state_18646__$1 = (function (){var statearr_18656 = state_18646;
(statearr_18656[(9)] = inst_18639);

return statearr_18656;
})();
var statearr_18657_18706 = state_18646__$1;
(statearr_18657_18706[(2)] = null);

(statearr_18657_18706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (13))){
var inst_18601 = (state_18646[(10)]);
var inst_18603 = cljs.core.chunked_seq_QMARK_.call(null,inst_18601);
var state_18646__$1 = state_18646;
if(inst_18603){
var statearr_18658_18707 = state_18646__$1;
(statearr_18658_18707[(1)] = (16));

} else {
var statearr_18659_18708 = state_18646__$1;
(statearr_18659_18708[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (22))){
var inst_18631 = (state_18646[(2)]);
var state_18646__$1 = state_18646;
if(cljs.core.truth_(inst_18631)){
var statearr_18660_18709 = state_18646__$1;
(statearr_18660_18709[(1)] = (23));

} else {
var statearr_18661_18710 = state_18646__$1;
(statearr_18661_18710[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (6))){
var inst_18625 = (state_18646[(7)]);
var inst_18577 = (state_18646[(8)]);
var inst_18627 = (state_18646[(11)]);
var inst_18625__$1 = topic_fn.call(null,inst_18577);
var inst_18626 = cljs.core.deref.call(null,mults);
var inst_18627__$1 = cljs.core.get.call(null,inst_18626,inst_18625__$1);
var state_18646__$1 = (function (){var statearr_18662 = state_18646;
(statearr_18662[(7)] = inst_18625__$1);

(statearr_18662[(11)] = inst_18627__$1);

return statearr_18662;
})();
if(cljs.core.truth_(inst_18627__$1)){
var statearr_18663_18711 = state_18646__$1;
(statearr_18663_18711[(1)] = (19));

} else {
var statearr_18664_18712 = state_18646__$1;
(statearr_18664_18712[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (25))){
var inst_18636 = (state_18646[(2)]);
var state_18646__$1 = state_18646;
var statearr_18665_18713 = state_18646__$1;
(statearr_18665_18713[(2)] = inst_18636);

(statearr_18665_18713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (17))){
var inst_18601 = (state_18646[(10)]);
var inst_18610 = cljs.core.first.call(null,inst_18601);
var inst_18611 = cljs.core.async.muxch_STAR_.call(null,inst_18610);
var inst_18612 = cljs.core.async.close_BANG_.call(null,inst_18611);
var inst_18613 = cljs.core.next.call(null,inst_18601);
var inst_18587 = inst_18613;
var inst_18588 = null;
var inst_18589 = (0);
var inst_18590 = (0);
var state_18646__$1 = (function (){var statearr_18666 = state_18646;
(statearr_18666[(12)] = inst_18589);

(statearr_18666[(13)] = inst_18612);

(statearr_18666[(14)] = inst_18588);

(statearr_18666[(15)] = inst_18587);

(statearr_18666[(16)] = inst_18590);

return statearr_18666;
})();
var statearr_18667_18714 = state_18646__$1;
(statearr_18667_18714[(2)] = null);

(statearr_18667_18714[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (3))){
var inst_18644 = (state_18646[(2)]);
var state_18646__$1 = state_18646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18646__$1,inst_18644);
} else {
if((state_val_18647 === (12))){
var inst_18621 = (state_18646[(2)]);
var state_18646__$1 = state_18646;
var statearr_18668_18715 = state_18646__$1;
(statearr_18668_18715[(2)] = inst_18621);

(statearr_18668_18715[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (2))){
var state_18646__$1 = state_18646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18646__$1,(4),ch);
} else {
if((state_val_18647 === (23))){
var state_18646__$1 = state_18646;
var statearr_18669_18716 = state_18646__$1;
(statearr_18669_18716[(2)] = null);

(statearr_18669_18716[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (19))){
var inst_18577 = (state_18646[(8)]);
var inst_18627 = (state_18646[(11)]);
var inst_18629 = cljs.core.async.muxch_STAR_.call(null,inst_18627);
var state_18646__$1 = state_18646;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18646__$1,(22),inst_18629,inst_18577);
} else {
if((state_val_18647 === (11))){
var inst_18601 = (state_18646[(10)]);
var inst_18587 = (state_18646[(15)]);
var inst_18601__$1 = cljs.core.seq.call(null,inst_18587);
var state_18646__$1 = (function (){var statearr_18670 = state_18646;
(statearr_18670[(10)] = inst_18601__$1);

return statearr_18670;
})();
if(inst_18601__$1){
var statearr_18671_18717 = state_18646__$1;
(statearr_18671_18717[(1)] = (13));

} else {
var statearr_18672_18718 = state_18646__$1;
(statearr_18672_18718[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (9))){
var inst_18623 = (state_18646[(2)]);
var state_18646__$1 = state_18646;
var statearr_18673_18719 = state_18646__$1;
(statearr_18673_18719[(2)] = inst_18623);

(statearr_18673_18719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (5))){
var inst_18584 = cljs.core.deref.call(null,mults);
var inst_18585 = cljs.core.vals.call(null,inst_18584);
var inst_18586 = cljs.core.seq.call(null,inst_18585);
var inst_18587 = inst_18586;
var inst_18588 = null;
var inst_18589 = (0);
var inst_18590 = (0);
var state_18646__$1 = (function (){var statearr_18674 = state_18646;
(statearr_18674[(12)] = inst_18589);

(statearr_18674[(14)] = inst_18588);

(statearr_18674[(15)] = inst_18587);

(statearr_18674[(16)] = inst_18590);

return statearr_18674;
})();
var statearr_18675_18720 = state_18646__$1;
(statearr_18675_18720[(2)] = null);

(statearr_18675_18720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (14))){
var state_18646__$1 = state_18646;
var statearr_18679_18721 = state_18646__$1;
(statearr_18679_18721[(2)] = null);

(statearr_18679_18721[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (16))){
var inst_18601 = (state_18646[(10)]);
var inst_18605 = cljs.core.chunk_first.call(null,inst_18601);
var inst_18606 = cljs.core.chunk_rest.call(null,inst_18601);
var inst_18607 = cljs.core.count.call(null,inst_18605);
var inst_18587 = inst_18606;
var inst_18588 = inst_18605;
var inst_18589 = inst_18607;
var inst_18590 = (0);
var state_18646__$1 = (function (){var statearr_18680 = state_18646;
(statearr_18680[(12)] = inst_18589);

(statearr_18680[(14)] = inst_18588);

(statearr_18680[(15)] = inst_18587);

(statearr_18680[(16)] = inst_18590);

return statearr_18680;
})();
var statearr_18681_18722 = state_18646__$1;
(statearr_18681_18722[(2)] = null);

(statearr_18681_18722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (10))){
var inst_18589 = (state_18646[(12)]);
var inst_18588 = (state_18646[(14)]);
var inst_18587 = (state_18646[(15)]);
var inst_18590 = (state_18646[(16)]);
var inst_18595 = cljs.core._nth.call(null,inst_18588,inst_18590);
var inst_18596 = cljs.core.async.muxch_STAR_.call(null,inst_18595);
var inst_18597 = cljs.core.async.close_BANG_.call(null,inst_18596);
var inst_18598 = (inst_18590 + (1));
var tmp18676 = inst_18589;
var tmp18677 = inst_18588;
var tmp18678 = inst_18587;
var inst_18587__$1 = tmp18678;
var inst_18588__$1 = tmp18677;
var inst_18589__$1 = tmp18676;
var inst_18590__$1 = inst_18598;
var state_18646__$1 = (function (){var statearr_18682 = state_18646;
(statearr_18682[(12)] = inst_18589__$1);

(statearr_18682[(14)] = inst_18588__$1);

(statearr_18682[(17)] = inst_18597);

(statearr_18682[(15)] = inst_18587__$1);

(statearr_18682[(16)] = inst_18590__$1);

return statearr_18682;
})();
var statearr_18683_18723 = state_18646__$1;
(statearr_18683_18723[(2)] = null);

(statearr_18683_18723[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (18))){
var inst_18616 = (state_18646[(2)]);
var state_18646__$1 = state_18646;
var statearr_18684_18724 = state_18646__$1;
(statearr_18684_18724[(2)] = inst_18616);

(statearr_18684_18724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18647 === (8))){
var inst_18589 = (state_18646[(12)]);
var inst_18590 = (state_18646[(16)]);
var inst_18592 = (inst_18590 < inst_18589);
var inst_18593 = inst_18592;
var state_18646__$1 = state_18646;
if(cljs.core.truth_(inst_18593)){
var statearr_18685_18725 = state_18646__$1;
(statearr_18685_18725[(1)] = (10));

} else {
var statearr_18686_18726 = state_18646__$1;
(statearr_18686_18726[(1)] = (11));

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
});})(c__16774__auto___18698,mults,ensure_mult,p))
;
return ((function (switch__16662__auto__,c__16774__auto___18698,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_18690 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18690[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_18690[(1)] = (1));

return statearr_18690;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_18646){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_18646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e18691){if((e18691 instanceof Object)){
var ex__16666__auto__ = e18691;
var statearr_18692_18727 = state_18646;
(statearr_18692_18727[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18691;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18728 = state_18646;
state_18646 = G__18728;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_18646){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_18646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___18698,mults,ensure_mult,p))
})();
var state__16776__auto__ = (function (){var statearr_18693 = f__16775__auto__.call(null);
(statearr_18693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___18698);

return statearr_18693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___18698,mults,ensure_mult,p))
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
var args18729 = [];
var len__8143__auto___18732 = arguments.length;
var i__8144__auto___18733 = (0);
while(true){
if((i__8144__auto___18733 < len__8143__auto___18732)){
args18729.push((arguments[i__8144__auto___18733]));

var G__18734 = (i__8144__auto___18733 + (1));
i__8144__auto___18733 = G__18734;
continue;
} else {
}
break;
}

var G__18731 = args18729.length;
switch (G__18731) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18729.length)].join('')));

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
var args18736 = [];
var len__8143__auto___18739 = arguments.length;
var i__8144__auto___18740 = (0);
while(true){
if((i__8144__auto___18740 < len__8143__auto___18739)){
args18736.push((arguments[i__8144__auto___18740]));

var G__18741 = (i__8144__auto___18740 + (1));
i__8144__auto___18740 = G__18741;
continue;
} else {
}
break;
}

var G__18738 = args18736.length;
switch (G__18738) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18736.length)].join('')));

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
var args18743 = [];
var len__8143__auto___18814 = arguments.length;
var i__8144__auto___18815 = (0);
while(true){
if((i__8144__auto___18815 < len__8143__auto___18814)){
args18743.push((arguments[i__8144__auto___18815]));

var G__18816 = (i__8144__auto___18815 + (1));
i__8144__auto___18815 = G__18816;
continue;
} else {
}
break;
}

var G__18745 = args18743.length;
switch (G__18745) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18743.length)].join('')));

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
var c__16774__auto___18818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___18818,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___18818,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_18784){
var state_val_18785 = (state_18784[(1)]);
if((state_val_18785 === (7))){
var state_18784__$1 = state_18784;
var statearr_18786_18819 = state_18784__$1;
(statearr_18786_18819[(2)] = null);

(statearr_18786_18819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (1))){
var state_18784__$1 = state_18784;
var statearr_18787_18820 = state_18784__$1;
(statearr_18787_18820[(2)] = null);

(statearr_18787_18820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (4))){
var inst_18748 = (state_18784[(7)]);
var inst_18750 = (inst_18748 < cnt);
var state_18784__$1 = state_18784;
if(cljs.core.truth_(inst_18750)){
var statearr_18788_18821 = state_18784__$1;
(statearr_18788_18821[(1)] = (6));

} else {
var statearr_18789_18822 = state_18784__$1;
(statearr_18789_18822[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (15))){
var inst_18780 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
var statearr_18790_18823 = state_18784__$1;
(statearr_18790_18823[(2)] = inst_18780);

(statearr_18790_18823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (13))){
var inst_18773 = cljs.core.async.close_BANG_.call(null,out);
var state_18784__$1 = state_18784;
var statearr_18791_18824 = state_18784__$1;
(statearr_18791_18824[(2)] = inst_18773);

(statearr_18791_18824[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (6))){
var state_18784__$1 = state_18784;
var statearr_18792_18825 = state_18784__$1;
(statearr_18792_18825[(2)] = null);

(statearr_18792_18825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (3))){
var inst_18782 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18784__$1,inst_18782);
} else {
if((state_val_18785 === (12))){
var inst_18770 = (state_18784[(8)]);
var inst_18770__$1 = (state_18784[(2)]);
var inst_18771 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_18770__$1);
var state_18784__$1 = (function (){var statearr_18793 = state_18784;
(statearr_18793[(8)] = inst_18770__$1);

return statearr_18793;
})();
if(cljs.core.truth_(inst_18771)){
var statearr_18794_18826 = state_18784__$1;
(statearr_18794_18826[(1)] = (13));

} else {
var statearr_18795_18827 = state_18784__$1;
(statearr_18795_18827[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (2))){
var inst_18747 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_18748 = (0);
var state_18784__$1 = (function (){var statearr_18796 = state_18784;
(statearr_18796[(9)] = inst_18747);

(statearr_18796[(7)] = inst_18748);

return statearr_18796;
})();
var statearr_18797_18828 = state_18784__$1;
(statearr_18797_18828[(2)] = null);

(statearr_18797_18828[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (11))){
var inst_18748 = (state_18784[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_18784,(10),Object,null,(9));
var inst_18757 = chs__$1.call(null,inst_18748);
var inst_18758 = done.call(null,inst_18748);
var inst_18759 = cljs.core.async.take_BANG_.call(null,inst_18757,inst_18758);
var state_18784__$1 = state_18784;
var statearr_18798_18829 = state_18784__$1;
(statearr_18798_18829[(2)] = inst_18759);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (9))){
var inst_18748 = (state_18784[(7)]);
var inst_18761 = (state_18784[(2)]);
var inst_18762 = (inst_18748 + (1));
var inst_18748__$1 = inst_18762;
var state_18784__$1 = (function (){var statearr_18799 = state_18784;
(statearr_18799[(10)] = inst_18761);

(statearr_18799[(7)] = inst_18748__$1);

return statearr_18799;
})();
var statearr_18800_18830 = state_18784__$1;
(statearr_18800_18830[(2)] = null);

(statearr_18800_18830[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (5))){
var inst_18768 = (state_18784[(2)]);
var state_18784__$1 = (function (){var statearr_18801 = state_18784;
(statearr_18801[(11)] = inst_18768);

return statearr_18801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18784__$1,(12),dchan);
} else {
if((state_val_18785 === (14))){
var inst_18770 = (state_18784[(8)]);
var inst_18775 = cljs.core.apply.call(null,f,inst_18770);
var state_18784__$1 = state_18784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18784__$1,(16),out,inst_18775);
} else {
if((state_val_18785 === (16))){
var inst_18777 = (state_18784[(2)]);
var state_18784__$1 = (function (){var statearr_18802 = state_18784;
(statearr_18802[(12)] = inst_18777);

return statearr_18802;
})();
var statearr_18803_18831 = state_18784__$1;
(statearr_18803_18831[(2)] = null);

(statearr_18803_18831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (10))){
var inst_18752 = (state_18784[(2)]);
var inst_18753 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_18784__$1 = (function (){var statearr_18804 = state_18784;
(statearr_18804[(13)] = inst_18752);

return statearr_18804;
})();
var statearr_18805_18832 = state_18784__$1;
(statearr_18805_18832[(2)] = inst_18753);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18784__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18785 === (8))){
var inst_18766 = (state_18784[(2)]);
var state_18784__$1 = state_18784;
var statearr_18806_18833 = state_18784__$1;
(statearr_18806_18833[(2)] = inst_18766);

(statearr_18806_18833[(1)] = (5));


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
});})(c__16774__auto___18818,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16662__auto__,c__16774__auto___18818,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_18810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18810[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_18810[(1)] = (1));

return statearr_18810;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_18784){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_18784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e18811){if((e18811 instanceof Object)){
var ex__16666__auto__ = e18811;
var statearr_18812_18834 = state_18784;
(statearr_18812_18834[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18835 = state_18784;
state_18784 = G__18835;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_18784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_18784);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___18818,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16776__auto__ = (function (){var statearr_18813 = f__16775__auto__.call(null);
(statearr_18813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___18818);

return statearr_18813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___18818,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args18837 = [];
var len__8143__auto___18895 = arguments.length;
var i__8144__auto___18896 = (0);
while(true){
if((i__8144__auto___18896 < len__8143__auto___18895)){
args18837.push((arguments[i__8144__auto___18896]));

var G__18897 = (i__8144__auto___18896 + (1));
i__8144__auto___18896 = G__18897;
continue;
} else {
}
break;
}

var G__18839 = args18837.length;
switch (G__18839) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18837.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16774__auto___18899 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___18899,out){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___18899,out){
return (function (state_18871){
var state_val_18872 = (state_18871[(1)]);
if((state_val_18872 === (7))){
var inst_18851 = (state_18871[(7)]);
var inst_18850 = (state_18871[(8)]);
var inst_18850__$1 = (state_18871[(2)]);
var inst_18851__$1 = cljs.core.nth.call(null,inst_18850__$1,(0),null);
var inst_18852 = cljs.core.nth.call(null,inst_18850__$1,(1),null);
var inst_18853 = (inst_18851__$1 == null);
var state_18871__$1 = (function (){var statearr_18873 = state_18871;
(statearr_18873[(7)] = inst_18851__$1);

(statearr_18873[(9)] = inst_18852);

(statearr_18873[(8)] = inst_18850__$1);

return statearr_18873;
})();
if(cljs.core.truth_(inst_18853)){
var statearr_18874_18900 = state_18871__$1;
(statearr_18874_18900[(1)] = (8));

} else {
var statearr_18875_18901 = state_18871__$1;
(statearr_18875_18901[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (1))){
var inst_18840 = cljs.core.vec.call(null,chs);
var inst_18841 = inst_18840;
var state_18871__$1 = (function (){var statearr_18876 = state_18871;
(statearr_18876[(10)] = inst_18841);

return statearr_18876;
})();
var statearr_18877_18902 = state_18871__$1;
(statearr_18877_18902[(2)] = null);

(statearr_18877_18902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (4))){
var inst_18841 = (state_18871[(10)]);
var state_18871__$1 = state_18871;
return cljs.core.async.ioc_alts_BANG_.call(null,state_18871__$1,(7),inst_18841);
} else {
if((state_val_18872 === (6))){
var inst_18867 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
var statearr_18878_18903 = state_18871__$1;
(statearr_18878_18903[(2)] = inst_18867);

(statearr_18878_18903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (3))){
var inst_18869 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18871__$1,inst_18869);
} else {
if((state_val_18872 === (2))){
var inst_18841 = (state_18871[(10)]);
var inst_18843 = cljs.core.count.call(null,inst_18841);
var inst_18844 = (inst_18843 > (0));
var state_18871__$1 = state_18871;
if(cljs.core.truth_(inst_18844)){
var statearr_18880_18904 = state_18871__$1;
(statearr_18880_18904[(1)] = (4));

} else {
var statearr_18881_18905 = state_18871__$1;
(statearr_18881_18905[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (11))){
var inst_18841 = (state_18871[(10)]);
var inst_18860 = (state_18871[(2)]);
var tmp18879 = inst_18841;
var inst_18841__$1 = tmp18879;
var state_18871__$1 = (function (){var statearr_18882 = state_18871;
(statearr_18882[(11)] = inst_18860);

(statearr_18882[(10)] = inst_18841__$1);

return statearr_18882;
})();
var statearr_18883_18906 = state_18871__$1;
(statearr_18883_18906[(2)] = null);

(statearr_18883_18906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (9))){
var inst_18851 = (state_18871[(7)]);
var state_18871__$1 = state_18871;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18871__$1,(11),out,inst_18851);
} else {
if((state_val_18872 === (5))){
var inst_18865 = cljs.core.async.close_BANG_.call(null,out);
var state_18871__$1 = state_18871;
var statearr_18884_18907 = state_18871__$1;
(statearr_18884_18907[(2)] = inst_18865);

(statearr_18884_18907[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (10))){
var inst_18863 = (state_18871[(2)]);
var state_18871__$1 = state_18871;
var statearr_18885_18908 = state_18871__$1;
(statearr_18885_18908[(2)] = inst_18863);

(statearr_18885_18908[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18872 === (8))){
var inst_18851 = (state_18871[(7)]);
var inst_18852 = (state_18871[(9)]);
var inst_18850 = (state_18871[(8)]);
var inst_18841 = (state_18871[(10)]);
var inst_18855 = (function (){var cs = inst_18841;
var vec__18846 = inst_18850;
var v = inst_18851;
var c = inst_18852;
return ((function (cs,vec__18846,v,c,inst_18851,inst_18852,inst_18850,inst_18841,state_val_18872,c__16774__auto___18899,out){
return (function (p1__18836_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__18836_SHARP_);
});
;})(cs,vec__18846,v,c,inst_18851,inst_18852,inst_18850,inst_18841,state_val_18872,c__16774__auto___18899,out))
})();
var inst_18856 = cljs.core.filterv.call(null,inst_18855,inst_18841);
var inst_18841__$1 = inst_18856;
var state_18871__$1 = (function (){var statearr_18886 = state_18871;
(statearr_18886[(10)] = inst_18841__$1);

return statearr_18886;
})();
var statearr_18887_18909 = state_18871__$1;
(statearr_18887_18909[(2)] = null);

(statearr_18887_18909[(1)] = (2));


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
});})(c__16774__auto___18899,out))
;
return ((function (switch__16662__auto__,c__16774__auto___18899,out){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_18891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18891[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_18891[(1)] = (1));

return statearr_18891;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_18871){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_18871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e18892){if((e18892 instanceof Object)){
var ex__16666__auto__ = e18892;
var statearr_18893_18910 = state_18871;
(statearr_18893_18910[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18911 = state_18871;
state_18871 = G__18911;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_18871){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_18871);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___18899,out))
})();
var state__16776__auto__ = (function (){var statearr_18894 = f__16775__auto__.call(null);
(statearr_18894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___18899);

return statearr_18894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___18899,out))
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
var args18912 = [];
var len__8143__auto___18961 = arguments.length;
var i__8144__auto___18962 = (0);
while(true){
if((i__8144__auto___18962 < len__8143__auto___18961)){
args18912.push((arguments[i__8144__auto___18962]));

var G__18963 = (i__8144__auto___18962 + (1));
i__8144__auto___18962 = G__18963;
continue;
} else {
}
break;
}

var G__18914 = args18912.length;
switch (G__18914) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args18912.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16774__auto___18965 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___18965,out){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___18965,out){
return (function (state_18938){
var state_val_18939 = (state_18938[(1)]);
if((state_val_18939 === (7))){
var inst_18920 = (state_18938[(7)]);
var inst_18920__$1 = (state_18938[(2)]);
var inst_18921 = (inst_18920__$1 == null);
var inst_18922 = cljs.core.not.call(null,inst_18921);
var state_18938__$1 = (function (){var statearr_18940 = state_18938;
(statearr_18940[(7)] = inst_18920__$1);

return statearr_18940;
})();
if(inst_18922){
var statearr_18941_18966 = state_18938__$1;
(statearr_18941_18966[(1)] = (8));

} else {
var statearr_18942_18967 = state_18938__$1;
(statearr_18942_18967[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (1))){
var inst_18915 = (0);
var state_18938__$1 = (function (){var statearr_18943 = state_18938;
(statearr_18943[(8)] = inst_18915);

return statearr_18943;
})();
var statearr_18944_18968 = state_18938__$1;
(statearr_18944_18968[(2)] = null);

(statearr_18944_18968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (4))){
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18938__$1,(7),ch);
} else {
if((state_val_18939 === (6))){
var inst_18933 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18945_18969 = state_18938__$1;
(statearr_18945_18969[(2)] = inst_18933);

(statearr_18945_18969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (3))){
var inst_18935 = (state_18938[(2)]);
var inst_18936 = cljs.core.async.close_BANG_.call(null,out);
var state_18938__$1 = (function (){var statearr_18946 = state_18938;
(statearr_18946[(9)] = inst_18935);

return statearr_18946;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18938__$1,inst_18936);
} else {
if((state_val_18939 === (2))){
var inst_18915 = (state_18938[(8)]);
var inst_18917 = (inst_18915 < n);
var state_18938__$1 = state_18938;
if(cljs.core.truth_(inst_18917)){
var statearr_18947_18970 = state_18938__$1;
(statearr_18947_18970[(1)] = (4));

} else {
var statearr_18948_18971 = state_18938__$1;
(statearr_18948_18971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (11))){
var inst_18915 = (state_18938[(8)]);
var inst_18925 = (state_18938[(2)]);
var inst_18926 = (inst_18915 + (1));
var inst_18915__$1 = inst_18926;
var state_18938__$1 = (function (){var statearr_18949 = state_18938;
(statearr_18949[(8)] = inst_18915__$1);

(statearr_18949[(10)] = inst_18925);

return statearr_18949;
})();
var statearr_18950_18972 = state_18938__$1;
(statearr_18950_18972[(2)] = null);

(statearr_18950_18972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (9))){
var state_18938__$1 = state_18938;
var statearr_18951_18973 = state_18938__$1;
(statearr_18951_18973[(2)] = null);

(statearr_18951_18973[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (5))){
var state_18938__$1 = state_18938;
var statearr_18952_18974 = state_18938__$1;
(statearr_18952_18974[(2)] = null);

(statearr_18952_18974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (10))){
var inst_18930 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
var statearr_18953_18975 = state_18938__$1;
(statearr_18953_18975[(2)] = inst_18930);

(statearr_18953_18975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (8))){
var inst_18920 = (state_18938[(7)]);
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18938__$1,(11),out,inst_18920);
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
});})(c__16774__auto___18965,out))
;
return ((function (switch__16662__auto__,c__16774__auto___18965,out){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_18957 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18957[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_18957[(1)] = (1));

return statearr_18957;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_18938){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_18938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e18958){if((e18958 instanceof Object)){
var ex__16666__auto__ = e18958;
var statearr_18959_18976 = state_18938;
(statearr_18959_18976[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18977 = state_18938;
state_18938 = G__18977;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_18938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_18938);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___18965,out))
})();
var state__16776__auto__ = (function (){var statearr_18960 = f__16775__auto__.call(null);
(statearr_18960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___18965);

return statearr_18960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___18965,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18985 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18985 = (function (f,ch,meta18986){
this.f = f;
this.ch = ch;
this.meta18986 = meta18986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18987,meta18986__$1){
var self__ = this;
var _18987__$1 = this;
return (new cljs.core.async.t_cljs$core$async18985(self__.f,self__.ch,meta18986__$1));
});

cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18987){
var self__ = this;
var _18987__$1 = this;
return self__.meta18986;
});

cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async18988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18988 = (function (f,ch,meta18986,_,fn1,meta18989){
this.f = f;
this.ch = ch;
this.meta18986 = meta18986;
this._ = _;
this.fn1 = fn1;
this.meta18989 = meta18989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18990,meta18989__$1){
var self__ = this;
var _18990__$1 = this;
return (new cljs.core.async.t_cljs$core$async18988(self__.f,self__.ch,self__.meta18986,self__._,self__.fn1,meta18989__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18990){
var self__ = this;
var _18990__$1 = this;
return self__.meta18989;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async18988.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__18978_SHARP_){
return f1.call(null,(((p1__18978_SHARP_ == null))?null:self__.f.call(null,p1__18978_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async18988.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18986","meta18986",1525569556,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async18985","cljs.core.async/t_cljs$core$async18985",993505094,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta18989","meta18989",-770347485,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async18988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18988";

cljs.core.async.t_cljs$core$async18988.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async18988");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async18988 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18988(f__$1,ch__$1,meta18986__$1,___$2,fn1__$1,meta18989){
return (new cljs.core.async.t_cljs$core$async18988(f__$1,ch__$1,meta18986__$1,___$2,fn1__$1,meta18989));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async18988(self__.f,self__.ch,self__.meta18986,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7018__auto__ = ret;
if(cljs.core.truth_(and__7018__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7018__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async18985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18986","meta18986",1525569556,null)], null);
});

cljs.core.async.t_cljs$core$async18985.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18985";

cljs.core.async.t_cljs$core$async18985.cljs$lang$ctorPrWriter = (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async18985");
});

cljs.core.async.__GT_t_cljs$core$async18985 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async18985(f__$1,ch__$1,meta18986){
return (new cljs.core.async.t_cljs$core$async18985(f__$1,ch__$1,meta18986));
});

}

return (new cljs.core.async.t_cljs$core$async18985(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async18994 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18994 = (function (f,ch,meta18995){
this.f = f;
this.ch = ch;
this.meta18995 = meta18995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18996,meta18995__$1){
var self__ = this;
var _18996__$1 = this;
return (new cljs.core.async.t_cljs$core$async18994(self__.f,self__.ch,meta18995__$1));
});

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18996){
var self__ = this;
var _18996__$1 = this;
return self__.meta18995;
});

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async18994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async18994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta18995","meta18995",676729897,null)], null);
});

cljs.core.async.t_cljs$core$async18994.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async18994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18994";

cljs.core.async.t_cljs$core$async18994.cljs$lang$ctorPrWriter = (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async18994");
});

cljs.core.async.__GT_t_cljs$core$async18994 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async18994(f__$1,ch__$1,meta18995){
return (new cljs.core.async.t_cljs$core$async18994(f__$1,ch__$1,meta18995));
});

}

return (new cljs.core.async.t_cljs$core$async18994(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async19000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19000 = (function (p,ch,meta19001){
this.p = p;
this.ch = ch;
this.meta19001 = meta19001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async19000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19002,meta19001__$1){
var self__ = this;
var _19002__$1 = this;
return (new cljs.core.async.t_cljs$core$async19000(self__.p,self__.ch,meta19001__$1));
});

cljs.core.async.t_cljs$core$async19000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19002){
var self__ = this;
var _19002__$1 = this;
return self__.meta19001;
});

cljs.core.async.t_cljs$core$async19000.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19000.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async19000.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async19000.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async19000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async19000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19001","meta19001",-1140562183,null)], null);
});

cljs.core.async.t_cljs$core$async19000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async19000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19000";

cljs.core.async.t_cljs$core$async19000.cljs$lang$ctorPrWriter = (function (this__7641__auto__,writer__7642__auto__,opt__7643__auto__){
return cljs.core._write.call(null,writer__7642__auto__,"cljs.core.async/t_cljs$core$async19000");
});

cljs.core.async.__GT_t_cljs$core$async19000 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19000(p__$1,ch__$1,meta19001){
return (new cljs.core.async.t_cljs$core$async19000(p__$1,ch__$1,meta19001));
});

}

return (new cljs.core.async.t_cljs$core$async19000(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args19003 = [];
var len__8143__auto___19047 = arguments.length;
var i__8144__auto___19048 = (0);
while(true){
if((i__8144__auto___19048 < len__8143__auto___19047)){
args19003.push((arguments[i__8144__auto___19048]));

var G__19049 = (i__8144__auto___19048 + (1));
i__8144__auto___19048 = G__19049;
continue;
} else {
}
break;
}

var G__19005 = args19003.length;
switch (G__19005) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19003.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16774__auto___19051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___19051,out){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___19051,out){
return (function (state_19026){
var state_val_19027 = (state_19026[(1)]);
if((state_val_19027 === (7))){
var inst_19022 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
var statearr_19028_19052 = state_19026__$1;
(statearr_19028_19052[(2)] = inst_19022);

(statearr_19028_19052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (1))){
var state_19026__$1 = state_19026;
var statearr_19029_19053 = state_19026__$1;
(statearr_19029_19053[(2)] = null);

(statearr_19029_19053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (4))){
var inst_19008 = (state_19026[(7)]);
var inst_19008__$1 = (state_19026[(2)]);
var inst_19009 = (inst_19008__$1 == null);
var state_19026__$1 = (function (){var statearr_19030 = state_19026;
(statearr_19030[(7)] = inst_19008__$1);

return statearr_19030;
})();
if(cljs.core.truth_(inst_19009)){
var statearr_19031_19054 = state_19026__$1;
(statearr_19031_19054[(1)] = (5));

} else {
var statearr_19032_19055 = state_19026__$1;
(statearr_19032_19055[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (6))){
var inst_19008 = (state_19026[(7)]);
var inst_19013 = p.call(null,inst_19008);
var state_19026__$1 = state_19026;
if(cljs.core.truth_(inst_19013)){
var statearr_19033_19056 = state_19026__$1;
(statearr_19033_19056[(1)] = (8));

} else {
var statearr_19034_19057 = state_19026__$1;
(statearr_19034_19057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (3))){
var inst_19024 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19026__$1,inst_19024);
} else {
if((state_val_19027 === (2))){
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19026__$1,(4),ch);
} else {
if((state_val_19027 === (11))){
var inst_19016 = (state_19026[(2)]);
var state_19026__$1 = state_19026;
var statearr_19035_19058 = state_19026__$1;
(statearr_19035_19058[(2)] = inst_19016);

(statearr_19035_19058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (9))){
var state_19026__$1 = state_19026;
var statearr_19036_19059 = state_19026__$1;
(statearr_19036_19059[(2)] = null);

(statearr_19036_19059[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (5))){
var inst_19011 = cljs.core.async.close_BANG_.call(null,out);
var state_19026__$1 = state_19026;
var statearr_19037_19060 = state_19026__$1;
(statearr_19037_19060[(2)] = inst_19011);

(statearr_19037_19060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (10))){
var inst_19019 = (state_19026[(2)]);
var state_19026__$1 = (function (){var statearr_19038 = state_19026;
(statearr_19038[(8)] = inst_19019);

return statearr_19038;
})();
var statearr_19039_19061 = state_19026__$1;
(statearr_19039_19061[(2)] = null);

(statearr_19039_19061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19027 === (8))){
var inst_19008 = (state_19026[(7)]);
var state_19026__$1 = state_19026;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19026__$1,(11),out,inst_19008);
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
});})(c__16774__auto___19051,out))
;
return ((function (switch__16662__auto__,c__16774__auto___19051,out){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_19043 = [null,null,null,null,null,null,null,null,null];
(statearr_19043[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_19043[(1)] = (1));

return statearr_19043;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_19026){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_19026);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e19044){if((e19044 instanceof Object)){
var ex__16666__auto__ = e19044;
var statearr_19045_19062 = state_19026;
(statearr_19045_19062[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19026);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19063 = state_19026;
state_19026 = G__19063;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_19026){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_19026);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___19051,out))
})();
var state__16776__auto__ = (function (){var statearr_19046 = f__16775__auto__.call(null);
(statearr_19046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___19051);

return statearr_19046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___19051,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args19064 = [];
var len__8143__auto___19067 = arguments.length;
var i__8144__auto___19068 = (0);
while(true){
if((i__8144__auto___19068 < len__8143__auto___19067)){
args19064.push((arguments[i__8144__auto___19068]));

var G__19069 = (i__8144__auto___19068 + (1));
i__8144__auto___19068 = G__19069;
continue;
} else {
}
break;
}

var G__19066 = args19064.length;
switch (G__19066) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19064.length)].join('')));

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
var c__16774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto__){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto__){
return (function (state_19236){
var state_val_19237 = (state_19236[(1)]);
if((state_val_19237 === (7))){
var inst_19232 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19238_19279 = state_19236__$1;
(statearr_19238_19279[(2)] = inst_19232);

(statearr_19238_19279[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (20))){
var inst_19202 = (state_19236[(7)]);
var inst_19213 = (state_19236[(2)]);
var inst_19214 = cljs.core.next.call(null,inst_19202);
var inst_19188 = inst_19214;
var inst_19189 = null;
var inst_19190 = (0);
var inst_19191 = (0);
var state_19236__$1 = (function (){var statearr_19239 = state_19236;
(statearr_19239[(8)] = inst_19191);

(statearr_19239[(9)] = inst_19213);

(statearr_19239[(10)] = inst_19190);

(statearr_19239[(11)] = inst_19189);

(statearr_19239[(12)] = inst_19188);

return statearr_19239;
})();
var statearr_19240_19280 = state_19236__$1;
(statearr_19240_19280[(2)] = null);

(statearr_19240_19280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (1))){
var state_19236__$1 = state_19236;
var statearr_19241_19281 = state_19236__$1;
(statearr_19241_19281[(2)] = null);

(statearr_19241_19281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (4))){
var inst_19177 = (state_19236[(13)]);
var inst_19177__$1 = (state_19236[(2)]);
var inst_19178 = (inst_19177__$1 == null);
var state_19236__$1 = (function (){var statearr_19242 = state_19236;
(statearr_19242[(13)] = inst_19177__$1);

return statearr_19242;
})();
if(cljs.core.truth_(inst_19178)){
var statearr_19243_19282 = state_19236__$1;
(statearr_19243_19282[(1)] = (5));

} else {
var statearr_19244_19283 = state_19236__$1;
(statearr_19244_19283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (15))){
var state_19236__$1 = state_19236;
var statearr_19248_19284 = state_19236__$1;
(statearr_19248_19284[(2)] = null);

(statearr_19248_19284[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (21))){
var state_19236__$1 = state_19236;
var statearr_19249_19285 = state_19236__$1;
(statearr_19249_19285[(2)] = null);

(statearr_19249_19285[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (13))){
var inst_19191 = (state_19236[(8)]);
var inst_19190 = (state_19236[(10)]);
var inst_19189 = (state_19236[(11)]);
var inst_19188 = (state_19236[(12)]);
var inst_19198 = (state_19236[(2)]);
var inst_19199 = (inst_19191 + (1));
var tmp19245 = inst_19190;
var tmp19246 = inst_19189;
var tmp19247 = inst_19188;
var inst_19188__$1 = tmp19247;
var inst_19189__$1 = tmp19246;
var inst_19190__$1 = tmp19245;
var inst_19191__$1 = inst_19199;
var state_19236__$1 = (function (){var statearr_19250 = state_19236;
(statearr_19250[(8)] = inst_19191__$1);

(statearr_19250[(14)] = inst_19198);

(statearr_19250[(10)] = inst_19190__$1);

(statearr_19250[(11)] = inst_19189__$1);

(statearr_19250[(12)] = inst_19188__$1);

return statearr_19250;
})();
var statearr_19251_19286 = state_19236__$1;
(statearr_19251_19286[(2)] = null);

(statearr_19251_19286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (22))){
var state_19236__$1 = state_19236;
var statearr_19252_19287 = state_19236__$1;
(statearr_19252_19287[(2)] = null);

(statearr_19252_19287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (6))){
var inst_19177 = (state_19236[(13)]);
var inst_19186 = f.call(null,inst_19177);
var inst_19187 = cljs.core.seq.call(null,inst_19186);
var inst_19188 = inst_19187;
var inst_19189 = null;
var inst_19190 = (0);
var inst_19191 = (0);
var state_19236__$1 = (function (){var statearr_19253 = state_19236;
(statearr_19253[(8)] = inst_19191);

(statearr_19253[(10)] = inst_19190);

(statearr_19253[(11)] = inst_19189);

(statearr_19253[(12)] = inst_19188);

return statearr_19253;
})();
var statearr_19254_19288 = state_19236__$1;
(statearr_19254_19288[(2)] = null);

(statearr_19254_19288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (17))){
var inst_19202 = (state_19236[(7)]);
var inst_19206 = cljs.core.chunk_first.call(null,inst_19202);
var inst_19207 = cljs.core.chunk_rest.call(null,inst_19202);
var inst_19208 = cljs.core.count.call(null,inst_19206);
var inst_19188 = inst_19207;
var inst_19189 = inst_19206;
var inst_19190 = inst_19208;
var inst_19191 = (0);
var state_19236__$1 = (function (){var statearr_19255 = state_19236;
(statearr_19255[(8)] = inst_19191);

(statearr_19255[(10)] = inst_19190);

(statearr_19255[(11)] = inst_19189);

(statearr_19255[(12)] = inst_19188);

return statearr_19255;
})();
var statearr_19256_19289 = state_19236__$1;
(statearr_19256_19289[(2)] = null);

(statearr_19256_19289[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (3))){
var inst_19234 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19236__$1,inst_19234);
} else {
if((state_val_19237 === (12))){
var inst_19222 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19257_19290 = state_19236__$1;
(statearr_19257_19290[(2)] = inst_19222);

(statearr_19257_19290[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (2))){
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19236__$1,(4),in$);
} else {
if((state_val_19237 === (23))){
var inst_19230 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19258_19291 = state_19236__$1;
(statearr_19258_19291[(2)] = inst_19230);

(statearr_19258_19291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (19))){
var inst_19217 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19259_19292 = state_19236__$1;
(statearr_19259_19292[(2)] = inst_19217);

(statearr_19259_19292[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (11))){
var inst_19202 = (state_19236[(7)]);
var inst_19188 = (state_19236[(12)]);
var inst_19202__$1 = cljs.core.seq.call(null,inst_19188);
var state_19236__$1 = (function (){var statearr_19260 = state_19236;
(statearr_19260[(7)] = inst_19202__$1);

return statearr_19260;
})();
if(inst_19202__$1){
var statearr_19261_19293 = state_19236__$1;
(statearr_19261_19293[(1)] = (14));

} else {
var statearr_19262_19294 = state_19236__$1;
(statearr_19262_19294[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (9))){
var inst_19224 = (state_19236[(2)]);
var inst_19225 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19236__$1 = (function (){var statearr_19263 = state_19236;
(statearr_19263[(15)] = inst_19224);

return statearr_19263;
})();
if(cljs.core.truth_(inst_19225)){
var statearr_19264_19295 = state_19236__$1;
(statearr_19264_19295[(1)] = (21));

} else {
var statearr_19265_19296 = state_19236__$1;
(statearr_19265_19296[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (5))){
var inst_19180 = cljs.core.async.close_BANG_.call(null,out);
var state_19236__$1 = state_19236;
var statearr_19266_19297 = state_19236__$1;
(statearr_19266_19297[(2)] = inst_19180);

(statearr_19266_19297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (14))){
var inst_19202 = (state_19236[(7)]);
var inst_19204 = cljs.core.chunked_seq_QMARK_.call(null,inst_19202);
var state_19236__$1 = state_19236;
if(inst_19204){
var statearr_19267_19298 = state_19236__$1;
(statearr_19267_19298[(1)] = (17));

} else {
var statearr_19268_19299 = state_19236__$1;
(statearr_19268_19299[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (16))){
var inst_19220 = (state_19236[(2)]);
var state_19236__$1 = state_19236;
var statearr_19269_19300 = state_19236__$1;
(statearr_19269_19300[(2)] = inst_19220);

(statearr_19269_19300[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19237 === (10))){
var inst_19191 = (state_19236[(8)]);
var inst_19189 = (state_19236[(11)]);
var inst_19196 = cljs.core._nth.call(null,inst_19189,inst_19191);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19236__$1,(13),out,inst_19196);
} else {
if((state_val_19237 === (18))){
var inst_19202 = (state_19236[(7)]);
var inst_19211 = cljs.core.first.call(null,inst_19202);
var state_19236__$1 = state_19236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19236__$1,(20),out,inst_19211);
} else {
if((state_val_19237 === (8))){
var inst_19191 = (state_19236[(8)]);
var inst_19190 = (state_19236[(10)]);
var inst_19193 = (inst_19191 < inst_19190);
var inst_19194 = inst_19193;
var state_19236__$1 = state_19236;
if(cljs.core.truth_(inst_19194)){
var statearr_19270_19301 = state_19236__$1;
(statearr_19270_19301[(1)] = (10));

} else {
var statearr_19271_19302 = state_19236__$1;
(statearr_19271_19302[(1)] = (11));

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
});})(c__16774__auto__))
;
return ((function (switch__16662__auto__,c__16774__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16663__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16663__auto____0 = (function (){
var statearr_19275 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19275[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16663__auto__);

(statearr_19275[(1)] = (1));

return statearr_19275;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16663__auto____1 = (function (state_19236){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_19236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e19276){if((e19276 instanceof Object)){
var ex__16666__auto__ = e19276;
var statearr_19277_19303 = state_19236;
(statearr_19277_19303[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19304 = state_19236;
state_19236 = G__19304;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16663__auto__ = function(state_19236){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16663__auto____1.call(this,state_19236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16663__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16663__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto__))
})();
var state__16776__auto__ = (function (){var statearr_19278 = f__16775__auto__.call(null);
(statearr_19278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto__);

return statearr_19278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto__))
);

return c__16774__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args19305 = [];
var len__8143__auto___19308 = arguments.length;
var i__8144__auto___19309 = (0);
while(true){
if((i__8144__auto___19309 < len__8143__auto___19308)){
args19305.push((arguments[i__8144__auto___19309]));

var G__19310 = (i__8144__auto___19309 + (1));
i__8144__auto___19309 = G__19310;
continue;
} else {
}
break;
}

var G__19307 = args19305.length;
switch (G__19307) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19305.length)].join('')));

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
var args19312 = [];
var len__8143__auto___19315 = arguments.length;
var i__8144__auto___19316 = (0);
while(true){
if((i__8144__auto___19316 < len__8143__auto___19315)){
args19312.push((arguments[i__8144__auto___19316]));

var G__19317 = (i__8144__auto___19316 + (1));
i__8144__auto___19316 = G__19317;
continue;
} else {
}
break;
}

var G__19314 = args19312.length;
switch (G__19314) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19312.length)].join('')));

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
var args19319 = [];
var len__8143__auto___19370 = arguments.length;
var i__8144__auto___19371 = (0);
while(true){
if((i__8144__auto___19371 < len__8143__auto___19370)){
args19319.push((arguments[i__8144__auto___19371]));

var G__19372 = (i__8144__auto___19371 + (1));
i__8144__auto___19371 = G__19372;
continue;
} else {
}
break;
}

var G__19321 = args19319.length;
switch (G__19321) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19319.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16774__auto___19374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___19374,out){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___19374,out){
return (function (state_19345){
var state_val_19346 = (state_19345[(1)]);
if((state_val_19346 === (7))){
var inst_19340 = (state_19345[(2)]);
var state_19345__$1 = state_19345;
var statearr_19347_19375 = state_19345__$1;
(statearr_19347_19375[(2)] = inst_19340);

(statearr_19347_19375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (1))){
var inst_19322 = null;
var state_19345__$1 = (function (){var statearr_19348 = state_19345;
(statearr_19348[(7)] = inst_19322);

return statearr_19348;
})();
var statearr_19349_19376 = state_19345__$1;
(statearr_19349_19376[(2)] = null);

(statearr_19349_19376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (4))){
var inst_19325 = (state_19345[(8)]);
var inst_19325__$1 = (state_19345[(2)]);
var inst_19326 = (inst_19325__$1 == null);
var inst_19327 = cljs.core.not.call(null,inst_19326);
var state_19345__$1 = (function (){var statearr_19350 = state_19345;
(statearr_19350[(8)] = inst_19325__$1);

return statearr_19350;
})();
if(inst_19327){
var statearr_19351_19377 = state_19345__$1;
(statearr_19351_19377[(1)] = (5));

} else {
var statearr_19352_19378 = state_19345__$1;
(statearr_19352_19378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (6))){
var state_19345__$1 = state_19345;
var statearr_19353_19379 = state_19345__$1;
(statearr_19353_19379[(2)] = null);

(statearr_19353_19379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (3))){
var inst_19342 = (state_19345[(2)]);
var inst_19343 = cljs.core.async.close_BANG_.call(null,out);
var state_19345__$1 = (function (){var statearr_19354 = state_19345;
(statearr_19354[(9)] = inst_19342);

return statearr_19354;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19345__$1,inst_19343);
} else {
if((state_val_19346 === (2))){
var state_19345__$1 = state_19345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19345__$1,(4),ch);
} else {
if((state_val_19346 === (11))){
var inst_19325 = (state_19345[(8)]);
var inst_19334 = (state_19345[(2)]);
var inst_19322 = inst_19325;
var state_19345__$1 = (function (){var statearr_19355 = state_19345;
(statearr_19355[(10)] = inst_19334);

(statearr_19355[(7)] = inst_19322);

return statearr_19355;
})();
var statearr_19356_19380 = state_19345__$1;
(statearr_19356_19380[(2)] = null);

(statearr_19356_19380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (9))){
var inst_19325 = (state_19345[(8)]);
var state_19345__$1 = state_19345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19345__$1,(11),out,inst_19325);
} else {
if((state_val_19346 === (5))){
var inst_19325 = (state_19345[(8)]);
var inst_19322 = (state_19345[(7)]);
var inst_19329 = cljs.core._EQ_.call(null,inst_19325,inst_19322);
var state_19345__$1 = state_19345;
if(inst_19329){
var statearr_19358_19381 = state_19345__$1;
(statearr_19358_19381[(1)] = (8));

} else {
var statearr_19359_19382 = state_19345__$1;
(statearr_19359_19382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (10))){
var inst_19337 = (state_19345[(2)]);
var state_19345__$1 = state_19345;
var statearr_19360_19383 = state_19345__$1;
(statearr_19360_19383[(2)] = inst_19337);

(statearr_19360_19383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19346 === (8))){
var inst_19322 = (state_19345[(7)]);
var tmp19357 = inst_19322;
var inst_19322__$1 = tmp19357;
var state_19345__$1 = (function (){var statearr_19361 = state_19345;
(statearr_19361[(7)] = inst_19322__$1);

return statearr_19361;
})();
var statearr_19362_19384 = state_19345__$1;
(statearr_19362_19384[(2)] = null);

(statearr_19362_19384[(1)] = (2));


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
});})(c__16774__auto___19374,out))
;
return ((function (switch__16662__auto__,c__16774__auto___19374,out){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_19366 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19366[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_19366[(1)] = (1));

return statearr_19366;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_19345){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_19345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e19367){if((e19367 instanceof Object)){
var ex__16666__auto__ = e19367;
var statearr_19368_19385 = state_19345;
(statearr_19368_19385[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19386 = state_19345;
state_19345 = G__19386;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_19345){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_19345);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___19374,out))
})();
var state__16776__auto__ = (function (){var statearr_19369 = f__16775__auto__.call(null);
(statearr_19369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___19374);

return statearr_19369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___19374,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args19387 = [];
var len__8143__auto___19457 = arguments.length;
var i__8144__auto___19458 = (0);
while(true){
if((i__8144__auto___19458 < len__8143__auto___19457)){
args19387.push((arguments[i__8144__auto___19458]));

var G__19459 = (i__8144__auto___19458 + (1));
i__8144__auto___19458 = G__19459;
continue;
} else {
}
break;
}

var G__19389 = args19387.length;
switch (G__19389) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19387.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16774__auto___19461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___19461,out){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___19461,out){
return (function (state_19427){
var state_val_19428 = (state_19427[(1)]);
if((state_val_19428 === (7))){
var inst_19423 = (state_19427[(2)]);
var state_19427__$1 = state_19427;
var statearr_19429_19462 = state_19427__$1;
(statearr_19429_19462[(2)] = inst_19423);

(statearr_19429_19462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (1))){
var inst_19390 = (new Array(n));
var inst_19391 = inst_19390;
var inst_19392 = (0);
var state_19427__$1 = (function (){var statearr_19430 = state_19427;
(statearr_19430[(7)] = inst_19392);

(statearr_19430[(8)] = inst_19391);

return statearr_19430;
})();
var statearr_19431_19463 = state_19427__$1;
(statearr_19431_19463[(2)] = null);

(statearr_19431_19463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (4))){
var inst_19395 = (state_19427[(9)]);
var inst_19395__$1 = (state_19427[(2)]);
var inst_19396 = (inst_19395__$1 == null);
var inst_19397 = cljs.core.not.call(null,inst_19396);
var state_19427__$1 = (function (){var statearr_19432 = state_19427;
(statearr_19432[(9)] = inst_19395__$1);

return statearr_19432;
})();
if(inst_19397){
var statearr_19433_19464 = state_19427__$1;
(statearr_19433_19464[(1)] = (5));

} else {
var statearr_19434_19465 = state_19427__$1;
(statearr_19434_19465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (15))){
var inst_19417 = (state_19427[(2)]);
var state_19427__$1 = state_19427;
var statearr_19435_19466 = state_19427__$1;
(statearr_19435_19466[(2)] = inst_19417);

(statearr_19435_19466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (13))){
var state_19427__$1 = state_19427;
var statearr_19436_19467 = state_19427__$1;
(statearr_19436_19467[(2)] = null);

(statearr_19436_19467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (6))){
var inst_19392 = (state_19427[(7)]);
var inst_19413 = (inst_19392 > (0));
var state_19427__$1 = state_19427;
if(cljs.core.truth_(inst_19413)){
var statearr_19437_19468 = state_19427__$1;
(statearr_19437_19468[(1)] = (12));

} else {
var statearr_19438_19469 = state_19427__$1;
(statearr_19438_19469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (3))){
var inst_19425 = (state_19427[(2)]);
var state_19427__$1 = state_19427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19427__$1,inst_19425);
} else {
if((state_val_19428 === (12))){
var inst_19391 = (state_19427[(8)]);
var inst_19415 = cljs.core.vec.call(null,inst_19391);
var state_19427__$1 = state_19427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19427__$1,(15),out,inst_19415);
} else {
if((state_val_19428 === (2))){
var state_19427__$1 = state_19427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19427__$1,(4),ch);
} else {
if((state_val_19428 === (11))){
var inst_19407 = (state_19427[(2)]);
var inst_19408 = (new Array(n));
var inst_19391 = inst_19408;
var inst_19392 = (0);
var state_19427__$1 = (function (){var statearr_19439 = state_19427;
(statearr_19439[(7)] = inst_19392);

(statearr_19439[(8)] = inst_19391);

(statearr_19439[(10)] = inst_19407);

return statearr_19439;
})();
var statearr_19440_19470 = state_19427__$1;
(statearr_19440_19470[(2)] = null);

(statearr_19440_19470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (9))){
var inst_19391 = (state_19427[(8)]);
var inst_19405 = cljs.core.vec.call(null,inst_19391);
var state_19427__$1 = state_19427;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19427__$1,(11),out,inst_19405);
} else {
if((state_val_19428 === (5))){
var inst_19400 = (state_19427[(11)]);
var inst_19392 = (state_19427[(7)]);
var inst_19391 = (state_19427[(8)]);
var inst_19395 = (state_19427[(9)]);
var inst_19399 = (inst_19391[inst_19392] = inst_19395);
var inst_19400__$1 = (inst_19392 + (1));
var inst_19401 = (inst_19400__$1 < n);
var state_19427__$1 = (function (){var statearr_19441 = state_19427;
(statearr_19441[(11)] = inst_19400__$1);

(statearr_19441[(12)] = inst_19399);

return statearr_19441;
})();
if(cljs.core.truth_(inst_19401)){
var statearr_19442_19471 = state_19427__$1;
(statearr_19442_19471[(1)] = (8));

} else {
var statearr_19443_19472 = state_19427__$1;
(statearr_19443_19472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (14))){
var inst_19420 = (state_19427[(2)]);
var inst_19421 = cljs.core.async.close_BANG_.call(null,out);
var state_19427__$1 = (function (){var statearr_19445 = state_19427;
(statearr_19445[(13)] = inst_19420);

return statearr_19445;
})();
var statearr_19446_19473 = state_19427__$1;
(statearr_19446_19473[(2)] = inst_19421);

(statearr_19446_19473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (10))){
var inst_19411 = (state_19427[(2)]);
var state_19427__$1 = state_19427;
var statearr_19447_19474 = state_19427__$1;
(statearr_19447_19474[(2)] = inst_19411);

(statearr_19447_19474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19428 === (8))){
var inst_19400 = (state_19427[(11)]);
var inst_19391 = (state_19427[(8)]);
var tmp19444 = inst_19391;
var inst_19391__$1 = tmp19444;
var inst_19392 = inst_19400;
var state_19427__$1 = (function (){var statearr_19448 = state_19427;
(statearr_19448[(7)] = inst_19392);

(statearr_19448[(8)] = inst_19391__$1);

return statearr_19448;
})();
var statearr_19449_19475 = state_19427__$1;
(statearr_19449_19475[(2)] = null);

(statearr_19449_19475[(1)] = (2));


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
});})(c__16774__auto___19461,out))
;
return ((function (switch__16662__auto__,c__16774__auto___19461,out){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_19453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19453[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_19453[(1)] = (1));

return statearr_19453;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_19427){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_19427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e19454){if((e19454 instanceof Object)){
var ex__16666__auto__ = e19454;
var statearr_19455_19476 = state_19427;
(statearr_19455_19476[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19477 = state_19427;
state_19427 = G__19477;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_19427){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_19427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___19461,out))
})();
var state__16776__auto__ = (function (){var statearr_19456 = f__16775__auto__.call(null);
(statearr_19456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___19461);

return statearr_19456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___19461,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args19478 = [];
var len__8143__auto___19552 = arguments.length;
var i__8144__auto___19553 = (0);
while(true){
if((i__8144__auto___19553 < len__8143__auto___19552)){
args19478.push((arguments[i__8144__auto___19553]));

var G__19554 = (i__8144__auto___19553 + (1));
i__8144__auto___19553 = G__19554;
continue;
} else {
}
break;
}

var G__19480 = args19478.length;
switch (G__19480) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args19478.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16774__auto___19556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___19556,out){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___19556,out){
return (function (state_19522){
var state_val_19523 = (state_19522[(1)]);
if((state_val_19523 === (7))){
var inst_19518 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19524_19557 = state_19522__$1;
(statearr_19524_19557[(2)] = inst_19518);

(statearr_19524_19557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (1))){
var inst_19481 = [];
var inst_19482 = inst_19481;
var inst_19483 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19522__$1 = (function (){var statearr_19525 = state_19522;
(statearr_19525[(7)] = inst_19482);

(statearr_19525[(8)] = inst_19483);

return statearr_19525;
})();
var statearr_19526_19558 = state_19522__$1;
(statearr_19526_19558[(2)] = null);

(statearr_19526_19558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (4))){
var inst_19486 = (state_19522[(9)]);
var inst_19486__$1 = (state_19522[(2)]);
var inst_19487 = (inst_19486__$1 == null);
var inst_19488 = cljs.core.not.call(null,inst_19487);
var state_19522__$1 = (function (){var statearr_19527 = state_19522;
(statearr_19527[(9)] = inst_19486__$1);

return statearr_19527;
})();
if(inst_19488){
var statearr_19528_19559 = state_19522__$1;
(statearr_19528_19559[(1)] = (5));

} else {
var statearr_19529_19560 = state_19522__$1;
(statearr_19529_19560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (15))){
var inst_19512 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19530_19561 = state_19522__$1;
(statearr_19530_19561[(2)] = inst_19512);

(statearr_19530_19561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (13))){
var state_19522__$1 = state_19522;
var statearr_19531_19562 = state_19522__$1;
(statearr_19531_19562[(2)] = null);

(statearr_19531_19562[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (6))){
var inst_19482 = (state_19522[(7)]);
var inst_19507 = inst_19482.length;
var inst_19508 = (inst_19507 > (0));
var state_19522__$1 = state_19522;
if(cljs.core.truth_(inst_19508)){
var statearr_19532_19563 = state_19522__$1;
(statearr_19532_19563[(1)] = (12));

} else {
var statearr_19533_19564 = state_19522__$1;
(statearr_19533_19564[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (3))){
var inst_19520 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19522__$1,inst_19520);
} else {
if((state_val_19523 === (12))){
var inst_19482 = (state_19522[(7)]);
var inst_19510 = cljs.core.vec.call(null,inst_19482);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19522__$1,(15),out,inst_19510);
} else {
if((state_val_19523 === (2))){
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19522__$1,(4),ch);
} else {
if((state_val_19523 === (11))){
var inst_19486 = (state_19522[(9)]);
var inst_19490 = (state_19522[(10)]);
var inst_19500 = (state_19522[(2)]);
var inst_19501 = [];
var inst_19502 = inst_19501.push(inst_19486);
var inst_19482 = inst_19501;
var inst_19483 = inst_19490;
var state_19522__$1 = (function (){var statearr_19534 = state_19522;
(statearr_19534[(11)] = inst_19500);

(statearr_19534[(12)] = inst_19502);

(statearr_19534[(7)] = inst_19482);

(statearr_19534[(8)] = inst_19483);

return statearr_19534;
})();
var statearr_19535_19565 = state_19522__$1;
(statearr_19535_19565[(2)] = null);

(statearr_19535_19565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (9))){
var inst_19482 = (state_19522[(7)]);
var inst_19498 = cljs.core.vec.call(null,inst_19482);
var state_19522__$1 = state_19522;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19522__$1,(11),out,inst_19498);
} else {
if((state_val_19523 === (5))){
var inst_19486 = (state_19522[(9)]);
var inst_19483 = (state_19522[(8)]);
var inst_19490 = (state_19522[(10)]);
var inst_19490__$1 = f.call(null,inst_19486);
var inst_19491 = cljs.core._EQ_.call(null,inst_19490__$1,inst_19483);
var inst_19492 = cljs.core.keyword_identical_QMARK_.call(null,inst_19483,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19493 = (inst_19491) || (inst_19492);
var state_19522__$1 = (function (){var statearr_19536 = state_19522;
(statearr_19536[(10)] = inst_19490__$1);

return statearr_19536;
})();
if(cljs.core.truth_(inst_19493)){
var statearr_19537_19566 = state_19522__$1;
(statearr_19537_19566[(1)] = (8));

} else {
var statearr_19538_19567 = state_19522__$1;
(statearr_19538_19567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (14))){
var inst_19515 = (state_19522[(2)]);
var inst_19516 = cljs.core.async.close_BANG_.call(null,out);
var state_19522__$1 = (function (){var statearr_19540 = state_19522;
(statearr_19540[(13)] = inst_19515);

return statearr_19540;
})();
var statearr_19541_19568 = state_19522__$1;
(statearr_19541_19568[(2)] = inst_19516);

(statearr_19541_19568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (10))){
var inst_19505 = (state_19522[(2)]);
var state_19522__$1 = state_19522;
var statearr_19542_19569 = state_19522__$1;
(statearr_19542_19569[(2)] = inst_19505);

(statearr_19542_19569[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19523 === (8))){
var inst_19486 = (state_19522[(9)]);
var inst_19482 = (state_19522[(7)]);
var inst_19490 = (state_19522[(10)]);
var inst_19495 = inst_19482.push(inst_19486);
var tmp19539 = inst_19482;
var inst_19482__$1 = tmp19539;
var inst_19483 = inst_19490;
var state_19522__$1 = (function (){var statearr_19543 = state_19522;
(statearr_19543[(14)] = inst_19495);

(statearr_19543[(7)] = inst_19482__$1);

(statearr_19543[(8)] = inst_19483);

return statearr_19543;
})();
var statearr_19544_19570 = state_19522__$1;
(statearr_19544_19570[(2)] = null);

(statearr_19544_19570[(1)] = (2));


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
});})(c__16774__auto___19556,out))
;
return ((function (switch__16662__auto__,c__16774__auto___19556,out){
return (function() {
var cljs$core$async$state_machine__16663__auto__ = null;
var cljs$core$async$state_machine__16663__auto____0 = (function (){
var statearr_19548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19548[(0)] = cljs$core$async$state_machine__16663__auto__);

(statearr_19548[(1)] = (1));

return statearr_19548;
});
var cljs$core$async$state_machine__16663__auto____1 = (function (state_19522){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_19522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e19549){if((e19549 instanceof Object)){
var ex__16666__auto__ = e19549;
var statearr_19550_19571 = state_19522;
(statearr_19550_19571[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19572 = state_19522;
state_19522 = G__19572;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
cljs$core$async$state_machine__16663__auto__ = function(state_19522){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16663__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16663__auto____1.call(this,state_19522);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16663__auto____0;
cljs$core$async$state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16663__auto____1;
return cljs$core$async$state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___19556,out))
})();
var state__16776__auto__ = (function (){var statearr_19551 = f__16775__auto__.call(null);
(statearr_19551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___19556);

return statearr_19551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___19556,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map