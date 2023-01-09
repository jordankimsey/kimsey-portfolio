import React, { useState } from 'react';
import './Testimonial.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

const myBrands = [
  { imgUrl: images.adidas, name: 'Addidas' },
  { imgUrl: images.amazon, name: 'Amazon' },
  { imgUrl: images.skype, name: 'Skype' },
];

const myTestimonials = [
  {
    name: 'John',
    compnay: 'Accenture',
    imgUrl: images.spotify,
    feedback: 'Wonderful to work with.',
  },
  {
    name: 'Sarah',
    compnay: 'Accenture',
    imgUrl: images.css,
    feedback: 'Great developer.',
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
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
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
