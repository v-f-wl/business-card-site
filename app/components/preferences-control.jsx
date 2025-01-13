'use client'
import { useDispatch, useSelector } from 'react-redux';
import '../styles/preferences-control.scss'
import ILanguage from "./icons/ILanguage";
import ITheme from "./icons/ITheme";

import { useTheme } from 'next-themes'
import { switchLanguage } from '../../redux/features/languageSwitch-slice';
import { useMediaQuery } from 'react-responsive';


const PreferencesControl = () => {
  const {theme,setTheme } = useTheme()
  const translations = useSelector((state) => state.language.translations);
  const activePage = useSelector(store => store.sectionsSwitch.activePage)
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const dispatch = useDispatch()

  const handleChangeTheme = () => {
    setTheme(() => theme === 'light' ? 'dark' : 'light')
  }

  const handleChangeLanguage = () => {
    dispatch(switchLanguage())
  }
  if(activePage !== 'home' && isMobile){
    return
  }
  return ( 
    <div className="preferencesContainer">
      {/* <div 
        onClick={handleChangeTheme}
        className="preferencesItem"
      >
        <ITheme size="24"/>
        <div className="">
          {translations.theme}
        </div>
      </div> */}
      <div 
        onClick={handleChangeLanguage}
        className="preferencesItem"
      >
        <ILanguage size="24"/>
        <div>{translations.language}</div>
      </div>
    </div>
  );
}
 
export default PreferencesControl;