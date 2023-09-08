import React from 'react'
import { useSelector } from 'react-redux'
import useMovieInfo from '../hooks/useMovieInfo'

const MovieInfo = () => {
  const movieInfo = useSelector((store) => store.movie?.movieInfo)
  useMovieInfo()
  return (
    <div className='text-white mt-5 sm:ml-24 sm:flex-col-12 md:ml-24 lg:ml-36 flex flex-row justify-evenly'>
      <div className=''>
        <img
          className='w-36 mt-3 sm:-ml-10 sm:w-56 sm-colspan-2 md:w-96 '
          alt='Movie card'
          src={movieInfo?.Poster}
        />
      </div>
      <div className=' mt-3 md:-ml-10 bg-gray-800 w-1/2 lg:-ml-16 lg:h-72 md:h-96 opacity-50'>
        <p className='md:text-2xl py-4 p-3'>Title: {movieInfo?.Title}</p>
        <p className='md:text-lg py-4 p-3'>Released: {movieInfo?.Released}</p>
        <p className='md:text-xl py-4 p-3 text-justify'>Plot: {movieInfo?.Plot}</p>
      </div>
    </div>
  )
}

export default MovieInfo