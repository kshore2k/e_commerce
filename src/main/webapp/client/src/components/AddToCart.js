import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import StarRating from './StarRating';
import './AddToCart.css';

class AddToCart extends Component {

    componentDidMount() {

    };

    addProductToCart = (event) => {
        event.preventDefault();
        this.props.addToCart(this.props.cartId, this.props.product.id);
        console.log("Added")
    }

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
                </form>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    cartId: state.user.details.cart.id
});

export default connect(mapStateToProps, { addToCart })(AddToCart);