import React, { useContext, useState } from 'react';
import "./styles.sass";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { getMoviesByGenreId } from '../../services/apiService';
import { UserContext } from '../../context/UserContext';

const Generos = ({ genero }) => {
  const { globalUser } = useContext(UserContext);
  const [genreData, setGenreData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    if (globalUser) {
      setLoading(true);
      try {
        const genreResult = await getMoviesByGenreId(genero.id);
        setGenreData(genreResult);
        navigate(`/moviesbygenre/${genero.id}`, { state: { genreData: genreResult } });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    } else {
      navigate('/login');
    }
  };

  const moviesToShow = genero.movies.slice(0, 4);

  return (
    <>
      <div className="container__genres cursor-pointer" onClick={handleButtonClick}>
        <div className="thumbnails-wrapper">
          <div className="thumbnails">
            {moviesToShow.length > 0 ? (
              moviesToShow.map((movie, index) => (
                <img key={index} src={movie.trailer_thumbnail} style={{ width: "105.3px", height: "123.5px" }} alt={`imagen genero ${index}`} />

              ))
            ) : (
              <p>No hay películas disponibles.</p>
            )}
          </div>
          <div className="overlay"></div>
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
