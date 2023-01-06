import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { Tooltip } from 'react-tooltip';
import './Skills.scss';

const mySkills = [
  { name: 'React', icon: images.react },
  { name: 'Typescript', icon: images.typescript },
  { name: 'Javascript', icon: images.javascript },
  { name: 'GraphQL', icon: images.graphql },
  { name: 'Node', icon: images.node },
  { name: 'Python', icon: images.python },
  { name: 'Git', icon: images.git },
  { name: 'MaterialUI', icon: images.mu5 },
  { name: 'HTML', icon: images.html },
  { name: 'SASS', icon: images.sass },
  { name: 'CSS', icon: images.css },
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
  const [experience, setExperience] = useState(myExperiences);
  const [skills, setSkills] = useState(mySkills);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';
    // client.fetch(query).then((data) => {
    //   setExperience(data);

    // });
    // client.fetch(skillsQuery).then((data) => {
    //   setSkills(data);

    // });
  }, []);

  return (
    <>
      <h2 className='head-text'>Skills & Experience</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
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
          {experience.map((work) => (
            <>
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-exp-work'
                data-tip-content={work.desc}
                data-for={work.name}
                key={work.name}
              >
                <h4 className='bold-text'>{work.name}</h4>
                <p className='p-text'>{work.company}</p>
              </motion.div>
              <Tooltip
                id={work.name}
                anchorId={work.name}
                effect='solid'
                arrowColor='#fff'
                className='skills-tooltip'
              />
                {/* {work.desc}
              </Tooltip> */}
            </>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
