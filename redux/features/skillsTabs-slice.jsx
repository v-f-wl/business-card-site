import { createSlice } from "@reduxjs/toolkit";
import { frontend, backend, others } from "../../app/data/skills-list";

const initialState =  {
  activeTab: 'frontend',
  activeArray: frontend
} 
export const sectionsSkillsTab= createSlice({
  name: 'skillsTab',
  initialState,
  reducers: {
    changeSkillsTab: (state, action) => {
      console.log(action.payload)
      state.activeTab = action.payload;
      if(action.payload === 'backend'){
        state.activeArray = backend
      }else if(action.payload === 'others'){
        state.activeArray = others
      }else{
        state.activeArray = frontend
      }
    }
  }
})

export const { changeSkillsTab } = sectionsSkillsTab.actions

export default sectionsSkillsTab.reducer