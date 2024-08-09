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
              <p>Initial Consultation & Site Visit</p>
              <p>Basic Design and Planning</p>
              <p>Material Sourcing Assistance</p>
              <p>Construction & Renovation Advisory</p>
              <p>Final Inspection</p>
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
              <p>Comprehensive Design & Planning</p>
              <p>Material Procurement & Delivery</p>
              <p>Full Construction Management</p>
              <p>Quality Assurance & Safety Checks</p>
              <p>Post-Construction Support</p>
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
              <p>Custom Design & Architectural Services</p>
              <p>High-End Material Sourcing</p>
              <p>Full Turnkey Construction Management</p>
              <p>Premium Quality Assurance & Control</p>
              <p>Extended Post-Construction Support</p>
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
