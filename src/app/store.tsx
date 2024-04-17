import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./features/userAuth/userAuthSlice";
import nameYourShopReducer from "./features/shopRegistration/nameYourShopSlice";
import stockYourShopReducer from "./features/shopRegistration/stockYourShopSlice";
import shopSecurityReducer from "./features/shopRegistration/shopSecuritySlice";
import tellUsAboutYourShopReducer from "./features/shopRegistration/tellUsAboutYourShopSlice";
import formStepperReducer from "./features/formStepper/formStepperSlice";
import shopProfileImageReducer from "./features/shopProfileImage/shopProfileImage";
const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    user: userReducer,
    nameYourShop: nameYourShopReducer,
    stockYourShop: stockYourShopReducer,
    shopSecurity: shopSecurityReducer,
    tellUsAboutYourShop: tellUsAboutYourShopReducer,
    formStepper: formStepperReducer,
    shopProfileImage: shopProfileImageReducer,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
