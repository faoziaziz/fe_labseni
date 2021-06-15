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
const Notes =()=>{

    /* set function */

    const [data, setData]=useState({items: []})
    const [title, setTitle]=useState(document.title);
    const [data2, setData2]=useState({});
    const [prev, setPrev]=useState("");
    const [now, setNow]=useState("");
    const [next, setNext]=useState("");

    
    useEffect(()=>{

	setTitle("Notes");
	
	const fetchData = async (now)=>{

	    if (now===""){

		const result = await axios(
		`https://www.googleapis.com/blogger/v3/blogs/3986791581824110654/posts`,
		{
		    params:
		    {
			key: "AIzaSyBQCg4liKjaGn5MoGBmsGUFjU0W5ejuCZY",
			

		    }

		    }
		);

			    setData(result.data);
		

	    } else {

		/* if not empty string now */
		const result = await axios(
		    `https://www.googleapis.com/blogger/v3/blogs/3986791581824110654/posts`,
		    {
			params:
			{
			    key: "AIzaSyBQCg4liKjaGn5MoGBmsGUFjU0W5ejuCZY",
			    nextPageToken: now,
			    

			}

		    }
		);
			    setData(result.data);

	    }

	    


	    
	}
	document.title=title;

	    const interval=setInterval(()=>{
		fetchData(now)
	    },1000)
       
       
	return()=>clearInterval(interval)
	
	
    },[now]);

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
		 }}> Catatan dari blog. man</p>
	      
	    </Jumbotron>
	    <Container>
	      <Row>  
		<Col xs={9}>
		  <Container>
		    {
			data.items.map(item=>(
			    <div>
			      
			      <h2><a href={`https://labseni.com/notes/${item.id}`}>{item.title}</a></h2>
			      <strong><Moment date={item.published} /></strong>
			      
			      {
				  parse(item.content)
			      }
			      <hr />
			    </div>
			)
				      )
		    }
	</Container>

	    <button onClick={()=>setNow(data.nextPageToken)}>  {now}  : {data.nextPageToken}
	</button>
	    
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
