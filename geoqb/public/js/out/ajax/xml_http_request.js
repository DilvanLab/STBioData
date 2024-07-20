// Compiled by ClojureScript 1.9.562 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__32310,handler){
var map__32311 = p__32310;
var map__32311__$1 = ((((!((map__32311 == null)))?((((map__32311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32311):map__32311);
var uri = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__32311,map__32311__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__32309_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__32309_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__32311,map__32311__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___32323 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___32323)){
var response_type_32324 = temp__4657__auto___32323;
this$__$1.responseType = cljs.core.name.call(null,response_type_32324);
} else {
}

var seq__32313_32325 = cljs.core.seq.call(null,headers);
var chunk__32314_32326 = null;
var count__32315_32327 = (0);
var i__32316_32328 = (0);
while(true){
if((i__32316_32328 < count__32315_32327)){
var vec__32317_32329 = cljs.core._nth.call(null,chunk__32314_32326,i__32316_32328);
var k_32330 = cljs.core.nth.call(null,vec__32317_32329,(0),null);
var v_32331 = cljs.core.nth.call(null,vec__32317_32329,(1),null);
this$__$1.setRequestHeader(k_32330,v_32331);

var G__32332 = seq__32313_32325;
var G__32333 = chunk__32314_32326;
var G__32334 = count__32315_32327;
var G__32335 = (i__32316_32328 + (1));
seq__32313_32325 = G__32332;
chunk__32314_32326 = G__32333;
count__32315_32327 = G__32334;
i__32316_32328 = G__32335;
continue;
} else {
var temp__4657__auto___32336 = cljs.core.seq.call(null,seq__32313_32325);
if(temp__4657__auto___32336){
var seq__32313_32337__$1 = temp__4657__auto___32336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32313_32337__$1)){
var c__26251__auto___32338 = cljs.core.chunk_first.call(null,seq__32313_32337__$1);
var G__32339 = cljs.core.chunk_rest.call(null,seq__32313_32337__$1);
var G__32340 = c__26251__auto___32338;
var G__32341 = cljs.core.count.call(null,c__26251__auto___32338);
var G__32342 = (0);
seq__32313_32325 = G__32339;
chunk__32314_32326 = G__32340;
count__32315_32327 = G__32341;
i__32316_32328 = G__32342;
continue;
} else {
var vec__32320_32343 = cljs.core.first.call(null,seq__32313_32337__$1);
var k_32344 = cljs.core.nth.call(null,vec__32320_32343,(0),null);
var v_32345 = cljs.core.nth.call(null,vec__32320_32343,(1),null);
this$__$1.setRequestHeader(k_32344,v_32345);

var G__32346 = cljs.core.next.call(null,seq__32313_32337__$1);
var G__32347 = null;
var G__32348 = (0);
var G__32349 = (0);
seq__32313_32325 = G__32346;
chunk__32314_32326 = G__32347;
count__32315_32327 = G__32348;
i__32316_32328 = G__32349;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__25432__auto__ = body;
if(cljs.core.truth_(or__25432__auto__)){
return or__25432__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1502108317835