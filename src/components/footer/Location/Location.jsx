import "./Location.css"; // Make sure this import is at the top
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Location = () => {
  return (
    <div className="location-container">
      <div className="footer-div">
        <div className="address">
          <h2> Baten Construction and Landscaping LLC</h2>
          <p>407 Main St</p>
          <p>Laurel, MD 20707</p>
          <p>United States</p>
          <div className="contact-link">
            <p>
              <strong>Phone:</strong> 301-915-5370
            </p>
            <p>
              <strong>Email: </strong>
              <a href="mailto:info@lawnandlandscaping.us">
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
      <div className="rights-reserved">
        <hr />
        <p>
          &copy; {new Date().getFullYear()} Baten Construction and Landscaping
          LLC. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Location;
