import "./SocialMedia.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SocialMedia = () => {
  return (
    <div className="social-media-footer">
      <div className="social-media">
        <h2>SOCIAL MEDIA</h2>
        <p>Follow us on Social Media</p>
        <div className="icons">
          <FacebookRoundedIcon sx={{ color: "#fff", fontSize: 42 }} />
          <InstagramIcon sx={{ color: "#fff", fontSize: 42 }} />
          <LinkedInIcon sx={{ color: "#fff", fontSize: 42 }} />
          <XIcon sx={{ color: "#fff", fontSize: 35 }} />
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;
