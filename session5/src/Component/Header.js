import React, { Component, Fragment } from "react";
import {Link} from 'react-router-dom'
import './header.css'

class Header extends Component 
{
    constructor()
    {
        super();
        this.state ={keyword:'Insert Text here'}
    }

   /*  searchVal = (event) =>{
        console.log(event.target.value)
        this.props.userText(event.target.value);
    }*/

    render()
    {
        return(
            <React.Fragment>
                <nav className="navbar navbar-inverse">
                <div className="container">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/product">Product</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>              
                    </div>      
                </nav>

            </React.Fragment>
        )
    }

}

export default Header;