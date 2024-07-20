(ns geoqb.components
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :refer [get-mui-theme color]]
            [cljs-react-material-ui.reagent :as rui]
            [cljs-react-material-ui.icons :as ic]
            [reagent.core :as reagent :refer [atom]]
            [cljs-time.core :as time]
            [gmaps.core :as gmaps]))

;;------------#_(Utils)-----------------
(defn json->clj "Convert the ajax response in clj" [json-string]
  (js->clj (.parse js/JSON json-string)))

(defmacro timeout-macro "Execute functions in sync way" [& body]
  (reduce
   (fn [x y]
     `(timer/callOnce (fn [] ~x ~y) 1000))
   `(fn [])
   (reverse body)))

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
;;-----------#_(Components)-------------

(defn combo-select-list [type list quant all]
  (let [component-state (atom {:btn-all {:text "Select all"
                                         :icon (ic/av-playlist-add-check)}})
        update-list! (fn [list type f & args] (apply swap! list update-in [(keyword type)] f args) )
        reset-list! (fn [list type] (dotimes [i (count ((keyword type) @list))]
                                      (swap! list assoc-in [(keyword type) i :checked] false)))
        select-all-list! (fn [list type] (dotimes [i (count ((keyword type) @list))]
                                            (swap! list assoc-in [(keyword type) i :checked] true) ))
        add-item! (fn [list type c] (update-list! list type conj c) )
        update-item! (fn [list type i] (swap! list assoc-in [(keyword type) i :checked] (if (-> ((keyword type) @list) (get i) :checked) false true)) )
        btn-all-status (fn [list type] (if #_(comment "Verifies that all items are selected")
                                           (= (count ((keyword type) @list)) (count (filter #(:checked %) ((keyword type) @list))))
                                           (swap! component-state assoc-in [:btn-all] {:text "Deselect all" :icon (ic/action-delete)})
                                           (swap! component-state assoc-in [:btn-all] {:text "Select all" :icon (ic/av-playlist-add-check)}) ))
        btn-all-click (fn [list type] (if #_(comment "Buttons actions")
                                          (= (count ((keyword type) @list)) (count (filter #(:checked %) ((keyword type) @list))))
                                          (reset-list! list type)
                                          (select-all-list! list type))
                                      (btn-all-status list type))]
    (reagent/create-class
      {:component-did-mount
        #()
      :component-will-mount
        #()

      :display-name "combo-select-list"

      :reagent-render
        (fn [type list quant all]
          [:div
              [rui/auto-complete {
                :id (str "select-field-" type)
                :key (str "select-field-" type)
                :placeholder (clojure.string/capitalize type)
                :listStyle {
                  :max-height "200px"
                  :overflow "auto"}
                :filter (aget js/MaterialUI "AutoComplete" "caseInsensitiveFilter")
                :maxSearchResults 60
                :fullWidth true
                :openOnFocus true
                :searchText ""
                :onNewRequest (fn [request index]
                                (if (> index -1)
                                    (do (if (or (= 0 quant)
                                                (or (get-in @list [(keyword type) index :checked])
                                                    (> quant (count (filter #(:checked %) ((keyword type) @list)))) ) )
                                            (update-item! list type index))
                                            (if all
                                                (btn-all-status list type)) )) )
                :dataSource (map-indexed (fn [idx item] {:text (:name item)
                                                         :value (reagent/as-element
                                                                  [rui/menu-item {
                                                                  :key (str "item-combo-" type "-" idx)
                                                                  :checked (:checked item)
                                                                  :primaryText (:name item)
                                                                  :value (:name item) }]
                                                                )}) ((keyword type) @list))
            }]
            [rui/menu {:multiple true
                       :maxHeight 190
                       :style {:max-width "100%"}}
               (if all
                   [rui/menu-item {
                     :key (str "item-list-" type "-all")
                     :rightIcon (:icon (:btn-all @component-state))
                     :primaryText (:text (:btn-all @component-state))
                     :value "all"
                     :onTouchTap (fn [] (btn-all-click list type)) }] )
                (doall (for [i (range (count ((keyword type) @list))) :when (-> ((keyword type) @list) (get i) :checked) ]
                  ^{:key i}
                    [rui/menu-item {
                      :key (str "item-list-" type "-" i)
                      :leftIcon (ic/content-remove-circle-outline)
                      :primaryText (-> ((keyword type) @list) (get i) :name )
                      :style {:max-width "100%"}
                      :value (-> ((keyword type) @list) (get i) :name )
                      :onTouchTap (fn [] (update-item! list type i)
                                         (if (> (count ((keyword type) @list)) (count (filter #(:checked %) ((keyword type) @list))))
                                             (swap! component-state assoc-in [:btn-all] {:text "Select all" :icon (ic/av-playlist-add-check)}))) }]

                ))
            ]
          ]
        )
      }
    )
  )
)


(defn yasqe [text]
  (let [yasqe-elem (atom ())]
    (reagent/create-class {
      :component-did-mount
        (fn [this]
          (reset! yasqe-elem (js/YASQE. (.getElementById js/document "yasqe")
                                        (clj->js {
                                          :createShareLink false
                                          :readOnly true
                                          :sparql {
                                            :showQueryButton false
                                            :endpoint "http://java.icmc.usp.br:2190/sparql"}})))
          (.setValue @yasqe-elem text)
        )
      :component-will-mount
        #()
      :component-did-update (fn [state next-state]  )

      :display-name "Yet-Another-Sparql-Query-Editor"

      :reagent-render
        (fn [text]
            [:div {:id "yasqe"}]
        )
    })
  )
)

(defn draw-charts "1-Pie 2-Colum 3-Donnut 4-Geo 5-line 6-Scatter" [id title vec type]
  (let [container (.getElementById js/document id)
        chart (case type
                    1 (js/google.visualization.PieChart. container)
                    2 (js/google.visualization.ColumnChart. container)
                    4 (js/google.visualization.GeoChart. container)
                    5 (js/google.visualization.LineChart. container)
                    6 (js/google.visualization.ScatterChart. container)
                    (js/google.visualization.PieChart. container) )
        options (clj->js {:title title :region "005" :pieHole (if (= type 3) 0.4 0) :colorAxis {:colors [(color :amber300) (color :lime400) (color :light-green400) (color :green300)]} :chartArea {:left 10 :top 10 :width "100%" :height 160} :titleTextStyle {:fontSize 14} })
        data-table (js/google.visualization.DataTable.)]

        (case type
          4 (doto data-table
                (.addColumn "string" "Country")
                (.addColumn "number" "Ocurrences")
                (.addRows (clj->js vec )))
            (doto data-table
                  (.addColumn "string" "Topping")
                  (.addColumn "number" "Slices")
                  (.addRows (clj->js vec)))
        )
        (.draw chart data-table options)
))

(defn create-table [input-table]
  [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
    [rui/table {
      :height "auto"
      :fixed-header true
      :multi-selectable false
      :display-row-checkbox false}
      [rui/table-header
        {:display-select-all  false
         :adjust-for-checkbox false}
        [rui/table-row
          (for [i  (range (count (get input-table 0)))] ^{:key i}
            [rui/table-header-column (get (get input-table 0) i)])]
      ]
      [rui/table-body {:display-row-checkbox false}
        (for [i (range 1 (count input-table))] ^{:key i}
          [rui/table-row
            (let [row-data (get input-table i)]
              (for [ii (range (count row-data))]
                (let [cell-datum (get row-data ii)] ^{:key ii}
                  [rui/table-row-column cell-datum] ) ) ) ])

      ]
    ]])

(defn create-table-geobio [input-table]
  (let [data-table (object-array input-table)]
    [rui/mui-theme-provider {:mui-theme (get-mui-theme)}
      [rui/table {
        :bodyStyle {:overflow "visible"}
        :style {:table-layout "auto"}
        :fixed-header false
        :multi-selectable false
        :display-row-checkbox false}
        [rui/table-header
          {:display-select-all  false
           :adjust-for-checkbox false}
          [rui/table-row
            [rui/table-header-column "#"]
            [rui/table-header-column "Scientific Name"]
            [rui/table-header-column "ID"]
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
            [rui/table-header-column "Same as IUCN"]
          ]
        ]
        [rui/table-body {:display-row-checkbox false :preScanRows false}
          (for [i (range (count data-table))] ^{:key i}
            [rui/table-row
              [rui/table-row-column {:id (+ 1 i)} (+ 1 i)]
              [rui/table-row-column (get (get (get data-table i) "scientificname") "value")]
              [rui/table-row-column (get (get (get data-table i) "CodSpecie") "value")]
              [rui/table-row-column (get (get (get data-table i) "kingdom") "value")]
              [rui/table-row-column (get (get (get data-table i) "phylum") "value")]
              [rui/table-row-column (get (get (get data-table i) "class") "value")]
              [rui/table-row-column (get (get (get data-table i) "order") "value")]
              [rui/table-row-column (get (get (get data-table i) "family") "value")]
              [rui/table-row-column (get (get (get data-table i) "genus") "value")]
              [rui/table-row-column (get (get (get data-table i) "institutionCode") "value")]
              [rui/table-row-column (get (get (get data-table i) "occurrenceStatusIUCN") "value")]
              [rui/table-row-column (get (get (get data-table i) "pontowkt") "value")]
              [rui/table-row-column [:a {:href (get (get (get data-table i) "country") "value") :target "blank"} (get (get (get data-table i) "country") "value")] ]
              [rui/table-row-column (get (get (get data-table i) "dateCollected") "value")]
              [rui/table-row-column (get (get (get data-table i) "nameCollected") "value")]
              [rui/table-row-column (get (get (get data-table i) "dateCataloguing") "value")]
              [rui/table-row-column (get (get (get data-table i) "nameCataloguing") "value")]
              [rui/table-row-column (let [same_gbif (get (get (get data-table i) "sameAsGBIF") "value")] (if (nil? same_gbif) " " [:a {:href same_gbif :target "blank"} same_gbif]) ) ]
              [rui/table-row-column (let [same_iucn (get (get (get data-table i) "sameAsIUCN") "value")] (if (nil? same_iucn) " " [:a {:href same_iucn :target "blank"} same_iucn]) ) ]
            ])
        ]
      ]]
     ))

(defn teste [num]
  (reset! num (inc @num)))
