import React, { Component } from 'react';
import AddToCart from './AddToCart';
import { connect } from 'react-redux';
import { fetchProduct } from '../actions/productActions';

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
                <div>
                    <AddToCart 
                        collection={this.state.product.collection}
                        title={this.state.product.title}
                        itemNumber={this.state.product.item_number}
                        rating={this.state.product.rating}
                    />
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