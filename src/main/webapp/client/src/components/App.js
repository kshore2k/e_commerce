import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import HeaderNav from './HeaderNav';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import Collection from './Collection';
import UserAccount from './UserAccount';
import RequireAuth from './RequireAuth';
import Footer from './Footer';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Router>
                <HeaderNav />
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Registration} />
                    <Route path="/account" component={RequireAuth(UserAccount)} />
                    <Route path="/collection/:type"  
                        render={(props) => <Collection key={props.match.params.type} {...props}/> }
                    />
                <Footer />
                </Router>
            </Provider>
        );
    };
    
};

export default App;

