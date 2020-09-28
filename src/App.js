import React from "react";
import axios from "axios";
import { authEndpoint, clientId, redirectUri, scopes } from "./config";
import hash from "./hash";
import Home from "./Components/Home";
import Artists from "./Components/Artists";
import Menu from "./Components/Menu";
import UserTracks from "./Components/Tracks";
import "./App.css";
import { Typography, CssBaseline, Button, Container } from "@material-ui/core";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      token: null,
      request: "",
      range: "medium",
      items: [
        {
          artists: [{ name: "" }],
          name: "",
          album: {
            images: [{ url: "" }],
          },
          images: [{ url: "" }],
          external_urls: { spotify: "" },
        },
      ],
      no_data: true,
    };
    this.getUserTopArtist = this.getUserTopArtist.bind(this);
  }

  handleClick = (event) => {
    const { token } = this.state;
    // this.setState({range})
    this.getUserTopArtist(token, event);
  };

  logOut = () => {
    this.setState({ token: null });
  };

  componentDidMount() {
    // Sets token
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token,
      });
      console.log("componentDidMount RAN");
    }
  }

  getUserTopArtist = async (token, request) => {
    console.log("axios.get RAN");
    await axios
      .get(`https://api.spotify.com/v1/me/top/${request}`, {
        params: { limit: 50, time_range: "long_term" },
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const userData = res.data;
        console.log("getUserTopArtist .THEN");
        this.setState({
          items: userData.items,
          no_data: false,
          request: request,
        });
        console.log(userData.items);
      });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container className="main">
          {this.state.token && (
            <div className="menu">
              <Menu logOut={this.logOut} handleClick={this.handleClick} />
            </div>
          )}
          <div className="App">
            <header className="App-header">
              {!this.state.token && (
                <div className="login">
                  <div>
                    <Typography variant="h4" align="left" className="heading">
                      Login with your Spotify!
                    </Typography>
                  </div>
                  <div className="login-button">
                    <Button
                      variant="contained"
                      className="login-button"
                      color="primary"
                      href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                        "%20"
                      )}&response_type=token&show_dialog=true`}
                    >
                      <Typography>Login</Typography>
                    </Button>
                  </div>
                </div>
              )}
              {this.state.token && this.state.no_data && (
                <Home handleClick={this.handleClick} />
              )}
              {this.state.token &&
                !this.state.no_data &&
                this.state.request === "artists" && (
                  <Artists
                    handleClick={this.handleClick}
                    items={this.state.items}
                    className="user"
                  />
                )}
              {this.state.token &&
                !this.state.no_data &&
                this.state.request === "tracks" && (
                  <UserTracks items={this.state.items} className="user" />
                )}
            </header>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
