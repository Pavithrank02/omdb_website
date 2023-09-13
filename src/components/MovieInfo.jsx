import React from 'react'
import { useSelector } from 'react-redux'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import useMovieInfo from '../hooks/useMovieInfo'
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const MovieInfo = () => {
  const movies = useSelector(store => store.movie)
  useMovieInfo()
  return (
    <div >
      <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={1}
        infiniteLoop={true}
        showStatus={false}
      >
        {
          movies.listMovie.map(movie => (
            <Link style={{ textDecoration: "none", color: "white" }} to={`/${movie.imdbId}`} >
              <div className=" mt-5 md:ml-[40%] md:h-[40%] md:w-96 flex justify-center ">
                <img
                  className='w-24 md:w-36 md:h-96'
                  src={`${movie.Poster}`} />
              </div>
              <div className="absolute p-20 b-0 md:h-[70%] flex flex-col  justify-end opacity-1 trasition-opacity-2 hover:opacity-10">
                <div className="font-bold text-2xl justify-start">{movie ? movie.Title : ""}</div>
                <div className="text-2xl mb-10 font-bold">
                  {movie ? movie.Year : ""}
                </div>
                {/* <div className="posterImage__description">{movie ? movie.overview : ""}</div> */}
              </div>
            </Link>
          ))
        }
      </Carousel>
    </div>
  )
}

export default MovieInfo