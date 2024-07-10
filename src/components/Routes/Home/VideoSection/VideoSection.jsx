import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './VideoSection.css';

const VideoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="video-section"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <h2 className="video-title">PRESS</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KtIyHq0dNXM"
          title="Lawn and Landscaping Services"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="media-logos">
        {/* Replace with your actual logo images */}
        <img src="logo1.png" alt="Logo 1" />
        <img src="logo2.png" alt="Logo 2" />
        {/* Add more logos as needed */}
      </div>
    </motion.div>
  );
};

export default VideoSection;
