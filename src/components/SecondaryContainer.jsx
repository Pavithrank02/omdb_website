import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'
import useMovieAPI from '../hooks/useMovieAPI'
import MovieInfo from './MovieInfo'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movie)
  useMovieAPI()
  return (
    movies.listMovie && (
      <div className=' bg-black'>
          <MovieInfo />
        <div className='mt-0 pl-2 lg:pl-12 md:pl-12 '>
          <MoviesList title={"Now Playing"} movies={movies.listMovie} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer