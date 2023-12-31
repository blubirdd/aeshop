import React, { useContext, useState } from 'react'
import profile from '/profile.jpg'
import starbucks from '/starbucks.jpg'
import { ShopContext } from '../../context/ShopContext'
function ProductDisplay({ product }) {

  const { addToCart } = useContext(ShopContext);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product.id, quantity);
    setQuantity(1);
  };
  return (
    <>
      <div className="overflow-hidden bg-neutral-50 font-poppins dark:bg-gray-800">
        <div className="max-w-7xl px-4 py-4 mx-auto lg:py-8 md:px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 md:w-1/2 ">
              <div className="sticky top-0 z-10 overflow-hidden ">
                <div className="relative mb-2 h-[450px]" >
                  <img
                    src={starbucks}
                    alt=""
                    className="object-cover w-full h-full "
                  />
                </div>
                <div className="flex-wrap hidden md:flex ">
                  <div className="w-1/2 p-2 sm:w-1/4">
                    <div className="block border border-blue-100 dark:border-gray-700 dark:hover:border-gray-600 hover:border-blue-300 ">
                      <img
                        src={starbucks}
                        alt=""
                        className="object-cover w-full lg:h-32"
                      />
                    </div>
                  </div>

                  <div className="w-1/2 p-2 sm:w-1/4">
                    <div className="block border border-blue-100 dark:border-gray-700 dark:hover:border-gray-600 hover:border-blue-300 ">
                      <img
                        src={starbucks}
                        alt=""
                        className="object-cover w-full lg:h-32"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 ">
              <div className="lg:pl-20">
                <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>
                  <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                    {product.name}
                  </h2>
                  <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                    {product.description}
                  </p>

                  <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>₱{product.new_price.toLocaleString()} &nbsp;</span>
                    <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">₱{product.old_price.toLocaleString()}</span>
                  </p>
                </div>
                <div className="flex flex-wrap items-center">
                  <div className="mb-4 mr-4 lg:mb-0">
                    <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
                      <div className="flex items-center gap-x-1.5">
                        <button
                          type="button"
                          onClick={handleDecrement}
                          className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        >
                          <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                        </button>
                        <input
                          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                          className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white" type="text" value={quantity}

                        />
                        <button
                          type="button"
                          className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                          onClick={handleIncrement}
                        >
                          <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4 mr-4 lg:mb-0">
                    {/* add to cart button  */}
                    <button
                      onClick={() => { handleAddToCart() }}
                      className="w-full h-10 p-2 mr-4 rounded-lg bg-blue-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
                    >
                      Add to cart
                    </button>
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