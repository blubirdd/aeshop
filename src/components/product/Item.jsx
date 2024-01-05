import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';

function Item({ ...product }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="w-72 transform overflow-hidden bg-white dark:bg-slate-800 shadow-md hover:shadow-lg border border-gray-200 duration-300 flex flex-col">
      <Link to={`/product/${encodeURIComponent(product.name.toLowerCase().replace(/\s+/g, '-'))}`}>
        <img
          className="h-64 w-full rounded-t-md object-contain object-center transition-transform ease-in-out duration-500 transform-gpu hover:scale-105"
          src={product.image[0]}
          alt={product.name}
        />
        <div className="p-4 flex-grow flex flex-col">
          <h2 className="text-md font-bold dark:text-white text-gray-900">{product.name}</h2>
          <h2 className="mb-2 text-sm font-normal dark:text-white text-gray-400">{product.description}</h2>
          <div className="mt-auto flex items-center">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">₱{product.new_price.toLocaleString()}</p>
            <p className="text-sm font-medium text-gray-500 line-through dark:text-gray-300">₱{product.old_price.toLocaleString()}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Item;
