import React from 'react'
import heroImage from '../../assets/bb.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <div class="bg-white dark:bg-gray-900">
        <div class="grid px-8 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-8">
            <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none md:text-6xl dark:text-white">
              Discover Timeless Treasures and Collectibles
            </h1>
            <p class="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Dive into a world of nostalgia, craftsmanship, and unparalleled uniqueness as we curate an exclusive collection of vintage treasures and limited edition masterpieces.
            </p>
            <Link className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                SHOP NOW
                <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-4 lg:flex">
            <img src={heroImage} alt="Image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero