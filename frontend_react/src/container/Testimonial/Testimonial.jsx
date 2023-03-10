import React, { useState } from 'react';
import './Testimonial.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const myBrands = [
  { imgUrl: images.accenture, name: 'Accenture' },
  { imgUrl: images.gcfes, name: 'Gwinnett County Fire' },
];

const myTestimonials = [
  {
    name: 'Linda',
    compnay: 'Accenture',
    imgUrl: images.accenture,
    feedback:
      "Jordan is an exemplary Software Engineer, a great example of a self-starter, seeks to add value, is proactive in supporting others, and thoroughly and consistently delivers with great quality. I am very impressed with Jordan's knowledge, experience, and eagerness to do and learn more. Jordan excelled far beyond expectations at his level. In fact, Jordan performed extremely well as an unofficial Junior Anchor on this team due to his ability to grasp complex and sometimes ambiguous tasks. Jordan always presented a positive attitude and sought to overcome obstacles through research and/or workarounds. Jordan was an absolute pleasure to work with and is performing far beyond expectations. I look forward to working with Jordan again.",
  },
  {
    name: 'Greg',
    compnay: 'Accenture',
    imgUrl: images.accenture,
    feedback:
      "Jordan consistently exemplified the best of what Accenture and the CIC bring to clients. This was evident by his diligent adherence to Pair Programming, and to Communication. At every standup, he started with, 'Yesterday I paired with...and worked on...' and then he would end by saying, 'Today I'm pairing with...and working on...' This helped maintain our standards, and served as a model for the other engineers, some of whom were not accustomed to the CIC ways of working. Jordan also sought opportunities to do more than code. He assisted me in creating a list of things the client could do to improve, and was able to communicate the team's needs to the client, which assisted in stakeholder management. ",
  },
  {
    name: 'Tarnisha',
    compnay: 'Accenture',
    imgUrl: images.accenture,
    feedback:
      'Jordan has been a pleasure to work with and has been a strong client facing presence on the EMMA project. He is efficient, quickly working through stories while also helping out his fellow, more junior, developers. He responds professionally to feedback and asks for additional details when needed. On client calls, he gives input and works to solve problems that might arise very quickly. One example was a pretty big state map ticket he worked on. There was a bit of issue with the responsive behavior, it was resolved very quickly and demoed right after for approval. He produces quality work and has great work ethic. I would love to work with Jordan again.',
  },
  {
    name: 'Diqi',
    compnay: 'Accenture',
    imgUrl: images.accenture,
    feedback:
      "Jordan is a very talented and productive developer. You can always rely on him to deliver quality work. He is always there for his fellow teammates whenever others need his help. Keep up the great work, and don't forget to invest some time on expanding your skillset.",
  },

  {
    name: 'Jerry',
    compnay: 'Accenture',
    imgUrl: images.accenture,
    feedback:
      "I can't say enough about Jordan. Jordan joined our team with a bang! He immediately accelerated our ability to produce tangible value to our clients. During the time I have worked with Jordan he has encouraged my growth and even taught me some methods to increase my ability to learn. Jordan displays leadership qualities daily. He has a patient but consistent approach to problem solving. Self starter and an excellent teacher, Jordan will definitely be an amazing asset for our department. Lastly he offers to help even after work and has given me two learning resources that have propelled my understanding of Javascript. I look forward to working with him in the future.",
  },
  {
    name: 'Lois',
    compnay: 'Accenture',
    imgUrl: images.accenture,
    feedback:
      "It has been a pleasure working with Jordan. Though he is new to the field, it is clear that he has a natural understanding when it comes to coding. He is quick to learn new things and has a good grasp on more difficult concepts. In addition, Jordan possess leadership skills which was evident daily whenever he walked through a new concept for either myself or a different co-workers of ours. He was always willing to teach others in a kind manner so as not to make anyone feel bad if they did not quite understand. Though Jordan always manages to get his tickets done quickly, that doesn't stop him from always going back to revise his work for a more efficient process. Working with Jordan and seeing his work ethics has inspired me to go above and beyond with whatever tasks I am assigned in my projects to come. I hope I can work with him again in the future.",
  },
];

const Testimonial = () => {
  const [brands, setBrands] = useState(myBrands);
  const [testimonials, setTestimonials] = useState(myTestimonials);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentTestimonial = testimonials[currentIndex];

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={currentTestimonial.imgUrl} alt='testimonial' />
            <div className='app__testimonial-content'>
              <p className='p-text'>{currentTestimonial.feedback}</p>
              <div>
                <h4 className='bold-text'>{currentTestimonial.name}</h4>
                <h5 className='p-text'>{currentTestimonial.compnay}</h5>
              </div>
            </div>
          </div>
          <div className='app__testimonial-btns app__flex'>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className='app__flex'
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonials-brands app__flex'>
        {brands.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={`${brand._id}_${index}`}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, 'app__testimonial'),
  'testimonials',
  'app__primarybg'
);
