import React from "react";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <section className="pricing" id="pricing">
        <h1 className="heading">Our Pricing</h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-tools"></i>
            <h3>Basic Plan</h3>
            <div className="price">
              <span>£</span>300<span>/project</span>
            </div>
            <div className="list">
              <p>Basic Roof Carpentry</p>
              <p>Standard Painting Services</p>
              <p>Initial Tree Cutting</p>
              <p>Basic Roof Renovation</p>
              <p>House Renovation Consultation</p>
            </div>
            <a
              href={`https://wa.me/447898769063`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              choose plan
            </a>
          </div>

          <div className="box">
            <i className="fas fa-hammer"></i>
            <h3>Premium Plan</h3>
            <div className="price">
              <span>£</span>750<span>/project</span>
            </div>
            <div className="list">
              <p>Comprehensive Roof Carpentry</p>
              <p>Advanced Painting Services</p>
              <p>Complete Tree Cutting & Removal</p>
              <p>Extensive Roof Renovation</p>
              <p>Full House Renovation</p>
            </div>
            <a
              href={`https://wa.me/447898769063`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              choose plan
            </a>
          </div>

          <div className="box">
            <i className="fas fa-building"></i>
            <h3>Ultimate Plan</h3>
            <div className="price">
              <span>£</span>1500<span>/project</span>
            </div>
            <div className="list">
              <p>Custom Roof Carpentry & Design</p>
              <p>Premium Painting & Finishing</p>
              <p>Specialized Tree Landscaping & Cutting</p>
              <p>Complete Roof Renovation & Restoration</p>
              <p>Luxury House Renovation</p>
            </div>
            <a
              href={`https://wa.me/447898769063`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              choose plan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
