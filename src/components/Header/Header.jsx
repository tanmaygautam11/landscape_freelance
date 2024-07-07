import { NavLink } from "react-router-dom";
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
            <NavLink to="/">
              <img src={logo} alt="Baten" />
            </NavLink>
          </div>
          <ul className="nav-links">
            <li className="nav-link">
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/services" activeClassName="active">
                Services
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/order" activeClassName="active">
                Order Online
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/reviews" activeClassName="active">
                Reviews
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/gallery" activeClassName="active">
                Gallery
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/tips" activeClassName="active">
                Tips
              </NavLink>
            </li>
            <li className="nav-link">
              <NavLink to="/joinUs" activeClassName="active">
                Join Us
              </NavLink>
            </li>
            <li className="contact-button">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
