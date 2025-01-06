'use client'
import '../../styles/skills-page/skills-list-wrapper.scss'
import { useSelector } from 'react-redux';

const SkillsItem = ({
  label, icon, animationType
}) => {
  return (
    <div className={`skillItem ${animationType}`}>
      <div className="">
        <img src={icon} alt={`icon ${label}`}/>
      </div>
      {label}
    </div>
  )
}

const SkillsListWrapper = () => {
  const isActivePage = useSelector(store => store.sectionsSwitch.activePage)
  const activeTab = useSelector(store => store.sectionsSkillsTab.activeTab)
  const activeList = useSelector(store => store.sectionsSkillsTab.activeArray)

  return ( 
    <div className={`skillsWrapper ${isActivePage === 'skills' && 'skillsWrapperActive'}`}>
      {activeList.map(item => (
        <SkillsItem
          key={item.id}
          label={item.label}
          icon={item.iconUrl}
        />
      ))}
    </div>
  );
}
 
export default SkillsListWrapper;