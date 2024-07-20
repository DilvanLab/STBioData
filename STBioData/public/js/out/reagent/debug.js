// Compiled by ClojureScript 1.9.562 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__13811__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13811 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13812__i = 0, G__13812__a = new Array(arguments.length -  0);
while (G__13812__i < G__13812__a.length) {G__13812__a[G__13812__i] = arguments[G__13812__i + 0]; ++G__13812__i;}
  args = new cljs.core.IndexedSeq(G__13812__a,0,null);
} 
return G__13811__delegate.call(this,args);};
G__13811.cljs$lang$maxFixedArity = 0;
G__13811.cljs$lang$applyTo = (function (arglist__13813){
var args = cljs.core.seq(arglist__13813);
return G__13811__delegate(args);
});
G__13811.cljs$core$IFn$_invoke$arity$variadic = G__13811__delegate;
return G__13811;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__13814__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__13814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13815__i = 0, G__13815__a = new Array(arguments.length -  0);
while (G__13815__i < G__13815__a.length) {G__13815__a[G__13815__i] = arguments[G__13815__i + 0]; ++G__13815__i;}
  args = new cljs.core.IndexedSeq(G__13815__a,0,null);
} 
return G__13814__delegate.call(this,args);};
G__13814.cljs$lang$maxFixedArity = 0;
G__13814.cljs$lang$applyTo = (function (arglist__13816){
var args = cljs.core.seq(arglist__13816);
return G__13814__delegate(args);
});
G__13814.cljs$core$IFn$_invoke$arity$variadic = G__13814__delegate;
return G__13814;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map