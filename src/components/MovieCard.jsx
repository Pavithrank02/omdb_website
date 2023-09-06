import React from 'react'
import Modal from './Modal'

const MovieCard = ({ title, posterPath }) => {

  return (
    <div className='mt-3 w-72 pr-4 cursor-pointer  flex flex-col justify-between'>
      <div className='p-2 w-64 hover:opacity-70 flex object-contain justify-center'>
        <img
          alt='Movie card'
          src={posterPath}
        />
      </div>
      <div className='flex justify-center'>
        <Modal />
      </div>
    </div>
  )
}

export default MovieCard