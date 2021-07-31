import React from "react";
import {
  Container,
  Input,
  Dropdown,
  Divider,
  Button,
  Icon,
} from "semantic-ui-react";
import { useBusinessSearch } from "../../utils/yelp-api/useBusinessSearch";

const Body = () => {
  const term = "cultural";
  const locationParam = "ottawa";
  const [businesses, amountResults, searchParams, setSearchParams] =
    useBusinessSearch(term, locationParam);
  // const [formState, setFormState] = useState({
  //   name: "",
  //   description: "",
  //   status: "",
  //   category: "",
  //   subcategory: "",
  // });

  // ////////////////////////////////////

  // const [ipData, setIpData] = useState([]);
  // const [cityWeatherData, setcityWeatherData] = useState([]);

  // useEffect(() => {
  //   fetch("https://api.techniknews.net/ipgeo/")
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setIpData(result);
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }, []);
  // useEffect(() => {
  //   fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${"ottawa"}&units=metric&appid=${
  //       process.env.REACT_APP_API_KEY
  //     }`
  //   )
  //     .then((res) => res.json())
  //     .then(
  //       (result) => {
  //         setcityWeatherData(result);
  //       },
  //       (error) => {
  //         console.error(error);
  //       }
  //     );
  // }, []);

  // console.log(ipData);
  // console.log(cityWeatherData);

  const dropdownType = (e, { value }) => {
    if (value) {
      document.querySelector(".search-3").style.display = "flex";
    }
    console.log(value);
    // setFormState({
    //   ...formState,
    //   ["status"]: value,
    // });
  };
  const dropdownTemp = (e, { value }) => {
    if (value) {
      document.querySelector(".search-4").style.display = "flex";
    }
    console.log(value);
    // setFormState({
    //   ...formState,
    //   ["status"]: value,
    // });
  };
  const dropdownBudget = (e, { value }) => {
    if (value) {
      document.querySelector(".search-button").style.display = "flex";
    }
    console.log(value);
    // setFormState({
    //   ...formState,
    //   ["status"]: value,
    // });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value) {
      document.querySelector(".search-2").style.display = "flex";
    }
    console.log(value);
    console.log(name);
    // setFormState({
    //   ...formState,
    //   [name]: value,
    // });
  };

  const typeOptions = [
    { key: 1, text: "Historical", value: "Historical" },
    { key: 2, text: "Entertainment", value: "Entertainment" },
    { key: 3, text: "Nature", value: "Nature" },
    { key: 4, text: "Cultural", value: "Cultural" },
  ];

  const tempOptions = [
    { key: 1, text: "Hot", value: "Hot" },
    { key: 2, text: "Warm", value: "Warm" },
    { key: 3, text: "Cold", value: "Cold" },
  ];

  const budgetOptions = [
    { key: 1, text: "Economic", value: "Economic" },
    { key: 2, text: "Mediocre", value: "Mediocre" },
    { key: 3, text: "Deluxe", value: "Deluxe" },
  ];

  return (
    <div>
      <Container>
        <div className="home-search-container">
          <div className="search-1">
            <h3>How many people is your trip for?</h3>
            <Input
              icon="users"
              iconPosition="left"
              type="number"
              placeholder="Enter an amount..."
              onChange={handleChange}
              name="people"
            />
          </div>
          <div className="search-2">
            <h3>What kind of a trip are you looking for?</h3>
            <Dropdown
              onChange={dropdownType}
              options={typeOptions}
              placeholder="Select a type..."
              selection
              name="type"
            />
          </div>
          <div className="search-3">
            <h3>Select a temperature range</h3>
            <Dropdown
              onChange={dropdownTemp}
              options={tempOptions}
              placeholder="Select a temperature range..."
              selection
              name="temp"
            />
          </div>
          <div className="search-4">
            <h3>What is your budget?</h3>
            <Dropdown
              onChange={dropdownBudget}
              options={budgetOptions}
              placeholder="Select a budget range..."
              selection
              name="budget"
            />
          </div>
          <div className="search-button">
            <Button animated color="red">
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
      </Container>
    </div>
  );
};

export default Body;
