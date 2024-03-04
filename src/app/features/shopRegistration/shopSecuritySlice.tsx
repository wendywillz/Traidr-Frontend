import { createSlice } from "@reduxjs/toolkit";
//import { StockYourShopFormDetails } from "../../../interfaces/shopInterfaces";
import { ShopSecurityInterface } from "../../../interfaces/shopInterfaces";

const initialState = {} as ShopSecurityInterface;

export const shopSecuritySlice = createSlice({
  name: "shopSecurity",
  initialState,
  reducers: {
    updateTermsAndCondition: (state, action) => {
      const shopSecurity = action.payload;
      console.log("initial state", initialState);
      return Object.assign(state, shopSecurity);
    },
  },
});

export const { updateTermsAndCondition } = shopSecuritySlice.actions;
export default shopSecuritySlice.reducer;
