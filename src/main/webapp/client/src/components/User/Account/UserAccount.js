import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import AccountOption from './AccountOption';
import './styles/UserAccount.css';

class UserAccount extends Component {

    render() {
        return (
            <div id="container-main-account">
                <p id="nav-history">
                    <Link to="/" id="home-link">HOME</Link>
                    <span> ></span> ACCOUNT
                </p>
    
                <div id="container-sub-account">
                    <h1>MY ACCOUNT</h1>
    
                    <div id="account-nav-details">
                        <div id="account-nav">
                            <Link className="account-link" to={`${this.props.match.url}/orders`}>Completed Orders</Link>
                            <Link className="account-link" to={`${this.props.match.url}/edit`}>Your Account Details</Link>
                            <Link className="account-link">Sign Out</Link>
                        </div>
                        <div id="account-details">
                            <Route 
                                exact path={`${this.props.match.url}`} 
                                render={(props) => <AccountOption option={`default`} {...props}/>}
                            />
                            <Route 
                                path={`${this.props.match.url}/orders`}
                                render={(props) => <AccountOption option={`completed orders`} {...props}/>}
                            />
                            <Route 
                                path={`${this.props.match.url}/edit`}
                                render={(props) => <AccountOption option={`account details`} {...props}/>}
                            />
                        </div>
                    </div>
                </div>
                    
            </div>
        );
    };
    
};

export default UserAccount;