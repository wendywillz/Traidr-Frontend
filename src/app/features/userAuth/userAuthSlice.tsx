import { createSlice } from "@reduxjs/toolkit";
import userDataInterface from "../../../interfaces/userInterface";

const initialState = {} as userDataInterface;

const userAuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const user = action.payload;
      return Object.assign(state, user);
    },
    logout: (state) => {
      return Object.assign(state, {} as userDataInterface);
    },
  },
});

export const { login, logout } = userAuthSlice.actions;
export default userAuthSlice.reducer;
