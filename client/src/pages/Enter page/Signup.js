import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Popup, Icon } from "semantic-ui-react";
import "./enter.css";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";
import Background from "./Background";

const Signup = () => {
  // Check if user logged in, navigate to "/home" if not
  useEffect(() => {
    if (Auth.loggedIn()) {
      window.location.assign("/home");
    }
  }, []);
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    country: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="enter-container">
        <Background />
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui image header">
              <div className="content">Sign up for an account</div>
            </h2>
            <form className="ui large form" onSubmit={handleFormSubmit}>
              <div className="ui stacked segment enter-body">
                <div className="title-header">
                  <small>Email Address</small>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <Popup
                      content="Please enter your email"
                      trigger={
                        <input
                          className="form-input"
                          fluid="true"
                          placeholder="Your email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>Password</small>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <Popup
                      content="Please enter your password"
                      trigger={
                        <input
                          className="form-input"
                          placeholder="******"
                          name="password"
                          type="password"
                          value={formState.password}
                          onChange={handleChange}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>Username</small>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <Popup
                      content="Please enter your username"
                      trigger={
                        <input
                          className="form-input"
                          placeholder="Your username"
                          name="username"
                          type="username"
                          value={formState.username}
                          onChange={handleChange}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>First Name</small>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <Popup
                      content="Please enter your first name"
                      trigger={
                        <input
                          className="form-input"
                          placeholder="Your first name"
                          name="firstname"
                          type="firstname"
                          value={formState.firstname}
                          onChange={handleChange}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>Last Name</small>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <Popup
                      content="Please enter your last name"
                      trigger={
                        <input
                          className="form-input"
                          placeholder="Your last name"
                          name="lastname"
                          type="lastname"
                          value={formState.lastname}
                          onChange={handleChange}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>City</small>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="home icon"></i>
                    <Popup
                      content="Please enter your city"
                      trigger={
                        <input
                          className="form-input"
                          placeholder="Your city"
                          name="city"
                          type="city"
                          value={formState.city}
                          onChange={handleChange}
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>Country</small>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="globe icon"></i>
                    <Popup
                      content="Please enter your country"
                      trigger={
                        <input
                          className="form-input"
                          placeholder="Your Country"
                          name="country"
                          type="country"
                          value={formState.country}
                          onChange={handleChange}
                        />
                      }
                    />
                  </div>
                </div>
                <Button type="submit" color="instagram" animated="fade" fluid>
                  <Button.Content visible>
                    <Icon name="user plus" />
                    Create Account
                  </Button.Content>
                  <Button.Content hidden>Explore the world</Button.Content>
                </Button>
              </div>

              <div className="ui error message"></div>
            </form>
            <Link to="/login">
              <Button animated fluid color="black">
                <Button.Content visible>Login</Button.Content>
                <Button.Content hidden>
                  <Icon name="sign in" />
                </Button.Content>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
