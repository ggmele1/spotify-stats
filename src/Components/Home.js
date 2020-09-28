import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Container, Grid } from "@material-ui/core";

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

const Home = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h4" align="left" className="heading">
              View your personal Spotify stats.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            direction="row"
            justify="space-evenly"
            alignItems="center"
          >
            <Button
              className="reg-button"
              variant="contained"
              color="primary"
              onClick={() => props.handleClick("artists")}
            >
              View Artists
            </Button>
            <Button
              className="reg-button"
              variant="contained"
              color="secondary"
              onClick={() => props.handleClick("tracks")}
            >
              View Tracks
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default Home;
