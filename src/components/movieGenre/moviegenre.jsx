import React from 'react'

const MovieCard = () => {
  // console.log(movie)

  return (
    <div className=' border-solid border bg-neutral-800 border-neutral-700 rounded-lg p-4'>
      <div className="grid grid-cols-1 gap-2">
        <img src="src/assets/movie/captaiAmerica.png" alt='img' className="rounded-md" />
      </div>
      <div className="flex justify-between items-center  mt-4">
        <div className='bg-neutral-900 rounded-xl px-2 py-1 text-xs'>
          {/* {movie.duration} */}
        </div>
        <div className='flex justify-center items-center'>
          play
        </div>
      </div>
    </div>
  )
}

export default MovieCard