import React, { useState, useEffect } from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
// import { useBusinessSearch } from "../../utils/yelp-api/useBusinessSearch";

const CityResult = () => {
  // Yelp Fetch API
  // const term = "Trailer";
  // const locationParam = "paris";
  // const [businesses, amountResults, searchParams, setSearchParams] =
  //   useBusinessSearch(term, locationParam);
  // console.log(businesses);
  // console.log(amountResults);
  // console.log(searchParams);

  // WEATHER API FETCH........................................................
  const [cityWeatherData, setcityWeatherData] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${"ottawa"}&units=metric&appid=${
        process.env.REACT_APP_API_KEY
      }`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setcityWeatherData(result);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);
  console.log(cityWeatherData);
  const city = window.location.pathname.split("/").pop();
  console.log(city);
  return (
    <div>
      <Nav />
      <div style={{ paddingBottom: "60rem" }}>
        <h1>results</h1>
        <h2>{city}</h2>
      </div>
      <Footer />
    </div>
  );
};

export default CityResult;
