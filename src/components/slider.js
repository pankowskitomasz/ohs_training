import React,{Component} from "react";
import {Link} from "react-router-dom";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";
import Carousel from "../../node_modules/react-bootstrap/Carousel";
import Button from "../../node_modules/react-bootstrap/Button";

class Slider extends Component{
    render(){
        return(        
            <Container fluid className={"index-slider d-flex align-items-center p-0 bg-secondary h-100vh max-600 "+this.props.classExt}>
                <Row className="mx-auto text-center d-flex w-100">
                    <Col xs={12} className="mx-auto text-shadow text-white p-0">
                        <Carousel>
                            <Carousel.Item className="bg-secondary">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh max-600 fit-cover mix-multiply"
                                    src="img/slider/slide-1.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="font-logo font-weight-bold">
                                        OHS courses
                                    </h1>
                                    <p className="initialism font-weight-bold">
                                        Check our offer for OHS courses.
                                    </p>
                                    <Link to="/offer" className="btn btn-outline-light rounded-pill font-weight-bold">
                                        See more
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-secondary">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh max-600 fit-cover mix-multiply"
                                    src="img/slider/slide-2.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="font-logo font-weight-bold">
                                        Online Registration
                                    </h1>
                                    <p className="initialism font-weight-bold">
                                        Don't wait register online now!
                                    </p>
                                    <Link to="/register" className="btn btn-outline-light rounded-pill font-weight-bold">
                                        See more
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className="bg-secondary">
                                <img alt="slide" 
                                    className="d-block w-100 h-100vh max-600 fit-cover mix-multiply"
                                    src="img/slider/slide-3.jpg"/>
                                <Carousel.Caption className="mb-5">
                                    <h1 className="font-logo font-weight-bold">
                                        Contact Online
                                    </h1>
                                    <p className="initialism font-weight-bold">
                                        If you have any questions contact us online!
                                    </p>
                                    <Link to="/contact" className="btn btn-outline-light rounded-pill font-weight-bold">
                                        See more
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default Slider;