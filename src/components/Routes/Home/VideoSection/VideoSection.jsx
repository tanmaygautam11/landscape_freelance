import "./VideoSection.css";

const VideoSection = () => {
  return (
    <div className="video-section">
      <h2 className="video-title">PRESS</h2>
      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KtIyHq0dNXM"
          title="Lawn and Landscaping Services"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="media-logos">
        {/* Add the logos here */}
        <img src="logo1.png" alt="Logo 1" />
        <img src="logo2.png" alt="Logo 2" />
        {/* Add more logos as needed */}
      </div>
    </div>
  );
};

export default VideoSection;
