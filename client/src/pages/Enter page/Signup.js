// imports.....................................................
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Popup, Icon } from "semantic-ui-react";
import "./enter.css";
import { ToastsContainer, ToastsStore } from "react-toasts";

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
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
      localStorage.setItem("first-entry", "true");
    } catch (e) {
      console.error(e);
      ToastsStore.error(`${e}`);
    }
  };

  return (
    <div>
      <div className="enter-container">
        <Background />
        <ToastsContainer store={ToastsStore} />
        <h1
          className="enter-logo"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3500"
          data-aos-delay="1000"
        >
          Explorer
        </h1>
        <div
          className="ui middle aligned center aligned grid"
          data-aos="fade-down"
        >
          <div className="column">
            <h2 className="ui image header" data-aos="fade-up-right">
              <div className="content">
                <h3>Create an account</h3>
              </div>
            </h2>
            <form
              className="ui large form"
              onSubmit={handleFormSubmit}
              data-aos="fade-up-right"
            >
              <div className="ui stacked segment enter-body">
                <div className="title-header">
                  <small>First Name</small>
                </div>
                <div className="field" data-aos="fade-up">
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
                          autoComplete="off"
                          required
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>Last Name</small>
                </div>
                <div className="field" data-aos="fade-up-right">
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
                          autoComplete="off"
                          required
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>Username</small>
                </div>
                <div className="field" data-aos="fade-up-left">
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
                          autoComplete="off"
                          required
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>Email Address</small>
                </div>
                <div className="field" data-aos="fade-up-left">
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
                          autoComplete="off"
                          required
                        />
                      }
                    />
                  </div>
                </div>
                <div className="title-header">
                  <small>Password</small>
                </div>
                <div className="field" data-aos="fade-down-right">
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
                          autoComplete="off"
                          required
                          minLength="5"
                        />
                      }
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  color="red"
                  animated="fade"
                  fluid
                  data-aos="fade-up"
                >
                  <Button.Content visible>
                    <Icon name="user plus" />
                    Create account
                  </Button.Content>
                  <Button.Content hidden>Explore the world</Button.Content>
                </Button>
              </div>
              <div className="ui error message"></div>
            </form>
            <Link to="/login" data-aos="fade-up-left">
              <Button animated fluid color="black">
                <Button.Content visible>Login instead</Button.Content>
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
