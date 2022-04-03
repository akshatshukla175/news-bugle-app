import React from 'react'
const Sentiment = require('sentiment');
var sentiment = new Sentiment();

const NewsCards = (props) => {
    console.log(props.data);
    function getDate(isodate) {
        const date = new Date(isodate);
        return date;
    };
    function extractSentiment(content) {
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
        return (   
        <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white w-screen">
        <img class="w-full" src={card.urlToImage} alt="" />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{card.title}</div>
            <p class="text-gray-700 text-base">
            {card.description}
            </p>
            <a class="font-bold-text-xl" href={card.url}>Read More</a>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{card.source.name}</span>
            <span class="inline-block bg-blue-800 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">{getDate(card.publishedAt).toDateString()}</span>
            <span class={extractSentiment(card.content)}></span>
        </div>
        </div>
    )});
    return (
        <div class="bg-indigo-100 mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-screen">    
        {newscards}
        </div>
    );  
    }
    
    
}

export default NewsCards;