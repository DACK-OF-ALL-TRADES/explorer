import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {
  Button,
  Header,
  Image,
  Modal,
  Input,
  Icon,
 
} from "semantic-ui-react";
import pp from "../../assets/misc/profile-pic.png"
import {
  UPDATE_FIRSTNAME,
  UPDATE_LASTNAME,
  UPDATE_EMAIL,
  UPDATE_USERNAME,

} from "../../utils/mutations";
import { QUERY_ME } from "../../utils/queries";
//import { Files } from "../PhotoUpload/Files";
//import { Upload } from "../PhotoUpload/Upload";

function EditProfileModal() {
  const [open, setOpen] = React.useState(false);
  const [firstNameText, setfirstNameText] = useState("");
  const [lastNameText, setlastNameText] = useState("");
  const [emailText, setEmailText] = useState("");
  const [usernameText, setUsernameText] = useState("");
 

  const [addFirstName] = useMutation(UPDATE_FIRSTNAME, {
    update(cache, { data: { addFirstName } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME ,
          data: { me: { addFirstName, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME  });
      cache.writeQuery({
        query: QUERY_ME ,
        data: { me: { ...me.firstName, me } },
      });
    },
  });

  const [updateLastName] = useMutation(UPDATE_LASTNAME, {
    update(cache, { data: { updateLastName } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME  });
        cache.writeQuery({
          query:QUERY_ME ,
          data: { me: { updateLastName, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME  });
      cache.writeQuery({
        query: QUERY_ME ,
        data: { me: { ...me.lastName, me } },
      });
    },
  });

  const [updateEmail] = useMutation(UPDATE_EMAIL, {
    update(cache, { data: { updateEmail } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME  });
        cache.writeQuery({
          query:QUERY_ME ,
          data: { me: { updateEmail, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME  });
      cache.writeQuery({
        query: QUERY_ME ,
        data: { me: { ...me.email, me } },
      });
    },
  });

  const [updateUsername] = useMutation(UPDATE_USERNAME, {
    update(cache, { data: { updateUsername } }) {
      try {
        const { me } = cache.readQuery({ query: QUERY_ME  });
        cache.writeQuery({
          query: QUERY_ME ,
          data: { me: { updateUsername, ...me } },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME ,
        data: { me: { ...me.username, me } },
      });
    },
  });


  const handleFirstNameSubmit = async () => {
    try {
      console.log("handle submit input ->" + firstNameText);
      const { data } = await addFirstName({
        variables: {
          firstName: firstNameText,
        },
      });

      setfirstNameText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleLastNameSubmit = async () => {
    try {
      console.log("handle submit input ->" + lastNameText);
      const { data } = await updateLastName({
        variables: {
          lastName: lastNameText,
        },
      });

      setlastNameText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleEmailSubmit = async () => {
    try {
      console.log("handle submit input ->" + emailText);
      const { data } = await updateEmail({
        variables: {
          email: emailText,
        },
      });

      setEmailText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleUsernameSubmit = async () => {
    try {
      console.log("handle submit input ->" + usernameText);
      const { data } = await updateUsername({
        variables: {
          username: usernameText,
        },
      });

      setUsernameText("");
    } catch (err) {
      console.log(err);
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
      trigger={<Button>Click here to update your profile</Button>}
      size="mini"
      style={{ minWidth: "335px" }}
    >
      <Modal.Header>
        Edit Profile{" "}
        <Button icon style={{ float: "right" }} onClick={() => setOpen(false)}>
          <Icon name="close" />
        </Button>
      </Modal.Header>

      <Modal.Content image>
        <Modal.Description>
          <Image size="medium" src={pp} wrapped />
          <Header>First Name</Header> 
          {/* FIRSTNAME................................. */}
          <Input
            name="first-name"
            type="text"
            placeholder="Enter first name"
            value={firstNameText}
            onChange={handleChange}
            action
            fluid
          >
            <input />
            <Button type="submit" onClick={handleFirstNameSubmit}>
              Save
            </Button>
          </Input>
          {/* LASTNAME................................. */}
          <Header>Last Name</Header>
          <Input
            name="last-name"
            type="text"
            placeholder="Enter last name"
            value={lastNameText}
            onChange={handleChange}
            action
            fluid
          >
            <input />
            <Button type="submit" onClick={handleLastNameSubmit}>
              Save
            </Button>
          </Input>
          {/* EMAIL................................. */}
          <Header>Email Address</Header>
          <Input
            name="email"
            type="text"
            placeholder="Enter email address"
            value={emailText}
            onChange={handleChange}
            action
            fluid
          >
            <input />
            <Button type="submit" onClick={handleEmailSubmit}>
              Save
            </Button>
          </Input>
          {/* USERNAME................................. */}
          <Header>Username</Header>
          <Input
            name="username"
            type="text"
            placeholder="Enter username"
            value={usernameText}
            onChange={handleChange}
            action
            fluid
          >
            <input />
            <Button type="submit" onClick={handleUsernameSubmit}>
              Save
            </Button>
          </Input>
          
         {/* PICTURE................................. */}
         {/* <Header>Profile Picture</Header>
          <Upload />
           <Files /> */} 
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
}

export default EditProfileModal;
