import './App.css';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_KEY;

function News() {
  const [value, setValue] = useState("");
  let newscards;
  async function getNews() {
    const response = await fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-04-02&sortBy=popularity&apiKey=3883022e9b294a0f9c42dfd8edfb6cd6");
    const result = await response.json();
    newscards = result.articles.map((a) => { return (
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src={a.urlToImage} alt="" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{a.title}</div>
        <p class="text-gray-700 text-base">
          {a.description}
        </p>
        <a class="font-bold-text-xl" href={a.url}>Read More</a>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
  </div>
  )
   
 });
  setValue(newscards);
}
  getNews();
  console.log(newscards);
  return <div>{value}</div>
}

export default News;
