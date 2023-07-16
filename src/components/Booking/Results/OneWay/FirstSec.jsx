import React from "react";
import FlightIcon from "@mui/icons-material/Flight";
import Typography from "@mui/material/Typography";

const FirstSec = ({ cityFrom, cityTo, filteredFlights, isMobile }) => {
  return (
    <>
      <div
        className={`bg-white rounded-lg p-4 m-4 shadow-md max-w mx-auto ${
          isMobile ? "w-7/8" : "w-4/5"
        }`}
      >
        <div className="flex items-center justify-between">
          <h5 className="mb-2 bg-center bg-no-repeat bg-contain text-3xl font-bold text-blue-800">
            {filteredFlights.length} Flights Found
          </h5>
          <div
            className={`justify-center items-center ${
              isMobile ? "block" : "flex w-1/2"
            }`}
          >
            <Typography variant="subtitle1" className=" w-1/5">
              <span className="font-bold">{cityFrom}</span>
            </Typography>
            <div
              className={` ${
                isMobile ? "" : "flex-grow  border-dashed border-gray-300"
              }`}
            ></div>
            <div className="transform rotate-90">
              <FlightIcon
                className={`m-2 text-blue-500 animate-pulse opacity-0 hover:opacity-100  ${
                  isMobile ? "w-20 h-20 transform rotate-90" : "w-20 h-20"
                } `}
              />
            </div>
            <div
              className={` ${
                isMobile ? "" : "flex-grow  border-dashed border-gray-300"
              }`}
            ></div>
            <Typography variant="subtitle1" className="ml-5  w-1/5">
              <span className="font-bold">{cityTo}</span>
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSec;
