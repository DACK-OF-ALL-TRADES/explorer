/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Header, Modal, Input, Icon } from "semantic-ui-react";
import {
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_EMAIL,
  UPDATE_USERNAME,
  DELETE_USER,
} from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
import Auth from "../../utils/auth";

function EditProfileModal({ user }) {
  const [open, setOpen] = React.useState(false);
  const [firstNameText, setfirstNameText] = useState("");
  const [lastNameText, setlastNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [usernameText, setUsernameText] = useState("");

  // firstname.............................................................
  const [updateFirstName] = useMutation(UPDATE_FIRSTNAME, {
    update(cache, { data: { updateFirstName } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { updateFirstName, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me.firstname } },
      });
    },
  });

  const handleFirstNameSubmit = async () => {
    try {
      if (firstNameText.length === 0 || /\d/.test(firstNameText)) {
        alert("First name cannot be empty or a number...");
      } else {
        await updateFirstName({
          variables: {
            firstname: firstNameText,
          },
        });
        setfirstNameText("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //
  // lastname.............................................................
  const [updateLastName] = useMutation(UPDATE_LASTNAME, {
    update(cache, { data: { updateLastName } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { updateLastName, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me.lastname, me } },
      });
    },
  });

  const handleLastNameSubmit = async () => {
    try {
      if (lastNameText.length === 0 || /\d/.test(lastNameText)) {
        alert("Last name cannot be empty or a number...");
      } else {
        await updateLastName({
          variables: {
            lastname: lastNameText,
          },
        });

        setlastNameText("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // email..................................................................
  const [updateEmail] = useMutation(UPDATE_EMAIL, {
    update(cache, { data: { updateEmail } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { updateEmail, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me.email, me } },
      });
    },
  });

  const handleEmailSubmit = async () => {
    try {
      if (emailText.length === 0 || /\S+@\S+\.\S+/.test(emailText) === false) {
        alert("Email cannot be empty and must be in an email format...");
      } else {
        await updateEmail({
          variables: {
            email: emailText,
          },
        });

        setEmailText("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [updateUsername] = useMutation(UPDATE_USERNAME, {
    update(cache, { data: { updateUsername } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { updateUsername, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me.username, me } },
      });
    },
  });

  const handleUsernameSubmit = async () => {
    try {
      if (usernameText.length === 0 || /\d/.test(usernameText)) {
        alert("Username cannot be empty or a number...");
      } else {
        await updateUsername({
          variables: {
            username: usernameText,
          },
        });

        setUsernameText("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [deleteUser] = useMutation(DELETE_USER);

  const deleteUserSubmit = async () => {
    var check = window.confirm(
      `Are you sure you want to delete this account ${user.firstname}?`
    );
    if (check === true) {
      try {
        await deleteUser({
          variables: {
            userID: user._id,
          },
        });
        Auth.logout();
        window.location.assign("/");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "first-name") {
      setfirstNameText(value);
    }
    if (name === "last-name") {
      setlastNameText(value);
    }
    if (name === "email") {
      setEmailText(value);
    }
    if (name === "username") {
      setUsernameText(value);
    }
  };

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Edit account</Button>}
    >
      <Modal.Header>
        {user.firstname}'s Profile{" "}
        <Button icon style={{ float: "right" }} onClick={() => setOpen(false)}>
          <Icon name="close" />
        </Button>
      </Modal.Header>

      <Modal.Content image>
        <Modal.Description>
          <Header> First Name</Header>
          {/* FIRSTNAME................................. */}
          <Input
            name="first-name"
            type="text"
            placeholder="Please enter your first name..."
            value={firstNameText}
            onChange={handleChange}
            action
            fluid
          >
            <input />
            <Button type="submit" color="blue" onClick={handleFirstNameSubmit}>
              Update
            </Button>
          </Input>
          {/* LASTNAME................................. */}
          <Header> Last Name</Header>
          <Input
            name="last-name"
            type="text"
            placeholder="Please enter your last name..."
            value={lastNameText}
            onChange={handleChange}
            action
            fluid
          >
            <input />
            <Button type="submit" color="blue" onClick={handleLastNameSubmit}>
              Update
            </Button>
          </Input>
          {/* EMAIL................................. */}
          <Header>Email Address</Header>
          <Input
            name="email"
            type="text"
            placeholder="Please enter your email address..."
            value={emailText}
            onChange={handleChange}
            action
            fluid
          >
            <input />
            <Button type="submit" color="blue" onClick={handleEmailSubmit}>
              Update
            </Button>
          </Input>
          {/* USERNAME................................. */}
          <Header>Username</Header>
          <Input
            name="username"
            type="text"
            placeholder="Please enter your username..."
            value={usernameText}
            onChange={handleChange}
            action
            fluid
          >
            <input />
            <Button type="submit" color="blue" onClick={handleUsernameSubmit}>
              Update
            </Button>
          </Input>
          <div style={{ margin: "4rem 0 0 0", float: "right" }}>
            <Button type="submit" color="red" onClick={deleteUserSubmit}>
              Delete Account
            </Button>
          </div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default EditProfileModal;
