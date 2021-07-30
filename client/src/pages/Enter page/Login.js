import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";
import { Button, Popup, Icon } from "semantic-ui-react";

import Auth from "../../utils/auth";
import Background from "./Background";

const Login = (props) => {
  // Check if user logged in, navigate to "/home" if not
  useEffect(() => {
    if (Auth.loggedIn()) {
      window.location.assign("/home");
    }
  }, []);
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    if (data) {
      console.log(data);
    } else {
      console.log(error);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <div>
        <div className="enter-container">
          <Background />
          <div className="ui middle aligned center aligned grid">
            <div className="column">
              <h2 className="ui image header">
                <div className="content">Log into your account</div>
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
                  <Button type="submit" color="vk" animated="fade" fluid>
                    <Button.Content visible>Login</Button.Content>
                    <Button.Content hidden>Explore the world</Button.Content>
                  </Button>
                </div>

                <div className="ui error message"></div>
              </form>
              <Link to="/">
                <Button animated fluid color="black">
                  <Button.Content visible>Create an account</Button.Content>
                  <Button.Content hidden>
                    <Icon name="add user" />
                  </Button.Content>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
