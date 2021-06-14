
/*
author : Aziz Amerul Faozi
desc : this code used for nothing.
*/


import React, { useState, Fragment, useEffect } from 'react';
import parse, { domToReact, htmlToDOM } from 'html-react-parser';
import axios from 'axios';
import { useParams } from 'react-router';
import { Button, Row, Col, Container, Navbar, Jumbotron } from 'react-bootstrap';
import Header from '../../component/headers/Header';
import Footer from '../../component/footers/Footer';

import ControlledCarousel from '../../component/headers/ControlledCarousel';
import IntervalCarousel from '../../component/headers/IntervalCarousel';
import Moment from 'react-moment'

/* post data harus dirubah dari bentuk api */
const postsData = require('./_posts.json');


/*
used for show post
*/


const findPostBySlug = (slug, data) => {
    /* find by slug */
    return data.posts.filter(o => o.slug.includes(slug));
}

export default function Berita() {

    const [data, setData] = useState({ posts: [] })
    const [postingan, setPostingan] = useState({ items: [] })


    useEffect(() => {

        const fetchData = async () => {
            const result = await axios(
                `https://faoziaziz.id/wp-json/wp/v2/posts?categories=3`,
            );

            setData({posts: result.data});
        }


        fetchData();



    }, []);

    var { slug } = useParams();
    var post = { posts: findPostBySlug(slug, data) };



    return (<div>
        <Header />

        

        <div className="post-content-view">


            <div style={{ backgroundColor: 'white' }}>
                <Container>

                    {
                        post.posts.map(item => (
                            <Jumbotron>

                                <h1 className="display-3" style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }} >{item.title.rendered}</h1>
                            </Jumbotron>


                        )

                        )

                    }
                    <Row>
                        <Col xs={9}>
                            <Container>
                                <div style={{ backgroundColor: 'white' }}>
                                    {
                                        post.posts.map(item => (

                                            <div>

                                                <strong><Moment date={item.date} /></strong>


                                                {parse(item.content.rendered)}
                                            </div>
                                        )
                                        )
                                    }
                                </div>
                            </Container>
                        </Col>


                        <Col xs={3}>
                           
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        <Footer />
    </div>

    );

}



