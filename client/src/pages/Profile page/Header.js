import React from "react";
import { Image, Container, Grid} from "semantic-ui-react";
import pp from "../../assets/misc/profile-pic.png";
import EditProfileModal from "./EditProfileModal";
import { Link } from "react-router-dom";

const styles = {
  nameTitle: {
    fontSize: "3rem",
  },
};

const Header = ({ user }) => {
  return (
    <div>
    <div className="nav-header" data-aos="fade-right">
          <div className="nav-title">
            <Link to="/home">Home</Link>
          </div>
    </div>

    
      <div className="profile-header">
        <h1>Profile Page</h1>
      </div>
      <Container text className="profile-container">
        
          <Grid divided="vertically">
            <Grid>
              <Grid.Column width={2}>
                <Image src={pp} size="medium" circular verticalAlign="middle" />
              </Grid.Column>
              <Grid.Column width={2}>
                <h1 style={styles.nameTitle}>
                  {user.firstName} {user.lastName}
                </h1>

                <h1>Welcome aboard {user.username}</h1>
                {"\n"}
                <p>{user.email}</p>


                <EditProfileModal />
              </Grid.Column>


            </Grid>
          </Grid>
        
      </Container>
    </div>
  );
};

export default Header;
