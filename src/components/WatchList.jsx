import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'

const WatchList = () => {
  const watch = useSelector((store) => store.favorite)
  console.log(watch)

  return (
    <>
      <Header />
      <div className='bg-black flex justify-center -ml-36'>
        <div className='w-1/2 p-10 bg-gray-500 text-white flex flex-col justify-start'>
          <p className='font-bold text-2xl'>WatchList</p>
          <p className='font-bold text-gray-400 text-xl'>Private🔏</p>
        </div>
      </div>
      {watch && watch.favourite.map((list) => {
        return (
        <div className='bg-black flex justify-center -ml-36 mt-2'>
          <div className='w-1/2 p-10 bg-gray-500 text-white flex flex-col justify-start'>
            <p className='font-bold text-2xl'>WatchList</p>
            <p className='font-bold text-gray-400 text-xl'>{list.ratings}⭐</p>
          </div>
        </div>
      )


      })}

    </>

  )
}

export default WatchList