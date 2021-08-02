import React from "react";
import { Image, Container, Grid } from "semantic-ui-react";
import pp from "../../assets/misc/profile-pic.png"
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
        <Grid divided="vertically" style={{ marginTop: "6rem" }}>
          <Grid.Row columns={2}>
            <Grid.Column >
              <Image src={pp} size="medium" circular verticalAlign="left"/>
            </Grid.Column>
            <Grid.Column verticalAlign="center">
              <h1 style={styles.nameTitle}>
                {user.firstName} {user.lastName}
              </h1>
              <h1>Welcome Aboard {user.username}</h1>
              {"\n"}
              <p>{user.email}</p>
              
              
              <EditProfileModal />
            </Grid.Column>
          </Grid.Row>
        </Grid>
       
      </Container>
    </div>
  );
};

export default Header;
