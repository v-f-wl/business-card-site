'use client'
import { useSelector } from 'react-redux';
import '../styles/gradient-one.scss'
const GradientOne = () => {
  const activeTab = useSelector(store => store.sectionsSwitch.activePage)
  return ( 
    <div 
      className={`
        gradientOne
        ${activeTab === 'home' && 'gradientOneHome'}
        ${activeTab === 'portfolio' && 'gradientOnePortfolio'}
        ${activeTab === 'skills' && 'gradientOneSkills'}
        ${activeTab === 'contacts' && 'gradientOneContact'}
      `}
    >
        <div className="gradientOneFirst"></div>
        <div className="gradientOneSecond"></div>
    </div>
  );
}
 
export default GradientOne;

// home portfolio contacts