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
  const API_BASE_URL = 'https://newsapi.org/v2/everything?';
  const API_BASE_SEARCH_KEYWORD = 'Google';
  useEffect(() => {
    const url = API_BASE_URL +
          `q=${API_BASE_SEARCH_KEYWORD}&` +
          'from=2022-04-02&' +
          'sortBy=relevance&' +
          'apiKey=3883022e9b294a0f9c42dfd8edfb6cd6&'+
          'pageSize=99';
    // const url="";
    var req = new Request(url);
    console.log(req);
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
                        <Header/>
                        <SearchTab/>
                        <NewsCards
                            data={data}
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
