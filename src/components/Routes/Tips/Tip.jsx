import PropTypes from "prop-types";
import "./Tip.css";

const Tip = ({ id, title, content, image, onReadMore }) => {
  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return content;
  };

  return (
    <div
      className="tip-card"
      onClick={() => onReadMore({ id, title, content, image })}
    >
      <img src={image} alt={title} className="tip-image" />
      <div className="tip-content">
        <h3 className="tip-title">{title}</h3>
        <p className="tip-text">{truncateContent(content, 30)}</p>
        <button className="read-more-button">Read More</button>
      </div>
    </div>
  );
};

Tip.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  onReadMore: PropTypes.func.isRequired,
};

export default Tip;
