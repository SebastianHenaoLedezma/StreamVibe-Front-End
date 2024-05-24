import React, { useEffect, useState } from 'react';
import './styles.sass';
import IconEdit from '../../assets/movie/edit.png';
import IconClose from '../../assets/movie/close.png';
import ReactStars from "react-rating-stars-component";

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

    const thirdExample = {
        size: 15,
        count: 5,
        value: 4,
        color: "white",
        activeColor: "red",
        onChange: newValue => {
          console.log(`Example 3: new value is ${newValue}`);
        }
      };

    return (
        <div className="review">
            <div className="review-card">
                <div className="review-card__header">
                    <div className="review-card__info">
                        <h4 className="review-card__author">{review.name}</h4>
                    </div>
                    <div className="review-card__rating">
                        <ReactStars {...thirdExample} />
                        {/* {renderStars(hoverRating || averageRating)}
                        <span className="review-card__rating-value">{averageRating.toFixed(1)}</span> */}
                    </div>
                </div>
                <p className="review-card__text">{review.text}</p>
                <div className="flex justify-end gap-4">
                    <button className="">
                        <img src={IconEdit} alt="" className="movie__button-icon" />
                    </button>
                    <button className="">
                        <img src={IconClose} alt="" className="movie__button-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
