import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions/loginActions';

class Login extends Component {
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

        this.props.login(user);

        this.setState({
            email: "",
            password: ""
        });

    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.error) {
            this.setState({ error: nextProps.error });
        }
    };

    render() {
        if(!this.props.isLoggedIn){
            return (
                <div>
                    <form onSubmit={this.onFormSubmit}>
                        Email:<input
                                type="text"
                                value={this.state.email}
                                name="email"
                                onChange={this.onFormInput}
                                />
                        Password:<input
                                type="text"
                                value={this.state.password}
                                name="password"
                                onChange={this.onFormInput}
                                />

                        <button type="submit">Log In</button>
                    </form>
                    {this.state.error}
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