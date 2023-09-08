import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import useMovieID from '../hooks/useMovieID'
import Header from '../components/Header'

const MovieDetails = () => {
  const history = useLocation()
  const movieDetails = useSelector(store => store.movie?.movieDetails)
  useMovieID({ id: history.pathname })

  return (
    <div className=''>
      <Header />
      <div className='md:mx-36 md:w-3/4 lg:ml-48 lg:w-[65%] my-20 bg-slate-800 p-2'>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-white md:text-2xl ml-1'>{movieDetails?.Title}</p>
            <p className='text-white md:text-lg ml-2'>{movieDetails?.Year} : {movieDetails?.Rated} :  {movieDetails?.Runtime} </p>
          </div>
          <div>
            <div>
              <p className='text-white md:text-2xl ml-1'> IMDB Rating</p>
              <p className='text-white md:text-lg ml-1'> {movieDetails?.imdbRating}⭐ : {movieDetails?.imdbVotes}</p>
            </div>
          </div>
          <div>
            <div>
              <p className='text-white md:text-2xl ml-1 mr-3'> Popularity</p>
              <p className='text-white md:textmd ml-1 '> {movieDetails?.imdbRating}⭐</p>
            </div>
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='p-2 w-36 md:w-72 hover:opacity-70 flex flex-col object-contain justify-center'>
            <img
              alt='Movie card'
              src={movieDetails?.Poster}
            />
            <div className='flex flex-row justify-between mt-3'>
              <p className='text-white md:text-xl ml-1'>{movieDetails?.Genre}</p>
            </div>
          </div>
          <div className='ml-3 mr-3 w-full justify-center '>
            <div className='p-1 h-16 mt-2 w-full bg-gray-500 border border-slate-400 flex flex-row align-center '>
              <p className='text-white md:text-xl ml-1'>Director: </p>
              <p className='text-white md:text-xl ml-6'>{movieDetails?.Director}</p>
            </div>
            <div className='p-1 h-16 mt-2 w-full bg-gray-500 border border-slate-400 flex flex-row align-center '>
              <p className='text-white md:text-xl ml-1'>Writers: </p>
              <p className='text-white md:text-xl ml-6'>{movieDetails?.Writer}</p>
            </div>
            <div className='p-1 h-16 mt-2 w-full bg-gray-500 border border-slate-400 flex flex-row align-center '>
              <p className='text-white md:text-xl ml-1'>Stars: </p>
              <p className='text-white md:text-xl ml-6'>{movieDetails?.Actors}</p>
            </div>
            <div className='p-1 md:h-24 mt-2 w-full bg-gray-500 border border-slate-400 flex flex-row justify-between align-center '>
              <p className='text-white md:text-xl ml-1'>Other Info: </p>
              <p className='text-white md:text-xl lg:-ml-24'>{movieDetails?.Production}: {movieDetails?.BoxOffice}: {movieDetails?.Country}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails