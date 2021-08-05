import React, { useState, useEffect } from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import cityData from "../../utils/cities";
import { useBusinessSearch } from "../../utils/yelp-api/useBusinessSearch";
import "./cityResult.css";
import {
  Grid,
  Card,
  Image,
  Icon,
  Rating,
  Container,
  Button,
  Label,
} from "semantic-ui-react";
import Map from "../../components/Map/Map";

const CityResult = () => {
  let singleCity;
  let cityName = "";
  const cityID = window.location.pathname.split("/").pop();
  cityData.forEach((data) => {
    if (data.id === parseInt(cityID)) {
      singleCity = data;
      cityName = data.city;
    }
  });
  // // Yelp Fetch API
  const term = "Events";
  const locationParam = cityName;
  const [businesses] = useBusinessSearch(term, locationParam);
  console.log(businesses);

  // API FETCH........................................................
  const [cityWeatherData, setcityWeatherData] = useState();
  const [cityCovidData, setCityCovidData] = useState();
  useEffect(() => {
    if (process.env.REACT_APP_API_KEY) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setcityWeatherData(result);
            console.log(cityWeatherData);
          },
          (error) => {
            console.error(error);
            if (error.code === "LOCATION_NOT_FOUND") {
              return null;
            }
          }
        );
    }
    fetch(`https://api.quarantine.country/api/v1/summary/latest`)
      .then((res) => res.json())
      .then(
        (result) => {
          getCovidCity(result);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  const getCovidCity = (covid) => {
    const cData = covid.data.regions;
    if (covid !== undefined) {
      for (const prop in cData) {
        if (cData[prop].name === singleCity.country) {
          setCityCovidData(cData[prop]);
          console.log(cityCovidData);
        }
      }
    }
  };
  return (
    <div>
      <Nav />
      <div className="citypage">
        <div className="citypage-intro">
          <Grid stackable divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <img
                  src={singleCity.image}
                  alt="City"
                  className="citypage-cityimage"
                />
                <Button
                  style={{ marginTop: "2rem" }}
                  as="div"
                  labelPosition="right"
                  // onClick={}
                >
                  <Button color="red">
                    <Icon name="favorite" />
                    Add to favorites
                  </Button>
                  <Label as="a" basic color="red" pointing="left">
                    0
                  </Label>
                </Button>
              </Grid.Column>
              <Grid.Column textAlign="center">
                <h1>{singleCity.city}</h1>
                <h3>
                  <Icon name="map marker alternate" />
                  {singleCity.country}
                </h3>
                {cityWeatherData === undefined ||
                cityWeatherData.main === undefined ? (
                  ""
                ) : (
                  <div className="city-weather">
                    <Card color="teal">
                      <Card.Content>
                        <Card.Header className="weather-title">
                          Current Temp: {parseInt(cityWeatherData.main.temp)}
                          <sup>&#8451;</sup>
                          <img
                            src={`http://openweathermap.org/img/wn/${cityWeatherData.weather[0].icon}.png`}
                            width="50"
                            height="50"
                            alt="logo"
                          />
                        </Card.Header>
                        <Card.Meta>
                          Feels Like:{" "}
                          {parseInt(cityWeatherData.main.feels_like)}
                          <sup>&#8451;</sup>
                        </Card.Meta>
                        <Card.Description>
                          <div style={{ float: "left" }}>
                            Max Temp: {parseInt(cityWeatherData.main.temp_max)}
                            <sup>&#8451;</sup>
                            <p>Humidity: {cityWeatherData.main.humidity}%</p>
                          </div>
                          <div>
                            Min Temp: {parseInt(cityWeatherData.main.temp_min)}
                            <sup>&#8451;</sup>
                            <p>Wind Speed: {cityWeatherData.wind.speed}m/s</p>
                          </div>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </div>
                )}
                {cityCovidData !== undefined && (
                  <Card color="teal" centered>
                    <Card.Content>
                      <Card.Header>Covid Cases</Card.Header>
                      <Card.Meta>{singleCity.country}</Card.Meta>
                      <Card.Description textAlign="left">
                        <b>
                          <Icon name="heartbeat" />
                          Deaths today:
                          {cityCovidData.change.deaths} <br />
                          <br />
                          <Icon name="meh" />
                          Active cases:
                          {cityCovidData.change.active_cases}
                        </b>
                      </Card.Description>
                    </Card.Content>
                  </Card>
                )}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <Container>
          <Grid stackable divided="vertically" className="city-video-container">
            <Grid.Row columns={2}>
              <Grid.Column>
                <div>
                  <Map />
                </div>
              </Grid.Column>
              <Grid.Column>
                <div className="video-responsive">
                  <iframe
                    width="853"
                    height="480"
                    src={`https://www.youtube.com/embed/${"kzDPSM95y58"}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <div className="title-hotel">
          <h1>Hotels</h1>
        </div>
        <div className="city-hotel-cards">
          <Card.Group centered>
            {businesses === undefined && (
              <div>
                <h3>Couldn't get any information about this city</h3>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    alt="city not found..."
                    width="100%"
                    height="auto"
                    src="https://media.giphy.com/media/hPSMHzgHQeFuE/giphy.gif"
                  />
                </div>
              </div>
            )}
            {businesses !== undefined &&
              businesses
                .filter((item, index) => index < 10)
                .map((business) => (
                  <Card color="blue" key={business.name} href={business.url}>
                    {business.image_url === "" ? (
                      <Image
                        className="hotel-img"
                        src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"
                      />
                    ) : (
                      <Image className="hotel-img" src={business.image_url} />
                    )}
                    <Card.Content>
                      <Card.Header>{business.name}</Card.Header>
                      <Card.Meta>Tel: {business.display_phone}</Card.Meta>
                      <Card.Description>
                        <p>Address:</p>
                        <small>{business.location.address1}</small>
                        <small>{business.location.address2}</small>
                        <small>{business.location.address3}</small>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Rating
                        maxRating={5}
                        defaultRating={business.rating}
                        icon="star"
                        disabled
                      />
                    </Card.Content>
                  </Card>
                ))}
          </Card.Group>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CityResult;
