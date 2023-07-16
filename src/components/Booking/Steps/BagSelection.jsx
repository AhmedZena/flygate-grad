import React from "react";
import { useState } from "react";
const BagSelection = ({
  selectedBagWeight,
  handleBagWeightChange,
  extraBuggagePrice,
}) => {
  return (
    <div
      className="flex flex-row items-center  
      m-8 justify-around bg-white dark:bg-gray-800 shadow-md rounded-lg p-4
      mb-40
    "
    >
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 ">
        Additional Baggage
      </h2>

      <p className="text-gray-600 dark:text-gray-400  m-2">
        <span className="font-semibold">Notes:</span> 1 bag is 23 kg and a hand
        bag 7 kg allowed
        <p className="font-semibold">
          if additional bag is required please know that
          <span className="text-red-500"> extra charges apply</span>
        </p>
      </p>

      <p className="text-gray-600 dark:text-gray-400 ">
        23 kg bag + 7kg hand bag
      </p>

      <p className="text-gray-600 dark:text-gray-100 ">Extra Baggage:</p>
      <select
        value={selectedBagWeight}
        onChange={handleBagWeightChange}
        className="
        
      
        bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-300 ease-in-out"
      >
        <option value={15}>
          1X bag (15kg) , fee: 15 x {extraBuggagePrice}={" "}
          {15 * extraBuggagePrice} EGP
        </option>
        <option value={20}>
          1X bag (20kg) , fee: 20 x {extraBuggagePrice}={" "}
          {20 * extraBuggagePrice} EGP
        </option>
        <option value={25}>
          1X bag (25kg) , fee: 25 x {extraBuggagePrice}={" "}
          {25 * extraBuggagePrice} EGP
        </option>
        <option value={30}>
          1X bag (30kg) , fee: 30 x {extraBuggagePrice}={" "}
          {30 * extraBuggagePrice} EGP
        </option>
      </select>
    </div>
  );
};

export default BagSelection;
