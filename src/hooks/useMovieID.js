import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_KEY} from '../utils/constants'
import { addMovieDetails } from '../utils/movieSlice'

const useMovieID = ({ id }) => {
  const arr = id.slice(1)
  const dispatch = useDispatch()

  useEffect(() => {
    getAPI()
  }, [])

  const getAPI = async () => {
    const data = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${arr}`)
    const json = await data.json()
    dispatch(addMovieDetails(json))
  }

}

export default useMovieID