import HeroSection from "./HeroSection/HeroSection";
import SocialMedia from "./SocialMedia/SocialMedia";
import VideoSection from "./VideoSection/VideoSection";
import AboutSection from "./AboutSection/AboutSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <SocialMedia />
    </div>
  );
};

export default Home;
