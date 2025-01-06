'use client'
import '../styles/mobile-header.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../redux/features/sectionsSwitch-slice'
import IBurger from './icons/IBurger'

const BurderItem = (
  {label, changePage, active, id}
) => {
  return (
    <div 
      onClick={() => changePage(id)}
      className={`${active && 'burgerItemActive'}`}
    >
        {label}
    </div>
  )
}
const MobileHeader = () => {
  const [isOpenedMenu, setIsOpenedMenu] = useState(false)
  const dispatch = useDispatch()
  const activePage = useSelector(store => store.sectionsSwitch.activePage)
  const translations = useSelector((state) => state.language.translations);

  if(activePage === 'home'){
    return
  }

  const handleChangePage = (page) => {
    dispatch(changePage(page))
    setIsOpenedMenu(false)
  }
  const handleToggleMenu = () => {
    setIsOpenedMenu(!isOpenedMenu)
  }
  return ( 
    <div className="mobileHeader">
      <div 
        className="mobileHeaderLogo"
        onClick={() => handleChangePage('home')}
      >
        {translations.navHome}
      </div>
      <div onClick={handleToggleMenu}>
        <IBurger/>
      </div>
      <div 
        className={`
          mobileHeaderMenuContent
          ${isOpenedMenu ? 'mobileHeaderMenuContentActive' : 'mobileHeaderMenuContentHidden'}
        `}
      >
        <BurderItem 
          label={translations.navSkills}
          changePage={handleChangePage}
          active={activePage === 'skills'}
          id="skills"
        />
        <BurderItem 
          label={translations.navPortfolio}
          changePage={handleChangePage}
          active={activePage === 'portfolio'}
          id="portfolio"
        />
        <BurderItem 
          label={translations.navContacts}
          changePage={handleChangePage}
          active={activePage === 'contacts'}
          id="contacts"
        />
      </div>
    </div>
   );
}
 
export default MobileHeader;