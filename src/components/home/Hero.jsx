import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <div className="home" id="home">
        <div className="swiper home-slider">
          <div className="swiper-wrapper">
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <div className="slide slider-1">
                  <div className="content home-section">
                    <h3>Naeem Marwan Builders</h3>
                    <p>Construction & Renovation in Birmingham & Manchester</p>
                    <a href="#about" className="btn">
                      get started
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide slider-2">
                  <div className="content home-section">
                    <h3>making dream come to life</h3>
                    <p>
                      Bringing your property visions to reality with expert
                      craftsmanship and personalized service at every step!
                    </p>
                    <a href="#about" className="btn">
                      get started
                    </a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="swiper-slide slide slider-3">
                  <div className="content home-section">
                    <h3>from concept to creation</h3>
                    <p>
                      Guiding your property journey with innovative design and
                      meticulous attention to detail, from start to finish!
                    </p>
                    <a href="#about" className="btn">
                      get started
                    </a>
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
