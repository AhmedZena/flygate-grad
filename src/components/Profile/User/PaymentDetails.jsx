import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Input,
  Button,
} from "@material-ui/core";

const PaymentDetails = () => {
  const [savedPaymentMethods, setSavedPaymentMethods] = useState([
    {
      cardNumber: "**** **** **** 1234",
      cardHolder: "Ahmed gamal zena",
      expiryDate: "12/23",
    },
    {
      cardNumber: "**** **** **** 5678",
      cardHolder: "Ahmed zena",
      expiryDate: "11/22",
    },
  ]);
  const [newCardNumber, setNewCardNumber] = useState("");
  const [newCardHolder, setNewCardHolder] = useState("");
  const [newExpiryDate, setNewExpiryDate] = useState("");

  const handleAddCard = () => {
    setSavedPaymentMethods([
      ...savedPaymentMethods,
      {
        cardNumber: newCardNumber,
        cardHolder: newCardHolder,
        expiryDate: newExpiryDate,
      },
    ]);
    setNewCardNumber("");
    setNewCardHolder("");
    setNewExpiryDate("");
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6">Payment Details</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Saved Payment Methods</Typography>
        <ul>
          {savedPaymentMethods.map((paymentMethod, index) => (
            <li key={index} className="m-4">
              {paymentMethod.cardNumber} ({paymentMethod.cardHolder},{" "}
              {paymentMethod.expiryDate})
            </li>
          ))}
        </ul>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Add a Credit Card</Typography>
        <FormControl fullWidth>
          <InputLabel>Card Number</InputLabel>
          <Input
            value={newCardNumber}
            onChange={(event) => setNewCardNumber(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth className="mt-3">
          <InputLabel>Card Holder</InputLabel>
          <Input
            value={newCardHolder}
            onChange={(event) => setNewCardHolder(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Expiry Date</InputLabel>
          <Input
            value={newExpiryDate}
            onChange={(event) => setNewExpiryDate(event.target.value)}
          />
        </FormControl>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleAddCard}
          className="mt-3"
        >
          Add Credit Card
        </Button>
      </Grid>
    </Grid>
  );
};

export default PaymentDetails;
