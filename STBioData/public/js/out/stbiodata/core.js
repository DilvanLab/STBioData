// Compiled by ClojureScript 1.9.562 {}
goog.provide('stbiodata.core');
goog.require('cljs.core');
goog.require('cljsjs.material_ui');
goog.require('cljs_react_material_ui.core');
goog.require('cljs_react_material_ui.reagent');
goog.require('cljs_react_material_ui.icons');
goog.require('reagent.core');
goog.require('cljs_time.core');
goog.require('stbiodata.table');
goog.require('testdouble.cljs.csv');
goog.require('ajax.core');
stbiodata.core.responseAtom = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
stbiodata.core.mymap = reagent.core.atom.call(null,cljs.core.List.EMPTY);
stbiodata.core.mymarkers = reagent.core.atom.call(null,[]);
stbiodata.core.markers_cluster = reagent.core.atom.call(null,null);
stbiodata.core.markers_spyder = reagent.core.atom.call(null,null);
stbiodata.core.user_position = reagent.core.atom.call(null,cljs.core.List.EMPTY);
stbiodata.core.csv_file = reagent.core.atom.call(null,null);
stbiodata.core.rdf_describe = reagent.core.atom.call(null,null);
stbiodata.core.species_list = reagent.core.atom.call(null,cljs.core.List.EMPTY);
stbiodata.core.start_datePicker = reagent.core.atom.call(null,"");
stbiodata.core.end_datePicker = reagent.core.atom.call(null,"");
stbiodata.core.stat = reagent.core.atom.call(null,cljs.core.List.EMPTY);
stbiodata.core.progress = reagent.core.atom.call(null,"hidden");
stbiodata.core.progress_data_sets = reagent.core.atom.call(null,"inline-block");
stbiodata.core.progress_country = reagent.core.atom.call(null,"inline-block");
stbiodata.core.progress_years = reagent.core.atom.call(null,"inline-block");
stbiodata.core.caseTitle = reagent.core.atom.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Map")].join(''));
stbiodata.core.caseQuery = reagent.core.atom.call(null,cljs.core.List.EMPTY);
stbiodata.core.data_table = reagent.core.atom.call(null,cljs.core.List.EMPTY);
stbiodata.core.prov = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"scientificName","scientificName",-1456549436),"",new cljs.core.Keyword(null,"code","code",1586293142),"",new cljs.core.Keyword(null,"institutionCode","institutionCode",-712238217),"",new cljs.core.Keyword(null,"dateCollected","dateCollected",1530680092),"",new cljs.core.Keyword(null,"nameColleted","nameColleted",1096683899),"",new cljs.core.Keyword(null,"dateCataloguing","dateCataloguing",-1502843060),"",new cljs.core.Keyword(null,"nameCataloguing","nameCataloguing",1038641574),""], null));
stbiodata.core.endpoint = "http://java.icmc.usp.br:2190/repositories/bio";
stbiodata.core.drawer_status = reagent.core.atom.call(null,false);
stbiodata.core.drawer_status2 = reagent.core.atom.call(null,false);
stbiodata.core.statitics_bol = reagent.core.atom.call(null,false);
stbiodata.core.list_item_selected = reagent.core.atom.call(null,null);
stbiodata.core.create_marker = (function stbiodata$core$create_marker(varmap,lat,long$,title){
var marker = cljs.core.clj__GT_js.call(null,(new google.maps.Marker(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"map","map",1371690461),varmap,new cljs.core.Keyword(null,"position","position",-2011731912),(new google.maps.LatLng(lat,long$)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"icon","icon",1679606541),"imgs/markers/marker.svg"], null)))));
cljs.core.deref.call(null,stbiodata.core.mymarkers).push(marker);

cljs.core.reset_BANG_.call(null,stbiodata.core.mymarkers,cljs.core.deref.call(null,stbiodata.core.mymarkers));

cljs.core.deref.call(null,stbiodata.core.markers_spyder).addMarker(marker);

return marker;
});
stbiodata.core.remove_markers = (function stbiodata$core$remove_markers(){
var n__7953__auto___15389 = cljs.core.count.call(null,cljs.core.deref.call(null,stbiodata.core.mymarkers));
var i_15390 = (0);
while(true){
if((i_15390 < n__7953__auto___15389)){
cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.mymarkers),i_15390).setMap(cljs.core.clj__GT_js.call(null,null));

var G__15391 = (i_15390 + (1));
i_15390 = G__15391;
continue;
} else {
}
break;
}

if(!((cljs.core.deref.call(null,stbiodata.core.markers_cluster) == null))){
cljs.core.deref.call(null,stbiodata.core.markers_cluster).clearMarkers();
} else {
}

return cljs.core.reset_BANG_.call(null,stbiodata.core.mymarkers,[]);
});
stbiodata.core.map_render = (function stbiodata$core$map_render(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#map","div#map",173142408),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null)], null)], null);
});
stbiodata.core.home_did_mount = (function stbiodata$core$home_did_mount(this$){
stbiodata.core.map_canvas = reagent.core.dom_node.call(null,this$);

stbiodata.core.map_options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["center",(new google.maps.LatLng(-15.79441,-47.877821)),"zoom",(4)], null));

cljs.core.reset_BANG_.call(null,stbiodata.core.mymap,(new google.maps.Map(stbiodata.core.map_canvas,stbiodata.core.map_options)));

return navigator.geolocation.getCurrentPosition((function (position){
cljs.core.reset_BANG_.call(null,stbiodata.core.user_position,(new google.maps.Circle(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 8, ["strokeColor",cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"green700","green700",382937553)),"strokeOpacity",0.8,"strokeWeight",(2),"fillColor",cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"green200","green200",-952885553)),"fillOpacity",0.35,"radius",(25000),"map",cljs.core.deref.call(null,stbiodata.core.mymap),"center",(new google.maps.LatLng(((position["coords"])["latitude"]),((position["coords"])["longitude"])))], null)))));

cljs.core.deref.call(null,stbiodata.core.mymap).setCenter((new google.maps.LatLng(((position["coords"])["latitude"]),((position["coords"])["longitude"]))));

return cljs.core.deref.call(null,stbiodata.core.mymap).setZoom((7));
}));
});
/**
 * Render the map
 */
stbiodata.core.create_map = (function stbiodata$core$create_map(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),stbiodata.core.map_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),stbiodata.core.home_did_mount], null));
});
/**
 * Convert the ajax response in clj
 */
