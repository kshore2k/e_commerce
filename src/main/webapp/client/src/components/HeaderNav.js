import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.css';
import logo from '../static/logo-w-txt.png';

class HeaderNav extends Component {
    
    render(){
        return (
            <div id="container-main">
                <div id="container-logo">
                    <Link to="/">
                        <img id="logo-image" src={logo} alt="Rainier-Designs"/>
                    </Link>
                </div>
                <div id="container-menu">
                    <div id="container-login">
                        <p>FREE SHIPPING ON ORDERS OVER $49*</p>
                    </div>
                    <div id="container-navigation">
                        <Link to="/product" className="link">TENTS</Link>
                        <Link className="link">SLEEPING BAGS</Link>
                        <Link className="link">BACKPACKS</Link>
                        <Link className="link">MEN'S APPAREL</Link>
                        <Link className="link">WOMEN'S APPAREL</Link>
                        <Link className="link">COLLECTIONS</Link>
                        <Link className="link">ABOUT US</Link>

                        <form id="search-bar">
                            <input type="text" placeholder="Search"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
    
};

export default HeaderNav;