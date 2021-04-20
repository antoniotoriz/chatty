package main

import (
	config "chatty/config"
	utils "chatty/utils"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"net/http"
	"os"
)

func main() {
	godotenv.Load()
	fmt.Println(
		fmt.Sprintf("%s%s%s%s", "Server will start at http://", os.Getenv("HOST"), ":", os.Getenv("PORT")),
	)
	config.ConnectDatabase()
	route := mux.NewRouter()
	AddApproutes(route)
	serverPath := ":" + os.Getenv("PORT")
	cors := utils.GetCorsConfig()
	http.ListenAndServe(serverPath, cors.Handler(route))
}
