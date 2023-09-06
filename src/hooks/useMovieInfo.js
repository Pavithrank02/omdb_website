import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { OMDB_MOVIEINFO_API } from '../utils/constants'
import { addMovieInfo } from '../utils/movieSlice'

const useMovieInfo = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async() => {
    const data = await fetch(OMDB_MOVIEINFO_API)
    const json = await data.json()
    console.log(json)
    dispatch(addMovieInfo(json))
  }
  

  return (
    <div>
      useMovieAPI
      </div>
  )
}

export default useMovieInfo