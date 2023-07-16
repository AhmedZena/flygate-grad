import React from "react";
import styles from "./Ticket.module.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlaneDeparture } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { ticketNum, payed } = location.state;
  console.log(ticketNum, payed);

  const [isLoading, setIsLoading] = useState(false);

  let [flight, setFlight] = useState({});
  let [price, setPrice] = useState(0);
  let [usdPrice, setUsdPrice] = useState(0);
  const [priceString, setPriceString] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("http://40.115.44.233:3000/api/flight/ticket-details", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: ticketNum }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setFlight(data);
        setPrice(data.price);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  }, []);
  const handleCheckOut = () => {
    setIsLoading(true);
    navigate("/PaymentOptions", {
      state: {
        ticketNum,
        usdPrice,
      },
    });
  };

  console.log(price);

  // api to convert price EGP to USD
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=3d8e81e274a24fe2a9e0361653533188",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log("USD: " + result.rates.EGP);
        console.log("EGP: " + result.rates.USD);
        console.log(price / result.rates.EGP);
        setUsdPrice((price / result.rates.EGP).toFixed(1));
        setIsLoading(false);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setIsLoading(false));
  }, [price]); // Add 'price' as a dependency for this useEffect

  return (
    <>
      <div className="w-full flex justify-center items-center h-96">
        <div className={styles.box}>
          <ul className={styles.left}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <ul className={styles.right}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div className={styles.ticket}>
            <span className={styles.airline}>Flygate</span>
            <span className={`${styles.airline} ${styles.airlineslip}`}>
              Flygate
            </span>
            <span className={styles.boarding}>
              Boarding pass ({" " + flight.airline_name})
            </span>
            <div className={styles.content}>
              <span className={styles.jfk}>{flight.airportFrom}</span>
              <span className="absolute right-20  top-4  transform -translate">
                <FaPlaneDeparture size={35} color="#041c75" />
              </span>
              <span className={styles.sfo}>{flight.airportTo}</span>

              <span className={`${styles.jfk} ${styles.jfkslip}`}>
                {flight.airportFrom}
              </span>
              <span className="absolute left-28  top-4  transform -translate">
                <FaPlaneDeparture size={35} color="#041c75" />
              </span>

              <span className={`${styles.sfo} ${styles.sfoslip}`}>
                {flight.airportTo}
              </span>
              <div className={styles["sub-content"]}>
                <span className={styles.watermark}>Flygate</span>
                <span className={styles.name}>
                  PASSENGER NAME
                  <br />
                  <span>{flight.user}</span>
                </span>
                <span className={styles.flight}>
                  FLIGHT N&deg;
                  <br />
                  <span>{flight.flight_number}</span>
                </span>

                <span className={styles.seat}>
                  SEAT
                  <br />
                  <span>{flight.seat}</span>
                </span>
                <span className={styles.boardingtime}>
                  BOARDING TIME
                  <br />
                  <span>
                    {flight.take_off_date} , {flight.take_off_time}
                  </span>
                </span>

                <span className={`${styles.flight} ${styles.flightslip}`}>
                  FLIGHT N&deg;
                  <br />
                  <span>{flight.flight_number}</span>
                </span>
                <span className={styles.gate}>
                  Class: <p className="text-black">{flight.class}</p>
                </span>
                <span className={`${styles.seat} ${styles.seatslip}`}>
                  SEAT
                  <br />
                  <span>{flight.seat}</span>
                </span>
                <span className={`${styles.name} ${styles.nameslip}`}>
                  PASSENGER NAME
                  <br />
                  <span>{flight.user}</span>
                </span>
              </div>
            </div>
            <div className={styles.barcode}></div>
            {payed ? (
              <div className="bottom-0 right-52  absolute  text-red-600 p-2 font-bold text-xl">
                <span className="text-red-800 mr-4">
                  <span className="text-red-800 mr-1">Payment:</span>
                  <span className="text-green-800 mr-1">Payed</span>
                </span>
              </div>
            ) : (
              <div className="bottom-0 right-52  absolute  text-red-600 p-2 font-bold text-xl">
                <span className="text-red-800 mr-4">
                  <span className="text-red-800 mr-1">Price:</span>
                  {flight.price} EGP
                </span>
                <span>Not payed</span>
              </div>
            )}
            <div className={`${styles.barcode} ${styles.slip}`}></div>
          </div>
        </div>
      </div>

      {payed ? (
        <div className="flex justify-center items-center mt-20">
          {/* Time to fly */}
          <p className="text-2xl font-bold text-green-700">Time to fly</p>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-20">
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg"
            onClick={handleCheckOut}
          >
            Checkout
          </button>
        </div>
      )}
    </>
  );
};

export default Ticket;
