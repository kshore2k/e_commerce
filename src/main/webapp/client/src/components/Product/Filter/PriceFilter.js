import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionByPrice } from '../../../actions/productActions';

class PriceFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            minPrice: "",
            maxPrice: ""
        };
    };

    onPriceFilterInput = (event) => {
        const { target: { name, value } } = event;

        this.setState({
            [name]: value
        });
    };

    isPriceSet = (priceBounds) => {
        if (priceBounds) {
            return true;
        } else {
            return false;
        }
    };

    onPriceFilterUpdate = (event) => {
        event.preventDefault();
        
        const state = this.state;
        
        const minPriceSet = this.isPriceSet(state.minPrice);
        const maxPriceSet = this.isPriceSet(state.maxPrice);
        
        const collection = this.props.collection;
        const priceQuery = minPriceSet && maxPriceSet ? state
                                        : minPriceSet ? { minPrice: state.minPrice, maxPrice: "10000" }
                                        : maxPriceSet ? { minPrice: "0", maxPrice: state.maxPrice }
                                        : { minPrice : "0", maxPrice: "10000" };
        
        this.props.fetchCollectionByPrice(collection, priceQuery);
    };

    render() {
        return (
            <div className="slider closed" id="slider2">
                <ul className="sub-nav">
                    <li>
                        <input 
                            className="price-filter" 
                            type="number" 
                            min="0" 
                            placeholder="Min." 
                            name="minPrice" 
                            value={this.state.minPrice} 
                            onChange={this.onPriceFilterInput}
                        />
                        <span id="price-seperator"> - </span>
                        <input 
                            className="price-filter" 
                            type="number" 
                            min="0" 
                            placeholder="Max." 
                            name="maxPrice" 
                            value={this.state.maxPrice} 
                            onChange={this.onPriceFilterInput}
                        />
                    </li>
                    <li>
                        <button id="price-update" onClick={this.onPriceFilterUpdate}>Update</button>
                    </li>
                </ul>
            </div>
        );
    };
};

export default connect(null, { fetchCollectionByPrice })(PriceFilter);