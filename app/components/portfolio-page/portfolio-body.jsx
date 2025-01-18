'use client'
import '../../styles/portfolio-page/portfolio-body.scss'
import portfolioList from '../../data/portfolio-info'
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import PreviewCard from './preview-card';
import PreviewDetails from './preview-details';

const PortfolioBody = () => {
  const currentTab = useSelector(store => store.sectionsSwitch.activePage)
  const selectedPortfolioTab = useSelector(store => store.portfolioTabs.activeTabs) // id of portfolio
  const locale = useSelector(store => store.language.language)
  const scrollElement = useRef(null)

  useEffect(() => {
    if (scrollElement.current) {
      scrollElement.current.scrollTo({
        top: 0,
      });
    }
  }, [currentTab])
  return ( 
    <div 
      className={`
        portfolio 
        ${currentTab === 'portfolio' ? 'portfolioActive' : 'portfolioHidden'}
      `}
    >
      <div className="portfolioBody">
        <div className={`portfolioBodyList ${selectedPortfolioTab && 'portfolioBodyListSelectedPortfolio'}`} ref={scrollElement}>
          {portfolioList.map((item) => (
            <PreviewCard 
              key={item.id}
              id={item.id}
              title={item.title[locale]}
              date={item.interval[locale]}
              description={item.shortDescription[locale]}
              isPet={item.isPetProject}
            />
          ))}
        </div>
        <div className="portfolioBodyInfo">
          <PreviewDetails/>
        </div>
        </div>
    </div>
   );
}
 
export default PortfolioBody;