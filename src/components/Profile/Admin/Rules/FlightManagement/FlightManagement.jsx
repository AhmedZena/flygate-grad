import React, { useEffect, useState } from "react";
import FlightForm from "./FlightForm";
import FlightCard from "./FlightCard";

const FlightManagement = () => {
  const [flights, setFlights] = useState([{}]);
  const [showFlights, setShowFlights] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  console.log(flights);

  // useEffect(() => {
  // const getFlights = async () => {
  //     const response = await fetch("http://localhost:5000/flights");
  //     const data = await response.json();

  const [showAddFlightForm, setShowAddFlightForm] = useState(false);
  const toggleFlightVisibility = () => {
    setShowFlights(!showFlights);
  };

  const toggleAddFlightForm = () => {
    setShowAddFlightForm(!showAddFlightForm);
  };

  const handleAddFlight = (flight) => {
    setFlights([...flights, flight]);
  };

  const handleEditFlight = (flightIndex, updatedFlight) => {
    const updatedFlights = [...flights];
    updatedFlights[flightIndex] = updatedFlight;
    setFlights(updatedFlights);
  };

  const handleRemoveFlight = (flightIndex) => {
    const updatedFlights = [...flights];
    updatedFlights.splice(flightIndex, 1);
    setFlights(updatedFlights);
  };

  return (
    <>
      {console.log("flights", flights)}
      <div className="container mx-auto p-4 ">
        <h2 className="flex justify-center  text-3xl font-semibold m-8">
          Flight Management
        </h2>
        <div className="addingUser flex justify-between items-center  my-18 bg-sky-500 p-4 rounded-lg ">
          <h2 className="text-xl font-semibold ">Add New Flight</h2>
          {!showAddFlightForm && (
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-2xl"
              onClick={toggleAddFlightForm}
            >
              Add New Flight
            </button>
          )}
        </div>
        {showAddFlightForm && (
          <FlightForm
            handleAddFlight={handleAddFlight}
            oncancel={toggleAddFlightForm}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
        )}
        <div className=" flex justify-between items-center my-10 bg-blue-400 p-4 rounded-lg ">
          <h2 className="text-xl font-semibold  ">Flights</h2>

          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded "
            onClick={toggleFlightVisibility}
          >
            {showFlights ? "Hide Flights" : "Show Flights"}
          </button>
        </div>
        {showFlights && (
          <div>
            {flights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FlightManagement;
