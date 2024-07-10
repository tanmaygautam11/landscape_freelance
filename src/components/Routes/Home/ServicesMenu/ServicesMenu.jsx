import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import TransparentCard from "./TransparentCard";
import "./ServicesMenu.css"; // Assuming you use a CSS file for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const AnimatedCard = ({ card }) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.2, // Trigger when 20% of the element is visible
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.5 }}
    >
      <TransparentCard
        imageSrc={card.imageSrc}
        description={card.description}
        price="$"
        buttonText={card.buttonText}
      />
    </motion.div>
  );
};

AnimatedCard.propTypes = {
  card: PropTypes.shape({
    imageSrc: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ServicesMenu = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });
  const textVariants = () => ({
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  });

  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay interval (2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      imageSrc: "https://static.homeguide.com/assets/images/content/homeguide-lawn-service-mowing-residential-yard.jpg",
      description: "Mow Lawn up to 10,000 Square Feet",
      buttonText: "Mow Lawn"
    },
    {
      imageSrc: "https://booknow.lawnandlandscaping.us/60/mow-lawn-up-to-15000-square-feet.jpg",
      description: "Mow Lawn up to 15,000 Square Feet",
      buttonText: "Mow Lawn"
    },
    {
      imageSrc: "https://booknow.lawnandlandscaping.us/64/mow-lawn-up-to-20000-square-feet.jpg",
      description: "Mow Lawn up to 20,000 Square Feet",
      buttonText: "Mow Lawn"
    },
    {
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMdjROgDRZ6rjOVVgtxj65P-D4pQtTeZcf1lrKMXRlTfRSVyW",
      description: "Mow Lawn up to 2 Acres",
      buttonText: "Mow Lawn"
    },
    {
      imageSrc: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-install-gutters.jpeg-1-e1678948953381.jpg",
      description: "New Gutter Installation by Linear Feet",
      buttonText: "Install Gutters"
    },
    {
      imageSrc: "https://www.bobvila.com/wp-content/uploads/2022/10/How-to-Install-Gutter-Guards-Gather-tools.jpg?w=1200",
      description: "Gutter Guards Installation by Linear Feet",
      buttonText: "Install Gutters"
    },
    {
      imageSrc: "https://img1.wsimg.com/isteam/stock/3066/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg=true",
      description: "Gutter cleaning service by linear feet",
      buttonText: "Install Gutters"
    },
    {
      imageSrc: "https://media.istockphoto.com/id/1249215103/photo/cleaning-terrace-with-a-power-washer-high-water-pressure-cleaner-on-wooden-terrace-surface.jpg?b=1&s=612x612&w=0&k=20&c=1uvc146rD_fI0pYOABhryWsZJGaLFrdwGbHzLv-htcE=",
      description: "Powerwash Weekday Service",
      buttonText: "Powerwash"
    }
  ];

  return (
    <div className="landscape-section" ref={ref}>
      <motion.div className="service-menu" initial="hidden" animate={controls}>
        <motion.h2 variants={textVariants(0)}>Over 10 Years of Experience</motion.h2>
        <motion.h3 variants={textVariants(1)}>Landscaping and Outdoor Home Design Done Right</motion.h3>
        <Slider {...settings} className="landscape-carousel">
          {cards.map((card, index) => (
            <AnimatedCard key={index} card={card} index={index} />
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default ServicesMenu;
