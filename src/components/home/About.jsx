import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading"> about us </h1>

      <div className="row">
        <div className="video">
          <video src="images/about-vid.mp4" loop muted autoPlay></video>
        </div>

        <div className="content">
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
      </div>

      <div className="box-container">
        <div className="box">
          <h3>4+</h3>
          <p>working since</p>
        </div>

        <div className="box">
          <h3>210+</h3>
          <p>successfull deals</p>
        </div>

        <div className="box">
          <h3>200+</h3>
          <p>satisfied customers</p>
        </div>

        <div className="box">
          <h3>10+</h3>
          <p>active agents</p>
        </div>
      </div>
    </section>
  );
};

export default About;
