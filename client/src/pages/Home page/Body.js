import React, { useState, useEffect } from "react";
import { Container, Dropdown, Button, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
// import CityResults from "./CityResults";
// import cityList from "../../utils/cities";

const Body = ({ user }) => {
  // const [cityNames, setCityNames] = useState([]);

  // let city1 = {};
  // let city2 = {};
  // let city3 = {};
  // let city4 = {};
  // let city5 = {};
  const citySearch = () => {
    document.querySelector(".searched-cities").style.display = "block";
    // city1 = cityList[randomNumber(0, 99)];
    // city2 = cityList[randomNumber(0, 99)];
    // city3 = cityList[randomNumber(0, 99)];
    // city4 = cityList[randomNumber(0, 99)];
    // city5 = cityList[randomNumber(0, 99)];
    // console.log(city5);
    // console.log(city4);
    // console.log(city3);
    // console.log(city2);
    // console.log(city1);
    // cityNames.push(city1, city2, city3, city4, city5);
    // console.log(cityNames);
  };

  // function randomNumber(min, max) {
  //   return Math.round(Math.random() * (max - min) + min);
  // }

  // IP ADDRESS API FETCH........................................................
  const [ipData, setIpData] = useState([]);

  useEffect(() => {
    fetch("https://api.techniknews.net/ipgeo/")
      .then((res) => res.json())
      .then(
        (result) => {
          setIpData(result);
        },
        (error) => {
          console.error(error);
        }
      );
  }, []);

  console.log(ipData);

  const dropdownClimate = (e, { value }) => {
    if (value) {
      document.querySelector(".search-3").style.display = "flex";
    }
    console.log(value);
    // setFormState({
    //   ...formState,
    //   ["status"]: value,
    // });
  };
  const dropdownCurrency = (e, { value }) => {
    if (value) {
      // document.querySelector(".search-4").style.display = "flex";
      document.querySelector(".search-button").style.display = "flex";
    }
    console.log(value);
    // setFormState({
    //   ...formState,
    //   ["status"]: value,
    // });
  };
  // const dropdownBudget = (e, { value }) => {
  //   if (value) {
  //     document.querySelector(".search-button").style.display = "flex";
  //   }
  //   console.log(value);
  //   // setFormState({
  //   //   ...formState,
  //   //   ["status"]: value,
  //   // });
  // };
  const dropdownDestination = (e, { value }) => {
    if (value) {
      document.querySelector(".search-2").style.display = "flex";
    }
    console.log(value);
    // setFormState({
    //   ...formState,
    //   ["status"]: value,
    // });
  };

  const destinationOptions = [
    { key: 1, text: "North America", value: "North America" },
    { key: 2, text: "South America", value: "South America" },
    { key: 3, text: "Europe", value: "Europe" },
    { key: 4, text: "Australia", value: "Australia" },
    { key: 5, text: "Asia", value: "Asia" },
    { key: 6, text: "Africa", value: "Africa" },
    { key: 7, text: "Antarctica", value: "Antarctica" },
  ];
  const climateOptions = [
    { key: 1, text: "Beach", value: "Beach" },
    { key: 2, text: "Tropical", value: "Tropical" },
    { key: 3, text: "Mediterranean", value: "Mediterranean" },
    { key: 4, text: "Mountains", value: "Mountains" },
    { key: 5, text: "Desert", value: "Desert" },
    { key: 6, text: "Polar & Tundra", value: "Polar & Tundra" },
  ];

  const currencyOptions = [
    { key: 1, text: "US Dollars", value: "US Dollars" },
    { key: 2, text: "Canadian Dollars", value: "Canadian Dollars" },
    { key: 4, text: "Euro", value: "Euro" },
    { key: 5, text: "Turkish Lira", value: "Turkish Lira" },
    { key: 6, text: "Indian Rupi", value: "Indian Rupi" },
    { key: 7, text: "Polish złoty", value: "Poland złoty" },
  ];

  // const budgetOptions = [
  //   { key: 1, text: "Economic", value: "Economic" },
  //   { key: 2, text: "Mediocre", value: "Mediocre" },
  //   { key: 3, text: "Deluxe", value: "Deluxe" },
  // ];

  return (
    <div>
      <Container>
        <div className="home-search-container">
          <h2>
            Looking options from {ipData.city} / {ipData.countryCode}
          </h2>
          <div className="search-1">
            <h3>Which part of the world would you like to explore?</h3>
            <Dropdown
              onChange={dropdownDestination}
              options={destinationOptions}
              placeholder="Select a destination..."
              selection
              name="destination"
            />
          </div>
          <div className="search-2">
            <h3>Select your preferred climate</h3>
            <Dropdown
              onChange={dropdownClimate}
              options={climateOptions}
              placeholder="Select a climate..."
              selection
              name="climate"
            />
          </div>
          <div className="search-3">
            <h3>Select a preferred destination currency</h3>
            <Dropdown
              placeholder="Select a currency..."
              selection
              options={currencyOptions}
              name="currency"
              onChange={dropdownCurrency}
            />
          </div>
          {/* <div className="search-4">
            <h3>What is your budget?</h3>
            <Dropdown
              onChange={dropdownBudget}
              options={budgetOptions}
              placeholder="Select a budget range..."
              selection
              name="budget"
            />
          </div> */}
          <div className="search-button">
            <Button animated color="red" onClick={citySearch}>
              <Button.Content visible>Get your results</Button.Content>
              <Button.Content hidden>
                <Icon name="paper plane" />
              </Button.Content>
            </Button>
          </div>
        </div>
        {/* <Divider horizontal style={{ color: "#d62b2b" }}>
          Results
        </Divider> */}
        <div className="searched-cities">
          <Link to="/search/Tokyo">
            <h1>Tokyo</h1>
          </Link>
          <Link to="/search/Paris">
            <h1>Paris</h1>
          </Link>
          <Link to="/search/London">
            <h1>London</h1>
          </Link>
          <Link to="/search/Moscow">
            <h1>Moscow</h1>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Body;
