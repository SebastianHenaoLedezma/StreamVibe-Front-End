import React, { useEffect, useState } from 'react';
import './styles.sass';
import IconPlay from '../../assets/movie/play.png';
import IconAdd from '../../assets/movie/add.png';
import Reviews from '../../components/Reviews';
import InfoLanguageGenre from '../../components/Info';
import CardDirecMusic from '../../components/DirectorMusic';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import ReactStars from "react-rating-stars-component";
import { createReview, getMovieById } from '../../services/apiService';
import { useLocation } from 'react-router-dom';

const Movie = () => {
    const location = useLocation();
    const movieId = location.state.movieData;
    // const [movieInfoData, setMovieInfoData] = useState(movieData);
    const [movieData, setMovieData] = useState([]);

    
    
    
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [trailerPlayed, setTrailerPlayed] = useState(false);
    const [playButtonClicked, setPlayButtonClicked] = useState(false);

    const [reviews, setReviews] = useState();
    
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    
    useEffect(() => {
        const getData = async () => {
            try {
                console.log(movieId)
                const getInfoMovie = await getMovieById(movieId);
                setMovieData(getInfoMovie);
                setReviews(getInfoMovie.reviews || []);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 1000);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reviewData = {
            name: name,
            review: review,
            ratings: null,
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

    const handlePlayMovie = () => {
        setPlayButtonClicked(true);
    };

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const ratingStart = movieData?.ratings?.rating__avg || 0; // Verificación añadida
    const thirdExample = {
        size: 15,
        count: 5,
        value: ratingStart,
        color: "white",
        activeColor: "red",
        isHalf: true,
    };
    console.log(movieData)

    return (
        <section className="movie">
            <section className="movie__main">
                {trailerPlayed ? (
                    <video src={movieData?.movie_url} controls autoPlay className="h-[60vh] w-[97vw] movie__video"></video>
                ) : (
                    <img src={movieData.trailer_image_url} alt="" className="h-[60vh] w-[97vw] movie__image" />
                )}
                <div className="movie__details">
                    <h2 className="movie__title">{movieData?.title}</h2>
                    <p className="movie__description">{movieData?.description}</p>
                    <button
                        className="movie__button"
                        onClick={handlePlayMovie}
                        disabled={playButtonClicked}
                    >
                        <img src={IconPlay} alt="" className="movie__button-icon" />
                        Play now
                    </button>
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
                        <h3 className="movie__subtitle">Cast</h3>
                        <div className='movie__header-container'>
                            {movieData?.actors.map((actor, index) => (
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
                                // overlay: 'bg-gradient-to-r from-red-300',
                                modal: 'modal-review bg-neutral-800',
                            }}>
                            <h2 className="modal-title">Submit Your Review</h2>
                            <form onSubmit={handleSubmit} className="modal-form">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="form-input"
                                    />
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
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Released Year</h3>
                        <p className="movie__text">{movieData?.release_year}</p>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Available Languages</h3>
                        <div className='movie__detail-container'>
                            {movieData?.languages.map((info, index) => (
                                <InfoLanguageGenre key={index} info={info} />
                            ))}
                        </div>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Ratings</h3>
                        <div className="review-card__rating">
                            <ReactStars {...thirdExample} />
                        </div>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Genre</h3>
                        <div className='movie__detail-container'>
                            {movieData?.genres.map((info, index) => (
                                <InfoLanguageGenre key={index} info={info} />
                            ))}
                        </div>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Director</h3>
                        <div className='movie__detail-director-music'>
                            {movieData?.directors.map((info, index) => (
                                <CardDirecMusic key={index} info={info} />
                            ))}
                        </div>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Music</h3>
                        <div className='movie__detail-director-music'>
                            {movieData?.music_creators.map((info, index) => (
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
