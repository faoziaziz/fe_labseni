
import axios, { post } from 'axios';
import React, {useState, Fragment, useEffect} from 'react';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';
import {Row, Col, Container, Button, Navbar, Jumbotron} from 'react-bootstrap';
import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';
import {Helmet} from 'react-helmet';
import Moment from 'react-moment'

const OCR =()=> {

    
    const [data, setData]=useState({});
    const [file, setFile]=useState({file: null});
    const [hasilOCR, setHasilOCR]=useState({})
    
  const onFormSubmit=(e)=>{
    e.preventDefault() // Stop form submit
      fileUpload(file.file).then((response)=>{
	  
	  setHasilOCR(response.data);
    })
  }
  const onChange=(e)=> {
    setFile({file:e.target.files[0]})
  }
  const fileUpload=(file)=>{
    const url = 'https://ai.faoziaziz.id:7001/images';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }

  
    return (<div>
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
	    }} >OCR Geje</h1>

	    <p className="lead"  style={{
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	    }}> Optical Character Recognition gak jelas .</p>
	    
	    </Jumbotron>

	      
      <form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
	    <p>Hsil OCr</p>
	    <p>{hasilOCR.hasil_ocr}</p>
	    </div>
	    </div>
   )
  
}



export default OCR;
