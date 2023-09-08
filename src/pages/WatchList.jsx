import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header'
import { removeFavorites } from '../utils/favoriteSlice'

const WatchList = () => {
  const dispatch = useDispatch()
  const watch = useSelector((store) => store.favorite)
  const movies = useSelector(store => store.movie)

  return (
    <>
      <Header />
      <div className='bg-black flex justify-center md:-ml-28 lg:-ml-36'>
        <div className='w-full md:w-1/2 p-10 bg-gray-500 text-white flex flex-col justify-start'>
          <p className='font-bold text-2xl'>WatchList</p>
          <p className='font-bold text-gray-400 text-xl'>Private🔏</p>
        </div>
      </div>
      {watch && watch.favourite.map((list) => {
        return (
          <div className='bg-black flex justify-center md:-ml-28 lg:-ml-36 mt-2'>
            <div className='w-full md:w-1/2 p-10 bg-gray-500 text-white flex justify-evenly opacity-70 border border-white'>
              <div className='flex-row'>
                {movies && movies.listMovie.map(lists => {
                  if (lists.imdbID === list.id) {
                    return (
                      <div className=' w-28 hover:opacity-70 flex object-contain justify-center' >
                        <img
                          alt='Movie card'
                          src={lists.Poster}
                        />
                      </div>
                    )
                  }
                })}
                <p className='font-bold text-white md:textlg mt-2'>Your Rating: {list.ratings}⭐</p>
              </div>
              <div className='text-white p-2 m-2 w-96 bg-black border border-b-slate-500'>
                <p className='font-bold mt-1'>Comments About the Movie :</p>
                <p className=''>{list.comments} </p>
              </div>
              <div className='p-2 m-2 h-10 mt-16 bg-red-600 rounded-lg'>
                <button onClick={() => dispatch(removeFavorites(list.id))}>Remove</button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default WatchList