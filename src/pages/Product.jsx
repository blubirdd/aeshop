import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../components/product/ProductDisplay';
import RelatedProducts from '../components/product/RelatedProducts';

function Product() {

  const {products} = useContext(ShopContext)
  const {productID} = useParams();
  const product = products.find((product)=>product.id === Number(productID));

  return (
    <>
    <ProductDisplay product={product} />
    <RelatedProducts />
    </>
  )
}

export default Product