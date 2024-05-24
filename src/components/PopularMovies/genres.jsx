import React from 'react'

const TopGenres = ({genres}) => {
  return (
    <div className=' border-solid border bg-neutral-800 border-neutral-700 rounded-lg p-4'>
      <div className="grid grid-cols-2 gap-2">
        {genres.movies.map((img, index) => (
          <img src={img.trailer_thumbnail} alt={index} key={index} className="rounded-md" /> 
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