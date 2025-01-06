'use client'
import { useDispatch, useSelector } from 'react-redux';
import './../styles/navigation.scss';
import { changePage } from '../../redux/features/sectionsSwitch-slice';
import NavigationItem from './navigation-item';


const Navigation = () => {
  const dispatch = useDispatch()
  const activePage = useSelector(store => store.sectionsSwitch.activePage)
  const translations = useSelector((state) => state.language.translations);
  const handleChangePage = (id) => {
    dispatch(changePage(id))
  }
  return ( 
    <div className={`navContainer ${activePage === 'home' && 'navContainerMargin'}`}>
      <NavigationItem label={translations.navHome} id="home" activeId={activePage} onClick={handleChangePage}/>
      <NavigationItem label={translations.navSkills} id="skills" activeId={activePage} onClick={handleChangePage}/>
      <NavigationItem label={translations.navPortfolio} id="portfolio" activeId={activePage} onClick={handleChangePage}/>
      <NavigationItem label={translations.navContacts} id="contacts" activeId={activePage} onClick={handleChangePage}/>
    </div>
   );
}
 
export default Navigation;