import React from "react";
import axios from "axios";
import hash from "./hash";
import Home from "./Components/Home";
import Artists from "./Components/Artists";
import Tracks from "./Components/Tracks";
import Login from "./Components/Login";
import logo from "./logo.png";

import "./App.css";
import { CssBaseline, Container, Button } from "@material-ui/core";

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
    this.getUserData = this.getUserData.bind(this);
  }

  componentDidMount() {
    // Sets token
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token,
      });
    }
  }

  getRequestedStats = (event) => {
    const { token } = this.state;
    this.getUserData(token, event, "medium_term");
  };

  handleTimeRange = (timeRange) => {
    const { token, request } = this.state;
    this.getUserData(token, request, timeRange);
  };

  logOut = () => {
    this.setState({ token: null });
  };

  getUserData = async (token, request, timeRange) => {
    await axios
      .get(`https://api.spotify.com/v1/me/top/${request}`, {
        params: { limit: 50, time_range: timeRange },
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const userData = res.data;
        this.setState({
          items: userData.items,
          no_data: false,
          request: request,
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="nav">
          <div className="logo-div">
            <img src={logo} alt="logo" className="logo" />
          </div>
          {this.state.token && (
            <div className="menu">
              <Button className="logout-button" onClick={() => this.logOut()}>
                | Logout
              </Button>
            </div>
          )}
        </div>
        <Container className="container">
          <div className="App">
            <header className="App-header">
              {!this.state.token && <Login />}
              {this.state.token && (
                <Home
                  state={this.state}
                  getRequestedStats={this.getRequestedStats}
                  handleTimeRange={this.handleTimeRange}
                />
              )}
              {this.state.token &&
                !this.state.no_data &&
                this.state.request === "artists" && (
                  <Artists items={this.state.items} />
                )}
              {this.state.token &&
                !this.state.no_data &&
                this.state.request === "tracks" && (
                  <Tracks items={this.state.items} />
                )}
            </header>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
