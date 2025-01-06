import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
  activeTabs: ''
} 

export const portfolioTadsSwitch = createSlice({
  name: 'portfolioTabs',
  initialState,
  reducers: {
    setPortfolioTab: (state, action) => {
      state.activeTabs = action.payload;
    },
    removePortfolioTab: (state,action) => {
      state.activeTabs = action.payload;
    }
  }
})

export const { setPortfolioTab, removePortfolioTab } = portfolioTadsSwitch.actions

export default portfolioTadsSwitch.reducer