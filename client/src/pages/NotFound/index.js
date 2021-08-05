import React from "react";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";

const NotFound = () => {
  return (
    <div>
      <Nav />
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "3rem 0",
          }}
        >
          <h1>Not Found</h1>
        </div>
        <div
          style={{
            paddingBottom: "30rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src="https://media.giphy.com/media/hEc4k5pN17GZq/giphy.gif"
            alt="not found"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
