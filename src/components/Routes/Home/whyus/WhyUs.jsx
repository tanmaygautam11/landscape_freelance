import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div className="whyus-container">
      <div className="whyus-content">
        <h1>We Love To Take Pride In The Work We Do</h1>
        <h2>Efficient Landscaping So You Can Get to Living</h2>
        <div className="whyus-cards">
          <div className="whyus-card">
            <div className="card-icon"></div>
            <p>
              WE PROVIDE <strong>CUSTOMIZED SOLUTIONS</strong> TO YOUR LANDSCAPE
              NEEDS
            </p>
          </div>
          <div className="whyus-card">
            <div className="card-icon"></div>
            <p>
              WE COMMUNICATE WITH OUR CLIENTS
              <strong> EVERY STEP OF THE WAY</strong>
            </p>
          </div>
        </div>
        <button className="whyus-button">Read More About Us</button>
      </div>
    </div>
  );
};

export default WhyUs;
