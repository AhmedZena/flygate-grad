import React from "react";
import planePic from "../../../../assets/icons/airplane.png";
import { useNavigate } from "react-router-dom";
import Airways from "../Airways/Airways";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";

const FourthSec = ({
  filteredFlights,
  isMobile,
  tripType,
  departureAirport,
  arrivalAirport,
  departureDate,
  returnDate,
  numAdults,
  numChildren,
  classType,
  flexibleDates,
}) => {
  const navigate = useNavigate();
  //   make a function to handle the button click book now , if trip type is one way then it will go to payment page else it will go to FlightResults2 to select the return flight1
  const handleBookNow = (flight1) => {
    console.log(flight1);

    navigate("/FlightDetails", {
      state: {
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
      },
    });
  };

  return (
    <>
      {/* fourth section of filter  */}
      <div className="grid grid-cols-1  gap-10">
        {filteredFlights.length > 0 ? (
          filteredFlights.map((flight1) => (
            <div
              key={flight1.id}
              className={`flex ${isMobile ? "flex-col" : "flex-row"}`}
            >
              {console.log(flight1)}
              {/* flight1 details on left  */}
              <div
                className={`rounded-lg p-5  bg-white shadow-blue-100 shadow-lg item-center ${
                  isMobile ? "mb-1" : "mr-2"
                } `}
              >
                <div className="flex justify-between items-center my-4 mx-2">
                  <h4 className="text-center font-bold text-blue-700">
                    Flight Number:
                  </h4>
                  <p className="text-center font-medium ml-2 text-blue-800 text-lg">
                    {flight1.flight_number}
                  </p>
                </div>
                <div className="flex items-center mb-1 text-center">
                  <p className="text-center font-medium mt-8 text-blue-800 text-lg mr-2">
                    {flight1.airline_name} Airways
                  </p>
                  <Airways airway={flight1.airline_name} />
                </div>
              </div>

              {/*flight1 details on right  */}
              <div className="flex-1 rounded-lg p-6 h-full bg-white shadow-blue-100 shadow-lg ">
                <div className="flex items-center mb-5 text-cyan-700 justify-center">
                  {/* <p className="text-base font-bold mr-2">Departure Date:</p> */}
                  <p className="text-xl font-bold ">{flight1.take_off_date}</p>
                </div>
                <div className="flex items-center mb-1">
                  <LocalAirportIcon className="text-blue-400 mr-2" />
                  <p className="text-base font-medium mr-2">
                    {flight1.airportFrom}
                  </p>
                  <div className="flex-grow object-cover animate-move-left-right h-1px">
                    <img
                      src={planePic}
                      alt="flight1"
                      className={`h-10 w-200 `}
                    />
                    <div className="flex-grow  bg-gray-300"></div>
                  </div>

                  <LocalAirportIcon className="text-blue-400 mr-2 transform rotate-180" />
                  <p className="text-base font-medium mr-8 ">
                    {flight1.airportTo}
                  </p>
                </div>

                {/* section for departure time and duration  and arrival */}
                <div className="flex items-center justify-between mt-10">
                  <div className="flex items-center">
                    <FlightTakeoffIcon className="text-blue-700 mr-2" />
                    {/* departure time */}
                    <p className="text-base font-medium">
                      {flight1.take_off_time.split(":")[0]}:{" "}
                      {flight1.take_off_time.split(":")[1]}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <AccessTimeIcon className="text-blue-700 mr-2" />
                    {/* duration */}
                    <p className="text-base font-medium mx-2">
                      {flight1.duration.split(":")[0]} h &nbsp;
                      {flight1.duration.split(":")[1]} m
                    </p>
                  </div>
                  <div className="flex items-center">
                    <FlightLandIcon className="text-blue-700 mr-2" />
                    {/* arrival time */}
                    <p className="text-base font-medium mr-8">
                      {flight1.landing.split(" ")[1].split(":")[0]}:{" "}
                      {flight1.landing.split(" ")[1].split(":")[1]}
                    </p>
                  </div>
                </div>

                {/* section for price and book now button  */}
                <div className="flex justify-between mt-10">
                  <div className="flex items-center mb-1">
                    <MonetizationOnOutlinedIcon className="text-blue-500 mr-2 " />
                    <p className="text-base font-bold ">Price:</p>
                    <p className="text-base font-medium ml-2">
                      {flight1.classes[0].price} EGP
                    </p>
                  </div>

                  <div className="flex items-center mb-1">
                    <DoubleArrowOutlinedIcon className="text-blue-700 mr-2 " />
                    <button
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-all duration-300 text-lg"
                      onClick={() => handleBookNow(flight1)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3">
            <p className="text-base font-medium">
              No flights available for the selected criteria.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FourthSec;
