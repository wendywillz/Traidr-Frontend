import { createSlice } from "@reduxjs/toolkit";
import { NameYourShopFormDetails } from "../../../interfaces/shopInterfaces";

const initialState = {} as NameYourShopFormDetails;

export const nameYourShopSlice = createSlice({
  name: "nameYourShop",
  initialState,
  reducers: {
    updatedNameYourShop: (state, action) => {
      const nameYourShop = action.payload;
      console.log("initial state", initialState);
      return Object.assign(state, nameYourShop);
    },
    clearNameYourShop: (state) => {
      return Object.assign(state, {});
    },
  },
});

export const { updatedNameYourShop, clearNameYourShop } =
  nameYourShopSlice.actions;
export default nameYourShopSlice.reducer;
