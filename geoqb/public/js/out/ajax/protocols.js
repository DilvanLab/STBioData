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
goog.provide('ajax.protocols');
goog.require('cljs.core');

/**
 * An abstraction for a javascript class that implements
 * Ajax calls.
 * @interface
 */
ajax.protocols.AjaxImpl = function(){};

/**
 * Makes an actual ajax request.  All parameters except opts
 *   are in JS format.  Should return an AjaxRequest.
 */
ajax.protocols._js_ajax_request = (function ajax$protocols$_js_ajax_request(this$,request,handler){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 == null)))){
return this$.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3(this$,request,handler);
} else {
var x__26100__auto__ = (((this$ == null))?null:this$);
var m__26101__auto__ = (ajax.protocols._js_ajax_request[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,this$,request,handler);
} else {
var m__26101__auto____$1 = (ajax.protocols._js_ajax_request["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,this$,request,handler);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
}
});


/**
 * An abstraction for a running ajax request.
 * @interface
 */
ajax.protocols.AjaxRequest = function(){};

/**
 * Aborts a running ajax request, if possible.
 */
ajax.protocols._abort = (function ajax$protocols$_abort(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxRequest$_abort$arity$1 == null)))){
return this$.ajax$protocols$AjaxRequest$_abort$arity$1(this$);
} else {
var x__26100__auto__ = (((this$ == null))?null:this$);
var m__26101__auto__ = (ajax.protocols._abort[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,this$);
} else {
var m__26101__auto____$1 = (ajax.protocols._abort["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
}
});


/**
 * An abstraction for an ajax response.
 * @interface
 */
ajax.protocols.AjaxResponse = function(){};

/**
 * Returns the HTTP Status of the response as an integer.
 */
ajax.protocols._status = (function ajax$protocols$_status(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status$arity$1(this$);
} else {
var x__26100__auto__ = (((this$ == null))?null:this$);
var m__26101__auto__ = (ajax.protocols._status[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,this$);
} else {
var m__26101__auto____$1 = (ajax.protocols._status["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
}
});

/**
 * Returns the HTTP Status Text of the response as a string.
 */
ajax.protocols._status_text = (function ajax$protocols$_status_text(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_status_text$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__26100__auto__ = (((this$ == null))?null:this$);
var m__26101__auto__ = (ajax.protocols._status_text[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,this$);
} else {
var m__26101__auto____$1 = (ajax.protocols._status_text["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
}
});

/**
 * Returns the response body as a string or as type specified in response-format such as a blob or arraybuffer.
 */
ajax.protocols._body = (function ajax$protocols$_body(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_body$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_body$arity$1(this$);
} else {
var x__26100__auto__ = (((this$ == null))?null:this$);
var m__26101__auto__ = (ajax.protocols._body[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,this$);
} else {
var m__26101__auto____$1 = (ajax.protocols._body["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
}
});

/**
 * Gets the specified response header (specified by a string) as a string.
 */
ajax.protocols._get_response_header = (function ajax$protocols$_get_response_header(this$,header){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2 == null)))){
return this$.ajax$protocols$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__26100__auto__ = (((this$ == null))?null:this$);
var m__26101__auto__ = (ajax.protocols._get_response_header[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,this$,header);
} else {
var m__26101__auto____$1 = (ajax.protocols._get_response_header["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,this$,header);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
}
});

/**
 * Was the response aborted.
 */
ajax.protocols._was_aborted = (function ajax$protocols$_was_aborted(this$){
if((!((this$ == null))) && (!((this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1 == null)))){
return this$.ajax$protocols$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__26100__auto__ = (((this$ == null))?null:this$);
var m__26101__auto__ = (ajax.protocols._was_aborted[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,this$);
} else {
var m__26101__auto____$1 = (ajax.protocols._was_aborted["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
}
});


/**
 * An abstraction for something that processes requests and responses.
 * @interface
 */
ajax.protocols.Interceptor = function(){};

/**
 * Transforms the opts
 */
ajax.protocols._process_request = (function ajax$protocols$_process_request(this$,request){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_request$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_request$arity$2(this$,request);
} else {
var x__26100__auto__ = (((this$ == null))?null:this$);
var m__26101__auto__ = (ajax.protocols._process_request[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,this$,request);
} else {
var m__26101__auto____$1 = (ajax.protocols._process_request["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,this$,request);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-request",this$);
}
}
}
});

/**
 * Transforms the raw response (an implementation of AjaxResponse)
 */
ajax.protocols._process_response = (function ajax$protocols$_process_response(this$,response){
if((!((this$ == null))) && (!((this$.ajax$protocols$Interceptor$_process_response$arity$2 == null)))){
return this$.ajax$protocols$Interceptor$_process_response$arity$2(this$,response);
} else {
var x__26100__auto__ = (((this$ == null))?null:this$);
var m__26101__auto__ = (ajax.protocols._process_response[goog.typeOf(x__26100__auto__)]);
if(!((m__26101__auto__ == null))){
return m__26101__auto__.call(null,this$,response);
} else {
var m__26101__auto____$1 = (ajax.protocols._process_response["_"]);
if(!((m__26101__auto____$1 == null))){
return m__26101__auto____$1.call(null,this$,response);
} else {
throw cljs.core.missing_protocol.call(null,"Interceptor.-process-response",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.AjaxResponse}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.protocols.Response = (function (status,body,status_text,headers,was_aborted,__meta,__extmap,__hash){
this.status = status;
this.body = body;
this.status_text = status_text;
this.headers = headers;
this.was_aborted = was_aborted;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__26059__auto__,k__26060__auto__){
var self__ = this;
var this__26059__auto____$1 = this;
return this__26059__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__26060__auto__,null);
});

ajax.protocols.Response.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__26061__auto__,k32300,else__26062__auto__){
var self__ = this;
var this__26061__auto____$1 = this;
var G__32302 = k32300;
var G__32302__$1 = (((G__32302 instanceof cljs.core.Keyword))?G__32302.fqn:null);
switch (G__32302__$1) {
case "status":
return self__.status;

break;
case "body":
return self__.body;

break;
case "status-text":
return self__.status_text;

break;
case "headers":
return self__.headers;

break;
case "was-aborted":
return self__.was_aborted;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k32300,else__26062__auto__);

}
});

ajax.protocols.Response.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__26073__auto__,writer__26074__auto__,opts__26075__auto__){
var self__ = this;
var this__26073__auto____$1 = this;
var pr_pair__26076__auto__ = ((function (this__26073__auto____$1){
return (function (keyval__26077__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__26074__auto__,cljs.core.pr_writer,""," ","",opts__26075__auto__,keyval__26077__auto__);
});})(this__26073__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__26074__auto__,pr_pair__26076__auto__,"#ajax.protocols.Response{",", ","}",opts__26075__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

ajax.protocols.Response.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32299){
var self__ = this;
var G__32299__$1 = this;
return (new cljs.core.RecordIter((0),G__32299__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

ajax.protocols.Response.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__26057__auto__){
var self__ = this;
var this__26057__auto____$1 = this;
return self__.__meta;
});

ajax.protocols.Response.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__26053__auto__){
var self__ = this;
var this__26053__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__26063__auto__){
var self__ = this;
var this__26063__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__26054__auto__){
var self__ = this;
var this__26054__auto____$1 = this;
var h__25872__auto__ = self__.__hash;
if(!((h__25872__auto__ == null))){
return h__25872__auto__;
} else {
var h__25872__auto____$1 = cljs.core.hash_imap.call(null,this__26054__auto____$1);
self__.__hash = h__25872__auto____$1;

return h__25872__auto____$1;
}
});

ajax.protocols.Response.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__26055__auto__,other__26056__auto__){
var self__ = this;
var this__26055__auto____$1 = this;
if(cljs.core.truth_((function (){var and__25420__auto__ = other__26056__auto__;
if(cljs.core.truth_(and__25420__auto__)){
return ((this__26055__auto____$1.constructor === other__26056__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__26055__auto____$1,other__26056__auto__));
} else {
return and__25420__auto__;
}
})())){
return true;
} else {
return false;
}
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(this$__$1),header);
});

ajax.protocols.Response.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(this$__$1);
});

ajax.protocols.Response.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__26068__auto__,k__26069__auto__){
var self__ = this;
var this__26068__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),null,new cljs.core.Keyword(null,"headers","headers",-835030129),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"body","body",-2049205669),null], null), null),k__26069__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__26068__auto____$1),self__.__meta),k__26069__auto__);
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__26069__auto__)),null));
}
});

