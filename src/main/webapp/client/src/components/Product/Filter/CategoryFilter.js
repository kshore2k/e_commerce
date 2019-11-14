import React, { Component } from 'react';
import category from './categories';
import { connect } from 'react-redux';
import { fetchCollectionByCategory } from '../../../actions/productActions';

class CategoryFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: ""
        };
    };

    componentDidMount() {
        if (this.props.categoryFilterApplied) {
            const collection = this.props.collection;
            
            const categoryQuery = {
                category: this.props.categoryFilter
            };

            this.props.fetchCollectionByCategory(collection, categoryQuery);
        }
    };

    onCatgoryFilterUpdate = (event) => {
        const { target } = event;
        const category = target.getAttribute("value");
        
        this.setState({ category }, () => {
            const collection = this.props.collection;
            const categoryQuery = {
                category: this.state.category
            };

            this.props.fetchCollectionByCategory(collection, categoryQuery);
        });
        
    };

    render() {
        const categories = category[this.props.collection].map((category, index) => {
            return <li className="cat-filter" key={index}><span className="filter-link" onClick={this.onCatgoryFilterUpdate} value={category}>{category}</span></li>
        });

        return (
            <div className="slider closed" id="slider1">
                <ul className="sub-nav">
                    {categories}
                </ul>
            </div>
        );
    };
};

const mapStateToProps = state => ({
    categoryFilterApplied: state.products.isCatFilterApplied,
    categoryFilter: state.products.catFilter
});

export default connect(mapStateToProps, { fetchCollectionByCategory })(CategoryFilter);

