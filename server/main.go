package main

import (
	"log"
	"net/http"

	"github.com/gilwong00/server/pkg/handlers"
	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter().StrictSlash(true)
	r.Use(mux.CORSMethodMiddleware(r))

	r.HandleFunc("/api/health", handlers.HealthCheck).Methods("GET")

	log.Println("Listening on port 5000. 🚀")
	log.Fatal(http.ListenAndServe(":5000", r))
}
