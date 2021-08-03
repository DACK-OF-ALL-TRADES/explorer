import React, { useState, useEffect } from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import cityData from "../../utils/cities";
import { useBusinessSearch } from "../../utils/yelp-api/useBusinessSearch";
import "./cityResult.css";
import { Grid, Card } from "semantic-ui-react";

const CityResult = () => {
  let singleCity;
  let cityName = "";
  const cityID = window.location.pathname.split("/").pop();
  // console.log("cityID", cityID);
  // console.log(cityData);
  cityData.forEach((data) => {
    // console.log(data);
    if (data.id == cityID) {
      // console.log("city->", data);
      singleCity = data;
      cityName = data.city;
    }
  });
  // console.log(singleCity);
  // console.log(cityName);
  // Yelp Fetch API
  // const term = "Hotels";
  // const locationParam = cityName;
  // const [businesses, amountResults, searchParams, setSearchParams] =
  //   useBusinessSearch(term, locationParam);
  // console.log(businesses);
  // console.log(amountResults);
  // console.log(searchParams);

  // WEATHER API FETCH........................................................
  const [cityWeatherData, setcityWeatherData] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setcityWeatherData(result);
          // console.log(cityWeatherData);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  return (
    <div>
      <Nav />
      <div>
        <div className="citypage-intro">
          <Grid stackable divided="vertically">
            <Grid.Row columns={2}>
              <Grid.Column>
                <img
                  src={singleCity.image}
                  alt="City"
                  className="citypage-cityimage"
                />
              </Grid.Column>
              <Grid.Column textAlign="center">
                <h1>{singleCity.city}</h1>
                <h3>{singleCity.country}</h3>
                {cityWeatherData !== undefined && (
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
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CityResult;
