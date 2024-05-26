import React, { useContext, useEffect, useState } from 'react';
import './styles.sass';
import IconEdit from '../../assets/movie/edit.png';
import IconClose from '../../assets/movie/close.png';
import ReactStars from "react-rating-stars-component";
import { updateReview, deleteReview, createRatingOnReview } from '../../services/apiService';
import { UserContext } from '../../context/UserContext';

const Reviews = ({ review, onDelete, onUpdate }) => {
    const { globalUser } = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [newReview, setNewReview] = useState(review.review);
    const [rating, setRating] = useState(review.rating || 0);
    const [hoverRating, setHoverRating] = useState(0);
    const [averageRating, setAverageRating] = useState(review.rating || 0);

    useEffect(() => {
        const newRating = (review.rating + rating) / 2;
        setAverageRating(newRating);
    }, [rating, review.rating]);

    const handleEdit = async () => {
        const updatedReview = { ...review, review: newReview, rating: averageRating };
        try {
            await updateReview(review.id, updatedReview);
            onUpdate(updatedReview);
            setIsEditing(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteReview(review.id);
            onDelete(review.id);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const ratingStart = review.average_rating || 0;
    const thirdExample = {
        size: 15,
        count: 5,
        value: ratingStart,
        color: "white",
        activeColor: "red",
        onChange: (newValue) => {
            createRatingOnReview({ reviewId: review.id, rating: newValue, user_id: globalUser.id });
        },
    };


    const usercanEdit = globalUser?.id === review?.user?.id;

    return (
        <div className="review">
            <div className="review-card">
                <div className="review-card__header">
                    <div className="review-card__info">
                        <h4 className="review-card__author">{review?.user_name}</h4>
                    </div>
                    <div className="review-card__rating">
                        <ReactStars {...thirdExample} classNames='review-card__rating-value' />
                        <p className='review-card__rating-text'>{ratingStart}</p>
                    </div>
                </div>
                {isEditing ? (
                    <textarea
                        value={newReview}
                        onChange={(e) => setNewReview(e.target.value)}
                        className="form-textarea"
                    />
                ) : (
                    <p className="review-card__text">{review.review}</p>
                )}
                <div className="flex justify-end gap-4 mt-4">
                    {isEditing ? (
                        <button onClick={handleEdit} className={!usercanEdit}>
                            Save
                        </button>
                    ) : (
                        <button onClick={() => setIsEditing(true)} disabled={!usercanEdit}>
                            <img src={IconEdit} alt="Edit" className="movie__button-icon" />
                        </button>
                    )}
                    <button onClick={handleDelete} disabled={!usercanEdit}>
                        <img src={IconClose} alt="Delete" className="movie__button-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;
