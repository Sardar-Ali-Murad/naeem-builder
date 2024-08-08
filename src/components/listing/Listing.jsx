import React from "react";
import { Link } from "react-router-dom";

const Listing = () => {
  return (
    <section class="listings">
      <h1 class="listing_heading">all listings</h1>

      <div class="box-container">
        <div class="box">
          <div class="admin">
            <h3>E</h3>
            <div>
              <p>Emily Watson</p>
              <span>15-05-2023</span>
            </div>
          </div>
          <div class="thumb">
            <p class="total-images">
              <i class="far fa-image"></i>
              <span>4</span>
            </p>
            <p class="type">
              <span>house</span>
              <span>sale</span>
            </p>
            <form action="" method="post" class="save">
              <button type="submit" name="save" class="far fa-heart"></button>
            </form>
            <img src="images/project-2.jpeg" alt="" />
          </div>
          <h3 class="name hidden">Spacious Apartment</h3>
          <p class="location">
            <i class="fas fa-map-marker-alt"></i>
            <span> Kensington, London, England - SW7 4RY</span>
          </p>
          <div class="flex">
            <p>
              <i class="fas fa-bed"></i>
              <span>2</span>
            </p>
            <p>
              <i class="fas fa-bath"></i>
              <span>1</span>
            </p>
            <p>
              <i class="fas fa-maximize"></i>
              <span>850sqft</span>
            </p>
          </div>
          <Link to="/view-property" class="btn">
            view property
          </Link>
        </div>

        <div class="box">
          <div class="admin">
            <h3>O</h3>
            <div>
              <p>Oliver Smith</p>
              <span>22-07-2023</span>
            </div>
          </div>
          <div class="thumb">
            <p class="total-images">
              <i class="far fa-image"></i>
              <span>4</span>
            </p>
            <p class="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" class="save">
              <button type="submit" name="save" class="far fa-heart"></button>
            </form>
            <img src="images/project-3.jpeg" alt="" />
          </div>
          <h3 class="name hidden">Modern Family Home</h3>
          <p class="location">
            <i class="fas fa-map-marker-alt"></i>
            <span>Didsbury, Manchester, England - M20 6TJ</span>
          </p>
          <div class="flex">
            <p>
              <i class="fas fa-bed"></i>
              <span>4</span>
            </p>
            <p>
              <i class="fas fa-bath"></i>
              <span>3</span>
            </p>
            <p>
              <i class="fas fa-maximize"></i>
              <span>1200sqft</span>
            </p>
          </div>
          <Link to="/view-property" class="btn">
            view property
          </Link>
        </div>

        <div class="box">
          <div class="admin">
            <h3>A</h3>
            <div>
              <p> Amelia Johnson</p>
              <span> 03-08-2023</span>
            </div>
          </div>
          <div class="thumb">
            <p class="total-images">
              <i class="far fa-image"></i>
              <span>4</span>
            </p>
            <p class="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" class="save">
              <button type="submit" name="save" class="far fa-heart"></button>
            </form>
            <img src="images/project-1.jpeg" alt="" />
          </div>
          <h3 class="name hidden">Contemporary Studio Flat</h3>
          <p class="location">
            <i class="fas fa-map-marker-alt"></i>
            <span>Shoreditch, London, England - E1 6AN</span>
          </p>
          <div class="flex">
            <p>
              <i class="fas fa-bed"></i>
              <span>1</span>
            </p>
            <p>
              <i class="fas fa-bath"></i>
              <span>1</span>
            </p>
            <p>
              <i class="fas fa-maximize"></i>
              <span>500sqft</span>
            </p>
          </div>
          <Link to="/view-property" class="btn">
            view property
          </Link>
        </div>

        <div class="box">
          <div class="admin">
            <h3>H</h3>
            <div>
              <p>Harry Brown</p>
              <span>28-06-2023</span>
            </div>
          </div>
          <div class="thumb">
            <p class="total-images">
              <i class="far fa-image"></i>
              <span>4</span>
            </p>
            <p class="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" class="save">
              <button type="submit" name="save" class="far fa-heart"></button>
            </form>
            <img src="images/house-img-4.webp" alt="" />
          </div>
          <h3 class="name hidden">Luxury Penthouse Apartment</h3>
          <p class="location">
            <i class="fas fa-map-marker-alt"></i>
            <span>Chelsea, London, England - SW3 5UZ</span>
          </p>
          <div class="flex">
            <p>
              <i class="fas fa-bed"></i>
              <span>3</span>
            </p>
            <p>
              <i class="fas fa-bath"></i>
              <span>2</span>
            </p>
            <p>
              <i class="fas fa-maximize"></i>
              <span>1500sqft</span>
            </p>
          </div>
          <Link to="/view-property" class="btn">
            view property
          </Link>
        </div>

        <div class="box">
          <div class="admin">
            <h3>S</h3>
            <div>
              <p>Sophie Williams</p>
              <span>14-07-2023</span>
            </div>
          </div>
          <div class="thumb">
            <p class="total-images">
              <i class="far fa-image"></i>
              <span>4</span>
            </p>
            <p class="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" class="save">
              <button type="submit" name="save" class="far fa-heart"></button>
            </form>
            <img src="images/house-img-5.webp" alt="" />
          </div>
          <h3 class="name hidden">Charming Cottage</h3>
          <p class="location">
            <i class="fas fa-map-marker-alt"></i>
            <span>Cotswolds, Gloucestershire, England - GL54 1AL</span>
          </p>
          <div class="flex">
            <p>
              <i class="fas fa-bed"></i>
              <span>3</span>
            </p>
            <p>
              <i class="fas fa-bath"></i>
              <span>2</span>
            </p>
            <p>
              <i class="fas fa-maximize"></i>
              <span>1,000sqft</span>
            </p>
          </div>
          <Link to="/view-property" class="btn">
            view property
          </Link>
        </div>

        <div class="box">
          <div class="admin">
            <h3>J</h3>
            <div>
              <p>James Davis</p>
              <span>01-08-2023</span>
            </div>
          </div>
          <div class="thumb">
            <p class="total-images">
              <i class="far fa-image"></i>
              <span>4</span>
            </p>
            <p class="type">
              <span>flat</span>
              <span>sale</span>
            </p>
            <form action="" method="post" class="save">
              <button type="submit" name="save" class="far fa-heart"></button>
            </form>
            <img src="images/house-img-6.webp" alt="" />
          </div>
          <h3 class="name hidden">Elegant Victorian Townhouse</h3>
          <p class="location">
            <i class="fas fa-map-marker-alt"></i>
            <span>Notting Hill, London, England - W11 2PA</span>
          </p>
          <div class="flex">
            <p>
              <i class="fas fa-bed"></i>
              <span>4</span>
            </p>
            <p>
              <i class="fas fa-bath"></i>
              <span>3</span>
            </p>
            <p>
              <i class="fas fa-maximize"></i>
              <span>1400sqft</span>
            </p>
          </div>
          <Link to="/view-property" class="btn">
            view property
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Listing;
