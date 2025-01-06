import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
  activePage: 'home'
} 

export const sectionsSwitchSlice = createSlice({
  name: 'sectionsSwitch',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.activePage = action.payload;
    }
  }
})

export const { changePage } = sectionsSwitchSlice.actions

export default sectionsSwitchSlice.reducer