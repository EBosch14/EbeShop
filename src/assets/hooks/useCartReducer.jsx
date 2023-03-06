import { useReducer } from "react";
import { initialState, reducer } from "../reducers/cartReducer";

export const useCartReducer = () => {
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

  return { state, addToCart, clearAllCart, removeProduct };
};
