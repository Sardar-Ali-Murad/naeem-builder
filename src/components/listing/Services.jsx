import React from "react";

const Services = () => {
  return (
    <section className="services_page">
      <h1 className="listing_heading">our services</h1>

      <div className="box-container">
        <div className="box">
          <img src="images/services/paint.png" alt="Painting Services" />
          <h3>Painting Services</h3>
          <p>
            Revitalize your space with our expert painting services, delivering
            top-quality finishes for interiors and exteriors alike.
          </p>
        </div>

        <div className="box">
          <img src="images/services/roof.png" alt="Roof Renovation" />
          <h3>Roof Renovation</h3>
          <p>
            Strengthen and enhance your roof with our renovation services,
            ensuring lasting protection and a polished look.
          </p>
        </div>

        <div className="box">
          <img src="images/services/carpentery.png" alt="Carpentry Services" />
          <h3>Carpentry Services</h3>
          <p>
            Get tailored carpentry solutions, from framing to finishing, for
            outstanding results on all your projects.
          </p>
        </div>

        <div className="box">
          <img src="images/services/garden.png" alt="Garden Cleaning" />
          <h3>Garden Cleaning</h3>
          <p>
            Keep your garden in top shape with our cleaning services, covering
            everything from debris removal to detailed landscaping.
          </p>
        </div>

        <div className="box">
          <img src="images/services/tree.png" alt="Tree Cutting" />
          <h3>Tree Cutting</h3>
          <p>
            Ensure safe and efficient tree cutting with our expert services,
            maintaining the health and safety of your landscape.
          </p>
        </div>

        <div className="box">
          <img src="images/icon-6.png" alt="24/7 Service" />
          <h3>24/7 Service</h3>
          <p>
            Experience round-the-clock support for all your property and project
            needs, any time, any day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
