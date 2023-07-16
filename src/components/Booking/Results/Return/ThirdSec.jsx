import React from "react";
import { useState } from "react";
import flightsData from "../../../../dataset/Flights.json";

const ThirdSec = ({
  filteredFlights,
  isMobile,
  setFilteredFlights,
  cityFrom,
  cityTo,
  flights,
  handleChange,
  value,
}) => {
  const handleSortChange = (event) => {
    const sortBy = event.target.value;
    switch (sortBy) {
      case "price-asc":
        setFilteredFlights(
          [...filteredFlights].sort((a, b) => a.price - b.price)
        );
        break;
      case "price-desc":
        setFilteredFlights(
          [...filteredFlights].sort((a, b) => b.price - a.price)
        );
        break;
      case "ret-time-asc":
        setFilteredFlights(
          [...filteredFlights].sort(
            (a, b) =>
              new Date(`${a.takeOffDate} ${a.takeOffTime}`) -
              new Date(`${b.takeOffDate} ${b.takeOffTime}`)
          )
        );
        break;
      case "ret-time-desc":
        setFilteredFlights(
          [...filteredFlights].sort(
            (a, b) =>
              new Date(`${b.takeOffDate} ${b.takeOffTime}`) -
              new Date(`${a.takeOffDate} ${a.takeOffTime}`)
          )
        );
        break;

      default:
        setFilteredFlights(
          flightsData.filter(
            (flight) =>
              flight.cityFrom.toLowerCase() === cityFrom.toLowerCase() &&
              flight.cityTo.toLowerCase() === cityTo.toLowerCase()
          )
        );
    }
  };
  //   const [value, setValue] = useState(900);

  return (
    <>
      <div
        className={`bg-white rounded-lg p-4 m-8 shadow-md  mx-auto h-1/2 ${
          isMobile ? "w-8/10" : "w-4/5"
        }`}
      >
        <h2 className="text-center text-2xl">Filters</h2>
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex flex-col justify-center items-center w-1/2 ">
            <div className="flex items-center justify-between w-3/4">
              <p className="text-center text-indigo-900 text-lg">Price Range</p>
              <p className="text-center ml-2">{value} EGP</p>
            </div>
            <input
              type="range"
              id="range"
              name="range"
              min="0"
              max="1000"
              className="w-3/4 appearance-none h-4 rounded-full bg-gray-300 focus:outline-none focus:bg-blue-500 transition-colors duration-300 mt-4"
              value={value}
              onChange={handleChange}
              step={50}
            />
          </div>
          <div className="relative inline-flex flex-col items-center md:flex-row">
            <label className="text-black text-sm font-medium mb-2 md:mb-0 md:mr-2">
              Sort By:
            </label>
            <select
              className="w-full md:w-auto rounded-lg px-3 py-2 bg-white text-black appearance-none transition duration-500 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onChange={handleSortChange}
            >
              <option value="">None</option>
              <option value="price-asc">Price - Low to High</option>
              <option value="price-desc">Price - High to Low</option>
              <option value="ret-time-asc">
                Return Time - Earliest to Latest
              </option>
              <option value="ret-time-desc">
                Return Time - Latest to Earliest
              </option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400 dark:text-gray-200"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 10L10 13L13 10"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSec;
