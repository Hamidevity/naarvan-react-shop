import React from 'react'
import { useContext } from 'react';

// Context
import { ProductsContext } from '../../context/ProductContextProvider';
import Product from '../shared/Product';

function Store() {
  const products = useContext(ProductsContext)
  return (
    <div style={{display:"flex" , flexWrap:"wrap" , justifyContent:"center"}}>
      {
        products.map(item => <Product key={item.id} productData={item}/>)
      }
    </div>
  )
}

export default Store;
