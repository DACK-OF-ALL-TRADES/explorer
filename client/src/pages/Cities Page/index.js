import React from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card } from "semantic-ui-react";
import "./cities.css";

const Cities = () => {
  const cityData = localStorage.getItem("cities");
  const cities = JSON.parse(cityData);
  // console.log("cities: ", cities);
  return (
    <div>
      <div>
        <Nav />
        {cities.length === 0 ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "3rem 0",
              }}
            >
              <h2>No Results for those choices...</h2>
            </div>
            <div
              style={{
                paddingBottom: "30rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://media.giphy.com/media/ads2QSp4JDdeg/giphy.gif"
                alt="not found"
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="city-result-title">
              <h1>My Results</h1>
            </div>
            <div className="search-city-display">
              <Card.Group centered>
                {cities.map((cityInfo) => {
                  if (cityInfo.image === "") {
                    return (
                      <Card
                        image={
                          "https://cdn.pixabay.com/photo/2015/03/26/09/48/buildings-690364__340.jpg"
                        }
                        header={cityInfo.city}
                        meta={cityInfo.country}
                        className="city-card"
                        key={cityInfo.city}
                        href={"/search/" + cityInfo.id}
                        color="red"
                      />
                    );
                  } else {
                    return (
                      <Card
                        image={cityInfo.image}
                        header={cityInfo.city}
                        meta={cityInfo.country}
                        className="city-card"
                        key={cityInfo.city}
                        href={"/search/" + cityInfo.id}
                        color="red"
                      />
                    );
                  }
                })}
              </Card.Group>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cities;
