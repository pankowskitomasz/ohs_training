import {Redirect} from "react-router-dom";
import About from "./views/about";
import Career from "./views/career";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Customers from "./views/customers";
import Error from "./views/error";
import Home from "./views/home";
import Offer from "./views/offer";
import Partners from "./views/partners";
import PrivacyPolicy from "./views/privacy";
import Register from "./views/register";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},
        {navItem:true, exact:false, path:"/offer",name:"Offer",view:<Offer/>},
        {navItem:true, exact:false, path:"/company",name:"Company",view:<About/>,
            subItems:[
                {navItem:true, exact:false, path:"/about",name:"About",view:<About/>},
                {navItem:true, exact:false, path:"/customers",name:"Customers",view:<Customers/>},
                {navItem:true, exact:false, path:"/partners",name:"Partners",view:<Partners/>},
                {navItem:true, exact:false, path:"/career",name:"Career",view:<Career/>}
            ]
        },
        {navItem:true, exact:false, path:"/contact",name:"Contact",view:<Contact/>},
        {navItem:true, exact:false, path:"/register",name:"Register",view:<Register/>},
        {navItem:false, exact:false, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:false, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},                
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};
const homeCfg = [
    {navItem:true, exact:false, path:"/about",name:"See more",view:<About/>},
    {navItem:true, exact:false, path:"/offer",name:"See more",view:<Offer/>},
    {navItem:true, exact:false, path:"/contact",name:"Go now",view:<Contact/>},
];

export {
    appCfg,
    homeCfg
}