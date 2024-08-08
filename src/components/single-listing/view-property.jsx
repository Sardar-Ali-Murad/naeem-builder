import React from "react";

const viewProperty = () => {
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
        <h3 className="name">modern flats and appartments</h3>
        <p className="location">
          <i className="fas fa-map-marker-alt"></i>
          <span>andheri, mumbai, india - 400104</span>
        </p>
        <div className="info">
          <p>
            <i className="fas fa-tag"></i>
            <span>15 lac</span>
          </p>
          <p>
            <i className="fas fa-user"></i>
            <span>john deo (owner)</span>
          </p>
          <p>
            <i className="fas fa-phone"></i>
            <a href="tel:1234567890">1234567890</a>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          cupiditate aliquid ipsum recusandae maxime nisi, velit eaque, libero,
          exercitationem culpa accusamus. Neque dolor quaerat modi saepe facere
          dignissimos temporibus molestias.
        </p>
        <form action="" method="post">
          <input
            type="submit"
            value="save property"
            name="save"
            className="inline-btn"
          />
        </form>
      </div>
    </section>
  );
};

export default viewProperty;
