import React from "react";
import { Link } from "react-router-dom";
import cardsData from "./data";

const Listing = () => {
  return (
    <section className="listings">
      <h1 className="listing_heading">all listings</h1>
      <div className="box-container">
        {cardsData?.map((card) => {
          return (
            <div className="box" key={card?.id}>
              <div className="admin">
                <h3>{card.admin.initial}</h3>
                <div>
                  <p>{card.admin.name}</p>
                  <span>{card.admin.date}</span>
                </div>
              </div>
              <div className="thumb">
                <p className="total-images">
                  <i className="far fa-image"></i>
                  <span>4</span>
                </p>
                <p className="type">
                  {card.type.map((t, index) => (
                    <span key={index}>{t}</span>
                  ))}
                </p>
                <form action="" method="post" className="save">
                  <button
                    type="submit"
                    name="save"
                    className="far fa-heart"
                  ></button>
                </form>
                <img src={card.imageSrc} alt="" />
              </div>
              <h3 className="name hidden">{card.name}</h3>
              <p className="location">
                <i className="fas fa-map-marker-alt"></i>
                <span>{card.location}</span>
              </p>
              <div className="flex">
                <p>
                  <span>{card.details.rooms}</span>
                </p>
                <p style={{textAlign:"end"}}>
                  <i className="fas fa-maximize"></i>
                  <span>{card.details.area}</span>
                </p>
              </div>
              <Link to={`/view-property/${card.id}`} className="btn">
                view project
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Listing;
