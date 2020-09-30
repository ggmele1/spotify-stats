import React from "react";
import "./Data.css";
import "../App.css";
import { makeStyles, theme } from "@material-ui/core/styles";
import { Typography, Container, Card, CardContent, CardMedia} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    height: '150px',
    maxWidth: '400px',
    backgroundColor: "#1c1c1c",
    },
  details: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  content: {
    color: '#e0e0e0',
    textAlign: 'left',
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
    maxWidth: 151,
  },
  heading: {
    margin: '1rem',
  },
  artistName: {
    opacity: '70%'
  }
}));


const UserTracks = (props) => {
  const classes = useStyles();
  const usersData = props.items;
  let count = 1;
  const tracksData = usersData.map((artist) => (
  <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <Typography component="h5" variant="h6" className="small-heading-text">
            #{count++}
          </Typography>
          <Typography component="h5" variant="h6" className="small-heading-text">
            {artist.name}
          </Typography>
          <Typography variant="subtitle1" className={classes.artistName}>
            {artist.artists[0].name}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={artist.album.images[0].url}
        title="Live from space album cover"
      />
  </Card>
  ));
  return (
    <Container className="container">
      <div>
        {tracksData}
      </div>
    </Container>
  );
};

export default UserTracks;
