import React from "react";
import data from "../listing/data";

const viewProperty = () => {
  let [currentItem, setCurrentItem] = React.useState({});
  return (
    <section className="view-property">
      <div className="details">
        <div className="thumb">
          <div className="big-image">
            <img src="images/house-img-1.webp" alt="" />
          </div>
          <div className="small-images">
            <img src="images/house-img-1.webp" alt="" />
            <img src="images/hall-img-1.webp" alt="" />
            <img src="images/kitchen-img-1.webp" alt="" />
            <img src="images/bathroom-img-1.webp" alt="" />
          </div>
        </div>
        <h3 className="name hidden">Contemporary Studio Flat</h3>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>Didsbury, Manchester, England - M20 6TJ</span>
        </p>
        <div className="info">
          <p>
            <i className="fas fa-tag"></i>
            <span>£50k</span>
          </p>
          <p>
            <i className="fas fa-user"></i>
            <span>Oliver Smith (owner)</span>
          </p>
          <p>
            <i className="fas fa-phone"></i>
            <a href="tel:1234567890">+44 7898 769063</a>
          </p>
          <p>
            <i className="fas fa-building"></i>
            <span>flat</span>
          </p>
          <p>
            <i className="fas fa-house"></i>
            <span>sale</span>
          </p>
          <p>
            <i className="fas fa-calendar"></i>
            <span>10-11-2022</span>
          </p>
        </div>
        <h3 className="title">details</h3>
        <div className="flex">
          <div className="box">
            <p>
              <i>rooms :</i>
              <span>2 BHK</span>
            </p>
            <p>
              <i>deposit amount :</i>
              <span>0</span>
            </p>
            <p>
              <i>status :</i>
              <span>ready to move</span>
            </p>
            <p>
              <i>bedroom :</i>
              <span>3</span>
            </p>
            <p>
              <i>bathroom :</i>
              <span>2</span>
            </p>
            <p>
              <i>balcony :</i>
              <span>1</span>
            </p>
          </div>
          <div className="box">
            <p>
              <i>carpet area :</i>
              <span>750sqft</span>
            </p>
            <p>
              <i>age :</i>
              <span>3 years</span>
            </p>
            <p>
              <i>room floor :</i>
              <span>3</span>
            </p>
            <p>
              <i>total floors :</i>
              <span>22</span>
            </p>
            <p>
              <i>furnished :</i>
              <span>semi-furnished</span>
            </p>
            <p>
              <i>loan :</i>
              <span>available</span>
            </p>
          </div>
        </div>
        <h3 className="title">amenities</h3>
        <div className="flex">
          <div className="box">
            <p>
              <i className="fas fa-check"></i>
              <span>lifts</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>security guards</span>
            </p>
            <p>
              <i className="fas fa-times"></i>
              <span>play ground</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>gardens</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>water supply</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>power backup</span>
            </p>
          </div>
          <div className="box">
            <p>
              <i className="fas fa-check"></i>
              <span>parking area</span>
            </p>
            <p>
              <i className="fas fa-times"></i>
              <span>gym</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>shopping mall</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>hospital</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>schools</span>
            </p>
            <p>
              <i className="fas fa-check"></i>
              <span>market area</span>
            </p>
          </div>
        </div>
        <h3 className="title">description</h3>
        <p className="description">
          Experience the charm of classic elegance in this Victorian townhouse,
          featuring spacious rooms, intricate architectural details, and modern
          amenities. Enjoy a blend of historic charm and contemporary
          convenience, situated in a desirable neighborhood with easy access to
          local amenities and transport links.
        </p>
      </div>
    </section>
  );
};

export default viewProperty;
