package main

import (
    "encoding/json"
    "github.com/gorilla/mux"
    "log"
    "net/http"
)

type Article struct {
    ID        string   `json:"id,omitempty"`
    Name string   `json:"name,omitempty"`
    ShortText  string   `json:"shortText,omitempty"`
}

var article []Article

// Display all from the article var
func GetPeople(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(article)
}

// Display a single data
func GetArticle(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    for _, item := range article {
        if item.ID == params["id"] {
            json.NewEncoder(w).Encode(item)
            return
        }
    }
    json.NewEncoder(w).Encode(&Article{})
}

// create a new item
func CreateArticle(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    var art Article
    _ = json.NewDecoder(r.Body).Decode(&art)
    art.ID = params["id"]
    article = append(article, art)
    json.NewEncoder(w).Encode(article)
}

// Delete an item
func DeleteArticle(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    for index, item := range article {
        if item.ID == params["id"] {
            article = append(article[:index], article[index+1:]...)
            break
        }
        json.NewEncoder(w).Encode(article)
    }
}

// main function to boot up everything
func main() {
    router := mux.NewRouter()
    article = append(article, Article{ID: "1", Name: "Article 1", ShortText: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using."})
    article = append(article, Article{ID: "2", Name: "Article 2", ShortText: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."})
    router.HandleFunc("/article", GetPeople).Methods("GET")
    router.HandleFunc("/article/{id}", GetArticle).Methods("GET")
    router.HandleFunc("/article/{id}", CreateArticle).Methods("POST")
    router.HandleFunc("/article/{id}", DeleteArticle).Methods("DELETE")
    router.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist")))
    log.Fatal(http.ListenAndServe(":8000", router))
}