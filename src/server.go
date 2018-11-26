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
    FullText  string   `json:"fullText,omitempty"`
    CreationDate int `json:"creationDate,omitempty"`
}

var article []Article

// Display all from the article var
func GetAllArticleList(w http.ResponseWriter, r *http.Request) {
    var articlesWithoutFullText []Article
    for _, item := range article {
        item.FullText = ""
        articlesWithoutFullText = append(articlesWithoutFullText, item)
    }
    json.NewEncoder(w).Encode(articlesWithoutFullText)
}

// Display a single data
func GetArticle(w http.ResponseWriter, r *http.Request) {
    params := mux.Vars(r)
    for _, item := range article {
        if item.ID == params["id"] {
            item.ShortText = ""
            json.NewEncoder(w).Encode(item)
            return
        }
    }
    json.NewEncoder(w).Encode(&Article{})
}

func main() {
    router := mux.NewRouter()
    // MOCK
    article = append(article, Article{ID: "1", Name: "The question is: What does it cost us if we do not take climate measures?", CreationDate: 1543236187381, FullText: "We wonder; Was this a lawsuit against the State or in the interests of the State? The State is Us. Households, companies, politics, government and our economy. And climate change is an immediate danger to our prosperity.Meanwhile, the emphasis of the political discussion is on the expected high costs and who will bear these costs. Companies or citizens? That is a shame because that principle does not get us any further. It gives the impression that climate measures generate considerable costs. But they do not cost us anything. They are investments. The real question is what it will cost us if we do not make those investments.", ShortText: "We wonder; Was this a lawsuit against the State or in the interests of the State? The State is Us. Households, companies, politics, government and our economy. And climate change is an immediate danger to our prosperity."})
    article = append(article, Article{ID: "2", Name: "Can we calculate that? Yes we can", CreationDate: 1543006185670, FullText: "Driven by the urgency, there are worldwide efforts to define standards that can express our environmental impact in costs. Already in 2013, scientists and economic experts from the U.N.-supported organization the Economics and Ecosystems of Biodiversity, have made a well-calculated estimate of environmental costs, published in the pioneering study Natural Capital at Risk – de Top 100 Externalities of Business. In this research report, a firm impetus was made to quantify the extent to which the economy depends on goods and services from natural resources. The study found that primary manufacturing and processing industries (agriculture, forestry, fisheries, mining, oil and gas exploration, utilities, and the chemical industry) generate around $ 7.3 trillion of environmental damage worldwide; read the economic costs of environmental impacts such as greenhouse gas emissions, the loss of natural resources, and nature-related services such as forest carbon storage or air pollution. A long list. And let us not forget the related health costs. The contribution of natural resources to our global economy is about 10 percent of the GWP (Gross World Product) of approximately $ 75 trillion. That makes our natural capital – including the sources that influence our climate – vital for our economy and our prosperity.", ShortText: "Driven by the urgency, there are worldwide efforts to define standards that can express our environmental impact in costs. Already in 2013, scientists and economic experts from the U.N.-supported organization the Economics and Ecosystems of Biodiversity, have made a well-calculated estimate of environmental costs, published in the pioneering study Natural Capital at Risk – de Top 100 Externalities of Business."})
    
    router.HandleFunc("/article/", GetAllArticleList).Methods("GET")
    router.HandleFunc("/article/{id}", GetArticle).Methods("GET")
    router.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist")))
    log.Fatal(http.ListenAndServe(":8000", router))
}