import { configureStore } from "@reduxjs/toolkit";
import sectionsSwitch from "./features/sectionsSwitch-slice";
import portfolioTabs from "./features/portfolioTadsSwitch-slice";
import sectionsSkillsTab from "./features/skillsTabs-slice";
import cvSwitch from "./features/cvModalSwitch-slice";
import languageReducer from './features/languageSwitch-slice';

export const store = configureStore({
  reducer: {
    sectionsSwitch:sectionsSwitch,
    portfolioTabs:portfolioTabs,
    sectionsSkillsTab: sectionsSkillsTab,
    cvSwitch: cvSwitch,
    language: languageReducer,
  }
})