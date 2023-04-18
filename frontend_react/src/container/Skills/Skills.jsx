import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import './Skills.scss';

const mySkills = [
  { name: 'React', icon: images.react },
  { name: 'Next.js', icon: images.next },
  { name: 'Typescript', icon: images.typescript },
  { name: 'SpringBoot', icon: images.springIcon },
  { name: 'Javascript', icon: images.javascript },
  { name: 'MaterialUI', icon: images.mu5 },
  { name: 'Express', icon: images.express },
  { name: 'MongoDB', icon: images.mongodb },
  { name: 'Node', icon: images.node },
  { name: 'AWS', icon: images.aws },
  { name: 'GraphQL', icon: images.graphql },
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
    desc: [
      'Engineered innovative modern applications utilizing Next.js, React, Typescript, GraphQL, Java SpringBoot and AWS.',
      "Worked closely with internal and client teams in an agile environment to deliver high-quality reusable software according to client's business objectives and needs.",
      'Helped lead client stakeholder technical demos and team retrospective meetings.',
      'Help lead coding pairing sessions and train and onboard new Engineers.',
    ],
  },
  {
    name: 'Firefighter/Paramedic',
    company: 'Gwinnett County Fire and Emergency Services',
    desc: [
      'Responded to emergency medical incidents such as auto accidents, fires, gas system leaks, and animals in distress analyze patient needs and administer advanced emergency medical care as needed',
      'Performed search and rescue of individuals in hazardous environments including collapsed buildings, auto accidents, hazardous material spills and confined spaces.',
      'Assisted in the training of fire department personnel in emergency medical techniques and medical field activities; maintained inventory of drugs and controlled substances.',
      'Responsible for scheduling station staff on apparatuses and auditing reports.',
      'Was responsible for training new paramedics as a Field training specialist.',
      'Received the 2020 & 2021 stroke award and three Cares awards for actions in the field.',
    ],
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
              <div className='app__flex' style={{ backgroundColor: '#edf2f8' }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className='app__skills-exp'>
          {myExperiences.map((work, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-exp-works'
              id={work.company}
              key={work.company + index}
            >
              <h4 className='bold-text'>{work.name}</h4>
              <p className='p-text'>{work.company}</p>
              <ul>
                {work.desc.map((item, index) => (
                  <li key={item + index} className='p-text'>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
);
