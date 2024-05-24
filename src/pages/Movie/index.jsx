import React, { useEffect, useState } from 'react';
import './styles.sass';
import movies from '../../components/data/movies.json';
import IconPlay from '../../assets/movie/play.png';
import IconAdd from '../../assets/movie/add.png';
import Reviews from '../../components/Reviews';
import InfoLanguageGenre from '../../components/Info';
import CardDirecMusic from '../../components/DirectorMusic';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import { getFaqs } from '../../services/apiService';

const Movie = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await getFaqs();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data)

    return (
        <section className="movie">
            <section className="movie__main">
                <img src={movies.trailer_url} alt="" className="movie__image" />
                <div className="movie__details">
                    <h2 className="movie__title">{movies.title}</h2>
                    <p className="movie__description">
                        {movies.description}
                    </p>
                    <button className="movie__button">
                        <img src={IconPlay} alt="" className="movie__button-icon" />
                        Play now
                    </button>
                </div>
            </section>
            <section className="movie__info">
                <section className="movie__section movie__section-description">
                    <h3 className="movie__subtitle">Description</h3>
                    <p className="movie__text">
                        {movies.description}
                    </p>
                </section>
                <section className="movie__section movie__section-cast">
                    <div className="movie__header">
                        <h3 className="movie__subtitle">Cast</h3>
                        <div className='movie__header-container'>
                            {movies.cast.map((actor, index) => (
                                <img src={actor} alt="" key={index} className='movie__header-container-image' />
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
                                overlay: 'bg-gradient-to-r from-red-300',
                                modal: 'bg-neutral-800',
                            }}>
                            <h2 >Simple centered modal</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                                hendrerit risus, sed porttitor quam.
                            </p>
                        </Modal>

                    </div>
                    <div className="movie__reviews-slider">
                        <div className="movie__reviews">
                            {movies.reviews && movies.reviews.length > 0 ? (
                                movies.reviews.map((review, index) => (
                                    <Reviews review={review} key={index} className="movie__review" />
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
                        <p className="movie__text">{movies.year}</p>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Available Languages</h3>
                        <div className='movie__detail-container'>
                            {movies.languages.map((info, index) => (
                                <InfoLanguageGenre key={index} info={info} />
                            ))}
                        </div>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Ratings</h3>
                        <div className="review-card__rating">
                            {/* Estrellas pero me da error aun */}
                        </div>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Genre</h3>
                        <div className='movie__detail-container'>
                            {movies.genre.map((info, index) => (
                                <InfoLanguageGenre key={index} info={info} />
                            ))}
                        </div>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Director</h3>
                        <div className='movie__detail-director-music'>
                            {movies.director.map((info, index) => (
                                <CardDirecMusic key={index} info={info} />
                            ))}
                        </div>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Music</h3>
                        <div className='movie__detail-director-music'>
                            {movies.music.map((info, index) => (
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
