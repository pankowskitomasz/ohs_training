import React,{Component} from "react";
import {Link} from "react-router-dom";
import Dropdown from "../../node_modules/react-bootstrap/Dropdown";
import Nav from "../../node_modules/react-bootstrap/Nav";
import Navbar from "../../node_modules/react-bootstrap/Navbar";

class NavigationMultiLevel extends Component{
    getMenuItem(itemDataA,itemIndexA){
        return <Nav.Item key={itemIndexA}>
            <Link to={itemDataA.path} className="nav-link text-light">
                {itemDataA.name}
            </Link>
        </Nav.Item>;
    }
    getSubMenu(itemDataA,itemIndexA,dropdownVariantA){
        let dropItems = itemDataA.subItems.map((item,idx)=>{
            return <Link to={item.path} key={idx}
                className="dropdown-item">
                {item.name}
            </Link>;
        });
        return <Dropdown key={itemIndexA} className="nav-item ml-auto">
            <Dropdown.Toggle variant={dropdownVariantA} 
                id={"dropdown-"+itemDataA.name.toLowerCase()} 
                className="font-weight-bold ml-auto dropdown-arrowless">
                {itemDataA.name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {dropItems}
            </Dropdown.Menu>
        </Dropdown>
    }
    render(){
        let menuContent = this.props.menuItems.filter((item)=>item.navItem).map((item,idx)=>{
            return (item.subItems===undefined)?this.getMenuItem(item,idx):this.getSubMenu(item,idx,"nav-item nav-link text-light");
        });
        return(
            <Navbar bg="dark" variant="dark" expand="md" className="position-absolute border-bottom border-secondary shadow w-100 z-100" collapseOnSelect>
                <Navbar.Brand>
                    <Link to="/" className="font-weight-bold font-logo decoration-none text-light">
                        <img src="/img/navbar_logo.png" alt="logo" className="mr-2"/>
                        OHS Training
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>                    
                    <Nav className="ml-auto text-right px-3 font-menu font-weight-bold">
                        {menuContent}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationMultiLevel;