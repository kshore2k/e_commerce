import React, { Component } from 'react';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';
import './styles/ProductFilter.css';

class ProductFilter extends Component {

    showDropDown = (event) => {
        const sliderNum = document.getElementById(event.target.id).getAttribute("slider");

        document.getElementById(`slider${sliderNum}`).classList.toggle('closed');

        const element = document.getElementById(event.target.id);

        element.innerHTML = element.innerHTML === "+" ? "-" : "+";
    };

    render() {
        return (
            <div id="container-filters">

                <div className="filter">

                    <div className="filter-title">
                        <h1>CATEGORIES</h1>
                        <p id="categories" slider="1" onClick={this.showDropDown}>+</p>
                    </div>

                    <CategoryFilter collection={this.props.collection}/>

                </div>

                <div className="filter">

                    <div className="filter-title">
                        <h1>PRICE</h1>
                        <p id="price" slider="2" onClick={this.showDropDown}>+</p>
                    </div>

                    <PriceFilter collection={this.props.collection}/>

                </div>

                <div className="filter">

                    <div className="filter-title">
                        <h1>RATING</h1>
                        <p id="rating" slider="3" onClick={this.showDropDown}>+</p>
                    </div>

                    <RatingFilter collection={this.props.collection}/>

                </div>
                
            </div>
        );
    };
};

export default ProductFilter;