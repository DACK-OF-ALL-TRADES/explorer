// imports.....................................................
import React from "react";
import { Grid, Icon, Card } from "semantic-ui-react";
import EditProfileModal from "./EditProfileModal";

const Header = ({ user }) => {
  const cityData = localStorage.getItem("cities");

  const cities = JSON.parse(cityData);
  return (
    <div>
      <div style={{ marginTop: "5rem" }}>
        <Grid divided="vertically">
          <Grid.Row columns={2}>
            <Grid.Column textAlign="right">
              <div data-aos="fade-right">
                <Icon name="user" size="massive" />
              </div>
            </Grid.Column>
            <Grid.Column>
              <h1 data-aos="fade-left">
                {user.firstname} {user.lastname}
              </h1>
              <h3 data-aos="fade-right">{user.username}</h3>
              <EditProfileModal user={user} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {!cities || cities.length === 0 ? (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "3rem 0",
              }}
            >
              <h2 data-aos="zoom-in-left">
                You currently don't have any searched cities.
              </h2>
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
                data-aos="zoom-in-right"
                src="https://media.giphy.com/media/ads2QSp4JDdeg/giphy.gif"
                alt="not found"
                style={{ width: "80%", height: "auto", maxWidth: "400px" }}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="city-result-title">
              <h1 data-aos="zoom-in">My Previous Search</h1>
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
                        data-aos="zoom-in-right"
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
                        data-aos="zoom-in-right"
                      />
                    );
                  }
                })}
              </Card.Group>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
