import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    currentStepIndex: 0,
}

const formStepperSlice = createSlice({
  name: "formStepper",
  initialState,
  reducers: {
    setCurrentStepIndex: (state, action) => {
      state.currentStepIndex = action.payload;
    },
  },
});

export const { setCurrentStepIndex } = formStepperSlice.actions;

export default formStepperSlice.reducer;