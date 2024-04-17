import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    shopLogo: "",

}

const shopProfileImage = createSlice({
  name: "shopProfileImage",
  initialState,
  reducers: {
    setShopProfileImage: (state, action) => {
      state.shopLogo = action.payload;
    },
  },
});

export const { setShopProfileImage } = shopProfileImage.actions;
export default shopProfileImage.reducer;
