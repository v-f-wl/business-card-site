import { useDispatch, useSelector } from 'react-redux';
import '../styles/mobile-navigation.scss'
import NavigationItem from './navigation-item';
import { changePage } from '../../redux/features/sectionsSwitch-slice';
const MobileNavigation = () => {
  const dispatch = useDispatch()
  const activePage = useSelector(store => store.sectionsSwitch.activePage)
  const translations = useSelector((state) => state.language.translations);
  const handleChangePage = (id) => {
    dispatch(changePage(id))
  }
  return ( 
    <div className="mobileNav">
      <NavigationItem label={translations.navSkills} id="skills" activeId={activePage} onClick={handleChangePage}/>
      <NavigationItem label={translations.navPortfolio} id="portfolio" activeId={activePage} onClick={handleChangePage}/>
      <NavigationItem label={translations.navContacts} id="contacts" activeId={activePage} onClick={handleChangePage}/>
      <div className="mobileNavItem">{translations.downloadCV}</div>
    </div>
   );
}
 
export default MobileNavigation;