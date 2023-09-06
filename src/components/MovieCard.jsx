import React from 'react'

const MovieCard = ({ title, posterPath }) => {
  return (
    <div className='mt-3 w-72 pr-4 cursor-pointer hover:opacity-70 flex flex-col justify-between'>
      <div className='p-2 w-64 flex object-contain justify-center'>
        <img
          alt='Movie card'
          src={posterPath}
        />
      </div>
      <div className='flex justify-center'>
        <button className='p-2 bg-yellow-500'>Add To Favorites</button>
      </div>
    </div>
  )
}

export default MovieCard