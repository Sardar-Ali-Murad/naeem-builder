import React from "react";
import "lightgallery/css/lightgallery.css";
import lightGallery from "lightgallery";

const Projects = () => {
  const galleryRef = React.useRef(null);

  React.useEffect(() => {
    if (galleryRef.current) {
      lightGallery(galleryRef.current);
    }
  }, []);

  return (
    <div className="projects-container">
      <section className="projects" id="projects">
        <h1 className="heading"> our projects </h1>

        <div className="box-container" ref={galleryRef}>
          <a href="images/project-1.jpeg" className="box">
            <div className="image">
              <img src="images/project-1.jpeg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Dream Home</h3>
                <p>construction, design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-2.jpeg" className="box">
            <div className="image">
              <img src="images/project-2.jpeg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Luxury Apartments</h3>
                <p>modern living, premium amenities</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-3.jpeg" className="box">
            <div className="image">
              <img src="images/project-3.jpeg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Office Spaces</h3>
                <p>functional design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-4.jpeg" className="box">
            <div className="image">
              <img src="images/project-4.jpeg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Retail Stores</h3>
                <p>attractive layouts</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-5.jpeg" className="box">
            <div className="image">
              <img src="images/project-5.jpeg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Custom Homes</h3>
                <p>personalized design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-6.jpeg" className="box">
            <div className="image">
              <img src="images/project-6.jpeg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Renovation Projects </h3>
                <p>modern upgrades</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
