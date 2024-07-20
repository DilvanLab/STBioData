// Compiled by ClojureScript 1.9.562 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.9";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args42193 = [];
var len__26545__auto___42196 = arguments.length;
var i__26546__auto___42197 = (0);
while(true){
if((i__26546__auto___42197 < len__26545__auto___42196)){
args42193.push((arguments[i__26546__auto___42197]));

var G__42198 = (i__26546__auto___42197 + (1));
i__26546__auto___42197 = G__42198;
continue;
} else {
}
break;
}

var G__42195 = args42193.length;
switch (G__42195) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42193.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__26552__auto__ = [];
var len__26545__auto___42201 = arguments.length;
var i__26546__auto___42202 = (0);
while(true){
if((i__26546__auto___42202 < len__26545__auto___42201)){
args__26552__auto__.push((arguments[i__26546__auto___42202]));

var G__42203 = (i__26546__auto___42202 + (1));
i__26546__auto___42202 = G__42203;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42200){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42200));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__26552__auto__ = [];
var len__26545__auto___42205 = arguments.length;
var i__26546__auto___42206 = (0);
while(true){
if((i__26546__auto___42206 < len__26545__auto___42205)){
args__26552__auto__.push((arguments[i__26546__auto___42206]));

var G__42207 = (i__26546__auto___42206 + (1));
i__26546__auto___42206 = G__42207;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42204){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42204));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42208){
var map__42211 = p__42208;
var map__42211__$1 = ((((!((map__42211 == null)))?((((map__42211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42211.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42211):map__42211);
var message = cljs.core.get.call(null,map__42211__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42211__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25432__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25420__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25420__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25420__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34381__auto___42373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___42373,ch){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___42373,ch){
return (function (state_42342){
var state_val_42343 = (state_42342[(1)]);
if((state_val_42343 === (7))){
var inst_42338 = (state_42342[(2)]);
var state_42342__$1 = state_42342;
var statearr_42344_42374 = state_42342__$1;
(statearr_42344_42374[(2)] = inst_42338);

(statearr_42344_42374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (1))){
var state_42342__$1 = state_42342;
var statearr_42345_42375 = state_42342__$1;
(statearr_42345_42375[(2)] = null);

(statearr_42345_42375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (4))){
var inst_42295 = (state_42342[(7)]);
var inst_42295__$1 = (state_42342[(2)]);
var state_42342__$1 = (function (){var statearr_42346 = state_42342;
(statearr_42346[(7)] = inst_42295__$1);

return statearr_42346;
})();
if(cljs.core.truth_(inst_42295__$1)){
var statearr_42347_42376 = state_42342__$1;
(statearr_42347_42376[(1)] = (5));

} else {
var statearr_42348_42377 = state_42342__$1;
(statearr_42348_42377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (15))){
var inst_42302 = (state_42342[(8)]);
var inst_42317 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42302);
var inst_42318 = cljs.core.first.call(null,inst_42317);
var inst_42319 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42318);
var inst_42320 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42319)].join('');
var inst_42321 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42320);
var state_42342__$1 = state_42342;
var statearr_42349_42378 = state_42342__$1;
(statearr_42349_42378[(2)] = inst_42321);

(statearr_42349_42378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (13))){
var inst_42326 = (state_42342[(2)]);
var state_42342__$1 = state_42342;
var statearr_42350_42379 = state_42342__$1;
(statearr_42350_42379[(2)] = inst_42326);

(statearr_42350_42379[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (6))){
var state_42342__$1 = state_42342;
var statearr_42351_42380 = state_42342__$1;
(statearr_42351_42380[(2)] = null);

(statearr_42351_42380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (17))){
var inst_42324 = (state_42342[(2)]);
var state_42342__$1 = state_42342;
var statearr_42352_42381 = state_42342__$1;
(statearr_42352_42381[(2)] = inst_42324);

(statearr_42352_42381[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (3))){
var inst_42340 = (state_42342[(2)]);
var state_42342__$1 = state_42342;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42342__$1,inst_42340);
} else {
if((state_val_42343 === (12))){
var inst_42301 = (state_42342[(9)]);
var inst_42315 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42301,opts);
var state_42342__$1 = state_42342;
if(cljs.core.truth_(inst_42315)){
var statearr_42353_42382 = state_42342__$1;
(statearr_42353_42382[(1)] = (15));

} else {
var statearr_42354_42383 = state_42342__$1;
(statearr_42354_42383[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (2))){
var state_42342__$1 = state_42342;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42342__$1,(4),ch);
} else {
if((state_val_42343 === (11))){
var inst_42302 = (state_42342[(8)]);
var inst_42307 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42308 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42302);
var inst_42309 = cljs.core.async.timeout.call(null,(1000));
var inst_42310 = [inst_42308,inst_42309];
var inst_42311 = (new cljs.core.PersistentVector(null,2,(5),inst_42307,inst_42310,null));
var state_42342__$1 = state_42342;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42342__$1,(14),inst_42311);
} else {
if((state_val_42343 === (9))){
var inst_42302 = (state_42342[(8)]);
var inst_42328 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42329 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42302);
var inst_42330 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42329);
var inst_42331 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42330)].join('');
var inst_42332 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42331);
var state_42342__$1 = (function (){var statearr_42355 = state_42342;
(statearr_42355[(10)] = inst_42328);

return statearr_42355;
})();
var statearr_42356_42384 = state_42342__$1;
(statearr_42356_42384[(2)] = inst_42332);

(statearr_42356_42384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (5))){
var inst_42295 = (state_42342[(7)]);
var inst_42297 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42298 = (new cljs.core.PersistentArrayMap(null,2,inst_42297,null));
var inst_42299 = (new cljs.core.PersistentHashSet(null,inst_42298,null));
var inst_42300 = figwheel.client.focus_msgs.call(null,inst_42299,inst_42295);
var inst_42301 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42300);
var inst_42302 = cljs.core.first.call(null,inst_42300);
var inst_42303 = figwheel.client.autoload_QMARK_.call(null);
var state_42342__$1 = (function (){var statearr_42357 = state_42342;
(statearr_42357[(8)] = inst_42302);

(statearr_42357[(9)] = inst_42301);

return statearr_42357;
})();
if(cljs.core.truth_(inst_42303)){
var statearr_42358_42385 = state_42342__$1;
(statearr_42358_42385[(1)] = (8));

} else {
var statearr_42359_42386 = state_42342__$1;
(statearr_42359_42386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (14))){
var inst_42313 = (state_42342[(2)]);
var state_42342__$1 = state_42342;
var statearr_42360_42387 = state_42342__$1;
(statearr_42360_42387[(2)] = inst_42313);

(statearr_42360_42387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (16))){
var state_42342__$1 = state_42342;
var statearr_42361_42388 = state_42342__$1;
(statearr_42361_42388[(2)] = null);

(statearr_42361_42388[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (10))){
var inst_42334 = (state_42342[(2)]);
var state_42342__$1 = (function (){var statearr_42362 = state_42342;
(statearr_42362[(11)] = inst_42334);

return statearr_42362;
})();
var statearr_42363_42389 = state_42342__$1;
(statearr_42363_42389[(2)] = null);

(statearr_42363_42389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42343 === (8))){
var inst_42301 = (state_42342[(9)]);
var inst_42305 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42301,opts);
var state_42342__$1 = state_42342;
if(cljs.core.truth_(inst_42305)){
var statearr_42364_42390 = state_42342__$1;
(statearr_42364_42390[(1)] = (11));

} else {
var statearr_42365_42391 = state_42342__$1;
(statearr_42365_42391[(1)] = (12));

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
});})(c__34381__auto___42373,ch))
;
return ((function (switch__34269__auto__,c__34381__auto___42373,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34270__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34270__auto____0 = (function (){
var statearr_42369 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42369[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34270__auto__);

(statearr_42369[(1)] = (1));

return statearr_42369;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34270__auto____1 = (function (state_42342){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_42342);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e42370){if((e42370 instanceof Object)){
var ex__34273__auto__ = e42370;
var statearr_42371_42392 = state_42342;
(statearr_42371_42392[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42342);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42393 = state_42342;
state_42342 = G__42393;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34270__auto__ = function(state_42342){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34270__auto____1.call(this,state_42342);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34270__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34270__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___42373,ch))
})();
var state__34383__auto__ = (function (){var statearr_42372 = f__34382__auto__.call(null);
(statearr_42372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___42373);

return statearr_42372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___42373,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42394_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42394_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42397 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42397){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e42396){if((e42396 instanceof Error)){
var e = e42396;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42397], null));
} else {
var e = e42396;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_42397))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42398){
var map__42407 = p__42398;
var map__42407__$1 = ((((!((map__42407 == null)))?((((map__42407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42407.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42407):map__42407);
var opts = map__42407__$1;
var build_id = cljs.core.get.call(null,map__42407__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42407,map__42407__$1,opts,build_id){
return (function (p__42409){
var vec__42410 = p__42409;
var seq__42411 = cljs.core.seq.call(null,vec__42410);
var first__42412 = cljs.core.first.call(null,seq__42411);
var seq__42411__$1 = cljs.core.next.call(null,seq__42411);
var map__42413 = first__42412;
var map__42413__$1 = ((((!((map__42413 == null)))?((((map__42413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42413.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42413):map__42413);
var msg = map__42413__$1;
var msg_name = cljs.core.get.call(null,map__42413__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42411__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42410,seq__42411,first__42412,seq__42411__$1,map__42413,map__42413__$1,msg,msg_name,_,map__42407,map__42407__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42410,seq__42411,first__42412,seq__42411__$1,map__42413,map__42413__$1,msg,msg_name,_,map__42407,map__42407__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42407,map__42407__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42421){
var vec__42422 = p__42421;
var seq__42423 = cljs.core.seq.call(null,vec__42422);
var first__42424 = cljs.core.first.call(null,seq__42423);
var seq__42423__$1 = cljs.core.next.call(null,seq__42423);
var map__42425 = first__42424;
var map__42425__$1 = ((((!((map__42425 == null)))?((((map__42425.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42425.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42425):map__42425);
var msg = map__42425__$1;
var msg_name = cljs.core.get.call(null,map__42425__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42423__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42427){
var map__42439 = p__42427;
var map__42439__$1 = ((((!((map__42439 == null)))?((((map__42439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42439.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42439):map__42439);
var on_compile_warning = cljs.core.get.call(null,map__42439__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42439__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42439,map__42439__$1,on_compile_warning,on_compile_fail){
return (function (p__42441){
var vec__42442 = p__42441;
var seq__42443 = cljs.core.seq.call(null,vec__42442);
var first__42444 = cljs.core.first.call(null,seq__42443);
var seq__42443__$1 = cljs.core.next.call(null,seq__42443);
var map__42445 = first__42444;
var map__42445__$1 = ((((!((map__42445 == null)))?((((map__42445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42445.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42445):map__42445);
var msg = map__42445__$1;
var msg_name = cljs.core.get.call(null,map__42445__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42443__$1;
var pred__42447 = cljs.core._EQ_;
var expr__42448 = msg_name;
if(cljs.core.truth_(pred__42447.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42448))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42447.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42448))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42439,map__42439__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__,msg_hist,msg_names,msg){
return (function (state_42676){
var state_val_42677 = (state_42676[(1)]);
if((state_val_42677 === (7))){
var inst_42596 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42596)){
var statearr_42678_42728 = state_42676__$1;
(statearr_42678_42728[(1)] = (8));

} else {
var statearr_42679_42729 = state_42676__$1;
(statearr_42679_42729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (20))){
var inst_42670 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42680_42730 = state_42676__$1;
(statearr_42680_42730[(2)] = inst_42670);

(statearr_42680_42730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (27))){
var inst_42666 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42681_42731 = state_42676__$1;
(statearr_42681_42731[(2)] = inst_42666);

(statearr_42681_42731[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (1))){
var inst_42589 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42589)){
var statearr_42682_42732 = state_42676__$1;
(statearr_42682_42732[(1)] = (2));

} else {
var statearr_42683_42733 = state_42676__$1;
(statearr_42683_42733[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (24))){
var inst_42668 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42684_42734 = state_42676__$1;
(statearr_42684_42734[(2)] = inst_42668);

(statearr_42684_42734[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (4))){
var inst_42674 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42676__$1,inst_42674);
} else {
if((state_val_42677 === (15))){
var inst_42672 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42685_42735 = state_42676__$1;
(statearr_42685_42735[(2)] = inst_42672);

(statearr_42685_42735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (21))){
var inst_42625 = (state_42676[(2)]);
var inst_42626 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42627 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42626);
var state_42676__$1 = (function (){var statearr_42686 = state_42676;
(statearr_42686[(7)] = inst_42625);

return statearr_42686;
})();
var statearr_42687_42736 = state_42676__$1;
(statearr_42687_42736[(2)] = inst_42627);

(statearr_42687_42736[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (31))){
var inst_42655 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42655)){
var statearr_42688_42737 = state_42676__$1;
(statearr_42688_42737[(1)] = (34));

} else {
var statearr_42689_42738 = state_42676__$1;
(statearr_42689_42738[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (32))){
var inst_42664 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42690_42739 = state_42676__$1;
(statearr_42690_42739[(2)] = inst_42664);

(statearr_42690_42739[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (33))){
var inst_42651 = (state_42676[(2)]);
var inst_42652 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42653 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42652);
var state_42676__$1 = (function (){var statearr_42691 = state_42676;
(statearr_42691[(8)] = inst_42651);

return statearr_42691;
})();
var statearr_42692_42740 = state_42676__$1;
(statearr_42692_42740[(2)] = inst_42653);

(statearr_42692_42740[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (13))){
var inst_42610 = figwheel.client.heads_up.clear.call(null);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(16),inst_42610);
} else {
if((state_val_42677 === (22))){
var inst_42631 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42632 = figwheel.client.heads_up.append_warning_message.call(null,inst_42631);
var state_42676__$1 = state_42676;
var statearr_42693_42741 = state_42676__$1;
(statearr_42693_42741[(2)] = inst_42632);

(statearr_42693_42741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (36))){
var inst_42662 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42694_42742 = state_42676__$1;
(statearr_42694_42742[(2)] = inst_42662);

(statearr_42694_42742[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (29))){
var inst_42642 = (state_42676[(2)]);
var inst_42643 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42644 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42643);
var state_42676__$1 = (function (){var statearr_42695 = state_42676;
(statearr_42695[(9)] = inst_42642);

return statearr_42695;
})();
var statearr_42696_42743 = state_42676__$1;
(statearr_42696_42743[(2)] = inst_42644);

(statearr_42696_42743[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (6))){
var inst_42591 = (state_42676[(10)]);
var state_42676__$1 = state_42676;
var statearr_42697_42744 = state_42676__$1;
(statearr_42697_42744[(2)] = inst_42591);

(statearr_42697_42744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (28))){
var inst_42638 = (state_42676[(2)]);
var inst_42639 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42640 = figwheel.client.heads_up.display_warning.call(null,inst_42639);
var state_42676__$1 = (function (){var statearr_42698 = state_42676;
(statearr_42698[(11)] = inst_42638);

return statearr_42698;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(29),inst_42640);
} else {
if((state_val_42677 === (25))){
var inst_42636 = figwheel.client.heads_up.clear.call(null);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(28),inst_42636);
} else {
if((state_val_42677 === (34))){
var inst_42657 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(37),inst_42657);
} else {
if((state_val_42677 === (17))){
var inst_42616 = (state_42676[(2)]);
var inst_42617 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42618 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42617);
var state_42676__$1 = (function (){var statearr_42699 = state_42676;
(statearr_42699[(12)] = inst_42616);

return statearr_42699;
})();
var statearr_42700_42745 = state_42676__$1;
(statearr_42700_42745[(2)] = inst_42618);

(statearr_42700_42745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (3))){
var inst_42608 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42608)){
var statearr_42701_42746 = state_42676__$1;
(statearr_42701_42746[(1)] = (13));

} else {
var statearr_42702_42747 = state_42676__$1;
(statearr_42702_42747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (12))){
var inst_42604 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42703_42748 = state_42676__$1;
(statearr_42703_42748[(2)] = inst_42604);

(statearr_42703_42748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (2))){
var inst_42591 = (state_42676[(10)]);
var inst_42591__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42676__$1 = (function (){var statearr_42704 = state_42676;
(statearr_42704[(10)] = inst_42591__$1);

return statearr_42704;
})();
if(cljs.core.truth_(inst_42591__$1)){
var statearr_42705_42749 = state_42676__$1;
(statearr_42705_42749[(1)] = (5));

} else {
var statearr_42706_42750 = state_42676__$1;
(statearr_42706_42750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (23))){
var inst_42634 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42634)){
var statearr_42707_42751 = state_42676__$1;
(statearr_42707_42751[(1)] = (25));

} else {
var statearr_42708_42752 = state_42676__$1;
(statearr_42708_42752[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (35))){
var state_42676__$1 = state_42676;
var statearr_42709_42753 = state_42676__$1;
(statearr_42709_42753[(2)] = null);

(statearr_42709_42753[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (19))){
var inst_42629 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42629)){
var statearr_42710_42754 = state_42676__$1;
(statearr_42710_42754[(1)] = (22));

} else {
var statearr_42711_42755 = state_42676__$1;
(statearr_42711_42755[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (11))){
var inst_42600 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42712_42756 = state_42676__$1;
(statearr_42712_42756[(2)] = inst_42600);

(statearr_42712_42756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (9))){
var inst_42602 = figwheel.client.heads_up.clear.call(null);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(12),inst_42602);
} else {
if((state_val_42677 === (5))){
var inst_42593 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42676__$1 = state_42676;
var statearr_42713_42757 = state_42676__$1;
(statearr_42713_42757[(2)] = inst_42593);

(statearr_42713_42757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (14))){
var inst_42620 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42620)){
var statearr_42714_42758 = state_42676__$1;
(statearr_42714_42758[(1)] = (18));

} else {
var statearr_42715_42759 = state_42676__$1;
(statearr_42715_42759[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (26))){
var inst_42646 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42676__$1 = state_42676;
if(cljs.core.truth_(inst_42646)){
var statearr_42716_42760 = state_42676__$1;
(statearr_42716_42760[(1)] = (30));

} else {
var statearr_42717_42761 = state_42676__$1;
(statearr_42717_42761[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (16))){
var inst_42612 = (state_42676[(2)]);
var inst_42613 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42614 = figwheel.client.heads_up.display_exception.call(null,inst_42613);
var state_42676__$1 = (function (){var statearr_42718 = state_42676;
(statearr_42718[(13)] = inst_42612);

return statearr_42718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(17),inst_42614);
} else {
if((state_val_42677 === (30))){
var inst_42648 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42649 = figwheel.client.heads_up.display_warning.call(null,inst_42648);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(33),inst_42649);
} else {
if((state_val_42677 === (10))){
var inst_42606 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42719_42762 = state_42676__$1;
(statearr_42719_42762[(2)] = inst_42606);

(statearr_42719_42762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (18))){
var inst_42622 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42623 = figwheel.client.heads_up.display_exception.call(null,inst_42622);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(21),inst_42623);
} else {
if((state_val_42677 === (37))){
var inst_42659 = (state_42676[(2)]);
var state_42676__$1 = state_42676;
var statearr_42720_42763 = state_42676__$1;
(statearr_42720_42763[(2)] = inst_42659);

(statearr_42720_42763[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42677 === (8))){
var inst_42598 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42676__$1 = state_42676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42676__$1,(11),inst_42598);
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
});})(c__34381__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34269__auto__,c__34381__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto____0 = (function (){
var statearr_42724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42724[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto__);

(statearr_42724[(1)] = (1));

return statearr_42724;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto____1 = (function (state_42676){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_42676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e42725){if((e42725 instanceof Object)){
var ex__34273__auto__ = e42725;
var statearr_42726_42764 = state_42676;
(statearr_42726_42764[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42765 = state_42676;
state_42676 = G__42765;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto__ = function(state_42676){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto____1.call(this,state_42676);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__,msg_hist,msg_names,msg))
})();
var state__34383__auto__ = (function (){var statearr_42727 = f__34382__auto__.call(null);
(statearr_42727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_42727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__,msg_hist,msg_names,msg))
);

return c__34381__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34381__auto___42828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto___42828,ch){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto___42828,ch){
return (function (state_42811){
var state_val_42812 = (state_42811[(1)]);
if((state_val_42812 === (1))){
var state_42811__$1 = state_42811;
var statearr_42813_42829 = state_42811__$1;
(statearr_42813_42829[(2)] = null);

(statearr_42813_42829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (2))){
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42811__$1,(4),ch);
} else {
if((state_val_42812 === (3))){
var inst_42809 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42811__$1,inst_42809);
} else {
if((state_val_42812 === (4))){
var inst_42799 = (state_42811[(7)]);
var inst_42799__$1 = (state_42811[(2)]);
var state_42811__$1 = (function (){var statearr_42814 = state_42811;
(statearr_42814[(7)] = inst_42799__$1);

return statearr_42814;
})();
if(cljs.core.truth_(inst_42799__$1)){
var statearr_42815_42830 = state_42811__$1;
(statearr_42815_42830[(1)] = (5));

} else {
var statearr_42816_42831 = state_42811__$1;
(statearr_42816_42831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (5))){
var inst_42799 = (state_42811[(7)]);
var inst_42801 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42799);
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42811__$1,(8),inst_42801);
} else {
if((state_val_42812 === (6))){
var state_42811__$1 = state_42811;
var statearr_42817_42832 = state_42811__$1;
(statearr_42817_42832[(2)] = null);

(statearr_42817_42832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (7))){
var inst_42807 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
var statearr_42818_42833 = state_42811__$1;
(statearr_42818_42833[(2)] = inst_42807);

(statearr_42818_42833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (8))){
var inst_42803 = (state_42811[(2)]);
var state_42811__$1 = (function (){var statearr_42819 = state_42811;
(statearr_42819[(8)] = inst_42803);

return statearr_42819;
})();
var statearr_42820_42834 = state_42811__$1;
(statearr_42820_42834[(2)] = null);

(statearr_42820_42834[(1)] = (2));


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
});})(c__34381__auto___42828,ch))
;
return ((function (switch__34269__auto__,c__34381__auto___42828,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34270__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34270__auto____0 = (function (){
var statearr_42824 = [null,null,null,null,null,null,null,null,null];
(statearr_42824[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34270__auto__);

(statearr_42824[(1)] = (1));

return statearr_42824;
});
var figwheel$client$heads_up_plugin_$_state_machine__34270__auto____1 = (function (state_42811){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_42811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e42825){if((e42825 instanceof Object)){
var ex__34273__auto__ = e42825;
var statearr_42826_42835 = state_42811;
(statearr_42826_42835[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42836 = state_42811;
state_42811 = G__42836;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34270__auto__ = function(state_42811){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34270__auto____1.call(this,state_42811);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34270__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34270__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto___42828,ch))
})();
var state__34383__auto__ = (function (){var statearr_42827 = f__34382__auto__.call(null);
(statearr_42827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto___42828);

return statearr_42827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto___42828,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__){
return (function (state_42857){
var state_val_42858 = (state_42857[(1)]);
if((state_val_42858 === (1))){
var inst_42852 = cljs.core.async.timeout.call(null,(3000));
var state_42857__$1 = state_42857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42857__$1,(2),inst_42852);
} else {
if((state_val_42858 === (2))){
var inst_42854 = (state_42857[(2)]);
var inst_42855 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42857__$1 = (function (){var statearr_42859 = state_42857;
(statearr_42859[(7)] = inst_42854);

return statearr_42859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42857__$1,inst_42855);
} else {
return null;
}
}
});})(c__34381__auto__))
;
return ((function (switch__34269__auto__,c__34381__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34270__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34270__auto____0 = (function (){
var statearr_42863 = [null,null,null,null,null,null,null,null];
(statearr_42863[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34270__auto__);

(statearr_42863[(1)] = (1));

return statearr_42863;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34270__auto____1 = (function (state_42857){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_42857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e42864){if((e42864 instanceof Object)){
var ex__34273__auto__ = e42864;
var statearr_42865_42867 = state_42857;
(statearr_42865_42867[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42868 = state_42857;
state_42857 = G__42868;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34270__auto__ = function(state_42857){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34270__auto____1.call(this,state_42857);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34270__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34270__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__))
})();
var state__34383__auto__ = (function (){var statearr_42866 = f__34382__auto__.call(null);
(statearr_42866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_42866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__))
);

return c__34381__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34381__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34381__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34382__auto__ = (function (){var switch__34269__auto__ = ((function (c__34381__auto__,figwheel_version,temp__4657__auto__){
return (function (state_42891){
var state_val_42892 = (state_42891[(1)]);
if((state_val_42892 === (1))){
var inst_42885 = cljs.core.async.timeout.call(null,(2000));
var state_42891__$1 = state_42891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42891__$1,(2),inst_42885);
} else {
if((state_val_42892 === (2))){
var inst_42887 = (state_42891[(2)]);
var inst_42888 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_42889 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42888);
var state_42891__$1 = (function (){var statearr_42893 = state_42891;
(statearr_42893[(7)] = inst_42887);

return statearr_42893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42891__$1,inst_42889);
} else {
return null;
}
}
});})(c__34381__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__34269__auto__,c__34381__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto____0 = (function (){
var statearr_42897 = [null,null,null,null,null,null,null,null];
(statearr_42897[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto__);

(statearr_42897[(1)] = (1));

return statearr_42897;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto____1 = (function (state_42891){
while(true){
var ret_value__34271__auto__ = (function (){try{while(true){
var result__34272__auto__ = switch__34269__auto__.call(null,state_42891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34272__auto__;
}
break;
}
}catch (e42898){if((e42898 instanceof Object)){
var ex__34273__auto__ = e42898;
var statearr_42899_42901 = state_42891;
(statearr_42899_42901[(5)] = ex__34273__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34271__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42902 = state_42891;
state_42891 = G__42902;
continue;
} else {
return ret_value__34271__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto__ = function(state_42891){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto____1.call(this,state_42891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34270__auto__;
})()
;})(switch__34269__auto__,c__34381__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34383__auto__ = (function (){var statearr_42900 = f__34382__auto__.call(null);
(statearr_42900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__34381__auto__);

return statearr_42900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34383__auto__);
});})(c__34381__auto__,figwheel_version,temp__4657__auto__))
);

return c__34381__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42903){
var map__42907 = p__42903;
var map__42907__$1 = ((((!((map__42907 == null)))?((((map__42907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42907):map__42907);
var file = cljs.core.get.call(null,map__42907__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42907__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42907__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42909 = "";
var G__42909__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42909),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42909);
var G__42909__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42909__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42909__$1);
if(cljs.core.truth_((function (){var and__25420__auto__ = line;
if(cljs.core.truth_(and__25420__auto__)){
return column;
} else {
return and__25420__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42909__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42909__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42910){
var map__42917 = p__42910;
var map__42917__$1 = ((((!((map__42917 == null)))?((((map__42917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42917):map__42917);
var ed = map__42917__$1;
var formatted_exception = cljs.core.get.call(null,map__42917__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42917__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42917__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42919_42923 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42920_42924 = null;
var count__42921_42925 = (0);
var i__42922_42926 = (0);
while(true){
if((i__42922_42926 < count__42921_42925)){
var msg_42927 = cljs.core._nth.call(null,chunk__42920_42924,i__42922_42926);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42927);

var G__42928 = seq__42919_42923;
var G__42929 = chunk__42920_42924;
var G__42930 = count__42921_42925;
var G__42931 = (i__42922_42926 + (1));
seq__42919_42923 = G__42928;
chunk__42920_42924 = G__42929;
count__42921_42925 = G__42930;
i__42922_42926 = G__42931;
continue;
} else {
var temp__4657__auto___42932 = cljs.core.seq.call(null,seq__42919_42923);
if(temp__4657__auto___42932){
var seq__42919_42933__$1 = temp__4657__auto___42932;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42919_42933__$1)){
var c__26251__auto___42934 = cljs.core.chunk_first.call(null,seq__42919_42933__$1);
var G__42935 = cljs.core.chunk_rest.call(null,seq__42919_42933__$1);
var G__42936 = c__26251__auto___42934;
var G__42937 = cljs.core.count.call(null,c__26251__auto___42934);
var G__42938 = (0);
seq__42919_42923 = G__42935;
chunk__42920_42924 = G__42936;
count__42921_42925 = G__42937;
i__42922_42926 = G__42938;
continue;
} else {
var msg_42939 = cljs.core.first.call(null,seq__42919_42933__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42939);

var G__42940 = cljs.core.next.call(null,seq__42919_42933__$1);
var G__42941 = null;
var G__42942 = (0);
var G__42943 = (0);
seq__42919_42923 = G__42940;
chunk__42920_42924 = G__42941;
count__42921_42925 = G__42942;
i__42922_42926 = G__42943;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42944){
var map__42947 = p__42944;
var map__42947__$1 = ((((!((map__42947 == null)))?((((map__42947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42947):map__42947);
var w = map__42947__$1;
var message = cljs.core.get.call(null,map__42947__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25420__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25420__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25420__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42959 = cljs.core.seq.call(null,plugins);
var chunk__42960 = null;
var count__42961 = (0);
var i__42962 = (0);
while(true){
if((i__42962 < count__42961)){
var vec__42963 = cljs.core._nth.call(null,chunk__42960,i__42962);
var k = cljs.core.nth.call(null,vec__42963,(0),null);
var plugin = cljs.core.nth.call(null,vec__42963,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42969 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42959,chunk__42960,count__42961,i__42962,pl_42969,vec__42963,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42969.call(null,msg_hist);
});})(seq__42959,chunk__42960,count__42961,i__42962,pl_42969,vec__42963,k,plugin))
);
} else {
}

var G__42970 = seq__42959;
var G__42971 = chunk__42960;
var G__42972 = count__42961;
var G__42973 = (i__42962 + (1));
seq__42959 = G__42970;
chunk__42960 = G__42971;
count__42961 = G__42972;
i__42962 = G__42973;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42959);
if(temp__4657__auto__){
var seq__42959__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42959__$1)){
var c__26251__auto__ = cljs.core.chunk_first.call(null,seq__42959__$1);
var G__42974 = cljs.core.chunk_rest.call(null,seq__42959__$1);
var G__42975 = c__26251__auto__;
var G__42976 = cljs.core.count.call(null,c__26251__auto__);
var G__42977 = (0);
seq__42959 = G__42974;
chunk__42960 = G__42975;
count__42961 = G__42976;
i__42962 = G__42977;
continue;
} else {
var vec__42966 = cljs.core.first.call(null,seq__42959__$1);
var k = cljs.core.nth.call(null,vec__42966,(0),null);
var plugin = cljs.core.nth.call(null,vec__42966,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42978 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42959,chunk__42960,count__42961,i__42962,pl_42978,vec__42966,k,plugin,seq__42959__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42978.call(null,msg_hist);
});})(seq__42959,chunk__42960,count__42961,i__42962,pl_42978,vec__42966,k,plugin,seq__42959__$1,temp__4657__auto__))
);
} else {
}

var G__42979 = cljs.core.next.call(null,seq__42959__$1);
var G__42980 = null;
var G__42981 = (0);
var G__42982 = (0);
seq__42959 = G__42979;
chunk__42960 = G__42980;
count__42961 = G__42981;
i__42962 = G__42982;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args42983 = [];
var len__26545__auto___42990 = arguments.length;
var i__26546__auto___42991 = (0);
while(true){
if((i__26546__auto___42991 < len__26545__auto___42990)){
args42983.push((arguments[i__26546__auto___42991]));

var G__42992 = (i__26546__auto___42991 + (1));
i__26546__auto___42991 = G__42992;
continue;
} else {
}
break;
}

var G__42985 = args42983.length;
switch (G__42985) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args42983.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42986_42994 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42987_42995 = null;
var count__42988_42996 = (0);
var i__42989_42997 = (0);
while(true){
if((i__42989_42997 < count__42988_42996)){
var msg_42998 = cljs.core._nth.call(null,chunk__42987_42995,i__42989_42997);
figwheel.client.socket.handle_incoming_message.call(null,msg_42998);

var G__42999 = seq__42986_42994;
var G__43000 = chunk__42987_42995;
var G__43001 = count__42988_42996;
var G__43002 = (i__42989_42997 + (1));
seq__42986_42994 = G__42999;
chunk__42987_42995 = G__43000;
count__42988_42996 = G__43001;
i__42989_42997 = G__43002;
continue;
} else {
var temp__4657__auto___43003 = cljs.core.seq.call(null,seq__42986_42994);
if(temp__4657__auto___43003){
var seq__42986_43004__$1 = temp__4657__auto___43003;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42986_43004__$1)){
var c__26251__auto___43005 = cljs.core.chunk_first.call(null,seq__42986_43004__$1);
var G__43006 = cljs.core.chunk_rest.call(null,seq__42986_43004__$1);
var G__43007 = c__26251__auto___43005;
var G__43008 = cljs.core.count.call(null,c__26251__auto___43005);
var G__43009 = (0);
seq__42986_42994 = G__43006;
chunk__42987_42995 = G__43007;
count__42988_42996 = G__43008;
i__42989_42997 = G__43009;
continue;
} else {
var msg_43010 = cljs.core.first.call(null,seq__42986_43004__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_43010);

var G__43011 = cljs.core.next.call(null,seq__42986_43004__$1);
var G__43012 = null;
var G__43013 = (0);
var G__43014 = (0);
seq__42986_42994 = G__43011;
chunk__42987_42995 = G__43012;
count__42988_42996 = G__43013;
i__42989_42997 = G__43014;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__26552__auto__ = [];
var len__26545__auto___43019 = arguments.length;
var i__26546__auto___43020 = (0);
while(true){
if((i__26546__auto___43020 < len__26545__auto___43019)){
args__26552__auto__.push((arguments[i__26546__auto___43020]));

var G__43021 = (i__26546__auto___43020 + (1));
i__26546__auto___43020 = G__43021;
continue;
} else {
}
break;
}

var argseq__26553__auto__ = ((((0) < args__26552__auto__.length))?(new cljs.core.IndexedSeq(args__26552__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__26553__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43016){
var map__43017 = p__43016;
var map__43017__$1 = ((((!((map__43017 == null)))?((((map__43017.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43017.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43017):map__43017);
var opts = map__43017__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43015){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43015));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43023){if((e43023 instanceof Error)){
var e = e43023;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43023;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__43027){
var map__43028 = p__43027;
var map__43028__$1 = ((((!((map__43028 == null)))?((((map__43028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43028):map__43028);
var msg_name = cljs.core.get.call(null,map__43028__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1502108343073