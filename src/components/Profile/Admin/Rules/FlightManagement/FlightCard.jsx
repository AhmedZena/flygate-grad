import React from "react";
import { useState, useEffect } from "react";
// import Flights from "../../../../../dataset/Flights.json";

const FlightCard = () => {
  let [flights, setFlights] = useState([{}]);
  let [noFlights, setNoFlights] = useState(false);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://40.115.44.233:3000/api/flight", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(flights[0].length);
        setFlights(result);
      })
      .catch((error) => console.log("error", error));
  }, []);

  const handleDeleteFlight = (flightId) => {
    // Implement flight deletion logic here
    console.log(`Delete flight with ID: ${flightId}`);
  };

  const handleEditFlight = (flightId) => {
    // Implement flight editing logic here
    console.log(`Edit flight with ID: ${flightId}`);
  };

  return (
    <>
      {/* {flights is not empty  */}
      {flights[0].length > 0 &&
        flights.map((flight) => (
          <div
            className="bg-white w-4/5 mx-auto shadow rounded p-4 mb-4 transition duration-300 transform hover:scale-105"
            key={flight.id}
          >
            <h3 className="text-xl font-semibold mb-2">
              Flight Number: {flight.number}
            </h3>
            <p className="text-gray-600 mb-2">From: {flight.cityFrom}</p>
            <p className="text-gray-600 mb-2">To: {flight.cityTo}</p>
            <p className="text-gray-600 mb-2">
              Takeoff Date: {flight.takeOffDate}
            </p>
            <p className="text-gray-600 mb-2">
              Takeoff Time: {flight.takeOffTime}
            </p>
            <p className="text-gray-600 mb-2">
              Arrival Time: {flight.arrivalTime}
            </p>
            <p className="text-gray-600 mb-2">Status: {flight.status}</p>
            <p className="text-gray-600 mb-2">Price: {flight.price}</p>
            <p className="text-gray-600 mb-2">Airway: {flight.Airway}</p>

            <div className="flex justify-between mt-4">
              <button
                className="bg-red-500 hover:bg-red-600  hover:w-1/3 text-white px-4 py-2 rounded focus:outline-none"
                onClick={() => handleDeleteFlight(flight.id)}
              >
                Remove
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 hover:w-1/3 text-white px-4 py-2 rounded focus:outline-none"
                onClick={() => handleEditFlight(flight.id)}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      {/* {flights is empty  */}
      {flights[0].length === 0 && (
        <div className="bg-white w-4/5 mx-auto shadow rounded p-4 mb-4 transition duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">No flights available</h3>
        </div>
      )}
    </>
  );
};

export default FlightCard;
