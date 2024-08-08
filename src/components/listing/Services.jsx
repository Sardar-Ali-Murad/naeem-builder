import React from "react";

const Services = () => {
  return (
    <section className="services_page">
      <h1 className="listing_heading">our services</h1>

      <div className="box-container">
        <div className="box">
          <img src="images/icon-1.png" alt="" />
          <h3>buy house</h3>
          <p>
            Discover your dream home with our expert guidance and vast listings
          </p>
        </div>

        <div className="box">
          <img src="images/icon-2.png" alt="" />
          <h3>rent house</h3>
          <p>
            Find the perfect rental property with ease and personalized options
            for you.
          </p>
        </div>

        <div className="box">
          <img src="images/icon-3.png" alt="" />
          <h3>sell house</h3>
          <p>
            Maximize your property's value with our professional selling
            services.
          </p>
        </div>

        <div className="box">
          <img src="images/icon-4.png" alt="" />
          <h3>flats and buildings</h3>
          <p>Explore premium flats and buildings designed for modern living.</p>
        </div>

        <div className="box">
          <img src="images/icon-5.png" alt="" />
          <h3>shops and malls</h3>
          <p>
            Secure prime retail spaces in vibrant and bustling commercial
            locations.
          </p>
        </div>

        <div className="box">
          <img src="images/icon-6.png" alt="" />
          <h3>24/7 service</h3>
          <p>Experience round-the-clock support for all your property needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
