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
goog.provide('gmaps.core2');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_react_material_ui.core');
gmaps.core2.mymarkers = reagent.core.atom.call(null,[]);
gmaps.core2.markers_cluster = reagent.core.atom.call(null,null);
gmaps.core2.markers_spyder = reagent.core.atom.call(null,null);
gmaps.core2.user_position = reagent.core.atom.call(null,cljs.core.List.EMPTY);
gmaps.core2.create_marker = (function gmaps$core2$create_marker(component,lat,long$,title){
var marker = cljs.core.clj__GT_js.call(null,(new google.maps.Marker(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"map","map",1371690461).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,component)),new cljs.core.Keyword(null,"position","position",-2011731912),(new google.maps.LatLng(lat,long$)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"icon","icon",1679606541),"imgs/markers/marker.svg"], null)))));
var markers = cljs.core.clj__GT_js.call(null,[new cljs.core.Keyword(null,"markers","markers",-246919693).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,component))]);
markers.push(marker);

return cljs.core.reset_BANG_.call(null,component,cljs.core.update_in.call(null,cljs.core.deref.call(null,component),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"markers","markers",-246919693)], null),((function (marker,markers){
return (function (){
return markers;
});})(marker,markers))
));
});
gmaps.core2.create_map = (function gmaps$core2$create_map(container,component){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
gmaps.core2.map_canvas = reagent.core.dom_node.call(null,this$);

gmaps.core2.map_options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["center",(new google.maps.LatLng(-15.79441,-47.877821)),"zoom",(4)], null));

return cljs.core.reset_BANG_.call(null,component,cljs.core.update_in.call(null,cljs.core.deref.call(null,component),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461)], null),(function (){
return (new google.maps.Map(gmaps.core2.map_canvas,gmaps.core2.map_options));
})));
}),new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),(function (){
return cljs.core.List.EMPTY;
}),new cljs.core.Keyword(null,"display-name","display-name",694513143),"google-maps",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (container__$1,component__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [container__$1], null);
})], null));
});

//# sourceMappingURL=core2.js.map?rel=1502108321854