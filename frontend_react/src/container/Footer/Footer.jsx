import React, { useState } from 'react';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import emailjs from '@emailjs/browser';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  console.log(process.env.REACT_APP_EMAILJS_USER_ID);
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        contact,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error);
          setLoading(false);
          isFormSubmitted(false);
        }
      );
  };

  return (
    <>
      <h2 className='head-text'>Take a coffee & chat with me</h2>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:jordankimsey@gmail.com' className='p-text'>
            Jordankimsey@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='mobile' />
          <a href='tel: +1 (770) 862-1160' className='p-text'>
            (770) 862-1160
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input
              type='text'
              className='p-text'
              name='name'
              placeholder='Your Name'
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          <div className='app__flex'>
            <input
              type='email'
              className='p-text'
              name='email'
              placeholder='Your Email'
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);
