import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

import './Registration.css';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: ""
        };
    };

    onFormInput = (event) => {
        const { target: { name, value } } = event;

        this.setState({ [name]: value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        const user = {
            email: this.state.email,
            password: this.state.password
        };
    };

    render() {
        if(!this.props.isLoggedIn) {
            return (
                <div id="container-main-reg">
                    <p id="nav-history">
                        <Link to="/" id="home-link">HOME</Link>
                        <span> ></span> CREATE ACCOUNT
                    </p>

                    <div id="container-sub-reg">

                        <h1>CREATE AN ACCOUNT</h1>

                        <p>Checkout faster at
                            <span> Rainier Designs </span>
                            and save multiple addresses in your address book.
                        </p>
                        
                        <div id="shipping">

                            <h1><span>-</span>Shipping Details</h1>

                            <p>Enter the name and address you'd like us to ship your order to.</p>

                        </div>
                        <div id="personal-captcha">

                            <div id="personal">
                            
                                <h1><span>-</span>Personal Details</h1>

                                <p>Enter your email address and password to create your account.</p>

                            </div>

                            <div id="captcha">
                                <h1><span>-</span>Security Question</h1>
                            </div>

                        </div>
                        
                    </div>
                </div>
            );
        } else {
            return <Redirect to="/account"/>
        }
    };
};

export default Registration;