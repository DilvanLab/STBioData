// Compiled by ClojureScript 1.9.562 {}
goog.provide('stbiodata.table');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('reagent.core');
stbiodata.table.table_test_data = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["id","scientificName","family","genus","specificEpithet"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520221),"Cyperaceae Rhynchospora ridleyi C.B. Clarke","Cyperaceae","Rhynchospora","ridleyi"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520232),"Moraceae Brosimum gaudichaudii trecul","Moraceae","Brosimum","guadichaudii"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520233),"Urticaceae Pilea hyalina Fenzl","Urticaceae","Pilea","hyalina"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520234),"Cannabaceae Celtis pubescens (Kunth) Spreng.","Cannabaceae","Celtis","pubescens"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520235),"Cannabaceae Celtis pubescens (Kunth) Spreng.","Cannabaceae","Celtis","pubescens"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520236),"Moraceae Ficus trigona L.f.","Moraceae","Ficus","trigona"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520237),"Urticaceae Pilea hyalina Fenzl","Urticaceae","Pilea","hyalina"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520237),"Urticaceae Urera baccifera (L.) Gaudich.","Urticaceae","Urera","baccifera"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520239),"Urticaceae Cecropia pachystachya Trecul","Urticaceae","Cecropia","pachystachya"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2520240),"Cannabaceae Celtis pubescens (Kunth) Spreng.","Cannabaceae","Celtis","pubescens"], null)], null);
stbiodata.table.create_table = (function stbiodata$table$create_table(input_table){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"auto",new cljs.core.Keyword(null,"fixed-header","fixed-header",1093824000),true,new cljs.core.Keyword(null,"multi-selectable","multi-selectable",328837921),false,new cljs.core.Keyword(null,"display-row-checkbox","display-row-checkbox",613576250),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-select-all","display-select-all",-1148445289),false,new cljs.core.Keyword(null,"adjust-for-checkbox","adjust-for-checkbox",-849822919),false], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,(function (){var iter__7818__auto__ = (function stbiodata$table$create_table_$_iter__15340(s__15341){
return (new cljs.core.LazySeq(null,(function (){
var s__15341__$1 = s__15341;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15341__$1);
if(temp__4657__auto__){
var s__15341__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15341__$2)){
var c__7816__auto__ = cljs.core.chunk_first.call(null,s__15341__$2);
var size__7817__auto__ = cljs.core.count.call(null,c__7816__auto__);
var b__15343 = cljs.core.chunk_buffer.call(null,size__7817__auto__);
if((function (){var i__15342 = (0);
while(true){
if((i__15342 < size__7817__auto__)){
var i = cljs.core._nth.call(null,c__7816__auto__,i__15342);
cljs.core.chunk_append.call(null,b__15343,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,cljs.core.get.call(null,cljs.core.get.call(null,input_table,(0)),i)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15364 = (i__15342 + (1));
i__15342 = G__15364;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15343),stbiodata$table$create_table_$_iter__15340.call(null,cljs.core.chunk_rest.call(null,s__15341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15343),null);
}
} else {
var i = cljs.core.first.call(null,s__15341__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,cljs.core.get.call(null,cljs.core.get.call(null,input_table,(0)),i)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),stbiodata$table$create_table_$_iter__15340.call(null,cljs.core.rest.call(null,s__15341__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7818__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.get.call(null,input_table,(0)))));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_body,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-row-checkbox","display-row-checkbox",613576250),false], null),(function (){var iter__7818__auto__ = (function stbiodata$table$create_table_$_iter__15344(s__15345){
return (new cljs.core.LazySeq(null,(function (){
var s__15345__$1 = s__15345;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15345__$1);
if(temp__4657__auto__){
var s__15345__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15345__$2)){
var c__7816__auto__ = cljs.core.chunk_first.call(null,s__15345__$2);
var size__7817__auto__ = cljs.core.count.call(null,c__7816__auto__);
var b__15347 = cljs.core.chunk_buffer.call(null,size__7817__auto__);
if((function (){var i__15346 = (0);
while(true){
if((i__15346 < size__7817__auto__)){
var i = cljs.core._nth.call(null,c__7816__auto__,i__15346);
cljs.core.chunk_append.call(null,b__15347,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,(function (){var row_data = cljs.core.get.call(null,input_table,i);
var iter__7818__auto__ = ((function (i__15346,row_data,i,c__7816__auto__,size__7817__auto__,b__15347,s__15345__$2,temp__4657__auto__){
return (function stbiodata$table$create_table_$_iter__15344_$_iter__15356(s__15357){
return (new cljs.core.LazySeq(null,((function (i__15346,row_data,i,c__7816__auto__,size__7817__auto__,b__15347,s__15345__$2,temp__4657__auto__){
return (function (){
var s__15357__$1 = s__15357;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__15357__$1);
if(temp__4657__auto____$1){
var s__15357__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15357__$2)){
var c__7816__auto____$1 = cljs.core.chunk_first.call(null,s__15357__$2);
var size__7817__auto____$1 = cljs.core.count.call(null,c__7816__auto____$1);
var b__15359 = cljs.core.chunk_buffer.call(null,size__7817__auto____$1);
if((function (){var i__15358 = (0);
while(true){
if((i__15358 < size__7817__auto____$1)){
var ii = cljs.core._nth.call(null,c__7816__auto____$1,i__15358);
cljs.core.chunk_append.call(null,b__15359,(function (){var cell_datum = cljs.core.get.call(null,row_data,ii);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cell_datum], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ii], null));
})());

var G__15365 = (i__15358 + (1));
i__15358 = G__15365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15359),stbiodata$table$create_table_$_iter__15344_$_iter__15356.call(null,cljs.core.chunk_rest.call(null,s__15357__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15359),null);
}
} else {
var ii = cljs.core.first.call(null,s__15357__$2);
return cljs.core.cons.call(null,(function (){var cell_datum = cljs.core.get.call(null,row_data,ii);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cell_datum], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ii], null));
})(),stbiodata$table$create_table_$_iter__15344_$_iter__15356.call(null,cljs.core.rest.call(null,s__15357__$2)));
}
} else {
return null;
}
break;
}
});})(i__15346,row_data,i,c__7816__auto__,size__7817__auto__,b__15347,s__15345__$2,temp__4657__auto__))
,null,null));
});})(i__15346,row_data,i,c__7816__auto__,size__7817__auto__,b__15347,s__15345__$2,temp__4657__auto__))
;
return iter__7818__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,row_data)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15366 = (i__15346 + (1));
i__15346 = G__15366;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15347),stbiodata$table$create_table_$_iter__15344.call(null,cljs.core.chunk_rest.call(null,s__15345__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15347),null);
}
} else {
var i = cljs.core.first.call(null,s__15345__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,(function (){var row_data = cljs.core.get.call(null,input_table,i);
var iter__7818__auto__ = ((function (row_data,i,s__15345__$2,temp__4657__auto__){
return (function stbiodata$table$create_table_$_iter__15344_$_iter__15360(s__15361){
return (new cljs.core.LazySeq(null,((function (row_data,i,s__15345__$2,temp__4657__auto__){
return (function (){
var s__15361__$1 = s__15361;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__15361__$1);
if(temp__4657__auto____$1){
var s__15361__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15361__$2)){
var c__7816__auto__ = cljs.core.chunk_first.call(null,s__15361__$2);
var size__7817__auto__ = cljs.core.count.call(null,c__7816__auto__);
var b__15363 = cljs.core.chunk_buffer.call(null,size__7817__auto__);
if((function (){var i__15362 = (0);
while(true){
if((i__15362 < size__7817__auto__)){
var ii = cljs.core._nth.call(null,c__7816__auto__,i__15362);
cljs.core.chunk_append.call(null,b__15363,(function (){var cell_datum = cljs.core.get.call(null,row_data,ii);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cell_datum], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ii], null));
})());

var G__15367 = (i__15362 + (1));
i__15362 = G__15367;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15363),stbiodata$table$create_table_$_iter__15344_$_iter__15360.call(null,cljs.core.chunk_rest.call(null,s__15361__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15363),null);
}
} else {
var ii = cljs.core.first.call(null,s__15361__$2);
return cljs.core.cons.call(null,(function (){var cell_datum = cljs.core.get.call(null,row_data,ii);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cell_datum], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),ii], null));
})(),stbiodata$table$create_table_$_iter__15344_$_iter__15360.call(null,cljs.core.rest.call(null,s__15361__$2)));
}
} else {
return null;
}
break;
}
});})(row_data,i,s__15345__$2,temp__4657__auto__))
,null,null));
});})(row_data,i,s__15345__$2,temp__4657__auto__))
;
return iter__7818__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,row_data)));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),stbiodata$table$create_table_$_iter__15344.call(null,cljs.core.rest.call(null,s__15345__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7818__auto__.call(null,cljs.core.range.call(null,(1),cljs.core.count.call(null,input_table)));
})()], null)], null)], null);
});
stbiodata.table.create_test_table = (function stbiodata$table$create_test_table(){
return stbiodata.table.create_table.call(null,stbiodata.table.table_test_data);
});
stbiodata.table.create_table_geobio = (function stbiodata$table$create_table_geobio(input_table){
var data_table = cljs.core.object_array.call(null,input_table);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"bodyStyle","bodyStyle",-2118862489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"visible"], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table-layout","table-layout",-1260034150),"auto"], null),new cljs.core.Keyword(null,"fixed-header","fixed-header",1093824000),false,new cljs.core.Keyword(null,"multi-selectable","multi-selectable",328837921),false,new cljs.core.Keyword(null,"display-row-checkbox","display-row-checkbox",613576250),false], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-select-all","display-select-all",-1148445289),false,new cljs.core.Keyword(null,"adjust-for-checkbox","adjust-for-checkbox",-849822919),false], null),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"#"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Scientific Name"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Kingdom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Phylum"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Class"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Order"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Family"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Genus"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Institution Code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Status IUCN"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"POINT (lat,long)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Country"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Date Collected"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Name Collected"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Date Cataloguing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Name Cataloguing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Same as GBIF"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_header_column,"Same as IUCN"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_body,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display-row-checkbox","display-row-checkbox",613576250),false,new cljs.core.Keyword(null,"preScanRows","preScanRows",1967095885),false], null),(function (){var iter__7818__auto__ = ((function (data_table){
return (function stbiodata$table$create_table_geobio_$_iter__15372(s__15373){
return (new cljs.core.LazySeq(null,((function (data_table){
return (function (){
var s__15373__$1 = s__15373;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15373__$1);
if(temp__4657__auto__){
var s__15373__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15373__$2)){
var c__7816__auto__ = cljs.core.chunk_first.call(null,s__15373__$2);
var size__7817__auto__ = cljs.core.count.call(null,c__7816__auto__);
var b__15375 = cljs.core.chunk_buffer.call(null,size__7817__auto__);
if((function (){var i__15374 = (0);
while(true){
if((i__15374 < size__7817__auto__)){
var i = cljs.core._nth.call(null,c__7816__auto__,i__15374);
cljs.core.chunk_append.call(null,b__15375,cljs.core.with_meta(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,((1) + i)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"scientificname"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"kingdom"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"phylum"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"class"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"order"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"family"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"genus"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"institutionCode"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"occurrenceStatusIUCN"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"wktA"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"country"),"value"),new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"country"),"value")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"dateCollected"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"nameCollected"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"dateCataloguing"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"nameCataloguing"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,(function (){var same_gbif = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"sameAsGBIF"),"value");
if((same_gbif == null)){
return " ";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),same_gbif,new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),same_gbif], null);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,(function (){var same_iucn = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"sameAsIUCN"),"value");
if((same_iucn == null)){
return " ";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),same_iucn,new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),same_iucn], null);
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15376 = (i__15374 + (1));
i__15374 = G__15376;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15375),stbiodata$table$create_table_geobio_$_iter__15372.call(null,cljs.core.chunk_rest.call(null,s__15373__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15375),null);
}
} else {
var i = cljs.core.first.call(null,s__15373__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,((1) + i)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"scientificname"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"kingdom"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"phylum"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"class"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"order"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"family"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"genus"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"institutionCode"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"occurrenceStatusIUCN"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"wktA"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"country"),"value"),new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"country"),"value")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"dateCollected"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"nameCollected"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"dateCataloguing"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"nameCataloguing"),"value")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,(function (){var same_gbif = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"sameAsGBIF"),"value");
if((same_gbif == null)){
return " ";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),same_gbif,new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),same_gbif], null);
}
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.table_row_column,(function (){var same_iucn = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,data_table,i),"sameAsIUCN"),"value");
if((same_iucn == null)){
return " ";
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),same_iucn,new cljs.core.Keyword(null,"target","target",253001721),"blank"], null),same_iucn], null);
}
})()], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),stbiodata$table$create_table_geobio_$_iter__15372.call(null,cljs.core.rest.call(null,s__15373__$2)));
}
} else {
return null;
}
break;
}
});})(data_table))
,null,null));
});})(data_table))
;
return iter__7818__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,data_table)));
})()], null)], null)], null);
});

//# sourceMappingURL=table.js.map