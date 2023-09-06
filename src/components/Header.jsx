import React from 'react'

const Header = () => {
  return (
    <div className='m-0 bg-black flex flex-row'>
      <p
        className='p-2 m-2  bg-yellow-500 w-16 rounded-md text-xl font-bold'
      >
        IMDB
      </p>
      <input
        className='p-2 m-2 w-3/4 rounded-md'
        type="text"
        placeholder='Search IMDB'
      />
      <p className='p-2 m-2 text-white'>EN🔽</p>
    </div>
  )
}

export default Header