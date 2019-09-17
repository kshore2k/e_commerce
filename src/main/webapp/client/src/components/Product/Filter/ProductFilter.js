import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import oneStar from '../../../static/1stars.png'; 
import twoStar from '../../../static/2stars.png';
import threeStar from '../../../static/3stars.png';
import fourStar from '../../../static/4stars.png';
import fiveStar from '../../../static/5stars.png';
import './styles/ProductFilter.css';

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
                            <li className="cat-filter"><Link to="" className="filter-link">1 Person tents</Link></li>
                            <li className="cat-filter"><Link to="" className="filter-link">2 Person tents</Link></li>
                            <li className="cat-filter"><Link to="" className="filter-link">3 Person tents</Link></li>
                            <li className="cat-filter"><Link to="" className="filter-link">4 Person tents</Link></li>
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
                                <input className="price-filter" type="number" min="0" placeholder="Min."/>
                                <span id="price-seperator"> - </span>
                                <input className="price-filter" type="number" min="0" placeholder="Max."/>
                            </li>
                            <li>
                                <button id="price-update">Update</button>
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
                            <li>
                                <input type="checkbox" value="1"/>
                                <img src={oneStar} alt="1star"></img>
                            </li>
                            <li>
                                <input type="checkbox" value="2"/>
                                <img src={twoStar} alt="2star"></img>
                            </li>
                            <li>
                                <input type="checkbox" value="3"/>
                                <img src={threeStar} alt="3star"></img>
                            </li>
                            <li>
                                <input type="checkbox" value="4"/>
                                <img src={fourStar} alt="4star"></img>
                            </li>
                            <li>
                                <input type="checkbox" value="5"/>
                                <img src={fiveStar} alt="5star"></img>
                            </li>
                            
                            
                        </ul>
                    </div>

                </div>
                
            </div>
        );
    };
};

export default ProductFilter;