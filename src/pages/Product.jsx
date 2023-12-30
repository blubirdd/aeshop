import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/product/ProductDisplay';

function Product() {

  const {products} = useContext(ShopContext)
  const {productID} = useParams();
  const product = products.find((e)=>e.id === Number(productID));

  return (
    <>
    <ProductDisplay product={product} />
    </>
  )
}

export default Product