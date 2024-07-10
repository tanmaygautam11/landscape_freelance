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
    autoplaySpeed: 2000, // Set autoplay interval (3 seconds)
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
            imageSrc="https://static.homeguide.com/assets/images/content/homeguide-lawn-service-mowing-residential-yard.jpg"
            description="Mow Lawn up to 10,000 Square Feet"
            price="$"
            buttonText="Mow Lawn"
          />
          <TransparentCard
            imageSrc="https://booknow.lawnandlandscaping.us/60/mow-lawn-up-to-15000-square-feet.jpg"
            description="Mow Lawn up to 15,000 Square Feet"
            price="$"
            buttonText="Mow Lawn"
          />
          <TransparentCard
            imageSrc="https://booknow.lawnandlandscaping.us/64/mow-lawn-up-to-20000-square-feet.jpg"
            description="Mow Lawn up to 20,000 Square Feet"
            price="$"
            buttonText="Mow Lawn"
          />
          <TransparentCard
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMdjROgDRZ6rjOVVgtxj65P-D4pQtTeZcf1lrKMXRlTfRSVyW"
            description="Mow Lawn up to 2 Acres"
            price="$"
            buttonText="Mow Lawn"
          />
          <TransparentCard
            imageSrc="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/featured-image-install-gutters.jpeg-1-e1678948953381.jpg"
            description="New Gutter Installation by Linear Feet"
            price="$"
            buttonText="Install Gutters"
          />
          <TransparentCard
            imageSrc="https://www.bobvila.com/wp-content/uploads/2022/10/How-to-Install-Gutter-Guards-Gather-tools.jpg?w=1200"
            description="Gutter Guards Installation by Linear Feet"
            price="$"
            buttonText="Install Gutters"
          />
          <TransparentCard
            imageSrc="https://img1.wsimg.com/isteam/stock/3066/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true"
            description="Gutter cleaning service by linear feet"
            price="$"
            buttonText="Install Gutters"
          />
          <TransparentCard
            imageSrc="https://media.istockphoto.com/id/1249215103/photo/cleaning-terrace-with-a-power-washer-high-water-pressure-cleaner-on-wooden-terrace-surface.jpg?b=1&s=612x612&w=0&k=20&c=1uvc146rD_fI0pYOABhryWsZJGaLFrdwGbHzLv-htcE="
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
