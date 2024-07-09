import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./AboutSection.css";

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const textVariants = () => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        // delay: index * 0.1, // Adjust delay for staggering effect
        duration: 1,
      },
    },
  });

  const imageVariants = (index) => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Adjust delay for staggering effect
        duration: 0.5,
      },
    },
  });

  return (
    <div className="about-section" ref={ref}>
      <motion.div className="about-content" initial="hidden" animate={controls}>
        <motion.h2 className="about-heading" variants={textVariants(0)}>
          Baten Construction & Landscaping
        </motion.h2>
        <motion.h1 className="about-title" variants={textVariants(1)}>
          One of the Top-Rated Landscape Construction Companies
        </motion.h1>
        <motion.p className="about-description" variants={textVariants(2)}>
          Baten Construction & Landscaping creates landscape designs that will
          give your home instant curb appeal and value. We serve homes and
          offices. With an experienced team of artists, landscapers, and
          builders, we help bring your vision to fruition. Baten Construction &
          Landscaping provides the highest quality landscaping services because
          we take great pride in what we do and have done for over 10 years. As
          part of our commitment to each and every client, we go above and
          beyond by ensuring reliable, professional service every step of the
          way.
        </motion.p>
        <motion.h3 className="about-why-choose" variants={textVariants(3)}>
          Why choose us?
        </motion.h3>
        <motion.ul className="about-list" variants={textVariants(4)}>
          <motion.li variants={textVariants(5)}>
            We love to take pride in the work we do
          </motion.li>
          <hr />
          <motion.li variants={textVariants(6)}>
            We have over 10 years of experience
          </motion.li>
          <hr />
          <motion.li variants={textVariants(7)}>
            We have skilled workers with great work ethics
          </motion.li>
          <hr />
          <motion.li variants={textVariants(8)}>
            We have great recommendations from our clients (check out
            testimonials)
          </motion.li>
          <hr />
          <motion.li variants={textVariants(9)}>
            We communicate with our clients every step of the way
          </motion.li>
        </motion.ul>

        <motion.p className="about-final" variants={textVariants(10)}>
          We only use top-quality materials and procedures to ensure your yard
          is properly designed and executed to stand the test of time and make
          the neighbors a little jealous, too. Furthermore, we believe your
          outdoor space should be used just as much as any part of the home.
          That’s why we take care of all landscaping and outdoor home design
          quickly and efficiently, so you can get outside and start living in
          it.
        </motion.p>
      </motion.div>

      <motion.div className="about-images" initial="hidden" animate={controls}>
        <motion.img
          src="https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg?auto=compress&cs=tinysrgb"
          alt="Landscape design 1"
          variants={imageVariants(0)}
        />
        <motion.img
          src="https://images.pexels.com/photos/6032280/pexels-photo-6032280.jpeg?auto=compress&cs=tinysrgb"
          alt="Landscape design 2"
          variants={imageVariants(1)}
        />
      </motion.div>
    </div>
  );
};

export default AboutSection;
