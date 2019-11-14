import React, { Component } from 'react';
import 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

//components
import HeaderNav from '../Header/HeaderNav';
import Home from '../Slideshow/Home';
import Login from '../User/Login/Login';
import Registration from '../User/Registration/Registration';
import Collection from '../Product/Collection/Collection';
import ProductDetail from '../Product/Detail/ProductDetail';
import Cart from '../Cart/Cart';
import UserAccount from '../User/Account/UserAccount';
import RequireAuth from './RequireAuth';
import Footer from '../Footer/Footer';

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
                        <Route exact path="/collection/:type"  
                            render={(props) => <Collection key={props.match.params.type} {...props} />}
                        />
                        <Route path="/collection/:type/:id" component={ProductDetail} />
                        <Route path="/cart" component={Cart} />
                    <Footer />
                </Router>
            </Provider>
        );
    };
    
};

export default App;

