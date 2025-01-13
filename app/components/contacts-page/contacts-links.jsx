import '../../styles/contacts-page/contacts-links.scss'
import contactsLink from '../../data/contacts-link'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


const LinkItem = ({iconUrl, label, link, type}) => {
  const href = type === 'mail' ? `mailto:${link}` : link;

  return (
    <a href={href} className="linkItem">
      <div className="linkItemImg">
        <img src={iconUrl} alt="" />
      </div>
      <div className="linkItemLabel">{label}</div>
    </a>
  )
}
const ContactsLinks = () => {
  "use client"
  const translations = useSelector(state => state.language.translations)
  return ( 
    <div className="contactsLinks">
      <h3 className="contactsLinksTitle">{translations.navContacts}</h3>

      <div className="contactsLinksWrapper">
        {contactsLink.map((item) => (
          <LinkItem 
            key={item.id} 
            label={item.label} 
            iconUrl={item.iconUrl} 
            link={item.link}
            type={item.type}
          />
        ))}
      </div>

      <div className="contactsLinksPlace">{translations.basedInInfo}</div>
      <div className="contactsLinksLabel">I'm Online:</div>
      <div className="contactsLinksTime">10:00am : 11:00pm (GTM +4)</div>
    </div>
   );
}
 
export default ContactsLinks;