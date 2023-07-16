import React, { useState } from "react";
import { FaExclamationCircle } from "react-icons/fa";
import airportsData from "../../../../../dataset/Airports.json";

const FlightForm = ({
  onCancel,
  formErrors,
  setFormErrors,
  handleAddFlight,
}) => {
  const [flight, setFlight] = useState({
    number: "",
    takeOffDate: "",
    takeOffTime: "",
    arrivalTime: "",
    status: "",
    cityFrom: "",
    cityTo: "",
    duration: "",
    stopNumber: "",
    AlId: "",
    price: "",
    airway: "",
  });

  //   const [formErrors, setFormErrors] = useState({});
  const [fromAirport, setFromAirport] = useState("");
  const [toAirport, setToAirport] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFlight({ ...flight, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    // Perform validation
    if (!flight.number) {
      errors.number = "Flight number is required";
    }
    if (!flight.takeOffDate) {
      errors.takeOffDate = "Take off date is required";
    }
    if (!flight.takeOffTime) {
      errors.takeOffTime = "Take off time is required";
    }
    if (!flight.arrivalTime) {
      errors.arrivalTime = "Arrival time is required";
    }
    if (!flight.status) {
      errors.status = "Status is required";
    }
    if (!flight.cityFrom) {
      errors.cityFrom = "City from is required";
    }
    if (!flight.cityTo) {
      errors.cityTo = "City to is required";
    }
    if (!flight.duration) {
      errors.duration = "Duration is required";
    }
    if (!flight.stopNumber) {
      errors.stopNumber = "Stop number is required";
    }
    if (!flight.AlId) {
      errors.AlId = "AlId is required";
    }
    if (!flight.price) {
      errors.price = "Price is required";
    }
    if (!flight.airway) {
      errors.airway = "Airway is required";
    }

    setFormErrors(errors);

    const handleFromAirportChange = (e) => {
      setFromAirport(e.target.value);
    };

    const handleToAirportChange = (e) => {
      setToAirport(e.target.value);
    };

    if (Object.keys(errors).length === 0) {
      // Submit the form or perform desired actions
      console.log("Flight submitted:", flight);
      // Reset the form
      setFlight({
        number: "",
        takeOffDate: "",
        takeOffTime: "",
        arrivalTime: "",
        status: "",
        cityFrom: "",
        cityTo: "",
        duration: "",
        stopNumber: "",
        AlId: "",
        price: "",
        airway: "",
      });
    }
  };
  const handleFromAirportChange = (e) => {
    setFromAirport(e.target.value);
  };

  const handleToAirportChange = (e) => {
    setToAirport(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 mx-auto">
      <div className="flex flex-wrap p-4 mx-2 my-4 bg-white rounded-lg shadow-md">
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Flight Number:
          </label>
          <input
            type="number"
            name="number"
            value={flight.number}
            onChange={handleInputChange}
            className={`border ${
              formErrors.number ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.number && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.number}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Take Off Date:
          </label>
          <input
            type="date"
            name="takeOffDate"
            value={flight.takeOffDate}
            onChange={handleInputChange}
            className={`border ${
              formErrors.takeOffDate ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.takeOffDate && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.takeOffDate}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Take Off Time:
          </label>
          <input
            type="time"
            name="takeOffTime"
            value={flight.takeOffTime}
            onChange={handleInputChange}
            className={`border ${
              formErrors.takeOffTime ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.takeOffTime && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.takeOffTime}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Arrival Time:
          </label>
          <input
            type="time"
            name="arrivalTime"
            value={flight.arrivalTime}
            onChange={handleInputChange}
            className={`border ${
              formErrors.arrivalTime ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.arrivalTime && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.arrivalTime}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Status:
          </label>
          <input
            type="text"
            name="status"
            value={flight.status}
            onChange={handleInputChange}
            className={`border ${
              formErrors.status ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.status && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.status}</p>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 px-2 mb-4">
          <label
            htmlFor="fromAirport"
            className="block text-gray-700 font-semibold mb-2"
          >
            From Airport:
          </label>
          <select
            id="fromAirport"
            value={fromAirport}
            onChange={handleFromAirportChange}
            className={`border ${
              formErrors.cityFrom ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          >
            <option value="">Select Airport</option>
            {airportsData.map((airport) => (
              <option key={airport.name} value={airport.name}>
                {airport.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label
            htmlFor="toAirport"
            className="block text-gray-700 font-semibold mb-2"
          >
            To Airport:
          </label>
          <select
            id="toAirport"
            value={toAirport}
            onChange={handleToAirportChange}
            className={`border ${
              formErrors.cityTo ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          >
            <option value="">Select Airport</option>
            {airportsData.map((airport) => (
              <option key={airport.name} value={airport.name}>
                {airport.name}
              </option>
            ))}
          </select>
          {formErrors.cityTo && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.cityTo}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Duration:
          </label>
          <input
            type="text"
            name="duration"
            value={flight.duration}
            onChange={handleInputChange}
            className={`border ${
              formErrors.duration ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.duration && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.duration}</p>
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Price:
          </label>
          <input
            type="number"
            name="price"
            value={flight.price}
            onChange={handleInputChange}
            className={`border ${
              formErrors.price ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.price && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.price}</p>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 px-2 mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Airway:
          </label>
          <input
            type="text"
            name="airway"
            value={flight.airway}
            onChange={handleInputChange}
            className={`border ${
              formErrors.airway ? "border-red-500" : "border-gray-300"
            } rounded px-4 py-2 focus:outline-none focus:border-blue-500 w-full`}
          />
          {formErrors.airway && (
            <div className="flex items-center mt-1">
              <FaExclamationCircle className="text-red-500 mr-1" />
              <p className="text-red-500 text-sm">{formErrors.airway}</p>
            </div>
          )}
        </div>
        <div className="w-full px-2 mb-4">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default FlightForm;
