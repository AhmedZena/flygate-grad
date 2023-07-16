import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Preferences = () => {
  const classes = useStyles();
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("EGP");
  const [airport, setAirport] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "language") {
      setLanguage(value);
    } else if (name === "currency") {
      setCurrency(value);
    } else if (name === "airport") {
      setAirport(value);
    }
  };

  const handleSave = () => {
    console.log("Language: ", language);
    console.log("Currency: ", currency);
    console.log("Preferred Airport: ", airport);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6">Preferences</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel>Language</InputLabel>
          <Select value={language} name="language" onChange={handleChange}>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Arabic">Arabic</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel>Currency</InputLabel>
          <Select value={currency} name="currency" onChange={handleChange}>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="EGP">EGP</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Preferred Airport</Typography>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel>Select an airport</InputLabel>
          <Select value={airport} name="airport" onChange={handleChange}>
            <MenuItem value="Cairo International Airport">
              Cairo International Airport
            </MenuItem>
            <MenuItem value="Alexandria International Airport">
              Alexandria International Airport
            </MenuItem>
            <MenuItem value="Luxor International Airport">
              Luxor International Airport
            </MenuItem>
            <MenuItem value="Sharm El Sheikh International Airport">
              Sharm El Sheikh International Airport
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Grid>
    </Grid>
  );
};

export default Preferences;
