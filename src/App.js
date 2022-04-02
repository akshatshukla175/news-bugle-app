import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";

import NewsCards from './components/NewsCards'
import SearchTab from './components/SearchTab'
import { Routes } from 'react-router-dom';
const API_KEY = process.env.REACT_APP_KEY;

function News() {
  const [data, setData] = useState([]);
  const API_BASE_URL = 'https://newsapi.org/v2/everything?';
  const API_BASE_SEARCH_KEYWORD = 'Bitcoin';
  useEffect(() => {
    const url = API_BASE_URL +
          `q=${API_BASE_SEARCH_KEYWORD}&` +
          'from=2022-04-02&' +
          'sortBy=popularity&' +
          'apiKey=3883022e9b294a0f9c42dfd8edfb6cd6';
    var req = new Request(url);
    console.log(req);
    const getNews = async() => {
      try {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
      } catch (error) {
        console.log(error)
      }
    }
    getNews();
  },[]);
 
  
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
                      <div>
                        {/* <Header/> */}
                      </div>,
                      <div>
                        <SearchTab/>
                      </div>,
                      <div>
                        <NewsCards
                            data={data}
                        />
                      </div> 
                    </div>                
                  )}
              />
          </Routes>   
        </Router>
      </div>
    );
    
}

export default News;
