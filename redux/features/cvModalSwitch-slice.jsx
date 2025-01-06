import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
  isModalOpen: false
} 

export const cvSwitch = createSlice({
  name: 'cvSwitch',
  initialState,
  reducers: {
    toggleModal: (state) => {
      const newState = !state.isModalOpen
      state.isModalOpen = newState;
    }
  }
})

export const { toggleModal } = cvSwitch.actions

export default cvSwitch.reducer