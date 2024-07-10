import HeroSection from "./HeroSection/HeroSection";
import SocialMedia from "./SocialMedia/SocialMedia";
import VideoSection from "./VideoSection/VideoSection";
import AboutSection from "./AboutSection/AboutSection";
import ServicesMenu from "./ServicesMenu/ServicesMenu";
import WhyUs from "./whyus/WhyUs";
import Testimonial from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesMenu />
      <WhyUs />
      <SocialMedia />
      <Testimonial />
      <VideoSection />
    </div>
  );
};

export default Home;
