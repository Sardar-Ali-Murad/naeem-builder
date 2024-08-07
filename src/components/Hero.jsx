import React from "react";

const Hero = () => {
  return (
    <section className="home" id="home">
      <div className="swiper home-slider">
        <div className="swiper-wrapper">
          <section
            className="swiper-slide slide"
            style={{ background: "url(images/home-slide-1.jpg) no-repeat" }}
          >
            <div className="content">
              <h3>we provide best service</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur beatae iusto pariatur laborum magnam eos!
              </p>
              <a href="#about" className="btn">
                get started
              </a>
            </div>
          </section>

          <section
            className="swiper-slide slide"
            style={{ background: "url(images/home-slide-2.jpg) no-repeat" }}
          >
            <div className="content">
              <h3>making dream come to life</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur beatae iusto pariatur laborum magnam eos!
              </p>
              <a href="#about" className="btn">
                get started
              </a>
            </div>
          </section>

          <section
            className="swiper-slide slide"
            style={{ background: "url(images/home-slide-3.jpg) no-repeat" }}
          >
            <div className="content">
              <h3>from concept to creation</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur beatae iusto pariatur laborum magnam eos!
              </p>
              <a href="#about" className="btn">
                get started
              </a>
            </div>
          </section>
        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default Hero;