ajax.protocols.Response.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__26066__auto__,k__26067__auto__,G__32299){
var self__ = this;
var this__26066__auto____$1 = this;
var pred__32303 = cljs.core.keyword_identical_QMARK_;
var expr__32304 = k__26067__auto__;
if(cljs.core.truth_(pred__32303.call(null,new cljs.core.Keyword(null,"status","status",-1997798413),expr__32304))){
return (new ajax.protocols.Response(G__32299,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32303.call(null,new cljs.core.Keyword(null,"body","body",-2049205669),expr__32304))){
return (new ajax.protocols.Response(self__.status,G__32299,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32303.call(null,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),expr__32304))){
return (new ajax.protocols.Response(self__.status,self__.body,G__32299,self__.headers,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32303.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129),expr__32304))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,G__32299,self__.was_aborted,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__32303.call(null,new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),expr__32304))){
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,G__32299,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__26067__auto__,G__32299),null));
}
}
}
}
}
});

ajax.protocols.Response.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__26071__auto__){
var self__ = this;
var this__26071__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status","status",-1997798413),self__.status],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"body","body",-2049205669),self__.body],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"status-text","status-text",-1834235478),self__.status_text],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"headers","headers",-835030129),self__.headers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828),self__.was_aborted],null))], null),self__.__extmap));
});

