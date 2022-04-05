import React from 'react'
const Sentiment = require('sentiment');
var sentiment = new Sentiment();

const NewsCards = (props) => {
    console.log(props.data);
    function getDate(isodate) {
        const date = new Date(isodate);
        return date;
    };

    function getHeading(category,country,keyword) {
        if(keyword !== "" )
            return keyword;
        let value = category;
        if (value === "")
            value = country;
        switch(value) {
            case "general":
              return "Global";
            case "global":
               return "Global";
            case "world":
                return "Global"; 
            case "science":
                return "Science"
            case "in":
                return "India";
            case "politics":
                return "Politics";
            case "technology":
                return "Tech";
            case "health":
                return "Health"
            case "entertainment":
                return "Entertainment";
            case "sports":
                return "Sports";
            case "business":
                return "Business";
            case "breaking-news":
                return "Breaking";         
            default:
               return ""; 
              // code block
          } 
    }
    
    function extractSentiment(content) {
        if(content === null)
            return `inline-circle bg-yellow-400 rounded-full px-4 py-1 text-sm font-semibold text-white mr-2 mb-2`;
        const val = sentiment.analyze(content).comparative;
        let color;
        if (val > 0)
            color =  "green";
        else if (val === 0)
            color = "yellow";
        else
            color = "red";
        return `inline-circle bg-${color}-400 rounded-full px-4 py-1 text-sm font-semibold text-white mr-2 mb-2`;
    };

    if (props.data != null & props.data.articles != null) {
        const newscards = props.data.articles.map((card) => 
    { 
        if (props.positive === false || (props.positive === true && extractSentiment(card.content) !== `inline-circle bg-red-400 rounded-full px-4 py-1 text-sm font-semibold text-white mr-2 mb-2`))
        return (   
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white w-screen">
        <img class="w-full" src={card.image} alt="" />
        <div class="px-6 py-6">
            <div class="font-bold text-xl mb-2">{card.title}</div>
            <p class="text-gray-700 text-base">
            {card.description}
            </p>
            <a class="font-bold-text-xl" href={card.url}>Read More</a>
        </div>
        <div class="px-6 pt-6 pb-2">
            <span class="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{card.source.name}</span>
            <span class="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{getDate(card.publishedAt).toDateString()}</span>
            <span class={extractSentiment(card.content)}></span>
        </div>
        </div>
        )
       
});
    return (
        <div>
        <div className="flex align-center justify-center font-bold text-2xl text-black w-screen shadow-lg rounded "> 
            <div>{getHeading(props.category,props.country,props.keyword)} News</div>
        </div>
        <div class="bg-indigo-100 p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-screen">   
        {newscards}
        </div>
        </div>
        
    );  
    }
    
    
}

export default NewsCards;