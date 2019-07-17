import React, { Component } from 'react';
import hero from '../static/tent-hero.jpg';
import ProductFilter from './ProductFilter';
import { connect } from 'react-redux';
import { fetchCollection } from '../actions/productActions';
import './Collection.css';

class Collection extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         type: this.props.match.params.type
    //     };
    // };

    componentDidMount() {
        this.props.fetchCollection(this.props.match.params.type);
    };

    render() {
        let collection;
    
        if(this.props.collection[this.props.match.params.type]) {
            collection = this.props.collection[this.props.match.params.type].map(product => {
                return (
                    <div key={product.item_number} className="container-product">
                        <img src={product.image_url} alt="product"/>
                        <h1>{product.title}</h1>
                        <h2>${product.price}</h2>
                        <p>{product.rating}</p>
                    </div>
                );
            });
        }
        

        return (
            <div>
                <img id="tent-hero" src={hero} alt="tents"/>

                <div id="title-filters">
                    <h1 id="product-title">{this.props.match.params.type.toUpperCase()}</h1>
                    <ProductFilter />

                    <div id="container-all-products">

                        {collection}

                    </div>

                    <p>The right shelter is crucial to a successful adventure. 
                        When the rain and wind starts, rely on Rainier Designs tents to keep you safe and dry. 
                        We optimize every square inch of space to give you as much room as possible. 
                        We utilize durable materials for our functional designs, all while minimizing weight to make our tents versatile, fast and light.
                    </p>

                </div>
                
            </div>
        );
    };
    
};

const mapStateToProps = state => ({
    collection: state.products.collections
});

export default connect(mapStateToProps, { fetchCollection })(Collection);