stbiodata.core.json__GT_clj = (function stbiodata$core$json__GT_clj(json_string){
return cljs.core.js__GT_clj.call(null,JSON.parse(json_string));
});
stbiodata.core.alert = (function stbiodata$core$alert(str){
return alert(str);
});
stbiodata.core.provenance = (function stbiodata$core$provenance(scientificName,code,institutionCode,dateCollected,nameColleted,dateCataloguing,nameCataloguing){
return cljs.core.reset_BANG_.call(null,stbiodata.core.prov,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"scientificName","scientificName",-1456549436),scientificName,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"institutionCode","institutionCode",-712238217),institutionCode,new cljs.core.Keyword(null,"dateCollected","dateCollected",1530680092),dateCollected,new cljs.core.Keyword(null,"nameColleted","nameColleted",1096683899),nameColleted,new cljs.core.Keyword(null,"dateCataloguing","dateCataloguing",-1502843060),dateCataloguing,new cljs.core.Keyword(null,"nameCataloguing","nameCataloguing",1038641574),nameCataloguing], null));
});
stbiodata.core.response_to_csv = (function stbiodata$core$response_to_csv(response){
cljs.core.reset_BANG_.call(null,stbiodata.core.csv_file,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, ["code","scientificname","kingdom","phylum","class","order","family","genus","institutionCode","Status IUCN","POINT (lat long)","country","dateCollected","nameCollected","dateCataloguing","nameCataloguing","Same as GBIF","Same as IUCN"], null)], null));

var n__7953__auto__ = cljs.core.count.call(null,response);
var i = (0);
while(true){
if((i < n__7953__auto__)){
cljs.core.reset_BANG_.call(null,stbiodata.core.csv_file,cljs.core.conj.call(null,cljs.core.deref.call(null,stbiodata.core.csv_file),new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"code"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"scientificname"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"kingdom"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"phylum"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"class"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"order"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"family"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"genus"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"institutionCode"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"occurrenceStatusIUCN"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"wktA"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"country"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"dateCollected"),"value"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"nameCollected"),"value")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"dateCataloguing"),"value"),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"nameCataloguing"),"value")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\"")].join(''),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"sameAsGBIF"),"value"),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,response,i),"sameAsIUCN"),"value")], null)));

var G__15392 = (i + (1));
i = G__15392;
continue;
} else {
return null;
}
break;
}
});
/**
 * 1-Pie 2-Colum 3-Donnut 4-Geo 5-line 6-Scatter
 */
stbiodata.core.draw_charts = (function stbiodata$core$draw_charts(id,title,vec,type){
var container = document.getElementById(id);
var chart = (function (){var G__15397 = type;
switch (G__15397) {
case (1):
return (new google.visualization.PieChart(container));

break;
case (2):
return (new google.visualization.ColumnChart(container));

break;
case (4):
return (new google.visualization.GeoChart(container));

break;
case (5):
return (new google.visualization.LineChart(container));

break;
case (6):
return (new google.visualization.ScatterChart(container));

break;
default:
return (new google.visualization.PieChart(container));

}
})();
var options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"region","region",270415120),"005",new cljs.core.Keyword(null,"pieHole","pieHole",-2123545970),((cljs.core._EQ_.call(null,type,(3)))?0.4:(0)),new cljs.core.Keyword(null,"colorAxis","colorAxis",-2104489392),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"amber300","amber300",1835857693)),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"lime400","lime400",-865704704)),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"light-green400","light-green400",1143361454)),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"green300","green300",1757323556))], null)], null),new cljs.core.Keyword(null,"chartArea","chartArea",-548027544),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"left","left",-399115937),(10),new cljs.core.Keyword(null,"top","top",-1856271961),(10),new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),(160)], null),new cljs.core.Keyword(null,"titleTextStyle","titleTextStyle",-346428562),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fontSize","fontSize",919623033),(14)], null)], null));
var data_table = (new google.visualization.DataTable());
var G__15398_15402 = type;
switch (G__15398_15402) {
case (4):
var G__15399_15404 = data_table;
G__15399_15404.addColumn("string","Country");

G__15399_15404.addColumn("number","Ocurrences");

G__15399_15404.addRows(cljs.core.clj__GT_js.call(null,vec));


break;
default:
var G__15400_15405 = data_table;
G__15400_15405.addColumn("string","Topping");

G__15400_15405.addColumn("number","Slices");

G__15400_15405.addRows(cljs.core.clj__GT_js.call(null,vec));


}

return chart.draw(data_table,options);
});
/**
 * Print sparql query
 */
stbiodata.core.print_sparql = (function stbiodata$core$print_sparql(query){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__7818__auto__ = (function stbiodata$core$print_sparql_$_iter__15410(s__15411){
return (new cljs.core.LazySeq(null,(function (){
var s__15411__$1 = s__15411;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__15411__$1);
if(temp__4657__auto__){
var s__15411__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15411__$2)){
var c__7816__auto__ = cljs.core.chunk_first.call(null,s__15411__$2);
var size__7817__auto__ = cljs.core.count.call(null,c__7816__auto__);
var b__15413 = cljs.core.chunk_buffer.call(null,size__7817__auto__);
if((function (){var i__15412 = (0);
while(true){
if((i__15412 < size__7817__auto__)){
var i = cljs.core._nth.call(null,c__7816__auto__,i__15412);
cljs.core.chunk_append.call(null,b__15413,((cljs.core._EQ_.call(null,cljs.core.get.call(null,query,i),"\n"))?reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)):cljs.core.get.call(null,query,i)));

var G__15414 = (i__15412 + (1));
i__15412 = G__15414;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15413),stbiodata$core$print_sparql_$_iter__15410.call(null,cljs.core.chunk_rest.call(null,s__15411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15413),null);
}
} else {
var i = cljs.core.first.call(null,s__15411__$2);
return cljs.core.cons.call(null,((cljs.core._EQ_.call(null,cljs.core.get.call(null,query,i),"\n"))?reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)):cljs.core.get.call(null,query,i)),stbiodata$core$print_sparql_$_iter__15410.call(null,cljs.core.rest.call(null,s__15411__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7818__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,query)));
})()], null);
});
stbiodata.core.save_file = (function stbiodata$core$save_file(filename,t,s){
if(cljs.core.truth_(Blob)){
var b = (new Blob(s,({"type": t})));
if(cljs.core.truth_(window.navigator.msSaveBlob)){
return window.navigator.msSaveBlob(b,filename);
} else {
var link = document.createElement("a");
(link["download"] = filename);

if(cljs.core.truth_(window.webkitURL)){
(link["href"] = window.webkitURL.createObjectURL(b));
} else {
(link["href"] = window.URL.createObjectURL(b));

(link["onclick"] = ((function (link,b){
return (function stbiodata$core$save_file_$_destroy_clicked(e){
return document.body.removeChild(e.target);
});})(link,b))
);

(link["style"]["display"] = "none");

document.body.appendChild(link);
}

return link.click();
}
} else {
return console.log("Browser does not support Blob");
}
});
stbiodata.core.handler = (function stbiodata$core$handler(response){
stbiodata.core.response_json = stbiodata.core.json__GT_clj.call(null,response);

cljs.core.reset_BANG_.call(null,stbiodata.core.responseAtom,cljs.core.get.call(null,cljs.core.get.call(null,stbiodata.core.response_json,"results"),"bindings"));

stbiodata.core.msize = reagent.core.atom.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom)));

