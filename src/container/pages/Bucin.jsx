/*
  author : Aziz Amerul Faozi
  desc: Siapa hayo yah
*/

import React, {useState, Fragment, useEffect} from 'react';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import axios from 'axios';
import {Row, Col, Container, Button, Navbar, Jumbotron} from 'react-bootstrap';



/* 
   bucin project 
*/
const Bucin =()=>{

    const [data, setData]=useState({items: []})

    useEffect(()=>{
	const fetchData = async()=>{
	    const result = await axios(`https://www.googleapis.com/blogger/v3/blogs/3986791581824110654/posts?labels=Bucin&key=AIzaSyBQCg4liKjaGn5MoGBmsGUFjU0W5ejuCZY`,);

	    setData(result.data);

	}

	fetchData();

    }, []);

    
    return (
        <div>
          <Header/>
	  <Container>
          <p>Bucin</p>
	  </Container>

	   <Footer/>

        </div>
    );
}

export default Bucin;
