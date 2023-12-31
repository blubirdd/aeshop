import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom';

function CartItem() {
  const { products, cartItems, addToCart, removeFromCart, deleteFromCart } = useContext(ShopContext);
  return (
    <>
      <div className="w-full md:w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between border-b pb-1">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
        </div>
        <div className="flex mt-10 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
        </div>

        {/* cart items */}
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return <>
              <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24 object-cover" src={product.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{product.name}</span>
                    <span className="text-gray-500 text-xs">{product.description}</span>
                    <button
                      type="button"
                      onClick={() => { deleteFromCart(product.id) }}
                      className="font-semibold text-start hover:text-red-500 text-red-400 text-xs">
                      Remove from cart
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <div class="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
                    <div class="flex items-center gap-x-1.5">
                      <button
                        type="button"
                        onClick={() => { removeFromCart(product.id) }}
                        class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-input-number-decrement>
                        <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /></svg>
                      </button>
                      <input
                        class="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                        type="text"
                        value={cartItems[product.id]}
                        data-hs-input-number-input
                      />
                      <button
                        type="button"
                        onClick={() => { addToCart(product.id, 1) }}
                        class="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-input-number-increment>
                        <svg class="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                      </button>
                    </div>
                  </div>
                </div>

                <span className="text-center w-1/5 font-semibold text-sm">₱{product.new_price.toLocaleString()}</span>
                <span className="text-center w-1/5 font-semibold text-md">₱{(product.new_price * cartItems[product.id]).toLocaleString()}</span>
              </div>
            </>
          }
        })}
        {/* <h1>No items in cart</h1> */}
        <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
          <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
          Continue Shopping
        </Link>
      </div>
    </>
  )
}

export default CartItem