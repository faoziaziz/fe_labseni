
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
import {encode, decode} from 'base-64';
import useSound from 'use-sound';
import {filename, enc_str} from './audio.json';
import {useAudio} from 'react-use';

const initial=[
    {
	count: 0,
	filename: "80030113-4f81-469d-84db-20c7726f459b",
	username: "Jean paul sartre",
	label: "hai indi",
	longitude: 123.432,
	latitude: 321.321,
	umur: 0,
	level_test: null,
	indikator: null
    },
    {
	count: 1,
	filename: "25a8492d-f7b4-46ad-953a-9ede2996caad",
	username: "Jean paul sarte",
	label: "hai indi",
	longitude: 123.432,
	latitude: 321.321,
	umur: 0,
	level_test: null,
	indikator: null
    }
]

const AudioRender = ({codeAudio}) => {

    
    
    const [audio, state, controls, ref] = useAudio({
	src: 'https://faoziaziz.id/'+codeAudio+'.wav',
	autoPlay: true,
    });

    return (
	<div>
	  
	  
	  {audio}
	  <pre>{JSON.stringify(state, null, 2)}</pre>
	  <button onClick={controls.pause}>Pause</button>
	  <button onClick={controls.play}>Play</button>
	  <br/>
	  <button onClick={controls.mute}>Mute</button>
	  <button onClick={controls.unmute}>Un-mute</button>
	  <br/>
	  <button onClick={() => controls.volume(.1)}>Volume: 10%</button>
	  <button onClick={() => controls.volume(.5)}>Volume: 50%</button>
	  <button onClick={() => controls.volume(1)}>Volume: 100%</button>
	  <br/>
	  <button onClick={() => controls.seek(state.time - 5)}>-5 sec</button>
	  <button onClick={() => controls.seek(state.time + 5)}>+5 sec</button>
	  

      	  
	</div>
    );
};
const Walkto =()=>{
        const [data, setData]=useState({items: initial})
    const [total, setTotal]=useState(0)
    const [now, setNow]=useState(1)

    useEffect(()=>{

	const fetchData = async ()=>{
	    const result= await axios("https://nemo.prasimax.net:6002/listdata",);
	    setData({items: result.data.items})
	    setTotal(result.data.total)

	}

	fetchData()

    },[])

    return (
	<div>
	  <Header/>
	 
	  <div>
	    
	    {data.items.filter(filter=>filter.count==now).map(item=>(
		<div>
		   
		  <h1>{item.filename}</h1>
		  <p>{item.username}</p>
		  <AudioRender codeAudio={item.filename}/>
		</div>

	    ))}


	</div>
	    <div>
	    <button onClick={()=>setNow(now+1)}>Next</button>
	    </div>
	    <Footer/>
	    </div>

    );

}

export default Walkto;
