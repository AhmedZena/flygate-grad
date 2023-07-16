import Flights from "../../../dataset/Flights.json";

let checkImg = function (cityTo) {
  var image = new Image();
  image.src = `./PropertyImages/${cityTo}.jpg`;
  //   console.log(image.src);
  //   console.log(image.width);
  if (image.width === 0) {
    return "./PropertyImages/city.jpg";
  } else {
    return `./PropertyImages/${cityTo}.jpg`;
  }
};

// convert Flights.json to array of arrays
const flights = Flights.map(
  ({
    id,
    number,
    takeOffDate,
    takeOffTime,
    status,
    cityTo,
    cityFrom,
    duration,
    stopNumber,
    AlId,
  }) => [
    id,
    number,
    takeOffDate,
    takeOffTime,
    status,
    cityTo,
    cityFrom,
    duration,
    stopNumber,
    AlId,
  ]
);

const PropertyDetail = [];
for (let i = 0; i < flights.length; i++) {
  let src = checkImg(flights[i][5]);

  PropertyDetail.push({
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
export default PropertyDetail;
