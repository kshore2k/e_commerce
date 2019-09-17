import React from 'react';
import zeroStar from '../../../static/0stars.png'; 
import oneStar from '../../../static/1stars.png'; 
import twoStar from '../../../static/2stars.png';
import threeStar from '../../../static/3stars.png';
import fourStar from '../../../static/4stars.png';
import fiveStar from '../../../static/5stars.png';

const StarRating = (props) => {

    let imgSrc = props.rating === 0 ? zeroStar : 
                 props.rating === 1 ? oneStar :
                 props.rating === 2 ? twoStar :
                 props.rating === 3 ? threeStar :
                 props.rating === 4 ? fourStar :
                 props.rating === 5 ? fiveStar : null;

    return <img id="rating" src={imgSrc} alt="star-rating"/>;
};

export default StarRating;