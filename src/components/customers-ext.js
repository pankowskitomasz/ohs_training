import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import Row from "../../node_modules/react-bootstrap/Row";
import Col from "../../node_modules/react-bootstrap/Col";

class CustomersExt extends Component{
    render(){
        return(        
            <Container fluid className={"about-ext bg-white p-0 "+this.props.classExt}>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/customers/customers-ext-1.jpg"/>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Business customers
                            </h3>
                            <p className="initialism">
                                Business customer expectations are higher than ever before, and your customers are 
                                scrutinizing your business more intensely than ever. They’re comparing their 
                                experience with your brand to the easy, fast, and personalized experiences 
                                they’re having with the best of the best. And it’s these customer-focused 
                                businesses that get to reap the benefits of renewed loyalty and competitive 
                                advantage.
                            </p> 
                            <p className="initialism">
                                With 89 percent of companies competing primarily on the basis of customer experience, 
                                customer focus has never been more important. But there remains a gap in how many 
                                companies think they’re customer-focused compared to how many customers agree. In 
                                fact, while 80 percent of companies believe they deliver “super experiences,” only 
                                8 percent of customers hold that same opinion.
                            </p>                                            
                        </div>
                    </Col>
                </Row>
                <Row className="mx-auto text-center w-100 bg-blue">
                    <Col xs={12} md={6} className="mx-auto text-secondary p-5 d-flex align-items-center">
                        <div className="text-left">
                            <h3 className="mb-3 font-logo">
                                Customer focus
                            </h3>
                            <p className="initialism">
                                Customer focus is the foundation for customer loyalty because it's your 
                                promise to your customers that you’ll put them first. And according to 
                                the Zendesk Customer Experience Trends Report 2020, 74 percent of customers 
                                feel loyal to a particular company, with 52 percent reporting that they go 
                                out of their way to buy from their favorite brands.
                            </p>   
                            <p className="initialism">
                                What’s more, roughly half of customers say they would switch to a competitor 
                                after just one bad experience. And that number jumps to 80 percent in the 
                                case of more than one bad experience. Becoming a customer-focused organization 
                                is important for helping you ensure that customers leave the experience feeling 
                                good about your brand. That's because it requires you to hold them as the guiding force behind everything you do.
                            </p>              
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="mx-auto text-shadow p-0 bg-light">
                        <img alt="about"
                            className="img-fluid minh-50vh h-100 fit-cover w-100"
                            src="img/customers/customers-ext-2.jpg"/>
                    </Col>
                </Row>
            </Container>    
        );
    }
}

export default CustomersExt;