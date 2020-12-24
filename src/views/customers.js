import React,{Component} from "react";
import CustomersExt from "../components/customers-ext";

class Customers extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <CustomersExt/>
            </main>
        );
    }
}
export default Customers;