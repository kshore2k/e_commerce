import React from 'react';
import StarRating from '../StarRating/StarRating';
import './styles/ProductReviews.css';

const ProductReview = (props) => {
    
    let reviews = props.reviews.map((review) => {
        let initials = review.userName.split(' ');
        initials = initials[1] ? initials[0][0] + initials[1][0] : initials[0][0];

        return (
            <div className="container-review" key={review.id}>
                <StarRating rating={review.rating}/>
                <h2>{review.title}</h2>

                <p className="review">{review.description}</p>

                <div className="container-review-details">
                    <div className="review-avatar">
                        {initials}
                    </div>
                    <div className="review-details">
                        <p className="review-user">{review.userName}</p>
                        <p className="review-date">{new Intl.DateTimeFormat('en-US').format(new Date(review.createdAt))}</p>
                    </div>
                </div>
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