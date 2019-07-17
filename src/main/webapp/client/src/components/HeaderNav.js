import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderNav.css';
import logo from '../static/logo-w-txt.png';
import userIcon from '../static/user.png';
import cartIcon from '../static/cart.png'

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
                        <Link to="/login" id="login-link">
                            <img id="user-icon" src={userIcon} alt="user"/>
                        </Link>
                        <Link to="" id="cart-link">
                            <img id="cart-icon" src={cartIcon} alt="cart"/>
                        </Link>
                    </div>
                    <div id="container-navigation">
                        <Link to="/collection/tents" className="link">TENTS</Link>
                        <Link to="/collection/sleeping-bags" className="link">SLEEPING BAGS</Link>
                        <Link to="" className="link">BACKPACKS</Link>
                        <Link to="" className="link">MEN'S APPAREL</Link>
                        <Link to="" className="link">WOMEN'S APPAREL</Link>
                        <Link to="" className="link">COLLECTIONS</Link>
                        <Link to="" className="link">ABOUT US</Link>

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