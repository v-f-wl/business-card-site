'use client'
import { useState } from 'react'
import '../../styles/skills-page//skills-tabs-switch.scss'
import { useDispatch, useSelector } from 'react-redux'
import { changeSkillsTab } from '../../../redux/features/skillsTabs-slice'

const SwitchItem = ({label, activeId, id, onClick}) => {
  return (
    <div 
      onClick={() => onClick(id)}
      className={`switchItem ${id === activeId && 'switchItemActive'}`}
    >
      {label}
    </div>
  )
}
const SkillsSwitch = () => {
  const dispatch = useDispatch()
  const [activeTab, setActiveTab] = useState('frontend')
  const isActivePage = useSelector(store => store.sectionsSwitch.activePage)
  const translations = useSelector(state => state.language.translations)

  const handleChangeTab = (id) => {
    setActiveTab(prev => id)
    dispatch(changeSkillsTab(id))
  }
  return ( 
    <div 
      className={`
        skillsSwitch 
        ${isActivePage === 'skills' ? 'skillsSwitchActive' : 'skillsSwitchHide'}`}
    >
      {/* // переделать в массив */}
      <SwitchItem label='Frontend' activeId={activeTab} id='frontend' onClick={handleChangeTab}/>
      <SwitchItem label='Backend' activeId={activeTab} id='backend' onClick={handleChangeTab}/>
      <SwitchItem label={translations.othersLabel} activeId={activeTab} id='others' onClick={handleChangeTab}/>
    </div>
   );
}
 
export default SkillsSwitch;