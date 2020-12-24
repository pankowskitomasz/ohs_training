import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class OfferExt extends Component{
    render(){
        return(        
            <Container fluid className={"offer-ext bg-white p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/offer-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Compliance Incidents
                            </h3>
                            <p className="initialism">
                                As an authorised insurer, we are required to comply with numerous Commonwealth 
                                laws such as the Insurance Act 1973, Insurance Contracts Act 1984, and as an 
                                Australian Financial Services Licensee under the Corporations Act 2001.
                            </p>  
                            <p className="initialism">
                                Along with our own internal policies and procedures, we must also comply with 
                                the obligations and standards imposed by various authorities, including ASIC, 
                                APRA, AFCA and the Code Governance Committee of the General Insurance Code of 
                                Practice.
                            </p>  
                            <p className="initialism">
                                ‘Compliance Incidents and Breaches’ for Insurers course focuses on 
                                educating all staff and Directors on why your organisation needs to identify, 
                                investigate and resolve both actual and potential compliance breaches and 
                                incidents.
                            </p>                  
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Mental Health Obligations
                            </h3>
                            <p className="initialism">
                                The current coronavirus (COVID-19) pandemic can cause heightened stress and 
                                anxiety. Your organisation has a responsibility to support employees and 
                                reduce risks to your employees’ mental health.
                            </p>  
                            <p className="initialism">
                                Workplaces, both the physical location and the activity of conducting work, 
                                can be a protective factor as well as a risk factor for mental health problems 
                                and illness.
                            </p>  
                            <p className="initialism">
                                ‘Mental Health Obligations for Managers’ course focuses on understanding your 
                                obligation in supporting your staff, their mental health, and provides guidance 
                                and strategies on supporting good mental health and wellbeing.
                            </p>                  
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/offer-ext-2.jpg"/>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/offer/offer-ext-3.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Financial Services Regime
                            </h3>
                            <p className="initialism">
                                In response to concerns regarding the financial services industry, the Royal 
                                Commission into Misconduct in the Banking, Superannuation and Financial 
                                Services Industry was established to inquire into, and report on, conduct 
                                that fell below community standards and expectations.
                            </p>  
                            <p className="initialism">
                                This has revealed the need to improve our processes regarding the identification 
                                and support of vulnerable customers.
                            </p>  
                            <p className="initialism">
                                As part of the financial services industry, we must assist in rebuilding 
                                community trust and ensuring vulnerable customers have access to appropriate 
                                financial products and services, which are suitable and fair for their 
                                circumstance.
                            </p>                  
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default OfferExt;