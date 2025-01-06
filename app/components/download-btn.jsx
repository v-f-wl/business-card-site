
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../redux/features/cvModalSwitch-slice'
import IDownload from '../components/icons/IDownload'
import '../styles/download-btn.scss'


const DownloadCV = () => {
  const dispatch = useDispatch()
  const translations = useSelector(state => state.language.translations)
  const handleToggleModal = () => {
    dispatch(toggleModal())
  }
  return ( 
    <div 
      onClick={handleToggleModal}
      className="downloadBtn"
    >
      <IDownload/>
      <span className="downloadBtnLabel">
        {translations.downloadCV}
      </span>
    </div>
   );
}
 
export default DownloadCV;