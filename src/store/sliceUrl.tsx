import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  checked: any[];
  isYear:boolean;
}

const initialState : InitialStateType = {
  checked: [], 
  isYear:false,
};

export const sliceData = createSlice({
  name: "sliceData",
  initialState,
  reducers: {
    changeChecked: (state, action) => {
      state.checked = action.payload;
    },
    changeIsYear: (state, action) => {
      state.isYear = action.payload;
    },
  },
});

export const { changeChecked,changeIsYear } = sliceData.actions;
export default sliceData.reducer;