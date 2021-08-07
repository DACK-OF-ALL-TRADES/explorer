// imports.....................................................
import React from "react";
import Header from "./Header";
import { useQuery } from "@apollo/client";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import { QUERY_ME } from "../../utils/queries";
import "./profile.css";

const Profile = () => {
  const { data } = useQuery(QUERY_ME);
  const user = data?.me || [];
  return (
    <div>
      <Nav />
      <Header user={user} />
      <Footer />
    </div>
  );
};

export default Profile;
