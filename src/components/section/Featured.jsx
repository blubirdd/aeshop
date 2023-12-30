import React from 'react'
import { products } from '../../constants'
import Item from '../product/Item'
function Featured() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mx-auto my-6">
        {products.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </>
  )
}

export default Featured