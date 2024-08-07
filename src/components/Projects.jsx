import React from "react";

const Projects = () => {
  return (
    <div className="projects-container">
      <section className="projects" id="projects">
        <h1 className="heading"> our projects </h1>

        <div className="box-container">
          <a href="images/project-1.jpg" className="box">
            <div className="image">
              <img src="images/project-1.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Dream Home</h3>
                <p>construction, design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-2.jpg" className="box">
            <div className="image">
              <img src="images/project-2.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Luxury Apartments</h3>
                <p>modern living, premium amenities</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-3.jpg" className="box">
            <div className="image">
              <img src="images/project-3.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Office Spaces</h3>
                <p>functional design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-4.jpg" className="box">
            <div className="image">
              <img src="images/project-4.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Retail Stores</h3>
                <p>attractive layouts</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-5.jpg" className="box">
            <div className="image">
              <img src="images/project-5.jpg" alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Custom Homes</h3>
                <p>personalized design</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-6.jpg" className="box">
            <div className="image">
              <img src="images/project-6.jpg" alt="" />
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
