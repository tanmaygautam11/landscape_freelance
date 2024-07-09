import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <h2 className="about-heading">Baten Construction & Landscaping</h2>
        <h1 className="about-title">
          One of the Top-Rated Landscape Construction Companies
        </h1>
        <p className="about-description">
          Baten Construction & Landscaping creates landscape designs that will
          give your home instant curb appeal and value. We serve homes and
          offices. With an experienced team of artists, landscapers, and
          builders, we help bring your vision to fruition. Baten Construction &
          Landscaping provides the highest quality landscaping services because
          we take great pride in what we do and have done for over 10 years. As
          part of our commitment to each and every client, we go above and
          beyond by ensuring reliable, professional service every step of the
          way.
        </p>
        <h3 className="about-why-choose">Why choose us?</h3>
        <ul className="about-list">
          <li>We love to take pride in the work we do</li>
          <hr />
          <li>We have over 10 years of experience</li>
          <hr />
          <li>We have skilled workers with great work ethics</li>
          <hr />
          <li>
            We have great recommendations from our clients (check out
            testimonials)
          </li>
          <hr />
          <li>We communicate with our clients every step of the way</li>
        </ul>

        <p className="about-final">
          We only use top-quality materials and procedures to ensure your yard
          is properly designed and executed to stand the test of time and make
          the neighbors a little jealous, too. Furthermore, we believe your
          outdoor space should be used just as much as any part of the home.
          That’s why we take care of all landscaping and outdoor home design
          quickly and efficiently, so you can get outside and start living in
          it.
        </p>
      </div>

      <div className="about-images">
        <img
          src="https://images.pexels.com/photos/1590336/pexels-photo-1590336.jpeg?auto=compress&cs=tinysrgb"
          alt="Landscape design 1"
        />
        <img
          src="https://images.pexels.com/photos/6032280/pexels-photo-6032280.jpeg?auto=compress&cs=tinysrgb"
          alt="Landscape design 2"
        />
      </div>
    </div>
  );
};

export default AboutSection;
