/*
  author : Aziz Faozi
  desk  :   
*/

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from './container/pages/Home.jsx';
import Blog from './container/pages/Blog.jsx';

import Post from './container/pages/Post.jsx';
import Notes from './container/pages/Notes.jsx';


import {
  Route,
  Switch,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';

import About from './container/pages/About'
//import Login from 'container/pages/Login'

/*
  This is routing codes
*/
const routing=(
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/home" component={Home} />

	<Route exact path="/about" component={About} />
	<Route exact path="/notes" component={Notes} />
	<Route path="/post/:slug" component={Post} /> 
	<Route exact path="/about" component={About} />

	   

    </div>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
