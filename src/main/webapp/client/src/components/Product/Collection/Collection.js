import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HeroImage from './HeroImage';
import ProductFilter from '../Filter/ProductFilter';
import StarRating from '../StarRating/StarRating';
import CollectionSummary from './CollectionSummary';
import { connect } from 'react-redux';
import { fetchCollection } from '../../../actions/productActions';
import './styles/Collection.css';

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
                    <Link key={product.item_number} to={`${this.props.match.url}/${product.id}`} className="show-product-link">
                        <div className="container-product">
                            <img src={product.image_url} alt="product"/>
                            <h1>{product.title}</h1>
                            <h2>${product.price}</h2>
                            <StarRating rating={product.rating} />
                        </div>
                    </Link>
                );
            });
        }

        return (
            <div>

                <HeroImage collection={this.state.type} />

                <div id="title-filters">

                    <h1 id="product-title">{this.state.type.toUpperCase()}</h1>
                    <ProductFilter collection={this.state.type}/>

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