import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import styles from "./FirstSec.module.css";
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  animatedItem: {
    animation: `$myEffect 3000ms ${theme.transitions.easing.easeInOut}`,
    fontSize: "2rem",
    color: "white",
    marginTop: "100px",
    marginLeft: "50px",
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));

function FirstSec() {
  // link to another comp
  const classes = useStyles();

  useEffect(() => {
    const img = new Image();
    img.src = "https://ychef.files.bbci.co.uk/1600x900/p018hpg1.webp";
  }, []);

  return (
    <>
      <div className={styles.firstSection}>
        <div className={clsx(classes.animatedItem, {})}>
          <h1> Find the best airline tickets deals</h1>
          <h2> Book cheap Flight and Lowest Airfares</h2>
        </div>
      </div>
    </>
  );
}

export default FirstSec;
