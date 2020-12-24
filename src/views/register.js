import React,{Component} from "react";
import RegisterForm from "../components/register-form";

class Register extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white d-flex">  
                <div className="align-self-center w-100 mx-auto">
                    <RegisterForm/>
                </div>
            </main>
        );
    }
}
export default Register;