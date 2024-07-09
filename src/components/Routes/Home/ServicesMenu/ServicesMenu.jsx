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
            imageSrc="data:image/jpeg;base64,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"
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
