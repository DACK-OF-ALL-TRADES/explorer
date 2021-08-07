// imports.....................................................
import React from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Card } from "semantic-ui-react";
import euro from "../../assets/euro.PNG";
import asia from "../../assets/asia.PNG";
import australia from "../../assets/australia.PNG";
import africa from "../../assets/africa.PNG";
import southamerica from "../../assets/southamerica.PNG";
import northamerica from "../../assets/northamerica.PNG";

const Continents = () => {
  return (
    <div>
      <Nav />
      <div className="city-result-title">
        <h1>Continents</h1>
      </div>
      <div className="search-city-display">
        <Card.Group centered>
          <Card
            image={euro}
            header="Europe"
            className="city-card"
            href="/Europe"
            color="red"
          />
          <Card
            image={asia}
            header="Asia"
            className="city-card"
            href="/Asia"
            color="red"
          />
          <Card
            image={australia}
            header="Oceania"
            className="city-card"
            href="/Oceania"
            color="red"
          />
          <Card
            image={africa}
            header="Africa"
            className="city-card"
            href="/Africa"
            color="red"
          />
          <Card
            image={southamerica}
            header="South America"
            className="city-card"
            href="/SouthAmerica"
            color="red"
          />
          <Card
            image={northamerica}
            header="North America"
            className="city-card"
            href="/NorthAmerica"
            color="red"
          />
        </Card.Group>
      </div>
      <Footer />
    </div>
  );
};

export default Continents;
