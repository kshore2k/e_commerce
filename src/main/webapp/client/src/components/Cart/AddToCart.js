import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/cartActions';
import StarRating from '../Product/StarRating/StarRating';
import './styles/AddToCart.css';

class AddToCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addedToCartMsg: ""
        };
    };

    isUserLoggedIn = () => {
        return this.props.isLoggedIn;
    };

    addProductToCart = (event) => {
        event.preventDefault();
        
        if (this.isUserLoggedIn()) {
            this.props.addToCart(this.props.cartId, this.props.product.id);

            this.setState({
                addedToCartMsg: "Added To Cart"
            }, this.fadeOutAddedMsg);
        } else {
            document.getElementById("addedToCartMsg").classList.add("pleaseLogin");
            this.setState({
                addedToCartMsg: "Please Login"
            });
        }  
    };

    fadeOutAddedMsg = () => {
        const addedToCartMsgEl = document.getElementById("addedToCartMsg");

        if (!addedToCartMsgEl.classList.contains("show")) {
            addedToCartMsgEl.classList.add("show");
        }

        setTimeout(() => {
            addedToCartMsgEl.classList.remove("show"); // fade out message
        },3000);
    };

    render() {
        return (
            <div id="add-product-container">
                <p id="nav-history">
                    <Link to="/" 
                        className="home-link">
                        HOME
                    </Link>
                    <span> ></span> 
                    <Link 
                        to={`/collection/${this.props.collection}`} 
                        className="home-link">
                        {this.props.collection.toUpperCase()}
                    </Link>
                    <span> ></span> {this.props.product.title.toUpperCase()}
                </p>

                <p id="item_num">{this.props.product.item_number}</p>
                <h1>{this.props.product.title}</h1>

                <h2>{this.props.product.price}</h2>

                <StarRating rating={this.props.product.rating}/>

                <p id="quantity">QUANTITY</p>

                <form>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <br></br>
                    <button id="add-to-cart" onClick={this.addProductToCart}>ADD TO CART</button>
                    <p id="addedToCartMsg" className="show">{this.state.addedToCartMsg}</p>
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    cartId: state.user.details.cart.id,
    isLoggedIn: state.user.loggedIn
});

export default connect(mapStateToProps, { addToCart })(AddToCart);