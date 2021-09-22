// imports.....................................................
import React from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import cityList from "../../utils/cities";
import { Card } from "semantic-ui-react";

let top10Cities = [
  "Tokyo",
  "Antalya",
  "Rome",
  "Barcelona",
  "Milan",
  "Cancun",
  "St. Petersburg",
  "Amsterdam",
  "Budapest",
  "Izmir",
];

const Top10 = () => {
  return (
    <div>
      <Nav />
      <div className="city-result-title">
        <h1>Top 10</h1>
      </div>
      <div className="search-city-display">
        <Card.Group centered>
          {cityList.map((data) => {
            if (top10Cities.includes(data.city)) {
              return (
                <Card
                  image={data.image}
                  header={data.city}
                  meta={data.country}
                  className="city-card"
                  key={data.city}
                  href={"/search/" + data.id}
                  color="red"
                />
              );
            } else {
              return null;
            }
          })}
        </Card.Group>
      </div>
      <Footer />
    </div>
  );
};

export default Top10;
