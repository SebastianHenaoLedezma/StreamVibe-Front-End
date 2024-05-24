import { useEffect, useState } from "react";
import MovieCard from "../../components/movieGenre/moviegenre";
import { getMoviesByGenreId } from "../../services/apiService";


const MovieByGenre = () => {

  const [moviesByGenre, setmoviesByGenre] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 
  return (
    <div className='bg-gray-950 border-solid border bg-neutral-800 border-neutral-700 rounded-lg p-4 my-6 mx-6'>
      <button className="bg-red-800 font-bold px-6 rounded-lg text-xs h-10 -translate-y-9" ata-ripple-light="true">
        Register
      </button>
      <p className="mb-8 font-bold">Action</p>
      <section className="">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-11">
          <MovieCard />
        </div>
      </section>
    </div>
  )
}

export default MovieByGenre