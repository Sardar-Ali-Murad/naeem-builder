import React from "react";

const Home = () => {
  return (
    <div className="listing_home">
      <section className="center">
        <form action="search.html" method="post">
          <h3>find your desired service</h3>
          <div className="box">
            <p>
              enter service location <span>*</span>
            </p>
            <input
              type="text"
              name="location"
              required
              maxlength="50"
              placeholder="enter city name"
              className="input"
            />
          </div>
          <div className="flex">
            <div className="box">
              <p>
                select service type <span>*</span>
              </p>
              <select name="service" className="input" required>
                <option value="painting">Painting</option>
                <option value="roof-renovation">Roof Renovation</option>
                <option value="carpentry">Carpentry</option>
                <option value="garden-cleaning">Garden Cleaning</option>
                <option value="tree-cutting">Tree Cutting</option>
              </select>
            </div>
            <div className="box">
              <p>
                select budget range <span>*</span>
              </p>
              <select name="budget" className="input" required>
                <option value="below-1000">Below £1,000</option>
                <option value="1000-5000">£1,000 - £5,000</option>
                <option value="5000-10000">£5,000 - £10,000</option>
                <option value="10000-20000">£10,000 - £20,000</option>
                <option value="20000-above">Above £20,000</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="find services"
            name="search"
            className="btn"
          />
        </form>
      </section>
    </div>
  );
};

export default Home;
