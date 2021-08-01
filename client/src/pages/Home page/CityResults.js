import React from "react";
import { Card } from "semantic-ui-react";

const CityResults = ({ cities }) => {
  console.log(cities);
  return (
    <div className="search-city-display">
      <h1>Cities</h1>
      <Card.Group centered>
        {cities.map((cityData) => {
          console.log(cityData);
          console.log(cityData.city);
          return (
            <Card
              image="https://cdn.pixabay.com/photo/2015/03/26/09/48/buildings-690364__340.jpg"
              header={cityData.city}
              meta="Country"
              className="city-card"
              key={cityData.city}
              href={"/search/" + cityData.city}
            />
          );
        })}
      </Card.Group>
    </div>
  );
};

export default CityResults;
