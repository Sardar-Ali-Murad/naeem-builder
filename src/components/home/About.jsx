import React from "react";

const About = () => {
  return (
    <div className="home_about_wrap">
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
                Our dedicated team ensures top-quality results, transforming
                your real estate dreams into reality with unmatched
                professionalism and care.
              </p>
              <a
                href={`https://wa.me/447898769063`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                read more
              </a>
            </div>
            <div className="services_page_home">
              <div className="box-container">
                <div className="box">
                  <img
                    src="images/services/paint.png"
                    alt="Painting Services"
                  />
                  <h3>Painting Services</h3>
                  <p>
                    Transform your space with our professional painting
                    services. We offer high-quality finishes that bring new life
                    to your interiors and exteriors.
                  </p>
                </div>

                <div className="box">
                  <img src="images/services/roof.png" alt="Roof Renovation" />
                  <h3>Roof Renovation</h3>
                  <p>
                    Boost your roof's durability and appearance with our expert
                    renovation services. We ensure lasting protection and
                    aesthetic appeal.
                  </p>
                </div>

                <div className="box">
                  <img
                    src="images/services/carpentery.png"
                    alt="Carpentry Services"
                  />
                  <h3>Carpentry Services</h3>
                  <p>
                    Custom carpentry solutions tailored to your needs. From
                    framing to finishing, our skilled craftsmen deliver
                    exceptional results for your projects.
                  </p>
                </div>

                <div className="box">
                  <img src="images/services/garden.png" alt="Garden Cleaning" />
                  <h3>Garden Cleaning</h3>
                  <p>
                    Keep your garden pristine with our comprehensive cleaning
                    services. We handle everything from debris removal to
                    detailed landscaping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="box-container">
          <div className="box">
            <h3>7+</h3>
            <p>working since</p>
          </div>

          <div className="box">
            <h3>200+</h3>
            <p>successfull deals</p>
          </div>

          <div className="box">
            <h3>100+</h3>
            <p>satisfied customers</p>
          </div>

          <div className="box">
            <h3>6+</h3>
            <p>active agents</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
