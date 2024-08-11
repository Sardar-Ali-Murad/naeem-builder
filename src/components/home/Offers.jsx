import React from "react";

const Offers = () => {
  let array = [
    {
      id: "1",
      image: "images/roof-renovation.jpg",
      title: "Comprehensive Roof Renovation",
      detail:
        "Our roof renovation services fully restore your roof to its optimal condition. We expertly fix leaks, replace damaged tiles, and significantly strengthen structural integrity using top-quality materials, further enhancing your roof's longevity and energy efficiency. Trust our dedicated experts for comprehensive roof care that truly lasts.",
    },
    {
      id: "2",
      image: "images/roof-carpenting.jpg",
      title: "Expert Roof Carpentry",
      detail:
        "Our carpentry services reinforce your roof’s structure with precision. We design, build, and repair wooden frameworks, ensuring long-lasting durability and aesthetic appeal. Custom solutions are provided to match your home’s architecture, delivering quality that enhances both function and beauty.",
    },
    {
      id: "3",
      image: "images/garden-cleaning.jpg",
      title: "Professional Garden Cleaning",
      detail:
        "Our garden cleaning services turn your outdoor space into a tidy, inviting environment. We clear debris, trim plants, and clean patios meticulously. Your garden will be transformed into a pristine and well-maintained area, perfect for relaxation and enjoyment, creating a welcoming atmosphere.",
    },
    {
      id: "4",
      image: "images/painting-work.webp",
      title: "High-Quality Painting Services",
      detail:
        "Our painting services are perfect for interior and exterior projects alike. We offer custom color matching and detailed finishes using premium paints. Our goal is to deliver long-lasting, flawless results that boost your property’s appearance and value, making your spaces vibrant and appealing.",
    },
    {
      id: "5",
      image: "images/tree-cutting.png",
      title: "Safe and Efficient Tree Cutting",
      detail:
        "Our tree-cutting services protect your property by safely removing hazardous trees and trimming overgrown branches. We adhere to strict safety standards, minimizing disruptions. The service includes tree removal, stump grinding, and thorough cleanup, ensuring your property remains safe and pristine.",
    },
    {
      id: "6",
      image: "images/house-renovation.jpg",
      title: "Complete House Renovation",
      detail:
        "Our house renovation services encompass all aspects of your home’s transformation. From structural modifications to modern interior updates, we collaborate closely with you to realize your vision. With quality craftsmanship and attention to detail, your renovation will be a success, exceeding expectations.",
    },
  ];

  return (
    <div className="home_offer_wrap">
      <section class="home_offer" id="blogs">
        <h1 class="heading">
          What We <span>Offer</span>
        </h1>

        <div class="box-container">
          {array?.map((item) => {
            return (
              <div class="box" key={item?.id}>
                <div class="image">
                  <img src={item?.image} alt={item?.title} />
                </div>
                <div class="content">
                  <h3>{item?.title}</h3>
                  <p>{item?.detail}</p>
                  <a class="btn" style={{ visibility: "hidden" }}>
                    learn more
                  </a>
                </div>
                <div className="btn-wrap">
                  <a
                    class="btn"
                    href={`https://wa.me/447898769063`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    learn more
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Offers;
