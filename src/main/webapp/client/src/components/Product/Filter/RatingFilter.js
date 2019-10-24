import React, { Component } from 'react';
import oneStar from '../../../static/1stars.png'; 
import twoStar from '../../../static/2stars.png';
import threeStar from '../../../static/3stars.png';
import fourStar from '../../../static/4stars.png';
import fiveStar from '../../../static/5stars.png';
import { connect } from 'react-redux';
import { fetchCollectionByRating } from '../../../actions/productActions';

class RatingFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: ""
        };
    };

    onRatingSelect = (event) => {
        const { target: { value } } = event;

        this.setState({ rating: value }, () => {
            const collection = this.props.collection;
            const ratingQuery = { 
                rating: this.state.rating 
            };
    
            this.props.fetchCollectionByRating(collection, ratingQuery);
        });
        
    };

    render() {
        return (
            <div className="slider closed" id="slider3">
                <ul className="sub-nav">
                    <li>
                        <input type="checkbox" value="1" onChange={this.onRatingSelect}/>
                        <img src={oneStar} alt="1star"></img>
                    </li>
                    <li>
                        <input type="checkbox" value="2" onChange={this.onRatingSelect}/>
                        <img src={twoStar} alt="2star"></img>
                    </li>
                    <li>
                        <input type="checkbox" value="3" onChange={this.onRatingSelect}/>
                        <img src={threeStar} alt="3star"></img>
                    </li>
                    <li>
                        <input type="checkbox" value="4" onChange={this.onRatingSelect}/>
                        <img src={fourStar} alt="4star"></img>
                    </li>
                    <li>
                        <input type="checkbox" value="5" onChange={this.onRatingSelect}/>
                        <img src={fiveStar} alt="5star"></img>
                    </li>
                </ul>
            </div>
        );
    };
};

export default connect(null, { fetchCollectionByRating })(RatingFilter);