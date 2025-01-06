'use client'
import { useState } from 'react';
import '../../styles/contacts-page/contacts-feedback.scss'

const FormItem = ({
  type,
  handleChange,
  label
}) => {
  const [inputValue, setInputValue] = useState('')

  const handleChangeValue = (value) => {
    setInputValue(prev => value)
  }

  return (
    <div className="feedbackFormInput">
      <label htmlFor='inputName'>{label}</label>
      {type === 'textarea' ? (<textarea name="" id=""></textarea>) 
      : 
      (
        <input 
          onChange={(e) => handleChangeValue(e.target.value)}
          type="text" 
          id='inputName' 
          value={inputValue}
        />
      )}
    </div>
  )
}



const ContactsFeedback = () => {
  const [feedbackData, setFeedbackData] = useState({
    userName: '',
    userEmail: '',
    userFeedbackMessage: ''
  })

  const handleChangeData = (type, value) => {
    setFeedbackData((prev) => {
      const newData = {...prev}
      newData[type] = value
      return newData
    }) 
  }
  return ( 
    <div className="feedback">
      <h3 className="contactsLinksTitle">Feedback</h3>
      <div className="feedbackForm">
        <FormItem label='Name' type='input'/>
        <FormItem label='Email' type='input'/>
        <FormItem label='Message' type='textarea'/>
      </div>
    </div>
  );
}
 
export default ContactsFeedback;