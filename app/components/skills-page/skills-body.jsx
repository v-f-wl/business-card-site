'use client'
import '../../styles/skills-page/skills-body.scss'
import SkillsSwitch from './skills-tabs-switch'
import SkillsListWrapper from './skills-list-wrapper'
import { useSelector } from 'react-redux'

const SkillsBody = () => {
  const isActivePage = useSelector(store => store.sectionsSwitch.activePage)
  return ( 
    <div 
      className={`
        skillsBody ${isActivePage !== 'skills' && 'skillsBodyHide'}
      `}
    >
      <SkillsListWrapper/>
      <SkillsSwitch/>
    </div>
   );
}
 
export default SkillsBody;