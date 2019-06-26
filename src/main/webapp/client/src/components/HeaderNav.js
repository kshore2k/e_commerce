import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './HeaderNav.css';
import logo from '../static/logo-w-txt.png';

class HeaderNav extends Component {
    
    render(){
        return (
            <BrowserRouter>
            <div id="container-main">
                <div id="container-logo">
                    <img id="logo" src={logo} alt="Rainier-Designs"/>
                </div>
                <div id="container-menu">
                    <div id="container-login">
                        <p>FREE SHIPPING ON ORDERS OVER $49*</p>
                    </div>
                    <div id="container-navigation">
                        <Link className="test">TENTS</Link>
                        <Link className="test">SLEEPING BAGS</Link>
                        <Link className="test">BACKPACKS</Link>
                        <Link className="test">MEN'S APPAREL</Link>
                        <Link className="test">WOMEN'S APPAREL</Link>
                        <Link className="test">COLLECTIONS</Link>
                        <Link className="test">ABOUT US</Link>
                    </div>
                </div>
                
            </div>
            </BrowserRouter>
        )
    };
    
};

export default HeaderNav;