import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'

function OrderSummary() {

  const { getTotalOfCartProducts ,getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full md:w-1/3 mx-auto bg-white border border-gray-300 px-10 py-10">
      <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
      <div className="flex justify-between mt-10 mb-5">
        <span className="font-semibold text-sm uppercase">{getTotalOfCartProducts()} Items</span>
        <span className="font-semibold text-sm">₱{getTotalCartAmount().toLocaleString()}</span>
      </div>
      <div>
        <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
        <select className="block p-2 text-gray-600 w-full text-sm">
          <option>JNT Express - ₱50</option>
        </select>
      </div>
      <div className="border-t mt-8">
        <div className="flex font-bold justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>₱{(getTotalCartAmount() + 50).toLocaleString()}</span>
        </div>
        <button className="bg-sky-700 font-semibold hover:bg-sky-600 py-3 text-md text-white uppercase w-full">Checkout</button>
      </div>
    </div>
  )
}

export default OrderSummary