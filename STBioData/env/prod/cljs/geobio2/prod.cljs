(ns stbiodata.prod
  (:require [stbiodata.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
