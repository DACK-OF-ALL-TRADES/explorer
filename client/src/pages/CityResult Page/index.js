// imports.....................................................
import React, { useState, useEffect } from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import cityData from "../../utils/cities";
import AddReviewModal from "./AddReviewModal";
import { useMutation, useQuery } from "@apollo/client";
import { useBusinessSearch } from "../../utils/yelp-api/useBusinessSearch";
import "./cityResult.css";
import {
  Grid,
  Card,
  Image,
  Icon,
  Item,
  Rating,
  Container,
  Button,
  Label,
  Message,
} from "semantic-ui-react";
import Map from "../../components/Map/Map";
import { ADD_FAVORITE_CITY } from "../../utils/mutations";
import { QUERY_ME, QUERY_REVIEWS } from "../../utils/queries";
import { ToastsContainer, ToastsStore } from "react-toasts";

const CityResult = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000);
  }, []);

  let singleCity;
  let cityName = "";
  let cityID = window.location.pathname.split("/").pop();
  cityData.forEach((data) => {
    if (data.id === parseInt(cityID)) {
      singleCity = data;
      cityName = data.city;
    }
  });
  // Yelp Fetch API
  const term = "Attractions";
  const locationParam = cityName;
  const [businesses] = useBusinessSearch(term, locationParam);

  // OPEN WEATHER API FETCH........................................................
  const [cityWeatherData, setcityWeatherData] = useState();
  useEffect(() => {
    if (process.env.REACT_APP_API_KEY) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            setcityWeatherData(result);
          },
          (error) => {
            if (error.code === "LOCATION_NOT_FOUND") {
              ToastsStore.warning(`Location Not Found`);
              return null;
            }
          }
        );
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const { data } = useQuery(QUERY_ME);
  const user = data?.me || [];
  const [saveCity] = useMutation(ADD_FAVORITE_CITY, {
    update(cache, { data: { favorites } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { favorites, ...me } },
        });
      } catch (e) {
        console.error(e);
      }
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me.favorites } },
      });
    },
  });

  const addFavorite = async () => {
    if (user.favorites.includes(cityID)) {
      ToastsStore.warning(`Already have that city in My Favorites`);
    } else {
      try {
        await saveCity({
          variables: { cityID: cityID },
        });
        ToastsStore.success(`Added ${cityName} to my favorites!`);
      } catch (e) {
        console.log(e);
        ToastsStore.warning(`${e}`);
      }
    }
  };
  useEffect(() => {
    if (businesses === undefined) {
      ToastsStore.warning(`Couldn't get hotels for this city...`);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const randomCity = () => {
    var randomnumber = Math.floor(Math.random() * (95 - 1 + 1)) + 1;
    window.location.assign(`/search/${randomnumber}`);
  };

  const { data: cityReviewData } = useQuery(QUERY_REVIEWS);
  const reviewData = cityReviewData?.reviews || [];
  return (
    <div>
      <Nav />
      {loading === false ? (
        <div>
          <ToastsContainer store={ToastsStore} />
          <div className="citypage">
            <div className="citypage-intro">
              <Grid stackable divided="vertically">
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <img
                      data-aos="zoom-out-down"
                      src={singleCity.image}
                      alt="City"
                      className="citypage-cityimage"
                    />
                    <Button
                      data-aos="zoom-out-left"
                      style={{ marginTop: "2rem" }}
                      as="div"
                      labelPosition="right"
                      onClick={addFavorite}
                    >
                      <Button color="red">
                        <Icon name="favorite" />
                        Add to favorites
                      </Button>
                      <Label as="a" basic color="red" pointing="left">
                        {user.favorites ? user.favorites.length : ""}
                      </Label>
                    </Button>
                    <Button
                      data-aos="zoom-out-right"
                      onClick={randomCity}
                      color="teal"
                      animated="fade"
                      style={{ margin: "1rem" }}
                    >
                      <Button.Content visible>
                        Take me somewhere random
                      </Button.Content>
                      <Button.Content hidden>
                        Discover
                        <Icon name="paper plane" />
                      </Button.Content>
                    </Button>
                    <AddReviewModal
                      city={singleCity.city}
                      country={singleCity.country}
                      username={user.username}
                    />
                  </Grid.Column>
                  <Grid.Column textAlign="center" className="city-header">
                    <h1 data-aos="zoom-in">{singleCity.city}</h1>
                    <h3 data-aos="zoom-out">
                      <Icon name="map marker alternate" />
                      {singleCity.country}
                    </h3>
                    {cityWeatherData === undefined ||
                    cityWeatherData.main === undefined ? (
                      ""
                    ) : (
                      <div data-aos="zoom-out-up" className="city-weather">
                        <Card color="teal">
                          <Card.Content>
                            <Card.Header className="weather-title">
                              Current Temp:{" "}
                              {parseInt(cityWeatherData.main.temp)}
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
                                Max Temp:{" "}
                                {parseInt(cityWeatherData.main.temp_max)}
                                <sup>&#8451;</sup>
                                <p>
                                  Humidity: {cityWeatherData.main.humidity}%
                                </p>
                              </div>
                              <div>
                                Min Temp:{" "}
                                {parseInt(cityWeatherData.main.temp_min)}
                                <sup>&#8451;</sup>
                                <p>
                                  Wind Speed: {cityWeatherData.wind.speed}m/s
                                </p>
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
            <Container>
              <Grid
                stackable
                divided="vertically"
                className="city-video-container"
              >
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <div data-aos="zoom-out-up">
                      <Map />
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <div data-aos="zoom-out-down" className="video-responsive">
                      <iframe
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${singleCity.youtube}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
              <h2>User Reviews</h2>
              <Item.Group style={{ display: "flex" }}>
                {reviewData &&
                  reviewData.map((review) => {
                    if (review.city === cityName) {
                      return (
                        <Message className="review-message">
                          <Item>
                            <Item.Content>
                              <Item.Header>
                                <Icon name="user" />
                                {review.username}
                              </Item.Header>
                              <Item.Description>
                                <br />
                                {review.review}
                              </Item.Description>
                              <Item.Extra>
                                <br />
                                <Rating
                                  maxRating={5}
                                  defaultRating={review.rating}
                                  icon="star"
                                  disabled
                                />
                              </Item.Extra>
                            </Item.Content>
                          </Item>
                        </Message>
                      );
                    } else {
                      return null;
                    }
                  })}
              </Item.Group>
            </Container>
            <div className="title-hotel">
              <h1 data-aos="zoom-out-up">Hotels &amp; Popular Attractions</h1>
              {businesses !== undefined && (
                <a
                  data-aos="zoom-out-down"
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.yelp.com/search?find_desc=hotels&find_loc=${singleCity.city}`}
                >
                  <h4>Click here for more</h4>
                </a>
              )}
            </div>
            <div className="city-hotel-cards">
              <Card.Group centered>
                {businesses === undefined && (
                  <div>
                    <h3 data-aos="zoom-out-up">
                      Couldn't get any information about this city
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        data-aos="zoom-out-down"
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
                    .filter((item, index) => index < 20)
                    .map((business) => (
                      <Card
                        data-aos="zoom-out-left"
                        color="blue"
                        key={business.name}
                        href={business.url}
                      >
                        {business.image_url === "" ? (
                          <Image
                            className="hotel-img"
                            src="https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_54_990x660.jpg"
                          />
                        ) : (
                          <Image
                            className="hotel-img"
                            src={business.image_url}
                          />
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
        </div>
      ) : (
        <>
          <div className="loader-container">
            <p className="loader-text"> </p>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default CityResult;
