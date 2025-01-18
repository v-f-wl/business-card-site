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
  const locale = useSelector(store => store.language.language)
  const translations = useSelector(state => state.language.translations)
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
        <h2 className="portfolioBadyTitle noto-sans">{currentData.title[locale]}</h2>
        <div className="portfolioBadyDetails">
          <div className="portfolioBadyCompanyName">{currentData.companyName}</div>
          <div className="portfolioBadyDate">{currentData.interval[locale]}</div>
        </div>

        <h3 className="portfolioBadySubtitle">{translations.about}:</h3>
        <p dangerouslySetInnerHTML={{ __html: currentData.aboutProject[locale] }} className="portfolioBadyDescriptions"/>
        <h3 className="portfolioBadySubtitle">{translations.technologies}:</h3>
        <div className="portfolioBadyTechnologies">
          {currentData.technologies.map((item, index) => (
            <TechnologieItem color='item-blue' label={item} key={`item__${index}`}/>
          ))}
        </div>
        <h3 className="portfolioBadySubtitle">{translations.links}:</h3>
        <div className="portfolioBadyLinks">
          {currentData.links.map((item, index) => (
            <LinkItem 
              label={item.title[locale]} 
              key={`links__item__${index}`}
              link={item.url}
            />
          ))}
        </div>
      </>
    )
  }, [store,locale ])
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