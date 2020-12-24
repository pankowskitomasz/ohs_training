import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class PartnersExt extends Component{
    render(){
        return(        
            <Container fluid className={"partners-ext bg-white p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/partners/partners-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="p-5 contact-bg text-left">
                            <h1 className="display-4 font-weight-bold font-logo">
                                Conference rooms
                            </h1>
                            <p className="initialism">
                                Our partners helping us in organization of big meetings:
                            </p>
                            <ul className="list-unstyled font-weight-bold pl-3">
                                <li>Nacco Conference Rooms</li>
                                <li>Dallay Hotel</li>
                                <li>Novis Conference Center</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                    <div className="p-5 contact-bg text-left">
                            <h1 className="display-4 font-weight-bold font-logo">
                                Technical support
                            </h1>
                            <p className="initialism">
                                Our partners helping us in organization of all meetings:
                            </p>
                            <ul className="list-unstyled font-weight-bold pl-3">
                                <li>Wifi Audio Systems</li>
                                <li>Ligan Conference Systems</li>
                                <li>Smart Tech Group</li>
                                <li>Revo Team</li>
                                <li>Cata LTD</li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/partners/partners-ext-2.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default PartnersExt;