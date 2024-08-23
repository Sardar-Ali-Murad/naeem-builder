import React from "react";

const SideBar = ({ showSideBar, setShowSidebar }) => {
  return (
    <div className={`contact-info ${showSideBar && "active"}`}>
      <div
        id="close-contact-info"
        className="fas fa-times"
        onClick={() => setShowSidebar(false)}
      ></div>

      <div className="info">
        <i className="fas fa-phone"></i>
        <h3>phone number</h3>
        <p>+44 7898 769063</p>
      </div>

      <div className="info">
        <i className="fas fa-envelope"></i>
        <h3>email address</h3>
        <p>naeemknn75@gmail.com</p>
      </div>

      <div className="info">
        <i className="fas fa-map-marker-alt"></i>
        <h3>office address</h3>
        <p>Flat, 6 Walford Road, Birmingham, B11 INR</p>
      </div>

      <div className="share">
        <a
          className="fab fa-facebook-f"
          href={`https://web.facebook.com/groups/511472004583073`}
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <a
          className="fab fa-youtube"
          href={`https://www.youtube.com/@user-gd7cq7mm5k`}
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
};

export default SideBar;
