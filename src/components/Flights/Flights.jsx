import React, { Fragment, useState } from "react";
import PropertyDetail from "./Property/PropertyDetail";
import styles from "./Flights.module.css";

const Flights = () => {
  console.log(PropertyDetail);
  const [detail, setDetail] = useState(PropertyDetail);

  return (
    <Fragment>
      <section className={styles.property}>
        <div className={styles.center}>
          <h3>Flights</h3>
        </div>
        <div className={styles.row}>
          {detail.map((detail) => {
            return (
              <div className={styles.column} key={detail.id}>
                <div className={styles["single-property"]}>
                  <div className={styles.card}>
                    <div className={styles["property-thumb"]}>
                      <div className={styles["property-tag"]}>
                        {detail.status}
                      </div>
                      <img src={detail.Image} alt="Palace" />
                    </div>
                    <div className={styles["property-content"]}>
                      <h4>{detail.heading}</h4>
                      <div className={styles.mark}>
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{detail.span}</span>
                      </div>
                      <span className={styles.amount}>{detail.amount}</span>
                    </div>
                    <div className={styles["property-footer"]}>
                      <ul>
                        <li>
                          <span>{detail.takeOffDate}</span>
                        </li>
                        <li>
                          <img src={detail.bedImage} alt="bed" />
                          <span>{detail.takeOffTime}</span>
                        </li>
                        <li>
                          <img src={detail.bathImage} alt="bath" />
                          <span>{detail.bath}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Fragment>
  );
};

export default Flights;
