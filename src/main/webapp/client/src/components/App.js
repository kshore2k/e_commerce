import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            city: "",
            state: "",
            country: "",
            zipcode: "",
            address: "",
            phone_number: ""
        };
    };

    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        const userData = this.state;

        fetch('/api/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(user => console.log(user))
        .catch(err => console.log(err))
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" required name="first_name" onChange={this.onInputChange} value={this.state.first_name} />
                    <input type="text" required name="last_name" onChange={this.onInputChange} value={this.state.last_name} />
                    <input type="email" required name="email" onChange={this.onInputChange} value={this.state.email} />
                    <input type="text" required name="password" onChange={this.onInputChange} value={this.state.password} />
                    <input type="text" required name="city" onChange={this.onInputChange} value={this.state.city} />
                    <input type="text" required name="state" onChange={this.onInputChange} value={this.state.state} />
                    <input type="text" required name="country" onChange={this.onInputChange} value={this.state.country} />
                    <input type="text" required name="zipcode" onChange={this.onInputChange} value={this.state.zipcode} />
                    <input type="text" required name="address" onChange={this.onInputChange} value={this.state.address} />
                    <input type="text" required name="phone_number" onChange={this.onInputChange} value={this.state.phone_number} />

                    <button type="submit">Register</button>
                </form>
            </div>
        );
    };
};

export default App;

