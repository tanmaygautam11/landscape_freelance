import { useNavigate } from "react-router-dom";
import "./Tips.css";
import Tip from "./Tip";
import { tipsData } from "./tipsData";

const Tips = () => {
  const navigate = useNavigate();

  const handleReadMore = (tip) => {
    navigate(`/tip/${tip.id}`, { state: tip });
  };
  return (
    <div className="tips">
      <div className="tips-header">
        <img
          src="https://images.pexels.com/photos/17998785/pexels-photo-17998785/free-photo-of-close-up-of-fern.png?auto=compress&cs=tinysrgb"
          alt="Plants"
          className="header-image"
        />
        <div className="overlay"></div>
      </div>
      <div className="tips-container">
        <h2 className="tips-company">Baten Construction & Landscaping</h2>
        <h1 className="tips-heading">Tips</h1>
        <div className="tips-list">
          {tipsData.map((tip) => (
            <Tip
              key={tip.id}
              id={tip.id}
              title={tip.title}
              content={tip.content}
              image={tip.image}
              onReadMore={handleReadMore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
