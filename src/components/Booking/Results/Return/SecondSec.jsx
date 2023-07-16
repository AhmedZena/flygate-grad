import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

import { useState } from "react";
const SecondSec = ({
  isMobile,
  departureDateNum,
  threeDaysBeforeNum,
  flexibleDates,
  setChosenDate,
  chosenDate,
}) => {
  //   const [chosenDate, setChosenDate] = useState(departureDate);

  const handlePrev = () => {
    //it shows the next 7 days
    setChosenDate(new Date(chosenDate).getTime() - 7 * 24 * 60 * 60 * 1000);
  };

  function handleNext() {
    setChosenDate(new Date(chosenDate).getTime() + 7 * 24 * 60 * 60 * 1000);
  }

  //make a function to handle the date click
  function handleDateClick(date) {
    console.log(date);
    const formattedDate = date.toISOString().slice(0, 10);
    console.log(formattedDate);
    setChosenDate(formattedDate);
    // Handle flight search for flights around selected date
  }
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isMobile ? 'w-full ' : 'w-1/2 text-sm'  }">
        <div className="flex items-center justify-between mt-4 ${isMobile ? 'w-full' : 'w-1/2'  }">
          <button
            className="text-gray-700 bg-gray-100 px-4 py-2 border rounded-l-lg hover:bg-blue-500 hover:text-white"
            onClick={handlePrev}
          >
            <ArrowLeftIcon className="h-5 w-5 " />
          </button>
          <div
            className={`flex items-center mx-1 
      ${isMobile ? "space-x-2 overflow-x-scroll text-sm" : "justify-center"}`}
          >
            {[...Array(7)].map((_, index) => {
              const date = new Date(
                threeDaysBeforeNum + index * 24 * 60 * 60 * 1000
              );
              {
                /* show name of the day */
              }
              const dateString = `${date.toLocaleString("en-us", {
                weekday: "short",
              })} ${date.getDate()}/${date.getMonth() + 1}`;
              return (
                <>
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-xl h-full 
              ${
                date.getTime() === departureDateNum
                  ? "w-1/3 bg-blue-700 text-white font-bold hover:bg-blue-500 hover:text-white h-full p-0"
                  : date.getTime() === departureDateNum + 24 * 60 * 60 * 1000 ||
                    date.getTime() === departureDateNum - 24 * 60 * 60 * 1000
                  ? `  hover:bg-blue-600 hover:text-white ${
                      flexibleDates
                        ? "bg-blue-400 text-purple-100"
                        : "bg-gray-300 text-gray-800"
                    }`
                  : date.getTime() ===
                      departureDateNum + 24 * 60 * 60 * 1000 * 2 ||
                    date.getTime() ===
                      departureDateNum - 24 * 60 * 60 * 1000 * 2
                  ? ` hover:bg-blue-600 hover:text-white ${
                      flexibleDates
                        ? "bg-blue-300 text-purple-100"
                        : "bg-gray-300 text-gray-800"
                    }`
                  : date.getTime() ===
                      departureDateNum + 24 * 60 * 60 * 1000 * 3 ||
                    date.getTime() ===
                      departureDateNum - 24 * 60 * 60 * 1000 * 3
                  ? ` hover:bg-blue-600 hover:text-white ${
                      flexibleDates
                        ? "bg-blue-200 text-purple-100"
                        : "bg-gray-300 text-gray-800"
                    }`
                  : `bg-gray-100 text-gray-400 ${
                      isMobile ? "w-1/3" : ""
                    } hover:bg-blue-300 hover:text-white`
              }`}
                    onClick={() => handleDateClick(date)}
                  >
                    {dateString}
                  </button>
                </>
              );
            })}
          </div>
          <button
            onClick={handleNext}
            className="text-gray-700 bg-gray-100 px-4 py-2 border rounded-r-lg hover:bg-blue-500 hover:text-white"
          >
            <ArrowRightIcon className="h-5 w-5 mr-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default SecondSec;
