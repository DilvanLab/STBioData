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
(ns stbiodata.table
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as rui]
            [reagent.core :as reagent :refer [atom]]))

(def table-test-data [["id" "scientificName" "family" "genus" "specificEpithet"]
                      [2520221 "Cyperaceae Rhynchospora ridleyi C.B. Clarke" "Cyperaceae" "Rhynchospora" "ridleyi"]
                      [2520232 "Moraceae Brosimum gaudichaudii trecul" "Moraceae" "Brosimum" "guadichaudii"]
                      [2520233 "Urticaceae Pilea hyalina Fenzl" "Urticaceae" "Pilea" "hyalina"]
                      [2520234 "Cannabaceae Celtis pubescens (Kunth) Spreng." "Cannabaceae" "Celtis" "pubescens"]
                      [2520235 "Cannabaceae Celtis pubescens (Kunth) Spreng." "Cannabaceae" "Celtis" "pubescens"]
                      [2520236 "Moraceae Ficus trigona L.f." "Moraceae" "Ficus" "trigona"]
                      [2520237 "Urticaceae Pilea hyalina Fenzl" "Urticaceae" "Pilea" "hyalina"]
                      [2520237 "Urticaceae Urera baccifera (L.) Gaudich." "Urticaceae" "Urera" "baccifera"]
                      [2520239 "Urticaceae Cecropia pachystachya Trecul" "Urticaceae" "Cecropia" "pachystachya"]
                      [2520240 "Cannabaceae Celtis pubescens (Kunth) Spreng." "Cannabaceae" "Celtis" "pubescens"]])

(defn create-table [input-table]
  [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
   [rui/table {:height "auto"
               :fixed-header true
               :multi-selectable false
               :display-row-checkbox false}
    [rui/table-header
     {:display-select-all  false
      :adjust-for-checkbox false}
     [rui/table-row
      (for [i  (range (count (get input-table 0)))] ^{:key i}
           [rui/table-header-column (get (get input-table 0) i)])]]
    [rui/table-body {:display-row-checkbox false}
     (for [i (range 1 (count input-table))] ^{:key i}
          [rui/table-row
           (let [row-data (get input-table i)]
             (for [ii (range (count row-data))]
               (let [cell-datum (get row-data ii)] ^{:key ii}
                    [rui/table-row-column cell-datum])))])]]])

(defn create-test-table []
  (create-table table-test-data))

(defn create-table-geobio [input-table]
  (let [data-table (object-array input-table)]
    [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
     [rui/table {:bodyStyle {:overflow "visible"}
                 :style {:table-layout "auto"}
                 :fixed-header false
                 :multi-selectable false
                 :display-row-checkbox false}
      [rui/table-header
       {:display-select-all  false
        :adjust-for-checkbox false}
       [rui/table-row
        [rui/table-header-column "#"]
            ;;[rui/table-header-column "Code"]
        [rui/table-header-column "Scientific Name"]
        [rui/table-header-column "Kingdom"]
        [rui/table-header-column "Phylum"]
        [rui/table-header-column "Class"]
        [rui/table-header-column "Order"]
        [rui/table-header-column "Family"]
        [rui/table-header-column "Genus"]
        [rui/table-header-column "Institution Code"]
        [rui/table-header-column "Status IUCN"]
        [rui/table-header-column "POINT (lat,long)"]
        [rui/table-header-column "Country"]
        [rui/table-header-column "Date Collected"]
        [rui/table-header-column "Name Collected"]
        [rui/table-header-column "Date Cataloguing"]
        [rui/table-header-column "Name Cataloguing"]
        [rui/table-header-column "Same as GBIF"]
        [rui/table-header-column "Same as IUCN"]]]
      [rui/table-body {:display-row-checkbox false :preScanRows false}
       (for [i (range (count data-table))] ^{:key i}
            [rui/table-row
             [rui/table-row-column (+ 1 i)]
              ;;[rui/table-row-column [:a {:href (get (get (get data-table i) "code") "value") :target "blank"} (get (get (get data-table i) "code") "value")] ]
             [rui/table-row-column (get (get (get data-table i) "scientificname") "value")]
             [rui/table-row-column (get (get (get data-table i) "kingdom") "value")]
             [rui/table-row-column (get (get (get data-table i) "phylum") "value")]
             [rui/table-row-column (get (get (get data-table i) "class") "value")]
             [rui/table-row-column (get (get (get data-table i) "order") "value")]
             [rui/table-row-column (get (get (get data-table i) "family") "value")]
             [rui/table-row-column (get (get (get data-table i) "genus") "value")]
             [rui/table-row-column (get (get (get data-table i) "institutionCode") "value")]
             [rui/table-row-column (get (get (get data-table i) "occurrenceStatusIUCN") "value")]
             [rui/table-row-column (get (get (get data-table i) "wktA") "value")]
             [rui/table-row-column [:a {:href (get (get (get data-table i) "country") "value") :target "blank"} (get (get (get data-table i) "country") "value")]]
             [rui/table-row-column (get (get (get data-table i) "dateCollected") "value")]
             [rui/table-row-column (get (get (get data-table i) "nameCollected") "value")]
             [rui/table-row-column (get (get (get data-table i) "dateCataloguing") "value")]
             [rui/table-row-column (get (get (get data-table i) "nameCataloguing") "value")]
             [rui/table-row-column (let [same_gbif (get (get (get data-table i) "sameAsGBIF") "value")] (if (nil? same_gbif) " " [:a {:href same_gbif :target "blank"} same_gbif]))]
             [rui/table-row-column (let [same_iucn (get (get (get data-table i) "sameAsIUCN") "value")] (if (nil? same_iucn) " " [:a {:href same_iucn :target "blank"} same_iucn]))]])]]]))

#_(:headers {"Access-Control-Allow-Headers" "Content-Type"
             "Access-Control-Allow-Origin" "*"})
