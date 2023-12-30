import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Item from '../components/product/Item';

function Category({ category }) {
  const { products } = useContext(ShopContext);
  return (
    <>
      <div>{category}</div>
      {products.map((item) => {
        if(category === item.category){
          return <Item key={item.id} {...item} />;
        }
        else{
          return null;
        }

      })}

    </>

  )
}

export default Category