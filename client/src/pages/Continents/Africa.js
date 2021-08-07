// imports.....................................................
import React from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import cityList from "../../utils/cities";
import { Card } from "semantic-ui-react";

const Africa = () => {
  return (
    <div>
      <Nav />
      <div className="city-result-title">
        <h1>Africa</h1>
      </div>
      <div className="search-city-display">
        <Card.Group centered>
          {cityList.map((data) => {
            if (data.continent === "Africa") {
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

export default Africa;
