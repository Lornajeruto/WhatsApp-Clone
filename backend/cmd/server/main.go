package main

import (
	"log"
	"net/http"
	"whatsapp_clone/pkg/handlers"
	"whatsapp_clone/pkg/websocket"
)

func main() {
	go websocket.HubInstance.Run()
	http.HandleFunc("/", handlers.ServeHome)
	http.HandleFunc("/ws", handlers.ServeWs)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
