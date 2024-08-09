import React from "react";
import { Link } from "react-router-dom";

const Listing = () => {
  return (
    <section className="listings">
      <h1 className="listing_heading">all listings</h1>

      <div className="box-container">
        <div className="box">
          <div className="admin">
            <h3>E</h3>
            <div>
              <p>Emily Watson</p>
              <span>15-05-2023</span>
            </div>
          </div>
          <div className="thumb">
            <p className="total-images">
              <i className="far fa-image"></i>
              <span>4</span>
            </p>
            <p className="type">
              <span>house</span>
              <span>sale</span>
            </p>
            <form action="" method="post" className="save">
              <button
                type="submit"
                name="save"
                className="far fa-heart"
              ></button>
            </form>
            <img src="images/project-2.jpeg" alt="" />
          </div>
          <h3 className="name hidden">Spacious Apartment</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span> Kensington, London, England - SW7 4RY</span>
          </p>
          <div className="flex">
            <p>
              <i className="fas fa-bed"></i>
              <span>2</span>
            </p>
            <p>
              <i className="fas fa-bath"></i>
              <span>1</span>
            </p>
            <p>
              <i className="fas fa-maximize"></i>
              <span>850sqft</span>
            </p>
          </div>
          <Link to="/view-property" className="btn">
            view property
          </Link>
        </div>

        <div className="box">
          <div className="admin">
            <h3>O</h3>
            <div>
              <p>Oliver Smith</p>
              <span>22-07-2023</span>
            </div>
          </div>
          <div className="thumb">
            <p className="total-images">
              <i className="far fa-image"></i>
              <span>4</span>
            </p>
            <p className="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" className="save">
              <button
                type="submit"
                name="save"
                className="far fa-heart"
              ></button>
            </form>
            <img src="images/project-3.jpeg" alt="" />
          </div>
          <h3 className="name hidden">Modern Family Home</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Didsbury, Manchester, England - M20 6TJ</span>
          </p>
          <div className="flex">
            <p>
              <i className="fas fa-bed"></i>
              <span>4</span>
            </p>
            <p>
              <i className="fas fa-bath"></i>
              <span>3</span>
            </p>
            <p>
              <i className="fas fa-maximize"></i>
              <span>1200sqft</span>
            </p>
          </div>
          <Link to="/view-property" className="btn">
            view property
          </Link>
        </div>

        <div className="box">
          <div className="admin">
            <h3>A</h3>
            <div>
              <p> Amelia Johnson</p>
              <span> 03-08-2023</span>
            </div>
          </div>
          <div className="thumb">
            <p className="total-images">
              <i className="far fa-image"></i>
              <span>4</span>
            </p>
            <p className="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" className="save">
              <button
                type="submit"
                name="save"
                className="far fa-heart"
              ></button>
            </form>
            <img src="images/project-1.jpeg" alt="" />
          </div>
          <h3 className="name hidden">Contemporary Studio Flat</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Shoreditch, London, England - E1 6AN</span>
          </p>
          <div className="flex">
            <p>
              <i className="fas fa-bed"></i>
              <span>1</span>
            </p>
            <p>
              <i className="fas fa-bath"></i>
              <span>1</span>
            </p>
            <p>
              <i className="fas fa-maximize"></i>
              <span>500sqft</span>
            </p>
          </div>
          <Link to="/view-property" className="btn">
            view property
          </Link>
        </div>

        <div className="box">
          <div className="admin">
            <h3>H</h3>
            <div>
              <p>Harry Brown</p>
              <span>28-06-2023</span>
            </div>
          </div>
          <div className="thumb">
            <p className="total-images">
              <i className="far fa-image"></i>
              <span>4</span>
            </p>
            <p className="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" className="save">
              <button
                type="submit"
                name="save"
                className="far fa-heart"
              ></button>
            </form>
            <img src="images/project-4.jpeg" alt="" />
          </div>
          <h3 className="name hidden">Luxury Penthouse Apartment</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Chelsea, London, England - SW3 5UZ</span>
          </p>
          <div className="flex">
            <p>
              <i className="fas fa-bed"></i>
              <span>3</span>
            </p>
            <p>
              <i className="fas fa-bath"></i>
              <span>2</span>
            </p>
            <p>
              <i className="fas fa-maximize"></i>
              <span>1500sqft</span>
            </p>
          </div>
          <Link to="/view-property" className="btn">
            view property
          </Link>
        </div>

        <div className="box">
          <div className="admin">
            <h3>S</h3>
            <div>
              <p>Sophie Williams</p>
              <span>14-07-2023</span>
            </div>
          </div>
          <div className="thumb">
            <p className="total-images">
              <i className="far fa-image"></i>
              <span>4</span>
            </p>
            <p className="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" className="save">
              <button
                type="submit"
                name="save"
                className="far fa-heart"
              ></button>
            </form>
            <img src="images/project-7.jpeg" alt="" />
          </div>
          <h3 className="name hidden">Charming Cottage</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Notting Hill, London, England - W11 2PA</span>
          </p>
          <div className="flex">
            <p>
              <i className="fas fa-bed"></i>
              <span>3</span>
            </p>
            <p>
              <i className="fas fa-bath"></i>
              <span>2</span>
            </p>
            <p>
              <i className="fas fa-maximize"></i>
              <span>1,000sqft</span>
            </p>
          </div>
          <Link to="/view-property" className="btn">
            view property
          </Link>
        </div>

        <div className="box">
          <div className="admin">
            <h3>J</h3>
            <div>
              <p>James Davis</p>
              <span>01-08-2023</span>
            </div>
          </div>
          <div className="thumb">
            <p className="total-images">
              <i className="far fa-image"></i>
              <span>4</span>
            </p>
            <p className="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" className="save">
              <button
                type="submit"
                name="save"
                className="far fa-heart"
              ></button>
            </form>
            <img src="images/project-6.jpeg" alt="" />
          </div>
          <h3 className="name hidden">Elegant Victorian Townhouse</h3>
          <p className="location">
            <i className="fas fa-map-marker-alt"></i>
            <span>Notting Hill, London, England - W11 2PA</span>
          </p>
          <div className="flex">
            <p>
              <i className="fas fa-bed"></i>
              <span>4</span>
            </p>
            <p>
              <i className="fas fa-bath"></i>
              <span>3</span>
            </p>
            <p>
              <i className="fas fa-maximize"></i>
              <span>1400sqft</span>
            </p>
          </div>
          <Link to="/view-property" className="btn">
            view property
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Listing;
