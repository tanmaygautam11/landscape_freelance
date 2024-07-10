import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './ScrollToTop.css'; // Define your styles for the button

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };
  const [hideButton, setHideButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setHideButton(false);
      } else {
        setHideButton(true);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up: remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <button class={`button ${hideButton ? 'show' : ''}`} onClick={scrollToTop}>
      <div class="arrow">
        <ArrowUpwardIcon />
      </div>
    </button>

  );
};

export default ScrollToTop;
