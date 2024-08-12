import React from "react";

const About = () => {
  return (
    <section className="about_page">
      <div className="row">
        <div className="image">
          <img src="images/about-img.svg" alt="About Us" />
        </div>
        <div className="content">
          <h3>Why Choose Us?</h3>
          <p>
            Choose us for our unmatched expertise, personalized service, and
            commitment to excellence in every aspect of your property needs. We
            take pride in delivering high-quality results, ensuring that each
            project is completed with precision and care. Our dedicated team
            works closely with you from start to finish, understanding your
            vision and transforming it into reality. Trust us to exceed your
            expectations and provide the best solutions for all your renovation
            and construction needs.
          </p>
          <a
            href={`https://wa.me/447898769063`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
