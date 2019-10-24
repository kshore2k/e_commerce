import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCollectionByCategory } from '../../../actions/productActions';

class CategoryFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            category: ""
        };
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
        return (
            <div className="slider closed" id="slider1">
                <ul className="sub-nav">
                    <li className="cat-filter"><span className="filter-link" onClick={this.onCatgoryFilterUpdate} value="1 Person Tent">1 Person Tent</span></li>
                    <li className="cat-filter"><span className="filter-link" onClick={this.onCatgoryFilterUpdate} value="2 Person Tent">2 Person Tent</span></li>
                    <li className="cat-filter"><span className="filter-link" onClick={this.onCatgoryFilterUpdate} value="3 Person Tent">3 Person Tent</span></li>
                    <li className="cat-filter"><span className="filter-link" onClick={this.onCatgoryFilterUpdate} value="4 Person Tent">4 Person Tent</span></li>
                </ul>
            </div>
        );
    };
};

export default connect(null, { fetchCollectionByCategory })(CategoryFilter);

