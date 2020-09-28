import React from "react";
import "./Data.css";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Container, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const User = (props) => {
  const classes = useStyles();
  const usersData = props.items;
  let count = 1;
  const artistData = usersData.map((artist) => (
    <div className={classes.root}>
      <Grid
        container
        spacing={6}
        className="grid"
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid item xs={3} className="artist-info">
          <Grid item xs={3}>
            <Typography variant="h5" align="left" className="count">
              #{count++}
            </Typography>
          </Grid>
          <Grid item xs={3} fontWeight="fontWeightBold" m={1}>
            <Typography variant="h4" className="artistName">
              {artist.name}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <a
            href={artist.external_urls.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={artist.images[0].url} alt="artist" className="image" />
          </a>
        </Grid>
      </Grid>
    </div>
  ));
  return (
    <Container>
      <div>
        <Typography
          variant="h4"
          align="center"
          className="heading heading-margin"
        >
          Your Top 10 Favorite Artist
        </Typography>
        {artistData}
      </div>
    </Container>
  );
};
export default User;
