import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

//components
import HeaderNav from './HeaderNav';
import Home from './Home';

const App = () => {
    return (
        <Provider store={store}>
            <HeaderNav />
            <BrowserRouter>
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        </Provider>
    )
};

export default App;

