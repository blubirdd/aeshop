import React from 'react'
import { products } from '../../constants'
import Item from '../product/Item'
function Featured() {
  return (
    <>
      <div class="mx-auto pb-6 pt-12">
        <h2 class="pb-1 text-4xl font-bold text-center text-gray-800 dark:text-gray-400">
          Featured Items
        </h2>
        <div class="mx-auto mb-1 border-4 border-b border-blue-800 w-44 dark:border-gray-400"></div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-4 mx-auto">
        {products.map((item) => {
          return <Item key={item.id} {...item} />;
        })}
      </div>
    </>
  )
}

export default Featured