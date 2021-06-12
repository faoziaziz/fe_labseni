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
import Moment from 'react-moment'

/* This notes just for show the posting from google */
const News =()=>{
    const [data, setData]=useState({posts: []})
    const [title, setTitle]=useState(document.title);
    const [data2, setData2]=useState({});
    useEffect(()=>{

	setTitle("Notes");
	
	const fetchData = async ()=>{
	    const result = await axios(
		`https://faoziaziz.id/wp-json/wp/v2/posts?categories=3`,
	    );


	    setData({posts: result.data});
 
	}
	document.title=title;
	fetchData();
	
    }, []);

    return (
	<div>
	  {
	      //console.log(data.content.rendered)
	      console.log(data)
	  }
	    <Header />
	    <Helmet>
            <title>Notes</title>
            <meta name="description" content="Kumpulan tulisan blog yang diwebkan" />x
	    
	</Helmet>

	    <div style={{backgroundColor: 'white'}}>
	    <Jumbotron>
	    
	    <h1 className="display-3"  style={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	    }} >Jumpa Pens</h1>

	    <p className="lead"  style={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	    }}> Apa sih yang sedang labseni kerjakan.</p>
	    
	    </Jumbotron>

	    
	    <Container>
	    <Row>  
	    <Col xs={9}>
	    <Container>

	       {
	      data.posts.map(item=>(
		      
		  <div>
		    <h1>{item.title.rendered}</h1>
		    {parse(item.content.rendered)} 
	
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


export default News;
