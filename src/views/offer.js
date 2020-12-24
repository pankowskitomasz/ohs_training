import React,{Component} from "react";
import OfferExt from "../components/offer-ext";
import OfferShort from "../components/offer-short";

class Offer extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <OfferShort/>
                <OfferExt/>
            </main>
        );
    }
}
export default Offer;