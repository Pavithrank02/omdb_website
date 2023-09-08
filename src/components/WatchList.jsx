import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Header'

const WatchList = () => {
  const watch = useSelector((store) => store.favorite)
  const movies = useSelector(store => store.movie)
  // console.log(movieInfo)

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
            <div className='w-1/2 p-10 bg-gray-500 text-white flex justify-evenly'>
              <div className='flex-row'>
                {movies && movies.listMovie.map(lists => {
                  if(lists.imdbID === list.id){
                    return (
                      <div className='p-2 w-28 hover:opacity-70 flex object-contain justify-center' >
                        <img
                          alt='Movie card'
                          src={lists.Poster}
                        />
                      </div>
                    )
                  }
                })}
                <p className='font-bold text-gray-400 text-xl'>Rating: {list.ratings}⭐</p>
              </div>
              <div className='text-white p-2 m-2 w-96 bg-black'>
                <p className='font-bold mt-1'>Comments :</p>
                <p className=''>Comments </p>
              </div>
            </div>
          </div>
        )


      })}

    </>

  )
}

export default WatchList