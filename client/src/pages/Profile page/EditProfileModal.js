// imports.....................................................
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
import { ToastsContainer, ToastsStore } from "react-toasts";

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
        ToastsStore.error(`${e}`);
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
        ToastsStore.warning(`First name cannot be empty or a number...`);
      } else {
        await updateFirstName({
          variables: {
            firstname: firstNameText,
          },
        });
        setfirstNameText("");
        ToastsStore.success(`Success! Changed first name to ${firstNameText}`);
      }
    } catch (err) {
      ToastsStore.error(`${err}`);
    }
  };

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
        ToastsStore.error(`${e}`);
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
        ToastsStore.warning(`Last name cannot be empty or a number...`);
      } else {
        await updateLastName({
          variables: {
            lastname: lastNameText,
          },
        });

        setlastNameText("");
        ToastsStore.success(`Success! Changed last name to ${lastNameText}`);
      }
    } catch (err) {
      ToastsStore.error(`${err}`);
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
        ToastsStore.error(`${e}`);
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
        ToastsStore.warning(
          `Email cannot be empty and must be in an email format...`
        );
      } else {
        await updateEmail({
          variables: {
            email: emailText,
          },
        });

        setEmailText("");
        ToastsStore.success(`Success! Changed e-mail to ${emailText}`);
      }
    } catch (err) {
      ToastsStore.error(`${err}`);
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
        ToastsStore.error(`${e}`);
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
        ToastsStore.warning(`Username cannot be empty or a number...`);
      } else {
        await updateUsername({
          variables: {
            username: usernameText,
          },
        });

        setUsernameText("");
        ToastsStore.success(`Success! Changed username to ${usernameText}`);
      }
    } catch (err) {
      ToastsStore.error(`${err}`);
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
        ToastsStore.success(`Deleted user ${user.username}`);
        Auth.logout();
        window.location.assign("/");
      } catch (err) {
        ToastsStore.error(`${err}`);
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
      trigger={<Button data-aos="zoom-in-left">Edit account</Button>}
    >
      <ToastsContainer store={ToastsStore} />
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
