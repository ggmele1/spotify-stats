import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    minWidth: 200,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Home = (props) => {
  const classes = useStyles();
  const [timeRanges, setTimeRange] = React.useState('');

  const handleChange = (event) => {
    setTimeRange(event.target.value);
    props.handleTimeRange(event.target.value);
  };

  return (
    <Container className="container">
      <div className={classes.root}>
        <Grid
          container
          spacing={1}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h3" align="left" noWrap="false" className="heading-text">
              Spotify stats.
            </Typography>
            <Typography variant="body1" align="left" className="body-text">
               What would you like to see?
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
              className="small-button"
              variant="contained"
              color="primary"
              onClick={() => props.handleClick("artists")}
            >
              View Artists
            </Button>
            <Button
              className="small-button"
              variant="contained"
              color="secondary"
              onClick={() => props.handleClick("tracks")}
            >
              View Tracks
            </Button>
          </Grid>
        </Grid>
      </div>
      {props.state.token && !props.state.no_data && (
      <div className="timeRangeSelector">
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Time Range</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={timeRanges}
          onChange={handleChange}
        >
            <MenuItem value={"short_term"}>4 Weeks</MenuItem>
            <MenuItem value={"medium_term"}>6 Months</MenuItem>
            <MenuItem value={"long_term"}>All Time</MenuItem>
          </Select>
        </FormControl>
      </div>
      )}
    </Container>
  );
};
export default Home;
