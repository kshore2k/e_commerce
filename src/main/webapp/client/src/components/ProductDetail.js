import React, { Component } from 'react';
import AddToCart from './AddToCart';
import ProductFeatures from './ProductFeatures';
import ProductReviews from './ProductReviews';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/productActions';
import './ProductDetail.css';

class ProductDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    };

    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id);
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.product) {
            this.setState({ product: nextProps.product });
        }
    };

    render() {
        if(this.state.product) {
            return (
                <div id="container-product-main">
                    <AddToCart 
                        collection={this.state.product.collection}
                        title={this.state.product.title}
                        itemNumber={this.state.product.item_number}
                        rating={this.state.product.rating}
                        price={this.state.product.price}
                        product={this.state.product}
                    />
                    <div id="container-show-product">
                        <img src={this.state.product.image_url} alt={this.state.product.title}/>

                        <p id="product-description">{this.state.product.description}</p>

                        <ProductFeatures features={this.state.product.features}/>

                        <ProductReviews reviews={this.state.product.reviews}/>
                    </div>
                </div>
            ); 
        } else {
            return <p>...Loading</p>
        }
    };
};

const mapStateToProps = state => ({
    product: state.products.product
});

export default connect(mapStateToProps, { fetchProduct })(ProductDetail);