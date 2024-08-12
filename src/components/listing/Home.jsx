import React, { useState } from "react";

const PriceEstimation = () => {
  const [selectedService, setSelectedService] = useState("painting");

  const servicePrices = {
    painting: [
      { label: "Below £1,000", value: "below-1000" },
      { label: "£1,000 - £3,000", value: "1000-3000" },
      { label: "£3,000 - £5,000", value: "3000-5000" },
      { label: "£5,000 - £7,000", value: "5000-7000" },
      { label: "Above £7,000", value: "7000-above" },
    ],
    "roof-renovation": [
      { label: "£3,000 - £5,000", value: "3000-5000" },
      { label: "£5,000 - £10,000", value: "5000-10000" },
      { label: "£10,000 - £15,000", value: "10000-15000" },
      { label: "Above £15,000", value: "15000-above" },
    ],
    carpentry: [
      { label: "Below £1,000", value: "below-1000" },
      { label: "£1,000 - £3,000", value: "1000-3000" },
      { label: "£3,000 - £5,000", value: "3000-5000" },
      { label: "Above £5,000", value: "5000-above" },
    ],
    "garden-cleaning": [
      { label: "Below £1,000", value: "below-1000" },
      { label: "£1,000 - £3,000", value: "1000-3000" },
      { label: "£3,000 - £5,000", value: "3000-5000" },
      { label: "Above £5,000", value: "5000-above" },
    ],
    "tree-cutting": [
      { label: "Below £500", value: "below-500" },
      { label: "£500 - £2,000", value: "500-2000" },
      { label: "£2,000 - £4,000", value: "2000-4000" },
      { label: "Above £4,000", value: "4000-above" },
    ],
  };

  return (
    <div className="listing_home">
      <section className="center">
        <form action="search.html" method="post">
          <h3>Contact Us</h3>
          <div className="box">
            <p>The city we work in</p>
            <input
              type="text"
              name="location"
              value="Birmingham"
              readOnly
              className="input"
            />
          </div>
          <div className="flex">
            <div className="box">
              <p>
                Select Service Type <span>*</span>
              </p>
              <select
                name="service"
                className="input"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="painting">Painting</option>
                <option value="roof-renovation">Roof Renovation</option>
                <option value="carpentry">Carpentry</option>
                <option value="garden-cleaning">Garden Cleaning</option>
                <option value="tree-cutting">Tree Cutting</option>
              </select>
            </div>
            <div className="box">
              <p>Select Budget Range</p>
              <select name="budget" className="input" required>
                {servicePrices[selectedService].map((price, index) => (
                  <option key={index} value={price.value}>
                    {price.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <a
            href={`https://wa.me/447898769063`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Contact Us
          </a>
        </form>
      </section>
    </div>
  );
};

export default PriceEstimation;
