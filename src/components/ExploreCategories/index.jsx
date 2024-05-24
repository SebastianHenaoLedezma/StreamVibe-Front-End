import React, { useState } from 'react';
import "./styles.sass";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { getMoviesByGenreId } from '../../services/apiService';

const Generos = ({ genero }) => {

  const moviesToShow = genero.movies.slice(0, 4);
  const [genreData, setGenreData] = useState([])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const genreResult = await getMoviesByGenreId(genero.id);
      setGenreData(genreResult);
      navigate(`/moviesbygenre/${genero.id}`, { state: { genreData: genreResult } });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container__genres cursor-pointer" onClick={handleButtonClick}>
        <div className="thumbnails">
          {moviesToShow.length > 0 ? (
            moviesToShow.map((movie, index) => (
              <img key={index} src={movie.trailer_thumbnail} alt={`imagen genero ${index}`} />
            ))
          ) : (
            <p>No hay películas disponibles.</p>
          )}
        </div>
        <div className="cardDescription">
          <p>{genero.name}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img
                src="https://res.cloudinary.com/dhhyc88td/image/upload/v1716424831/IconRow_jptbh2.png"
                alt="navigation icon"
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Generos;
