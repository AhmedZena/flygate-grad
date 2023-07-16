import React from "react";
import FlightSearchForm from "../Booking/Searching/FlightSearchForm";
import InternationalFlights from "./InternationalFlights/InternaionalFlights";
import FAQs from "./FAQs/FAQs";
import FirstSec from "./FirstSec/FirstSec";
const Home = () => {
  console.log("Home() render");
  return (
    <>
      <FirstSec />
      <FlightSearchForm />
      <InternationalFlights />
      <FAQs />
    </>
  );
};

export default Home;
