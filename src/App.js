import './App.css';
import { useState } from 'react';

function News() {
  const [value, setValue] = useState("");
  getNews()
}

async function getNews() {
  const response = await fetch("REQUEST");
  const request = await response.json;
  console.log(request);
  console.log(request.articles)
}

export default News;
