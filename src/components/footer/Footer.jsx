import "./Footer.css";
import facebook from "../../assets/socials/facebook.png";
import twitter from "../../assets/socials/twitter.png";
import instagram from "../../assets/socials/instagram.png";
import linkedin from "../../assets/socials/linkedin.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social-media">
        <h2>SOCIAL MEDIA</h2>
        <p>Follow us on Social Media</p>
        <div className="icons">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
