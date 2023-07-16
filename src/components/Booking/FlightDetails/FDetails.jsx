import React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FDetails = ({
  flight1,
  flight2 = {},
  tripType,
  numAdults,
  numChildren,
  classType,
}) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="p-4 m-6 rounded-lg shadow-md bg-white">
        <div className="flex justify-between items-center mb-4 ml-4">
          <h1 className="text-2xl font-bold">
            Flight Details
            <span className="text-gray-400 text-lg ml-2">
              ( {tripType === "oneWay" ? "One Way" : "Round Trip"} )
            </span>
          </h1>
          <button
            onClick={toggleExpansion}
            className="flex items-center space-x-1 text-gray-400 hover:text-gray-600 bg-white text-sm  transition duration-400"
          >
            <span>{isExpanded ? "Hide" : "Show"} Details</span>
            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>
              &#9650;
            </motion.span>
          </button>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <div className="space-y-2 mx-4">
              {flight1 &&
                typeof flight1 === "object" &&
                Object.keys(flight1).length > 0 && (
                  <>
                    {tripType === "oneWay" ? (
                      ""
                    ) : (
                      <p className="text-blue-500 text-xl font-bold ml-4">
                        Your departure flight is:
                      </p>
                    )}
                    <div className="flex justify-between px-4">
                      <p className="text-gray-600 text-xl">
                        {flight1.airportFrom}
                      </p>
                      <p className="text-gray-600 text-xl">
                        {flight1.airportTo}
                      </p>
                    </div>

                    <div className="flex justify-between px-4">
                      <p className="text-gray-600">{flight1.take_off_date}</p>
                      <p className="text-gray-600">
                        {flight1.landing.split(" ")[0]}
                      </p>
                    </div>

                    <div className="flex justify-between px-4">
                      <p className="text-gray-600 ">{flight1.take_off_time}</p>
                      <p className="text-gray-600">{flight1.duration}</p>
                      <p className="text-gray-600">
                        {flight1.landing.split(" ")[1]}
                      </p>
                    </div>

                    <div className="flex justify-between px-4">
                      <p className="text-gray-600">{numAdults} Adults</p>
                      <p className="text-gray-600 w-1">
                        {flight1.classes[0].class_type}
                      </p>
                      <p className="text-gray-600">{numChildren} Children</p>
                    </div>
                    {flight2.length === undefined && (
                      <div className="flex items-center space-x-2 justify-center ">
                        <p className="text-gray-600 mt-8">
                          Price: {flight1.classes[0].price} EGP
                        </p>
                      </div>
                    )}
                  </>
                )}

              {flight2 &&
                typeof flight2 === "object" &&
                Object.keys(flight2).length > 0 && (
                  <>
                    {tripType === "oneWay" ? (
                      ""
                    ) : (
                      <p className="text-blue-500 text-xl font-bold ml-4 ">
                        Your return flight is:
                      </p>
                    )}
                    <div className="flex justify-between px-4">
                      <p className="text-gray-600 text-xl">
                        {flight2.cityFrom}
                      </p>
                      <p className="text-gray-600 text-xl">{flight2.cityTo}</p>
                    </div>

                    <div className="flex justify-between px-4">
                      <p className="text-gray-600">{flight2.takeOffDate}</p>
                      <p className="text-gray-600">{classType}</p>
                    </div>

                    <div className="flex justify-between px-4">
                      <p className="text-gray-600">{flight2.takeOffTime}</p>
                      <p className="text-gray-600">{flight2.duration}</p>
                      <p className="text-gray-600">{flight2.arrivalTime}</p>
                    </div>

                    <div className="flex justify-between px-4">
                      <p className="text-gray-600">{numAdults} Adults</p>
                      <p className="text-gray-600">{numChildren} Children</p>
                    </div>

                    {/* section for total price */}
                    <div className="flex items-center space-x-2 justify-center">
                      <p className="text-blue-600 mt-8 font-bold">
                        <span className="text-blue-800 font-bold">
                          Total Price:{" "}
                        </span>
                        {flight1.price} + {flight2.price} ={" "}
                        <span className="text-blue-700 font-bold">
                          {flight1.price + flight2.price} EGP
                        </span>
                      </p>
                    </div>
                  </>
                )}
            </div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default FDetails;
