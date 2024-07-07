import "./Location.css";

const Location = () => {
  return (
    <div className="location-container">
      <div className="address">
        <h2> Baten Construction and Landscaping LLC</h2>

        <p>2611 Kirtland Ave.</p>
        <p>Forestville, MD 20747</p>
        <p>United States</p>
        <br />
        <hr />
        <br />
        <div className="contact-link">
          <p>
            <strong>Phone:</strong> 301-915-5370
          </p>
          <p>
            <strong>Email: </strong>
            <a href="mailto:">
              <u>info@lawnandlandscaping.us</u>
            </a>
          </p>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1I0tlGKMhjPgztM1Tz4MrawGTHyI&ehbc=2E312F"
          width="100%"
          height="300"
          title="Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
