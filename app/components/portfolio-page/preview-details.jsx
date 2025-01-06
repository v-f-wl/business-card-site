'use client'
import '../../styles/portfolio-page/preview-details.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import {setPortfolioTab} from '../../../redux/features/portfolioTadsSwitch-slice';
import TechnologieItem from './technologie-item'
import portfolioList from '../../data/portfolio-info';
import LinkItem from './link-item'
import IClose from '../icons/IClose';

const PreviewDetails = () => {
  const [ isActive, setIsActive ] = useState(false)
  
  const dispatch = useDispatch()
  const store = useSelector(store => store.portfolioTabs.activeTabs) // id of portfolio
  const activePage = useSelector(store => store.sectionsSwitch.activePage)

  useEffect(() => {
    if(store !== ''){
      setIsActive(() => true)
    } else setIsActive(false)
  },[store])

  useEffect(() => {
    if (activePage !== 'portfolio') {
      setIsActive(false);
      dispatch(setPortfolioTab(''));
    }
  }, [activePage, dispatch]);

  const handleCloseMobileDetails = () => {
    setIsActive(false)
    dispatch(setPortfolioTab(''));
  }
  const renderPortfolio = useMemo(() => {
    if (!store) return ''
    const currentData = portfolioList.find((item) => item.id === store);
    return(
      <>
        <div 
          onClick={handleCloseMobileDetails}
          className="portfolioBadyCloseBtn"
        >
          <IClose/>
        </div>
        <h2 className="portfolioBadyTitle noto-sans">{currentData.title.en}</h2>
        <div className="portfolioBadyDetails">
          <div className="portfolioBadyCompanyName">{currentData.companyName}</div>
          <div className="portfolioBadyDate">{currentData.interval.en}</div>
        </div>

        <h3 className="portfolioBadySubtitle">About the project:</h3>
        <p className="portfolioBadyDescriptions">{currentData.shortDescription.en}</p>
        <h3 className="portfolioBadySubtitle">Technologies:</h3>
        <div className="portfolioBadyTechnologies">
          {currentData.technologies.map((item, index) => (
            <TechnologieItem color='item-blue' label={item} key={`item__${index}`}/>
          ))}
        </div>
        <h3 className="portfolioBadySubtitle">Links:</h3>
        {/* <div className="portfolioBadyLinks">
          {currentData.links.map((item, index) => (
            <LinkItem label={item.title} key={`links__item__${index}`}/>
          ))}
        </div> */}
      </>
    )
  }, [store])
  return ( 
    <div 
      className={`
        portfolioBady 
        ${isActive ? 'portfolioBadyActive' : 'portfolioBadyHidden'}
      `}
    >
      {renderPortfolio}
    </div>
  );
}
 
export default PreviewDetails;