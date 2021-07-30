import React from "react";
import Head from "./Head";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="home-container">
        <Head />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
