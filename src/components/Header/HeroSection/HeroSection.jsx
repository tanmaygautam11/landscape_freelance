import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroSection.css";
import arrow from "../../../assets/arrow.svg";

const HeroSection = () => {
  const images = [
    "https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/7174108/pexels-photo-7174108.jpeg?auto=compress&cs=tinysrgb",
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
        interval={5000}
        showStatus={false}
        onChange={(index) => setCurrentSlide(index)}
        renderArrowNext={customRenderArrowNext}
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
        <h1>We Bring Your Landscape to Life.</h1>
        <button>VIEW PROJECT</button>
      </div>
      <div className="carousel-status">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  );
};

export default HeroSection;
