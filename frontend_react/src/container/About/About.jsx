import React from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

const aboutsArray = [
  {
    title: 'Web Development',
    description: 'I am a good web developer',
    imgUrL: images.about01,
  },
  {
    title: 'Frontend Development',
    description: 'I am a good web developer',
    imgUrL: images.about02,
  },
  {
    title: 'Backend Development',
    description: 'I am a good web developer',
    imgUrL: images.about03,
  },
  {
    title: 'MERN Stack',
    description: 'I am a good web developer',
    imgUrL: images.about04,
  },
];

const About = () => {
  return (
    <>
      {/* <h2 className='head-text'>
        {/* I know that <span>Good Development</span>
        <br /> means <span>Good Business</span> 
      </h2> */}
      <h4>
        {' '}
        I am a software engineer from Atlanta, GA, currently a part of
        Accenture's cloud innovation team. We specialize in building custom
        applications for clients on various cloud providers. The technologies
        I'm currently using are AWS, Next/React.js, Typescript, GraphQL,
        Storybook, Contentful CMS, and MaterialUI.
      </h4>

      <div className='app__profiles'>
        {aboutsArray.length > 0 &&
          aboutsArray.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className='app__profile-item'
              key={about.title + index}
            >
              <img src={about.imgUrL} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className='p-text' style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </motion.div>
          ))}
      </div>
    </>
  );
};

export default AppWrap(About, 'about');
