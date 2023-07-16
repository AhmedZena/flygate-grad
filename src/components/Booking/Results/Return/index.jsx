import React, { useState } from "react";
import flightsData from "../../../../dataset/Flights.json";
import { useMediaQuery } from "@material-ui/core";
import { useEffect } from "react";

import FourthSec from "./FourthSec";
import ThirdSec from "./ThirdSec";
import SecondSec from "./SecondSec";
import FirstSec from "./FirstSec";
import ZeroSec from "./ZeroSec";
//    flight1={flight1}
// tripType={tripType}
// departureAirport={departureAirport}
// arrivalAirport={arrivalAirport}
// departureDate={departureDate}
// returnDate={returnDate}
// numAdults={numAdults}
// numChildren={numChildren}
// classType={classType}
// flexibleDates={flexibleDates}
// title={title}
// firstName={firstName}
// lastName={lastName}
// country={country}
// email={email}
// mobile={mobile}
// childrenNames={childrenNames}
// selectedSeats={selectedSeats}
// selectedBagWeight={selectedBagWeight}
//funciton of results oneWay
function Return({
  flight1,
  tripType,
  departureAirport,
  arrivalAirport,
  departureDate,
  returnDate,
  numAdults,
  numChildren,
  classType,
  flexibleDates,
  title,
  firstName,
  lastName,
  country,
  email,
  mobile,
  childrenNames,
  selectedSeats,
  selectedBagWeight,
}) {
  //   console.log(location.state);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const cityFrom = arrivalAirport.split(" ")[0];
  const cityTo = departureAirport.split(" ")[0];

  //state for the chosenDate that the default value is the departureDate
  const [chosenDate, setChosenDate] = useState(returnDate);
  let departureDateNum = new Date(chosenDate).getTime();

  const threeDaysBefore = new Date(chosenDate);
  threeDaysBefore.setDate(threeDaysBefore.getDate() - 3);
  let threeDaysBeforeNum = threeDaysBefore.getTime();

  const threeDaysAfter = new Date(chosenDate);
  threeDaysAfter.setDate(threeDaysAfter.getDate() + 3);
  let threeDaysAfterNum = threeDaysAfter.getTime();

  if (flexibleDates) {
    flights = flightsData.filter(
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
        flight2.takeOffDate === chosenDate
    );
  }
  useEffect(() => {
    setFilteredFlights(flights);
    console.log(flights);
    console.log(filteredFlights);
  }, [chosenDate, flexibleDates]);

  //   state the filtered flights that the default value is the flights that match the cityFrom and cityTo
  const [filteredFlights, setFilteredFlights] = useState(flights);

  const [value, setValue] = useState(900);

  function handleChange(event) {
    console.log(event.target.value);
    setValue(+event.target.value);
    setFilteredFlights(
      flights.filter((flight2) => flight2.price <= +event.target.value)
    );
    console.log(flights);
    console.log(filteredFlights);
  }
  return (
    <div className="min-h-screen p-5 m-5 bg-gray-100 rounded-lg">
      <ZeroSec tripType={tripType} />
      {/* Container for the first page */}
      <FirstSec
        isMobile={isMobile}
        filteredFlights={filteredFlights}
        cityFrom={cityFrom}
        cityTo={cityTo}
      />

      {/* Container for the second page */}
      <SecondSec
        isMobile={isMobile}
        threeDaysAfterNum={threeDaysAfterNum}
        threeDaysBeforeNum={threeDaysBeforeNum}
        departureDateNum={departureDateNum}
        flexibleDates={flexibleDates}
        setChosenDate={setChosenDate}
        chosenDate={chosenDate}
      />

      {/* Container for the third page */}
      <ThirdSec
        filteredFlights={filteredFlights}
        setFilteredFlights={setFilteredFlights}
        isMobile={isMobile}
        cityFrom={cityFrom}
        cityTo={cityTo}
        flights={flights}
        handleChange={handleChange}
        value={value}
        setValue={setValue}
      />

      {/* fourth section of filter  */}
      <FourthSec
        flight1={flight1}
        filteredFlights={filteredFlights}
        isMobile={isMobile}
        tripType={tripType}
        chosenDate={chosenDate}
        returnDate={returnDate}
        numAdults={numAdults}
        classType={classType}
        numChildren={numChildren}
        flexibleDates={flexibleDates}
        arrivalAirport={arrivalAirport}
        departureAirport={departureAirport}
        departureDate={departureDate}
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
    </div>
  );
}

export default Return;
