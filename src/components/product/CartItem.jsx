import React, { useContext, useState } from 'react'
import { ShopContext } from '../../context/ShopContext'
import { Link } from 'react-router-dom';
import ConfirmDialog from '../others/ConfirmDialog';

function CartItem() {
  const { products, cartItems, increaseQuantity, removeFromCart, deleteFromCart, getItemStock, getTotalOfCartProducts } = useContext(ShopContext);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const showConfirmationDialog = (productId) => {
    setItemToDelete(productId);
    setShowConfirmDialog(true);
  };

  const handleDecreaseQuantity = (productId) => {
    if (cartItems[productId] <= 1) {
      setItemToDelete(productId);
      setShowConfirmDialog(true);
    }
    else {
      removeFromCart(productId);
    }
  };

  const handleDeleteConfirmation = () => {
    if (itemToDelete) {
      deleteFromCart(itemToDelete);
      setItemToDelete(null);
      setShowConfirmDialog(false);
    }
  };

  return (
    <>
      {showConfirmDialog && (
        <ConfirmDialog
          message="Are you sure you want to remove this item from the cart?"
          onConfirm={handleDeleteConfirmation}
          onCancel={() => setShowConfirmDialog(false)}
        />
      )}

      <div className="w-full md:w-3/4 bg-white px-10 py-10">
        <div className="flex justify-between pb-1">
          <h1 className="font-semibold text-2xl">My Cart</h1>
        </div>
        <div className="flex mt-4 mb-5">
          <h3 className="font-semibold text-gray-600 text-xs uppercase w-3/6">Product Details</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6">Quantity</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 ">Price</h3>
          <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/6 ">Total</h3>
        </div>

        {/* cart items */}
        {products.map((product) => {
          if (cartItems[product.id] > 0) {
            return (
              <div key={product.id} className="flex items-center hover:bg-gray-50 -mx-8 px-6 py-5 border-b-4 border-b-gray-100">
                <div className="flex w-3/6">
                  <div className="w-20">
                    <img className="h-24 object-cover" src={product.image} alt="" />
                  </div>
                  <div className="flex flex-col ml-4 flex-grow">
                    <span className="font-bold text-md">{product.name}</span>
                    <span className="text-gray-500 text-sm">{product.description}</span>

                    <button
                      type="button"
                      onClick={() => showConfirmationDialog(product.id)}
                      className="group flex mt-auto font-semibold text-start hover:text-red-500 text-red-400 text-xs">
                      <svg className="w-4 h-4 text-red-400 group-hover:text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                      </svg>
                      <span className="ps-1">Remove</span>
                    </button>
                  </div>
                </div>
                <div className="flex justify-center w-1/6">
                  <div className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg dark:bg-slate-900 dark:border-gray-700" data-hs-input-number>
                    <div className="flex items-center gap-x-1.5">
                      <button
                        type="button"
                        onClick={() => handleDecreaseQuantity(product.id)}
                        className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        data-hs-input-number-decrement>
                        <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /></svg>
                      </button>
                      <input
                        className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0 dark:text-white"
                        type="text"
                        value={cartItems[product.id]}
                        onChange={(e) => { }}
                        readOnly
                        data-hs-input-number-input
                      />
                      <button
                        type="button"
                        onClick={() => (increaseQuantity(product.id))}
                        className="w-6 h-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                        disabled={cartItems[product.id] >= product.stock}
                        data-hs-input-number-increment>

                        <svg className="flex-shrink-0 w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
                      </button>
                    </div>
                  </div>
                </div>

                <span className="text-center w-1/6 font-semibold text-md">₱{product.new_price.toLocaleString()}</span>
                <span className="text-center w-1/6 font-semibold text-md">₱{(product.new_price * cartItems[product.id]).toLocaleString()}</span>
              </div>
            );
          }
          return null;
        })}
        {getTotalOfCartProducts() === 0 ? (
          <div>
            <p>There are no items in your cart</p>
            <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
              <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Browse Products
            </Link>
          </div>
        ) : (
          <Link to="/" className="flex font-semibold text-indigo-600 text-sm mt-10">
            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512">
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Continue Shopping
          </Link>
        )}
      </div>
    </>
  )
}

export default CartItem