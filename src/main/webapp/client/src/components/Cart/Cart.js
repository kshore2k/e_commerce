import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCart } from '../../actions/cartActions';
import './styles/Cart.css';

class Cart extends Component {

    componentDidMount() {
        this.fetchUserCart();
    };

    fetchUserCart = () => {
        this.props.fetchCart(this.props.cartId);
    };

    mapProductsToTable = () => {
        const cartProducts = this.props.cart.products.map((product, index) => {
            return (
                <tr key={index} className="cart-item">
                    <td>
                        <img className="cart-item-img" src={product.image_url} alt="product"/>
                        <p className="cart-item-title">{product.title}</p>
                    </td>
                    <td>
                        <select className="cart-item-quantity">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <button className="remove-item-btn">✖</button>
                    </td>
                    <td>{product.price}</td>
                    <td>{product.price}</td>
                </tr>
            );
        });
        return cartProducts;
    };

    calculatePriceTotal = () => {
        let prices = this.props.cart.products.map(product => product.price);
        return prices.reduce((total, price) => total + price).toFixed(2);
    };

    render() {
        if (this.props.cart.products) {
            
            const cartProducts = this.mapProductsToTable();
            const totalPrice = this.calculatePriceTotal();

            return (
                <div id="container-main-cart">
                    <p id="nav-history">
                        <Link to="/" id="home-link">HOME</Link>
                        <span> ></span> SHOPPING CART
                    </p>

                    <div id="container-sub-cart">
                    <h1>YOUR SHOPPING CART</h1>
                    <table id="items-table">
                        <thead>
                            <tr>
                                <th>CART ITEMS</th>
                                <th>QUANTITY</th>
                                <th>ITEM PRICE</th>
                                <th>ITEM TOTAL</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {cartProducts}
                        </tbody>
                        
                    </table>
                    
                    <p id="cart-price-total">
                        GRAND TOTAL: 
                        <span>{totalPrice}</span>
                    </p>

                    </div>
                    
                </div>
            );
        }
        return <h1>Please Log In To View Your Cart</h1>;
    };
};

const mapStateToProps = state => ({
    cartId: state.user.details.cart.id,
    cart: state.cart.details
});

export default connect(mapStateToProps, { fetchCart })(Cart);