ajax.protocols.Response.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__26058__auto__,G__32299){
var self__ = this;
var this__26058__auto____$1 = this;
return (new ajax.protocols.Response(self__.status,self__.body,self__.status_text,self__.headers,self__.was_aborted,G__32299,self__.__extmap,self__.__hash));
});

ajax.protocols.Response.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__26064__auto__,entry__26065__auto__){
var self__ = this;
var this__26064__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__26065__auto__)){
return this__26064__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__26065__auto__,(0)),cljs.core._nth.call(null,entry__26065__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__26064__auto____$1,entry__26065__auto__);
}
});

ajax.protocols.Response.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"status","status",-357266886,null),new cljs.core.Symbol(null,"body","body",-408674142,null),new cljs.core.Symbol(null,"status-text","status-text",-193703951,null),new cljs.core.Symbol(null,"headers","headers",805501398,null),new cljs.core.Symbol(null,"was-aborted","was-aborted",-479553301,null)], null);
});

ajax.protocols.Response.cljs$lang$type = true;

ajax.protocols.Response.cljs$lang$ctorPrSeq = (function (this__26093__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"ajax.protocols/Response");
});

ajax.protocols.Response.cljs$lang$ctorPrWriter = (function (this__26093__auto__,writer__26094__auto__){
return cljs.core._write.call(null,writer__26094__auto__,"ajax.protocols/Response");
});

ajax.protocols.__GT_Response = (function ajax$protocols$__GT_Response(status,body,status_text,headers,was_aborted){
return (new ajax.protocols.Response(status,body,status_text,headers,was_aborted,null,null,null));
});

ajax.protocols.map__GT_Response = (function ajax$protocols$map__GT_Response(G__32301){
return (new ajax.protocols.Response(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(G__32301),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(G__32301),new cljs.core.Keyword(null,"status-text","status-text",-1834235478).cljs$core$IFn$_invoke$arity$1(G__32301),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(G__32301),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828).cljs$core$IFn$_invoke$arity$1(G__32301),null,cljs.core.dissoc.call(null,G__32301,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"status-text","status-text",-1834235478),new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"was-aborted","was-aborted",-2120084828)),null));
});


//# sourceMappingURL=protocols.js.map?rel=1502108317703