import React, { useState } from 'react';
// import { validateEmail } from '../../utils/helpers';
import githubIcon from '../assets/icons/github.png';
import linkedinIcon from '../assets/icons/linkedin.png';
import twitterIcon from '../assets/icons/twitter.png';


export function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  function handleChange(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }  
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      <h1>Contact</h1>
      <form id='contact-form' className='active' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input type='text' defaultValue={name} onChange={handleChange} name='name' />
        </div>
        <div>
          <label htmlFor='email'>Email address:</label>
          <input type='email' defaultValue={email} onChange={handleChange} name='email' />
        </div>
        <div>
          <label htmlFor='message'>Message:</label>
          <textarea name='message' defaultValue={message} onChange={handleChange} rows='5' />
        </div>
        <button type='submit'>Submit</button>
      </form>

      <footer id='contact-connect' className='icons'>
        <span role='img' aria-label='github'>
          <a href="https://github.com/raposamillar" target="_blank" rel="noreferrer">
          <img src={githubIcon} style={{ width: '25%' }} alt='GitHub icon' /></a>
        </span>
        <span role='img' aria-label='linkedin'>
          <a href="https://ca.linkedin.com/in/lisaraposamillar" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} style={{ width: '25%' }} alt='LinkedIn icon'/></a>
        </span>
        <span role='img' aria-label='twitter'>
          <a href="https://twitter.com/raposamillar" target="_blank" rel="noreferrer">
          <img src={twitterIcon} style={{ width: '25%' }} alt='Twitter icon'/></a>
        </span>
    </footer>
    </section>
    
  );
}

export default ContactForm;