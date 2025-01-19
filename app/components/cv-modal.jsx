'use client'
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../../redux/features/cvModalSwitch-slice';
import '../styles/cv-modal.scss'
import { useState } from 'react';
import IClose from '../components/icons/IClose'

const LanguageItem = ({label, isSelected, imageUrl, onChangeLanguage, id}) => {
  return(
    <div 
      onClick={() => onChangeLanguage(id)}
      className={`languageItem ${isSelected && 'languageItemActive'}`}
    >
      <img src={imageUrl} alt={`Language(${label} icon)`} />
      <span>
        {label}
      </span>
    </div>
  )
}


const CvModal = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const isModal = useSelector(store => store.cvSwitch.isModalOpen)
  const translations = useSelector(state => state.language.translations)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(toggleModal())
  }

  const handleChangeSelectedlanguage = (id) => {
    setSelectedLanguage(prev => id)
  }

  const handleDownloadCV = () => {
    if (selectedLanguage === 'en') {
      const filePath = '/cv/cv-2025-en.pdf'
      window.open(filePath, '_blank')
    } else if (selectedLanguage === 'ru') {
      const filePath = '/cv/cv-2025-ru.pdf'
      window.open(filePath, '_blank')
    } else {
      alert('something went wrong')
    }
  }
  return ( 
    <div 
      className={`cvModal ${isModal && 'cvModalActive'}`}
    >
      <div className="cvModalBody">
        <div 
          onClick={handleCloseModal}
          className="cvModalBodyClose"
        >
          <IClose/>
        </div>
        <div className="cvWrapper">
            <div className="cvWrapperTitle">
              {translations.selectLanguageLabel}
            </div>
            <div className="cvWrapperLanguage">
              <LanguageItem 
                label={translations.en}
                imageUrl='images/icons/circle-flags_us.svg' 
                isSelected={selectedLanguage === 'en'}
                onChangeLanguage={handleChangeSelectedlanguage}
                id="en"
                />
              <LanguageItem 
                label={translations.ru}
                imageUrl='images/icons/circle-flags_ru.svg' 
                isSelected={selectedLanguage === 'ru'}
                onChangeLanguage={handleChangeSelectedlanguage}
                id="ru"
              />
            </div>
            <div 
              className="cvWrapperDownload"
              onClick={handleDownloadCV}
            >
              {translations.downloadLabel}
            </div>
        </div>
      </div>
    </div>
   );
}
 
export default CvModal;

