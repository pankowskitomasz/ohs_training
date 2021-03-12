import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class OfferShort extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path} className="btn btn-outline-dark rounded-pill">
                    {this.props.backLink.name}
                </Link>;
        }
        return(        
            <Container fluid className={"about-desc bg-white p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Minimise Workplace Hazards
                            </h3>
                            <p className="initialism">
                                Whatever kind of business you run, whether it’s a workshop, a retail outlet 
                                or a factory, your workplace contains potential hazards that could injure or 
                                even kill your employees.
                            </p>  
                            <p className="initialism">
                                Which is why having an OHS system in place is so important. Protecting your 
                                staff’s health and safety isn’t just the right thing to do… it’s the law. As 
                                an employer, you are required to provide and maintain a safe working environment 
                                for your employees.
                            </p>  
                            <p className="initialism">
                                Which is why having an OHS system in place is so important. Protecting your 
                                staff’s health and safety isn’t just the right thing to do… it’s the law. As 
                                an employer, you are required to provide and maintain a safe working environment 
                                for your employees.
                            </p>  
                            <div className="text-center">
                                {linking}  
                            </div>                        
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/offer-short-1.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default OfferShort;