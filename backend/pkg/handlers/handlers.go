package handlers

import (
	"net/http"
	"whatsapp_clone/pkg/websocket"
)

func ServeHome(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "static/index.html")
}

func ServeWs(w http.ResponseWriter, r *http.Request) {
	websocket.ServeWs(w, r)
}
