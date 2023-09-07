import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant'
import { API_KEY, SUPPORTED_LANGUAGES } from '../utils/constants'
import { changeLanguage, toggleSearch } from '../utils/configSlice'
import { addMovieSuggestion } from '../utils/movieSlice'
import { Link } from 'react-router-dom'


const Header = () => {
  const dispatch = useDispatch()
  const searchText = useRef(null)
  const langKey = useSelector((store) => store.config.lang)

  const handleSearch = async () => {
    const data = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText.current.value}&`)
    const json = await data.json()
    dispatch(addMovieSuggestion(json.Search))
  }
  const handleClick = () => {
    dispatch(toggleSearch())
  }
  const handleLanguage = (e) => {

    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className=' bg-black '>
      <form className='flex flex-row justify-center' onSubmit={(e) => e.preventDefault()}>
        <p
          className='p-2 m-2  bg-yellow-500 w-16 rounded-md text-xl font-bold'
        >
          IMDB
        </p>

        <input
          ref={searchText}
          className='p-2 m-2 w-[60%] rounded-md'
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          onFocus={handleClick}
          onBlur={handleClick}
        />
        <button
          onClick={handleSearch}
          onBlur={handleClick}
          className='p-2 m-2  bg-yellow-500 w-16 rounded-md text-md font-bold'>
          {lang[langKey].search}
        </button>

        <p className='text-white p-2 m-2'><Link to="/watchlist"> WatchList</Link></p>
        <p className='p-2 m-2 text-white'> <select className=' bg-gray-900 text-white' onChange={handleLanguage}>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
        </p>
      </form>

    </div>
  )
}

export default Header