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
              <span>$</span>250<span>/mo</span>
            </div>
            <div className="list">
              <p>interior design</p>
              <p>refurbishment</p>
              <p>material supply</p>
              <p>maintenance</p>
              <p>24/7 support</p>
            </div>
            <a href="#" className="btn">
              choose plan
            </a>
          </div>

          <div className="box">
            <i className="fas fa-building"></i>
            <h3>premium plan</h3>
            <div className="price">
              <span>$</span>650<span>/mo</span>
            </div>
            <div className="list">
              <p>interior design</p>
              <p>refurbishment</p>
              <p>material supply</p>
              <p>maintenance</p>
              <p>24/7 support</p>
            </div>
            <a href="#" className="btn">
              choose plan
            </a>
          </div>

          <div className="box">
            <i className="fas fa-city"></i>
            <h3>ultimate plan</h3>
            <div className="price">
              <span>$</span>1250<span>/mo</span>
            </div>
            <div className="list">
              <p>interior design</p>
              <p>refurbishment</p>
              <p>material supply</p>
              <p>maintenance</p>
              <p>24/7 support</p>
            </div>
            <a href="#" className="btn">
              choose plan
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
