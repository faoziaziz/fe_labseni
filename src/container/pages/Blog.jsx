<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

// read JSON data
const postsData = require("./_posts.json");

export default function Blog() {
  const posts = postsData.map(post => {
    return (
      <Link to={"/post/" + post.slug} key={post.slug}>
        <div className="post-listing">
          <h1>{post.title}</h1>
        </div>
      </Link>
    );
  });

  return <div className="blog">{posts}</div>;
}
=======
/*
  username : Aziz Amerul Faozi
  description: ini halaman untuk page blog.
*/

import React, {useState} from 'react';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';
import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';
import {
    Jumbotron,
    Button,
    Container,
    Carousel,
    Row,
    Col,
    ListGroup
} from 'react-bootstrap';


/*
  deskripsi : harusnya bagian ini ngepost sama nge get dari blogger api.
  blogId=3986791581824110654
  key=AIzaSyBQCg4liKjaGn5MoGBmsGUFjU0W5ejuCZY 
*/



const Blog=()=> {
    return (
	<div style={{backgroundColor: 'black'}}>
	  /* nested div pertama */
	  <Header />
	  <div>
	    <ListGroup>
	      
	    </ListGroup>
	    </div>


	  /* akhir nested div pertama */
	  </div>
    );

}


export default Blog;
>>>>>>> beec401... mantap
