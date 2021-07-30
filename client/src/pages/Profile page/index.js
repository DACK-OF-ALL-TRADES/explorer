import React from "react";
import Head from "./Head";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import "./profile.css";

const Profile = () => {
  return (
    <div>
      <Nav />
      <div className="profile-container">
        <Head />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
