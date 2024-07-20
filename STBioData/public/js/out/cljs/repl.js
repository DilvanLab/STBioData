// Compiled by ClojureScript 1.9.562 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24474){
var map__24499 = p__24474;
var map__24499__$1 = ((((!((map__24499 == null)))?((((map__24499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24499.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24499):map__24499);
var m = map__24499__$1;
var n = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24499__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__24501_24523 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24502_24524 = null;
var count__24503_24525 = (0);
var i__24504_24526 = (0);
while(true){
if((i__24504_24526 < count__24503_24525)){
var f_24527 = cljs.core._nth.call(null,chunk__24502_24524,i__24504_24526);
cljs.core.println.call(null,"  ",f_24527);

var G__24528 = seq__24501_24523;
var G__24529 = chunk__24502_24524;
var G__24530 = count__24503_24525;
var G__24531 = (i__24504_24526 + (1));
seq__24501_24523 = G__24528;
chunk__24502_24524 = G__24529;
count__24503_24525 = G__24530;
i__24504_24526 = G__24531;
continue;
} else {
var temp__4657__auto___24532 = cljs.core.seq.call(null,seq__24501_24523);
if(temp__4657__auto___24532){
var seq__24501_24533__$1 = temp__4657__auto___24532;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24501_24533__$1)){
var c__7849__auto___24534 = cljs.core.chunk_first.call(null,seq__24501_24533__$1);
var G__24535 = cljs.core.chunk_rest.call(null,seq__24501_24533__$1);
var G__24536 = c__7849__auto___24534;
var G__24537 = cljs.core.count.call(null,c__7849__auto___24534);
var G__24538 = (0);
seq__24501_24523 = G__24535;
chunk__24502_24524 = G__24536;
count__24503_24525 = G__24537;
i__24504_24526 = G__24538;
continue;
} else {
var f_24539 = cljs.core.first.call(null,seq__24501_24533__$1);
cljs.core.println.call(null,"  ",f_24539);

var G__24540 = cljs.core.next.call(null,seq__24501_24533__$1);
var G__24541 = null;
var G__24542 = (0);
var G__24543 = (0);
seq__24501_24523 = G__24540;
chunk__24502_24524 = G__24541;
count__24503_24525 = G__24542;
i__24504_24526 = G__24543;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24544 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7030__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24544);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24544)))?cljs.core.second.call(null,arglists_24544):arglists_24544));
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
var seq__24505_24545 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24506_24546 = null;
var count__24507_24547 = (0);
var i__24508_24548 = (0);
while(true){
if((i__24508_24548 < count__24507_24547)){
var vec__24509_24549 = cljs.core._nth.call(null,chunk__24506_24546,i__24508_24548);
var name_24550 = cljs.core.nth.call(null,vec__24509_24549,(0),null);
var map__24512_24551 = cljs.core.nth.call(null,vec__24509_24549,(1),null);
var map__24512_24552__$1 = ((((!((map__24512_24551 == null)))?((((map__24512_24551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24512_24551.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24512_24551):map__24512_24551);
var doc_24553 = cljs.core.get.call(null,map__24512_24552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24554 = cljs.core.get.call(null,map__24512_24552__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24550);

cljs.core.println.call(null," ",arglists_24554);

if(cljs.core.truth_(doc_24553)){
cljs.core.println.call(null," ",doc_24553);
} else {
}

var G__24555 = seq__24505_24545;
var G__24556 = chunk__24506_24546;
var G__24557 = count__24507_24547;
var G__24558 = (i__24508_24548 + (1));
seq__24505_24545 = G__24555;
chunk__24506_24546 = G__24556;
count__24507_24547 = G__24557;
i__24508_24548 = G__24558;
continue;
} else {
var temp__4657__auto___24559 = cljs.core.seq.call(null,seq__24505_24545);
if(temp__4657__auto___24559){
var seq__24505_24560__$1 = temp__4657__auto___24559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24505_24560__$1)){
var c__7849__auto___24561 = cljs.core.chunk_first.call(null,seq__24505_24560__$1);
var G__24562 = cljs.core.chunk_rest.call(null,seq__24505_24560__$1);
var G__24563 = c__7849__auto___24561;
var G__24564 = cljs.core.count.call(null,c__7849__auto___24561);
var G__24565 = (0);
seq__24505_24545 = G__24562;
chunk__24506_24546 = G__24563;
count__24507_24547 = G__24564;
i__24508_24548 = G__24565;
continue;
} else {
var vec__24514_24566 = cljs.core.first.call(null,seq__24505_24560__$1);
var name_24567 = cljs.core.nth.call(null,vec__24514_24566,(0),null);
var map__24517_24568 = cljs.core.nth.call(null,vec__24514_24566,(1),null);
var map__24517_24569__$1 = ((((!((map__24517_24568 == null)))?((((map__24517_24568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24517_24568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24517_24568):map__24517_24568);
var doc_24570 = cljs.core.get.call(null,map__24517_24569__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24571 = cljs.core.get.call(null,map__24517_24569__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24567);

cljs.core.println.call(null," ",arglists_24571);

if(cljs.core.truth_(doc_24570)){
cljs.core.println.call(null," ",doc_24570);
} else {
}

var G__24572 = cljs.core.next.call(null,seq__24505_24560__$1);
var G__24573 = null;
var G__24574 = (0);
var G__24575 = (0);
seq__24505_24545 = G__24572;
chunk__24506_24546 = G__24573;
count__24507_24547 = G__24574;
i__24508_24548 = G__24575;
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

var seq__24519 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24520 = null;
var count__24521 = (0);
var i__24522 = (0);
while(true){
if((i__24522 < count__24521)){
var role = cljs.core._nth.call(null,chunk__24520,i__24522);
var temp__4657__auto___24576__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___24576__$1)){
var spec_24577 = temp__4657__auto___24576__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_24577));
} else {
}

var G__24578 = seq__24519;
var G__24579 = chunk__24520;
var G__24580 = count__24521;
var G__24581 = (i__24522 + (1));
seq__24519 = G__24578;
chunk__24520 = G__24579;
count__24521 = G__24580;
i__24522 = G__24581;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__24519);
if(temp__4657__auto____$1){
var seq__24519__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24519__$1)){
var c__7849__auto__ = cljs.core.chunk_first.call(null,seq__24519__$1);
var G__24582 = cljs.core.chunk_rest.call(null,seq__24519__$1);
var G__24583 = c__7849__auto__;
var G__24584 = cljs.core.count.call(null,c__7849__auto__);
var G__24585 = (0);
seq__24519 = G__24582;
chunk__24520 = G__24583;
count__24521 = G__24584;
i__24522 = G__24585;
continue;
} else {
var role = cljs.core.first.call(null,seq__24519__$1);
var temp__4657__auto___24586__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___24586__$2)){
var spec_24587 = temp__4657__auto___24586__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_24587));
} else {
}

var G__24588 = cljs.core.next.call(null,seq__24519__$1);
var G__24589 = null;
var G__24590 = (0);
var G__24591 = (0);
seq__24519 = G__24588;
chunk__24520 = G__24589;
count__24521 = G__24590;
i__24522 = G__24591;
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

//# sourceMappingURL=repl.js.map