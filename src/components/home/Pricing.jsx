import React from "react";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <section className="pricing" id="pricing">
        <h1 className="heading"> our pricing </h1>

        <div className="box-container">
          <div className="box">
            <i className="fas fa-home"></i>
            <h3>basic plan</h3>
            <div className="price">
              <span>£</span>250<span>/mo</span>
            </div>
            <div className="list">
              <p>property listing</p>
              <p>Basic Marketing</p>
              <p>Rent Collection</p>
              <p>Tenant Screening</p>
              <p>Maintenance Requests</p>
            </div>
            <a className="btn">choose plan</a>
          </div>

          <div className="box">
            <i className="fas fa-building"></i>
            <h3>premium plan</h3>
            <div className="price">
              <span>£</span>650<span>/mo</span>
            </div>
            <div className="list">
              <p>Enhanced Property Listing</p>
              <p>Advanced Marketing Strategies</p>
              <p>Premium Rent Collection</p>
              <p>Comprehensive Tenant Screening</p>
              <p>Regular Property Inspections</p>
            </div>
            <a className="btn">choose plan</a>
          </div>

          <div className="box">
            <i className="fas fa-city"></i>
            <h3>ultimate plan</h3>
            <div className="price">
              <span>£</span>1250<span>/mo</span>
            </div>
            <div className="list">
              <p>Featured Property Listings</p>
              <p>High-Exposure Marketing Campaigns</p>
              <p>Full-Service Rent Management</p>
              <p>In-Depth Tenant Screening</p>
              <p>24/7 Property Management and Support</p>
            </div>
            <a className="btn">choose plan</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
