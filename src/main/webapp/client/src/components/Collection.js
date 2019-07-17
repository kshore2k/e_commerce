import React, { Component } from 'react';
import HeroImage from './HeroImage';
import ProductFilter from './ProductFilter';
import StarRating from './StarRating';
import CollectionSummary from './CollectionSummary';
import { connect } from 'react-redux';
import { fetchCollection } from '../actions/productActions';
import './Collection.css';

class Collection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: this.props.match.params.type
        };
    };

    componentDidMount() {
        this.props.fetchCollection(this.state.type);
    };

    render() {
        let collection;
    
        if(this.props.collection[this.state.type]) {
            collection = this.props.collection[this.state.type].map(product => {
                return (
                    <div key={product.item_number} className="container-product">
                        <img src={product.image_url} alt="product"/>
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <StarRating rating={product.rating} />
                    </div>
                );
            });
        }

        return (
            <div>

                <HeroImage collection={this.state.type} />

                <div id="title-filters">
                    
                    <h1 id="product-title">{this.state.type.toUpperCase()}</h1>
                    <ProductFilter />

                    <div id="container-all-products">
                        {collection}
                    </div>

                    <CollectionSummary collection={this.state.type} />

                </div>
                
            </div>
        );
    };
    
};

const mapStateToProps = state => ({
    collection: state.products.collections
});

export default connect(mapStateToProps, { fetchCollection })(Collection);