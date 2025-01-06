'use client'
import './../../styles/home-page/main-title.scss'
import { useSelector } from 'react-redux';
import IGitHub from '../icons/IGitHub'

const MainTitle = () => {
  const currentTab = useSelector(store => store.sectionsSwitch.activePage)
  const translations = useSelector(state => state.language.translations)
  return ( 
    <div 
      className={`
        mainTitle
        ${currentTab === 'home' ? 'mainTitleActive' : 'mainTitleHide'}
      `}
    >
      <h1 className="noto-sans">
        {translations.im} <br />
        <span>Frontend Develop </span>
        {translations.specializing}
      </h1>
      <a href='https://github.com/v-f-wl' className="mainTitleGit">
        <IGitHub/>GitHub 
      </a>
    </div> 
  );
}
 
export default MainTitle;