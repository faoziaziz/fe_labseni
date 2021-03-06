
/*
  author : Aziz Amerul Faozi
  desc : this code used for nothing.
*/


import React, {useState, Fragment, useEffect} from 'react';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import axios from 'axios';
import {useParams} from 'react-router';
import {Button, Row, Col,Container, Navbar, Jumbotron} from 'react-bootstrap';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';

import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';
import Moment from 'react-moment'

/* post data harus dirubah dari bentuk api */
const postsData = require('./_posts.json');


/*
  used for show post
*/


const findPostBySlug=(slug, data)=>{
    
    console.log(data.items.filter(o=>o.id.includes(slug)));
    return data.items.filter(o=>o.id.includes(slug));
}

export default function Post(){

    const [data, setData]=useState({items: []})
    const [postingan, setPostingan]=useState({items: []})

   
    useEffect(()=>{
	
	const fetchData = async ()=>{
	    const result = await axios(
		`https://www.googleapis.com/blogger/v3/blogs/3986791581824110654/posts?key=AIzaSyBQCg4liKjaGn5MoGBmsGUFjU0W5ejuCZY`,
	    );

	    setData(result.data);
	}
	
	
	fetchData();
	
	
	
    }, []);

    var {slug}=useParams();
    var post = {items: findPostBySlug(slug, data)};

    

    return (<div>
	    <Header />

	    {
		console.log(data.items)
	    }
	    
            <div className="post-content-view">
	    
	  
	    <div style={{backgroundColor: 'white'}}>
	    <Container>
	    
	    {
		post.items.map(item=>(
		     <Jumbotron>
	      
	      <h1 className="display-3"  style={{
		      display: "flex",
		      justifyContent: "center",
		      alignItems: "center"
		  }} >{item.title}</h1>
		     </Jumbotron>


		)

			      )

	    }
	    <Row>
	    <Col xs={9}>
	    <Container>
	    <div style={{backgroundColor: 'white'}}>  
	  {
	      post.items.map(item=>(
		      
		  <div>
		   
		     <strong><Moment date={item.published} /></strong>
		    
		    
		    {parse(item.content)}
		  </div>
	      )
			    )
	  }
	    </div>
	    </Container>
	    </Col>

	    
	    <Col xs={3}>
	    <h2>Ini harusnya list label</h2>
	    <p>MAntap</p>
	    </Col>
	    </Row>
	    </Container>
	</div>
            </div>
	    <Footer />
	    </div>
	
    );

}



