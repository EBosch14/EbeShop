export const initialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];
//update localStorage
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export const reducer = (state, action) => {
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
        updateLocalStorage(newState);
        return newState;
      }

      updateLocalStorage(state);
      const newState = [
        ...state,
        {
          ...actionPayload, //product
          quantity: 1,
        },
      ];
      return newState;
    }

    case "REMOVE_PRODUCT": {
      const productInCartIndex = state.findIndex(
        (item) => item.id === actionPayload.id
      );

      if (actionPayload.quantity > 1) {
        const newState = structuredClone(state);
        newState[productInCartIndex].quantity -= 1;
        updateLocalStorage(newState);
        return newState;
      } else {
        const newState = state.filter((item) => item.id !== actionPayload.id);
        updateLocalStorage(newState);
        return newState;
      }
    }

    case "CLEAR_CART": {
      updateLocalStorage([]);
      return [];
    }
  }

  return state;
};
