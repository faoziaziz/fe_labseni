/*
  author : Aziz Amerul Faozi
  desc: siapa hayo yah
*/

import React, {useState, Fragment, useEffect} from 'react';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import axios from 'axios';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';
import {
    Form,
    Row,
    Col,
    Container,
    Button,
    Navbar,
    Jumbotron} from 'react-bootstrap';
import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';
import {Helmet} from 'react-helmet';


const PostItem =()=>{

}

/* This notes just for show the posting from google */
const Admin =()=>{
    const [data, setData]=useState({items: []})
    const [title, setTitle]=useState(document.title);
    const [additem, setAddItem]=useState({items: []});
    
    useEffect(()=>{

	setTitle("Notes");
	
	const fetchData = async ()=>{
	    const result = await axios(
		`https://labseni.com:8082/api/itemhome`,
	    );

	    setData(result.data);
	    
	}
	document.title=title;
	fetchData();
	
    }, []);

    return (
	<div>
	  <Header />

	  {
	      /*
		This code body form 
	      */
	  }

	  <Container>

	    <Form>
	      <Form.Group controlId="textarea">
		<Form.Label>Email address</Form.Label>
		<Form.Control type="textarea" placeholder="textid" />
		
	      </Form.Group>

	      
	    
	    
	      <Form.Group controlId="exampleForm.ControlInput1">
		<Form.Label>Email address</Form.Label>
		<Form.Control type="email" placeholder="name@example.com" />
	      </Form.Group>
	      <Form.Group controlId="exampleForm.ControlSelect1">
		<Form.Label>Example select</Form.Label>
		<Form.Control as="select">
		  <option>1</option>
		  <option>2</option>
		  <option>3</option>
		  <option>4</option>
		  <option>5</option>
		</Form.Control>
	      </Form.Group>

	      <Form.Group controlId="exampleForm.ControlTextarea1">
		<Form.Label>Example textarea</Form.Label>
		<Form.Control as="textarea" rows={3} />
	      </Form.Group>
	        <Button variant="primary" type="submit">
		Submit
	      </Button>
	    </Form>
	    
	  </Container>
	  
	  <Footer />
	</div>
    );

}


export default Admin;
