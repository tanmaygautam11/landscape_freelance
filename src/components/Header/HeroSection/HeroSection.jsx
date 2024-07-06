import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./HeroSection.css";

const HeroSection = () => {
  const images = [
    "https://images.pexels.com/photos/914682/pexels-photo-914682.jpeg?auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/919317/pexels-photo-919317.jpeg?auto=compress&cs=tinysrgb",
    "https://images.pexels.com/photos/1084380/pexels-photo-1084380.jpeg?auto=compress&cs=tinysrgb",
  ];

  return (
    <div className="hero-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showStatus={true}
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
        <h1>I am John Doe</h1>
        <button>Hire me</button>
      </div>
    </div>
  );
};

export default HeroSection;
