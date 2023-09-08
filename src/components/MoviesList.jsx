import React, { useState } from 'react'
import MovieCard from './MovieCard'


const MoviesList = ({ title, movies }) => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(movies.length / itemsPerPage);

  // Calculate the range of items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items for the current page
  const currentPageData = movies.slice(startIndex, endIndex);


  return (
    <>
      <div className='px-6  text-white flex flex-col justify-center'>
        <h1 className='text-xl ml-28 mt-3 font-bold lg:ml-2 md:-ml-14 md:text-3xl px-4 py-4'>{title}</h1>
        <div className='flex  overflow-y-scroll no-scrollbar '>
          <div className='flex flex-col col-span-2 ml-16 md:flex-row lg:ml-5 md:-ml-5'>
            {currentPageData && currentPageData.map(movie => (
              <MovieCard key={movie.imdbID} id={movie.imdbID} title={movie.Title} posterPath={movie.Poster} />
            ))}
          </div>
        </div>
        <div>
          <div className=' mt-4 flex flex-row justify-between'>
            <button
              className='p-2 m-2 bg-black text-white font-bold rounded-md opacity-80 border border-white cursor-pointer'
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              ⬅ Previous
            </button>
            <button
              className='p-2 m-2 bg-black-500 text-white font-bold rounded-md opacity-80 border border-white cursor-pointer'
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next ➡
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoviesList