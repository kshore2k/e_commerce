import React, { Component } from 'react';
import { connect } from 'react-redux';
import { edit } from '../../../actions/userActions';
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
            newPasswordConfirm: "",
            confirmationMessage: ""
        };
    };

    onFormInput = (event) => {
        const { target: { name, value } } = event;

        this.setState({ [name]: value });
    };

    checkPasswordConfirm = () => {
        const { newPassword, newPasswordConfirm } = this.state;

        if (newPassword !== newPasswordConfirm) {
            this.setState({ confirmationMessage: "Passwords Must Match" });
            return false;
        }

        return true;
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        const state = this.state;

        const updatedUser = {
            id: this.props.details.id,
            updates: {
                first_name: state.firstName,
                last_name: state.lastName,
                email: state.email,
                phone_number: state.phoneNumber,
                password: state.newPassword
            }
        };

        if (this.checkPasswordConfirm()) {
            this.props.edit(updatedUser);
            this.setState({ confirmationMessage: "Account Details Updated" })
        };
    };

    render() {
        const state = this.state;

        return (
            <div id="container-edit-form">
                <form onSubmit={this.onFormSubmit} id="edit-account" className="edit-form">
                    <label htmlFor="firstName">
                        <span>*</span>First Name:
                    </label>
                    <input type="text" 
                        autoComplete="off" 
                        name="firstName" 
                        value={state.firstName}
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="lastName">
                        <span>*</span>Last Name:
                    </label>
                    <input type="text" 
                        autoComplete="off" 
                        name="lastName" 
                        value={state.lastName}
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="phoneNumber">
                        <span>*</span>Phone Number:
                    </label>
                    <input type="text" 
                        autoComplete="off" 
                        name="phoneNumber" 
                        value={state.phoneNumber}
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="email">
                        <span>*</span>Email Address:
                    </label>
                    <input type="text" 
                        autoComplete="off" 
                        name="email" 
                        value={state.email}
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="newPassword">
                        Change Password:
                    </label>
                    <input type="password" 
                        autoComplete="off" 
                        name="newPassword" 
                        value={state.newPassword}
                        placeholder="(Leave blank to remain unchanged)"
                        onChange={this.onFormInput}
                    />

                    <label htmlFor="newPasswordConfirm">
                        Confirm Password:
                    </label>
                    <input type="password" 
                        autoComplete="off" 
                        name="newPasswordConfirm" 
                        value={state.newPasswordConfirm}
                        placeholder="(Leave blank to remain unchanged)"
                        onChange={this.onFormInput}
                    />

                    <p id="edit-error-message">
                        {state.confirmationMessage}
                    </p>

                    <button id="button-update">UPDATE MY DETAILS</button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    details: state.user.details
});

export default connect(mapStateToProps, { edit })(EditAccountForm);