// Compiled by ClojureScript 1.9.562 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13908,handler){
var map__13909 = p__13908;
var map__13909__$1 = ((((!((map__13909 == null)))?((((map__13909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13909.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13909):map__13909);
var uri = cljs.core.get.call(null,map__13909__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__13909__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__13909__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__13909__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__13909__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__13909__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__13909__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__13909,map__13909__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__13907_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__13907_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__13909,map__13909__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___13921 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___13921)){
var response_type_13922 = temp__4657__auto___13921;
this$__$1.responseType = cljs.core.name.call(null,response_type_13922);
} else {
}

var seq__13911_13923 = cljs.core.seq.call(null,headers);
var chunk__13912_13924 = null;
var count__13913_13925 = (0);
var i__13914_13926 = (0);
while(true){
if((i__13914_13926 < count__13913_13925)){
var vec__13915_13927 = cljs.core._nth.call(null,chunk__13912_13924,i__13914_13926);
var k_13928 = cljs.core.nth.call(null,vec__13915_13927,(0),null);
var v_13929 = cljs.core.nth.call(null,vec__13915_13927,(1),null);
this$__$1.setRequestHeader(k_13928,v_13929);

var G__13930 = seq__13911_13923;
var G__13931 = chunk__13912_13924;
var G__13932 = count__13913_13925;
var G__13933 = (i__13914_13926 + (1));
seq__13911_13923 = G__13930;
chunk__13912_13924 = G__13931;
count__13913_13925 = G__13932;
i__13914_13926 = G__13933;
continue;
} else {
var temp__4657__auto___13934 = cljs.core.seq.call(null,seq__13911_13923);
if(temp__4657__auto___13934){
var seq__13911_13935__$1 = temp__4657__auto___13934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13911_13935__$1)){
var c__7849__auto___13936 = cljs.core.chunk_first.call(null,seq__13911_13935__$1);
var G__13937 = cljs.core.chunk_rest.call(null,seq__13911_13935__$1);
var G__13938 = c__7849__auto___13936;
var G__13939 = cljs.core.count.call(null,c__7849__auto___13936);
var G__13940 = (0);
seq__13911_13923 = G__13937;
chunk__13912_13924 = G__13938;
count__13913_13925 = G__13939;
i__13914_13926 = G__13940;
continue;
} else {
var vec__13918_13941 = cljs.core.first.call(null,seq__13911_13935__$1);
var k_13942 = cljs.core.nth.call(null,vec__13918_13941,(0),null);
var v_13943 = cljs.core.nth.call(null,vec__13918_13941,(1),null);
this$__$1.setRequestHeader(k_13942,v_13943);

var G__13944 = cljs.core.next.call(null,seq__13911_13935__$1);
var G__13945 = null;
var G__13946 = (0);
var G__13947 = (0);
seq__13911_13923 = G__13944;
chunk__13912_13924 = G__13945;
count__13913_13925 = G__13946;
i__13914_13926 = G__13947;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__7030__auto__ = body;
if(cljs.core.truth_(or__7030__auto__)){
return or__7030__auto__;
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

//# sourceMappingURL=xml_http_request.js.map