import React, { useRef, useState } from "react";
import Rating from "react-rating";
import img1 from '../assets/images/star-empty.png'
import img2 from '../assets/images/star-full.png'
import { useDispatch } from "react-redux";
import { addFavorites } from "../utils/favoriteSlice";

export default function Modal({id}) {
  const dispatch = useDispatch()
  const [value, setValue] = useState("")
  const [showModal, setShowModal] = React.useState(false);
  const searchText = useRef(null)

  const handleData = () => {
    dispatch(addFavorites({ ratings: value, comments: searchText.current.value, id: id}))
    alert("added to watch list")
    setShowModal(false)
   }

   const handleClick = (value) => {
    console.log(value)
    setValue(value)
    
   }
  return (
    <>
      <button
        className="bg-yellow-500 text-black active:bg-yellow-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Add To Favorites⭐
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <form>

                  <div className="relative p-6  flex-auto text-black">
                    <div className="mb-12">
                      <p className="font-bold text-2xl">Rating</p>
                      <Rating
                        start={0}
                        stop={10}
                        className="flex flex-row mt-3"
                        emptySymbol={<img src={img1} className="h-8 w-8" />}
                        fullSymbol={<img src={img2} className="icon" />}
                        onChange={handleClick}
                      />
                    </div>
                    <p className="font-bold text-xl">Comments</p>
                    <input
                      ref={searchText}
                      className="w-96 h-36 text-black border border-black"
                      type="text"
                      placeholder="  Comments..."
                    />
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-green-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={handleData}
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}