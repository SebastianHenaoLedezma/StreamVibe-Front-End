import React, { useEffect, useState } from 'react';
import './styles.sass';

const Reviews = ({ review }) => {
    const [rating, setRating] = useState(review.rating || 0);
    const [hoverRating, setHoverRating] = useState(0);
    const [averageRating, setAverageRating] = useState(review.rating || 0);

    useEffect(() => {
        const newRating = (review.rating + rating) / 2;
        setAverageRating(newRating);
    }, [rating, review.rating]);

    const renderStars = (currentRating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= Math.floor(rating)) {
                stars.push(
                    <span
                        key={i}
                        className={`star filled`}
                        onClick={() => setRating(i)}
                        onMouseEnter={() => setHoverRating(i)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
                        &#9733;
                    </span>
                );
            } else if (i <= Math.ceil(rating)) {
                stars.push(
                    <span
                        key={i}
                        className={`star half-filled`}
                        onClick={() => setRating(i)}
                        onMouseEnter={() => setHoverRating(i)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
                        &#9733;
                    </span>
                );
            } else {
                stars.push(
                    <span
                        key={i}
                        className={`star`}
                        onClick={() => setRating(i)}
                        onMouseEnter={() => setHoverRating(i)}
                        onMouseLeave={() => setHoverRating(0)}
                    >
                        &#9733;
                    </span>
                );
            }
        }
        return stars;
    };

    return (
        <div className="review">
            <div className="review-card">
                <div className="review-card__header">
                    <div className="review-card__info">
                        <h4 className="review-card__author">{review.name}</h4>
                    </div>
                    <div className="review-card__rating">
                        {renderStars(hoverRating || averageRating)}
                        <span className="review-card__rating-value">{averageRating.toFixed(1)}</span>
                    </div>
                </div>
                <p className="review-card__text">{review.text}</p>
            </div>
        </div>
    );
};

export default Reviews;
