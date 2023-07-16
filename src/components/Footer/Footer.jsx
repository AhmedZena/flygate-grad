import React from "react";
import styles from "./Footer.module.css";
// use navigate to navigate to a new page
import { navigate } from "@reach/router";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.col_md_4}>
        <h4>Contact Us</h4>
        <p>Phone: 555-555-5555</p>
        <p>Email: info@yourwebsite.com</p>
        <p>Address: 123 Main St, City, State, Zip</p>
      </div>
      <div className={styles.col_md_4}>
        <h4>About Us</h4>
        <ul className={styles.aboutUsList}>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Social Responsibility</a>
          </li>
          <li>
            <a href="#">Advertise with Us</a>
          </li>
        </ul>
      </div>
      <div className={styles.col_md_4}>
        <h4>Social Media</h4>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Twitter</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
        </ul>
      </div>
      <div className={styles.links}>
        <Link to="/privacyPolicy" className={styles.linkItem}>
          privacy policy
        </Link>
        <Link
          to="/TermsAndConditions#terms-and-conditions"
          className={styles.linkItem}
        >
          terms and conditions
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
