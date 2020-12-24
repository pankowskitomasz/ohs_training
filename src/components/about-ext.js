import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class OfferExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-ext bg-white p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Why OHS Training?
                            </h3>
                            <p className="initialism">
                                Award-winning experience
                            </p>  
                            <ul className="list-unstyled pl-3 initialism font-weight-bold">
                                <li className="mb-2">
                                    Our online training is based on 20 years experience
                                </li>
                                <li className="mb-2">
                                    We’ve won LearnX Asia Pacific’s “Best Compliance Training 
                                    Program” platinum-level award for the last 10 years in a row
                                </li>
                                <li className="mb-2">
                                    350+ clients across 23 industries trust Safetrac’s courses and/or platform
                                </li>
                                <li className="mb-2">
                                    150,000+ active users currently educated in Safetrac’s engaging courseware
                                </li>
                                <li className="mb-2">
                                    No Safetrac client rolling out our compliance training annually has been 
                                    found by a regulator to have an inadequate compliance training program in 
                                    place.
                                </li>
                            </ul>                                             
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <p className="initialism">
                                Service excellence
                            </p>  
                            <ul className="list-unstyled pl-3 initialism font-weight-bold">
                                <li className="mb-2">
                                    97% customer retention rate
                                </li>
                                <li className="mb-2">
                                    Exceptional customer experience with dedicated teams providing to customer 
                                    service and account analysis
                                </li>
                                <li className="mb-2">
                                    Flexible and customised licensing, adjusted to the needs of the client (SCORM, 
                                    Platform, Off the Shelf, Customised and Bespoke).
                                </li>
                            </ul>          
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-ext-2.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/about/about-ext-3.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <p className="initialism">
                                We provide off the shelf content that:
                            </p>  
                            <ul className="list-unstyled pl-3 initialism font-weight-bold">
                                <li className="mb-2">
                                    is underpinned by subject matter experts such as legal experts from 
                                    MinterEllison
                                </li>
                                <li className="mb-2">
                                    blends the need for legal accuracy with content that is interactive 
                                    and engaging
                                </li>
                                <li className="mb-2">
                                    is customisable to the needs, culture, ethics and specific requirements 
                                    of the client’s organisation
                                </li>
                            </ul>   
                            <p className="initialism">
                                Our compliance platform provides:
                            </p>  
                            <ul className="list-unstyled pl-3 initialism font-weight-bold">
                                <li className="mb-2">
                                    robust scheduling, roll-outs, and reminders
                                </li>
                                <li className="mb-2">
                                    the ability to customise training programs to suit different users within 
                                    your organisational hierarchy
                                </li>
                                <li className="mb-2">
                                    granular reporting right down to question analysis to help you identify 
                                    knowledge gaps and weaknesses, and potential conduct risk.
                                </li>
                            </ul>                
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default OfferExt;