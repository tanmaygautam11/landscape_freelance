import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './WhyUs.css';

const WhyUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0.6 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div
      className="whyus-container"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      <div className="whyus-content">
        <motion.h1 variants={cardVariants}>
          We Love To Take Pride In The Work We Do
        </motion.h1>
        <motion.h2 variants={cardVariants}>
          Efficient Landscaping So You Can Get to Living
        </motion.h2>
        <div className="whyus-cards">
          <motion.div className="whyus-card" variants={cardVariants}>
            <div className="card-icon"></div>
            <p>
              WE PROVIDE <strong>CUSTOMIZED SOLUTIONS</strong> TO YOUR LANDSCAPE
              NEEDS
            </p>
          </motion.div>
          <motion.div className="whyus-card" variants={cardVariants}>
            <div className="card-icon"></div>
            <p>
              WE COMMUNICATE WITH OUR CLIENTS
              <strong> EVERY STEP OF THE WAY</strong>
            </p>
          </motion.div>
        </div>
        <motion.button
          className="whyus-button"
          variants={cardVariants}
        >
          Read More About Us
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WhyUs;
