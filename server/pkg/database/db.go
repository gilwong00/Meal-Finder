package database

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/gilwong00/server/pkg/models"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func Connect() *gorm.DB {
	var DB *gorm.DB
	err := godotenv.Load()

	if err != nil {
		log.Fatal("Error getting env vars", err)
		os.Exit(1)
	}

	dbPort, err := strconv.Atoi(os.Getenv("DB_PORT"))

	if err != nil {
		log.Fatalln(err)
	}

	host, port, user, password, dbname :=
		os.Getenv("DB_HOST"),
		dbPort,
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME")

	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s", host, port, user, password, dbname)

	DB, err = gorm.Open(postgres.Open(psqlInfo), &gorm.Config{})

	if err != nil {
		fmt.Println(err.Error())
		panic("Cannot connect to DB")
	}

	DB.AutoMigrate(&models.User{})

	return DB
}
