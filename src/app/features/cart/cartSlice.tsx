import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCartCount: (state, action) => {
      state.cartCount = action.payload;
    },
    addToCart: (state, action) => {
      if (action.payload.type == "add") {
        state.cartCount += action.payload.quantity;
      }
       else if (action.payload.type == "remove") {
         state.cartCount -= action.payload.quantity;
       }
    }
  }
});

export const { setCartCount, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
