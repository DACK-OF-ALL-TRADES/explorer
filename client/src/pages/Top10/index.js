import React from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import cityList from "../../utils/cities";
import { Card } from "semantic-ui-react";

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
            if (
              data.city === "Tokyo" ||
              data.city === "Antalya" ||
              data.city === "Rome" ||
              data.city === "Barcelona" ||
              data.city === "Milan" ||
              data.city === "Cancun" ||
              data.city === "St. Petersburg" ||
              data.city === "Amsterdam" ||
              data.city === "Budapest" ||
              data.city === "Izmir"
            ) {
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
