import React, { useContext, useEffect, useState } from 'react';
import './styles.sass';
import IconPlay from '../../assets/movie/play.png';
import IconAdd from '../../assets/movie/add.png';
import Reviews from '../../components/Reviews';
import InfoLanguageGenre from '../../components/Info';
import CardDirecMusic from '../../components/DirectorMusic';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactStars from "react-rating-stars-component";
import { createRatingOnMovie, createReview, getMovieById } from '../../services/apiService';
import { useNavigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import Loading from '../../components/loading/loading';
import Error from '../../components/error/error';

const Movie = () => {
    const { globalUser } = useContext(UserContext);
    const location = useLocation();
    const movieId = location.state.movieData;
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [trailerPlayed, setTrailerPlayed] = useState(false);

    const navigate = useNavigate();

    const [reviews, setReviews] = useState([]);
    const [userRating, setUserRating] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    const onOpenModal = () => {
        if (globalUser) {
            setOpen(true);
        } else {
            navigate("/login", { state: { from: location } });
        }
    };

    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const getInfoMovie = await getMovieById(movieId);
                setMovieData(getInfoMovie);
                setReviews(getInfoMovie.reviews || []);
                setAverageRating(Math.round(getInfoMovie.ratings || 0));
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [movieId]);

    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            user_id: globalUser.id,
            review: review,
            movie_id: movieData.id,
        };

        try {
            const result = await createReview(reviewData);
            console.log('Success:', result);
            setReviews([...reviews, result]);
            setName('');
            setReview('');
            onCloseModal();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        const trailerTimer = setTimeout(() => {
            setTrailerPlayed(true);
        }, 2000);

        return () => clearTimeout(trailerTimer);
    }, []);

    const handleDeleteReview = (reviewId) => {
        const updatedReviews = reviews.filter(review => review.id !== reviewId);
        setReviews(updatedReviews);
    };

    const handleUpdateReview = (updatedReview) => {
        const updatedReviews = reviews.map(review => {
            if (review.id === updatedReview.id) {
                return updatedReview;
            }
            return review;
        });
        setReviews(updatedReviews);
    };

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

    const calculateAverageRating = (newRating) => {
        const currentRating = movieData.ratings || 0;
        return Math.round((currentRating + newRating) / 2);
    };

    const thirdExample = {
        size: 15,
        count: 5,
        value: averageRating,
        color: "white",
        activeColor: "red",
        onChange: async (newValue) => {
            if (typeof newValue === 'number') {
                const newAverage = calculateAverageRating(newValue);
                try {
                    await createRatingOnMovie({ movieId: movieData.id, rating: newValue, user_id: globalUser.id });
                    setUserRating(newValue);
                    setAverageRating(newAverage);
                } catch (error) {
                    console.error('Error:', error);
                }
            } else {
                console.error('Invalid rating value:', newValue);
            }
        },
    };

    return (
        <section className="movie">
            <section className="movie__main">
                <video src={movieData?.movie_url} controls autoPlay className="movie__video" poster={movieData.trailer_image_url}></video>
                <div className="movie__details">
                    <h1 className="movie__title">{movieData?.title}</h1>
                </div>
            </section>
            <section className="movie__info">
                <section className="movie__section movie__section-description">
                    <h3 className="movie__subtitle">Description</h3>
                    <p className="movie__text">
                        {movieData?.description}
                    </p>
                </section>
                <section className="movie__section movie__section-cast">
                    <div className="movie__header">
                        <h3 className="movie__subtitle">Actors</h3>
                        <div className='movie__header-container'>
                            {movieData?.actors?.map((actor, index) => (
                                <img src={actor.photo_url} alt="" key={index} className='movie__header-container-image' />
                            ))}
                        </div>
                    </div>
                </section>
                <section className="movie__section movie__section-reviews">
                    <div className="movie__reviews-header">
                        <h3 className="movie__subtitle">Reviews</h3>
                        <button className="movie__button" onClick={onOpenModal}>
                            <img src={IconAdd} alt="" className="movie__button-icon" />
                            Add Your Review
                        </button>
                        <Modal
                            open={open}
                            onClose={onCloseModal}
                            center
                            classNames={{
                                modal: 'modal-review bg-neutral-800',
                            }}>
                            <h2 className="modal-title">Submit Your Review</h2>
                            <form onSubmit={handleSubmit} className="modal-form">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name: {globalUser?.name}</label>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="review" className="form-label">Review:</label>
                                    <textarea
                                        id="review"
                                        value={review}
                                        onChange={(e) => setReview(e.target.value)}
                                        required
                                        className="form-textarea"
                                    />
                                </div>
                                <button type="submit" className="submit-button">Submit</button>
                            </form>
                        </Modal>
                    </div>
                    <div className="movie__reviews-slider">
                        <div className="movie__reviews">
                            {reviews && reviews.length > 0 ? (
                                reviews.map((review, index) => (
                                    <Reviews
                                        review={review}
                                        key={index}
                                        onDelete={handleDeleteReview}
                                        onUpdate={handleUpdateReview}
                                        className="movie__review"
                                    />
                                ))
                            ) : (
                                <p>No reviews available.</p>
                            )}
                        </div>
                    </div>
                </section>
                <section className="movie__section movie__section-info">
                    <div className="movie__detail movie__detail-release">
                        <h3 className="movie__subtitle">Released Year</h3>
                        <p className="movie__text">{movieData?.release_year}</p>
                    </div>
                    <div className="movie__detail movie__detail-language">
                        <h3 className="movie__subtitle">Available Languages</h3>
                        <div className='movie__detail-container'>
                            {movieData?.languages?.map((info, index) => (
                                <InfoLanguageGenre key={index} info={info} />
                            ))}
                        </div>
                    </div>
                    <div className="movie__detail movie__detail-rating">
                        <h3 className="movie__subtitle">Ratings</h3>
                        <div className="review-card__rating">
                            <ReactStars {...thirdExample} />
                            <p className='review-card__rating-text'>{averageRating}</p>
                        </div>
                    </div>
                    <div className="movie__detail movie__detail-genre">
                        <h3 className="movie__subtitle">Genre</h3>
                        <div className='movie__detail-container'>
                            {movieData?.genres?.map((info, index) => (
                                <InfoLanguageGenre key={index} info={info} />
                            ))}
                        </div>
                    </div>
                    <div className="movie__detail movie__detail-director">
                        <h3 className="movie__subtitle">Director</h3>
                        <div className='movie__detail-director-music'>
                            {movieData?.directors?.map((info, index) => (
                                <CardDirecMusic key={index} info={info} />
                            ))}
                        </div>
                    </div>
                    <div className="movie__detail movie__detail-music">
                        <h3 className="movie__subtitle">Music</h3>
                        <div className='movie__detail-director-music'>
                            {movieData?.music_creators?.map((info, index) => (
                                <CardDirecMusic key={index} info={info} />
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Movie;