if((cljs.core.deref.call(null,stbiodata.core.msize) > (0))){
stbiodata.core.response_to_csv.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom));
} else {
cljs.core.reset_BANG_.call(null,stbiodata.core.csv_file,null);

cljs.core.reset_BANG_.call(null,stbiodata.core.rdf_describe,null);
}

cljs.core.reset_BANG_.call(null,stbiodata.core.data_table,stbiodata.table.create_table_geobio.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom)));

cljs.core.reset_BANG_.call(null,stbiodata.core.markers_spyder,(new OverlappingMarkerSpiderfier(cljs.core.deref.call(null,stbiodata.core.mymap),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["keepSpiderfied",true,"event","mouseover"], null)))));

stbiodata.core.iw = (new google.maps.InfoWindow());

cljs.core.deref.call(null,stbiodata.core.markers_spyder).addListener("format",(function (marker,status){
if(cljs.core._EQ_.call(null,(0),cljs.core.compare.call(null,status,"SPIDERFIED"))){
return marker.setIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"imgs/markers/marker-highlight.svg",new cljs.core.Keyword(null,"scaledSize","scaledSize",799656530),(new google.maps.Size((23),(32)))], null)));
} else {
if(cljs.core._EQ_.call(null,(0),cljs.core.compare.call(null,status,"SPIDERFIABLE"))){
return marker.setIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"imgs/markers/marker-plus.svg",new cljs.core.Keyword(null,"scaledSize","scaledSize",799656530),(new google.maps.Size((23),(32)))], null)));
} else {
if(cljs.core._EQ_.call(null,(0),cljs.core.compare.call(null,status,"UNSPIDERFIABLE"))){
return marker.setIcon(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"imgs/markers/marker.svg",new cljs.core.Keyword(null,"scaledSize","scaledSize",799656530),(new google.maps.Size((23),(32)))], null)));
} else {
return null;
}
}
}
}));

cljs.core.deref.call(null,stbiodata.core.markers_spyder).addListener("click",(function (marker,e){
stbiodata.core.iw.setContent((marker["title"]));

return stbiodata.core.iw.open(cljs.core.deref.call(null,stbiodata.core.mymap),marker);
}));

cljs.core.deref.call(null,stbiodata.core.markers_spyder).addListener("spiderfy",(function (markers){
return stbiodata.core.iw.close();
}));

stbiodata.core.remove_markers.call(null);

var n__7953__auto___15415 = cljs.core.deref.call(null,stbiodata.core.msize);
var i_15416 = (0);
while(true){
if((i_15416 < n__7953__auto___15415)){
var latlng_15417 = clojure.string.split.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom),i_15416),"wktA"),"value"),"POINT(",""),")","")," ");
var scientificName_15418 = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom),i_15416),"scientificname"),"value");
var code_15419 = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom),i_15416),"code"),"value");
var institutionCode_15420 = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom),i_15416),"institutionCode"),"value");
var dateCollected_15421 = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom),i_15416),"dateCollected"),"value");
var nameColleted_15422 = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom),i_15416),"nameColleted"),"value");
var dateCataloguing_15423 = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom),i_15416),"dateCataloguing"),"value");
var nameCataloguing_15424 = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.responseAtom),i_15416),"nameCataloguing"),"value");
var mark_15425 = stbiodata.core.create_marker.call(null,cljs.core.deref.call(null,stbiodata.core.mymap),cljs.core.get.call(null,latlng_15417,(0)),cljs.core.get.call(null,latlng_15417,(1)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((i_15416 + (1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scientificName_15418)].join(''));
mark_15425.addListener("click",((function (i_15416,latlng_15417,scientificName_15418,code_15419,institutionCode_15420,dateCollected_15421,nameColleted_15422,dateCataloguing_15423,nameCataloguing_15424,mark_15425,n__7953__auto___15415){
return (function (){
return stbiodata.core.provenance.call(null,scientificName_15418,code_15419,institutionCode_15420,dateCollected_15421,nameColleted_15422,dateCataloguing_15423,nameCataloguing_15424);
});})(i_15416,latlng_15417,scientificName_15418,code_15419,institutionCode_15420,dateCollected_15421,nameColleted_15422,dateCataloguing_15423,nameCataloguing_15424,mark_15425,n__7953__auto___15415))
);

var G__15426 = (i_15416 + (1));
i_15416 = G__15426;
continue;
} else {
}
break;
}

cljs.core.reset_BANG_.call(null,stbiodata.core.markers_cluster,(new MarkerClusterer(cljs.core.deref.call(null,stbiodata.core.mymap),cljs.core.deref.call(null,stbiodata.core.mymarkers),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["imagePath","https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"], null)))));

cljs.core.deref.call(null,stbiodata.core.markers_cluster).setMaxZoom((12));

