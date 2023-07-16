import React from "react";
import { useEffect } from "react";
//get notifcation by react toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import PayPal from "./Paypal";
const PaymentOptions = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [price, setPrice] = useState(0);
  let [flight, setFlight] = useState({});
  const location = useLocation();
  const { ticketNum, usdPrice } = location.state;
  console.log(ticketNum);
  console.log(usdPrice);

  useEffect(() => {
    setIsLoading(true);
    console.log(ticketNum);
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
        // Handle the response from the backend
        console.log(data);
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

  //   fetch("https://api.exchangeratesapi.io/latest?base=USD");

  //   useEffect(() => {
  //     console.log(" PaymentOptions() ");
  //     window.paypal
  //       .Buttons({
  //         createOrder: (data, actions) => {
  //           // This function sets up the details of the transaction, including the amount and line item details.
  //           return actions.order.create({
  //             purchase_units: [
  //               {
  //                 amount: {
  //                   value: flight.price,
  //                 },
  //               },
  //             ],
  //           });
  //         },
  //         onApprove: (data, actions) => {
  //           // This function captures the funds from the transaction.
  //           return actions.order.capture().then(function (details) {
  //             // This function shows a transaction success message to your buyer.
  //             // show also the price
  //             toast.success(
  //               "Transaction completed by " + details.payer.name.given_name
  //             );
  //             //   alert("Transaction completed by " + details.payer.name.given_name);
  //           });
  //         },
  //       })
  //       .render("#paypal-button-container");
  //   }, []);
  return (
    <>
      {/* show price  */}
      <div class=" bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-lg shadow-lg m-5">
        <span class="text-white text-4xl font-bold ">Price:</span>
        <div class="flex items-center justify-between mt-10">
          <p class="text-slate-800 text-4xl font-bold">
            {flight.price + " "}
            <span class="text-slate-800 text-4xl font-light">EGP</span>
          </p>
          <p class="text-slate-800 text-4xl font-bold">
            {usdPrice + " "}
            <span class="text-slate-800 text-4xl font-light">USD</span>
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center ">
        <PayPal price={usdPrice} ticketNum={ticketNum} />
      </div>
    </>
  );
};

export default PaymentOptions;
