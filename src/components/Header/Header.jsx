import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const scrollAnimation = () => {
    document.addEventListener("scroll", () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  };
  scrollAnimation();
  return (
    <header className="header">
      <div className="nav-holder">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img
                src={logo}
                alt="Baten"
              />
            </Link>
          </div>
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-link">
              <Link to="/about">About</Link>
            </li>
            <li className="nav-link">
              <Link to="/services">Services</Link>
            </li>

            <li className="nav-link">
              <Link to="/order">Order Online</Link>
            </li>

            <li className="nav-link">
              <Link to="/reviews">Reviews</Link>
            </li>
            <li className="nav-link">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="contact-button">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
