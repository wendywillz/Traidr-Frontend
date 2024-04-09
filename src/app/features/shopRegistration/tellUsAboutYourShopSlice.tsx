import { createSlice } from "@reduxjs/toolkit";
import { TellUsAboutYourShopFormDetails } from "../../../interfaces/shopInterfaces";
//import { StockYourShopFormDetails } from "../../../interfaces/shopInterfaces";

const initialState = {} as TellUsAboutYourShopFormDetails;

export const tellUsAboutYourShopSlice = createSlice({
  name: "tellUsAboutYourShop",
  initialState,
  reducers: {
    updateTellUsAboutYourShop: (state, action) => {
      const tellUsAboutYourShop = action.payload;
      return Object.assign(state, tellUsAboutYourShop);
    },
    clearTellUsAboutYourShop: (state) => {
      return Object.assign(state, {});
    },
  },
});

export const { updateTellUsAboutYourShop, clearTellUsAboutYourShop } =
  tellUsAboutYourShopSlice.actions;
export default tellUsAboutYourShopSlice.reducer;
