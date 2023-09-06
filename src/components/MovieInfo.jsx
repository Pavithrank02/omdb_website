import React from 'react'
import { useSelector } from 'react-redux'
import useMovieInfo from '../hooks/useMovieInfo'

const MovieInfo = () => {
  const movieInfo = useSelector((store) => store.movie?.movieInfo)
  // console.log(movieInfo?.Title)
  useMovieInfo()
  return (
    <div className='text-white mt-5 ml-36  flex flex-row justify-evenly'>
      <div >
        <img
          className='w-96 '
          alt='Movie card'
          src={movieInfo?.Poster}
        />
      </div>
      <div className=' -ml-10 bg-gray-800 w-1/2 h-72 opacity-50'>
        <p className='text-2xl py-4 p-3'>Title: {movieInfo?.Title}</p>
        <p className='text-lg py-4 p-3'>Released: {movieInfo?.Released}</p>
        <p className='text-xl py-4 p-3 text-justify'>Plot: {movieInfo?.Plot}</p>
      </div>
    </div>
  )
}

export default MovieInfo