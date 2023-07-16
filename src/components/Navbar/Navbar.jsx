import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  Typography,
  Button,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";
import { useEffect } from "react";
import { Language, Menu as MenuIcon } from "@material-ui/icons";
// import classes from "./Navbar.module.css";
import logo from "../../assets/pics/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const screenSize = useMediaQuery("(max-width:600px)");
  const [userToken, setUserToken] = useState(null); // State to hold the user token
  useEffect(() => {
    setInterval(() => {
      const token = localStorage.getItem("userToken");
      setUserToken(token);
    }, 5000);
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="logo" className=" h-8 w-8 mr-2" />
          <Typography
            variant="h6"
            style={{ flexGrow: 1 }}
            className="font-serif text-2xl"
          >
            Flygate
          </Typography>
          <Hidden xsDown>
            <Button color="inherit" component={Link} to="/" exact="true">
              Home
            </Button>

            <Button color="inherit" component={Link} to="/flights">
              Flights
            </Button>

            {/* if userToken null show login */}
            {!userToken && (
              <Button color="inherit" component={Link} to="/login">
                Login/Signup
              </Button>
            )}

            {userToken && ( // Conditionally render the "Profile" button if userToken exists
              <Button color="inherit" component={Link} to="/Profile">
                Profile
              </Button>
            )}
            {/* <Button color="inherit" component={Link} to="/admin-dashboard">
              Admin
            </Button> */}
            <IconButton onClick={handleClick}>
              <Language />
            </IconButton>
            <Button
              color="secondary"
              variant="contained"
              component={Link}
              to="/FlightSearchForm"
            >
              Booking
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>English</MenuItem>
              <MenuItem onClick={handleClose}>Arabic</MenuItem>
            </Menu>
          </Hidden>
          {screenSize && (
            <IconButton onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {screenSize && (
        <Drawer
          open={drawerOpen}
          onClose={toggleDrawer(false)}
          anchor="right"
          transitionDuration={500}
          PaperProps={{ style: { height: "60%", borderRadius: "10px" } }}
        >
          <List>
            <ListItem>
              <Button
                fullWidth
                onClick={toggleDrawer(false)}
                component={Link}
                to="/"
                exact="true"
              >
                Home
              </Button>
            </ListItem>

            <ListItem>
              <Button
                fullWidth
                onClick={toggleDrawer(false)}
                component={Link}
                to="/Profile"
                exact="true"
              >
                Profile
              </Button>
            </ListItem>

            <ListItem>
              <Button
                color="inherit"
                fullWidth
                onClick={toggleDrawer(false)}
                component={Link}
                to="/flights"
              >
                Flights
              </Button>
            </ListItem>
            <ListItem>
              <Button
                color="inherit"
                fullWidth
                onClick={toggleDrawer(false)}
                component={Link}
                to="/login"
              >
                Login/Signup
              </Button>
            </ListItem>
            <ListItem>
              <IconButton onClick={handleClick}>
                <Language />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>English</MenuItem>
                <MenuItem onClick={handleClose}>Arabic</MenuItem>
              </Menu>
            </ListItem>
            <ListItem>
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                onClick={toggleDrawer(false)}
                component={Link}
                to="/FlightSearchForm"
              >
                Booking
              </Button>
            </ListItem>
          </List>
        </Drawer>
      )}
    </>
  );
};

export default Navbar;
