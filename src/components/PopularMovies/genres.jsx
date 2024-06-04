import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getMoviesByGenreId } from '../../services/apiService';

const TopGenres = ({genres}) => {

  const [genreData, setGenreData] = useState([])
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    setLoading(true);
    try {
      const genreResult = await getMoviesByGenreId(genres.id);
      setGenreData(genreResult);
      navigate(`/moviesbygenre/${genres.id}`, { state: { genreData: genreResult } });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  return (
    <div className='border-solid border-2 bg-[#1A1A1A] border-neutral-800 rounded-lg p-4 cursor-pointer' onClick={handleButtonClick}>
      <div className="grid grid-cols-2 gap-2">
        {genres.movies.map((img, index) => (
          <img src={img.trailer_thumbnail} alt={index} key={index} className="h-[100px] rounded-md gradientImage" /> 
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div className='font-bold'>
          <button className='bg-red-800 mt-2 py-1 px-3 rounded'>Top 10 In</button>
          <p className='mt-2'>{genres.name}</p>
        </div>
        <div>
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.625 15L24.375 15M24.375 15L15.9375 6.5625M24.375 15L15.9375 23.4375" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </div>
      </div>
    </div>

  )
}

export default TopGenres