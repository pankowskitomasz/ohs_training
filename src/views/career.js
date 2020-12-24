import React,{Component} from "react";
import ContactForm from "../components/contact-form";
import JoinShort from "../components/join-short";

class Career extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <JoinShort/>
                <ContactForm/>
            </main>
        );
    }
}
export default Career;