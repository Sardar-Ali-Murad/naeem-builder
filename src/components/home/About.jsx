import React from "react";
import Listing from "../listing/Services";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"> about us </h1>

      <div className="row">
        <div className="video">
          <video src="images/video.mp4" loop muted autoPlay></video>
        </div>
        <div className="content">
          <div>
            <h3>We will provide you the best work which you dreamt for!</h3>
            <p>
              Our dedicated team ensures top-quality results, transforming your
              real estate dreams into reality with unmatched professionalism and
              care.
            </p>
            <a href="#services" className="btn">
              read more
            </a>
          </div>
          <div className="services_page_home">
            <div className="box-container">
              <div className="box">
                <img src="images/icon-1.png" alt="" />
                <h3>buy house</h3>
                <p>
                  Discover your dream home with our expert guidance and vast
                  listings
                </p>
              </div>

              <div className="box">
                <img src="images/icon-2.png" alt="" />
                <h3>rent house</h3>
                <p>
                  Find the perfect rental property with ease and personalized
                  options.
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
                <p>
                  Explore premium flats and buildings designed for modern
                  living.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="box-container">
        <div className="box">
          <h3>4+</h3>
          <p>working since</p>
        </div>

        <div className="box">
          <h3>100+</h3>
          <p>successfull deals</p>
        </div>

        <div className="box">
          <h3>80+</h3>
          <p>satisfied customers</p>
        </div>

        <div className="box">
          <h3>6+</h3>
          <p>active agents</p>
        </div>
      </div>
    </section>
  );
};

export default About;
