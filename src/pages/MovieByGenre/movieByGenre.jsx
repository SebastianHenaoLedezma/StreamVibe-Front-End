import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MovieCard from "../../components/movieGenre/moviegenre";
import { getMoviesByGenreId } from "../../services/apiService";

const MovieByGenre = () => {
  const location = useLocation();
  const genreData  = location.state.genreData;

  const [moviesByGenre, setMoviesByGenre] = useState([]);


  return (
    <div className='bg-gray-950 border-solid border-2 bg-neutral-800 border-neutral-600 rounded-lg p-4 my-6 mx-6'>
      <button className="bg-red-800 font-bold px-6 rounded-lg text-xs h-10 -translate-y-9" ata-ripple-light="true">
        Movies
      </button>
      <p className="mb-8 font-bold">{genreData.name}</p>
      <section className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-11">
          {genreData.movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MovieByGenre;
