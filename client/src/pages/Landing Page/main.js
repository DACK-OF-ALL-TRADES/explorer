import React, { useEffect } from "react";
import { Button, Icon } from "semantic-ui-react";
import explore from "../../assets/misc/main.mp4";
import "./main.css";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Main = () => {
  useEffect(() => {
    if (Auth.loggedIn()) {
      window.location.assign("/home");
    }
  }, []);
  return (
    <div>
      <div className="jumbo-main">
        <h1 data-aos="zoom-down-right ">Explorer</h1>
        <h3 data-aos="zoom-down-left">
          Travellers guide
          <br />
          <br />
          <br />
          Rediscover your journey.
        </h3>
        <video autoPlay muted loop className="video2-main">
          <source src={explore} type="video/mp4" />
        </video>
      </div>
      <div className="main-buttons">
        <Button.Group size="large">
          <Link to="/login" data-aos="fade-up-left">
            <Button animated fluid color="red">
              <Button.Content visible>Login</Button.Content>
              <Button.Content hidden>
                <Icon name="sign in" />
              </Button.Content>
            </Button>
          </Link>
          <Button.Or data-aos="fade-down" />

          <Link to="/signup" data-aos="fade-up-right">
            <Button animated fluid color="yellow">
              <Button.Content visible>Signup</Button.Content>
              <Button.Content hidden>
                <Icon name="add user" />
              </Button.Content>
            </Button>
          </Link>
        </Button.Group>
      </div>
    </div>
  );
};

export default Main;
