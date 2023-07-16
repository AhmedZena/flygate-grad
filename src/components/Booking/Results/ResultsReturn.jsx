import React, { useState } from "react";
import flightsData from "../../../dataset/Flights.json";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Return from "./Return";
import { useEffect, useRef } from "react";
import FDetails from "../FlightDetails/FDetails";

function ResultsReturn() {
  // get the data from the previous page

  const location = useLocation();
  const {
    flight1,
    title,
    firstName,
    lastName,
    country,
    email,
    mobile,
    childrenNames,
    numAdults,
    classType,
    selectedSeats,
    selectedBagWeight,
    tripType,
    departureAirport,
    arrivalAirport,
    departureDate,
    returnDate,
    numChildren,
    flexibleDates,
  } = location.state;
  const { scrollTo } = location.state || {}; // Retrieve the scrollTo value from the state
  const paragraphRef = useRef(null); // Create a ref for the paragraph element

  console.log(location.state);

  const cityFrom = arrivalAirport.split(" ")[0];
  const cityTo = departureAirport.split(" ")[0];
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const navigate = useNavigate();

  console.log(cityFrom);
  console.log(cityTo);
  //make two variables that threeDaysbefore , threeDaysAfter the returnDate is in format of yyyy-mm-dd
  const threeDaysBefore = new Date(returnDate);
  threeDaysBefore.setDate(threeDaysBefore.getDate() - 3);
  const threeDaysAfter = new Date(returnDate);
  threeDaysAfter.setDate(threeDaysAfter.getDate() + 3);
  let threeDaysBeforeNum = threeDaysBefore.getTime();
  let threeDaysAfterNum = threeDaysAfter.getTime();
  let returnDateNum = new Date(returnDate).getTime();
  console.log(threeDaysBeforeNum);
  console.log(returnDateNum);
  console.log(threeDaysAfterNum);

  //   check if flexibleDates is true or false and if it is true then return flights that flexible in date 3 day before and 3 day after the departureDate
  //  if it is false then return flights that match the departureDate
  if (flexibleDates) {
    var flights = flightsData.filter(
      (flight2) =>
        flight2.cityFrom.toLowerCase() === cityFrom.toLowerCase() &&
        flight2.cityTo.toLowerCase() === cityTo.toLowerCase() &&
        new Date(flight2.takeOffDate).getTime() >= threeDaysBeforeNum &&
        new Date(flight2.takeOffDate).getTime() <= threeDaysAfterNum
    );
  } else {
    var flights = flightsData.filter(
      (flight2) =>
        flight2.cityFrom.toLowerCase() === cityFrom.toLowerCase() &&
        flight2.cityTo.toLowerCase() === cityTo.toLowerCase() &&
        flight2.takeOffDate === returnDate
    );
  }

  //   state the filtered flights that the default value is the flights that match the cityFrom and cityTo
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
    setFilteredFlights(
      flights.filter(
        (flight2) =>
          flight2.price >= newValue[0] && flight2.price <= newValue[1]
      )
    );
  };

  useEffect(() => {
    if (scrollTo && paragraphRef.current) {
      paragraphRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  return (
    <>
      <p ref={paragraphRef} id="specific-paragraph"></p>

      <FDetails
        flight1={flight1}
        tripType={tripType}
        numAdults={numAdults}
        numChildren={numChildren}
        classType={classType}
      />

      <Return
        flight1={flight1}
        tripType={tripType}
        departureAirport={departureAirport}
        arrivalAirport={arrivalAirport}
        departureDate={departureDate}
        returnDate={returnDate}
        numAdults={numAdults}
        numChildren={numChildren}
        classType={classType}
        flexibleDates={flexibleDates}
        title={title}
        firstName={firstName}
        lastName={lastName}
        country={country}
        email={email}
        mobile={mobile}
        childrenNames={childrenNames}
        selectedSeats={selectedSeats}
        selectedBagWeight={selectedBagWeight}
      />
    </>
  );
}

export default ResultsReturn;
