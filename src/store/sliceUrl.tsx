import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
  checked: any;
  isYear:boolean;
  plan: any,
}

const initialState : InitialStateType = {
  checked: [], 
  isYear:false,
  plan: {namePlan:'',price:1},
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
    changePlan: (state, action) => {
      console.log('z',action.payload)
      state.plan = action.payload
    },
  },
});

export const { changeChecked,changeIsYear,changePlan } = sliceData.actions;
export default sliceData.reducer;