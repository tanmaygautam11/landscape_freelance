import "./Review.css";

const Review = () => {
  return (
    <div className="review">
      <div className="review-header">
        <div className="overlay"></div>
        <img
          src="https://images.pexels.com/photos/17998785/pexels-photo-17998785/free-photo-of-close-up-of-fern.png?auto=compress&cs=tinysrgb"
          alt="Plants"
          className="header-image"
        />
      </div>
      <div className="review-container">
        <h2 className="about-heading">Baten Construction & Landscaping</h2>
        <h1>Share your voice, write a review in Google</h1>
        <div className="review-section">
          <div className="review-content">
            <img
              src="https://images.pexels.com/photos/7350906/pexels-photo-7350906.jpeg?auto=compress&cs=tinysrgb"
              alt="review image"
              className="review-image"
            />
            <div className="review-text">
              <p>Your review is very important to us!</p>
              <p>
                We like to hear about your overall experience doing business
                with Baten Construction and Landscaping.
              </p>
              <p>You can write a review using the following devices:</p>
              <ul>
                <li>
                  Smart Phone and Tablets:
                  <a
                    href="https://goo.gl/maps/QLCbWnBtGky"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://goo.gl/maps/QLCbWnBtGky
                  </a>
                  <ul>
                    <li>Browse to the Section Rate and Review</li>
                    <li>
                      Scroll down until you see the "Write a review" section.
                      Select it to write a review
                    </li>
                    <li>Share it in your circle. You are done</li>
                  </ul>
                </li>
                <li>
                  Desktop and Laptops:
                  <a
                    href="http://bit.ly/2xoVUYI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    http://bit.ly/2xoVUYI
                  </a>
                  <ul>
                    <li>Follow the link</li>
                    <li>
                      In the lower right hand section of the link, write your
                      review
                    </li>
                    <li>Share it in your circle. You are done</li>
                  </ul>
                </li>
              </ul>
              <p>
                (Please note that to write a review in Google, you need to sign
                in your Google account, have a Google+ profile and for smart
                phones, you need Google Maps application installed.)
              </p>
              <p>
                Please help us serve you better. Send us your review or
                feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
