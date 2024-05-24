import React from 'react'
import ReactStars from "react-rating-stars-component";

const MustWatch = ({movie}) => {
  console.log(movie)
  const rating = movie.total_rating
  const thirdExample = {
    size: 15,
    count: 5,
    value: rating,
    color: "white",
    activeColor: "red",

  };
  return (
    <div className=' border-solid border bg-neutral-800 border-neutral-700 rounded-lg p-4'>
      <div className="grid grid-cols-1 gap-2">
        <img src={movie.trailer_image_url} alt='img' className="rounded-md" />
      </div>
      <div className="flex justify-between items-center  mt-4">
        <div className='bg-neutral-900 rounded-xl px-2 py-1 text-xs'>
          {movie.duration}
        </div>
        <div className='flex justify-center items-center'>
          <ReactStars {...thirdExample} />
        </div>
      </div>
    </div>
  )
}

export default MustWatch