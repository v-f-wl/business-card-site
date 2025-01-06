import '../../styles/contacts-page/contacts-placeholder.scss'
const ContactsPlaceholder = ({
  changeTab,
  currentTab
}) => {
  return (
    <div 
      className={`
        contactPlaceholder
        ${currentTab ? 'toContactTab' : 'toFeedBackTab'}
      `}
    >
      <div className="feedbackTab">
        <div className="contactPlaceholderTitle">
          Have feedback, suggestions, or ideas to share? Click the button below to let me know!
        </div>
        <div 
          onClick={() => changeTab(true)}
          className="contactPlaceholderBtn"
          >
          Leave Feedback
        </div>
      </div>

      <div className="contactTab">
        <div className="contactPlaceholderTitle">
          Got a question, collaboration opportunity, or just want to say hello? Click below to get in touch with me!
        </div>
        <div onClick={() => changeTab(false)} className="contactPlaceholderBtn">Get in Touch</div>
      </div>
    </div>
  );
}
 
export default ContactsPlaceholder;