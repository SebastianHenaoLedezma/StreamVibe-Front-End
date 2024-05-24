import { useState } from 'react';
import { BsFillPlayFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getMovieById } from '../../services/apiService';

const MovieCard = ({ movie }) => {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handlePlayButtonClick = async () => {
    setLoading(true);
    try {
      navigate(`/movie/`, { state: { movieData: movie.id } });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className='border-solid border-2 bg-neutral-800 border-neutral-700 rounded-lg p-4 cursor-pointer' onClick={handlePlayButtonClick}>
      <div className="grid grid-cols-1 gap-2">
        <img src={movie.trailer_thumbnail} alt='img' className="h-[250px] rounded-md" />
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className='bg-neutral-900 rounded-xl px-2 py-1 text-xs'>
          {movie.duration}
        </div>
        <div className='flex justify-center items-center'>
          <button>
            <BsFillPlayFill size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
