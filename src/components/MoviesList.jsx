import React from 'react'
import useMovieAPI from '../hooks/useMovieAPI'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'
import MovieInfo from './MovieInfo'

const MoviesList = () => {

  const movieList = useSelector((store) => store.movie?.listMovie)
  // console.log(movieList[0])

  useMovieAPI()
  return movieList && (
    <>
    <MovieInfo />
      <div className='px-6  text-white flex flex-col justify-center'>
      <h1 className='text-3xl py-4'>Movies List</h1>
        <div className='flex overflow-x-scroll no-scrollbar '>
          <div className='flex'>
            {movieList && movieList.map(movie => (
              <MovieCard key={movie.imdbID} id={movie.imdbID} title={movie.Title} posterPath={movie.Poster} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MoviesList