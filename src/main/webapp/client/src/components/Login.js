import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/loginActions';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: ""
        };
    };

    componentDidMount() {
        if(document.getElementById('login-error')) {
            this.errorDiv = document.getElementById('login-error');
            this.errorDiv.style.display = 'none';
        }
    };
    
    componentDidUpdate() {
        if(this.errorDiv) {
            if(this.state.error !== "") {
                this.errorDiv.style.display = '';
            } 
        }
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

        this.props.login(user);
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.error) {
            this.setState({ error: nextProps.error });
        }
    };

    render() {
        if(!this.props.isLoggedIn) {
            return (
                <div id="container-main-login-reg">
                    <p id="nav-history">
                        <Link to="/" id="home-link">HOME</Link>
                        <span> ></span> LOG IN
                    </p>

                    <div id="container-sub-login-reg">
                        <div id="registration">
                            <h1>CREATE A NEW ACCOUNT</h1>
                            <p>Create an account with us and you'll be able to:</p>
                            <ul>
                                <li>Check out faster</li>
                                <li>Save multiple shipping addresses</li>
                                <li>Access your order history</li>
                                <li>Track new orders</li>
                                <li>Save items to your wish list</li>
                            </ul>
                            <Link to="/register">
                                <button  id="button-register">
                                    CLICK HERE TO CREATE A NEW ACCOUNT
                                </button>
                            </Link>
                        </div>
                        <div id="login">
                            <h1>LOG IN TO YOUR ACCOUNT</h1>
                            <div id="login-error">
                                <p>{this.state.error}</p>
                            </div>
                            <form onSubmit={this.onFormSubmit} id="login-form">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    value={this.state.email}
                                    name="email"
                                    onChange={this.onFormInput}
                                    required
                                />
                                <br/>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="text"
                                    value={this.state.password}
                                    name="password"
                                    onChange={this.onFormInput}
                                    required
                                />
                                <br/>
                                <button type="submit">LOG IN</button>
                                <Link id="forgot-password">Forgot your password?</Link>
                            </form>
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
    error: state.user.error,
    isLoggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, { login })(Login);