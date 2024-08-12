import React from "react";

const Steps = () => {
  return (
    <section className="steps">
      <h1 className="about_heading">3 Simple Steps</h1>

      <div className="box-container">
        <div className="box">
          <img src="images/step-1.png" alt="Consultation" />
          <h3>Consultation</h3>
          <p>
            Schedule a consultation to discuss your project needs. We’ll assess
            your requirements and provide expert guidance to ensure success.
          </p>
        </div>

        <div className="box">
          <img src="images/step-2.png" alt="Planning & Design" />
          <h3>Planning & Design</h3>
          <p>
            Work with our team to create a tailored plan and design for your
            project. Every detail is crafted to meet your vision and needs.
          </p>
        </div>

        <div className="box">
          <img src="images/step-3.png" alt="Execution & Delivery" />
          <h3>Execution & Delivery</h3>
          <p>
            Our skilled professionals bring your vision to life with precision,
            delivering a high-quality result on time and within budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
