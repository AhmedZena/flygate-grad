import React, { useState } from "react";
import flightsData from "../../../dataset/Flights.json";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "@material-ui/core";

import FourthSec from "./OneWay/FourthSec";
import ThirdSec from "./OneWay/ThirdSec";
import SecondSec from "./OneWay/SecondSec";
import { useEffect } from "react";
import FirstSec from "./OneWay/FirstSec";
import ZeroSec from "./OneWay/ZeroSec";

//funciton of results oneWay
function ResultsOneWay() {
  // get the data from the previous page
  const location = useLocation();
  const {
    flights,
    tripType,
    departureAirport,
    arrivalAirport,
    departureDate,
    returnDate,
    numAdults,
    numChildren,
    classType,
    flexibleDates,
  } = location.state;
  console.log(location.state);
  const isMobile = useMediaQuery("(max-width: 640px)");
  const [filteredFlights, setFilteredFlights] = useState(flights);
  const cityTo = arrivalAirport;
  const cityFrom = departureAirport;

  //state for the chosenDate that the default value is the departureDate
  const [chosenDate, setChosenDate] = useState(departureDate);
  let departureDateNum = new Date(chosenDate).getTime();

  const threeDaysBefore = new Date(chosenDate);
  threeDaysBefore.setDate(threeDaysBefore.getDate() - 3);
  let threeDaysBeforeNum = threeDaysBefore.getTime();

  const threeDaysAfter = new Date(chosenDate);
  threeDaysAfter.setDate(threeDaysAfter.getDate() + 3);
  let threeDaysAfterNum = threeDaysAfter.getTime();

  //   if (flexibleDates) {
  //     flights = flightsData.filter(
  //       (flight) =>
  //         flight.cityFrom.toLowerCase() === cityFrom.toLowerCase() &&
  //         flight.cityTo.toLowerCase() === cityTo.toLowerCase() &&
  //         new Date(flight.takeOffDate).getTime() >= threeDaysBeforeNum &&
  //         new Date(flight.takeOffDate).getTime() <= threeDaysAfterNum
  //     );
  //   } else {
  //     var flights = flightsData.filter(
  //       (flight) =>
  //         flight.cityFrom.toLowerCase() === cityFrom.toLowerCase() &&
  //         flight.cityTo.toLowerCase() === cityTo.toLowerCase() &&
  //         flight.takeOffDate === chosenDate
  //     );
  //   }
  //   useEffect(() => {
  //     setFilteredFlights(flights);
  //     // console.log(flights);
  //     // console.log(filteredFlights);
  //   }, [chosenDate, flexibleDates]);

  //   state the filtered flights that the default value is the flights that match the cityFrom and cityTo

  const [value, setValue] = useState(900);

  function handleChange(event) {
    console.log(event.target.value);
    setValue(+event.target.value);
    setFilteredFlights(
      flights.filter((flight) => flight.price <= +event.target.value)
    );
    console.log(flights);
    console.log(filteredFlights);
  }
  return (
    <div className="min-h-screen p-5 m-5 bg-gray-100 rounded-lg">
      <ZeroSec tripType={tripType} />
      <FirstSec
        isMobile={isMobile}
        filteredFlights={filteredFlights}
        cityFrom={cityFrom}
        cityTo={cityTo}
      />

      <SecondSec
        isMobile={isMobile}
        threeDaysAfterNum={threeDaysAfterNum}
        threeDaysBeforeNum={threeDaysBeforeNum}
        departureDateNum={departureDateNum}
        flexibleDates={flexibleDates}
        setChosenDate={setChosenDate}
        chosenDate={chosenDate}
      />

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

      <FourthSec
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
      />
    </div>
  );
}

export default ResultsOneWay;
