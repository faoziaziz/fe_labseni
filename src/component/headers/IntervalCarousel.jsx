import {
    Carousel,
    Container,
    Col,
    Row,
    Button
} from 'react-bootstrap';
import boxcousel from '../../assets/boxcousel.svg';

/*
    please note that if u use jsx 
    u should declare function in fisrt Capital letter
*/
const GetName =(props)=>{
    return (
        <div style={{color: 'white'}}>
            <p>kamu {props.name}</p> 
        </div>
    );
}

/* the main function for interval carousel */
const IntervalCarousel = () => {

    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Container>
                        <Row>
                            <Col xs={9} md={6}>
                                <img
                                    className="d-block w-100"
                                    src={boxcousel}
                                    alt="First slide"
                                />
                            </Col>
                            <Col xs={9} md={6} style={{color: 'white'}}>
                                <p>Riset deskription </p>
                                <Button>Check detail</Button>
                            </Col>
                        </Row>
                    </Container>

                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Container>
                        <Row>
                            <Col xs={9} md={6}>
                                <img
                                    className="d-block w-100"
                                    src={boxcousel}
                                    alt="First slide"
                                />
                            </Col>
                            <Col xs={9} md={6} style={{color: 'white'}}>
                                <GetName name='Mantap'/>
                                <p>Software description </p>
                                <Button>Check detail</Button>
                               
                            </Col>
                        </Row>


                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col xs={9} md={6}>
                                <img
                                    className="d-block w-100"
                                    src={boxcousel}
                                    alt="First slide"
                                />
                            </Col>
                            <Col xs={9} md={6} style={{color: 'white'}}>
                                <p>Shop deskription </p>
                                <Button>Check detail</Button>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container>
                        <Row>
                            <Col xs={9} md={6}>
                                <img
                                    className="d-block w-100"
                                    src={boxcousel}
                                    alt="First slide"
                                />
                            </Col>
                            <Col xs={9} md={6} style={{color: 'white'}}>
                                <p>Konsultasi deskription </p>
                                <Button>Check detail</Button>
                            </Col>
                        </Row>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </div >
    );

}

export default IntervalCarousel;