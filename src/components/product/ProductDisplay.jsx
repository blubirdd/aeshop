import React from 'react'
import profile from '/profile.jpg'
import starbucks from '/starbucks.jpg'
function ProductDisplay({ product }) {
  return (
    <>
      <div class="overflow-hidden bg-neutral-50 font-poppins dark:bg-gray-800">
        <div class="max-w-7xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div class="flex flex-wrap -mx-4">
            <div class="w-full px-4 md:w-1/2 ">
              <div class="sticky top-0 z-50 overflow-hidden ">
                <div class="relative mb-2 h-[450px]" >
                  <img
                    src={starbucks}
                    alt=""
                    class="object-cover w-full h-full "
                  />
                </div>
                <div class="flex-wrap hidden md:flex ">
                  <div class="w-1/2 p-2 sm:w-1/4">
                    <div class="block border border-blue-100 dark:border-gray-700 dark:hover:border-gray-600 hover:border-blue-300 ">
                      <img
                        src={starbucks}
                        alt=""
                        class="object-cover w-full lg:h-32"
                      />
                    </div>
                  </div>

                  <div class="w-1/2 p-2 sm:w-1/4">
                    <div class="block border border-blue-100 dark:border-gray-700 dark:hover:border-gray-600 hover:border-blue-300 ">
                      <img
                        src={starbucks}
                        alt=""
                        class="object-cover w-full lg:h-32"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 ">
              <div class="lg:pl-20">
                <div class="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <span class="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                  <h2 class="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                   {product.name}
                  </h2>
                  <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    {product.description}
                  </p>

                  <p class="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>₱{product.new_price.toLocaleString()} &nbsp;</span>
                    <span class="text-base font-normal text-gray-500 line-through dark:text-gray-400">₱{product.old_price.toLocaleString()}</span>
                  </p>
                </div>
                {/* <div class="pb-6 mb-8 border-b border-gray-300 dark:border-gray-700">
                  <h2 class="mb-2 text-xl font-bold dark:text-gray-400">Type</h2>
                  <div class="flex flex-wrap -mb-2">
                    <button
                      class="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                      XL
                    </button>
                  </div>
                </div> */}
                <div className="flex flex-wrap items-center">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="w-28">
                      <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                          <span className="m-auto text-2xl font-thin">-</span>
                        </button>
                        <input
                          type="number"
                          className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                          placeholder="1"
                        />
                        <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 mr-4 lg:mb-0">
                    <button className="w-full h-10 p-2 mr-4 rounded-lg bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                      Buy Now
                    </button>
                  </div>
                  <div className="mb-4 mr-4 lg:mb-0">
                    <buttonc className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg>
                    </buttonc>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDisplay