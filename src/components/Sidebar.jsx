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
        <p>+123-456-7890</p>
        <p>+111-222-3333</p>
      </div>

      <div className="info">
        <i className="fas fa-envelope"></i>
        <h3>email address</h3>
        <p>shaikhanas@gmail.com</p>
        <p>anasbhai@gmail.com</p>
      </div>

      <div className="info">
        <i className="fas fa-map-marker-alt"></i>
        <h3>office address</h3>
        <p>mumbai, india - 400104</p>
      </div>

      <div className="share">
        <a href="#" className="fab fa-facebook-f"></a>
        <a href="#" className="fab fa-twitter"></a>
        <a href="#" className="fab fa-instagram"></a>
        <a href="#" className="fab fa-linkedin"></a>
      </div>
    </div>
  );
};

export default SideBar;
