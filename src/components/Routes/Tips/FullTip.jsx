import { useLocation } from "react-router-dom";
import "./FullTip.css";

const FullTip = () => {
  const location = useLocation();
  const { title, content, image } = location.state;

  return (
    <div className="full-tip-page">
      <div className="tips-header">
        <img
          src="https://images.pexels.com/photos/17998785/pexels-photo-17998785/free-photo-of-close-up-of-fern.png?auto=compress&cs=tinysrgb"
          alt="Plants"
          className="header-image"
        />
        <div className="overlay"></div>
      </div>
      <div className="full-tip-content">
        <h2 className="tips-company">Baten Construction & Landscaping</h2>

        <h1 className="full-tip-title">{title}</h1>
        <div className="full-tip-body">
          <img src={image} alt={title} className="full-tip-image" />
          <p className="full-tip-text">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default FullTip;
