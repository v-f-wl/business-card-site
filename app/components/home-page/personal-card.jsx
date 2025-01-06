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
        <img src="https://images.unsplash.com/photo-1728577740843-5f29c7586afe?q=80&w=3280&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="personalCardAttributes">
        <AttributesItems category={translations.specialization} label={translations.specializationInfo} />
        <AttributesItems category={translations.basedIn}  label={translations.basedInInfo} />
      </div>
      <MobileNavigation/>
      <div className="personalCardDesc">I am a Frontend Developer with three years of experience in building websites and applications using React. I specialize in creating responsive layouts and modern user interfaces, delivering efficient and visually appealing solutions</div>
    </div>
  );
}
 
export default PersonalCard;