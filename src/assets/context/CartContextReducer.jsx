import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initialState = [];
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      );

      if (productInCartIndex >= 0) {
        //first method with structuredClone
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity += 1;
        return newState;
      }

      return [
        ...state,
        {
          ...actionPayload, //product
          quantity: 1,
        },
      ];
    }

    case "REMOVE_PRODUCT": {
      const productInCartIndex = state.findIndex((item) => item.id === actionPayload.id);

      if (actionPayload.quantity > 1) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity -= 1;
        return newState;
      } else {
        return state.filter((item) => item.id !== actionPayload.id);
      }
    }

    case "CLEAR_CART": {
      return initialState;
    }
  }

  return state;
};

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const clearAllCart = () => dispatch({ type: "CLEAR_CART" });

  const removeProduct = (product) =>
    dispatch({
      type: "REMOVE_PRODUCT",
      payload: product,
    });

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
