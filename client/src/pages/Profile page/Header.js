import React from "react";
// import { Image, Container, Grid, Button } from "semantic-ui-react";
import EditProfileModal from "./EditProfileModal";
// import { Link } from "react-router-dom";

/* <h1 style={styles.nameTitle}>
  {user.firstName} {user.lastName}
</h1>
<h1>Welcome aboard {user.username}</h1> */

const Header = ({ user }) => {
  return (
    <div>
      <div>
        <h1>Profile Page</h1>
        <EditProfileModal />
      </div>
    </div>
  );
};

export default Header;
