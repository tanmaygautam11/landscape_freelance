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
            <li className="nav-link dropdown">
              <NavLink to="/services" activeClassName="active dropdown-link">
                Our Services
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <a
                    href="https://booknow.lawnandlandscaping.us/23-mowing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Lawn Mowing
                  </a>
                </li>
                <li>
                  <a
                    href="https://booknow.lawnandlandscaping.us/22-landscaping"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Landscaping
                  </a>
                </li>
                <li>
                  <a
                    href="https://booknow.lawnandlandscaping.us/24-tree-removal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Tree Removal
                  </a>
                </li>
                <li>
                  <a
                    href="https://booknow.lawnandlandscaping.us/33-powerwash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Power Washing
                  </a>
                </li>
                <li>
                  <a
                    href="https://booknow.lawnandlandscaping.us/32-roofing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Roofing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-link">
              <NavLink to="/reviews" activeClassName="active">
                Reviews
              </NavLink>
            </li>

            <li className="nav-link">
              <NavLink to="/tips" activeClassName="active">
                Tips
              </NavLink>
            </li>
            <li className="contact-button">
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
