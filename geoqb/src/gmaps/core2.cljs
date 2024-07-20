;
; STBioData is an application to integrate, retrieve, and visualize biodiversity data using
; spatiotemporal information. It uses semantics, data visualization and mapping
; techniques to achieve that.
;
; Copyright (c) 2018-2024  Dilvan A. Moreira
;
; This program is free software: you can redistribute it and/or modify
; it under the terms of the GNU General Public License as published by
; the Free Software Foundation, either version 3 of the License, or
; (at your option) any later version.
;
; This program is distributed in the hope that it will be useful,
; but WITHOUT ANY WARRANTY; without even the implied warranty of
; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
; GNU General Public License for more details.
;
; You should have received a copy of the GNU General Public License
; along with this program.  If not, see <https://www.gnu.org/licenses/>.
;
(ns gmaps.core2
  (:require [reagent.core :as reagent :refer [atom]]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
    ))

(def mymarkers (atom #js[]))
(def markers-cluster (atom nil))
(def markers-spyder (atom nil))
(def user-position (atom ()))

(defn create-marker [component lat long title]
  (let [marker (clj->js (js/google.maps.Marker.
                            (clj->js {:map (:map @component)
                                      :position (js/google.maps.LatLng. lat long)
                                      :title title
                                      :icon "imgs/markers/marker.svg" })))
        markers (clj->js #js[(:markers @component)] )]

        (.push markers marker)
        (reset! component (update-in @component [:markers] (fn [] markers ) ))
))

(defn create-map [container component]
  (let []
    (reagent/create-class
      {:component-did-mount
      (fn [this]
        (def map-canvas (reagent/dom-node this))
        (def map-options (clj->js {"center" (js/google.maps.LatLng. -15.794410 -47.877821)
                                   "zoom" 4}))
        (reset! component (update-in @component [:map] #(js/google.maps.Map. map-canvas map-options) ))
        #_(.getCurrentPosition js/navigator.geolocation
          (fn [position] (reset! user-position (js/google.maps.Circle. (clj->js {"strokeColor" (color :green700)
                                                                                 "strokeOpacity" 0.8
                                                                                 "strokeWeight" 2
                                                                                 "fillColor" (color :green200)
                                                                                 "fillOpacity" 0.35
                                                                                 "radius" 25000
                                                                                 "map" (:map @component)
                                                                                 "center" (js/google.maps.LatLng.
                                                                                            (-> position (aget "coords") (aget "latitude"))
                                                                                            (-> position (aget "coords") (aget "longitude"))) }) ))
                         (.setCenter (:map @component) (js/google.maps.LatLng. (-> position (aget "coords") (aget "latitude")) (-> position (aget "coords") (aget "longitude"))))
                         (.setZoom (:map @component) 7) ))

      )

      :component-will-mount
      #()

      :display-name  "google-maps"

      :reagent-render
      (fn [container component]
        [container])})
  )
)
