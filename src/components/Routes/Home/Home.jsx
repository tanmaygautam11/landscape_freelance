import HeroSection from "./HeroSection/HeroSection";
import SocialMedia from "./SocialMedia/SocialMedia";
import VideoSection from "./VideoSection/VideoSection";
import AboutSection from "./AboutSection/AboutSection";
import ServicesMenu from "./ServicesMenu/ServicesMenu";
import WhyUs from "./whyus/WhyUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesMenu />
      <WhyUs />
      <SocialMedia />
      <VideoSection />
    </div>
  );
};

export default Home;
