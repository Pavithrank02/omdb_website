import React from 'react'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'

const MovieCard = ({ id, posterPath }) => {
  const navigate = useNavigate()

  const handleRoute = () => {
    navigate(`${id}`)

  }

  return (
    <div className='mt-3 md:w-72 pr-4 cursor-pointer  flex flex-col justify-between'>
      <div className='p-2 w-64 hover:opacity-50 hover:scale-110 flex object-contain justify-center rounded-lg hover:rounded-lg' onClick={handleRoute}>
        <img
          alt='Movie card'
          src={posterPath}
        />
      </div>
      <div className='flex justify-center'>
        <Modal id={id} />
      </div>
    </div>
  )
}

export default MovieCard