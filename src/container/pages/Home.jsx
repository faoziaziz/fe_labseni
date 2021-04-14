/*
  username : Aziz Amerul Faozi
  description: 
  ini bagian halaman utama
*/
<<<<<<< HEAD
import React, { useState, Fragment, useEffect} from 'react';
=======
import React, { useState } from 'react';
>>>>>>> beec401... mantap
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';
import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';
import axios from 'axios';
import {
    Jumbotron,
    Button,
    Container,
    Carousel,
    Row,
    Col,
    ListGroup
} from 'react-bootstrap';
<<<<<<< HEAD

/* 
   This function of Home Page
*/
const Home = () => {
    const [data, setData]=useState({hits: []});
    const [query, setQuery]=useState('redux');
    const [search, setSearch]=useState('');

    useEffect(()=>{
	const fetchData = async ()=> {
	    const result = await axios(
		`http://hn.algolia.com/api/v1/search?query=${query}`,
	    );

	    setData(result.data);
	}
	fetchData();

    }, [query]);

    
=======
const Home = () => {

>>>>>>> beec401... mantap


    return (
        <div style={{ backgroundColor: 'black' }}>
            <Header />
<<<<<<< HEAD
            {
		/*
		  test frament 
		 */
	    }
            <div>
	      <Fragment>
		<input
		  type="text"
		  value={query}
		  onChange={event=>setQuery(event.target.value)}
		  />
		  <button type="button" onClick={()=>setSearch(query)}>
		    Search
		  </button>

		  <ul>
		    {
			data.hits.map(item=>(
			    <li key={item.objectID}>
			      <a href={item.url}>{item.title}</a>
			    </li>
			

			)
		    )}
		  </ul>
		</Fragment>
	    </div>

	    
=======
            
            
>>>>>>> beec401... mantap
            <div>
                <ListGroup>
                    <ListGroup.Item style={{backgroundColor: 'black'}}>
                        <IntervalCarousel />
                    </ListGroup.Item>

		    <ListGroup.Item variant="secondary">
                        <Container>
                            Riset
                            <ListGroup horizontal className="my-2" >
                                <ListGroup.Item>This ListGroup</ListGroup.Item>
                                <ListGroup.Item>renders horizontally</ListGroup.Item>
                                <ListGroup.Item>on </ListGroup.Item>
                                <ListGroup.Item>and above!</ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </ListGroup.Item>
<<<<<<< HEAD
                    <ListGroup.Item  variant="success">
=======

		    <ListGroup.Item  variant="success">
>>>>>>> beec401... mantap
                        <Container>
                            Product
                            <ListGroup horizontal className="my-2" >
                                <ListGroup.Item>This ListGroup</ListGroup.Item>
                                <ListGroup.Item>renders horizontally</ListGroup.Item>
                                <ListGroup.Item>on </ListGroup.Item>
                                <ListGroup.Item>and above!</ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </ListGroup.Item>
<<<<<<< HEAD
=======

>>>>>>> beec401... mantap
                    <ListGroup.Item variant="light">
                        <Container>
                            Project
                            <ListGroup horizontal className="my-2" >
                                <ListGroup.Item>This ListGroup</ListGroup.Item>
                                <ListGroup.Item>renders horizontally</ListGroup.Item>
                                <ListGroup.Item>on </ListGroup.Item>
                                <ListGroup.Item>and above!</ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </ListGroup.Item>
                   
                    <ListGroup.Item variant="warning">
                        <Container>
                            Shop
                            <ListGroup horizontal className="my-2" >
                                <ListGroup.Item>This ListGroup</ListGroup.Item>
                                <ListGroup.Item>renders horizontally</ListGroup.Item>
                                <ListGroup.Item>on </ListGroup.Item>
                                <ListGroup.Item>and above!</ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </ListGroup.Item>

                    <ListGroup.Item variant="info">
                        <Container>
                            Konsultasi
                            <ListGroup horizontal className="my-2" >
                                <ListGroup.Item>
                                    Harusnya ini Gambar : ini bagian text
                                </ListGroup.Item>
                                <ListGroup.Item>renders horizontally</ListGroup.Item>
                                <ListGroup.Item>on </ListGroup.Item>
                                <ListGroup.Item>and above!</ListGroup.Item>
                            </ListGroup>
                        </Container>
                    </ListGroup.Item>
                 
                </ListGroup>
            </div>
           
            
            <Footer />
        </div>
    );

}

export default Home;
