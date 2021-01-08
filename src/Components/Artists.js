import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
    height: "150px",
    minWidth: 355,
    maxWidth: "400px",
    backgroundColor: "#1c1c1c",
    [theme.breakpoints.up("sm")]: {
      minWidth: 400,
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
  content: {
    color: "#e0e0e0",
    textAlign: "left",
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
    maxWidth: 151,
  },
  heading: {
    margin: "1rem",
  },
  artistName: {
    opacity: "70%",
  },
}));

const Artists = (props) => {
  const classes = useStyles();
  const usersData = props.items;
  let count = 1;
  const artistData = usersData.map((artist) => (
    <a
      key={count}
      className="card-link"
      href={artist.external_urls.spotify}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Card className={classes.root}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography
              component="h5"
              variant="h6"
              className="small-heading-text"
            >
              #{count++}
            </Typography>
            <Typography
              component="h5"
              variant="h6"
              className="small-heading-text"
            >
              {artist.name}
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          href={artist.external_urls.spotify}
          className={classes.cover}
          image={artist.images[0].url}
          title="Live from space album cover"
        />
      </Card>
    </a>
  ));
  return (
    <Container className="artist-content-wrapper">
      <div>{artistData}</div>
    </Container>
  );
};
export default Artists;
