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
const Product =()=>{
    const [data, setData]=useState({posts: []})
    const [title, setTitle]=useState(document.title);
    const [data2, setData2]=useState({});
    useEffect(()=>{

	setTitle("Notes");
	
	const fetchData = async ()=>{
	    const result = await axios(
		`https://faoziaziz.id/wp-json/wp/v2/posts?categories=2`,
	    );

	    const result2 = await axios(
		`https://api.prasimax.net:8000/status`,
	    );

	    setData({posts: result.data});
	    setData2(result2.data);
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
            <title>Product</title>
            <meta name="description" content="Kumpulan tulisan blog yang diwebkan" />x
	    
	</Helmet>

	    <div style={{backgroundColor: 'white'}}>
	    <Jumbotron>
	    
	    <h1 className="display-3"  style={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	    }} >Product</h1>

	    <p className="lead"  style={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	    }}> Apasih yang labseni selesai buat? </p>
	    
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


export default Product;
