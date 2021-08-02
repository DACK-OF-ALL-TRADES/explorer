import React from "react";
import { Image, Container, Grid, Button } from "semantic-ui-react";
//import pp from ".";
import EditProfileModal from "./EditProfileModal";


const styles = {
  nameTitle: {
    fontSize: "3rem",
  },
};

const Header = ({ user }) => {
  return (
   

    <div>
      <div className="profile-header">
        <h1>Profile Page</h1>
      </div>
      <Container text>
        <Grid divided="vertically" style={{ marginTop: "3rem" }}>
          <Grid.Row columns={2}>
            {/*<Grid.Column>
              <Image src={pp} size="medium" circular />
            </Grid.Column>*/}
            <Grid.Column verticalAlign="middle">
              <h1 style={styles.nameTitle}>
                {user.firstName} {user.lastName}
              </h1>
              <small>{user.email}</small>
              <p>{user.username}</p>
              <p>
                {user.city} {user.country}
              </p>
              <EditProfileModal />
            </Grid.Column>
          </Grid.Row>
        </Grid>
       
      </Container>
    </div>
  );
};

export default Header;
