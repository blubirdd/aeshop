import React, { createContext, useEffect } from 'react';
import { products } from '../constants';

export const ShopContext = createContext(null);

function ShopContextProvider({ children }) {
  const contextValue = { products };

  useEffect(() => {
    console.log('Products in ShopContextProvider:', products);
  }, [products]);

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
