import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const Security = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [activeSessions, setActiveSessions] = useState([]);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddSession = () => {
    setActiveSessions([...activeSessions, new Date()]);
  };

  const handleSignOutAll = () => {
    setActiveSessions([new Date()]);
  };

  const handleDeleteAccount = () => {
    console.log("Account deleted");
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6">Security</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Password</Typography>
        <FormControl fullWidth>
          <InputLabel>Password</InputLabel>
          <Input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="outlined" color="primary">
          Reset Password
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Two-factor Authentication</Typography>
        <FormControl fullWidth>
          <InputLabel>Phone Number</InputLabel>
          <Input value={phone} onChange={handlePhoneChange} />
        </FormControl>
        <Button variant="outlined" color="primary">
          Set Up Two-factor Authentication
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Active Sessions</Typography>
        <ul>
          {activeSessions.map((session) => (
            <li key={session.toString()}>{session.toString()}</li>
          ))}
        </ul>
        <Button variant="outlined" color="primary" onClick={handleAddSession}>
          Add Session
        </Button>
        <Button variant="outlined" color="primary" onClick={handleSignOutAll}>
          Sign Out of All Devices
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleDeleteAccount}
        >
          Delete Account
        </Button>
      </Grid>
    </Grid>
  );
};

export default Security;
