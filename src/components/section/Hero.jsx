import React from 'react'
import heroImage from '../../assets/hero1.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <>
      <div className="hero bg-gray-50 dark:bg-gray-900 sm:h-screen">
        <div className="grid px-4 py-8 mx-auto gap-2 lg:grid-cols-12">
          {/* image column */}
          <div className="lg:col-span-5 lg:flex sm:order-2" data-aos="fade-left" data-aos-delay="300">
            <img className="w-3/4 h-auto mx-auto sm:w-full sm:h-auto object-cover"
              src={heroImage}
              alt="Image"
            />
          </div>

          {/* text column */}
          <div className="lg:col-span-7 sm:order-1 my-auto" data-aos="fade-right">
            <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none md:text-6xl dark:text-white">
              Timeless <span className="text-sky-700">Treasures </span>and <span className="text-sky-700">Collectibles</span>
            </h1>
            <p className="max-w-2xl mb-6 font-normal text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Dive into a world of nostalgia, craftsmanship, technology and unparalleled uniqueness as we curate an exclusive collection of treasures and limited edition masterpieces.
            </p>
            <a 
            className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-3xl border border-transparent bg-sky-800 text-white hover:bg-sky-700 disabled:opacity-50 disabled:pointer-events-none duration-300 hover:scale-105"
            href='#featured'
            >
              SHOP NOW
              <svg className="w-4 h-4 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
