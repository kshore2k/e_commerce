import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../../../actions/loginActions';
import './styles/Registration.css';

class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            country: "United States",
            zipcode: "",
            city: "",
            state: "",
            address: "",
            phone_number: "",
            email: "",
            password: "",
            passwordConfirm: "",
            error: ""
        };
    };

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://www.google.com/recaptcha/api.js";
        script.async = true;

        document.body.appendChild(script);
    }

    onFormInput = (event) => {
        const { target: { name, value } } = event;

        this.setState({ [name]: value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        const form1 = document.getElementById("reg-personal");
        const form2 = document.getElementById("reg-email");

        if(!form1.reportValidity() || !form2.reportValidity()) {  // Checks if required fields are valid
            return;
        }

        const { password, passwordConfirm } = this.state;

        if(password !== passwordConfirm) {
            return alert("PASSWORDS DON'T MATCH");
        }

        const newUser = Object.assign({}, this.state, { passwordConfirm: undefined, error: undefined });

        this.props.register(newUser);
    };

    render() {
        if(!this.props.isLoggedIn) {
            return (
                <div id="container-main-reg">
                    <p id="nav-history">
                        <Link to="/" id="home-link">HOME</Link>
                        <span> ></span> CREATE ACCOUNT
                    </p>

                    <div id="title-details">

                        <h1>CREATE AN ACCOUNT</h1>

                        <p>Checkout faster at
                            <span> Rainier Designs </span>
                            and save multiple addresses in your address book.
                        </p>

                    </div>

                    <div id="container-sub-reg">

                        <div id="shipping">

                            <h1><span>-</span>Shipping Details</h1>

                            <p>Enter the name and address you'd like us to ship your order to.</p>

                            <form id="reg-personal" className="registration-form" onSubmit={this.onFormSubmit}>
                                <label htmlFor="first_name">
                                    <span>*</span>First Name:
                                </label>
                                <input type="text" name="first_name" value={this.state.first_name} onChange={this.onFormInput} required/>

                                <label htmlFor="last_name">
                                    <span>*</span>Last Name:
                                </label>
                                <input type="text" name="last_name" value={this.state.last_name} onChange={this.onFormInput} required/>

                                <label htmlFor="country">
                                    <span>*</span>Country:
                                </label>
                                <select name="country" value={this.state.country} onChange={this.onFormInput}>
                                    <option value="United States">United States</option>
                                    <option value="Turkey">Turkey</option>
                                </select>

                                <label htmlFor="zipcode">
                                    <span>*</span>Zip/Postcode:
                                </label>
                                <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.onFormInput} required/>

                                <label htmlFor="city">
                                    <span>*</span>City:
                                </label>
                                <input type="text" name="city" value={this.state.city} onChange={this.onFormInput} required/>

                                <label htmlFor="state">
                                    <span>*</span>State:
                                </label>
                                <select name="state" value={this.state.state} onChange={this.onFormInput} required>
                                    <option value="">Choose a State</option>
                                    <option value="Washington">Washington</option>
                                </select>

                                <label htmlFor="address">
                                    <span>*</span>Address:
                                </label>
                                <input type="text" name="address" value={this.state.address} onChange={this.onFormInput} required/>

                                <label htmlFor="phone_number">
                                    <span>*</span>Phone Number:
                                </label>
                                <input type="text" name="phone_number" value={this.state.phone_number} onChange={this.onFormInput} required/>
                                
                            </form>

                        </div>
                        <div id="personal-captcha">

                            <div id="personal">
                            
                                <h1><span>-</span>Personal Details</h1>

                                <p>Enter your email address and password to create your account.</p>

                                <form id="reg-email" className="registration-form">
                                    <label htmlFor="email">
                                        <span>*</span>Email Address:
                                    </label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.onFormInput} required/>

                                    <label htmlFor="password">
                                        <span>*</span>Password:
                                    </label>
                                    <input type="password" autoComplete="off" name="password" value={this.state.password} onChange={this.onFormInput} required/>

                                    <label htmlFor="passwordConfirm">
                                        <span>*</span>Confirm Password:
                                    </label>
                                    <input type="password" autoComplete="off" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.onFormInput} required/>
                                </form>

                            </div>

                            <div id="captcha">
                                <h1><span>-</span>Security Question</h1>

                                <div className="g-recaptcha" data-sitekey="6LfI_qsUAAAAAAkvUx5sDzram_dcDWlEh7cJDylu"></div>

                                <input type="checkbox" defaultChecked="true"/>
                                <p>Sign up for the Rainier Designs newsletter</p>
                            </div>

                            <button id="button-create" onClick={this.onFormSubmit}>CREATE MY ACCOUNT</button>

                        </div>
                        
                    </div>
                </div>
            );
        } else {
            return <Redirect to="/account"/>
        }
    };
};

const mapStateToProps = state => ({
    isLoggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, { register })(Registration);