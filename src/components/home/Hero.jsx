import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <div className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <div className="slide">
                  <img
                    src="images/project-2.jpeg"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div className="home-section-wrap">
                    <div className="content home-section">
                      <h3>Naeem Marwan Builders</h3>
                      <p>
                        Comprehensive Construction & Renovation Services in
                        Birmingham & Manchester. From roof renovations to
                        detailed carpentry and professional painting, we
                        transform your spaces with precision and care. Serving
                        both residential and commercial projects, we ensure
                        quality and satisfaction at every step.
                      </p>
                      <a
                        href={`https://wa.me/447898769063`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        get started
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <img
                    src="images/project-1.jpeg"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div className="home-section-wrap">
                    <div className="content home-section">
                      <h3>Making Dreams Come to Life</h3>
                      <p>
                        At Naeem Marwan Builders, we take pride in turning your
                        property dreams into reality. From initial consultation
                        to final touches, our expert team is dedicated to
                        providing personalized craftsmanship. Whether it's a
                        full-scale renovation or a specific home improvement, we
                        ensure every detail is handled with care, transforming
                        your vision into a living space you love.
                      </p>
                      <a
                        href={`https://wa.me/447898769063`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="slide">
                  <img
                    src="images/project-4.jpeg"
                    style={{
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                  <div className="home-section-wrap">
                    <div className="content home-section">
                      <h3>From Concept to Creation</h3>
                      <p>
                        Our journey begins with your vision and ends with your
                        satisfaction. We guide you through every phase of the
                        project, from innovative design concepts to meticulous
                        execution. Our team specializes in creating unique,
                        functional spaces that meet your exact needs. With a
                        focus on quality and precision, we deliver results that
                        not only meet but exceed your expectations, making your
                        property a true reflection of your style.
                      </p>
                      <a
                        href={`https://wa.me/447898769063`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
