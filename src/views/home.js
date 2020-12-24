import React,{Component} from "react";
import AboutShort from "../components/about-short";
import ContactData from "../components/contact-data";
import ContactForm from "../components/contact-form";
import OfferShort from "../components/offer-short";
import Slider from "../components/slider";
import {homeCfg} from "../config";

class Home extends Component{
    render(){
        return(
            <main className="minh-100vh bg-dark">  
                <Slider/>
                <AboutShort backLink={homeCfg[0]}/>
                <OfferShort backLink={homeCfg[1]}/>
                <ContactData backLink={homeCfg[2]}/>
                <ContactForm/>
            </main>
        );
    }
}
export default Home;