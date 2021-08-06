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
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header" data-aos="fade-right">
          <div className="nav-title">
            <Link to="/home">Explorer</Link>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links" data-aos="fade-left">
          {/* if on saved page, display search page else display saved page */}
          {window.location.pathname === "/home" ? (
            <Link to="/profile">Account</Link>
          ) : (
            <Link to="/home">Home</Link>
          )}
          <Link
            to="/login"
            className="nav-logout"
            onClick={() => Auth.logout()}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
