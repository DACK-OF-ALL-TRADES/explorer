import React from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card } from "semantic-ui-react";
import cityList from "../../utils/cities";

const NorthAmerica = () => {
  return (
    <div>
      <Nav />
      <div className="city-result-title">
        <h1>North America</h1>
      </div>
      <div className="search-city-display">
        <Card.Group centered>
          {cityList.map((data) => {
            if (data.continent === "North America") {
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

export default NorthAmerica;
