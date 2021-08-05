import React from "react";
import Header from "./Header";
//import Head from "./Head";
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
      <div>
        <div style={{ paddingBottom: "50rem" }}>
          <Header user={user} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
