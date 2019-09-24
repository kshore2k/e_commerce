import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles/EditAccountForm.css';

class EditAccountForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: this.props.details.first_name,
            lastName: this.props.details.last_name,
            phoneNumber: this.props.details.phone_number,
            email: this.props.details.email,
            newPassword: "",
            newPasswordConfirm: ""
        };
    };

    onFormInput = (event) => {
        const { target: { name, value } } = event;

        this.setState({ [name]: value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        const state = this.state;

        const updatedUser = {
            firstName: state.firstName,
            lastName: state.lastName,
            phoneNumber: state.phoneNumber,
            email: state.email,
            newPassword: state.newPassword
        };

        console.log(updatedUser);
    };

    render() {
        return (
            <div id="container-edit-form">
                <form onSubmit={this.onFormSubmit} id="edit-account" className="edit-form">
                    <label htmlFor="firstName">
                        <span>*</span>First Name:
                    </label>
                    <input type="text" 
                        autoComplete="off" 
                        name="firstName" 
                        value={this.state.firstName}
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="lastName">
                        <span>*</span>Last Name:
                    </label>
                    <input type="text" 
                        autoComplete="off" 
                        name="lastName" 
                        value={this.state.lastName}
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="phoneNumber">
                        <span>*</span>Phone Number:
                    </label>
                    <input type="text" 
                        autoComplete="off" 
                        name="phoneNumber" 
                        value={this.state.phoneNumber}
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="email">
                        <span>*</span>Email Address:
                    </label>
                    <input type="text" 
                        autoComplete="off" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="newPassword">
                        Change Password:
                    </label>
                    <input type="password" 
                        autoComplete="off" 
                        name="newPassword" 
                        value={this.state.newPassword}
                        placeholder="(Leave blank to remain unchanged)"
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="newPasswordConfirm">
                        Confirm Password:
                    </label>
                    <input type="password" 
                        autoComplete="off" 
                        name="newPasswordConfirm" 
                        value={this.state.newPasswordConfirm}
                        placeholder="(Leave blank to remain unchanged)"
                        onChange={this.onFormInput}
                    />

                    <button id="button-update">UPDATE MY DETAILS</button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    details: state.user.details
});

export default connect(mapStateToProps, {})(EditAccountForm);