return cljs.core.reset_BANG_.call(null,stbiodata.core.progress,"hidden");
});
stbiodata.core.error_handler = (function stbiodata$core$error_handler(p__15427){
var map__15430 = p__15427;
var map__15430__$1 = ((((!((map__15430 == null)))?((((map__15430.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15430.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15430):map__15430);
var status = cljs.core.get.call(null,map__15430__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__15430__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str.cljs$core$IFn$_invoke$arity$1("something bad happened: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)].join(''));
});
stbiodata.core.handler_species = (function stbiodata$core$handler_species(response){
var result = cljs.core.get.call(null,cljs.core.get.call(null,stbiodata.core.json__GT_clj.call(null,response),"results"),"bindings");
var n__7953__auto__ = cljs.core.count.call(null,result);
var i = (0);
while(true){
if((i < n__7953__auto__)){
cljs.core.reset_BANG_.call(null,stbiodata.core.species_list,cljs.core.conj.call(null,cljs.core.deref.call(null,stbiodata.core.species_list),cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,result,i),"scientificname"),"value")));

var G__15432 = (i + (1));
i = G__15432;
continue;
} else {
return null;
}
break;
}
});
stbiodata.core.handler_statistics = (function stbiodata$core$handler_statistics(response){
var result = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,stbiodata.core.json__GT_clj.call(null,response),"results"),"bindings"),(0));
return cljs.core.reset_BANG_.call(null,stbiodata.core.stat,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ocurrences","ocurrences",-1787535633),cljs.core.get.call(null,cljs.core.get.call(null,result,"Ocurrences"),"value"),new cljs.core.Keyword(null,"species","species",-1393763638),cljs.core.get.call(null,cljs.core.get.call(null,result,"Species"),"value"),new cljs.core.Keyword(null,"animalia","animalia",-192929133),cljs.core.get.call(null,cljs.core.get.call(null,result,"Animalia"),"value"),new cljs.core.Keyword(null,"plantae","plantae",1786343578),cljs.core.get.call(null,cljs.core.get.call(null,result,"Plantae"),"value"),new cljs.core.Keyword(null,"geo-referenced","geo-referenced",-549120977),cljs.core.get.call(null,cljs.core.get.call(null,result,"Georeference"),"value")], null));
});
stbiodata.core.handler_statistics_data_sets = (function stbiodata$core$handler_statistics_data_sets(response){
var result = cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,stbiodata.core.json__GT_clj.call(null,response),"results"),"bindings"),(0));
cljs.core.reset_BANG_.call(null,stbiodata.core.progress_data_sets,"none");

return stbiodata.core.draw_charts.call(null,"chart-data-sets","",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Embrapa",(cljs.core.get.call(null,cljs.core.get.call(null,result,"Embrapa"),"value") | (0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["IUCN",(cljs.core.get.call(null,cljs.core.get.call(null,result,"IUCN"),"value") | (0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["INPA",(cljs.core.get.call(null,cljs.core.get.call(null,result,"INPA"),"value") | (0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["SpeciesLink",(cljs.core.get.call(null,cljs.core.get.call(null,result,"SpeciesLink"),"value") | (0))], null)], null),(3));
});
stbiodata.core.handler_statistics_years = (function stbiodata$core$handler_statistics_years(response){
var result = cljs.core.get.call(null,cljs.core.get.call(null,stbiodata.core.json__GT_clj.call(null,response),"results"),"bindings");
var list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.core.reset_BANG_.call(null,stbiodata.core.progress_years,"none");

var n__7953__auto___15433 = cljs.core.count.call(null,result);
var i_15434 = (0);
while(true){
if((i_15434 < n__7953__auto___15433)){
cljs.core.reset_BANG_.call(null,list,cljs.core.conj.call(null,cljs.core.deref.call(null,list),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,result,i_15434),"year"),"value"),(cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,result,i_15434),"yearCT"),"value") | (0))], null)));

var G__15435 = (i_15434 + (1));
i_15434 = G__15435;
continue;
} else {
}
break;
}

return stbiodata.core.draw_charts.call(null,"chart-years","",cljs.core.deref.call(null,list),(3));
});
stbiodata.core.handler_statistics_country = (function stbiodata$core$handler_statistics_country(response){
var result = cljs.core.get.call(null,cljs.core.get.call(null,stbiodata.core.json__GT_clj.call(null,response),"results"),"bindings");
var list = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
cljs.core.reset_BANG_.call(null,stbiodata.core.progress_country,"none");

var n__7953__auto___15436 = cljs.core.count.call(null,result);
var i_15437 = (0);
while(true){
if((i_15437 < n__7953__auto___15436)){
cljs.core.reset_BANG_.call(null,list,cljs.core.conj.call(null,cljs.core.deref.call(null,list),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.replace.call(null,cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,result,i_15437),"Country"),"value"),"http://dbpedia.org/resource/",""),(cljs.core.get.call(null,cljs.core.get.call(null,cljs.core.get.call(null,result,i_15437),"CountryST"),"value") | (0))], null)));

var G__15438 = (i_15437 + (1));
i_15437 = G__15438;
continue;
} else {
}
break;
}

