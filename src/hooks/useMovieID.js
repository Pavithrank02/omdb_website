import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_KEY, OMDB_MOVIEID_API } from '../utils/constants'
import { addMovieDetails } from '../utils/movieSlice'

const useMovieID = ({id}) => {
  const arr = id.slice(1)

  console.log(arr)
  const dispatch = useDispatch()

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async() => {
    const data = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${arr}`)
    const json = await data.json()
    console.log(json)
    dispatch(addMovieDetails(json))
  }
  

  return (
    <div>
      useMovieAPI
      </div>
  )
}

export default useMovieID