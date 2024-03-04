import { createSlice } from "@reduxjs/toolkit";
import { ListingDetails } from "../../../interfaces/shopInterfaces";
//import { StockYourShopFormDetails } from "../../../interfaces/shopInterfaces";

const initialState = {} as ListingDetails;

export const stockYourShopFormSlice = createSlice({
  name: "stockYourShop",
  initialState,
  reducers: {
    updateStockYourShop: (state, action) => {
      const stockYourShop = action.payload;
      console.log("initial state", initialState);
      return Object.assign(state, stockYourShop);
    },
  },
});

export const { updateStockYourShop } = stockYourShopFormSlice.actions;
export default stockYourShopFormSlice.reducer;