return stbiodata.core.draw_charts.call(null,"chart-country","",cljs.core.deref.call(null,list),(4));
});
stbiodata.core.handler_rdf = (function stbiodata$core$handler_rdf(response){
return stbiodata.core.save_file.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("rdf("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.rdf_describe),new cljs.core.Keyword(null,"name","name",1843675177))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(").n3")].join(''),"text/n3",[response]);
});
stbiodata.core.consult = (function stbiodata$core$consult(serv,estudyCase){
cljs.core.reset_BANG_.call(null,stbiodata.core.caseTitle,((!(clojure.string.blank_QMARK_.call(null,cljs.core.get.call(null,estudyCase,new cljs.core.Keyword(null,"title","title",636505583)))))?cljs.core.get.call(null,estudyCase,new cljs.core.Keyword(null,"title","title",636505583)):"Map"));

cljs.core.reset_BANG_.call(null,stbiodata.core.caseQuery,cljs.core.get.call(null,estudyCase,new cljs.core.Keyword(null,"query","query",-1288509510)));

return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://java.icmc.usp.br:2190/repositories/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(serv)].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),clojure.string.replace.call(null,cljs.core.get.call(null,estudyCase,new cljs.core.Keyword(null,"query","query",-1288509510)),/#/,"%23")], null),new cljs.core.Keyword(null,"handler","handler",-195596612),stbiodata.core.handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),stbiodata.core.handler], null));
});
stbiodata.core.consult_especies_list = (function stbiodata$core$consult_especies_list(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://java.icmc.usp.br:2190/repositories/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Animalia")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),"PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\n                              SELECT DISTINCT ?scientificname\n                              where {\n                              \t?code dwc:scientificName ?scientificname\n                              } ORDER BY ?scientificname"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),stbiodata.core.handler_species,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (response){
return console.log(response);
})], null));
});
stbiodata.core.consult_statistics = (function stbiodata$core$consult_statistics(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://java.icmc.usp.br:2190/repositories/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Animalia")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),clojure.string.replace.call(null,"PREFIX iucn: <http://java.icmc.usp.br/iucn/>\n                PREFIX bioprov: <http://java.icmc.usp.br/bioprov/>\n                PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n                PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n                PREFIX geo: <http://www.opengis.net/ont/geosparql#>\n                PREFIX geof: <http://www.opengis.net/def/function/geosparql/>\n                PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\n                PREFIX time: <http://www.w3.org/2006/time#>\n                PREFIX prov: <http://www.w3.org/ns/prov#>\n                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n                PREFIX geobio: <http://specieslink.br/extinsion>\n                PREFIX terms1: <http://rs.tdwg.org/dwc/terms/>\n                SELECT (COUNT(?code) as ?Ocurrences) (COUNT(DISTINCT ?species) as ?Species)\n                (sum(if(lcase(str(?kingdom)) = 'animalia', 1, 0)) as ?Animalia)\n                (sum(if(lcase(str(?kingdom)) = 'plantae', 1, 0)) as ?Plantae)\n                (COUNT(?wktA) as ?Georeference){\n                  ?code dwc:scientificName ?species.\n                  ?code geo:hasGeometry/geo:asWKT ?wktA.\n                  ?code dwc:kingdom ?kingdom.\n                }",/#/,"%23")], null),new cljs.core.Keyword(null,"handler","handler",-195596612),stbiodata.core.handler_statistics,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (response){
return console.log(response);
})], null));
});
stbiodata.core.consult_statistics_data_sets = (function stbiodata$core$consult_statistics_data_sets(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://java.icmc.usp.br:2190/repositories/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Animalia")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),clojure.string.replace.call(null,"PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n                                            PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\n                                            SELECT (sum(if(lcase(str(?biospecie)) = 'http://java.icmc.usp.br/specieslink/biospecie', 1, 0)) as ?SpeciesLink)\n                                            (sum(if(lcase(str(?biospecie)) = 'http://java.icmc.usp.br/iucn/biospecie', 1, 0)) as ?IUCN)\n                                            (sum(if(lcase(str(?biospecie)) = 'http://java.icmc.usp.br/inpa/biospecie', 1, 0)) as ?INPA)\n                                            (sum(if(lcase(str(?biospecie)) = 'http://java.icmc.usp.br/embrapa/biospecie', 1, 0)) as ?Embrapa)\n                                            {  ?code rdf:type ?biospecie\n                                            } ",/#/,"%23")], null),new cljs.core.Keyword(null,"handler","handler",-195596612),stbiodata.core.handler_statistics_data_sets,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (response){
return console.log(response);
})], null));
});
stbiodata.core.consult_statistics_years = (function stbiodata$core$consult_statistics_years(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://java.icmc.usp.br:2190/repositories/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Animalia")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),clojure.string.replace.call(null,"PREFIX iucn: <http://java.icmc.usp.br/iucn/>\n                                            PREFIX bioprov: <http://java.icmc.usp.br/bioprov/>\n                                            PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n                                            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n                                            PREFIX geo: <http://www.opengis.net/ont/geosparql#>\n                                            PREFIX geof: <http://www.opengis.net/def/function/geosparql/>\n                                            PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\n                                            PREFIX time: <http://www.w3.org/2006/time#>\n                                            PREFIX prov: <http://www.w3.org/ns/prov#>\n                                            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n                                            PREFIX geobio: <http://specieslink.br/extinsion>\n                                            Select ?year (COUNT(?year) as ?yearCT)\n                                            where {\n                                                ?code prov:hadMember/bioprov:wasCollectedBy/bioprov:yearcollected ?yearcollected.\n                                                bind( substr( str(?yearcollected), 1, 4) as ?year )\n                                                FILTER(!isBlank(?year))\n                                            } GROUP BY ?year\n                                            ORDER BY ?year\n                                            ",/#/,"%23")], null),new cljs.core.Keyword(null,"handler","handler",-195596612),stbiodata.core.handler_statistics_years,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (response){
return console.log(response);
})], null));
});
stbiodata.core.consult_statistics_country = (function stbiodata$core$consult_statistics_country(){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://java.icmc.usp.br:2190/repositories/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Animalia")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),"PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\n                    SELECT ?Country (COUNT(?Country) as ?CountryST) {\n                      ?code dwc:country ?Country.\n                    } GROUP BY ?Country\n                      Order by ?Country"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),stbiodata.core.handler_statistics_country,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (response){
return console.log(response);
})], null));
});
stbiodata.core.download_csv = (function stbiodata$core$download_csv(){
if(!((cljs.core.deref.call(null,stbiodata.core.csv_file) == null))){
return stbiodata.core.save_file.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("csv("),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.rdf_describe),new cljs.core.Keyword(null,"name","name",1843675177))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(").csv")].join(''),"text/csv",[testdouble.cljs.csv.write_csv.call(null,cljs.core.deref.call(null,stbiodata.core.csv_file))]);
} else {
return stbiodata.core.alert.call(null,"No results");
}
});
stbiodata.core.download_rdf = (function stbiodata$core$download_rdf(){
if(!((cljs.core.deref.call(null,stbiodata.core.rdf_describe) == null))){
return ajax.core.GET.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("http://java.icmc.usp.br:2190/repositories/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Animalia")].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("PREFIX iucn: <http://java.icmc.usp.br/iucn/>\n                                   PREFIX bioprov: <http://java.icmc.usp.br/bioprov/>\n                                   PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n                                   PREFIX xsd: <http://www.w3.org/2001/XMLSchema%23>\n                                   PREFIX geo: <http://www.opengis.net/ont/geosparql%23>\n                                   PREFIX geof: <http://www.opengis.net/def/function/geosparql/>\n                                   PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\n                                   PREFIX time: <http://www.w3.org/2006/time%23>\n                                   PREFIX prov: <http://www.w3.org/ns/prov%23>\n                                   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns%23>\n                                   PREFIX geobio: <http://specieslink.br/extinsion>\n                                    Describe ?code\n                                     WHERE { "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ?code dwc:scientificName '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.rdf_describe),new cljs.core.Keyword(null,"name","name",1843675177))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("' . ")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ?code dwc:scientificName ?scientificname.\n                                        ?code dwc:institutionCode ?institutionCode.\n                                        ?code geo:hasGeometry/geo:asWKT ?wktA.\n                                        ?code prov:hadMember/bioprov:wasCollectedBy/prov:startedAtTime ?dateCollected.\n                                        ?code prov:hadMember/bioprov:wasCatalguingBy/prov:startedAtTime ?dateCataloguing.\n                                        ?code prov:hadMember/bioprov:wasCollectedBy/prov:wasAssociatedWith/foaf:givenName ?nameCollected.\n                                        ?code prov:hadMember/bioprov:wasCatalguingBy/prov:wasAssociatedWith/foaf:givenName ?nameCataloguing.\n                                        ?code prov:hadMember/bioprov:wasCollectedBy/bioprov:yearcollected ?yearcollected.\n                                        ?code dwc:kingdom ?kingdom.\n                                        ?code dwc:phylum ?phylum.\n                                        ?code dwc:class ?class.\n                                        ?code dwc:order ?order.\n                                        ?code dwc:family ?family.\n                                        ?code dwc:genus ?genus.\n                                        OPTIONAL { ?code dwc:country ?country. }\n                                        OPTIONAL { ?code bioprov:sameSynonymIUCN ?sameAsIUCN.  }\n                                        OPTIONAL { ?code bioprov:sameSynonymGBIF ?sameAsGBIF. }\n                                        OPTIONAL { ?code bioprov:hasConservationStatus/dwc:occurrenceStatus ?occurrenceStatusIUCN1.}\n                                        OPTIONAL { ?code dwc:occurrenceStatus ?occurrenceStatusIUCN2. }\n                                        BIND(COALESCE(?occurrenceStatusIUCN1, ?occurrenceStatusIUCN2) as ?occurrenceStatusIUCN)\n                                      "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(clojure.string.blank_QMARK_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.rdf_describe),new cljs.core.Keyword(null,"start-date","start-date",295168731)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" FILTER (?yearcollected >= '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.rdf_describe),new cljs.core.Keyword(null,"start-date","start-date",295168731))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):" ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(clojure.string.blank_QMARK_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.rdf_describe),new cljs.core.Keyword(null,"end-date","end-date",-208259642)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" FILTER (?yearcollected <= '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.rdf_describe),new cljs.core.Keyword(null,"end-date","end-date",-208259642))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("')")].join(''):" ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" }")].join('')], null),new cljs.core.Keyword(null,"handler","handler",-195596612),stbiodata.core.handler_rdf,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (response){
return console.log(response);
})], null));
} else {
return stbiodata.core.alert.call(null,"No results");
}
});
stbiodata.core.filter_query = (function stbiodata$core$filter_query(){
var name = document.getElementById("specie-filter").value;
var start_date = document.getElementById("start-date").value;
var end_date = document.getElementById("end-date").value;
var query2 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("PREFIX iucn: <http://java.icmc.usp.br/iucn/>\n                                        PREFIX bioprov: <http://java.icmc.usp.br/bioprov/>\n                                        PREFIX foaf: <http://xmlns.com/foaf/0.1/>\n                                        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\n                                        PREFIX geo: <http://www.opengis.net/ont/geosparql#>\n                                        PREFIX geof: <http://www.opengis.net/def/function/geosparql/>\n                                        PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>\n                                        PREFIX time: <http://www.w3.org/2006/time#>\n                                        PREFIX prov: <http://www.w3.org/ns/prov#>\n                                        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\n                                        PREFIX geobio: <http://specieslink.br/extinsion>\n                                        Select ?code ?scientificname ?institutionCode ?occurrenceStatusIUCN ?sameAsGBIF ?sameAsIUCN ?country ?wktA ?dateCollected ?nameCollected ?dateCataloguing ?nameCataloguing ?kingdom ?phylum ?class ?order ?family ?genus\n                                        where { "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(clojure.string.blank_QMARK_.call(null,name)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ?code dwc:scientificName '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("' . ")].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" ?code dwc:scientificName ?scientificname.\n                                            ?code dwc:institutionCode ?institutionCode.\n                                            ?code geo:hasGeometry/geo:asWKT ?wktA.\n                                            ?code prov:hadMember/bioprov:wasCollectedBy/prov:startedAtTime ?dateCollected.\n                                            ?code prov:hadMember/bioprov:wasCatalguingBy/prov:startedAtTime ?dateCataloguing.\n                                            ?code prov:hadMember/bioprov:wasCollectedBy/prov:wasAssociatedWith/foaf:givenName ?nameCollected.\n                                            ?code prov:hadMember/bioprov:wasCatalguingBy/prov:wasAssociatedWith/foaf:givenName ?nameCataloguing.\n                                            ?code prov:hadMember/bioprov:wasCollectedBy/bioprov:yearcollected ?yearcollected.\n                                            ?code dwc:kingdom ?kingdom.\n                                            ?code dwc:phylum ?phylum.\n                                            ?code dwc:class ?class.\n                                            ?code dwc:order ?order.\n                                            ?code dwc:family ?family.\n                                            ?code dwc:genus ?genus.\n                                            OPTIONAL { ?code dwc:country ?country. }\n                                            OPTIONAL { ?code bioprov:sameSynonymIUCN ?sameAsIUCN.  }\n                                            OPTIONAL { ?code bioprov:sameSynonymGBIF ?sameAsGBIF. }\n                                            OPTIONAL { ?code bioprov:hasConservationStatus/dwc:occurrenceStatus ?occurrenceStatusIUCN1.}\n                                            OPTIONAL { ?code dwc:occurrenceStatus ?occurrenceStatusIUCN2. }\n                                            BIND(COALESCE(?occurrenceStatusIUCN1, ?occurrenceStatusIUCN2) as ?occurrenceStatusIUCN)\n                                          "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(clojure.string.blank_QMARK_.call(null,start_date)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" FILTER (?dateCollected >= '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_date),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'^^xsd:dateTime )")].join(''):" ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((!(clojure.string.blank_QMARK_.call(null,end_date)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" FILTER (?dateCollected <= '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_date),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'^^xsd:dateTime )")].join(''):" ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join('');
if(!((clojure.string.blank_QMARK_.call(null,name)) && (clojure.string.blank_QMARK_.call(null,start_date)) && (clojure.string.blank_QMARK_.call(null,end_date)))){
cljs.core.reset_BANG_.call(null,stbiodata.core.rdf_describe,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"start-date","start-date",295168731),start_date,new cljs.core.Keyword(null,"end-date","end-date",-208259642),end_date], null));

cljs.core.reset_BANG_.call(null,stbiodata.core.progress,"visible");

return stbiodata.core.consult.call(null,"Animalia",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),name,new cljs.core.Keyword(null,"query","query",-1288509510),query2], null));
} else {
return null;
}
});
stbiodata.core.drawer_click = (function stbiodata$core$drawer_click(){

return cljs.core.swap_BANG_.call(null,stbiodata.core.drawer_status,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
});
stbiodata.core.drawer_click2 = (function stbiodata$core$drawer_click2(){

cljs.core.swap_BANG_.call(null,stbiodata.core.drawer_status2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));

if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,stbiodata.core.statitics_bol),false)){
stbiodata.core.consult_statistics.call(null);

stbiodata.core.consult_statistics_data_sets.call(null);

stbiodata.core.consult_statistics_years.call(null);

stbiodata.core.consult_statistics_country.call(null);

return cljs.core.reset_BANG_.call(null,stbiodata.core.statitics_bol,true);
} else {
return null;
}
});
/**
 * Create a list
 */
