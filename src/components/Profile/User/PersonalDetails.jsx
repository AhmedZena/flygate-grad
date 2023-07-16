import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PersonalDetails = () => {
  const classes = useStyles();
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Ahmed zena",
    displayName: "Ahmed",
    email: "ahmedzena@gmail.com",
    phone: "+201011752787",
    dob: "07/07/2000",
    nationality: "Egyptian",
    gender: "Male",
    address: "123 Main Street",
  });

  const handleEdit = (field) => {
    setEditing(field);
  };

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    setEditing(false);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6">Personal Details</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Full Name"
          fullWidth
          value={user.name}
          name="name"
          disabled={!editing}
          onChange={handleChange}
        />
        {editing && <Button onClick={() => handleEdit("name")}>Edit</Button>}
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Displayed Name"
          fullWidth
          value={user.displayName}
          name="displayName"
          disabled={!editing}
          onChange={handleChange}
        />
        {editing && (
          <Button onClick={() => handleEdit("displayName")}>Edit</Button>
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Email Address"
          fullWidth
          value={user.email}
          name="email"
          disabled={!editing}
          onChange={handleChange}
        />
        {editing && <Button onClick={() => handleEdit("email")}>Edit</Button>}
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Phone Number"
          fullWidth
          value={user.phone}
          name="phone"
          disabled={!editing}
          onChange={handleChange}
        />
        {editing && <Button onClick={() => handleEdit("phone")}>Edit</Button>}
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Date of Birth"
          fullWidth
          value={user.dob}
          name="dob"
          disabled={!editing}
          onChange={handleChange}
        />
        {editing && <Button onClick={() => handleEdit("dob")}>Edit</Button>}
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel>Country</InputLabel>
          <Select
            value={user.nationality}
            name="nationality"
            disabled={!editing}
            onChange={handleChange}
          >
            <MenuItem value="American">American</MenuItem>
            <MenuItem value="British">British</MenuItem>
            <MenuItem value="Chinese">Chinese</MenuItem>
            <MenuItem value="French">French</MenuItem>
            <MenuItem value="German">German</MenuItem>
            <MenuItem value="Indian">Indian</MenuItem>
            <MenuItem value="Egyptian">Egypt</MenuItem>
          </Select>
        </FormControl>
        {editing && (
          <Button onClick={() => handleEdit("nationality")}>Edit</Button>
        )}
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl} fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            value={user.gender}
            name="gender"
            disabled={!editing}
            onChange={handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>
        {editing && <Button onClick={() => handleEdit("gender")}>Edit</Button>}
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Address"
          fullWidth
          value={user.address}
          name="address"
          disabled={!editing}
          onChange={handleChange}
        />
        {editing && <Button onClick={() => handleEdit("address")}>Edit</Button>}
      </Grid>
      {editing && (
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default PersonalDetails;
