/*
  author : Aziz Amerul Faozi
  desc: siapa hayo yah
*/

import React, {useState, Fragment, useEffect} from 'react';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import axios from 'axios';


/* This notes just for show the posting from google */
const Notes =()=>{
    const [data, setData]=useState({items: []})

    useEffect(()=>{
	const fetchData = async ()=>{
	    const result = await axios(
		`https://www.googleapis.com/blogger/v3/blogs/3986791581824110654/posts?key=AIzaSyBQCg4liKjaGn5MoGBmsGUFjU0W5ejuCZY`,
	    );

	    setData(result.data);
	}
	
	fetchData();
	
    }, []);

    return (
	<div style={{backgroundColor: 'white'}}>
	  <ul>
	  {
	      data.items.map(item=>(
		  <li key={item.id}>
		    <a href={`http://localhost:3000/notes/${item.id}`}>{item.title}</a>
		    {parse(item.content)}
		  </li>
	      )
			    )
	  }
	  </ul>
	</div>
    );

}


export default Notes;