stbiodata.core.create_list = (function stbiodata$core$create_list(header){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.selectable_list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"deep-orange300","deep-orange300",164924105)),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(500),new cljs.core.Keyword(null,"color","color",1011675173),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue-grey900","blue-grey900",1716348108))], null),new cljs.core.Keyword(null,"right-icon","right-icon",-707506540),cljs_react_material_ui.icons.action_open_in_new.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue-grey900","blue-grey900",1716348108))], null)], null)),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"Open Sparql Endpoint",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
window.open("http://java.icmc.usp.br:2190/sparql","_blank");

return stbiodata.core.drawer_click.call(null);
})], null)], null)], null);
});
});
stbiodata.core.menu = (function stbiodata$core$menu(app_content){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary1-color","primary1-color",-450634374),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue500","blue500",-1887562748))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.drawer,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref.call(null,stbiodata.core.drawer_status),new cljs.core.Keyword(null,"id","id",-1388402092),"drawer",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"grey50","grey50",351597331))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.app_bar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Menu",new cljs.core.Keyword(null,"icon-element-left","icon-element-left",-392309508),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.icon_button,cljs_react_material_ui.icons.navigation_close.call(null)], null)),new cljs.core.Keyword(null,"onLeftIconButtonTouchTap","onLeftIconButtonTouchTap",1501591560),(function (e){
return stbiodata.core.drawer_click.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [stbiodata.core.create_list,"Use Cases"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-bar","div#app-bar",-1292136043),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary1-color","primary1-color",-450634374),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue500","blue500",-1887562748))], null)], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.app_bar,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"STBioData",new cljs.core.Keyword(null,"titleStyle","titleStyle",431661489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center"], null),new cljs.core.Keyword(null,"icon-element-left","icon-element-left",-392309508),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Menu",new cljs.core.Keyword(null,"label-position","label-position",-1546831329),"after",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.navigation_menu.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px"], null)], null)], null)),new cljs.core.Keyword(null,"on-Left-Icon-Button-Touch-Tap","on-Left-Icon-Button-Touch-Tap",1823028551),(function (e){
return stbiodata.core.drawer_click.call(null);
}),new cljs.core.Keyword(null,"icon-element-right","icon-element-right",-2138850585),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.flat_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Statistics",new cljs.core.Keyword(null,"label-position","label-position",-1546831329),"before",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.navigation_menu.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"black",new cljs.core.Keyword(null,"background-color","background-color",570434026),"white",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"5px"], null)], null)], null)),new cljs.core.Keyword(null,"on-right-Icon-Button-Touch-Tap","on-right-Icon-Button-Touch-Tap",1544055008),(function (e){
return stbiodata.core.drawer_click2.call(null);
})], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#app-content","div#app-content",-1318502052),app_content], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary1-color","primary1-color",-450634374),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue500","blue500",-1887562748))], null)], null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.drawer,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref.call(null,stbiodata.core.drawer_status2),new cljs.core.Keyword(null,"id","id",-1388402092),"drawer-statistics",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"openSecondary","openSecondary",1365996151),true,new cljs.core.Keyword(null,"containerStyle","containerStyle",-1828381609),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue-grey100","blue-grey100",1057243672))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.app_bar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Statistics",new cljs.core.Keyword(null,"icon-element-left","icon-element-left",-392309508),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.icon_button,cljs_react_material_ui.icons.navigation_close.call(null)], null)),new cljs.core.Keyword(null,"onLeftIconButtonTouchTap","onLeftIconButtonTouchTap",1501591560),(function (e){
return stbiodata.core.drawer_click2.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"row",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0px",new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_title,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Data metrics",new cljs.core.Keyword(null,"act-as-expander","act-as-expander",4889621),false,new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"orange700","orange700",1654504342))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_text,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"left-icon","left-icon",769524213),cljs_react_material_ui.icons.social_public.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"indigo700","indigo700",-1008074420))], null)], null)),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Ocurrences: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.stat),new cljs.core.Keyword(null,"ocurrences","ocurrences",-1787535633)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"key","key",-1516042587),(1),new cljs.core.Keyword(null,"left-icon","left-icon",769524213),cljs_react_material_ui.icons.notification_adb.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"brown700","brown700",689896597))], null)], null)),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Species: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.stat),new cljs.core.Keyword(null,"species","species",-1393763638)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"key","key",-1516042587),(2),new cljs.core.Keyword(null,"left-icon","left-icon",769524213),cljs_react_material_ui.icons.action_bug_report.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"orange700","orange700",1654504342))], null)], null)),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Animalia: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.stat),new cljs.core.Keyword(null,"animalia","animalia",-192929133)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(3),new cljs.core.Keyword(null,"key","key",-1516042587),(3),new cljs.core.Keyword(null,"left-icon","left-icon",769524213),cljs_react_material_ui.icons.maps_local_florist.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"green700","green700",382937553))], null)], null)),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Plantae: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.stat),new cljs.core.Keyword(null,"plantae","plantae",1786343578)))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.list_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),(4),new cljs.core.Keyword(null,"key","key",-1516042587),(4),new cljs.core.Keyword(null,"left-icon","left-icon",769524213),cljs_react_material_ui.icons.maps_place.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"red700","red700",-1659210365))], null)], null)),new cljs.core.Keyword(null,"primary-text","primary-text",146474209),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Georeferenced: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.stat),new cljs.core.Keyword(null,"geo-referenced","geo-referenced",-549120977)))].join('')], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_title,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Datasets",new cljs.core.Keyword(null,"act-as-expander","act-as-expander",4889621),false,new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"green700","green700",382937553))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.circular_progress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"50px",new cljs.core.Keyword(null,"left","left",-399115937),"calc(50% - 50px)",new cljs.core.Keyword(null,"display","display",242065432),cljs.core.deref.call(null,stbiodata.core.progress_data_sets)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"chart-data-sets",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"300px"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_title,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Ocurrences in South America",new cljs.core.Keyword(null,"act-as-expander","act-as-expander",4889621),false,new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"deep-purple500","deep-purple500",1501340877))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.circular_progress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"50px",new cljs.core.Keyword(null,"left","left",-399115937),"calc(50% - 50px)",new cljs.core.Keyword(null,"display","display",242065432),cljs.core.deref.call(null,stbiodata.core.progress_country)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"chart-country",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"250px"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-lg-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_title,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Occurrences by year collected",new cljs.core.Keyword(null,"act-as-expander","act-as-expander",4889621),false,new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"cyan700","cyan700",-288803974))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_text,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.circular_progress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(60),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"50px",new cljs.core.Keyword(null,"left","left",-399115937),"calc(50% - 50px)",new cljs.core.Keyword(null,"display","display",242065432),cljs.core.deref.call(null,stbiodata.core.progress_years)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"chart-years",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"250px"], null)], null)], null)], null)], null)], null)], null)], null)], null)], null)], null);
});
stbiodata.core.home_page = (function stbiodata$core$home_page(){
return stbiodata.core.menu.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"row",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-sm-12 col-md-4 col-lg-4"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_title,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Search",new cljs.core.Keyword(null,"act-as-expander","act-as-expander",4889621),false,new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"orange700","orange700",1654504342))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_text,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.auto_complete,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"specie-filter",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter species name",new cljs.core.Keyword(null,"listStyle","listStyle",1805423737),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),"200px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null),new cljs.core.Keyword(null,"filter","filter",-948537934),(MaterialUI["AutoComplete"]["caseInsensitiveFilter"]),new cljs.core.Keyword(null,"maxSearchResults","maxSearchResults",176908522),(60),new cljs.core.Keyword(null,"fullWidth","fullWidth",-1436357554),true,new cljs.core.Keyword(null,"dataSource","dataSource",-178401132),cljs.core.deref.call(null,stbiodata.core.species_list)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-6",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.date_picker,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onDismiss","onDismiss",1209514337),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"maxDate","maxDate",1297159788),new cljs.core.Keyword(null,"minDate","minDate",229610480),new cljs.core.Keyword(null,"autoOk","autoOk",995202611),new cljs.core.Keyword(null,"cancelLabel","cancelLabel",1609657907),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"textFieldStyle","textFieldStyle",267578103),new cljs.core.Keyword(null,"onChange","onChange",-312891301)],[(function (){
return cljs.core.reset_BANG_.call(null,stbiodata.core.start_datePicker,"");
}),"Start date",cljs.core.deref.call(null,stbiodata.core.start_datePicker),cljs_time.core.now.call(null),cljs_time.core.date_time.call(null,(1750),(1),(1)),true,"Clear","start-date","inline",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),(function (null$,date){
return cljs.core.reset_BANG_.call(null,stbiodata.core.start_datePicker,date);
})])], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-6",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.date_picker,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"onDismiss","onDismiss",1209514337),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"maxDate","maxDate",1297159788),new cljs.core.Keyword(null,"minDate","minDate",229610480),new cljs.core.Keyword(null,"autoOk","autoOk",995202611),new cljs.core.Keyword(null,"cancelLabel","cancelLabel",1609657907),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"textFieldStyle","textFieldStyle",267578103),new cljs.core.Keyword(null,"onChange","onChange",-312891301)],[(function (){
return cljs.core.reset_BANG_.call(null,stbiodata.core.end_datePicker,"");
}),"End date",cljs.core.deref.call(null,stbiodata.core.end_datePicker),cljs_time.core.now.call(null),cljs_time.core.date_time.call(null,(1750),(1),(1)),true,"Clear","end-date","inline",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),(function (null$,date){
return cljs.core.reset_BANG_.call(null,stbiodata.core.end_datePicker,date);
})])], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Submit",new cljs.core.Keyword(null,"label-position","label-position",-1546831329),"before",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.action_search.call(null),new cljs.core.Keyword(null,"label-color","label-color",813573617),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"white","white",-483998618)),new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"brown400","brown400",-782796148)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return stbiodata.core.filter_query.call(null);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.circular_progress,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(30),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),"10px",new cljs.core.Keyword(null,"left","left",-399115937),"10px",new cljs.core.Keyword(null,"visibility","visibility",1338380893),cljs.core.deref.call(null,stbiodata.core.progress)], null)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_title,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px"], null)], null),"BioProv"], null)),new cljs.core.Keyword(null,"subtitle","subtitle",-1614524363),"A Provenance Model for Biodiversity Data",new cljs.core.Keyword(null,"subtitleStyle","subtitleStyle",1487380060),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)),new cljs.core.Keyword(null,"act-as-expander","act-as-expander",4889621),false,new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"deep-purple500","deep-purple500",1501340877))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_text,new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Scientific Name: "], null),cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.prov),new cljs.core.Keyword(null,"scientificName","scientificName",-1456549436))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Institution Code: "], null),cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.prov),new cljs.core.Keyword(null,"institutionCode","institutionCode",-712238217))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Date Collected: "], null),cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.prov),new cljs.core.Keyword(null,"dateCollected","dateCollected",1530680092))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Name Collected: "], null),cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.prov),new cljs.core.Keyword(null,"nameColleted","nameColleted",1096683899))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Date Cataloguing: "], null),cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.prov),new cljs.core.Keyword(null,"dateCataloguing","dateCataloguing",-1502843060))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"Species Authority: "], null),cljs.core.get.call(null,cljs.core.deref.call(null,stbiodata.core.prov),new cljs.core.Keyword(null,"nameCataloguing","nameCataloguing",1038641574))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-sm-12 col-md-8 col-lg-8"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_title,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.deref.call(null,stbiodata.core.caseTitle),new cljs.core.Keyword(null,"act-as-expander","act-as-expander",4889621),false,new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"green700","green700",382937553))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_media,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stbiodata.core.create_map], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"row",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"0px",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"0px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"col-xs-12 col-sm-12 col-md-12 col-lg-12"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.mui_theme_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mui-theme","mui-theme",-164636823),cljs_react_material_ui.core.get_mui_theme.call(null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_title,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"Search result",new cljs.core.Keyword(null,"act-as-expander","act-as-expander",4889621),false,new cljs.core.Keyword(null,"titleColor","titleColor",608094610),"white",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),cljs_react_material_ui.core.color.call(null,new cljs.core.Keyword(null,"blue500","blue500",-1887562748))], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.icon_menu,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"16px",new cljs.core.Keyword(null,"right","right",-452581833),"16px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2)], null),new cljs.core.Keyword(null,"icon-button-element","icon-button-element",1889907538),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.raised_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Download",new cljs.core.Keyword(null,"label-position","label-position",-1546831329),"after",new cljs.core.Keyword(null,"icon","icon",1679606541),cljs_react_material_ui.icons.file_cloud_download.call(null)], null)], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"CSV Format",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return stbiodata.core.download_csv.call(null);
})], null)], null)),reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.menu_item,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"primary-text","primary-text",146474209),"RDF Format",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return stbiodata.core.download_rdf.call(null);
})], null)], null))], null)], null)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_react_material_ui.reagent.card_text,cljs.core.deref.call(null,stbiodata.core.data_table)], null)], null)], null)], null)], null)], null));
});
stbiodata.core.mount_root = (function stbiodata$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [stbiodata.core.home_page], null),document.getElementById("app"));
});
stbiodata.core.init_BANG_ = (function stbiodata$core$init_BANG_(){
stbiodata.core.mount_root.call(null);

stbiodata.core.consult_especies_list.call(null);

return google.charts.load("current",cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"packages","packages",1549741112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["corechart"], null)], null)));
});

//# sourceMappingURL=core.js.map