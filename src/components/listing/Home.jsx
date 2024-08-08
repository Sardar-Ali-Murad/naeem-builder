import React from "react";

const Home = () => {
  return (
    <div className="listing_home">
      <section className="center">
        <form action="search.html" method="post">
          <h3>find your perfect home</h3>
          <div className="box">
            <p>
              enter location <span>*</span>
            </p>
            <input
              type="text"
              name="location"
              required
              maxlength="50"
              placeholder="enter ciyt name"
              className="input"
            />
          </div>
          <div className="flex">
            <div className="box">
              <p>
                property type <span>*</span>
              </p>
              <select name="type" className="input" required>
                <option value="flat">flat</option>
                <option value="house">house</option>
                <option value="shop">shop</option>
              </select>
            </div>
            <div className="box">
              <p>
                how many BHK <span>*</span>
              </p>
              <select name="bhk" className="input" required>
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
                <option value="5">5 BHK</option>
                <option value="6">6 BHK</option>
                <option value="7">7 BHK</option>
                <option value="8">8 BHK</option>
                <option value="9">9 BHK</option>
              </select>
            </div>
            <div className="box">
              <p>
                maximum budget <span>*</span>
              </p>
              <select name="minimum" className="input" required>
                <option value="50000">£50k</option>
                <option value="100000">£100k</option>
                <option value="200000">£200k</option>
                <option value="300000">£300k</option>
                <option value="400000">£400k</option>
                <option value="500000">£500k</option>
                <option value="600000">£600k</option>
                <option value="700000">£700k</option>
                <option value="800000">£800k</option>
                <option value="900000">£900k</option>
                <option value="1000000">£1m</option>
                <option value="2000000">£2m</option>
                <option value="3000000">£3m</option>
                <option value="4000000">£4m</option>
                <option value="5000000">£5m</option>
                <option value="6000000">£6m</option>
                <option value="7000000">£7m</option>
                <option value="8000000">£8m</option>
                <option value="9000000">£9m</option>
                <option value="10000000">£10m</option>
                <option value="15000000">£15m</option>
                <option value="20000000">£20m</option>
              </select>
            </div>
            <div className="box">
              <p>
                maximum budget <span>*</span>
              </p>
              <select name="maximum" className="input" required>
                <option value="50000">£50k</option>
                <option value="100000">£100k</option>
                <option value="200000">£200k</option>
                <option value="300000">£300k</option>
                <option value="400000">£400k</option>
                <option value="500000">£500k</option>
                <option value="600000">£600k</option>
                <option value="700000">£700k</option>
                <option value="800000">£800k</option>
                <option value="900000">£900k</option>
                <option value="1000000">£1m</option>
                <option value="2000000">£2m</option>
                <option value="3000000">£3m</option>
                <option value="4000000">£4m</option>
                <option value="5000000">£5m</option>
                <option value="6000000">£6m</option>
                <option value="7000000">£7m</option>
                <option value="8000000">£8m</option>
                <option value="9000000">£9m</option>
                <option value="10000000">£10m</option>
                <option value="15000000">£15m</option>
                <option value="20000000">£20m</option>
              </select>
            </div>
          </div>
          <input
            type="submit"
            value="search property"
            name="search"
            className="btn"
          />
        </form>
      </section>
    </div>
  );
};

export default Home;
