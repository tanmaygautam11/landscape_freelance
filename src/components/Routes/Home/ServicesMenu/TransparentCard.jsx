import PropTypes from "prop-types";
import "./TransparentCard.css";

const TransparentCard = ({ imageSrc, price, description, buttonText }) => {
  return (
    <div className="transparent-card">
      <div className="image-container">
        <img src={imageSrc} alt={price} className="card-image" />
      </div>
      <p className="card-description">{description}</p>
      <h4 className="card-price">{price}</h4>
      <button className="card-button">{buttonText}</button>
    </div>
  );
};

TransparentCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default TransparentCard;
