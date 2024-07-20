// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41754){
var map__41779 = p__41754;
var map__41779__$1 = ((((!((map__41779 == null)))?((((map__41779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41779):map__41779);
var m = map__41779__$1;
var n = cljs.core.get.call(null,map__41779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41781_41803 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41782_41804 = null;
var count__41783_41805 = (0);
var i__41784_41806 = (0);
while(true){
if((i__41784_41806 < count__41783_41805)){
var f_41807 = cljs.core._nth.call(null,chunk__41782_41804,i__41784_41806);
cljs.core.println.call(null,"  ",f_41807);

var G__41808 = seq__41781_41803;
var G__41809 = chunk__41782_41804;
var G__41810 = count__41783_41805;
var G__41811 = (i__41784_41806 + (1));
seq__41781_41803 = G__41808;
chunk__41782_41804 = G__41809;
count__41783_41805 = G__41810;
i__41784_41806 = G__41811;
continue;
} else {
var temp__4657__auto___41812 = cljs.core.seq.call(null,seq__41781_41803);
if(temp__4657__auto___41812){
var seq__41781_41813__$1 = temp__4657__auto___41812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41781_41813__$1)){
var c__26251__auto___41814 = cljs.core.chunk_first.call(null,seq__41781_41813__$1);
var G__41815 = cljs.core.chunk_rest.call(null,seq__41781_41813__$1);
var G__41816 = c__26251__auto___41814;
var G__41817 = cljs.core.count.call(null,c__26251__auto___41814);
var G__41818 = (0);
seq__41781_41803 = G__41815;
chunk__41782_41804 = G__41816;
count__41783_41805 = G__41817;
i__41784_41806 = G__41818;
continue;
} else {
var f_41819 = cljs.core.first.call(null,seq__41781_41813__$1);
cljs.core.println.call(null,"  ",f_41819);

var G__41820 = cljs.core.next.call(null,seq__41781_41813__$1);
var G__41821 = null;
var G__41822 = (0);
var G__41823 = (0);
seq__41781_41803 = G__41820;
chunk__41782_41804 = G__41821;
count__41783_41805 = G__41822;
i__41784_41806 = G__41823;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41824 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25432__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41824);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41824)))?cljs.core.second.call(null,arglists_41824):arglists_41824));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41785_41825 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41786_41826 = null;
var count__41787_41827 = (0);
var i__41788_41828 = (0);
while(true){
if((i__41788_41828 < count__41787_41827)){
var vec__41789_41829 = cljs.core._nth.call(null,chunk__41786_41826,i__41788_41828);
var name_41830 = cljs.core.nth.call(null,vec__41789_41829,(0),null);
var map__41792_41831 = cljs.core.nth.call(null,vec__41789_41829,(1),null);
var map__41792_41832__$1 = ((((!((map__41792_41831 == null)))?((((map__41792_41831.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41792_41831.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41792_41831):map__41792_41831);
var doc_41833 = cljs.core.get.call(null,map__41792_41832__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41834 = cljs.core.get.call(null,map__41792_41832__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41830);

cljs.core.println.call(null," ",arglists_41834);

if(cljs.core.truth_(doc_41833)){
cljs.core.println.call(null," ",doc_41833);
} else {
}

var G__41835 = seq__41785_41825;
var G__41836 = chunk__41786_41826;
var G__41837 = count__41787_41827;
var G__41838 = (i__41788_41828 + (1));
seq__41785_41825 = G__41835;
chunk__41786_41826 = G__41836;
count__41787_41827 = G__41837;
i__41788_41828 = G__41838;
continue;
} else {
var temp__4657__auto___41839 = cljs.core.seq.call(null,seq__41785_41825);
if(temp__4657__auto___41839){
var seq__41785_41840__$1 = temp__4657__auto___41839;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41785_41840__$1)){
var c__26251__auto___41841 = cljs.core.chunk_first.call(null,seq__41785_41840__$1);
var G__41842 = cljs.core.chunk_rest.call(null,seq__41785_41840__$1);
var G__41843 = c__26251__auto___41841;
var G__41844 = cljs.core.count.call(null,c__26251__auto___41841);
var G__41845 = (0);
seq__41785_41825 = G__41842;
chunk__41786_41826 = G__41843;
count__41787_41827 = G__41844;
i__41788_41828 = G__41845;
continue;
} else {
var vec__41794_41846 = cljs.core.first.call(null,seq__41785_41840__$1);
var name_41847 = cljs.core.nth.call(null,vec__41794_41846,(0),null);
var map__41797_41848 = cljs.core.nth.call(null,vec__41794_41846,(1),null);
var map__41797_41849__$1 = ((((!((map__41797_41848 == null)))?((((map__41797_41848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41797_41848.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41797_41848):map__41797_41848);
var doc_41850 = cljs.core.get.call(null,map__41797_41849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41851 = cljs.core.get.call(null,map__41797_41849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41847);

cljs.core.println.call(null," ",arglists_41851);

if(cljs.core.truth_(doc_41850)){
cljs.core.println.call(null," ",doc_41850);
} else {
}

var G__41852 = cljs.core.next.call(null,seq__41785_41840__$1);
var G__41853 = null;
var G__41854 = (0);
var G__41855 = (0);
seq__41785_41825 = G__41852;
chunk__41786_41826 = G__41853;
count__41787_41827 = G__41854;
i__41788_41828 = G__41855;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__41799 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41800 = null;
var count__41801 = (0);
var i__41802 = (0);
while(true){
if((i__41802 < count__41801)){
var role = cljs.core._nth.call(null,chunk__41800,i__41802);
var temp__4657__auto___41856__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41856__$1)){
var spec_41857 = temp__4657__auto___41856__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_41857));
} else {
}

var G__41858 = seq__41799;
var G__41859 = chunk__41800;
var G__41860 = count__41801;
var G__41861 = (i__41802 + (1));
seq__41799 = G__41858;
chunk__41800 = G__41859;
count__41801 = G__41860;
i__41802 = G__41861;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41799);
if(temp__4657__auto____$1){
var seq__41799__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41799__$1)){
var c__26251__auto__ = cljs.core.chunk_first.call(null,seq__41799__$1);
var G__41862 = cljs.core.chunk_rest.call(null,seq__41799__$1);
var G__41863 = c__26251__auto__;
var G__41864 = cljs.core.count.call(null,c__26251__auto__);
var G__41865 = (0);
seq__41799 = G__41862;
chunk__41800 = G__41863;
count__41801 = G__41864;
i__41802 = G__41865;
continue;
} else {
var role = cljs.core.first.call(null,seq__41799__$1);
var temp__4657__auto___41866__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41866__$2)){
var spec_41867 = temp__4657__auto___41866__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_41867));
} else {
}

var G__41868 = cljs.core.next.call(null,seq__41799__$1);
var G__41869 = null;
var G__41870 = (0);
var G__41871 = (0);
seq__41799 = G__41868;
chunk__41800 = G__41869;
count__41801 = G__41870;
i__41802 = G__41871;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1502108341247