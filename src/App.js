import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import NewsCards from './components/NewsCards'
import { Routes } from 'react-router-dom';
const API_KEY = process.env.REACT_APP_KEY;

function News() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2022-04-02&' +
          'sortBy=popularity&' +
          'apiKey=a57ce69f66c642589f4848126f16cb2a';
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
                      <NewsCards
                          data={data}
                      />
                  )}
              />
          </Routes>   
        </Router>
      </div>
    );
    
}

export default News;
