import React from 'react';
import { Link } from 'react-router-dom';
function Item({ ...props }) {
  return (
    <div className="w-80 transform overflow-hidden bg-white hover:bg-slate-100 dark:bg-slate-800 shadow-md duration-300 hover:shadow- flex flex-col">
      <Link to={`/product/${props.id}`}>
      <img className="h-80 w-full object-cover object-center" src={props.image} alt="Product Image" />
      </Link>
      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-lg font-medium dark:text-white text-gray-900">{props.name}</h2>
        <h2 className="mb-2 text-sm font-normal dark:text-white text-gray-400">{props.description}</h2>
        <div className="mt-auto flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">₱{props.new_price.toLocaleString()}</p>
          <p className="text-sm font-medium text-gray-500 line-through dark:text-gray-300">₱{props.old_price.toLocaleString()}</p>
          <button className="ml-auto">
            <p className="text-base p-2 font-medium text-green-500 cursor-pointer">Add to cart</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
