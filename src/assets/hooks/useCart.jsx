import { useContext } from 'react';
import { CartContext } from '../context/CartContextReducer';

export const useCart = () =>{
  const cart = useContext(CartContext);

  //check if the context can be used
  if(cart === undefined){
    throw new Error("useCart must be used whithin a cartProvider");
  }

  return cart
}