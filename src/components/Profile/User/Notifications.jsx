import React, { useState } from "react";

function Notifications() {
  const [travelHackerTips, setTravelHackerTips] = useState(true);
  const [specialOffers, setSpecialOffers] = useState(true);
  const [greatGetaways, setGreatGetaways] = useState(true);
  const [moneyBackNotifications, setMoneyBackNotifications] = useState(true);
  const [opinionCounts, setOpinionCounts] = useState(true);
  const [travelAlerts, setTravelAlerts] = useState(true);
  const [personalizedRecommendations, setPersonalizedRecommendations] =
    useState(true);
  const [realTimePrices, setRealTimePrices] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(false);

  const handleToggle = (state, setState) => {
    setState(!state);
  };

  return (
    <div>
      <h2>Email Preferences</h2>
      <p>We'll send the selected emails to ahmedzena53@gmail.com.</p>
      <label>
        <input
          type="checkbox"
          checked={travelHackerTips}
          onChange={() => handleToggle(travelHackerTips, setTravelHackerTips)}
        />{" "}
        Travel Hacker Tips
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={specialOffers}
          onChange={() => handleToggle(specialOffers, setSpecialOffers)}
        />{" "}
        Special Offers
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={greatGetaways}
          onChange={() => handleToggle(greatGetaways, setGreatGetaways)}
        />{" "}
        Great Getaways
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={moneyBackNotifications}
          onChange={() =>
            handleToggle(moneyBackNotifications, setMoneyBackNotifications)
          }
        />{" "}
        Money-Back Notifications
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={opinionCounts}
          onChange={() => handleToggle(opinionCounts, setOpinionCounts)}
        />{" "}
        Your Opinion Counts
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={travelAlerts}
          onChange={() => handleToggle(travelAlerts, setTravelAlerts)}
        />{" "}
        Travel Alerts
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={personalizedRecommendations}
          onChange={() =>
            handleToggle(
              personalizedRecommendations,
              setPersonalizedRecommendations
            )
          }
        />{" "}
        Personalized Recommendations
      </label>
      <br />
      <br />
      <h2>Trips Notifications</h2>
      <label>
        <input
          type="checkbox"
          checked={realTimePrices}
          onChange={() => handleToggle(realTimePrices, setRealTimePrices)}
        />{" "}
        Real-Time Prices
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={emailAlerts}
          onChange={() => handleToggle(emailAlerts, setEmailAlerts)}
        />{" "}
        Email (all alerts)
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          checked={smsAlerts}
          onChange={() => handleToggle(smsAlerts, setSmsAlerts)}
        />{" "}
        SMS (flight status only)
      </label>
      <br />
      <br />
      <h2>Trips Calendar Feed</h2>
      <p>This feed address shows all your Trips</p>
    </div>
  );
}

export default Notifications;
