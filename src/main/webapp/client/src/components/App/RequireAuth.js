import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
    class Authentication extends Component {
  
        componentDidMount() {
            if (!this.props.isLoggedIn) {
                this.props.history.push('/login');
            }
        };
  
        componentDidUpdate(nextProps) {
            if (!nextProps.isLoggedIn) {
                this.props.history.push('/login');
            }
        };
  
        render() {
            return <ComposedComponent {...this.props} />
        };
    };  
  
    const mapStateToProps = (state) => {
        return {
            isLoggedIn: state.user.loggedIn
        };
    };
  
    return connect(mapStateToProps)(Authentication);
};