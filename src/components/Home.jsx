import React from 'react'
import Header from './Header'
import MoviesList from './MoviesList'

const Home = () => {
  return (
    <div className='flex flex-col justify-center'>
      <Header />
      <MoviesList />
    </div>
  )
}

export default Home