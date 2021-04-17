
/*
  author : Aziz Amerul Faozi
  desc : this code used for nothing.
*/


import React, {useState, Fragment, useEffect} from 'react';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import axios from 'axios';
import {useParams} from 'react-router';
import {Button, Navbar, Jumbotron} from 'react-bootstrap';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';

import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';
/* post data harus dirubah dari bentuk api */
const postsData = require('./_posts.json');


/*
  used for show post
*/


const findPostBySlug=(slug, data)=>{
    console.log("ampas")
    console.log( data);
    console.log("slug");
    console.log(slug);
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
	
	/*
	const fetchData = () =>{
	    axios.get('https://jsonplaceholder.typicode.com/posts')
	        .then(resp => {
		    setData(resp.data);
		      var {slug}=useParams(),
			  post = data.items.find(o=>o.id===slug);
		    setPostingan(post);
		})
	        .catch(err => {
		    // Handle Error Here
		    console.error(err);
		});

	}*/
	fetchData();
	
	
	
    }, []);

    var {slug}=useParams();
    var post = {items: findPostBySlug(slug, data)};

    console.log("posteing");
    console.log(post);
    console.log("title2")
    console.log(post.items.title);
    

    return (<div>
	    <Header />
	    
            <div className="post-content-view">
	    
	  
	    	<div style={{backgroundColor: 'white'}}>
	  <ul>
	  {
	      post.items.map(item=>(
		      
		  <div>
		    <Jumbotron>
	      
	      <h1 className="display-3"  style={{
		      display: "flex",
		      justifyContent: "center",
		      alignItems: "center"
		  }} >{item.title}</h1>
	    </Jumbotron>
		    
		    
		    
		    {parse(item.content)}
		  </div>
	      )
			    )
	  }
	  </ul>
	</div>
            </div>
	    <Footer />
	    </div>
	
    );

}



