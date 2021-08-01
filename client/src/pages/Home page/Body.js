import React, { useState, useEffect } from "react";
import {
  Container,
  Dropdown,
  Button,
  Icon,
  Form,
  Radio,
  Message,
} from "semantic-ui-react";
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

  const [value, setValue] = useState(null);
  const handleChange = (event, { value }) => setValue(value);

  return (
    <div>
      <Container>
        <div className="home-search-container">
          <h2>
            Looking options from {ipData.city} / {ipData.countryCode}
          </h2>
          <div className="caret-container">
            <Icon name="caret down" className="caret" size="big" />
          </div>

          {/* ......................................................................Question1................................................................................. */}
          <div className="body-form-container">
            <div className="body-form-questions" style={{ marginTop: "2rem" }}>
              <Message size="big">
                <Message.Header>
                  <Message color="orange">
                    Which part of the world would you like to explore?
                  </Message>
                </Message.Header>
                <Dropdown
                  style={{ marginTop: "1rem" }}
                  onChange={dropdownDestination}
                  options={destinationOptions}
                  placeholder="Select a destination..."
                  selection
                  name="destination"
                />
              </Message>
            </div>
            {/* ......................................................................Question2................................................................................. */}
            <div className="body-form-questions" style={{ marginTop: "2rem" }}>
              <Message size="big">
                <Message.Header>
                  <Message color="orange">
                    What continent would you like to visit?
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <b>{value}</b>
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Asia"
                      name="radioGroup"
                      value="Asia"
                      checked={value === "Asia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Europe"
                      name="radioGroup"
                      value="Europe"
                      checked={value === "Europe"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="North America"
                      name="radioGroup"
                      value="North America"
                      checked={value === "North America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="South America"
                      name="radioGroup"
                      value="South America"
                      checked={value === "South America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Africa"
                      name="radioGroup"
                      value="Africa"
                      checked={value === "Africa"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Australia"
                      name="radioGroup"
                      value="Australia"
                      checked={value === "Australia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Antartica"
                      name="radioGroup"
                      value="Antartica"
                      checked={value === "Antartica"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question2................................................................................. */}
            <div className="body-form-questions" style={{ marginTop: "2rem" }}>
              <Message size="big">
                <Message.Header>
                  <Message color="orange">
                    What continent would you like to visit?
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <b>{value}</b>
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Asia"
                      name="radioGroup"
                      value="Asia"
                      checked={value === "Asia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Europe"
                      name="radioGroup"
                      value="Europe"
                      checked={value === "Europe"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="North America"
                      name="radioGroup"
                      value="North America"
                      checked={value === "North America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="South America"
                      name="radioGroup"
                      value="South America"
                      checked={value === "South America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Africa"
                      name="radioGroup"
                      value="Africa"
                      checked={value === "Africa"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Australia"
                      name="radioGroup"
                      value="Australia"
                      checked={value === "Australia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Antartica"
                      name="radioGroup"
                      value="Antartica"
                      checked={value === "Antartica"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question2................................................................................. */}
            <div className="body-form-questions" style={{ marginTop: "2rem" }}>
              <Message size="big">
                <Message.Header>
                  <Message color="orange">
                    What continent would you like to visit?
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <b>{value}</b>
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Asia"
                      name="radioGroup"
                      value="Asia"
                      checked={value === "Asia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Europe"
                      name="radioGroup"
                      value="Europe"
                      checked={value === "Europe"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="North America"
                      name="radioGroup"
                      value="North America"
                      checked={value === "North America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="South America"
                      name="radioGroup"
                      value="South America"
                      checked={value === "South America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Africa"
                      name="radioGroup"
                      value="Africa"
                      checked={value === "Africa"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Australia"
                      name="radioGroup"
                      value="Australia"
                      checked={value === "Australia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Antartica"
                      name="radioGroup"
                      value="Antartica"
                      checked={value === "Antartica"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question2................................................................................. */}
            <div className="body-form-questions" style={{ marginTop: "2rem" }}>
              <Message size="big">
                <Message.Header>
                  <Message color="orange">
                    What continent would you like to visit?
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <b>{value}</b>
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Asia"
                      name="radioGroup"
                      value="Asia"
                      checked={value === "Asia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Europe"
                      name="radioGroup"
                      value="Europe"
                      checked={value === "Europe"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="North America"
                      name="radioGroup"
                      value="North America"
                      checked={value === "North America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="South America"
                      name="radioGroup"
                      value="South America"
                      checked={value === "South America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Africa"
                      name="radioGroup"
                      value="Africa"
                      checked={value === "Africa"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Australia"
                      name="radioGroup"
                      value="Australia"
                      checked={value === "Australia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Antartica"
                      name="radioGroup"
                      value="Antartica"
                      checked={value === "Antartica"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question2................................................................................. */}
            <div className="body-form-questions" style={{ marginTop: "2rem" }}>
              <Message size="big">
                <Message.Header>
                  <Message color="orange">
                    What continent would you like to visit?
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <b>{value}</b>
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Asia"
                      name="radioGroup"
                      value="Asia"
                      checked={value === "Asia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Europe"
                      name="radioGroup"
                      value="Europe"
                      checked={value === "Europe"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="North America"
                      name="radioGroup"
                      value="North America"
                      checked={value === "North America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="South America"
                      name="radioGroup"
                      value="South America"
                      checked={value === "South America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Africa"
                      name="radioGroup"
                      value="Africa"
                      checked={value === "Africa"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Australia"
                      name="radioGroup"
                      value="Australia"
                      checked={value === "Australia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Antartica"
                      name="radioGroup"
                      value="Antartica"
                      checked={value === "Antartica"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question2................................................................................. */}
            <div className="body-form-questions" style={{ marginTop: "2rem" }}>
              <Message size="big">
                <Message.Header>
                  <Message color="orange">
                    What continent would you like to visit?
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <b>{value}</b>
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Asia"
                      name="radioGroup"
                      value="Asia"
                      checked={value === "Asia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Europe"
                      name="radioGroup"
                      value="Europe"
                      checked={value === "Europe"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="North America"
                      name="radioGroup"
                      value="North America"
                      checked={value === "North America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="South America"
                      name="radioGroup"
                      value="South America"
                      checked={value === "South America"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Africa"
                      name="radioGroup"
                      value="Africa"
                      checked={value === "Africa"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Australia"
                      name="radioGroup"
                      value="Australia"
                      checked={value === "Australia"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label="Antartica"
                      name="radioGroup"
                      value="Antartica"
                      checked={value === "Antartica"}
                      onChange={handleChange}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>

            {/* END OF QUESTIONS..................................................................... */}
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
