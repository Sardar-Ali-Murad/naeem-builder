import React from "react";

const Steps = () => {
  return (
    <section className="steps">
      <h1 className="about_heading">3 simple steps</h1>

      <div className="box-container">
        <div className="box">
          <img src="images/step-1.png" alt="" />
          <h3>search property</h3>
          <p>
            Find your dream home with our easy-to-use search tools and filters.
          </p>
        </div>

        <div className="box">
          <img src="images/step-2.png" alt="" />
          <h3>contact agents</h3>
          <p>
            Connect with experienced agents ready to assist you every step of
            the way.
          </p>
        </div>

        <div className="box">
          <img src="images/step-3.png" alt="" />
          <h3>enjoy property</h3>
          <p>
            Move into your new space and start living the life you've always
            wanted.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
