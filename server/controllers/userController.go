package controllers

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/gilwong00/server/database"
	"github.com/gilwong00/server/models"
)

func CreateUser(w http.ResponseWriter, r *http.Request) {
	defer r.Body.Close()

	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	var user models.User
	json.Unmarshal(body, user)

	db := database.Connect()

	db.Close()

	w.WriteHeader(http.StatusCreated)
	w.Header().Add("Content-Type", "application/json")
	json.NewEncoder(w).Encode(user)
}
