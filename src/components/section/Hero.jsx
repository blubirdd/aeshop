import React from 'react'
import heroImage from '../../assets/bb.png'

function Hero() {
  return (
    <>
      <div className=" bg-gray-200 mx-auto p-4 sm:px-40 sm:py-12">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Discover&nbsp;
              <span className="text-blue-600">
                Timeless Treasures&nbsp;
              </span>
              and&nbsp;
              <span className="text-blue-600">
                Unique Collectibles
              </span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
              Welcome to Aeshop, where passion meets rarity. Dive into a world of nostalgia, craftsmanship, and unparalleled uniqueness as we curate an exclusive collection of vintage treasures and limited edition masterpieces.
            </p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
                Check latest collection
                <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              className="w-5/6 h-auto rounded-md"
              src={heroImage}
              alt="Image"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero