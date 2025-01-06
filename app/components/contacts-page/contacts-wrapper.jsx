'use client'
import '../../styles/contacts-page/contacts-wrapper.scss'

import { useSelector } from 'react-redux';
import { useState } from 'react';

import ContactsLinks from './contacts-links'
import ContactsPlaceholder from './contacts-placeholder'
import ContactsFeedback from './contacts-feedback'

const ContactsWrapper = () => {
  const [isContactsTab, setIsContactsTab] = useState(false)
  const activeTab = useSelector(store => store.sectionsSwitch.activePage)

  const handleChangeTab = (value) => {
    setIsContactsTab(prev => value)
  }
  return ( 
    <div 
      className={`
        contactsWrapper
        ${activeTab === 'contacts' ? 'contactsWrapperActive' : 'contactsWrapperHidden'}
        ${isContactsTab ? 'placeholderTab' : 'contactTab'}
      `}
    >
      
      <div className="contactsWrapperPlaceholder">
        <ContactsPlaceholder 
          currentTab={isContactsTab}
          changeTab={(value) =>handleChangeTab(value)}
        />
      </div>
      <div className="contactsWrapperContacts">
        <ContactsLinks/>
      </div>
      <div className="contactsWrapperFeedback">
        <ContactsFeedback/>
      </div>
    </div>
   );
}
 
export default ContactsWrapper;