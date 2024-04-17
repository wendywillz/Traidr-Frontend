import { createSlice } from "@reduxjs/toolkit";

interface CartItem {
  productId: string;
  productQuantity: number;
}
const initialState = {
  cartItem: [] as CartItem[],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCartCount: (state, action) => {
      state.cartItem = action.payload;
    },
    addToCart: (state, action) => {
      if (action.payload.type === "add") {
        // Check if the product already exists in the cart
        const existingProductIndex = state.cartItem.findIndex(
          (item) => item.productId === action.payload.productId
        );

        if (existingProductIndex >= 0) {
          // If the product exists, update its quantity
          state.cartItem[existingProductIndex].productQuantity +=
            action.payload.productQuantity;
        } else {
          // If the product doesn't exist, add it to the cart
          state.cartItem.push({
            productId: action.payload.productId,
            productQuantity: action.payload.productQuantity,
          });
        }
      } else if (action.payload.type === "remove") {
        // Remove the product from the cart
        state.cartItem = state.cartItem.filter(
          (item) => item.productId !== action.payload.productId
        );
      }
    },
  },
});

export const { setCartCount, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
