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
(ns stbiodata.core
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as rui]
            [cljs-react-material-ui.icons :as ic]
            [reagent.core :as reagent :refer [atom]]
            [cljs-time.core :as time]
            [stbiodata.table :as table]
            [testdouble.cljs.csv :as csv]
            [ajax.core :as ajax :refer [GET ajax-request transit-request-format transit-response-format text-request-format text-response-format]]))

;; -------------------------
;; Variables

(def responseAtom (atom {}))
(def mymap (atom ()))
(def mymarkers (atom #js []))
(def markers-cluster (atom nil))
(def markers-spyder (atom nil))
(def user-position (atom ()))
(def csv-file (atom nil))
(def rdf-describe (atom nil))
(def species-list (atom ()))
(def start-datePicker (atom ""))
(def end-datePicker (atom ""))
(def stat (atom ()))
(def progress (atom "hidden"))
(def progress-data-sets (atom "inline-block"))
(def progress-country (atom "inline-block"))
(def progress-years (atom "inline-block"))
(def caseTitle (atom (str "Map")))
(def caseQuery (atom ()))
(def data-table (atom ()))
(def prov (atom {:scientificName "" :code "" :institutionCode "" :dateCollected "" :nameColleted "" :dateCataloguing "" :nameCataloguing ""}))
(def endpoint "http://java.icmc.usp.br:2190/repositories/bio")
(def drawer-status (reagent/atom false))
(def drawer-status2 (reagent/atom false))
(def statitics-bol (atom false))
(def list-item-selected (atom nil))

;; -------------------------
;; Maps Functions

;; Create marker in map
;; varmap - Map object
;; lat - latitude
;; long - longitude
;; title - Marker title
(defn create-marker [varmap lat long title]
  (let [marker (clj->js (js/google.maps.Marker. (clj->js {:map varmap
                                                          :position (google.maps.LatLng. lat, long)
                                                          :title title
                                                          :icon "imgs/markers/marker.svg"})))]
    (.push @mymarkers marker)
    (reset! mymarkers @mymarkers)
    (.addMarker @markers-spyder marker)
    marker))

;; Remove all markers
(defn remove-markers []
  (dotimes [i (count @mymarkers)] (.setMap (get @mymarkers i) (clj->js nil)))
  (if-not (nil? @markers-cluster) (.clearMarkers @markers-cluster))
  (reset! mymarkers #js []))

;; Map wrapper div
(defn map-render []
  [:div#map {:class "col-xs-12" :style {:height "500px"}}])

;; Execute after mount map
(defn home-did-mount [this]
 ;; Put "this node" into map-canvas
  (def map-canvas (reagent/dom-node this))

 ;; Gmaps config
  (def map-options (clj->js {"center" (js/google.maps.LatLng. -15.794410 -47.877821)
                             "zoom" 4}))

 ;; Reset! myMap with a new MAP object
  (reset! mymap (js/google.maps.Map. map-canvas map-options))

 ;; Center map based on actual user position
  (.getCurrentPosition js/navigator.geolocation
                       (fn [position] (reset! user-position (js/google.maps.Circle. (clj->js {"strokeColor" (color :green700)
                                                                                              "strokeOpacity" 0.8
                                                                                              "strokeWeight" 2
                                                                                              "fillColor" (color :green200)
                                                                                              "fillOpacity" 0.35
                                                                                              "radius" 25000
                                                                                              "map" @mymap
                                                                                              "center" (js/google.maps.LatLng.
                                                                                                        (-> position (aget "coords") (aget "latitude"))
                                                                                                        (-> position (aget "coords") (aget "longitude")))})))
                         (.setCenter @mymap (js/google.maps.LatLng. (-> position (aget "coords") (aget "latitude")) (-> position (aget "coords") (aget "longitude"))))
                         (.setZoom @mymap 7))))

;; Function to create a map
(defn create-map "Render the map" [] (reagent/create-class {:reagent-render map-render :component-did-mount home-did-mount}))

;; -------------------------
;; Functions

(defn json->clj "Convert the ajax response in clj" [json-string]
  (js->clj (.parse js/JSON json-string)))

(defn alert [str] (js/alert str))

;; Change provenance value
(defn provenance [scientificName code institutionCode dateCollected nameColleted dateCataloguing nameCataloguing]
  (reset! prov {:scientificName scientificName
                :code code
                :institutionCode institutionCode
                :dateCollected dateCollected
                :nameColleted nameColleted
                :dateCataloguing dateCataloguing
                :nameCataloguing nameCataloguing}))

;; Convert response to CSV
(defn response-to-csv [response]
  (reset! csv-file [["code" "scientificname" "kingdom" "phylum" "class" "order" "family" "genus" "institutionCode" "Status IUCN" "POINT (lat long)" "country" "dateCollected" "nameCollected" "dateCataloguing" "nameCataloguing" "Same as GBIF" "Same as IUCN"]])
  (dotimes [i (count response)] ^{:key i}
           (reset! csv-file (conj @csv-file [(-> response (get i) (get "code") (get "value"))
                                             (-> response (get i) (get "scientificname") (get "value"))
                                             (-> response (get i) (get "kingdom") (get "value"))
                                             (-> response (get i) (get "phylum") (get "value"))
                                             (-> response (get i) (get "class") (get "value"))
                                             (-> response (get i) (get "order") (get "value"))
                                             (-> response (get i) (get "family") (get "value"))
                                             (-> response (get i) (get "genus") (get "value"))
                                             (-> response (get i) (get "institutionCode") (get "value"))
                                             (-> response (get i) (get "occurrenceStatusIUCN") (get "value"))
                                             (-> response (get i) (get "wktA") (get "value"))
                                             (-> response (get i) (get "country") (get "value"))
                                             (-> response (get i) (get "dateCollected") (get "value"))
                                             (str "\"" (-> response (get i) (get "nameCollected") (get "value")) "\"")
                                             (-> response (get i) (get "dateCataloguing") (get "value"))
                                             (str "\"" (-> response (get i) (get "nameCataloguing") (get "value")) "\"")
                                             (-> response (get i) (get "sameAsGBIF") (get "value"))
                                             (-> response (get i) (get "sameAsIUCN") (get "value"))]))))

;; Draw statistics charts
(defn draw-charts "1-Pie 2-Colum 3-Donnut 4-Geo 5-line 6-Scatter" [id title vec type]
  (let [container (.getElementById js/document id)
        chart (case type
                1 (js/google.visualization.PieChart. container)
                2 (js/google.visualization.ColumnChart. container)
                4 (js/google.visualization.GeoChart. container)
                5 (js/google.visualization.LineChart. container)
                6 (js/google.visualization.ScatterChart. container)
                (js/google.visualization.PieChart. container))
        options (clj->js {:title title :region "005" :pieHole (if (= type 3) 0.4 0) :colorAxis {:colors [(color :amber300) (color :lime400) (color :light-green400) (color :green300)]} :chartArea {:left 10 :top 10 :width "100%" :height 160} :titleTextStyle {:fontSize 14}})
        data-table (js/google.visualization.DataTable.)]

    ;;Processes data according to specified type
    (case type
      4 (doto data-table
          (.addColumn "string" "Country")
          (.addColumn "number" "Ocurrences")
          (.addRows (clj->js vec)))
      (doto data-table
        (.addColumn "string" "Topping")
        (.addColumn "number" "Slices")
        (.addRows (clj->js vec))))
    (.draw chart data-table options)))

(defn print-sparql
  "Print sparql query" [query]
  [:div (for [i (range (count query))] (if (= (get query i) "\n") (reagent/as-element [:br]) (get query i)))])

;; Function to download csv file
(defn save-file [filename t s]
  (if js/Blob
    (let [b (js/Blob. s #js {:type t})]
      (if js/window.navigator.msSaveBlob
        (js/window.navigator.msSaveBlob b filename)
        (let [link (js/document.createElement  "a")]
          (aset link "download" filename)
          (if js/window.webkitURL
            (aset link "href" (js/window.webkitURL.createObjectURL b))
            (do
              (aset link "href" (js/window.URL.createObjectURL b))
              (aset link "onclick" (fn destroy-clicked [e]
                                     (.removeChild (.-body js/document) (.-target e))))
              (aset link "style" "display" "none")
              (.appendChild (.-body js/document) link)))
          (.click link))))
    (js/console.log "Browser does not support Blob")))

;; -------------------------
;; Handlers

;; Handler of consult function
(defn handler [response]
  ;; Convert response JSON into CLJ
  (def response-json (json->clj response))

  ;; Extract results and put in responseAtom
  (reset! responseAtom (-> response-json (get "results") (get "bindings")))

  ;; Get size of response
  (def msize (atom (count @responseAtom)))

  ;; If has a response
  (if (> @msize 0) (response-to-csv @responseAtom) (do (reset! csv-file nil) (reset! rdf-describe nil)))

  ;; Create a new table and put! in data-table
  (reset! data-table (table/create-table-geobio @responseAtom))

  ;; Add spiderfy plugin in map
  (reset! markers-spyder (js/OverlappingMarkerSpiderfier. @mymap (clj->js {"keepSpiderfied" true "event" "mouseover"})))
  (def iw (js/google.maps.InfoWindow.))
  (.addListener @markers-spyder "format" (fn [marker status] (if (= 0 (compare status "SPIDERFIED"))
                                                               (.setIcon marker (clj->js {:url "imgs/markers/marker-highlight.svg" :scaledSize (js/google.maps.Size. 23 32)}))
                                                               (if (= 0 (compare status "SPIDERFIABLE"))
                                                                 (.setIcon marker (clj->js {:url "imgs/markers/marker-plus.svg" :scaledSize (js/google.maps.Size. 23 32)}))
                                                                 (if (= 0 (compare status "UNSPIDERFIABLE"))
                                                                   (.setIcon marker (clj->js {:url "imgs/markers/marker.svg" :scaledSize (js/google.maps.Size. 23 32)})))))))

  (.addListener @markers-spyder "click" (fn [marker e] (.setContent iw (aget marker "title")) (.open iw @mymap marker)))
  (.addListener @markers-spyder "spiderfy" (fn [markers] (.close iw)))

  ;; Clear all old markers
  (remove-markers)

  ;; Add in markers function to show profenance
  (dotimes [i @msize]
    (let [latlng (-> @responseAtom (get i) (get "wktA") (get "value") (clojure.string/replace "POINT(" "") (clojure.string/replace ")" "") (clojure.string/split " "))
          scientificName (-> @responseAtom (get i) (get "scientificname") (get "value"))
          code (-> @responseAtom (get i) (get "code") (get "value"))
          institutionCode (-> @responseAtom (get i) (get "institutionCode") (get "value"))
          dateCollected (-> @responseAtom (get i) (get "dateCollected") (get "value"))
          nameColleted (-> @responseAtom (get i) (get "nameColleted") (get "value"))
          dateCataloguing (-> @responseAtom (get i) (get "dateCataloguing") (get "value"))
          nameCataloguing (-> @responseAtom (get i) (get "nameCataloguing") (get "value"))
          mark (create-marker @mymap (get latlng 0) (get latlng 1) (str (+ i 1) ": " scientificName))]
      (.addListener mark "click" (fn [] (provenance scientificName code institutionCode dateCollected nameColleted dateCataloguing nameCataloguing)))))

  ;; Update markers-cluster with new cluster
  (reset! markers-cluster (js/MarkerClusterer. @mymap @mymarkers (clj->js {"imagePath" "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"})))
  (.setMaxZoom @markers-cluster 12)
  (reset! progress "hidden"))

;; General erro handler
(defn error-handler [{:keys [status status-text]}]
  (.log js/console (str "something bad happened: " status " " status-text)))

;; Handler of consult-especies-list
(defn handler-species [response]
  (let [result (-> (json->clj response) (get "results") (get "bindings"))]
    (dotimes [i (count result)] (reset! species-list (conj @species-list (-> (get result i) (get "scientificname") (get "value")))))))

;; Handler of consult-statistics
(defn handler-statistics [response]
  (let [result (-> (json->clj response) (get "results") (get "bindings") (get 0))]
    (reset! stat {:ocurrences (-> result (get "Ocurrences") (get "value"))
                  :species (-> result (get "Species") (get "value"))
                  :animalia (-> result (get "Animalia") (get "value"))
                  :plantae (-> result (get "Plantae") (get "value"))
                  :geo-referenced (-> result (get "Georeference") (get "value"))})))

;; Handler of consult-statistics-data-sets
(defn handler-statistics-data-sets [response]
  (let [result (-> (json->clj response) (get "results") (get "bindings") (get 0))]
    (reset! progress-data-sets "none")
    (draw-charts "chart-data-sets" "" [["Embrapa" (-> result (get "Embrapa") (get "value") (int))]
                                       ["IUCN" (-> result (get "IUCN") (get "value") (int))]
                                       ["INPA" (-> result (get "INPA") (get "value") (int))]
                                       ["SpeciesLink" (-> result (get "SpeciesLink") (get "value") (int))]] 3)))

;; Handler of consult-statistics-years
(defn handler-statistics-years [response]
  (let [result (-> (json->clj response) (get "results") (get "bindings"))
        list (atom [])]
    (reset! progress-years "none")
    (dotimes [i (count result)]
      (reset! list (conj @list [(-> result (get i) (get "year") (get "value"))
                                (-> result (get i) (get "yearCT") (get "value") (int))])))
    (draw-charts "chart-years" "" @list 3)))

;; Handler of statistics-country
(defn handler-statistics-country [response]
  (let [result (-> (json->clj response) (get "results") (get "bindings"))
        list (atom [])]
    (reset! progress-country "none")
    (dotimes [i (count result)]
      (reset! list (conj @list [(-> result (get i) (get "Country") (get "value") (clojure.string/replace "http://dbpedia.org/resource/" ""))
                                (-> result (get i) (get "CountryST") (get "value") (int))])))
    (draw-charts "chart-country" "" @list 4)))

;; Handler of download RDF
(defn handler-rdf [response]
  (save-file (str "rdf(" (get @rdf-describe :name) ").n3") "text/n3" #js [response]))

;; -------------------------
;; Main Functions

;; Execute search according studyCase
(defn consult [serv estudyCase]
  (reset! caseTitle (if-not (clojure.string/blank? (get estudyCase :title)) (get estudyCase :title) "Map"))
  (reset! caseQuery (get estudyCase :query))
  (ajax/GET (str "http://java.icmc.usp.br:2190/repositories/" serv) {:params {:query  (clojure.string/replace (get estudyCase :query) #"#" "%23")}
                                                                     :handler handler
                                                                     :error-handler handler}))

;; Consult species list to populate combobox
(defn consult-especies-list []
  (ajax/GET (str "http://java.icmc.usp.br:2190/repositories/" "Animalia")
            {:params {:query "PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
                              SELECT DISTINCT ?scientificname
                              where {
                              	?code dwc:scientificName ?scientificname
                              } ORDER BY ?scientificname"}
             :handler handler-species
             :error-handler (fn [response] (js/console.log response))}))
(defn consult-statistics []
  (ajax/GET
   (str "http://java.icmc.usp.br:2190/repositories/" "Animalia")
   {:params
    {:query (clojure.string/replace "PREFIX iucn: <http://java.icmc.usp.br/iucn/>
                PREFIX bioprov: <http://java.icmc.usp.br/bioprov/>
                PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                PREFIX geo: <http://www.opengis.net/ont/geosparql#>
                PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
                PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
                PREFIX time: <http://www.w3.org/2006/time#>
                PREFIX prov: <http://www.w3.org/ns/prov#>
                PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                PREFIX geobio: <http://specieslink.br/extinsion>
                PREFIX terms1: <http://rs.tdwg.org/dwc/terms/>
                SELECT (COUNT(?code) as ?Ocurrences) (COUNT(DISTINCT ?species) as ?Species)
                (sum(if(lcase(str(?kingdom)) = 'animalia', 1, 0)) as ?Animalia)
                (sum(if(lcase(str(?kingdom)) = 'plantae', 1, 0)) as ?Plantae)
                (COUNT(?wktA) as ?Georeference){
                  ?code dwc:scientificName ?species.
                  ?code geo:hasGeometry/geo:asWKT ?wktA.
                  ?code dwc:kingdom ?kingdom.
                }" #"#" "%23")}
    :handler handler-statistics
    :error-handler (fn [response] (js/console.log response))}))

(defn consult-statistics-data-sets []
  (ajax/GET (str "http://java.icmc.usp.br:2190/repositories/" "Animalia") {:params {:query (clojure.string/replace "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                                            PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
                                            SELECT (sum(if(lcase(str(?biospecie)) = 'http://java.icmc.usp.br/specieslink/biospecie', 1, 0)) as ?SpeciesLink)
                                            (sum(if(lcase(str(?biospecie)) = 'http://java.icmc.usp.br/iucn/biospecie', 1, 0)) as ?IUCN)
                                            (sum(if(lcase(str(?biospecie)) = 'http://java.icmc.usp.br/inpa/biospecie', 1, 0)) as ?INPA)
                                            (sum(if(lcase(str(?biospecie)) = 'http://java.icmc.usp.br/embrapa/biospecie', 1, 0)) as ?Embrapa)
                                            {  ?code rdf:type ?biospecie
                                            } " #"#" "%23")}
                                                                           :handler handler-statistics-data-sets
                                                                           :error-handler (fn [response] (js/console.log response))}))

(defn consult-statistics-years []
  (ajax/GET (str "http://java.icmc.usp.br:2190/repositories/" "Animalia") {:params {:query (clojure.string/replace "PREFIX iucn: <http://java.icmc.usp.br/iucn/>
                                            PREFIX bioprov: <http://java.icmc.usp.br/bioprov/>
                                            PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                                            PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                                            PREFIX geo: <http://www.opengis.net/ont/geosparql#>
                                            PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
                                            PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
                                            PREFIX time: <http://www.w3.org/2006/time#>
                                            PREFIX prov: <http://www.w3.org/ns/prov#>
                                            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                                            PREFIX geobio: <http://specieslink.br/extinsion>
                                            Select ?year (COUNT(?year) as ?yearCT)
                                            where {
                                                ?code prov:hadMember/bioprov:wasCollectedBy/bioprov:yearcollected ?yearcollected.
                                                bind( substr( str(?yearcollected), 1, 4) as ?year )
                                                FILTER(!isBlank(?year))
                                            } GROUP BY ?year
                                            ORDER BY ?year
                                            " #"#" "%23")}
                                                                           :handler handler-statistics-years
                                                                           :error-handler (fn [response] (js/console.log response))}))

(defn consult-statistics-country []
  (ajax/GET (str "http://java.icmc.usp.br:2190/repositories/" "Animalia") {:params {:query "PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
                    SELECT ?Country (COUNT(?Country) as ?CountryST) {
                      ?code dwc:country ?Country.
                    } GROUP BY ?Country
                      Order by ?Country"}
                                                                           :handler handler-statistics-country
                                                                           :error-handler (fn [response] (js/console.log response))}))

(defn download-csv []
  (if-not (nil? @csv-file)
    (save-file (str "csv(" (get @rdf-describe :name) ").csv") "text/csv" #js [(csv/write-csv @csv-file)])
    (alert "No results")))

(defn download-rdf []
  (if-not (nil? @rdf-describe)
    (ajax/GET (str "http://java.icmc.usp.br:2190/repositories/" "Animalia") {:params {:query (str "PREFIX iucn: <http://java.icmc.usp.br/iucn/>
                                   PREFIX bioprov: <http://java.icmc.usp.br/bioprov/>
                                   PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                                   PREFIX xsd: <http://www.w3.org/2001/XMLSchema%23>
                                   PREFIX geo: <http://www.opengis.net/ont/geosparql%23>
                                   PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
                                   PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
                                   PREFIX time: <http://www.w3.org/2006/time%23>
                                   PREFIX prov: <http://www.w3.org/ns/prov%23>
                                   PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns%23>
                                   PREFIX geobio: <http://specieslink.br/extinsion>
                                    Describe ?code
                                     WHERE { "
                                                                                                  (str " ?code dwc:scientificName '" (get @rdf-describe :name) "' . ")
                                                                                                  " ?code dwc:scientificName ?scientificname.
                                        ?code dwc:institutionCode ?institutionCode.
                                        ?code geo:hasGeometry/geo:asWKT ?wktA.
                                        ?code prov:hadMember/bioprov:wasCollectedBy/prov:startedAtTime ?dateCollected.
                                        ?code prov:hadMember/bioprov:wasCatalguingBy/prov:startedAtTime ?dateCataloguing.
                                        ?code prov:hadMember/bioprov:wasCollectedBy/prov:wasAssociatedWith/foaf:givenName ?nameCollected.
                                        ?code prov:hadMember/bioprov:wasCatalguingBy/prov:wasAssociatedWith/foaf:givenName ?nameCataloguing.
                                        ?code prov:hadMember/bioprov:wasCollectedBy/bioprov:yearcollected ?yearcollected.
                                        ?code dwc:kingdom ?kingdom.
                                        ?code dwc:phylum ?phylum.
                                        ?code dwc:class ?class.
                                        ?code dwc:order ?order.
                                        ?code dwc:family ?family.
                                        ?code dwc:genus ?genus.
                                        OPTIONAL { ?code dwc:country ?country. }
                                        OPTIONAL { ?code bioprov:sameSynonymIUCN ?sameAsIUCN.  }
                                        OPTIONAL { ?code bioprov:sameSynonymGBIF ?sameAsGBIF. }
                                        OPTIONAL { ?code bioprov:hasConservationStatus/dwc:occurrenceStatus ?occurrenceStatusIUCN1.}
                                        OPTIONAL { ?code dwc:occurrenceStatus ?occurrenceStatusIUCN2. }
                                        BIND(COALESCE(?occurrenceStatusIUCN1, ?occurrenceStatusIUCN2) as ?occurrenceStatusIUCN)
                                      " (if-not (clojure.string/blank? (get @rdf-describe :start-date)) (str " FILTER (?yearcollected >= '" (get @rdf-describe :start-date) "')") " ")
                                                                                                  (if-not (clojure.string/blank? (get @rdf-describe :end-date)) (str " FILTER (?yearcollected <= '" (get @rdf-describe :end-date) "')")  " ") " }")}
                                                                             :handler handler-rdf
                                                                             :error-handler (fn [response] (js/console.log response))})
    (alert "No results")))

(defn filter-query []
  (let [name (-> (js/document.getElementById "specie-filter") (.-value))
        start-date (-> (js/document.getElementById "start-date") (.-value))
        end-date (-> (js/document.getElementById "end-date") (.-value))
        query2 (str "PREFIX iucn: <http://java.icmc.usp.br/iucn/>
                                        PREFIX bioprov: <http://java.icmc.usp.br/bioprov/>
                                        PREFIX foaf: <http://xmlns.com/foaf/0.1/>
                                        PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
                                        PREFIX geo: <http://www.opengis.net/ont/geosparql#>
                                        PREFIX geof: <http://www.opengis.net/def/function/geosparql/>
                                        PREFIX dwc: <http://rs.tdwg.org/dwc/terms/>
                                        PREFIX time: <http://www.w3.org/2006/time#>
                                        PREFIX prov: <http://www.w3.org/ns/prov#>
                                        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
                                        PREFIX geobio: <http://specieslink.br/extinsion>
                                        Select ?code ?scientificname ?institutionCode ?occurrenceStatusIUCN ?sameAsGBIF ?sameAsIUCN ?country ?wktA ?dateCollected ?nameCollected ?dateCataloguing ?nameCataloguing ?kingdom ?phylum ?class ?order ?family ?genus
                                        where { "
                    (if-not (clojure.string/blank? name) (str " ?code dwc:scientificName '" name "' . "))
                    " ?code dwc:scientificName ?scientificname.
                                            ?code dwc:institutionCode ?institutionCode.
                                            ?code geo:hasGeometry/geo:asWKT ?wktA.
                                            ?code prov:hadMember/bioprov:wasCollectedBy/prov:startedAtTime ?dateCollected.
                                            ?code prov:hadMember/bioprov:wasCatalguingBy/prov:startedAtTime ?dateCataloguing.
                                            ?code prov:hadMember/bioprov:wasCollectedBy/prov:wasAssociatedWith/foaf:givenName ?nameCollected.
                                            ?code prov:hadMember/bioprov:wasCatalguingBy/prov:wasAssociatedWith/foaf:givenName ?nameCataloguing.
                                            ?code prov:hadMember/bioprov:wasCollectedBy/bioprov:yearcollected ?yearcollected.
                                            ?code dwc:kingdom ?kingdom.
                                            ?code dwc:phylum ?phylum.
                                            ?code dwc:class ?class.
                                            ?code dwc:order ?order.
                                            ?code dwc:family ?family.
                                            ?code dwc:genus ?genus.
                                            OPTIONAL { ?code dwc:country ?country. }
                                            OPTIONAL { ?code bioprov:sameSynonymIUCN ?sameAsIUCN.  }
                                            OPTIONAL { ?code bioprov:sameSynonymGBIF ?sameAsGBIF. }
                                            OPTIONAL { ?code bioprov:hasConservationStatus/dwc:occurrenceStatus ?occurrenceStatusIUCN1.}
                                            OPTIONAL { ?code dwc:occurrenceStatus ?occurrenceStatusIUCN2. }
                                            BIND(COALESCE(?occurrenceStatusIUCN1, ?occurrenceStatusIUCN2) as ?occurrenceStatusIUCN)
                                          " (if-not (clojure.string/blank? start-date) (str " FILTER (?dateCollected >= '" start-date "'^^xsd:dateTime )") " ")
                    (if-not (clojure.string/blank? end-date) (str " FILTER (?dateCollected <= '" end-date "'^^xsd:dateTime )")  " ") "}")]
    (if-not (and (clojure.string/blank? name) (clojure.string/blank? start-date) (clojure.string/blank? end-date))
      (do (reset! rdf-describe {:name name :start-date start-date :end-date end-date})
          (reset! progress "visible")
          (consult "Animalia" {:title name :query query2})))))

;; -------------------------
;; Views Functions


(defn drawer-click [] "Open drawer" (swap! drawer-status [true false]))
(defn drawer-click2 [] "Open drawer" (swap! drawer-status2 [true false]) (if (= @statitics-bol false) (do (consult-statistics)
                                                                                                          (consult-statistics-data-sets)
                                                                                                          (consult-statistics-years)
                                                                                                          (consult-statistics-country)
                                                                                                          (reset! statitics-bol true))))

(defn create-list "Create a list" [header]
  (fn [] [rui/selectable-list
          [rui/list-item {:value 0
                          :key 0
                          :style {:background-color (color :deep-orange300) :font-weight 500 :color (color :blue-grey900)}
                          :right-icon (ic/action-open-in-new {:style {:fill (color :blue-grey900)}})
                          :primary-text "Open Sparql Endpoint"
                          :on-click (fn [] (.open js/window "http://java.icmc.usp.br:2190/sparql" "_blank") (drawer-click))}]]))

(defn menu [app-content]
  [:div
   [rui/mui-theme-provider {:mui-theme (get-mui-theme {:palette {:primary1-color (color :blue500)}})}
    [rui/drawer {:open @drawer-status
                 :id "drawer"
                 :style {:background-color (color :grey50)}}
     [rui/app-bar {:title "Menu"
                   :icon-element-left (reagent/as-element [rui/icon-button
                                                           (ic/navigation-close)])
                   :onLeftIconButtonTouchTap (fn [e] (drawer-click))}]
     [create-list "Use Cases"]]]
   [:div#app-bar
    [rui/mui-theme-provider {:mui-theme (get-mui-theme {:palette {:primary1-color (color :blue500)}})}
     [rui/app-bar {:title "STBioData"
                   :titleStyle {:text-align "center"}
                   :icon-element-left (reagent/as-element [rui/flat-button {:label "Menu" :label-position "after" :icon (ic/navigation-menu) :style {:background-color "white" :margin-top "5px"}}])
                   :on-Left-Icon-Button-Touch-Tap (fn [e] (drawer-click))
                   :icon-element-right (reagent/as-element [rui/flat-button {:label "Statistics" :label-position "before" :icon (ic/navigation-menu) :style {:color "black" :background-color "white" :margin-top "5px"}}])
                   :on-right-Icon-Button-Touch-Tap (fn [e] (drawer-click2))}]]
    [:div#app-content
     app-content]]
   [rui/mui-theme-provider {:mui-theme (get-mui-theme {:palette {:primary1-color (color :blue500)}})}
    [rui/drawer {:open @drawer-status2
                 :id "drawer-statistics"
                 :width "100%"
                 :openSecondary true
                 :containerStyle {:background-color (color :blue-grey100)}}
     [rui/app-bar {:title "Statistics"
                   :icon-element-left (reagent/as-element [rui/icon-button
                                                           (ic/navigation-close)])
                   :onLeftIconButtonTouchTap (fn [e] (drawer-click2))}]

     [:div {:class "row" :style {:margin-right "0px" :margin-left "0px" :padding-top "10px"}}
      [:div {:class "col-lg-3"}
       [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
        [rui/card {:style {:height "400px"}} [rui/card-title {:title "Data metrics" :act-as-expander false :titleColor "white" :style {:background-color (color :orange700)}}]
         [rui/card-text
          [rui/list [rui/list-item {:value 0
                                    :key 0
                                    :left-icon (ic/social-public {:style {:fill (color :indigo700)}})
                                    :primary-text (str "Ocurrences: " (get @stat :ocurrences))}]
           [rui/divider]
           [rui/list-item {:value 1
                           :key 1
                           :left-icon (ic/notification-adb {:style {:fill (color :brown700)}})
                           :primary-text (str "Species: " (get @stat :species))}]
           [rui/divider]
           [rui/list-item {:value 2
                           :key 2
                           :left-icon (ic/action-bug-report {:style {:fill (color :orange700)}})
                           :primary-text (str "Animalia: " (get @stat :animalia))}]
           [rui/divider]
           [rui/list-item {:value 3
                           :key 3
                           :left-icon (ic/maps-local-florist {:style {:fill (color :green700)}})
                           :primary-text (str "Plantae: " (get @stat :plantae))}]
           [rui/divider]
           [rui/list-item {:value 4
                           :key 4
                           :left-icon (ic/maps-place {:style {:fill (color :red700)}})
                           :primary-text (str "Georeferenced: " (get @stat :geo-referenced))}]]]]]]
      [:div {:class "col-lg-3"}
       [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
        [rui/card {:style {:height "400px"}} [rui/card-title {:title "Datasets" :act-as-expander false :titleColor "white" :style {:background-color (color :green700)}}]
         [rui/card-text [rui/circular-progress {:size 60 :style {:top "50px" :left "calc(50% - 50px)" :display @progress-data-sets}}] [:div {:id "chart-data-sets" :style {:height "300px"}}]]]]]
      [:div {:class "col-lg-3"}
       [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
        [rui/card {:style {:height "400px"}} [rui/card-title {:title "Ocurrences in South America" :act-as-expander false :titleColor "white" :style {:background-color (color :deep-purple500)}}]
         [rui/card-text [rui/circular-progress {:size 60 :style {:top "50px" :left "calc(50% - 50px)" :display @progress-country}}] [:div {:id "chart-country" :style {:max-height "250px"}}]]]]]
      [:div {:class "col-lg-3"}
       [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
        [rui/card {:style {:height "400px"}} [rui/card-title {:title "Occurrences by year collected" :act-as-expander false :titleColor "white" :style {:background-color (color :cyan700)}}]
         [rui/card-text [rui/circular-progress {:size 60 :style {:top "50px" :left "calc(50% - 50px)" :display @progress-years}}] [:div {:id "chart-years" :style {:max-height "250px"}}]]]]]]]]])

;; -------------------------
;; Views

(defn home-page []
  (menu [:div
         [:div {:class "row" :style {:margin-right "0px" :margin-left "0px"}}
          [:div {:class "col-xs-12 col-sm-12 col-md-4 col-lg-4"}
           [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
            [rui/card [rui/card-title {:title "Search" :act-as-expander false :titleColor "white" :style {:background-color (color :orange700)}}]
             [rui/card-text [:div [rui/auto-complete {:id "specie-filter"
                                                      :placeholder "Enter species name"
                                                      :listStyle {:max-height "200px" :overflow "auto"}
                                                      :filter (aget js/MaterialUI "AutoComplete" "caseInsensitiveFilter")
                                                      :maxSearchResults 60
                                                      :fullWidth true
                                                      :dataSource @species-list}]
                             [:div {:class "row"}
                              [:div {:class "col-xs-6" :style {:overflow "hidden"}}
                               [rui/date-picker {:id "start-date" :placeholder "Start date" :textFieldStyle {:max-width "100%"} :container "inline" :autoOk true :maxDate (time/now) :minDate (time/date-time 1750 1 1)
                                                 :value @start-datePicker
                                                 :onChange (fn [null date] (reset! start-datePicker date))
                                                 :cancelLabel "Clear" :onDismiss (fn [] (reset! start-datePicker ""))}]]
                              [:div {:class "col-xs-6" :style {:overflow "hidden"}}
                               [rui/date-picker {:id "end-date" :placeholder "End date" :textFieldStyle {:max-width "100%"} :container "inline" :autoOk true :maxDate (time/now) :minDate (time/date-time 1750 1 1)
                                                 :value @end-datePicker
                                                 :onChange (fn [null date] (reset! end-datePicker date))
                                                 :cancelLabel "Clear" :onDismiss (fn [] (reset! end-datePicker ""))}]]]
                             [:div {:style {:top "10px"}}
                              [rui/raised-button {:label "Submit" :label-position "before" :icon (ic/action-search) :label-color (color :white) :background-color (color :brown400) :on-click (fn [e] (filter-query))}]
                              [rui/circular-progress {:size 30 :style {:top "10px" :left "10px" :visibility @progress}}]]]]]]
           [:div {:style {:margin-top "10px" :margin-bottom "10px"}}
            [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
             [rui/card [rui/card-title {:title (reagent/as-element [:span {:style {:font-size "20px"}} "BioProv"])
                                        :subtitle "A Provenance Model for Biodiversity Data"
                                        :subtitleStyle (clj->js {:color "white"})
                                        :act-as-expander false
                                        :titleColor "white"
                                        :style {:background-color (color :deep-purple500)}}]
              [rui/card-text
               [:div
                [:span [:b "Scientific Name: "] (get @prov :scientificName)] [:br]
                [:span [:b "Institution Code: "] (get @prov :institutionCode)] [:br]
                [:span [:b "Date Collected: "] (get @prov :dateCollected)] [:br]
                [:span [:b "Name Collected: "] (get @prov :nameColleted)] [:br]
                [:span [:b "Date Cataloguing: "] (get @prov :dateCataloguing)] [:br]
                [:span [:b "Species Authority: "] (get @prov :nameCataloguing)] [:br]]]]]]]
          [:div {:class "col-xs-12 col-sm-12 col-md-8 col-lg-8"}
           [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
            [rui/card [rui/card-title {:title @caseTitle :act-as-expander false :titleColor "white" :style {:background-color (color :green700)}}]
             [rui/card-media [create-map]]]]]]
         [:div {:class "row" :style {:margin-top "10px" :margin-right "0px" :margin-left "0px"}}
          [:div {:class "col-xs-12 col-sm-12 col-md-12 col-lg-12"}
           [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
            [rui/card {:style {:position "relative"}}
             [rui/card-title {:title "Search result"
                              :act-as-expander false
                              :titleColor "white"
                              :style {:background-color (color :blue500)}
                              :children [(reagent/as-element
                                          [rui/icon-menu {:style {:position "absolute" :top "16px" :right "16px" :z-index 2}
                                                          :icon-button-element (reagent/as-element [rui/raised-button {:label "Download"
                                                                                                                       :label-position "after"
                                                                                                                       :icon (ic/file-cloud-download)}])
                                                          :children [(reagent/as-element
                                                                      [rui/menu-item {:value "1" :primary-text "CSV Format" :on-click (fn [] (download-csv))}])
                                                                     (reagent/as-element
                                                                      [rui/menu-item {:value "2" :primary-text "RDF Format" :on-click (fn [] (download-rdf))}])]}])]}]
             [rui/card-text @data-table]]]]]]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root)
  (consult-especies-list)
  (.load js/google.charts "current" (clj->js {:packages ["corechart"]})))
