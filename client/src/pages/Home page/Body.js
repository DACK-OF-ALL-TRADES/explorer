import React, { useState, useEffect } from "react";
import { Container, Dropdown, Button, Icon } from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import CityResults from "./CityResults";
// import cityList from "../../utils/cities";

const Body = ({ user }) => {
  const [ipData, setIpData] = useState([]);
  // IP ADDRESS API FETCH........................................................
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
  // console.log(ipData);

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

  const citySearch = () => {
    // document.querySelector(".searched-cities").style.display = "block";
    console.log("get cities");
  };
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
          <div className="search-button">
            <Button animated color="red" onClick={citySearch}>
              <Button.Content visible>Get your results</Button.Content>
              <Button.Content hidden>
                <Icon name="paper plane" />
              </Button.Content>
            </Button>
          </div>
        </div>
        <div className="searched-cities">{/* cities */}</div>
      </Container>
    </div>
  );
};

export default Body;
