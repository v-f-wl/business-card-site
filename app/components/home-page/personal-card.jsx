'use client'
import '../../styles/home-page/personal-card.scss'
import { useSelector } from 'react-redux';
import AttributesItems from './attributes-items';
import MobileNavigation from '../mobile-navigation';
const PersonalCard = () => {

  const currentTab = useSelector(store => store.sectionsSwitch.activePage)
  const translations = useSelector(state => state.language.translations)
  return (  
    <div 
      className={`
        personalCard 
        ${currentTab === 'home' ? 'personalCardActive' : 'personalCardHide'}
      `}
    >
      <div className="personalCardName noto-sans">{translations.myName}</div>
      <div className="personalCardImage">
        <img src="https://avatars.githubusercontent.com/u/106255382?v=4" alt="" />
      </div>
      <div className="personalCardAttributes">
        <AttributesItems category={translations.specialization} label={translations.specializationInfo} />
        <AttributesItems category={translations.basedIn}  label={translations.basedInInfo} />
      </div>
      <MobileNavigation/>
      <div className="personalCardDesc">{translations.description}</div>
    </div>
  );
}
 
export default PersonalCard;