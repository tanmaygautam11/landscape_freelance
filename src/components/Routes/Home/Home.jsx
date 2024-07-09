import HeroSection from "./HeroSection/HeroSection";
import SocialMedia from "./SocialMedia/SocialMedia";
import VideoSection from "./VideoSection/VideoSection";
import AboutSection from "./AboutSection/AboutSection";
import ServicesMenu from "./ServicesMenu/ServicesMenu";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesMenu />
      <VideoSection />
      <SocialMedia />
    </div>
  );
};

export default Home;
