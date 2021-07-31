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
} from "semantic-ui-react";
import adventure from "../../assets/misc/transparent-adventure.png";
import plans from "../../assets/misc/transparent-plans.png";

const Head = ({ user }) => {
  return (
    <div>
      <div className="home-user-header">
        <Label as="small" color="black" tag>
          Logged in as: <span> {user.username}</span>
        </Label>
      </div>
      <div className="home-header">
        <h1>Search for a location</h1>
        <p>Where do you want to go {user.firstname}?</p>
        <Step.Group stackable="tablet">
          <Step>
            <Icon name="info circle" />
            <Step.Content>
              <Step.Title>Information</Step.Title>
              <Step.Description>Enter your trip details</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="options" />
            <Step.Content>
              <Step.Title>Options</Step.Title>
              <Step.Description>Select the suitable option</Step.Description>
            </Step.Content>
          </Step>
          <Step>
            <Icon name="plane" />
            <Step.Content>
              <Step.Title>Start the Adventure</Step.Title>
              <Step.Description>Explore the world</Step.Description>
            </Step.Content>
          </Step>
        </Step.Group>
      </div>
      <Container>
        <div className="home-img-container">
          <Grid stackable divided="vertically">
            <Grid.Row columns={2} className="home-img-row">
              <Grid.Column>
                <Image
                  src={plans}
                  style={{ marginTop: "1rem", width: "100%", height: "auto" }}
                />
              </Grid.Column>
              <Grid.Column>
                <div className="center-items">
                  <h2>"Planning a vacation is no longer a hard task."</h2>
                  <br />
                  <p>
                    <b>Mia</b> One Stop Travel Agency
                  </p>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <div className="center-items">
                  <h2>"I found the best option for me in minutes!"</h2>
                  <br />
                  <p>
                    <b>Kyle</b> Student
                  </p>
                </div>
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={adventure}
                  size="big"
                  style={{ marginTop: "1rem", width: "100%", height: "auto" }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Container>
      <Divider horizontal style={{ color: "#d62b2b" }}>
        Discover
      </Divider>
      <div className="home-header-body">
        <div className="home-header-info">
          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row info-explorer">
                <div className="six wide right floated column">
                  {/* <img
                    src={adventure}
                    className="ui large bordered rounded image"
                    alt="explorer"
                  /> */}
                  <h1 className="logo-name">Explorer</h1>
                </div>
                <div className="eight wide column">
                  <div style={{ padding: "2rem" }}>
                    <h3 className="ui header home-header-info-subtitle">
                      We Help Families Discover Affordable Holidays
                    </h3>
                    <p className="home-header-info-p">
                      Going on a good family trip can be out of your price
                      range, we make sure all the options are available for your
                      wallet by ensuring the best deals and locations.
                    </p>
                    <h3 className="ui header home-header-info-subtitle">
                      Tips to Make You the World’s Savviest Traveler
                    </h3>
                    <p className="home-header-info-p">
                      In the beginning, you make a lot of travel mistakes.
                      <br />
                      Travel savviness is a process born of missed buses,
                      foolish behavior, cultural unawareness, and countless tiny
                      errors. Then, one day, you begin to seamlessly move
                      through airports and integrate yourself into new cultures
                      like a fish to water.
                    </p>
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
                    <Button animated="fade" color="red">
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
        <Divider horizontal style={{ color: "#d62b2b" }}>
          Explore The World
        </Divider>
      </div>
    </div>
  );
};

export default Head;
