import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCategoryFilterToState } from '../../actions/productActions';
import logo from '../../static/logo-w-txt.png';
import tentMenuImg from '../../static/tents.jpg';
import sleepingBagMenuImg from '../../static/sleeping-bags.jpg';
import mensApparelMenuImg from '../../static/mens-apparel.jpg';
import womensApparelMenuImg from '../../static/womens-apparel.jpg';
import userIcon from '../../static/user.png';
import cartIcon from '../../static/cart.png'
import './styles/HeaderNav.css';

class HeaderNav extends Component {

    onMainMenuClick = () => {
        this.props.addCategoryFilterToState(false, "");
    };

    onSubMenuClick = (event) => {
        const { target } = event;
        const { innerHTML: category } = target;
        const path = target.getAttribute("path");

        this.props.addCategoryFilterToState(true, category);
        this.props.history.push(`/collection/${path}`);
    };
    
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
                            <Link to="/collection/tents" className="link" onClick={this.onMainMenuClick}>TENTS</Link>
                            <div className="dropdown-content">
                                <div className="dropdown-links">
                                    <span onClick={this.onSubMenuClick} className="category-link" path="tents">1 Person Tents</span>
                                    <span onClick={this.onSubMenuClick} className="category-link" path="tents">2 Person Tents</span>
                                    <span onClick={this.onSubMenuClick} className="category-link" path="tents">3 Person Tents</span>
                                    <span onClick={this.onSubMenuClick} className="category-link" path="tents">4 Person Tents</span>
                                </div>
                                <img className="menu-img" src={tentMenuImg} alt="Tents"/>
                            </div>
                        </div> 

                        <div className="dropdown">
                            <Link to="/collection/sleeping-bags" className="link" onClick={this.onMainMenuClick}>SLEEPING BAGS</Link>
                            <div className="dropdown-content">
                                <div className="dropdown-links">
                                    <span onClick={this.onSubMenuClick} className="category-link" path="sleeping-bags">Zippered Sleeping Bags</span>
                                    <span onClick={this.onSubMenuClick} className="category-link" path="sleeping-bags">Zipperless Sleeping Bags</span>
                                </div>
                                <img className="menu-img" src={sleepingBagMenuImg} alt="Sleeping Bags"/>
                            </div>
                        </div>

                        <Link to="/collection/backpacks" className="link" onClick={this.onMainMenuClick}>BACKPACKS</Link> 

                        <div className="dropdown">
                            <Link to="/collection/mens-apparel" className="link" onClick={this.onMainMenuClick}>MEN'S APPAREL</Link>
                            <div className="dropdown-content">
                                <div className="dropdown-links">
                                    <span onClick={this.onSubMenuClick} className="category-link" path="mens-apparel">Men's Jackets</span>
                                    <span onClick={this.onSubMenuClick} className="category-link" path="mens-apparel">Men's Tops</span>
                                    <span onClick={this.onSubMenuClick} className="category-link" path="mens-apparel">Men's Bottoms</span>
                                </div>
                                <img className="menu-img" src={mensApparelMenuImg} alt="Men's Apparel"/>
                            </div>
                        </div>

                        <div className="dropdown">
                            <Link to="/collection/womens-apparel" className="link" onClick={this.onMainMenuClick}>WOMEN'S APPAREL</Link>
                            <div className="dropdown-content">
                                <div className="dropdown-links">
                                    <span onClick={this.onSubMenuClick} className="category-link" path="womens-apparel">Women's Jackets</span>
                                    <span onClick={this.onSubMenuClick} className="category-link" path="womens-apparel">Women's Tops</span>
                                    <span onClick={this.onSubMenuClick} className="category-link" path="womens-apparel">Women's Bottoms</span>
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

export default connect(null, { addCategoryFilterToState })(withRouter(HeaderNav));