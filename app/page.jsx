'use client'
import "./globals.scss";
import PreferencesControl from "./components/preferences-control";
import Navigation from "./components/navigation";
import PersonalCard from "./components/home-page/personal-card";
import MainTitle from "./components/home-page/main-title";
import PortfolioBody from "./components/portfolio-page/portfolio-body";
import SkillsBody from "./components/skills-page/skills-body";
import ContactsBody from "./components/contacts-page/contacts-body";
import GradientOne from "./components/gradient-one";
import DownloadCV from "./components/download-btn";
import CvModal from "./components/cv-modal";
import MobileHeader from "./components/mobile-header";
import useIsPageRendered from './hooks/useIsPageRendered'
import { useMediaQuery } from "react-responsive";


export default function Home() {
  const isPageRendered = useIsPageRendered();
  const isDecktop = useMediaQuery({ query: "(min-width: 1024px)" });
  if(!isPageRendered){
    return <div className="loadingScreen">Loading</div>
  }

  return (
    <div className="wrapper">
      <GradientOne/>
      {isDecktop && (<DownloadCV/>)}
      <CvModal/>
      <div className="container">
        <div className="pageBody">
          <PersonalCard/>
          <div className="pageBodyMain">
            <div className="headerPage">
              {!isDecktop && (<MobileHeader/>)}
              <Navigation/>
              <PreferencesControl/>
            </div>
            <MainTitle/>
            <SkillsBody/>
            <PortfolioBody/>
            <ContactsBody/>
          </div>
        </div>
      </div>
    </div>
  );
}
