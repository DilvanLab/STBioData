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
goog.provide('gmaps.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs_react_material_ui.core');
gmaps.core.mymap = cljs.core.atom.call(null,cljs.core.List.EMPTY);
gmaps.core.mymarkers = cljs.core.atom.call(null,[]);
gmaps.core.markers_cluster = cljs.core.atom.call(null,null);
gmaps.core.markers_spyder = cljs.core.atom.call(null,null);
gmaps.core.user_position = cljs.core.atom.call(null,cljs.core.List.EMPTY);
gmaps.core.create_marker = (function gmaps$core$create_marker(varmap,lat,long$,title){
var marker = cljs.core.clj__GT_js.call(null,(new google.maps.Marker(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"map","map",1371690461),varmap,new cljs.core.Keyword(null,"position","position",-2011731912),(new google.maps.LatLng(lat,long$)),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"icon","icon",1679606541),"imgs/markers/marker.svg"], null)))));
cljs.core.deref.call(null,gmaps.core.mymarkers).push(marker);

cljs.core.reset_BANG_.call(null,gmaps.core.mymarkers,cljs.core.deref.call(null,gmaps.core.mymarkers));

cljs.core.deref.call(null,gmaps.core.markers_spyder).addMarker(marker);

return marker;
});
gmaps.core.remove_markers = (function gmaps$core$remove_markers(){
var n__26355__auto___37182 = cljs.core.count.call(null,cljs.core.deref.call(null,gmaps.core.mymarkers));
var i_37183 = (0);
while(true){
if((i_37183 < n__26355__auto___37182)){
cljs.core.get.call(null,cljs.core.deref.call(null,gmaps.core.mymarkers),i_37183).setMap(cljs.core.clj__GT_js.call(null,null));

var G__37184 = (i_37183 + (1));
i_37183 = G__37184;
continue;
} else {
}
break;
}

if(!((cljs.core.deref.call(null,gmaps.core.markers_cluster) == null))){
cljs.core.deref.call(null,gmaps.core.markers_cluster).clearMarkers();
} else {
}

return cljs.core.reset_BANG_.call(null,gmaps.core.mymarkers,[]);
});
gmaps.core.component_did_mount = (function gmaps$core$component_did_mount(this$){
gmaps.core.map_canvas = reagent.core.dom_node.call(null,this$);

gmaps.core.map_options = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, ["center",(new google.maps.LatLng(-15.79441,-47.877821)),"zoom",(4)], null));

return cljs.core.reset_BANG_.call(null,gmaps.core.mymap,(new google.maps.Map(gmaps.core.map_canvas,gmaps.core.map_options)));
});
/**
 * Render the map
 */
gmaps.core.create_map = (function gmaps$core$create_map(map_render){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),map_render,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),gmaps.core.component_did_mount], null));
});

//# sourceMappingURL=core.js.map?rel=1502108327192