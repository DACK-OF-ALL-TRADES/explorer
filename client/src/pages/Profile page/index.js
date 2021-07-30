import React from "react";
import Head from "./Head";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";

const Profile = () => {
  return (
    <div>
      <Nav />
      <div style={{ minHeight: "100vh" }}>
        <h1>Profile Page</h1>
      </div>
      <Head />
      <Footer />
    </div>
  );
};

export default Profile;
