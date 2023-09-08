import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/Header'
import SearchSuggestion from '../components/SearchSuggestion'
import SecondaryContainer from '../components/SecondaryContainer'

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