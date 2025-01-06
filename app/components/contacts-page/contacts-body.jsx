'use client'
import { useSelector } from 'react-redux';
import '../../styles/contacts-page/contacts-body.scss'

import ContactsWrapper from './contacts-wrapper'
const ContactsBody = () => {

  const activeTab = useSelector(store => store.sectionsSwitch.activePage)
  return ( 
    <div 
      className={`
        contactsBody
        ${activeTab === 'contacts' ? 'contactsBodyActive' : 'contactsBodyHidden'}
      `}
    >
      <ContactsWrapper/>
    </div>
   );
}
 
export default ContactsBody;