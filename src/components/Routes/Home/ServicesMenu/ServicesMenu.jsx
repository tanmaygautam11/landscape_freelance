import Slider from "react-slick";
import TransparentCard from "./TransparentCard";
import "./ServicesMenu.css"; // Assuming you use a CSS file for styling
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesMenu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval (3 seconds)
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

  return (
    <div className="landscape-section">
      <div className="service-menu">
        <h2>Over 10 Years of Experience</h2>
        <h3>Landscaping and Outdoor Home Design Done Right</h3>
        <Slider {...settings} className="landscape-carousel">
          <TransparentCard
            imageSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6rJZJiob3jA3Sbb3T7TpQFBcYYt0yU2lvE3PuqtHhI7vUnlEm"
            description="Mow Lawn up to 10,000 Square Feet"
            price="$"
            buttonText="Mow Lawn"
          />
          <TransparentCard
            imageSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwWggZLlPgpw9vK5FwsMB2O-OKTR75K4hzKFCeIpPVeGsOvMWn"
            description="Mow Lawn up to 15,000 Square Feet"
            price="$"
            buttonText="Mow Lawn"
          />
          <TransparentCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7LccJx8OKwCrIZhidFPjELNQY39pGEdTpv2teHXn1ezrTqUrc"
            description="Mow Lawn up to 20,000 Square Feet"
            price="$"
            buttonText="Mow Lawn"
          />
          <TransparentCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMdjROgDRZ6rjOVVgtxj65P-D4pQtTeZcf1lrKMXRlTfRSVyW"
            description="Mow Lawn up to 20,000 Square Feet"
            price="$"
            buttonText="Mow Lawn"
          />
          <TransparentCard
            imageSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRBskRunKErds_WtDD4cOWk2cT8lNrjANGQAw1A-HftnTVdATFZ"
            description="New Gutter Installation by Linear Feet"
            price="$"
            buttonText="Install Gutters"
          />
          <TransparentCard
            imageSrc="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSBjoIGuQPCPtjDM7kWy8bTTiiRAy2uPc8DilG-p-Kou81Kbkub"
            description="Gutter Guards Installation by Linear Feet"
            price="$"
            buttonText="Install Gutters"
          />
          <TransparentCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9Ra0QAtsoHL0VhFJ0jQbBYlLCwd-UNbb1vBW3-PTrsiPzzYM"
            description="Gutter cleaning service by linear feet"
            price="$"
            buttonText="Install Gutters"
          />
          <TransparentCard
            imageSrc="https://nebula.wsimg.com/a7cff6e5ff08fd2e431d9d9d9546a2e9?AccessKeyId=FC005CED326C880BEF8C&disposition=0&alloworigin=1"
            description="Powerwash Weekday Service"
            price="$"
            buttonText="Powerwash"
          />
        </Slider>
      </div>
    </div>
  );
};

export default ServicesMenu;
