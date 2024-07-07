import "./Location.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Location = () => {
  return (
    <div className="location-container">
      <div className="address">
        <h2> Baten Construction and Landscaping LLC</h2>
        <p>2611 Kirtland Ave.</p>
        <p>Forestville, MD 20747</p>
        <p>United States</p>
        <div className="contact-link">
          <p>
            <strong>Phone:</strong> 301-915-5370
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:">
              <u>info@lawnandlandscaping.us</u>
            </a>
          </p>
        </div>
      </div>
      <hr />

      <div className="footer-icons">
        <FacebookRoundedIcon sx={{ color: "#fff", fontSize: 42 }} />
        <XIcon sx={{ color: "#fff", fontSize: 37 }} />

        <InstagramIcon sx={{ color: "#fff", fontSize: 42 }} />
        <LinkedInIcon sx={{ color: "#fff", fontSize: 42 }} />
      </div>
    </div>
  );
};

export default Location;
