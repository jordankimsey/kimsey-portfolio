import React, { useState } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Work.scss';
import { AppWrap, MotionWrap } from '../../wrapper';

const myWork = [
  {
    title: 'AirportHub',
    description: 'Built using Next.js/React, Firebase and tailwind.',
    projectLink: 'https://airport-hub.vercel.app/',
    codeLink: 'https://github.com/jordankimsey/airportHub',
    imgUrl: images.airportHub,
    tags: ['Next.Js', 'All'],
  },
  {
    title: 'Shoppy Dashboard',
    description: 'Built using React, tailwind and Syncfusion.',
    projectLink: 'https://react-dashboard-inky-alpha.vercel.app/ecommerce',
    codeLink: 'https://github.com/jordankimsey/react-dashboard',
    imgUrl: images.dashboard,
    tags: ['React', 'All'],
  },
  {
    title: 'Easy Bank Landing Page',
    description: 'Built using Next.js/React and MaterialUI',
    projectLink: 'https://easy-bank-landing-page-delta-gold.vercel.app/',
    codeLink: 'https://github.com/jordankimsey/easy-bank-landing-page',
    imgUrl: images.easybank,
    tags: ['Next.Js', 'All'],
  },
  {
    title: 'Todo Application',
    description:
      'Built using Next.js, Typescript, tailwind.css, Express and MongoDB',
    projectLink: 'https://next-13-todo-app.vercel.app/',
    codeLink: 'https://github.com/jordankimsey/next_13_todo_app',
    imgUrl: images.todo,
    tags: ['Node.js', 'Next.Js', 'All'],
  },
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const [works, setWorks] = useState(myWork);
  const [filterWork, setFilterWork] = useState(myWork);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);
      if (item === 'All') {
        setFilterWork(myWork);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  return (
    <>
      <h2 className='head-text'>
        My <span>Works</span>
      </h2>
      <div className='app__work-filter'>
        {['Next.Js', 'React', 'Node.js', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${
              activeFilter === item ? 'item-active' : ''
            }`}
          >
            {item}
          </div>
        ))}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => (
          <div className='app__work-item app__flex' key={index}>
            <div className='app__work-img app__flex'>
              <img src={work.imgUrl} alt={work.title} />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{
                  duration: 0.25,
                  ease: 'easeInOut',
                  staggerChildren: 0.5,
                }}
                className='app__work-hover app__flex'
              >
                <a href={work.projectLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className='app__flex'
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={work.codeLink} target='_blank' rel='noreferrer'>
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{
                      duration: 0.25,
                    }}
                    className='app__flex'
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className='app__work-content app__flex'>
              <h4 className='bold-text'>{work.title}</h4>
              <p
                className='p-text'
                style={{ marginTop: 10, textAlign: 'center' }}
              >
                {work.description}
              </p>
              <div className='app__work-tag app__flex'>
                <p className='p-text'>{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'app__primarybg'
);
