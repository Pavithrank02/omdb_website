import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'
import MoviesList from './MoviesList'
import SearchSuggestion from './SearchSuggestion'
import SecondaryContainer from './SecondaryContainer'

const Home = () => {
  const showSearch = useSelector(store => store.config.showSearch)
  return (
    <div className='flex flex-col bg-black h-screen '>
      <Header />
      {showSearch ?
        <>
          <SecondaryContainer />

        </>
        :
        <>
          <SearchSuggestion />
          <SecondaryContainer />
        </>
      }

    </div>
  )
}

export default Home