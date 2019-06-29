import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/loginActions';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
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
        if(nextProps.user) {
            this.me = nextProps.user.email;
        } else {
            this.me = "";
        }
    }

    render() {
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
                {this.me}
            </div>
        );
    };
};

const mapStateToProps = state => ({
    user: state.user.details
})

export default connect(mapStateToProps, { login })(Login);