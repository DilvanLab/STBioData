(ns gmaps.core
  (:require [reagent.core :as reagent]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
    ))

(def mymap (atom ()))
(def mymarkers (atom #js []))
(def markers-cluster (atom nil))
(def markers-spyder (atom nil))
(def user-position (atom ()))

(defn create-marker [varmap lat long title]
  (let [marker (clj->js (js/google.maps.Marker. (clj->js {:map varmap
                                    :position (google.maps.LatLng. lat, long)
                                    :title title
                                    :icon "imgs/markers/marker.svg" })))]
                                    (.push @mymarkers marker)
                                    (reset! mymarkers @mymarkers)
                                    (.addMarker @markers-spyder marker)
                                    marker ))

(defn remove-markers []
  (dotimes [i (count @mymarkers)] (.setMap (get @mymarkers i) (clj->js nil)) )
  (if-not (nil? @markers-cluster) (.clearMarkers @markers-cluster) )
  (reset! mymarkers #js []) )

(defn component-did-mount [this]
 (def map-canvas (reagent/dom-node this))
 (def map-options (clj->js {"center" (js/google.maps.LatLng. -15.794410 -47.877821)
                            "zoom" 4}))
 (reset! mymap (js/google.maps.Map. map-canvas map-options))
 #_(.getCurrentPosition js/navigator.geolocation
   (fn [position] (reset! user-position (js/google.maps.Circle. (clj->js {"strokeColor" (color :green700)
                                                                          "strokeOpacity" 0.8
                                                                          "strokeWeight" 2
                                                                          "fillColor" (color :green200)
                                                                          "fillOpacity" 0.35
                                                                          "radius" 25000
                                                                          "map" @mymap
                                                                          "center" (js/google.maps.LatLng.
                                                                                     (-> position (aget "coords") (aget "latitude"))
                                                                                     (-> position (aget "coords") (aget "longitude"))) }) ))
                  (.setCenter @mymap (js/google.maps.LatLng. (-> position (aget "coords") (aget "latitude")) (-> position (aget "coords") (aget "longitude"))))
                  (.setZoom @mymap 7) ))

)

(defn create-map "Render the map" [map-render] (reagent/create-class {:reagent-render map-render :component-did-mount component-did-mount}))
