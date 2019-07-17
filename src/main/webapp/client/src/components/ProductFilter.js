import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProductFilter.css';

class ProductFilter extends Component {

    showDropDown = (event) => {
        const sliderNum = document.getElementById(event.target.id).getAttribute("slider");

        document.getElementById(`slider${sliderNum}`).classList.toggle('closed');

        const element = document.getElementById(event.target.id);

        element.innerHTML = element.innerHTML === "+" ? "-" : "+";
    }

    render() {
        return (
            <div id="container-filters">

                <div className="filter">

                    <div className="filter-title">
                        <h1>CATEGORIES</h1>
                        <p id="categories" slider="1" onClick={this.showDropDown}>+</p>
                    </div>

                    <div className="slider closed" id="slider1">
                        <ul className="sub-nav">
                            <li><Link to="" className="filter-link">1 Person tents</Link></li>
                            <li><Link to="" className="filter-link">2 Person tents</Link></li>
                            <li><Link to="" className="filter-link">3 Person tents</Link></li>
                            <li><Link to="" className="filter-link">4 Person tents</Link></li>
                        </ul>
                    </div>

                </div>

                <div className="filter">

                    <div className="filter-title">
                        <h1>PRICE</h1>
                        <p id="price" slider="2" onClick={this.showDropDown}>+</p>
                    </div>

                    <div className="slider closed" id="slider2">
                        <ul className="sub-nav">
                            <li>
                                <input type="text" placeholder="min"/>
                                <input type="text" placeholder="max"/>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="filter">

                    <div className="filter-title">
                        <h1>RATING</h1>
                        <p id="rating" slider="3" onClick={this.showDropDown}>+</p>
                    </div>

                    <div className="slider closed" id="slider3">
                        <ul className="sub-nav">
                            <li><input type="checkbox"/>1</li>
                            <li><input type="checkbox"/>2</li>
                            <li><input type="checkbox"/>3</li>
                            <li><input type="checkbox"/>4</li>
                            <li><input type="checkbox"/>5</li>
                        </ul>
                    </div>

                </div>
                
            </div>
        );
    };
};

export default ProductFilter;