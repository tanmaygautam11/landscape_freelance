import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import "./SocialMedia.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMedia = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation only once
    threshold: 0.2, // Trigger when 20% of the element is visible
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0.6 },
    visible: { opacity: 1, transition: { duration: 0.7 } },
  };

  const textVariants = () => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: index * 0.1, // Adjust delay for staggering effect
        duration: 1,
      },
    },
  });

  return (
    <motion.div
      ref={ref}
      className="social-media-footer"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.div className="social-media" initial="hidden" animate={controls}>
        <motion.h2 variants={textVariants(0)}>SOCIAL MEDIA</motion.h2>
        <motion.p variants={textVariants(1)}>Follow us on Social Media</motion.p>
        <motion.div className="icons" variants={textVariants(2)}>
          <FacebookRoundedIcon sx={{ color: "#fff", fontSize: 42 }} />
          <InstagramIcon sx={{ color: "#fff", fontSize: 42 }} />
          <LinkedInIcon sx={{ color: "#fff", fontSize: 42 }} />
          <XIcon sx={{ color: "#fff", fontSize: 35 }} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SocialMedia;
