import React from "react";
import {
  //   Container,
  //   Icon,
  //   Step,
  //   Label,
  //   Grid,

  Button,
  //   Divider,
  //   Message,
  //   Accordion,
} from "semantic-ui-react";
// import adventure from "../../assets/misc/transparent-adventure.png";
// import plans from "../../assets/misc/transparent-plans.png";
import explore from "../../assets/misc/main.mp4";
// import map from "../../assets/misc/map.mp4";
import "./main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="jumbo-main">
        <h1 data-aos="zoom-out-up ">Explorer</h1>
        <h3 data-aos="zoom-out-up">Rediscover your journey!!</h3>
        <video autoPlay muted loop className="video2-main">
          <source src={explore} type="video/mp4" />
        </video>
      </div>
      <div className="main-buttons">
        <Button.Group size="large">
          <Link to="/login" data-aos="fade-up-left">
            <Button animated fluid color="red">
              <Button.Content visible>Login</Button.Content>
            </Button>
          </Link>
          <Button.Or />

          <Link to="/signup" data-aos="fade-up-right">
            <Button animated fluid color="green">
              <Button.Content visible>Signup</Button.Content>
            </Button>
          </Link>
        </Button.Group>
      </div>
    </div>
  );
};

export default Main;
