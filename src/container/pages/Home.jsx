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
    Row,
    Col,
    ListGroup
} from 'react-bootstrap';
const Home = () => {


    return (
        <div style={{ backgroundColor: 'black' }}>
            <Header />
            
            
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
                    <ListGroup.Item  variant="success">
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