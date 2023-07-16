import React from "react";
import { Grid, Typography, Paper, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FlightIcon from "@material-ui/icons/Flight";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
}));

function Dashboard() {
  const classes = useStyles();

  // Replace these sample flight objects with your actual data
  const bookedFlights = [
    { id: 1, airline: "Delta", origin: "New York", destination: "Los Angeles" },
    { id: 2, airline: "American", origin: "Chicago", destination: "Denver" },
  ];
  const lastTraveledFlights = [
    {
      id: 3,
      airline: "United",
      origin: "Los Angeles",
      destination: "New York",
    },
  ];
  const searchedFlights = [
    { id: 4, airline: "JetBlue", origin: "Miami", destination: "Boston" },
  ];
  const canceledFlights = [
    { id: 5, airline: "Southwest", origin: "Denver", destination: "Chicago" },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Booked Flights</Typography>
          {bookedFlights.length > 0 ? (
            <ul>
              {bookedFlights.map((flight) => (
                <li key={flight.id} className="ml-10">
                  <Typography variant="subtitle1">
                    {flight.airline} - {flight.origin} to {flight.destination}
                  </Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Avatar>
              <FlightIcon />
            </Avatar>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Last Traveled Flights</Typography>
          {lastTraveledFlights.length > 0 ? (
            <ul>
              {lastTraveledFlights.map((flight) => (
                <li key={flight.id} className="ml-10">
                  <Typography variant="subtitle1">
                    {flight.airline} - {flight.origin} to {flight.destination}
                  </Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Avatar>
              <FlightIcon />
            </Avatar>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Searched Flights</Typography>
          {searchedFlights.length > 0 ? (
            <ul>
              {searchedFlights.map((flight) => (
                <li key={flight.id} className="ml-10">
                  <Typography variant="subtitle1">
                    {flight.airline} - {flight.origin} to {flight.destination}
                  </Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Avatar>
              <FlightIcon />
            </Avatar>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper className={classes.paper}>
          <Typography variant="h6">Canceled Flights</Typography>
          {canceledFlights.length > 0 ? (
            <ul>
              {canceledFlights.map((flight) => (
                <li key={flight.id} className="ml-10">
                  <Typography variant="subtitle1">
                    {flight.airline} - {flight.origin} to {flight.destination}
                  </Typography>
                </li>
              ))}
            </ul>
          ) : (
            <Avatar>
              <FlightIcon />
            </Avatar>
          )}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Dashboard;
