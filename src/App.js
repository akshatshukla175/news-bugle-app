import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";

import NewsCards from './components/NewsCards'
import SearchTab from './components/SearchTab'
import Header from './components/Header'
import Footer from './components/Footer';
import { Routes } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_KEY;

function News() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [country, setCountry] = useState("");
  const [category, setCategory] = useState("general");
  const [baseURL, setBaseURL] = useState("https://newsapi.org/v2/top-headlines?");
  const [url, setURL] = useState([""]);
  const [positive, setPositive] = useState(false)

  const API_BASE_SEARCH_URL = 'https://newsapi.org/v2/everything?';
  const API_BASE_EXPLORE_URL = 'https://newsapi.org/v2/top-headlines?';

  function handleKeyword(value) {
    setKeyword(value);
  }

  function handleCountry(value) {
    setCountry(value);
  }

  function handleCategory(value) {
    setCategory(value);
  }

  function handleBaseURL(value) {
    setBaseURL(value);
  }

  function handlePositive() {
    setPositive(!positive)
  }
  
  function handleButtonClick(value) {
    handleBaseURL(API_BASE_EXPLORE_URL);
    handleCountry("");
    handleCategory("");
    if(value === "in")
      handleCountry(value);
    else
      handleCategory(value);
    
  }

  function handleSearch(value) {
    handleBaseURL(API_BASE_SEARCH_URL);
    handleKeyword(value);
  }


  useEffect(() => {

    
    if (baseURL === API_BASE_EXPLORE_URL)
    {
      
        const new_url = baseURL +
          `category=${category}&`+
          `apiKey=${API_KEY}&`+
          `country=${country}&`+
          `language=en&`+
          `pageSize=9`;
        setURL(new_url);
    
    
    }
    else
    {
      const new_url = baseURL +
          `q=${keyword}&` +
          `sortBy=relevance&` +
          `language=en&`+
          `apiKey=${API_KEY}&`+
          `pageSize=9`;
      setURL(new_url);

    }
    console.log(url);
    var req = new Request(url);
    const getNews = async() => {
      try {
        fetch(req)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
      } catch (error) {
        console.log(error)
      }
    }
    getNews();
  },[baseURL, category, country, keyword, url,positive]);
 
  
  console.log(data);
  return (
    <div className="ui container">
        <Router>
          <Routes>
            <Route
                  path="/"
                  exact
                  element={(
                    <div>
                        <Header/>
                        <SearchTab
                            handleButtonClick={handleButtonClick}
                            handleSearch={handleSearch}
                            handlePositive={handlePositive}
                            positive={positive}
                        />
                        <NewsCards
                            data={data}
                            keyword={keyword}
                            country={country}
                            category={category}
                            positive={positive}
                        />
                        <Footer/>
                    </div>                
                  )}
              />
          </Routes>   
        </Router>
      </div>
    );
    
}

export default News;
