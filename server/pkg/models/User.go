package models

import (
	"time"
)

type User struct {
	Id        uint32    `gorm:"primary_key; auto_increment" json:"id"`
	Email     string    `gorm:"size:100; not null; unique;" json:"email"`
	Password  string    `json:"password"`
	CreatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP;" json:"created_at"`
	UpdatedAt time.Time `gorm:"default:CURRENT_TIMESTAMP;" json:"updated_at"`
}
