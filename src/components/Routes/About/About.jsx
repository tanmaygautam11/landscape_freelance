import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <div className="overlay"></div>
        <img
          src="https://images.pexels.com/photos/17998785/pexels-photo-17998785/free-photo-of-close-up-of-fern.png?auto=compress&cs=tinysrgb"
          alt="Plants"
          className="header-image"
        />
      </div>
      <div className="about-container">
        <h1>About</h1>
        <div className="company-section">
          <h2>COMPANY</h2>
          <img
            src="https://www.floresartscape.com/upload/large/large_630dc611e13355619a435f81_3c56f9d8336f6d42f519f1b7222a0aa30e906aabb82e811fdbf0d59882a9bf17_630dc61f.webp"
            alt="Plants"
            className="about-image"
          />
          <p>
            <strong>Flores Artscape</strong> was established in 2004 by husband
            and wife team Rumaldo and Miriam Flores after over 25 years of prior
            experience in landscaping and gardening. It started as part-time
            work and has developed into a full-time commitment to our customers.
            Our team is skilled in a variety of trades such as hardscape,
            softscape, planting, lighting, irrigation, flagstone, pavers, and
            much more.
          </p>
          <p>
            We take our business personally. We want each and every customer to
            fall in love with their landscape. It's important to us that our
            customer service is perfect and that each landscape reflects the
            unique individuals that hire us—you! Our goal is not “money in the
            bank,” but
            <strong>satisfied customers with projects of high quality</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
