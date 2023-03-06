import { createContext } from "react";
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const {state, addToCart, clearAllCart, removeProduct} = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearAllCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
