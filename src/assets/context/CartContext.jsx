import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);

    //if the product isnt in the cart
    setCart((prevState) => [
      ...prevState,
      {
        ...product,
        quantity: 1,
      },
    ]);

    //if the product is already in the cart
    if (productInCartIndex >= 0) {
      //first method with structuredClone
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }
  };

  const clearAllCart = () => {
    setCart([]);
  };

  const removeProduct = (product) => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if(product.quantity > 1) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity -= 1;
      return setCart(newCart);
    } else{
      return setCart((prevState) => prevState.filter((item) => item.id !== product.id));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearAllCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
