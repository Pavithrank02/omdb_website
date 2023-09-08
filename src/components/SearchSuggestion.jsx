import React from 'react'
import { useSelector } from 'react-redux'



const SearchSuggestion = () => {
  const movieSuggest = useSelector((store) => store.movie?.movieSuggest)
  return (
    <div className='lg:ml-48 md:ml-20 text-white'>
      <div className='absolute p-4 m-4 mt-0 bg-gray-800 w-3/4 z-10'>
        {movieSuggest && movieSuggest.map((movieName, index) => (
          <div className='flex flex-row p-2 ml-6 border border-gray-500'>
            <div>
              <img
                className="w-12"
                src={movieName?.Poster}
                alt='movie poster' />
            </div>
            <div>
            <p className='font=bold md:text-2xl ml-3'>{movieName?.Title}</p>
            <p className='font=bold md:text-xl ml-3'>{movieName?.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchSuggestion