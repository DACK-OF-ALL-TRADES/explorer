import React from "react";
import {
  Container,
  Icon,
  Step,
  Label,
  Grid,
  Image,
  Button,
  Divider,
  Message,
  Accordion,
  Popup,
} from "semantic-ui-react";
import adventure from "../../assets/misc/transparent-adventure.png";
import plans from "../../assets/misc/transparent-plans.png";
import explore from "../../assets/misc/explore.mp4";
import map from "../../assets/misc/map.mp4";
import { Link } from "react-router-dom";

const panel1 = [
  {
    key: "explorer-option",
    title: {
      content: "How does Explorer find the best option?",
      icon: "question",
    },
    content: [
      "Explorer looks on the most popular places around the world while adding all the factors depending of your choice.",
    ],
  },
];
const panel2 = [
  {
    key: "explorer-option2",
    title: {
      content: "How can I make sure my vacation covers all my needs?",
      icon: "question",
    },
    content: [
      "We add the factor of hotels, attractions, events and the pandemic. Complete the questionare and let us tailor your needs!",
    ],
  },
];

const Head = ({ user }) => {
  const randomCity = () => {
    var randomnumber = Math.floor(Math.random() * (95 - 0 + 1)) + 0;
    console.log(randomnumber);
    window.location.assign(`/search/${randomnumber}`);
  };

  return (
    <div>
      <div className="jumbo">
        <h1 data-aos="zoom-out-up">Discover the world</h1>
        <video autoPlay muted loop className="video2-bg">
          <source src={explore} type="video/mp4" />
        </video>
      </div>
      <div className="a-social-icons">
        <Popup
          trigger={
            <Link to="/continents">
              <Icon name="world" size="large" />
            </Link>
          }
          content="Continents"
          inverted
          position="left center"
        />

        <Popup
          trigger={
            <Link to="/top10">
              <Icon name="star outline" size="large" />
            </Link>
          }
          content="Explorer Top 10"
          inverted
          position="left center"
        />
      </div>

      <div className="home-user-header" data-aos="fade-left">
        <Label as="small" color="black" tag>
          Logged in as: <span> {user.username}</span>
        </Label>
      </div>
      <div className="home-header" data-aos="fade-right">
        <h1>Where do you want to go {user.firstname}?</h1>
        <div className="home-2buttons">
          <Button
            onClick={randomCity}
            color="black"
            animated="fade"
            style={{ margin: "1rem" }}
          >
            <Button.Content visible>Take me somewhere random</Button.Content>
            <Button.Content hidden>
              Discover
              <Icon name="paper plane" />
            </Button.Content>
          </Button>
          <Link to="/myfavorites">
            <Button color="black" style={{ margin: "1rem" }} animated="fade">
              <Button.Content visible>My Favorites</Button.Content>
              <Button.Content hidden>
                <Icon name="heart" />
              </Button.Content>
            </Button>
          </Link>
        </div>
        <Step.Group stackable="tablet">
          <Popup
            trigger={
              <Step>
                <Icon name="info circle" />
                <Step.Content>
                  <Step.Title>Information</Step.Title>
                  <Step.Description>Enter your trip details</Step.Description>
                </Step.Content>
              </Step>
            }
            content="Enter your details below"
            inverted
          />
          <Popup
            trigger={
              <Step>
                <Icon name="options" />
                <Step.Content>
                  <Step.Title>Options</Step.Title>
                  <Step.Description>
                    Select the suitable option
                  </Step.Description>
                </Step.Content>
              </Step>
            }
            content="Pick a city"
            inverted
          />
          <Popup
            trigger={
              <Step>
                <Icon name="plane" />
                <Step.Content>
                  <Step.Title>Start the Adventure</Step.Title>
                  <Step.Description>Explore the world</Step.Description>
                </Step.Content>
              </Step>
            }
            content="Discover new places"
            inverted
          />
        </Step.Group>
      </div>
      <Container>
        <div className="home-img-container">
          <Grid stackable divided="vertically">
            <Grid.Row columns={2} className="home-img-row">
              <Grid.Column>
                <Image
                  src={plans}
                  style={{ marginTop: "1rem", width: "75%", height: "auto" }}
                  data-aos="zoom-in-right"
                />
              </Grid.Column>
              <Grid.Column>
                <div className="center-items">
                  <Message
                    size="huge"
                    color="black"
                    className="home-message"
                    data-aos="flip-up"
                  >
                    <Message.Header>
                      "Planning a vacation is no longer a hard task."
                    </Message.Header>
                    <Message.Content>
                      <b>Mia</b> One Stop Travel Agency
                    </Message.Content>
                  </Message>
                </div>
                <div className="accordion-home">
                  <Accordion panels={panel1} />
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div className="center-items">
                  <Message
                    size="huge"
                    color="black"
                    className="home-message"
                    data-aos="flip-up"
                  >
                    <Message.Header>
                      "I found the best option for me in minutes!"
                    </Message.Header>
                    <Message.Content>
                      <b>Kyle</b> Student
                    </Message.Content>
                  </Message>
                </div>
                <div className="accordion-home">
                  <Accordion panels={panel2} />
                </div>
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={adventure}
                  size="big"
                  style={{ marginTop: "1rem", width: "75%", height: "auto" }}
                  data-aos="zoom-in-left"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
      <div>
        <Divider horizontal style={{ color: "#d62b2b" }}>
          Discover
        </Divider>
        <div className="home-header-body">
          <div className="home-header-info">
            <div className="ui vertical stripe segment">
              <div className="ui middle aligned stackable grid container">
                <div className="row info-explorer">
                  <div className="eight wide right floated column">
                    {/* <h1 className="logo-name">Explorer</h1> */}
                    <video
                      autoPlay
                      muted
                      loop
                      className="asd"
                      width="100%"
                      height="auto"
                      data-aos="zoom-out-right"
                    >
                      <source src={map} type="video/mp4" />
                    </video>
                  </div>
                  <div className="eight wide column">
                    <div style={{ padding: "2rem" }}>
                      <Message data-aos="zoom-out">
                        <h3 className="ui header home-header-info-subtitle">
                          We Help Families Discover Affordable Holidays
                        </h3>
                        <p className="home-header-info-p">
                          Going on a good family trip can be out of your price
                          range, we make sure all the options are available for
                          your wallet by ensuring the best deals and locations.
                        </p>
                      </Message>
                      <Message data-aos="zoom-out">
                        <h3 className="ui header home-header-info-subtitle">
                          Tips to Make You the World’s Savviest Traveler
                        </h3>
                        <p className="home-header-info-p">
                          In the beginning, you make a lot of travel mistakes.
                          <br />
                          Travel savviness is a process born of missed buses,
                          foolish behavior, cultural unawareness, and countless
                          tiny errors. Then, one day, you begin to seamlessly
                          move through airports and integrate yourself into new
                          cultures like a fish to water.
                        </p>
                      </Message>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="center aligned column">
                    <a
                      href="https://www.nomadicmatt.com/travel-blogs/61-travel-tips/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button
                        animated="fade"
                        color="red"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="2500"
                      >
                        <Button.Content visible>
                          Click here for more
                        </Button.Content>
                        <Button.Content hidden>Read More</Button.Content>
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
