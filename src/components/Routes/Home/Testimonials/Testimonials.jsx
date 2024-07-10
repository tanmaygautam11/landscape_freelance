import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonial.css';

const testimonials = [
  {
    text: "Everyone at Flores was very professional and friendly! I had great interactions with the owner Mr. Flores, project manager Eric, office staff, and the men who did the difficult labour on hot summer days. When I called the first time the staff was nice they booked my first meeting to discuss what we needed straight away.",
    author: "Megan T.",
  },
  {
    text: "If I could give these guys a thousand stars I WOULD. Rumaldo and his guys are amazing! Over the course of the job, they became like family to us. Rumaldo is a great listener. He genuinely cared about executing our vision. He worked with our budget and delivered a flawless landscape! They turned our shabby, ugly, unsustainable yard into a beautifully designed, functional, environmentally sound space for the whole family. Thank you, thank you, thank you!!!",
    author: "Uma S.",
  },
  {
    text: "Flores Landscaping worked with me every step of the way, even though I was on business trips and vacations most of the time. We communicated via phone and photos and once I got back, the yard was absolutely stunning! The team was amazing, no complaints, and very thoughtful and clean. I'm happy and will be enjoying dinners al fresco, movie nights outside my back deck, and just sitting outside watching my kids take advantage of our space!",
    author: "Lynn H.",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.1, // Trigger when 20% of the element is visible
  });

  const containerVariants = {
    hidden: { opacity: 0.4 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5, // Delay to stagger animation
        ease: 'easeOut',
      },
    },
  };

  const authorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 1, // Delay to stagger animation
        ease: 'easeOut',
      },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <motion.section
      ref={ref}
      className="testimonials-section"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className="overlay"></div>
      <motion.h2 variants={textVariants}>TESTIMONIALS</motion.h2>
      <motion.h3 variants={textVariants}>Don't take our word for it, read our reviews</motion.h3>

      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial"
            variants={textVariants}
          >
            <motion.p variants={textVariants}>{testimonial.text}</motion.p>
            <motion.i className="author" variants={authorVariants}>— {testimonial.author}</motion.i>
          </motion.div>
        ))}
      </Slider>
    </motion.section>
  );
};

export default Testimonials;
