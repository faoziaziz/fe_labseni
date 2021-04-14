
/*
  author : Aziz Amerul Faozi
  desc : this code used for nothing.
*/


import React, {useState, Fragment, useEffect} from 'react';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import axios from 'axios';
import {useParams} from 'react-router';

/* post data harus dirubah dari bentuk api */
const postsData = require('./_posts.json');


/*
  used for show post
*/


const findPostBySlug=(slug, data)=>{
    console.log("ampas")
    console.log( data);
       return data.items.find(o=>o.id===slug);
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

    var {slug}=useParams(),
	post = findPostBySlug(slug, data);

    
    

    return (
        <div className="post-content-view">
            <h1 className="title">{post.items.title}</h1> 
            <content>{post.items.content}</content>   
        </div>
    );

}



