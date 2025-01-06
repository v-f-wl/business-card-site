import { createSlice } from '@reduxjs/toolkit';
import translations from '../../app/locales/translations.json';

const initialState = {
  language: 'en', 
  translations: translations.en,
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    switchLanguage: (state) => {
      const nextLanguage = state.language === 'en' ? 'ru' : 'en';
      state.language = nextLanguage;
      state.translations = translations[nextLanguage];
    },
  },
});

export const { switchLanguage } = languageSlice.actions;
export default languageSlice.reducer;
