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
var args24913 = [];
var len__8143__auto___24916 = arguments.length;
var i__8144__auto___24917 = (0);
while(true){
if((i__8144__auto___24917 < len__8143__auto___24916)){
args24913.push((arguments[i__8144__auto___24917]));

var G__24918 = (i__8144__auto___24917 + (1));
i__8144__auto___24917 = G__24918;
continue;
} else {
}
break;
}

var G__24915 = args24913.length;
switch (G__24915) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args24913.length)].join('')));

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
var args__8150__auto__ = [];
var len__8143__auto___24921 = arguments.length;
var i__8144__auto___24922 = (0);
while(true){
if((i__8144__auto___24922 < len__8143__auto___24921)){
args__8150__auto__.push((arguments[i__8144__auto___24922]));

var G__24923 = (i__8144__auto___24922 + (1));
i__8144__auto___24922 = G__24923;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq24920){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24920));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__8150__auto__ = [];
var len__8143__auto___24925 = arguments.length;
var i__8144__auto___24926 = (0);
while(true){
if((i__8144__auto___24926 < len__8143__auto___24925)){
args__8150__auto__.push((arguments[i__8144__auto___24926]));

var G__24927 = (i__8144__auto___24926 + (1));
i__8144__auto___24926 = G__24927;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq24924){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24924));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24928){
var map__24931 = p__24928;
var map__24931__$1 = ((((!((map__24931 == null)))?((((map__24931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24931.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24931):map__24931);
var message = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24931__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__7030__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__7018__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__7018__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__7018__auto__;
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
var c__16774__auto___25093 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___25093,ch){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___25093,ch){
return (function (state_25062){
var state_val_25063 = (state_25062[(1)]);
if((state_val_25063 === (7))){
var inst_25058 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25064_25094 = state_25062__$1;
(statearr_25064_25094[(2)] = inst_25058);

(statearr_25064_25094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (1))){
var state_25062__$1 = state_25062;
var statearr_25065_25095 = state_25062__$1;
(statearr_25065_25095[(2)] = null);

(statearr_25065_25095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (4))){
var inst_25015 = (state_25062[(7)]);
var inst_25015__$1 = (state_25062[(2)]);
var state_25062__$1 = (function (){var statearr_25066 = state_25062;
(statearr_25066[(7)] = inst_25015__$1);

return statearr_25066;
})();
if(cljs.core.truth_(inst_25015__$1)){
var statearr_25067_25096 = state_25062__$1;
(statearr_25067_25096[(1)] = (5));

} else {
var statearr_25068_25097 = state_25062__$1;
(statearr_25068_25097[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (15))){
var inst_25022 = (state_25062[(8)]);
var inst_25037 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25022);
var inst_25038 = cljs.core.first.call(null,inst_25037);
var inst_25039 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25038);
var inst_25040 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25039)].join('');
var inst_25041 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25040);
var state_25062__$1 = state_25062;
var statearr_25069_25098 = state_25062__$1;
(statearr_25069_25098[(2)] = inst_25041);

(statearr_25069_25098[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (13))){
var inst_25046 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25070_25099 = state_25062__$1;
(statearr_25070_25099[(2)] = inst_25046);

(statearr_25070_25099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (6))){
var state_25062__$1 = state_25062;
var statearr_25071_25100 = state_25062__$1;
(statearr_25071_25100[(2)] = null);

(statearr_25071_25100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (17))){
var inst_25044 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25072_25101 = state_25062__$1;
(statearr_25072_25101[(2)] = inst_25044);

(statearr_25072_25101[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (3))){
var inst_25060 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25062__$1,inst_25060);
} else {
if((state_val_25063 === (12))){
var inst_25021 = (state_25062[(9)]);
var inst_25035 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25021,opts);
var state_25062__$1 = state_25062;
if(cljs.core.truth_(inst_25035)){
var statearr_25073_25102 = state_25062__$1;
(statearr_25073_25102[(1)] = (15));

} else {
var statearr_25074_25103 = state_25062__$1;
(statearr_25074_25103[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (2))){
var state_25062__$1 = state_25062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25062__$1,(4),ch);
} else {
if((state_val_25063 === (11))){
var inst_25022 = (state_25062[(8)]);
var inst_25027 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25028 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25022);
var inst_25029 = cljs.core.async.timeout.call(null,(1000));
var inst_25030 = [inst_25028,inst_25029];
var inst_25031 = (new cljs.core.PersistentVector(null,2,(5),inst_25027,inst_25030,null));
var state_25062__$1 = state_25062;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25062__$1,(14),inst_25031);
} else {
if((state_val_25063 === (9))){
var inst_25022 = (state_25062[(8)]);
var inst_25048 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25049 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25022);
var inst_25050 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25049);
var inst_25051 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_25050)].join('');
var inst_25052 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25051);
var state_25062__$1 = (function (){var statearr_25075 = state_25062;
(statearr_25075[(10)] = inst_25048);

return statearr_25075;
})();
var statearr_25076_25104 = state_25062__$1;
(statearr_25076_25104[(2)] = inst_25052);

(statearr_25076_25104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (5))){
var inst_25015 = (state_25062[(7)]);
var inst_25017 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25018 = (new cljs.core.PersistentArrayMap(null,2,inst_25017,null));
var inst_25019 = (new cljs.core.PersistentHashSet(null,inst_25018,null));
var inst_25020 = figwheel.client.focus_msgs.call(null,inst_25019,inst_25015);
var inst_25021 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25020);
var inst_25022 = cljs.core.first.call(null,inst_25020);
var inst_25023 = figwheel.client.autoload_QMARK_.call(null);
var state_25062__$1 = (function (){var statearr_25077 = state_25062;
(statearr_25077[(8)] = inst_25022);

(statearr_25077[(9)] = inst_25021);

return statearr_25077;
})();
if(cljs.core.truth_(inst_25023)){
var statearr_25078_25105 = state_25062__$1;
(statearr_25078_25105[(1)] = (8));

} else {
var statearr_25079_25106 = state_25062__$1;
(statearr_25079_25106[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (14))){
var inst_25033 = (state_25062[(2)]);
var state_25062__$1 = state_25062;
var statearr_25080_25107 = state_25062__$1;
(statearr_25080_25107[(2)] = inst_25033);

(statearr_25080_25107[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (16))){
var state_25062__$1 = state_25062;
var statearr_25081_25108 = state_25062__$1;
(statearr_25081_25108[(2)] = null);

(statearr_25081_25108[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (10))){
var inst_25054 = (state_25062[(2)]);
var state_25062__$1 = (function (){var statearr_25082 = state_25062;
(statearr_25082[(11)] = inst_25054);

return statearr_25082;
})();
var statearr_25083_25109 = state_25062__$1;
(statearr_25083_25109[(2)] = null);

(statearr_25083_25109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25063 === (8))){
var inst_25021 = (state_25062[(9)]);
var inst_25025 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25021,opts);
var state_25062__$1 = state_25062;
if(cljs.core.truth_(inst_25025)){
var statearr_25084_25110 = state_25062__$1;
(statearr_25084_25110[(1)] = (11));

} else {
var statearr_25085_25111 = state_25062__$1;
(statearr_25085_25111[(1)] = (12));

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
});})(c__16774__auto___25093,ch))
;
return ((function (switch__16662__auto__,c__16774__auto___25093,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__16663__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__16663__auto____0 = (function (){
var statearr_25089 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25089[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__16663__auto__);

(statearr_25089[(1)] = (1));

return statearr_25089;
});
var figwheel$client$file_reloader_plugin_$_state_machine__16663__auto____1 = (function (state_25062){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_25062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e25090){if((e25090 instanceof Object)){
var ex__16666__auto__ = e25090;
var statearr_25091_25112 = state_25062;
(statearr_25091_25112[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25113 = state_25062;
state_25062 = G__25113;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__16663__auto__ = function(state_25062){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__16663__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__16663__auto____1.call(this,state_25062);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__16663__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__16663__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___25093,ch))
})();
var state__16776__auto__ = (function (){var statearr_25092 = f__16775__auto__.call(null);
(statearr_25092[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___25093);

return statearr_25092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___25093,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25114_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25114_SHARP_));
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
var base_path_25117 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25117){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e25116){if((e25116 instanceof Error)){
var e = e25116;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25117], null));
} else {
var e = e25116;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_25117))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25118){
var map__25127 = p__25118;
var map__25127__$1 = ((((!((map__25127 == null)))?((((map__25127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25127.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25127):map__25127);
var opts = map__25127__$1;
var build_id = cljs.core.get.call(null,map__25127__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25127,map__25127__$1,opts,build_id){
return (function (p__25129){
var vec__25130 = p__25129;
var seq__25131 = cljs.core.seq.call(null,vec__25130);
var first__25132 = cljs.core.first.call(null,seq__25131);
var seq__25131__$1 = cljs.core.next.call(null,seq__25131);
var map__25133 = first__25132;
var map__25133__$1 = ((((!((map__25133 == null)))?((((map__25133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25133):map__25133);
var msg = map__25133__$1;
var msg_name = cljs.core.get.call(null,map__25133__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__25131__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25130,seq__25131,first__25132,seq__25131__$1,map__25133,map__25133__$1,msg,msg_name,_,map__25127,map__25127__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25130,seq__25131,first__25132,seq__25131__$1,map__25133,map__25133__$1,msg,msg_name,_,map__25127,map__25127__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25127,map__25127__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25141){
var vec__25142 = p__25141;
var seq__25143 = cljs.core.seq.call(null,vec__25142);
var first__25144 = cljs.core.first.call(null,seq__25143);
var seq__25143__$1 = cljs.core.next.call(null,seq__25143);
var map__25145 = first__25144;
var map__25145__$1 = ((((!((map__25145 == null)))?((((map__25145.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25145.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25145):map__25145);
var msg = map__25145__$1;
var msg_name = cljs.core.get.call(null,map__25145__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__25143__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25147){
var map__25159 = p__25147;
var map__25159__$1 = ((((!((map__25159 == null)))?((((map__25159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25159):map__25159);
var on_compile_warning = cljs.core.get.call(null,map__25159__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25159__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25159,map__25159__$1,on_compile_warning,on_compile_fail){
return (function (p__25161){
var vec__25162 = p__25161;
var seq__25163 = cljs.core.seq.call(null,vec__25162);
var first__25164 = cljs.core.first.call(null,seq__25163);
var seq__25163__$1 = cljs.core.next.call(null,seq__25163);
var map__25165 = first__25164;
var map__25165__$1 = ((((!((map__25165 == null)))?((((map__25165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25165.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25165):map__25165);
var msg = map__25165__$1;
var msg_name = cljs.core.get.call(null,map__25165__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__25163__$1;
var pred__25167 = cljs.core._EQ_;
var expr__25168 = msg_name;
if(cljs.core.truth_(pred__25167.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25168))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25167.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25168))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25159,map__25159__$1,on_compile_warning,on_compile_fail))
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
var c__16774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto__,msg_hist,msg_names,msg){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto__,msg_hist,msg_names,msg){
return (function (state_25396){
var state_val_25397 = (state_25396[(1)]);
if((state_val_25397 === (7))){
var inst_25316 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25316)){
var statearr_25398_25448 = state_25396__$1;
(statearr_25398_25448[(1)] = (8));

} else {
var statearr_25399_25449 = state_25396__$1;
(statearr_25399_25449[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (20))){
var inst_25390 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25400_25450 = state_25396__$1;
(statearr_25400_25450[(2)] = inst_25390);

(statearr_25400_25450[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (27))){
var inst_25386 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25401_25451 = state_25396__$1;
(statearr_25401_25451[(2)] = inst_25386);

(statearr_25401_25451[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (1))){
var inst_25309 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25309)){
var statearr_25402_25452 = state_25396__$1;
(statearr_25402_25452[(1)] = (2));

} else {
var statearr_25403_25453 = state_25396__$1;
(statearr_25403_25453[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (24))){
var inst_25388 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25404_25454 = state_25396__$1;
(statearr_25404_25454[(2)] = inst_25388);

(statearr_25404_25454[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (4))){
var inst_25394 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25396__$1,inst_25394);
} else {
if((state_val_25397 === (15))){
var inst_25392 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25405_25455 = state_25396__$1;
(statearr_25405_25455[(2)] = inst_25392);

(statearr_25405_25455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (21))){
var inst_25345 = (state_25396[(2)]);
var inst_25346 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25347 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25346);
var state_25396__$1 = (function (){var statearr_25406 = state_25396;
(statearr_25406[(7)] = inst_25345);

return statearr_25406;
})();
var statearr_25407_25456 = state_25396__$1;
(statearr_25407_25456[(2)] = inst_25347);

(statearr_25407_25456[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (31))){
var inst_25375 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25375)){
var statearr_25408_25457 = state_25396__$1;
(statearr_25408_25457[(1)] = (34));

} else {
var statearr_25409_25458 = state_25396__$1;
(statearr_25409_25458[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (32))){
var inst_25384 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25410_25459 = state_25396__$1;
(statearr_25410_25459[(2)] = inst_25384);

(statearr_25410_25459[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (33))){
var inst_25371 = (state_25396[(2)]);
var inst_25372 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25373 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25372);
var state_25396__$1 = (function (){var statearr_25411 = state_25396;
(statearr_25411[(8)] = inst_25371);

return statearr_25411;
})();
var statearr_25412_25460 = state_25396__$1;
(statearr_25412_25460[(2)] = inst_25373);

(statearr_25412_25460[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (13))){
var inst_25330 = figwheel.client.heads_up.clear.call(null);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(16),inst_25330);
} else {
if((state_val_25397 === (22))){
var inst_25351 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25352 = figwheel.client.heads_up.append_warning_message.call(null,inst_25351);
var state_25396__$1 = state_25396;
var statearr_25413_25461 = state_25396__$1;
(statearr_25413_25461[(2)] = inst_25352);

(statearr_25413_25461[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (36))){
var inst_25382 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25414_25462 = state_25396__$1;
(statearr_25414_25462[(2)] = inst_25382);

(statearr_25414_25462[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (29))){
var inst_25362 = (state_25396[(2)]);
var inst_25363 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25364 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25363);
var state_25396__$1 = (function (){var statearr_25415 = state_25396;
(statearr_25415[(9)] = inst_25362);

return statearr_25415;
})();
var statearr_25416_25463 = state_25396__$1;
(statearr_25416_25463[(2)] = inst_25364);

(statearr_25416_25463[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (6))){
var inst_25311 = (state_25396[(10)]);
var state_25396__$1 = state_25396;
var statearr_25417_25464 = state_25396__$1;
(statearr_25417_25464[(2)] = inst_25311);

(statearr_25417_25464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (28))){
var inst_25358 = (state_25396[(2)]);
var inst_25359 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25360 = figwheel.client.heads_up.display_warning.call(null,inst_25359);
var state_25396__$1 = (function (){var statearr_25418 = state_25396;
(statearr_25418[(11)] = inst_25358);

return statearr_25418;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(29),inst_25360);
} else {
if((state_val_25397 === (25))){
var inst_25356 = figwheel.client.heads_up.clear.call(null);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(28),inst_25356);
} else {
if((state_val_25397 === (34))){
var inst_25377 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(37),inst_25377);
} else {
if((state_val_25397 === (17))){
var inst_25336 = (state_25396[(2)]);
var inst_25337 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25338 = figwheel.client.auto_jump_to_error.call(null,opts,inst_25337);
var state_25396__$1 = (function (){var statearr_25419 = state_25396;
(statearr_25419[(12)] = inst_25336);

return statearr_25419;
})();
var statearr_25420_25465 = state_25396__$1;
(statearr_25420_25465[(2)] = inst_25338);

(statearr_25420_25465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (3))){
var inst_25328 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25328)){
var statearr_25421_25466 = state_25396__$1;
(statearr_25421_25466[(1)] = (13));

} else {
var statearr_25422_25467 = state_25396__$1;
(statearr_25422_25467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (12))){
var inst_25324 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25423_25468 = state_25396__$1;
(statearr_25423_25468[(2)] = inst_25324);

(statearr_25423_25468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (2))){
var inst_25311 = (state_25396[(10)]);
var inst_25311__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25396__$1 = (function (){var statearr_25424 = state_25396;
(statearr_25424[(10)] = inst_25311__$1);

return statearr_25424;
})();
if(cljs.core.truth_(inst_25311__$1)){
var statearr_25425_25469 = state_25396__$1;
(statearr_25425_25469[(1)] = (5));

} else {
var statearr_25426_25470 = state_25396__$1;
(statearr_25426_25470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (23))){
var inst_25354 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25354)){
var statearr_25427_25471 = state_25396__$1;
(statearr_25427_25471[(1)] = (25));

} else {
var statearr_25428_25472 = state_25396__$1;
(statearr_25428_25472[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (35))){
var state_25396__$1 = state_25396;
var statearr_25429_25473 = state_25396__$1;
(statearr_25429_25473[(2)] = null);

(statearr_25429_25473[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (19))){
var inst_25349 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25349)){
var statearr_25430_25474 = state_25396__$1;
(statearr_25430_25474[(1)] = (22));

} else {
var statearr_25431_25475 = state_25396__$1;
(statearr_25431_25475[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (11))){
var inst_25320 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25432_25476 = state_25396__$1;
(statearr_25432_25476[(2)] = inst_25320);

(statearr_25432_25476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (9))){
var inst_25322 = figwheel.client.heads_up.clear.call(null);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(12),inst_25322);
} else {
if((state_val_25397 === (5))){
var inst_25313 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25396__$1 = state_25396;
var statearr_25433_25477 = state_25396__$1;
(statearr_25433_25477[(2)] = inst_25313);

(statearr_25433_25477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (14))){
var inst_25340 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25340)){
var statearr_25434_25478 = state_25396__$1;
(statearr_25434_25478[(1)] = (18));

} else {
var statearr_25435_25479 = state_25396__$1;
(statearr_25435_25479[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (26))){
var inst_25366 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25396__$1 = state_25396;
if(cljs.core.truth_(inst_25366)){
var statearr_25436_25480 = state_25396__$1;
(statearr_25436_25480[(1)] = (30));

} else {
var statearr_25437_25481 = state_25396__$1;
(statearr_25437_25481[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (16))){
var inst_25332 = (state_25396[(2)]);
var inst_25333 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25334 = figwheel.client.heads_up.display_exception.call(null,inst_25333);
var state_25396__$1 = (function (){var statearr_25438 = state_25396;
(statearr_25438[(13)] = inst_25332);

return statearr_25438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(17),inst_25334);
} else {
if((state_val_25397 === (30))){
var inst_25368 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25369 = figwheel.client.heads_up.display_warning.call(null,inst_25368);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(33),inst_25369);
} else {
if((state_val_25397 === (10))){
var inst_25326 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25439_25482 = state_25396__$1;
(statearr_25439_25482[(2)] = inst_25326);

(statearr_25439_25482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (18))){
var inst_25342 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25343 = figwheel.client.heads_up.display_exception.call(null,inst_25342);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(21),inst_25343);
} else {
if((state_val_25397 === (37))){
var inst_25379 = (state_25396[(2)]);
var state_25396__$1 = state_25396;
var statearr_25440_25483 = state_25396__$1;
(statearr_25440_25483[(2)] = inst_25379);

(statearr_25440_25483[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25397 === (8))){
var inst_25318 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25396__$1 = state_25396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25396__$1,(11),inst_25318);
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
});})(c__16774__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__16662__auto__,c__16774__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto____0 = (function (){
var statearr_25444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25444[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto__);

(statearr_25444[(1)] = (1));

return statearr_25444;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto____1 = (function (state_25396){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_25396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e25445){if((e25445 instanceof Object)){
var ex__16666__auto__ = e25445;
var statearr_25446_25484 = state_25396;
(statearr_25446_25484[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25445;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25485 = state_25396;
state_25396 = G__25485;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto__ = function(state_25396){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto____1.call(this,state_25396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto__,msg_hist,msg_names,msg))
})();
var state__16776__auto__ = (function (){var statearr_25447 = f__16775__auto__.call(null);
(statearr_25447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto__);

return statearr_25447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto__,msg_hist,msg_names,msg))
);

return c__16774__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__16774__auto___25548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto___25548,ch){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto___25548,ch){
return (function (state_25531){
var state_val_25532 = (state_25531[(1)]);
if((state_val_25532 === (1))){
var state_25531__$1 = state_25531;
var statearr_25533_25549 = state_25531__$1;
(statearr_25533_25549[(2)] = null);

(statearr_25533_25549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (2))){
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25531__$1,(4),ch);
} else {
if((state_val_25532 === (3))){
var inst_25529 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25531__$1,inst_25529);
} else {
if((state_val_25532 === (4))){
var inst_25519 = (state_25531[(7)]);
var inst_25519__$1 = (state_25531[(2)]);
var state_25531__$1 = (function (){var statearr_25534 = state_25531;
(statearr_25534[(7)] = inst_25519__$1);

return statearr_25534;
})();
if(cljs.core.truth_(inst_25519__$1)){
var statearr_25535_25550 = state_25531__$1;
(statearr_25535_25550[(1)] = (5));

} else {
var statearr_25536_25551 = state_25531__$1;
(statearr_25536_25551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (5))){
var inst_25519 = (state_25531[(7)]);
var inst_25521 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25519);
var state_25531__$1 = state_25531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25531__$1,(8),inst_25521);
} else {
if((state_val_25532 === (6))){
var state_25531__$1 = state_25531;
var statearr_25537_25552 = state_25531__$1;
(statearr_25537_25552[(2)] = null);

(statearr_25537_25552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (7))){
var inst_25527 = (state_25531[(2)]);
var state_25531__$1 = state_25531;
var statearr_25538_25553 = state_25531__$1;
(statearr_25538_25553[(2)] = inst_25527);

(statearr_25538_25553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25532 === (8))){
var inst_25523 = (state_25531[(2)]);
var state_25531__$1 = (function (){var statearr_25539 = state_25531;
(statearr_25539[(8)] = inst_25523);

return statearr_25539;
})();
var statearr_25540_25554 = state_25531__$1;
(statearr_25540_25554[(2)] = null);

(statearr_25540_25554[(1)] = (2));


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
});})(c__16774__auto___25548,ch))
;
return ((function (switch__16662__auto__,c__16774__auto___25548,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__16663__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__16663__auto____0 = (function (){
var statearr_25544 = [null,null,null,null,null,null,null,null,null];
(statearr_25544[(0)] = figwheel$client$heads_up_plugin_$_state_machine__16663__auto__);

(statearr_25544[(1)] = (1));

return statearr_25544;
});
var figwheel$client$heads_up_plugin_$_state_machine__16663__auto____1 = (function (state_25531){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_25531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e25545){if((e25545 instanceof Object)){
var ex__16666__auto__ = e25545;
var statearr_25546_25555 = state_25531;
(statearr_25546_25555[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25556 = state_25531;
state_25531 = G__25556;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__16663__auto__ = function(state_25531){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__16663__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__16663__auto____1.call(this,state_25531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__16663__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__16663__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto___25548,ch))
})();
var state__16776__auto__ = (function (){var statearr_25547 = f__16775__auto__.call(null);
(statearr_25547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto___25548);

return statearr_25547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto___25548,ch))
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
var c__16774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto__){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto__){
return (function (state_25577){
var state_val_25578 = (state_25577[(1)]);
if((state_val_25578 === (1))){
var inst_25572 = cljs.core.async.timeout.call(null,(3000));
var state_25577__$1 = state_25577;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25577__$1,(2),inst_25572);
} else {
if((state_val_25578 === (2))){
var inst_25574 = (state_25577[(2)]);
var inst_25575 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25577__$1 = (function (){var statearr_25579 = state_25577;
(statearr_25579[(7)] = inst_25574);

return statearr_25579;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25577__$1,inst_25575);
} else {
return null;
}
}
});})(c__16774__auto__))
;
return ((function (switch__16662__auto__,c__16774__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__16663__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__16663__auto____0 = (function (){
var statearr_25583 = [null,null,null,null,null,null,null,null];
(statearr_25583[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__16663__auto__);

(statearr_25583[(1)] = (1));

return statearr_25583;
});
var figwheel$client$enforce_project_plugin_$_state_machine__16663__auto____1 = (function (state_25577){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_25577);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e25584){if((e25584 instanceof Object)){
var ex__16666__auto__ = e25584;
var statearr_25585_25587 = state_25577;
(statearr_25585_25587[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25577);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25588 = state_25577;
state_25577 = G__25588;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__16663__auto__ = function(state_25577){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__16663__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__16663__auto____1.call(this,state_25577);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__16663__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__16663__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto__))
})();
var state__16776__auto__ = (function (){var statearr_25586 = f__16775__auto__.call(null);
(statearr_25586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto__);

return statearr_25586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto__))
);

return c__16774__auto__;
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
var c__16774__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16774__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__16775__auto__ = (function (){var switch__16662__auto__ = ((function (c__16774__auto__,figwheel_version,temp__4657__auto__){
return (function (state_25611){
var state_val_25612 = (state_25611[(1)]);
if((state_val_25612 === (1))){
var inst_25605 = cljs.core.async.timeout.call(null,(2000));
var state_25611__$1 = state_25611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25611__$1,(2),inst_25605);
} else {
if((state_val_25612 === (2))){
var inst_25607 = (state_25611[(2)]);
var inst_25608 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_25609 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_25608);
var state_25611__$1 = (function (){var statearr_25613 = state_25611;
(statearr_25613[(7)] = inst_25607);

return statearr_25613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25611__$1,inst_25609);
} else {
return null;
}
}
});})(c__16774__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__16662__auto__,c__16774__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto____0 = (function (){
var statearr_25617 = [null,null,null,null,null,null,null,null];
(statearr_25617[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto__);

(statearr_25617[(1)] = (1));

return statearr_25617;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto____1 = (function (state_25611){
while(true){
var ret_value__16664__auto__ = (function (){try{while(true){
var result__16665__auto__ = switch__16662__auto__.call(null,state_25611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16665__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16665__auto__;
}
break;
}
}catch (e25618){if((e25618 instanceof Object)){
var ex__16666__auto__ = e25618;
var statearr_25619_25621 = state_25611;
(statearr_25619_25621[(5)] = ex__16666__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25622 = state_25611;
state_25611 = G__25622;
continue;
} else {
return ret_value__16664__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto__ = function(state_25611){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto____1.call(this,state_25611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__16663__auto__;
})()
;})(switch__16662__auto__,c__16774__auto__,figwheel_version,temp__4657__auto__))
})();
var state__16776__auto__ = (function (){var statearr_25620 = f__16775__auto__.call(null);
(statearr_25620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16774__auto__);

return statearr_25620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16776__auto__);
});})(c__16774__auto__,figwheel_version,temp__4657__auto__))
);

return c__16774__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__25623){
var map__25627 = p__25623;
var map__25627__$1 = ((((!((map__25627 == null)))?((((map__25627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25627):map__25627);
var file = cljs.core.get.call(null,map__25627__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__25627__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__25627__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__25629 = "";
var G__25629__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25629),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__25629);
var G__25629__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25629__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__25629__$1);
if(cljs.core.truth_((function (){var and__7018__auto__ = line;
if(cljs.core.truth_(and__7018__auto__)){
return column;
} else {
return and__7018__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__25629__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__25629__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25630){
var map__25637 = p__25630;
var map__25637__$1 = ((((!((map__25637 == null)))?((((map__25637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25637):map__25637);
var ed = map__25637__$1;
var formatted_exception = cljs.core.get.call(null,map__25637__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25637__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25637__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25639_25643 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25640_25644 = null;
var count__25641_25645 = (0);
var i__25642_25646 = (0);
while(true){
if((i__25642_25646 < count__25641_25645)){
var msg_25647 = cljs.core._nth.call(null,chunk__25640_25644,i__25642_25646);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25647);

var G__25648 = seq__25639_25643;
var G__25649 = chunk__25640_25644;
var G__25650 = count__25641_25645;
var G__25651 = (i__25642_25646 + (1));
seq__25639_25643 = G__25648;
chunk__25640_25644 = G__25649;
count__25641_25645 = G__25650;
i__25642_25646 = G__25651;
continue;
} else {
var temp__4657__auto___25652 = cljs.core.seq.call(null,seq__25639_25643);
if(temp__4657__auto___25652){
var seq__25639_25653__$1 = temp__4657__auto___25652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25639_25653__$1)){
var c__7849__auto___25654 = cljs.core.chunk_first.call(null,seq__25639_25653__$1);
var G__25655 = cljs.core.chunk_rest.call(null,seq__25639_25653__$1);
var G__25656 = c__7849__auto___25654;
var G__25657 = cljs.core.count.call(null,c__7849__auto___25654);
var G__25658 = (0);
seq__25639_25643 = G__25655;
chunk__25640_25644 = G__25656;
count__25641_25645 = G__25657;
i__25642_25646 = G__25658;
continue;
} else {
var msg_25659 = cljs.core.first.call(null,seq__25639_25653__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25659);

var G__25660 = cljs.core.next.call(null,seq__25639_25653__$1);
var G__25661 = null;
var G__25662 = (0);
var G__25663 = (0);
seq__25639_25643 = G__25660;
chunk__25640_25644 = G__25661;
count__25641_25645 = G__25662;
i__25642_25646 = G__25663;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25664){
var map__25667 = p__25664;
var map__25667__$1 = ((((!((map__25667 == null)))?((((map__25667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25667):map__25667);
var w = map__25667__$1;
var message = cljs.core.get.call(null,map__25667__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__7018__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__7018__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__7018__auto__;
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
var seq__25679 = cljs.core.seq.call(null,plugins);
var chunk__25680 = null;
var count__25681 = (0);
var i__25682 = (0);
while(true){
if((i__25682 < count__25681)){
var vec__25683 = cljs.core._nth.call(null,chunk__25680,i__25682);
var k = cljs.core.nth.call(null,vec__25683,(0),null);
var plugin = cljs.core.nth.call(null,vec__25683,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25689 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25679,chunk__25680,count__25681,i__25682,pl_25689,vec__25683,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25689.call(null,msg_hist);
});})(seq__25679,chunk__25680,count__25681,i__25682,pl_25689,vec__25683,k,plugin))
);
} else {
}

var G__25690 = seq__25679;
var G__25691 = chunk__25680;
var G__25692 = count__25681;
var G__25693 = (i__25682 + (1));
seq__25679 = G__25690;
chunk__25680 = G__25691;
count__25681 = G__25692;
i__25682 = G__25693;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25679);
if(temp__4657__auto__){
var seq__25679__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25679__$1)){
var c__7849__auto__ = cljs.core.chunk_first.call(null,seq__25679__$1);
var G__25694 = cljs.core.chunk_rest.call(null,seq__25679__$1);
var G__25695 = c__7849__auto__;
var G__25696 = cljs.core.count.call(null,c__7849__auto__);
var G__25697 = (0);
seq__25679 = G__25694;
chunk__25680 = G__25695;
count__25681 = G__25696;
i__25682 = G__25697;
continue;
} else {
var vec__25686 = cljs.core.first.call(null,seq__25679__$1);
var k = cljs.core.nth.call(null,vec__25686,(0),null);
var plugin = cljs.core.nth.call(null,vec__25686,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25698 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25679,chunk__25680,count__25681,i__25682,pl_25698,vec__25686,k,plugin,seq__25679__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25698.call(null,msg_hist);
});})(seq__25679,chunk__25680,count__25681,i__25682,pl_25698,vec__25686,k,plugin,seq__25679__$1,temp__4657__auto__))
);
} else {
}

var G__25699 = cljs.core.next.call(null,seq__25679__$1);
var G__25700 = null;
var G__25701 = (0);
var G__25702 = (0);
seq__25679 = G__25699;
chunk__25680 = G__25700;
count__25681 = G__25701;
i__25682 = G__25702;
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
var args25703 = [];
var len__8143__auto___25710 = arguments.length;
var i__8144__auto___25711 = (0);
while(true){
if((i__8144__auto___25711 < len__8143__auto___25710)){
args25703.push((arguments[i__8144__auto___25711]));

var G__25712 = (i__8144__auto___25711 + (1));
i__8144__auto___25711 = G__25712;
continue;
} else {
}
break;
}

var G__25705 = args25703.length;
switch (G__25705) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args25703.length)].join('')));

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

var seq__25706_25714 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__25707_25715 = null;
var count__25708_25716 = (0);
var i__25709_25717 = (0);
while(true){
if((i__25709_25717 < count__25708_25716)){
var msg_25718 = cljs.core._nth.call(null,chunk__25707_25715,i__25709_25717);
figwheel.client.socket.handle_incoming_message.call(null,msg_25718);

var G__25719 = seq__25706_25714;
var G__25720 = chunk__25707_25715;
var G__25721 = count__25708_25716;
var G__25722 = (i__25709_25717 + (1));
seq__25706_25714 = G__25719;
chunk__25707_25715 = G__25720;
count__25708_25716 = G__25721;
i__25709_25717 = G__25722;
continue;
} else {
var temp__4657__auto___25723 = cljs.core.seq.call(null,seq__25706_25714);
if(temp__4657__auto___25723){
var seq__25706_25724__$1 = temp__4657__auto___25723;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25706_25724__$1)){
var c__7849__auto___25725 = cljs.core.chunk_first.call(null,seq__25706_25724__$1);
var G__25726 = cljs.core.chunk_rest.call(null,seq__25706_25724__$1);
var G__25727 = c__7849__auto___25725;
var G__25728 = cljs.core.count.call(null,c__7849__auto___25725);
var G__25729 = (0);
seq__25706_25714 = G__25726;
chunk__25707_25715 = G__25727;
count__25708_25716 = G__25728;
i__25709_25717 = G__25729;
continue;
} else {
var msg_25730 = cljs.core.first.call(null,seq__25706_25724__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_25730);

var G__25731 = cljs.core.next.call(null,seq__25706_25724__$1);
var G__25732 = null;
var G__25733 = (0);
var G__25734 = (0);
seq__25706_25714 = G__25731;
chunk__25707_25715 = G__25732;
count__25708_25716 = G__25733;
i__25709_25717 = G__25734;
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
var args__8150__auto__ = [];
var len__8143__auto___25739 = arguments.length;
var i__8144__auto___25740 = (0);
while(true){
if((i__8144__auto___25740 < len__8143__auto___25739)){
args__8150__auto__.push((arguments[i__8144__auto___25740]));

var G__25741 = (i__8144__auto___25740 + (1));
i__8144__auto___25740 = G__25741;
continue;
} else {
}
break;
}

var argseq__8151__auto__ = ((((0) < args__8150__auto__.length))?(new cljs.core.IndexedSeq(args__8150__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__8151__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25736){
var map__25737 = p__25736;
var map__25737__$1 = ((((!((map__25737 == null)))?((((map__25737.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25737.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25737):map__25737);
var opts = map__25737__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25735){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25735));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e25743){if((e25743 instanceof Error)){
var e = e25743;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e25743;

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
return (function (p__25747){
var map__25748 = p__25747;
var map__25748__$1 = ((((!((map__25748 == null)))?((((map__25748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25748):map__25748);
var msg_name = cljs.core.get.call(null,map__25748__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map