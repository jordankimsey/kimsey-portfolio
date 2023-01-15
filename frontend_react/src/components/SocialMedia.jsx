import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a
          href='https://www.linkedin.com/in/isaac-kimsey-bab62949/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a
          href='https://github.com/jordankimsey'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub />
        </a>
      </div>
      <div>
        <a
          href='https://www.facebook.com/jordan.kimsey/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebookF />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
