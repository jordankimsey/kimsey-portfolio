import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';

import './Skills.scss';

const mySkills = [
  { name: 'React', icon: images.react },
  { name: 'Next.js', icon: images.next },
  { name: 'Typescript', icon: images.typescript },
  { name: 'Javascript', icon: images.javascript },
  { name: 'GraphQL', icon: images.graphql },
  { name: 'MaterialUI', icon: images.mu5 },
  { name: 'AWS', icon: images.aws },
  { name: 'Node', icon: images.node },
  { name: 'Python', icon: images.python },
  { name: 'Git', icon: images.git },
  { name: 'HTML', icon: images.html },
  { name: 'CSS', icon: images.css },
  { name: 'SASS', icon: images.sass },
];

const myExperiences = [
  {
    name: 'Software Engineer',
    company: 'Accenture',
    desc: 'Full stack software engineer',
  },
  {
    name: 'Firefighter/Paramedic',
    company: 'Gwinnett County Fire and Emergency Services',
    desc: 'firefighter',
  },
];

const Skills = () => {
  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {mySkills.map((skill, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div
                className='app__flex'
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {myExperiences.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-exp-works'
                id={work.company}
                key={work.company}
              >
                <h4 className='bold-text'>{work.name}</h4>
                <p className='p-text'>{work.company}</p>
                <p className='p-text'>{work.desc}</p>
              </motion.div>
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, 'skills');
