import React, { useEffect } from "react";
import "./navbar.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

const Nav = () => {
  // Check if user logged in, navigate to "/" Signup page if not
  useEffect(() => {
    if (!Auth.loggedIn()) {
      alert("Please login to view this page.");
      window.location.assign("/login");
    }
  }, []);
  return (
    <div>
      <ul className="topnav">
        <li>
          <Link to="/home" className="active">
            Explorer
          </Link>
        </li>
        <li className="right logout">
          <Link to="/" onClick={() => Auth.logout()}>
            LOGOUT
          </Link>
        </li>
        {/* <li className="right">
          <Link to="/search">SEARCH</Link>
        </li>
        <li className="right">
          <Link to="/profile">PROFILE</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
