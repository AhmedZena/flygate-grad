import React, { useState, useRef } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Avatar,
} from "@material-ui/core";
import Dashboard from "./Dashboard";
import PersonalDetails from "./PersonalDetails";
import Preferences from "./Preferences";
import Security from "./Security";
import PaymentDetails from "./PaymentDetails";
import Notifications from "./Notifications";
import EditIcon from "@material-ui/icons/Edit";
import PersonIcon from "@material-ui/icons/Person";
import classes from "./Profile.module.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className={classes.tabContent} p={2}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
export default function Profile() {
  //   const classes = useStyles();
  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));
  const [value, setValue] = useState(0);
  const fileInputRef = useRef(null);
  const [userIconUrl, setUserIconUrl] = useState("");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIconUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleIconInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setUserIconUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={classes.Profile}>
      <Box p={2}>
        <div className={classes.userInfo}>
          <div className={classes.userIcon}>
            {userIconUrl ? (
              <img src={userIconUrl} alt="user icon" />
            ) : (
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            )}
            <div className={classes.editIcon} onClick={handleIconUploadClick}>
              <EditIcon fontSize="small" />
            </div>
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              ref={fileInputRef}
              onChange={handleIconInputChange}
            />
          </div>
          <div>
            <Typography variant="h5">Welcome Ahmed Zena !</Typography>
            <Typography variant="subtitle1" className={classes.userEmail}>
              Account email: ahmedzena@example.com
            </Typography>
          </div>
        </div>

        <div className={classes.homeAirport}>
          <Typography variant="subtitle1" className={classes.homeAirportLabel}>
            Home airport: &nbsp;
          </Typography>
          <Typography variant="subtitle1">
            Cairo International Airport
          </Typography>
        </div>
        <AppBar position="static" color="inherit">
          <Tabs
            value={value}
            onChange={handleTabChange}
            variant={isSmUp ? "standard" : "scrollable"}
            scrollButtons={isSmUp ? "auto" : "on"}
            aria-label="user profile tabs"
          >
            <Tab label="Dashboard" id="tab-0" aria-controls="tabpanel-0" />
            <Tab
              label="Personal Details"
              id="tab-1"
              aria-controls="tabpanel-1"
            />
            <Tab label="Preferences" id="tab-2" aria-controls="tabpanel-2" />
            <Tab label="Security" id="tab-3" aria-controls="tabpanel-3" />
            <Tab
              label="Payment Details"
              id="tab-4"
              aria-controls="tabpanel-4"
            />
            <Tab label="Notifications" id="tab-5" aria-controls="tabpanel-5" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Dashboard />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PersonalDetails />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Preferences />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Security />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <PaymentDetails />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Notifications />
        </TabPanel>
      </Box>
    </div>
  );
}
