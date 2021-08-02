import React from "react";
import Header from "./Header";
//import Head from "./Head";
import { useQuery } from "@apollo/client";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import { QUERY_ME } from "../../utils/queries";
import "./EditProfileModal";
import "./profile.css";

const Profile = () => {
  const { data } = useQuery(QUERY_ME );
  const user = data?.me || [];
  return (
    <div>
      <Nav />
      
        <Header user={user} />
        
        <div style={{ paddingBottom: "20rem" }}></div> 
        <Footer />
    
    </div>
  );
};

export default Profile;
