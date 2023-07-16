import React from "react";
import { useEffect } from "react";
//get notifcation by react toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Paypal = ({ price, ticketNum }) => {
  const navigate = useNavigate();
  console.log(" Price in USD: " + price);

  // convert price to string
  let [priceString, setPriceString] = useState(price.toString());

  useEffect(() => {
    console.log(" PayPal() ");
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          // This function sets up the details of the transaction, including the amount and line item details.
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: priceString,
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          // This function captures the funds from the transaction.
          return actions.order.capture().then(function (details) {
            // This function shows a transaction success message to your buyer.
            // show also the price

            navigate("/Ticket", {
              state: {
                ticketNum,
                payed: true,
                // selectedBagWeight,
              },
            });
            toast.success(
              "Money sent successfully" + details.payer.name.given_name
            );
          });
        },
      })
      .render("#paypal-button-container");
  }, []);

  //   useEffect(() => {
  //     console.log(" Price in USD: " + usdPrice);
  //     console.log(" Price in EGP: " + price);
  //   }, [usdPrice, price]);

  return (
    <>
      <div id="paypal-button-container"></div>
    </>
  );
};

export default Paypal;
