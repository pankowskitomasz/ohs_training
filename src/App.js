import React,{Component} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
//---------------------------------------------------------
//components
import NavigationMultiLevel from "./components/navigation-multi-level";
import Footer from "./components/footer";
//---------------------------------------------------------
import {appCfg} from "./config"; 

class App extends Component{
    constructor(){
        super();
        this.state={
            routes: appCfg.routes
        };
    }
    getMenuItems(itemListA,listA){
        let list = listA;
        for(let i=0;i<itemListA.length;i++){
            list.push(itemListA[i]);
            if(itemListA[i].subItems!==undefined){                
                this.getMenuItems(itemListA[i].subItems,list);
            }
        }
        return list;
    }
    render(){
        let itemsList = this.getMenuItems(this.state.routes,[]);    
        let switchContent = itemsList.map((item,idx)=>{
            if(item.exact){
                return <Route key={idx} exact path={item.path}>{item.view}</Route>;
            }
            return <Route key={idx} path={item.path}>{item.view}</Route>;
        });
        return(        
            <BrowserRouter>
                <NavigationMultiLevel menuItems={this.state.routes}/>                 
                <Switch>
                    {switchContent}
                </Switch>   
                <Footer privacyLink={{name:"Privacy Policy",href:"/privacy"}}
                    menuItems={this.state.routes}/>          
            </BrowserRouter>
        );
    }
}

export default App;