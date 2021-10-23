package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"

	_ "github.com/lib/pq"
)

type Stock struct {
	Last_tx string  `json:"last_tx"`
	Price   float32 `json:"price"`
	Ticker  string  `json:"ticker"`
}

const (
	host     = "0.0.0.0"
	port     = 5433
	user     = "postgres"
	password = "admin"
	dbname   = "test"
)

func OpenConnection() *sql.DB {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)

	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	return db
}

func GETHandler(w http.ResponseWriter, r *http.Request) {
	db := OpenConnection()

	rows, err := db.Query("SELECT * FROM marketdata ORDER BY last_tx DESC LIMIT 1")
	if err != nil {
		log.Fatal(err)
	}

	var stocks []Stock

	for rows.Next() {
		var stock Stock
		rows.Scan(&stock.Last_tx, &stock.Price, &stock.Ticker)
		stocks = append(stocks, stock)
	}
	stocksBytes, _ := json.MarshalIndent(stocks, "", "\t")
	w.Header().Set("Content-Type", "application/json")
	w.Write(stocksBytes)

	defer rows.Close()
	defer db.Close()
}

func POSTHandler(w http.ResponseWriter, r *http.Request) {
	db := OpenConnection()

	var s Stock
	err := json.NewDecoder(r.Body).Decode(&s)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	sqlStatement := `INSERT INTO marketdata (ticker, price) VALUES ($MSFT, $537)`
	_, err = db.Exec(sqlStatement, s.Ticker, s.Price)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		panic(err)
	}

	w.WriteHeader(http.StatusOK)
	defer db.Close()
}

func main() {
	fmt.Print("API initiated")
	http.HandleFunc("/api/stocks", GETHandler)
	http.HandleFunc("/api/insert", POSTHandler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
