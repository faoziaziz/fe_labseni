import React, { useState } from 'react';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';
import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';
import {
    Jumbotron, 
    Button,
    Container,
    Carousel,
} from 'react-bootstrap';
const Home=()=>{
    

    return (
        <div style={{backgroundColor: 'black'}}>
            <Header />
            <Container>
            <IntervalCarousel />
            </Container>
            <hr/>
            <div style={{backgroundColor: '#006b76'}}>
                <Container style={{color: 'white'}}>
                    <p>Project</p>
                </Container>
            </div>
            <hr />
            <div style={{backgroundColor: '#4caf50'}}>
            
                <Container style={{color: 'white'}}>
                    <p>Product</p>
                </Container>
            </div>
            <hr />
            <div style={{backgroundColor: '#006b76'}}>
                <Container style={{color: 'white'}}>
                   <p>Software</p>
                </Container>
            </div>
            <hr />
            <div style={{backgroundColor: '#4caf50'}}>
            
                <Container style={{color: 'white'}}>
                    <p>Shop</p>
                </Container>
            </div>
            
            <hr />
            <Footer />
        </div>
    );

}

export default Home;