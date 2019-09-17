import React from 'react';
import border from '../../../static/grey-border.jpg';
import './styles/ProductFeatures.css';

const ProductFeatures = (props) => {
    let features = props.features.split(".").map((feature,idx) => {
        return <li key={idx}>{feature}</li>
    });


    return (
        <div id="container-features">
            <h1>KEY FEATURES</h1>
            <img src={border} alt="feature-border"/>
            <ul>
                {features}
            </ul>
        </div>
    );
};

export default ProductFeatures;