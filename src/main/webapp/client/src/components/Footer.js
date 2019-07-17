import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../static/logo-w-txt-white.png';
import githubIcon from '../static/github-icon.png';
import githubIconHover from '../static/github-icon-dark.png'
import linkedInIcon from '../static/linkedin-icon.png';
import linkedInIconHover from '../static/linkedin-icon-dark.png';
import portfolioIcon from '../static/enso-icon.png';
import portfolioIconHover from '../static/enso-icon-dark.png';

import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: ""
        };
    };

    onFormInput = (event) => {
        const { target: { name, value }} = event;

        this.setState({ [name]: value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        alert("Thanks for subscribing to our newsletter! " + this.state.email);

        this.setState({ email: "" });
    };

    hover = (event) => {
        let element = event.target;
        let image = element.getAttribute('hover');
        element.setAttribute('src', image);
        
    };
      
    unhover = (event) => {
        let element = event.target;
        let image = element.getAttribute('initial');
        element.setAttribute('src', image);
    };

    render() {
        return (
            <div id="container-footer-border">

                <div id="container-main-footer">

                    <div id="container-subscribe">
                        <h1>GET THE INSIDE SCOOP!</h1>

                        <form id="form-newsletter" onSubmit={this.onFormSubmit}>
                            <div id="container-newsletter-input">
                                <input type="email"
                                    placeholder="enter your email address"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.onFormInput}
                                    autoComplete="off"
                                />
                                <button>></button>
                            </div>
                        </form>
                    </div>

                    <div id="container-footer-nav">
                        <div id="navbox-contact">
                            <img src={logo} alt="rdlogo"/>
                            <p>3900 State Route 706</p>
                            <p>Ashford, WA 98304</p>
                            <p>Phone: 360-663-2425</p>
                            <p>warranty@rainierdesigns.com</p>
                            <a href="https://github.com/kshore2k" target="_blank" rel="noopener noreferrer">
                                <img src={githubIcon} 
                                    alt="github" 
                                    initial={githubIcon} 
                                    hover={githubIconHover} 
                                    onMouseOver={this.hover} 
                                    onMouseOut={this.unhover}
                                />
                            </a>
                            <a href="https://linkedin.com/in/kris-shore" target="_blank" rel="noopener noreferrer">
                                <img src={linkedInIcon} 
                                    alt="linkedin"
                                    initial={linkedInIcon} 
                                    hover={linkedInIconHover} 
                                    onMouseOver={this.hover} 
                                    onMouseOut={this.unhover}
                                />
                            </a>
                            <a href="http://www.kris-shore.com" target="_blank" rel="noopener noreferrer">
                                <img src={portfolioIcon} 
                                    alt="portfolio"
                                    initial={portfolioIcon} 
                                    hover={portfolioIconHover} 
                                    onMouseOver={this.hover} 
                                    onMouseOut={this.unhover}
                                />
                            </a>
                        </div>
                        <div id="navbox-links">
                            <h1>Products</h1>
                            <p><Link to="" id="footer-link">Tents</Link></p>
                            <p><Link to="" id="footer-link">Sleeping Bags</Link></p>
                            <p><Link to="" id="footer-link">Backpacks</Link></p>
                            <p><Link to="" id="footer-link">Men's Apparel</Link></p>
                            <p><Link to="" id="footer-link">Women's Apparel</Link></p>
                        </div>
                        <div id="navbox-links">
                            <h1>Support</h1>
                            <p><Link to="" id="footer-link">Contact Us</Link></p>
                            <p><Link to="" id="footer-link">Shipping Info</Link></p>
                            <p><Link to="" id="footer-link">Return Policy</Link></p>
                            <p><Link to="" id="footer-link">Product Care</Link></p>
                            <p><Link to="" id="footer-link">Parts & Warranty</Link></p>
                            <p><Link to="" id="footer-link">Distributors</Link></p>
                        </div>
                        <div id="navbox-links">
                            <h1>Company</h1>
                            <p><Link to="" id="footer-link">Our Story</Link></p>
                            <p><Link to="" id="footer-link">Terms of Use</Link></p>
                            <p><Link to="" id="footer-link">Privacy Policy</Link></p>
                        </div>
                    </div>
                    <div id="footer-end">
                        <p>FREE SHIPPING ON ORDERS OVER $49*</p>
                    </div>
                </div>
            </div>
        );
    };
};

export default Footer;