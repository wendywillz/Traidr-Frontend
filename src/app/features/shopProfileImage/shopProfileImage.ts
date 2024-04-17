import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shopProfileImage: "",

}

const shopProfileImage = createSlice({
  name: "shopProfileImage",
  initialState,
  reducers: {
    setShopProfileImage: (state, action) => {
      state.shopProfileImage = action.payload;
    },
  },
});

export const { setShopProfileImage } = shopProfileImage.actions;
export default shopProfileImage.reducer;
