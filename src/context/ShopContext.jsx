import React, { createContext, useEffect, useState } from 'react';
import { products } from '../constants';

export const ShopContext = createContext(null);

const getDefaultCart = ()=>{
  let cart ={};
  for(let index = 0; index < products.length+1; index++){
    cart[index] = 0;
  }
  return cart;
}

function ShopContextProvider({ children }) {

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemID, quantity) =>{
    setCartItems((prev) => ({...prev,[itemID]:prev[itemID] + quantity}));
  }

  const removeFromCart = (itemID) =>{
    setCartItems((prev) => ({...prev,[itemID]:prev[itemID] - 1}));
  }

  const deleteFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: 0 }));
  };


  const getTotalCartAmount = () =>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item] > 0){
        let itemInfo = products.find((product)=>product.id===Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const getTotalOfCartProducts = () => {
    let totalCartItems = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalCartItems++;
      }
    }
    return totalCartItems;
  };

  const contextValue = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart, 
    getTotalCartAmount,
    getTotalOfCartProducts,
  };


  // useEffect(() => {
  //   console.log('Updated Cart Items:', cartItems);
  // }, [cartItems]);

  // useEffect(() => {
  //   console.log('Products in ShopContextProvider:', products);
  // }, [products]);

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
