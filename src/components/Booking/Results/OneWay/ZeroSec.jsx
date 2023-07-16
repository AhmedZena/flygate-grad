import React from "react";

function ZeroSec({ tripType }) {
  return (
    <>
      <h2 className=" text-center">
        <span className="text-blue-900 text-3xl font-bold">
          {tripType === "oneWay" ? "One Way Trip" : "Round Trip"}
        </span>
        <span className="text-blue-500 text-2xl">
          : choose your departure flight
        </span>
      </h2>
    </>
  );
}

export default ZeroSec;
