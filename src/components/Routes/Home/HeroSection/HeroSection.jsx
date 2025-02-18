import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroSection.css";
import arrow from "../../../../assets/arrow.svg";
import { NavLink } from "react-router-dom";

// Custom fade animation handler
const customFadeAnimationHandler = (props, state) => {
  const transitionTime = `${props.transitionTime}ms`;
  const transitionTimingFunction = "ease-in-out";

  let slideStyle = {
    position: "absolute",
    display: "block",
    zIndex: -2,
    minHeight: "100%",
    opacity: 0,
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    transitionTimingFunction: transitionTimingFunction,
    WebkitTransitionTimingFunction: transitionTimingFunction,
    MozTransitionTimingFunction: transitionTimingFunction,
    msTransitionTimingFunction: transitionTimingFunction,
    OTransitionTimingFunction: transitionTimingFunction,
  };

  if (!state.swiping) {
    slideStyle = {
      ...slideStyle,
      WebkitTransitionDuration: transitionTime,
      MozTransitionDuration: transitionTime,
      OTransitionDuration: transitionTime,
      transitionDuration: transitionTime,
      msTransitionDuration: transitionTime,
    };
  }

  return {
    slideStyle,
    selectedStyle: { ...slideStyle, opacity: 1, position: "relative" },
    prevStyle: { ...slideStyle },
  };
};

const HeroSection = () => {
  const images = [
    "https://images.pexels.com/photos/7174108/pexels-photo-7174108.jpeg?auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgV_CXQz-VRECLGtdVA1Wcdjdp1N6RS8t8UJ-L_nIjqac9pz0K-7HyajoMGvJ8M_2amqruqr7SF5qwl7_EVuZyIO5hnlSby9rdcLFUpN1HCb626AY5ke1F70Vte5GVTJDrdh7LKQeFChRU/s1600/LAWN_STRIPES_2.jpg",
    "https://www.floresartscape.com/upload/large/header-bg_573_large_Cd-hgjvmgD.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const customRenderArrowNext = (onClickHandler, hasNext, label) => {
    const handleClick = () => {
      onClickHandler();
      const arrowBtn = document.querySelector(".custom-arrow");
      if (arrowBtn) {
        arrowBtn.classList.add("clicked");
        setTimeout(() => {
          arrowBtn.classList.remove("clicked");
        }, 300);
      }
    };

    return (
      hasNext && (
        <button className="custom-arrow" onClick={handleClick} title={label}>
          <img src={arrow} alt="forward-arrow.svg" />
        </button>
      )
    );
  };

  return (
    <div className="hero-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={3000}
        showStatus={false}
        onChange={(index) => setCurrentSlide(index)}
        renderArrowNext={customRenderArrowNext}
        animationHandler={customFadeAnimationHandler}
        swipeable={false} // Disable swipe as the fade animation does not support it
      >
        {images.map((url, index) => (
          <div key={index} className="hero-slide">
            <div
              className="hero-image"
              style={{ backgroundImage: `url(${url})` }}
            />
          </div>
        ))}
      </Carousel>
      <div className="hero-overlay"></div>
      <div className="hero-text">
        <p>CONSTRUCTION & LANDSCAPING LLC</p>
        <h1>We Bring Your Landscape to Life.</h1>

        <NavLink to="/gallery" className="custom-navlink">
          <button> VIEW PROJECTS</button>
        </NavLink>
      </div>
      <div className="carousel-status">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
};

export default HeroSection;
