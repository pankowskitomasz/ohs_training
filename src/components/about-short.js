import React,{Component} from "react";
import {Link} from "react-router-dom";
import Button from "../../node_modules/react-bootstrap/Button";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class AboutShort extends Component{
    render(){
        let linking;
        if(this.props.backLink!==undefined){
            linking = <Link to={this.props.backLink.path} className="btn btn-outline-dark rounded-pill">
                {this.props.backLink.name}
            </Link>;
        }
        return(        
            <Container fluid className={"about-short bg-light p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={10} md={8} className="mx-auto text-dark p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo text-center">
                                Why OHS training?
                            </h3>
                            <p className="initialism">
                                Ensuring a safe and healthy workplace is a fundamental part of corporate 
                                responsibility. Our inclusive approach to Occupational Health and Safety 
                                (OHS) includes all persons who are employed in engineering companies. Our 
                                vision is zero major incidents and we work actively to prevent injuries 
                                and work-related ill health.
                            </p>
                            <p className="initialism">
                                This high-level orientation is primarily intended to be used by service 
                                providers engaged in high-risk activities. However all stakeholders, Service 
                                providers or not, are welcome to complete this training course. The main 
                                purpose with this training is to increase our suppliers' awareness of OHS 
                                requirements and thereby allowing them to better identify improvement 
                                possibilities in operations, and to reduce the risk of incidents.                                
                            </p>
                            <div className="text-center">
                                {linking}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default AboutShort;