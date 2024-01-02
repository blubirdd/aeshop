import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function Item({ ...props }) {

  const { addToCart } = useContext(ShopContext);

  return (
    <div className="w-72 transform overflow-hidden bg-white hover:bg-slate-100 dark:bg-slate-800 shadow-md duration-300 hover:shadow- flex flex-col">
      <Link to={`/product/${props.id}`}>
        <img className="h-64 w-full rounded-t-md object-cover object-center" src={props.image} alt="Product Image" />
      </Link>
      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-md font-bold dark:text-white text-gray-900">{props.name}</h2>
        <h2 className="mb-2 text-sm font-normal dark:text-white text-gray-400">{props.description}</h2>
        <div className="mt-auto flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">₱{props.new_price.toLocaleString()}</p>
          <p className="text-sm font-medium text-gray-500 line-through dark:text-gray-300">₱{props.old_price.toLocaleString()}</p>
          {/* <button
            type="button"
            onClick={() => addToCart(props.id, 1)}
            className="ml-auto p-2 rounded-md bg-sky-700 hover:bg-sky-800 dark:text-gray-200 text-gray-50 disabled:bg-sky-950  dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            <div className="flex space-x-1">
              <svg className="w-4 h-4 text-gray-300 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm1-4H5m0 0L3 4m0 0h5.501M3 4l-.792-3H1m11 3h6m-3 3V1" />
              </svg>
              <p className="text-xs">Add to cart</p>
            </div>
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Item;
