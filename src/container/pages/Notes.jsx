/*
  author : Aziz Amerul Faozi
  desc: siapa hayo yah
*/

import React, {useState, Fragment, useEffect} from 'react';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import axios from 'axios';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';

import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';

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
	<div>
	  <Header />
	<div style={{backgroundColor: 'white'}}>
	  <ul>
	  {
	      data.items.map(item=>(
		 <div>
		  <a href={`https://labseni.com/notes/${item.id}`}>{item.title}</a>
		  
		    {parse(item.content)}
		 </div>
	      )
			    )
	  }
	  </ul>
	    </div>
	    <Footer />
	    </div>
    );

}


export default Notes;
