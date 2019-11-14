import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/logo-w-txt.png';
import tentMenuImg from '../../static/tents.jpg';
import sleepingBagMenuImg from '../../static/sleeping-bags.jpg';
import mensApparelMenuImg from '../../static/mens-apparel.jpg';
import womensApparelMenuImg from '../../static/womens-apparel.jpg';
import userIcon from '../../static/user.png';
import cartIcon from '../../static/cart.png'
import './styles/HeaderNav.css';

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
                        <Link to="/cart" id="cart-link">
                            <img id="cart-icon" src={cartIcon} alt="cart"/>
                        </Link>
                    </div>
                    <div id="container-navigation">
                        
                        <div className="dropdown">
                            <Link to="/collection/tents" className="link">TENTS</Link>
                            <div className="dropdown-content">
                                <div className="dropdown-links">
                                    <a>1 Person Tents</a>
                                    <a>2 Person Tents</a>
                                    <a>3 Person Tents</a>
                                    <a>4 Person Tents</a>
                                </div>
                                <img className="menu-img" src={tentMenuImg} alt="Tents"/>
                            </div>
                        </div> 

                        <div className="dropdown">
                            <Link to="/collection/sleeping-bags" className="link">SLEEPING BAGS</Link>
                            <div className="dropdown-content">
                                <div className="dropdown-links">
                                    <a>Zippered Sleeping Bags</a>
                                    <a>Zipperless Sleeping Bags</a>
                                </div>
                                <img className="menu-img" src={sleepingBagMenuImg} alt="Sleeping Bags"/>
                            </div>
                        </div>

                        <Link to="/collection/backpacks" className="link">BACKPACKS</Link> 

                        <div className="dropdown">
                            <Link to="/collection/mens-apparel" className="link">MEN'S APPAREL</Link>
                            <div className="dropdown-content">
                                <div className="dropdown-links">
                                    <a>Men's Jackets</a>
                                    <a>Men's Tops</a>
                                    <a>Men's Bottoms</a>
                                </div>
                                <img className="menu-img" src={mensApparelMenuImg} alt="Men's Apparel"/>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Link to="/collection/womens-apparel" className="link">WOMEN'S APPAREL</Link>
                            <div className="dropdown-content">
                                <div className="dropdown-links">
                                    <a>Women's Jackets</a>
                                    <a>Women's Tops</a>
                                    <a>Women's Bottoms</a>
                                </div>
                                <img className="menu-img" src={womensApparelMenuImg} alt="Women's Apparel"/>
                            </div>
                        </div>
                        
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