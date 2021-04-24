/*
  author : Aziz Amerul Faozi
  desc: siapa hayo yah
*/

import React, {useState, Fragment, useEffect} from 'react';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import axios from 'axios';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';
import {Row, Col, Container, Button, Navbar, Jumbotron} from 'react-bootstrap';
import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';
import {Helmet} from 'react-helmet';

/* This notes just for show the posting from google */
const Notes =()=>{
    const [data, setData]=useState({items: []})
    const [title, setTitle]=useState(document.title);
    
    useEffect(()=>{

	setTitle("Notes");
	
	const fetchData = async ()=>{
	    const result = await axios(
		`https://www.googleapis.com/blogger/v3/blogs/3986791581824110654/posts?key=AIzaSyBQCg4liKjaGn5MoGBmsGUFjU0W5ejuCZY`,
	    );

	    setData(result.data);
	}
	document.title=title;
	fetchData();
	
    }, []);

    return (
	<div>
	  <Header />
	  <Helmet>
            <title>Notes</title>
            <meta name="description" content="Kumpulan tulisan blog yang diwebkan" />
	  </Helmet>

	  <div style={{backgroundColor: 'white'}}>
	    <Jumbotron>
	      
	      <h1 className="display-3"  style={{
		      display: "flex",
		      justifyContent: "center",
		      alignItems: "center"
		  }} >Notes</h1>

	      <p className="lead"  style={{
		     display: "flex",
		     justifyContent: "center",
		     alignItems: "center"
		 }}> Catatan dari blog.</p>
	      
	    </Jumbotron>
	    <Container>
	      <Row>  
		<Col xs={9}>
		  <Container>
		    {
			data.items.map(item=>(
			    <div>
			      
			      <h2><a href={`https://labseni.com/notes/${item.id}`}>{item.title}</a></h2>
			      <strong>{item.published}</strong>
			      
			      {
				  parse(item.content)
			      }
			      <hr />
			    </div>
			)
				      )
		    }
	</Container>
	    
	</Col>
	    <Col xs={3}>
	    <p>akus sih tahu </p>
	    </Col>
	    </Row>
	    </Container>
	    </div>
	    <Footer />
	    </div>
    );

}


export default Notes;
