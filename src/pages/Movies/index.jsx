import React from 'react';
import './styles.sass';
import movies from '../../components/data/movies.json';
import IconPlay from '../../assets/movie/play.png';
import IconAdd from '../../assets/movie/add.png';
import Reviews from '../../components/Reviews';



const Movie = () => {
    return (
        <section className="movie">
            <section className="movie__main">
                <img src="https://media.tycsports.com/files/2022/03/30/408821/halo-the-series-paramount-plus_862x485_wmk.jpg?v=1" alt="" className="movie__image" />
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
                    <div className="movie__cast">
                        {/* Aca va a ir el componente de cast */}
                    </div>
                </section>
                <section className="movie__section movie__section-reviews">
                    <div className="movie__reviews-header">
                        <h3 className="movie__subtitle">Reviews</h3>
                        <button className="movie__button">
                            <img src={IconAdd} alt="" className="movie__button-icon" />
                            Add Your Review
                        </button>
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

                    <div className="movie__pagination">
                        {/* Aca van los botones de pagination */}
                    </div>
                </section>
                <section className="movie__section movie__section-info">
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Released Year</h3>
                        <p className="movie__text">2020</p>
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Available Languages</h3>
                        {/* Componente de lenguajes */}
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Ratings</h3>
                        {/* Componente de rating */}
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Genre</h3>
                        {/* Componente de géneros */}
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Director</h3>
                        {/* Componente de director */}
                    </div>
                    <div className="movie__detail">
                        <h3 className="movie__subtitle">Music</h3>
                        {/* Componente de música */}
                    </div>
                </section>
            </section>
        </section>
    );
};

export default Movie;
