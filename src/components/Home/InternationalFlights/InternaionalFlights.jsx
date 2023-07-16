import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const flights = [
  {
    name: "Flights to Europe",
    image: "https://source.unsplash.com/400x300/?europe",
    description:
      "Experience the rich history and culture of Europe. From the Eiffel Tower in Paris to the Colosseum in Rome, you'll find something to explore in every corner of this diverse continent.",
  },
  {
    name: "Flights to Asia",
    image: "https://source.unsplash.com/400x300/?asia",
    description:
      "Asia is a continent of contrasts. From the bustling streets of Tokyo to the serene temples of Kyoto, you'll find something to explore in every corner of this diverse continent.",
  },
  {
    name: "Flights to Africa",
    image: "https://source.unsplash.com/400x300/?africa",
    description:
      "The continent of Africa offers culture and art, as well as spectacular nature and wildlife. Turkish Airlines flies to many countries in Africa, from South Africa to North Africa’s Morocco, Algeria and Egypt. Check out exclusive online fares and choose your own adventure.",
  },
  {
    name: "Flights to South America",
    image: "https://source.unsplash.com/400x300/?southamerica",
    description:
      "South America is a continent of contrasts. From the bustling streets of Rio de Janeiro to the serene temples of Machu Picchu, you'll find something to explore in every corner of this diverse continent.",
  },
  {
    name: "Flights to North America",
    image: "https://source.unsplash.com/400x300/?northamerica",
    description:
      "North America is a continent of contrasts. From the bustling streets of New York to the serene temples of Machu Picchu, you'll find something to explore in every corner of this diverse continent.",
  },
  {
    name: "Flights to Australia",
    image: "https://source.unsplash.com/400x300/?australia",
    description:
      "Australia is a continent of contrasts. From the bustling streets of Sydney to the serene temples of Machu Picchu, you'll find something to explore in every corner of this diverse continent.",
  },
];

const FlightCard = ({ flight }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="300"
        image={flight.image}
        alt={flight.name}
      />
      <CardContent style={{ height: "200px", backgroundColor: "#f5f5f5" }}>
        <Typography variant="h5" align="center">
          {flight.name}
        </Typography>
        <Typography variant="body1">{flight.description}</Typography>
      </CardContent>
    </Card>
  );
};
const InternaionalFlights = () => {
  const classes = useStyles();
  return (
    <div style={{ margin: "32px 32px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        International Flights
      </Typography>

      <Grid container spacing={2} alignItems="stretch">
        {flights.map((flight, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <FlightCard flight={flight} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default InternaionalFlights;
