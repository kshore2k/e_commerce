import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import './AddToCart.css';

class AddToCart extends Component {
    // constructor(props) {
    //     super(props);
    // };


    componentDidMount() {

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
                    <span> ></span> {this.props.title.toUpperCase()}
                </p>

                <p id="item_num">{this.props.itemNumber}</p>
                <h1>{this.props.title}</h1>

                <h2>$189.95</h2>

                <StarRating rating={this.props.rating}/>

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
                    <button id="add-to-cart">ADD TO CART</button>
                </form>
            </div>
        );
    };
};

export default AddToCart;