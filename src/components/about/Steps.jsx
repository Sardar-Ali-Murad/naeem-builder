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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            placeat.
          </p>
        </div>

        <div className="box">
          <img src="images/step-2.png" alt="" />
          <h3>contact agents</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            placeat.
          </p>
        </div>

        <div className="box">
          <img src="images/step-3.png" alt="" />
          <h3>enjoy property</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
            placeat.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
