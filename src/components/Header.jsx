import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from '../utils/languageConstant'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const dispatch = useDispatch()
  const langKey = useSelector((store) => store.config.lang)
  const handleLanguage = (e) => {

    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className=' bg-black flex flex-row justify-center mt-8'>
      <p
        className='p-2 m-2  bg-yellow-500 w-16 rounded-md text-xl font-bold'
      >
        IMDB
      </p>
      <input
        className='p-2 m-2 w-3/4 rounded-md'
        type="text"
        placeholder={lang[langKey].gptSearchPlaceholder}
      />
      <button className='p-2 m-2  bg-yellow-500 w-16 rounded-md text-md font-bold'>{lang[langKey].search}</button>
      <p className='p-2 m-2 text-white'> <select className=' bg-gray-900 text-white' onChange={handleLanguage}>
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select></p>
    </div>
  )
}

export default Header