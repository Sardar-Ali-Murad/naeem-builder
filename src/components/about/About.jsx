import React from "react";

const About = () => {
  return (
    <section className="about_page">
      <div className="row">
        <div className="image">
          <img src="images/about-img.svg" alt="" />
        </div>
        <div className="content">
          <h3>why choose us?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
            dolorem provident voluptatum distinctio laborum veritatis vitae
            suscipit praesentium fugiat unde?
          </p>
          <a href="contact.html" className="btn">
            contact us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
