import React from 'react'
import homeBanner1 from '/banners/homeBanner1.png'
import homeBanner2 from '/banners/homeBanner2.jpg'
import homeBanner3 from '/banners/homeBanner3.jpg'
function Banners() {
  return (
    <>
      <div class="mx-auto pb-4 pt-8">
        <h2 class="pb-1 text-5xl font-bold text-center text-gray-800 dark:text-gray-400">
          Featured Items
        </h2>
        <div class="mx-auto mb-1 border-4 border-b border-sky-600 w-64 dark:border-gray-400"></div>
      </div>

      <div className="banners sm:mx-14">
      <div class="md:flex mt-4 mx-4 md:-mx-4">
        <div class="w-full h-64 mt-8 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:mt-0 md:w-1/2 mb-4 md:mb-0 shadow-md shadow-gray-400" style={{ backgroundImage: `url(${homeBanner2})` }}>
          <div class="bg-gray-900 bg-opacity-40 flex flex-col items-start justify-end pb-8 h-full">
            <div class="px-8 max-w-xl">
              <h2 class="text-3xl text-white font-bold">South Park Collection</h2>
              <button class="flex items-center px-3 py-2 mx-a mt-4 bg-black bg-opacity-30 hover:bg-white text-white hover:text-black text-sm uppercase font-medium rounded-full border border-white  hover:border-black  focus:outline-none">
                <span>Shop Now</span>
                <svg class="h-5 w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        </div>

        <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2 shadow-md shadow-gray-400" style={{ backgroundImage: `url(${homeBanner1})` }}>
          <div class="bg-gray-900 bg-opacity-40 flex flex-col items-start justify-end pb-8 h-full">
            <div class="px-8 max-w-xl">
              <h2 class="text-3xl text-white font-bold">Gift Plushies</h2>
              <button class="flex items-center px-3 py-2 mx-a mt-4 bg-black bg-opacity-30 hover:bg-white text-white hover:text-black text-sm uppercase font-medium rounded-full border border-white  hover:border-black  focus:outline-none">
                <span>Shop Now</span>
                <svg class="h-5 w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="h-72 mt-6 mx-4 md:mx-0 rounded-md overflow-hidden bg-cover bg-center shadow-md shadow-gray-400" style={{ backgroundImage: `url(${homeBanner3})` }}>
        <div class="bg-gray-900 bg-opacity-40 flex flex-col items-start justify-end pb-8 h-full">
          <div class="px-10 max-w-3xl">
            <h2 class="text-3xl text-white font-bold">Genshin Impact Chongyun</h2>
            <p class="mt-2 text-gray-100">Grab the new Chongyun 8bitdo Controller. With a meticulously crafted 8-bit design, reminiscent of the gaming controllers from yesteryears.</p>
            <button class="flex items-center px-3 py-2 mx-a mt-4 bg-black bg-opacity-30 hover:bg-white text-white hover:text-black text-sm uppercase font-medium rounded-full border border-white  hover:border-black  focus:outline-none">
              <span>Shop Now</span>
              <svg class="h-5 w-5 ml-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </div>
      </div>
      </div>

      
    </>

  )
}

export default Banners