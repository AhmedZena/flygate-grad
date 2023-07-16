import React from "react";
import Flights from "../Flights";
import { useState } from "react";

const ShowFlight = ({ flights }) => {
  let checkImg = function (cityTo) {
    var image = new Image();
    image.src = `./PropertyImages/${cityTo}.jpg`;

    if (image.width === 0) {
      return "./PropertyImages/city.jpg";
    } else {
      return `./PropertyImages/${cityTo}.jpg`;
    }
  };

  const [propertyDetail, setPropertyDetail] = useState([]);
  for (let i = 0; i < flights.length; i++) {
    console.log(propertyDetail);
    let src = checkImg(flights[i][5]);

    propertyDetail.push({
      id: flights[i][0],
      takeOffDate: flights[i][2],
      takeOffTime: flights[i][3],
      status: flights[i][4],
      Image: src,
      heading: flights[i][5],
      span: flights[i][6],
      amount: flights[i][7],
      bedImage: "./PropertyImages/double-bed.png",
      bath: flights[i][9],
      bathImage: "./PropertyImages/bath.png",
    });
  }
  return (
    <div>
      <h1>Flights</h1>
      {propertyDetail.map((property) => (
        <Flights key={property.id} property={property} />
      ))}
    </div>
  );
};

export default ShowFlight;
