import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userAuth/userAuthSlice";
import nameYourShopReducer from "./features/shopRegistration/nameYourShopSlice";
import stockYourShopReducer from "./features/shopRegistration/stockYourShopSlice";
import shopSecurityReducer from "./features/shopRegistration/shopSecuritySlice";
const store = configureStore({
  reducer: {
    user: userReducer,
    nameYourShop: nameYourShopReducer,
    stockYourShop: stockYourShopReducer,
    shopSecurity: shopSecurityReducer,
  },
});

export default store;
