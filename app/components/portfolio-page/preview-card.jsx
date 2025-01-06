'use client'
import '../../styles/portfolio-page/preview-card.scss'
import { useEffect, useState } from 'react';
import IArrow from '../icons/IArrow'
import { useDispatch, useSelector } from 'react-redux';
import {setPortfolioTab} from '../../../redux/features/portfolioTadsSwitch-slice'
const PreviewCard = ({
  isPet,
  title,
  date,
  description,
  id
}) => {
  const [isActive, setIsActive] = useState(false)
  const activeTabId = useSelector(store => store.portfolioTabs.activeTabs)
  const dispatch = useDispatch()
  useEffect(() => {
    if(activeTabId === id) {setIsActive(prev => true)}
    else setIsActive(prev => false)
  },[activeTabId])


  const handleChangeActiveTab = () => {
    dispatch(setPortfolioTab(id))
  }
  return ( 
    <div 
      onClick={() => handleChangeActiveTab()}
      className={`previewCard noto-sans ${isActive && 'previewCardActive'}`}
    >
      {!isActive && (
        <div className="previewCardArrow">
          <IArrow/>
        </div>
      )}
      <h2 className="previewCardTitle nunito-sans">{title}</h2>
      <div className="previewCardDate">{date}</div>
      <div className="previewCardDescription">{description}</div>
      {isPet && (
        <div className="previewCardPet">Pet project</div>
      )}
    </div>
  );
}
 
export default PreviewCard;