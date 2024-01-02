import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/product/Item';

function Category({ banner, description, category }) {
  const { products } = useContext(ShopContext);

  return (
    <>
      <div class="h-52 sm:mt-4 shadow-gray-800 shadow-sm rounded-sm overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: `url(${banner})` }}>
        <div class="bg-gray-900 bg-opacity-80 flex items-center h-full">
          <div class="px-10 max-w-3xl">
            <h2 class="text-2xl text-white font-semibold">{category}</h2>
            <p class="mt-2 text-gray-200">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-6 mx-auto my-6">
        {products.map((item) => {
          if (category === item.category) {
            return <Item key={item.id} {...item} />;
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

export default Category;
