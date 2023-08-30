import React, { createContext, useEffect, useState } from 'react';
import useFetchData from '../Components/UseFetchData';

export const ProductsContext = createContext();

export const MyContext = ({ children }) => {
  const URL = `https://fakestoreapi.com/products`;
  const { data } = useFetchData(URL);
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    setProduits(data);
  }, [data]);

  return (
    <ProductsContext.Provider value={produits}>
      {children}
    </ProductsContext.Provider>
  );
};
