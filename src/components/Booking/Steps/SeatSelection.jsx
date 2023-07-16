import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SeatSelection.css";
import BagSelection from "./BagSelection";
import FDetails from "../FlightDetails/FDetails";

//make notifcation by react toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SeatSelection = () => {
  const location = useLocation();
  const {
    flight1,
    childsIds,
    clientsIds,
    numAdults,
    numChildren = 0,
    tripType,
    classType,
    departureAirport,
    arrivalAirport,
    departureDate,
    returnDate,
    flexibleDates,
  } = location.state;

  //   console.log(flight1);
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedBagWeight, setSelectedBagWeight] = useState(20); // Default bag weight
  const [seatData, setSeatData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("http://40.115.44.233:3000/api/flight/class-seats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: flight1.classes[0].class_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);

        data.sort((a, b) => {
          const seatNumberA = parseInt(a.seat_no); // Extract the seat number as an integer
          const seatNumberB = parseInt(b.seat_no);

          // Compare the seat numbers
          if (seatNumberA !== seatNumberB) {
            return seatNumberA - seatNumberB; // Sort numerically
          } else {
            // If the seat numbers are equal, compare the letter part (e.g., "A", "B")
            return a.seat_no.localeCompare(b.seat_no);
          }
        });

        setSeatData(data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [flight1.classes]);

  const handleSeatSelection = (seatId) => {
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatId));
    } else if (selectedSeats.length < numAdults + numChildren) {
      setSelectedSeats([...selectedSeats, seatId]);
    }
  };

  const handleBagWeightChange = (event) => {
    setSelectedBagWeight(parseInt(event.target.value));
  };

  const handleSubmit = () => {
    console.log("Selected seats:", selectedSeats);
    console.log("Selected bag weight:", selectedBagWeight);

    const requestData = {
      seats: selectedSeats,
      users: [
        {
          childs: childsIds,
          clients: clientsIds,
        },
      ],
    };
    // const requestData = {
    //   seats: [
    //     "b92001cf-d88e-4c90-b75f-e68f74e41d0d",
    //     "4d637f81-b22e-40ec-ba7b-f40adadc6d39",
    //   ],
    //   users: [
    //     {
    //       clients: ["30070f29-407c-4698-87c3-6d87cd0d29a5"],
    //       childs: ["1d3c11b9-4a86-4981-a70c-682045d37974"],
    //     },
    //   ],
    // };

    console.log(requestData);
    setIsLoading(true);
    fetch("http://40.115.44.233:3000/api/flight/reserve-seats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log(data);
        console.log("ticket id is", data[0].ticket);
        toast.success("Seats reserved successfully");
        if (tripType === "oneWay") {
          //   navigate("/Payment", {
          //     state: {
          //       flight1,
          //       numAdults,
          //       tripType,
          //       classType,
          //       selectedSeats,
          //       selectedBagWeight,
          //     },
          //   });

          navigate("/Ticket", {
            state: {
              ticketNum: data[0].ticket,
              payed: false,
              selectedBagWeight,
            },
          });
        } else {
          navigate("/ResultsReturn", {
            state: {
              flight1,
              clientsIds,
              childsIds,
              numAdults,
              numChildren,
              tripType,
              classType,
              selectedSeats,
              selectedBagWeight,
              departureAirport,
              arrivalAirport,
              departureDate,
              returnDate,
              flexibleDates,
            },
          });
        }
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <FDetails
        flight1={flight1}
        tripType={tripType}
        numAdults={numAdults}
        numChildren={numChildren}
        classType={classType}
      />

      <BagSelection
        selectedBagWeight={selectedBagWeight}
        handleBagWeightChange={handleBagWeightChange}
        extraBuggagePrice={flight1.classes[0].extra_luggage_price}
      />

      <div className="plane">
        <div className="cockpit">
          <h2>Please select {numAdults + numChildren} seat(s)</h2>
        </div>
        <div className="exit exit--front fuselage"></div>
        <ol className="cabin fuselage">
          {Array.from(
            new Set(seatData.map((seat) => seat.seat_no.match(/^\d+/)[0]))
          ).map((row) => (
            <li className={`row row--${row}`} key={row}>
              <ol className="seats" type="A">
                {seatData
                  .filter((seat) =>
                    new RegExp(`^${row}[A-F]$`).test(seat.seat_no)
                  )
                  .map((seat) => {
                    const seatNumber = seat.seat_no;
                    const isSelected = selectedSeats.includes(seatNumber);
                    const isSeatAvailable = seat.status === "available";

                    const seatClassName = isSeatAvailable
                      ? "seat"
                      : "seat seat--unavailable";
                    const checkboxProps = isSeatAvailable
                      ? {}
                      : { disabled: true };

                    return (
                      <li className={seatClassName} key={seat.id}>
                        <input
                          type="checkbox"
                          id={seat.id}
                          {...checkboxProps}
                          checked={isSelected}
                          onChange={() => handleSeatSelection(seat.id)}
                        />
                        <label htmlFor={seat.id}>
                          {isSeatAvailable ? seatNumber : "x"}
                        </label>
                      </li>
                    );
                  })}
              </ol>
            </li>
          ))}
        </ol>

        <div className="exit exit--back fuselage"></div>
        <p className="text-center mt-5">
          Selected Seats: {selectedSeats.join(", ")}
        </p>
      </div>

      <div className="flex justify-items-end items-center flex-col ml-6 mt-0">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            selectedSeats.length === numAdults + numChildren
              ? ""
              : "opacity-50 cursor-not-allowed"
          }`}
          disabled={selectedSeats.length !== numAdults + numChildren}
          onClick={handleSubmit}
        >
          {isLoading ? "Loading..." : "Continue"}
        </button>
        {/* )} */}
      </div>
    </>
  );
};

export default SeatSelection;
