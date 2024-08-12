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
        <h1 className="heading">Our Projects</h1>

        <div className="box-container" ref={galleryRef}>
          <a href="images/home-projects/painting.jpg" className="box">
            <div className="image">
              <img
                src="images/home-projects/painting.jpg"
                alt="Painting Project"
              />
            </div>
            <div className="content">
              <div className="info">
                <h3>Painting Job</h3>
                <p>Bright interiors</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/home-projects/roof-renovation.jpg" className="box">
            <div className="image">
              <img
                src="images/home-projects/roof-renovation.jpg"
                alt="Roof Renovation"
              />
            </div>
            <div className="content">
              <div className="info">
                <h3>Roof Renovation</h3>
                <p>Quality repair</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/home-projects/carpentry.jpg" className="box">
            <div className="image">
              <img
                src="images/home-projects/carpentry.jpg"
                alt="Carpentry Work"
              />
            </div>
            <div className="content">
              <div className="info">
                <h3>Carpentry Work</h3>
                <p>Wooden elegance</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/home-projects/garden-cleaning.webp" className="box">
            <div className="image">
              <img
                src="images/home-projects/garden-cleaning.webp"
                alt="Garden Cleaning"
              />
            </div>
            <div className="content">
              <div className="info">
                <h3>Garden Cleaning</h3>
                <p>Neat outdoors</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/home-projects/tree-cutting.jpg" className="box">
            <div className="image">
              <img
                src="images/home-projects/tree-cutting.jpg"
                alt="Tree Cutting"
              />
            </div>
            <div className="content">
              <div className="info">
                <h3>Tree Cutting</h3>
                <p>Safe removal</p>
              </div>
              <i className="fas fa-plus"></i>
            </div>
          </a>

          <a href="images/project-6.jpeg" className="box">
            <div className="image">
              <img src="images/project-6.jpeg" alt="Landscape Work" />
            </div>
            <div className="content">
              <div className="info">
                <h3>Landscape Work</h3>
                <p>Beautiful exteriors</p>
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
