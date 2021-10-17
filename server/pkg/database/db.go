package database

import (
	"fmt"
	"log"
	"os"
	"strconv"

	"github.com/jmoiron/sqlx"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

func Connect() *sqlx.DB {
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

	db, err := sqlx.Connect("postgres", psqlInfo)

	if err != nil {
		log.Fatalln(err)
	}

	return db
}
