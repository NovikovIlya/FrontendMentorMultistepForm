import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1, 
};

export const sliceData = createSlice({
  name: "sliceData",
  initialState,
  reducers: {
    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

export const { changeStep } = sliceData.actions;
export default sliceData.reducer;