import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { OMDB_MOVIE_API } from '../utils/constants'
import { addMovie } from '../utils/movieSlice'

const useMovieAPI = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async() => {
    const data = await fetch(OMDB_MOVIE_API)
    const json = await data.json()
    console.log(json)
    dispatch(addMovie(json.Search))
  }
  

  return (
    <div>
      useMovieAPI
      </div>
  )
}

export default useMovieAPI