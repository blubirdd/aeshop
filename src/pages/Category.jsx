import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/product/Item';

function Category({ category }) {
  const { products } = useContext(ShopContext);
  
  return (
    <>
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
