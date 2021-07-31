import React from "react";
import Head from "./Head";
import Nav from "../../components/Navbar";
import Body from "./Body";
import Footer from "../../components/Footer";
import "./home.css";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ME);
  let userData = "";
  if (loading) {
    console.log("Loading User");
  } else {
    userData = data.me;
    console.log(userData);
  }

  return (
    <div>
      <Nav />
      <div className="home-container">
        <Head user={userData} />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
