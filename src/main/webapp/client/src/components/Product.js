import React, { Component } from 'react';
import hero from '../static/tent-hero.jpg';
import ProductFilter from './ProductFilter';

import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div>
                <img id="tent-hero" src={hero} alt="tents"/>

                <div id="title-filters">
                    <h1 id="product-title">TENTS</h1>
                    <ProductFilter />

                    <div className="container-all-products">

                        <div className="container-product"></div>

                    </div>
                </div>
                
            </div>
        );
    };
    
};

export default Product;