import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userAuth/userAuthSlice";
import nameYourShopReducer from "./features/shopRegistration/nameYourShopSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    nameYourShop: nameYourShopReducer,
  },
});

export default store;
