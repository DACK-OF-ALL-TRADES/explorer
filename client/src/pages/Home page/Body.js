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
import cityList from "../../utils/cities";

const styles = {
  form_questions: {
    marginTop: "2rem",
  },
  form_answer: {
    color: "black",
  },
  form_radio: {
    marginTop: "10px",
  },
};

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
    console.log(cityList);
  }, []);
  // console.log(ipData);

  // Question1..............................................................
  const [answer1, setAnswer1] = useState(null);
  const question1Change = (e, { value }) => {
    setAnswer1(value);
    console.log(value);
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

  // Question2..............................................................
  const [answer2, setAnswer2] = useState(null);
  const question2Change = (e, { value }) => {
    setAnswer2(value);
    console.log(value);
  };

  // Question3..............................................................
  const [answer3, setAnswer3] = useState(null);
  const question3Change = (e, { value }) => {
    setAnswer3(value);
    console.log(value);
  };

  // Search...................................................................
  const citySearch = () => {
    // document.querySelector(".searched-cities").style.display = "block";
    console.log("get cities");
  };

  // Return................................................................................................
  return (
    <div className="home-search">
      <Container>
        <div className="home-search-container">
          <h2>
            Looking options from {ipData.city} / {ipData.countryCode}
          </h2>
          <h3>Please select your choices</h3>
          <div className="caret-container">
            <Icon name="caret down" className="caret" size="big" />
          </div>

          <div className="body-form-container">
            {/* ......................................................................Question1................................................................................. */}
            <div style={styles.form_questions}>
              <Message size="big" color="red">
                <Message.Header>
                  <Message color="red">
                    <Icon name="question circle" size="big" />
                    <span>
                      Which part of the world would you like to explore?
                    </span>
                    <div style={{ textAlign: "right" }}>
                      <small style={styles.form_answer}>{answer1}</small>
                    </div>
                  </Message>
                </Message.Header>
                <Dropdown
                  style={{ marginTop: "1rem" }}
                  onChange={question1Change}
                  options={destinationOptions}
                  placeholder="Select a destination..."
                  selection
                  name="destination"
                />
              </Message>
            </div>
            {/* ......................................................................Question2................................................................................. */}
            <div style={styles.form_questions}>
              <Message size="big" color="red">
                <Message.Header>
                  <Message color="red">
                    <Icon name="question circle" size="big" />
                    <span>What type of climate do you prefer?</span>
                    <div style={{ textAlign: "right" }}>
                      <small style={styles.form_answer}>{answer2}</small>
                    </div>
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Tropical"
                      name="radioGroup"
                      value="Tropical"
                      checked={answer2 === "Tropical"}
                      onChange={question2Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Mediterranean"
                      name="radioGroup"
                      value="Mediterranean"
                      checked={answer2 === "Mediterranean"}
                      onChange={question2Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Temperate"
                      name="radioGroup"
                      value="Temperate"
                      checked={answer2 === "Temperate"}
                      onChange={question2Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Desert"
                      name="radioGroup"
                      value="Desert"
                      checked={answer2 === "Desert"}
                      onChange={question2Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Africa"
                      name="radioGroup"
                      value="Africa"
                      checked={answer2 === "Africa"}
                      onChange={question2Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Polar and Tundra"
                      name="radioGroup"
                      value="Polar and Tundra"
                      checked={answer2 === "Polar and Tundra"}
                      onChange={question2Change}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question2................................................................................. */}
            <div style={styles.form_questions}>
              <Message size="big" color="red">
                <Message.Header>
                  <Message color="red">
                    <Icon name="question circle" size="big" />
                    <span>What most appeals to you?</span>
                    <div style={{ textAlign: "right" }}>
                      <small style={styles.form_answer}>{answer3}</small>
                    </div>
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Relaxation, sandy beaches, nice bars..."
                      name="radioGroup"
                      value="Relaxation, sandy beaches, nice bars..."
                      checked={
                        answer3 === "Relaxation, sandy beaches, nice bars..."
                      }
                      onChange={question3Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Partying, night clubs, disco disco!"
                      name="radioGroup"
                      value="Partying, night clubs, disco disco!"
                      checked={
                        answer3 === "Partying, night clubs, disco disco!"
                      }
                      onChange={question3Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Sun, sun, sun and nothing else."
                      name="radioGroup"
                      value="Sun, sun, sun and nothing else."
                      checked={answer3 === "Sun, sun, sun and nothing else."}
                      onChange={question3Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Attend a sport event."
                      name="radioGroup"
                      value="Attend a sport event."
                      checked={answer3 === "Attend a sport event."}
                      onChange={question3Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Spend a day at the theme park."
                      name="radioGroup"
                      value="Spend a day at the theme park."
                      checked={answer3 === "Spend a day at the theme park."}
                      onChange={question3Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Romantic strolls watching the sunset on golden sands."
                      name="radioGroup"
                      value="Romantic strolls watching the sunset on golden sands."
                      checked={
                        answer3 ===
                        "Romantic strolls watching the sunset on golden sands."
                      }
                      onChange={question3Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Wildlife, cultural and historical experience"
                      name="radioGroup"
                      value="Wildlife, cultural and historical experience"
                      checked={
                        answer3 ===
                        "Wildlife, cultural and historical experience"
                      }
                      onChange={question3Change}
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
