package main

import (
    "encoding/json"
    "github.com/gorilla/mux"
    "log"
    "net/http"
)

type Article struct {
    ID string `json:"id,omitempty"`
    Name string `json:"name,omitempty"`
    ShortText string `json:"shortText,omitempty"`
    FullText string `json:"fullText,omitempty"`
    CreationDate int `json:"creationDate,omitempty"`
    ImageUrl string `json:"imageUrl,omitempty"`
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
    article = append(article, Article{
        ID: "1", 
        Name: "The question is: What does it cost us if we do not take climate measures?", 
        CreationDate: 1543236187381, 
        ShortText: "We wonder; Was this a lawsuit against the State or in the interests of the State? The State is Us. Households, companies, politics, government and our economy. And climate change is an immediate danger to our prosperity.",
        FullText: "We wonder; Was this a lawsuit against the State or in the interests of the State? The State is Us. Households, companies, politics, government and our economy. And climate change is an immediate danger to our prosperity.Meanwhile, the emphasis of the political discussion is on the expected high costs and who will bear these costs. Companies or citizens? That is a shame because that principle does not get us any further. It gives the impression that climate measures generate considerable costs. But they do not cost us anything. They are investments. The real question is what it will cost us if we do not make those investments.",
        ImageUrl: "https://ecochain.com/wp-content/uploads/2018/10/Hotel-industry-page-2.jpg",
    })
    
    article = append(article, Article{
        ID: "2", 
        Name: "Can we calculate that? Yes we can", 
        CreationDate: 1543006185670, 
        ShortText: "Driven by the urgency, there are worldwide efforts to define standards that can express our environmental impact in costs. Already in 2013, scientists and economic experts from the U.N.-supported organization the Economics and Ecosystems of Biodiversity, have made a well-calculated estimate of environmental costs, published in the pioneering study Natural Capital at Risk – de Top 100 Externalities of Business.",
        FullText: "Driven by the urgency, there are worldwide efforts to define standards that can express our environmental impact in costs. Already in 2013, scientists and economic experts from the U.N.-supported organization the Economics and Ecosystems of Biodiversity, have made a well-calculated estimate of environmental costs, published in the pioneering study Natural Capital at Risk – de Top 100 Externalities of Business. In this research report, a firm impetus was made to quantify the extent to which the economy depends on goods and services from natural resources. The study found that primary manufacturing and processing industries (agriculture, forestry, fisheries, mining, oil and gas exploration, utilities, and the chemical industry) generate around $ 7.3 trillion of environmental damage worldwide; read the economic costs of environmental impacts such as greenhouse gas emissions, the loss of natural resources, and nature-related services such as forest carbon storage or air pollution. A long list. And let us not forget the related health costs. The contribution of natural resources to our global economy is about 10 percent of the GWP (Gross World Product) of approximately $ 75 trillion. That makes our natural capital – including the sources that influence our climate – vital for our economy and our prosperity.",
        ImageUrl: "https://ecochain.com/wp-content/uploads/2018/10/urgenda-fights-for-our-natural-capital.png",
    })
    
    article = append(article, Article{
        ID: "3", 
        Name: "Importance of Sustainability in Hospitality", 
        CreationDate: 1521006185670, 
        ShortText: "The demand for sustainable products and services is growing. Initially, sustainability predominantly focused on the production industry, yet, over the past years tourism experienced an increase of demand, too. In 2017, already 87% of travelers rated sustainability as an important factor for them and almost 40% actively made use of more sustainable travel and lodging options.",
        FullText: "The demand for sustainable products and services is growing. Initially, sustainability predominantly focused on the production industry, yet, over the past years tourism experienced an increase of demand, too. In 2017, already 87% of travelers rated sustainability as an important factor for them and almost 40% actively made use of more sustainable travel and lodging options. Furthermore, two third of travelers indicated that they would be willing to pay at least 5% extra for a more sustainable alternative. This trend has also been recognized by travel agencies, 58% of all ANVR members noticed a rising demand for eco-holidays (the ANVR is the Dutch branch association for the travel industry). The tourism sector is responsible for 8% of the global greenhouse gas emissions (ABN-AMRO: Groen is Poen), ranking hotels as the second largest polluters. In Amsterdam alone hotels are responsible for the emission of roughly 700.000 tons of CO2 every year, which can be translated to environmental damages worth €75 million (Ecochain). Due to this relatively high environmental impact, hotels are explicitly addressed in the Paris Climate accord to reduce their CO2-emissions by 66% in 2030.",
        ImageUrl: "https://ecochain.com/wp-content/uploads/2018/09/Milestone-350000-footprints-LCAs-Ecochain.jpg",
    })

    article = append(article, Article{
        ID: "4", 
        Name: "Sustainability Labels as Guides", 
        CreationDate: 1525006185670, 
        ShortText: "To accommodate the growing demand, by now over 800 sustainability labels and certificates are available. These labels help to guide both guests and businesses towards making sustainable choices. In fact, in 2017 one third of Dutch businesses declared that they no longer consider booking hotels without sustainability labels for their employees. (Research by ABN AMRO)",
        FullText: "To accommodate the growing demand, by now over 800 sustainability labels and certificates are available. These labels help to guide both guests and businesses towards making sustainable choices. In fact, in 2017 one third of Dutch businesses declared that they no longer consider booking hotels without sustainability labels for their employees. (Research by ABN AMRO) These labels are a great step forwards, yet they primarily base their evaluation of the environmental performance of hotels on qualitative, static lists as opposed to quantitative methodologies that provide scientifically validated measurements. As a result, these labels can currently not represent hotels that go beyond their sustainable requirements. Based on the use of qualitative lists, it is hard to identify the exact environmental impacts of hotels and provide insights into the origin of these impacts and these qualitative labels don’t provide insights into opportunities to improve sustainable performance. To arrive at these insights, hotels need to consider quantitative methodologies that allow hoteliers to reduce their environmental footprint by diving into the details so they can tackle specific issues.",
        ImageUrl: "https://ecochain.com/wp-content/uploads/2018/09/Blog-image-partnership.jpg",
    })
    
    router.HandleFunc("/article/", GetAllArticleList).Methods("GET")
    router.HandleFunc("/article/{id}", GetArticle).Methods("GET")
    router.PathPrefix("/").Handler(http.FileServer(http.Dir("./dist")))
    log.Fatal(http.ListenAndServe(":8000", router))
}