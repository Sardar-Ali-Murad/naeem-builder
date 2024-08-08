import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about_page">
      <div className="row">
        <div className="image">
          <img src="images/about-img.svg" alt="" />
        </div>
        <div className="content">
          <h3>why choose us?</h3>
          <p>
            Experience unmatched expertise, personalized service, and a
            commitment to excellence in every aspect of your property needs.
          </p>
          <Link to="/contact" className="btn">
            contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
