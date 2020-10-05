import React from "react";
import { authEndpoint, clientId, redirectUri, scopes } from "../config";
import { Typography, Button, Container } from "@material-ui/core";
import card1 from "./images/card1.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";

const Login = () => {
  return (
    <Container maxWidth="sm" className="container">
      <div className="login">
        <div>
          <Typography variant="h3" align="left" className="heading-text">
            View all your personal Spotify stats.
          </Typography>
          <Typography variant="body1" align="left" className="body-text">
            View your most listened tracks and artists and switch between 3
            different time periods. Your data is updated approximately every
            day.
          </Typography>
        </div>
        <div className="login-button">
          <Button
            variant="contained"
            className="large-button"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login
          </Button>
        </div>
      </div>
      <div className="cards">
        <div className="card-div2">
          <img src={card2} alt="card2" className="card" />
        </div>
        <div className="card-div1">
          <img src={card1} alt="card1" className="card" />
        </div>
        <div className="card-div3">
          <img src={card3} alt="card3" className="card" />
        </div>
      </div>
    </Container>
  );
};
export default Login;
