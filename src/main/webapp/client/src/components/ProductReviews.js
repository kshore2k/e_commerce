import React from 'react';
import StarRating from './StarRating';
import './ProductReviews.css';

const ProductReview = (props) => {
    
    let reviews = props.reviews.map((review) => {
        return (
            <div className="container-review" key={review.id}>
                <StarRating rating={4}/>
                <h2>Review Title</h2>

                <p className="review">{review.descripion}</p>
                <p className="review-user">UserName</p>
                <p className="review-date">{new Intl.DateTimeFormat('en-US').format(new Date(review.createdAt))}</p>
            </div>
        );
    });

    return (
        <div id="container-reviews-main">
            
            <h1><span>PRODUCT REVIEWS</span></h1>
            
            {reviews}

        </div>
    );
};

export default ProductReview;