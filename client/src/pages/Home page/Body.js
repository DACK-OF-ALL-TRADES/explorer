import React, { useState, useEffect } from "react";
import {
  Container,
  Dropdown,
  Button,
  Icon,
  Form,
  Radio,
  Message,
  Label,
  Modal,
  Header,
} from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import CityResults from "./CityResults";
import cityList from "../../utils/cities";

const styles = {
  form_questions: {
    marginTop: "2rem",
    boxShadow: "1px 1px 3px #2e2e2e",
  },
  form_answer: {
    color: "black",
  },
  form_radio: {
    marginTop: "10px",
  },
};
let continent = [];
let continent_climate = [];
let continent_climate_pop = [];
const Body = ({ user }) => {
  const [open, setOpen] = React.useState(false);
  const [ipData, setIpData] = useState([]);
  const [answer1, setAnswer1] = useState(null);
  const [answer2, setAnswer2] = useState(null);
  const [answer3, setAnswer3] = useState(null);
  const [answer4, setAnswer4] = useState(null);
  const [answer5, setAnswer5] = useState(null);
  const [answer6, setAnswer6] = useState(null);
  const [answer7, setAnswer7] = useState(null);
  const [answer8, setAnswer8] = useState(null);

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
    // console.log(cityList);
  }, []);
  // console.log(ipData);
  const cityDataResults = {
    question_1: answer1,
    question_2: answer2,
    question_3: answer3,
    question_4: answer4,
    question_5: answer5,
    question_6: answer6,
    question_7: answer7,
    question_8: answer8,
  };
  // Search...................................................................
  let cityListResult = Object.values(cityDataResults);
  const citySearch = () => {
    if (cityListResult.includes(null)) {
      setOpen(true);
      // alert("Please fill in all the questions...");
    } else {
      pickCities();
    }
  };
  const pickCities = () => {
    // Continent
    //...................................................
    if (cityListResult[0] === "Any") {
      continent = cityList;
    } else {
      cityList.forEach((element) => {
        if (element.continent === cityListResult[0]) {
          continent.push(element);
        }
      });
    }
    // Climate
    //...................................................
    if (cityListResult[1] === "Any") {
      continent_climate = continent;
    } else {
      continent.forEach((element) => {
        if (element.climate === cityListResult[1]) {
          continent_climate.push(element);
        }
      });
    }
    // Population
    //...................................................
    if (cityListResult[6] === "Doesn't matter") {
      continent_climate_pop = continent_climate;
    } else {
      continent_climate.forEach((element) => {
        if (element.pop === cityListResult[8]) {
          continent_climate_pop.push(element);
        }
      });
    }
    //...................................................
    // console.log("final reuslt");
    // console.log(continent_climate_pop);
    localStorage.setItem("cities", JSON.stringify(continent_climate_pop));
    window.location.assign("/cities");
    //...................................................
  };

  // 1, 2, 9

  // Question1..............................................................
  // RESULT
  const destinationOptions = [
    { key: 1, text: "North America", value: "North America" },
    { key: 2, text: "South America", value: "South America" },
    { key: 3, text: "Europe", value: "Europe" },
    { key: 4, text: "Oceania", value: "Oceania" },
    { key: 5, text: "Asia", value: "Asia" },
    { key: 6, text: "Africa", value: "Africa" },
    { key: 7, text: "Antarctica", value: "Antarctica" },
    { key: 8, text: "Any", value: "Any" },
  ];
  const question1Change = (e, { value }) => {
    setAnswer1(value);
  };

  // Question2..............................................................
  // RESULT
  const question2Change = (e, { value }) => {
    setAnswer2(value);
  };

  // Question3..............................................................
  const question3Change = (e, { value }) => {
    setAnswer3(value);
  };

  // Question4..............................................................
  const question4Change = (e, { value }) => {
    setAnswer4(value);
  };

  // Question5..............................................................
  const question5Change = (e, { value }) => {
    setAnswer5(value);
  };

  // Question6..............................................................
  const question6Change = (e, { value }) => {
    setAnswer6(value);
  };

  // Question7..............................................................
  const question7Change = (e, { value }) => {
    setAnswer7(value);
  };

  // Question8..............................................................
  const question8Change = (e, { value }) => {
    setAnswer8(value);
  };

  // Return................................................................................................
  return (
    <div className="home-search">
      <Container>
        <div className="home-search-container">
          <h2 id="search" data-aos="fade-up">
            Looking options from {ipData.city} / {ipData.countryCode}
          </h2>
          <h3 data-aos="fade-down">Please select your choices</h3>
          <div className="caret-container">
            <Icon name="caret down" className="caret" size="huge" />
          </div>

          <div className="body-form-container">
            {/* ......................................................................Question1................................................................................. */}
            <div style={styles.form_questions} data-aos="fade-up-left">
              <Message size="small" color="red">
                <Label color="red" attached="top right">
                  1
                </Label>
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
            <div style={styles.form_questions} data-aos="fade-up-right">
              <Message size="small" color="red">
                <Label color="red" attached="top right">
                  2
                </Label>
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
                      label="Polar and Tundra"
                      name="radioGroup"
                      value="Polar and Tundra"
                      checked={answer2 === "Polar and Tundra"}
                      onChange={question2Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Any"
                      name="radioGroup"
                      value="Any"
                      checked={answer2 === "Any"}
                      onChange={question2Change}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question3................................................................................. */}
            <div style={styles.form_questions} data-aos="fade-up-left">
              <Message size="small" color="red">
                <Label color="red" attached="top right">
                  3
                </Label>
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
            {/* ......................................................................Question4................................................................................. */}
            <div style={styles.form_questions} data-aos="fade-up-right">
              <Message size="small" color="red">
                <Label color="red" attached="top right">
                  4
                </Label>
                <Message.Header>
                  <Message color="red">
                    <Icon name="question circle" size="big" />
                    <span>What type of footwear defines you?</span>
                    <div style={{ textAlign: "right" }}>
                      <small style={styles.form_answer}>{answer4}</small>
                    </div>
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Hiking boots"
                      name="radioGroup"
                      value="Hiking boots"
                      checked={answer4 === "Hiking boots"}
                      onChange={question4Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Leather dress shoes"
                      name="radioGroup"
                      value="Leather dress shoes"
                      checked={answer4 === "Leather dress shoes"}
                      onChange={question4Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Sandals"
                      name="radioGroup"
                      value="Sandals"
                      checked={answer4 === "Sandals"}
                      onChange={question4Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Flip Flops"
                      name="radioGroup"
                      value="Flip Flops"
                      checked={answer4 === "Flip Flops"}
                      onChange={question4Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Running Shoes"
                      name="radioGroup"
                      value="Running Shoes"
                      checked={answer4 === "Running Shoes"}
                      onChange={question4Change}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question5................................................................................. */}
            <div style={styles.form_questions} data-aos="fade-up-left">
              <Message size="small" color="red">
                <Label color="red" attached="top right">
                  5
                </Label>
                <Message.Header>
                  <Message color="red">
                    <Icon name="question circle" size="big" />
                    <span>Which one do you like the most?</span>
                    <div style={{ textAlign: "right" }}>
                      <small style={styles.form_answer}>{answer5}</small>
                    </div>
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Pizza Napolitano"
                      name="radioGroup"
                      value="Pizza Napolitano"
                      checked={answer5 === "Pizza Napolitano"}
                      onChange={question5Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Hanoi-style pho"
                      name="radioGroup"
                      value="Hanoi-style pho"
                      checked={answer5 === "Hanoi-style pho"}
                      onChange={question5Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Biryani"
                      name="radioGroup"
                      value="Biryani"
                      checked={answer5 === "Biryani"}
                      onChange={question5Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Borscht"
                      name="radioGroup"
                      value="Borscht"
                      checked={answer5 === "Borscht"}
                      onChange={question5Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Kebab"
                      name="radioGroup"
                      value="Kebab"
                      checked={answer5 === "Kebab"}
                      onChange={question5Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Hamburger"
                      name="radioGroup"
                      value="Hamburger"
                      checked={answer5 === "Hamburger"}
                      onChange={question5Change}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question6................................................................................. */}
            <div style={styles.form_questions} data-aos="fade-up-right">
              <Message size="small" color="red">
                <Label color="red" attached="top right">
                  6
                </Label>
                <Message.Header>
                  <Message color="red">
                    <Icon name="question circle" size="big" />
                    <span>
                      Which drink would you prefer to have after a long day?
                    </span>
                    <div style={{ textAlign: "right" }}>
                      <small style={styles.form_answer}>{answer6}</small>
                    </div>
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Tea"
                      name="radioGroup"
                      value="Tea"
                      checked={answer6 === "Tea"}
                      onChange={question6Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Cosmopolitan cocktail"
                      name="radioGroup"
                      value="Cosmopolitan cocktail"
                      checked={answer6 === "Cosmopolitan cocktail"}
                      onChange={question6Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="A cold beer"
                      name="radioGroup"
                      value="A cold beer"
                      checked={answer6 === "A cold beer"}
                      onChange={question6Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="A margarita"
                      name="radioGroup"
                      value="A margarita"
                      checked={answer6 === "A margarita"}
                      onChange={question6Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="A matcha"
                      name="radioGroup"
                      value="A matcha"
                      checked={answer6 === "A matcha"}
                      onChange={question6Change}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question7................................................................................. */}
            <div style={styles.form_questions} data-aos="fade-up-left">
              <Message size="small" color="red">
                <Label color="red" attached="top right">
                  7
                </Label>
                <Message.Header>
                  <Message color="red">
                    <Icon name="question circle" size="big" />
                    <span>Do you want to visit?</span>
                    <div style={{ textAlign: "right" }}>
                      <small style={styles.form_answer}>{answer7}</small>
                    </div>
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Most popular places – more crowded"
                      name="radioGroup"
                      value="Most popular places – more crowded"
                      checked={answer7 === "Most popular places – more crowded"}
                      onChange={question7Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Between most popular and least popular"
                      name="radioGroup"
                      value="Between most popular and least popular"
                      checked={
                        answer7 === "Between most popular and least popular"
                      }
                      onChange={question7Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Less popular places – less crowded"
                      name="radioGroup"
                      value="Less popular places – less crowded"
                      checked={answer7 === "Less popular places – less crowded"}
                      onChange={question7Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Doesn't matter"
                      name="radioGroup"
                      value="Doesn't matter"
                      checked={answer7 === "Doesn't matter"}
                      onChange={question7Change}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>
            {/* ......................................................................Question8................................................................................. */}
            <div style={styles.form_questions} data-aos="fade-up-right">
              <Message size="small" color="red">
                <Label color="red" attached="top right">
                  8
                </Label>
                <Message.Header>
                  <Message color="red">
                    <Icon name="question circle" size="big" />
                    <span>What book will you bring with your suitcase?</span>
                    <div style={{ textAlign: "right" }}>
                      <small style={styles.form_answer}>{answer8}</small>
                    </div>
                  </Message>
                </Message.Header>
                <Form>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Favorite magazine"
                      name="radioGroup"
                      value="Favorite magazine"
                      checked={answer8 === "Favorite magazine"}
                      onChange={question8Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Travelers guide book"
                      name="radioGroup"
                      value="Travelers guide book"
                      checked={answer8 === "Travelers guide book"}
                      onChange={question8Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Phrase book"
                      name="radioGroup"
                      value="Phrase book"
                      checked={answer8 === "Phrase book"}
                      onChange={question8Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="A good novel"
                      name="radioGroup"
                      value="A good novel"
                      checked={answer8 === "A good novel"}
                      onChange={question8Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="Educational book"
                      name="radioGroup"
                      value="Educational book"
                      checked={answer8 === "Educational book"}
                      onChange={question8Change}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      style={styles.form_radio}
                      label="None"
                      name="radioGroup"
                      value="None"
                      checked={answer8 === "None"}
                      onChange={question8Change}
                    />
                  </Form.Field>
                </Form>
              </Message>
            </div>

            {/* END OF QUESTIONS..................................................................... */}
          </div>

          <div
            className="search-button"
            data-aos="fade-up"
            data-aos-duration="4000"
          >
            <Button animated color="red" fluid onClick={citySearch}>
              <Button.Content visible>Get your results</Button.Content>
              <Button.Content hidden>
                <Icon name="paper plane" />
              </Button.Content>
            </Button>
          </div>
          <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
          >
            <Header icon>
              <Icon name="alarm" />
              Please Fill All Questions
            </Header>
            <Modal.Content>
              <p>
                You've got an empty question, please fill in your options and
                try again.
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button color="green" inverted onClick={() => setOpen(false)}>
                <Icon name="checkmark" /> OK
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Body;
