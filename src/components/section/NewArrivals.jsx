import React from 'react'
import { products } from '../../constants'
import Item from '../product/Item'
function NewArrivals() {
  return (
    <>
      <div>NewArrivals</div>
      {products.map((item) => {
      return <Item key={item.id} {...item} />;
      })}
    </>
  )
}

export default NewArrivals