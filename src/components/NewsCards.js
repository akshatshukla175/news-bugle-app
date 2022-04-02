import React from 'react'

const NewsCards = (props) => {
    console.log(props.data);
    if (props.data != null & props.data.articles != null) {
        const newscards = props.data.articles.map((card) => 
    { 
        return (   
        <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" src={card.urlToImage} alt="" />
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{card.title}</div>
            <p class="text-gray-700 text-base">
            {card.content}
            </p>
            <a class="font-bold-text-xl" href={card.url}>Read More</a>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Author Article</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Published</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"></span>
        </div>
        </div>
    )});
    return (
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">    
        {newscards}
        </div>
    );    
    }
    
    
}

export default NewsCards;