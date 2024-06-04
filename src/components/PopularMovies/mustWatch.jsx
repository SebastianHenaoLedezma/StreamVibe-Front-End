import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import { getMovieById } from "../../services/apiService";

const MustWatch = ({movie}) => {

  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    setLoading(true);
    try {
      const movieResult = await getMovieById(movie.id);
      setMovieData(movieResult);
      navigate(`/movie/${movie.id}`, { state: { movieData: movieResult.id } });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };


  const rating = movie.average_rating
  const thirdExample = {
    size: 15,
    count: 5,
    value: rating,
    color: "white",
    isHalf: true,
    activeColor: "red",

  };
  return (
    <div className=' border-solid border-2 bg-[#1A1A1A] border-neutral-800 rounded-lg p-4 cursor-pointer' onClick={handleClick}>
      <div className="grid grid-cols-1 gap-2">
        <img src={movie.trailer_image_url} alt='img' className="h-[250px] rounded-md" />
      </div>
      <div className="flex justify-between items-center  mt-4">
        <div className='bg-neutral-900 rounded-xl px-2 py-1 text-xs'>
          {movie.duration}
        </div>
        <div className='flex justify-center items-center'>
          <ReactStars {...thirdExample} />
          <span className='ms-1 text-sm '> {movie.total_rating}</span>
        </div>
      </div>
    </div>
  )
}

export default MustWatch