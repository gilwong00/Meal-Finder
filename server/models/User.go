package models

import (
	"time"
)

type User struct {
	Id           int       `json:"id"`
	Email        string    `json:"email"`
	Password     string    `json:"password"`
	DateCreated  time.Time `json:"dateCreated"`
	DateModified time.Time `json:"dateModified"`
}
