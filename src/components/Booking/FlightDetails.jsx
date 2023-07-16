import { useLocation } from "react-router-dom";
import AskSignIn from "./FlightDetails/AskSignIn";
import FDetails from "./FlightDetails/FDetails";
import PassengerDetails from "./Steps/PassengerDetails";

//function to display flight details
function FlightDetails({}) {
  const location = useLocation();
  console.log(location.state);
  const {
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
  } = location.state;

  return (
    <>
      <FDetails
        flight1={flight1}
        tripType={tripType}
        numAdults={numAdults}
        numChildren={numChildren}
        classType={classType}
      />

      {/* section for ask sign in if not signed in  */}
      <AskSignIn />

      {/* section for Enter Passenger Details  */}
      <PassengerDetails
        flight1={flight1}
        tripType={tripType}
        numAdults={numAdults}
        numChildren={numChildren}
        classType={classType}
        departureAirport={departureAirport}
        arrivalAirport={arrivalAirport}
        departureDate={departureDate}
        returnDate={returnDate}
        flexibleDates={flexibleDates}
      />
    </>
  );
}

export default FlightDetails;
