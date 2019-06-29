import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import HeaderNav from './HeaderNav';
import Home from './Home';
import Login from './Login';
import Product from './Product';

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                <HeaderNav />
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/product" component={Product} />
                </BrowserRouter>
            </Provider>
        );
    };
    
};

export default App;

