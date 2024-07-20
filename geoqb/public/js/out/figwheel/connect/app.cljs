(ns figwheel.connect.app (:require [figwheel.client] [figwheel.client.utils] [geoqb.dev]))
(figwheel.client/start {:open-urls ["http://localhost:3449/index.html"], :build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

