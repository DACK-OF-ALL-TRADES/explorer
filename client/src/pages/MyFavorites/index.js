import React from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
// import { Card } from "semantic-ui-react";
import "../../utils/cities";

const MyFavorites = () => {
  // const cityData = localStorage.getItem("myfavorites");
  // const favoriteCityData = JSON.parse(cityData);
  // console.log("myfavorites: ", favoriteCityData);
  return (
    <div>
      <Nav />
      <div style={{ paddingBottom: "30rem" }}>
        <h1>My Favorites</h1>
        {/* {!favoriteCityData === null || favoriteCityData.length === 0 ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "3rem 0",
              }}
            >
              <h2>You don't have any favorite cities...</h2>
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
              <h1>My Favorites</h1>
            </div>
            <div className="search-city-display">
              <Card.Group centered>
                {favoriteCityData.map((cityInfo) => {
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
        )} */}
      </div>
      <Footer />
    </div>
  );
};

export default MyFavorites;
