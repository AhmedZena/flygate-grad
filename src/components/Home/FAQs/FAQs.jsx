import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./FAQs.module.css";
const FAQs = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "How do I find travel deals",
      answer:
        "Simply use one of our travel search engines to scan for prices gathered from hundreds of travel sites. KAYAK’s search results pages have loads of filter options to help you find deals, discover exactly what you’re looking for and make booking seamless. Plus, there’s no extra fee from  .",
    },
    {
      question: "What makes  Flygate a great travel app?",
      answer:
        "On the   app for iOS and Android you’ll find all the great travel offers found on the website and much more. There are special mobile rates and app only deals that allow you to save even more money. Plus, you can get notifications straight to your phone letting you know when prices for your next trip have dropped. But the   app is much more than just a travel app. Use the Trips function to manage your travel itinerary and get up to date status alerts on flights, check-in changes and to store your boarding pass. Even if you’re in the middle of nowhere on your travels, you can still access your travel notes via Trips, as no internet connection is required.",
    },
    {
      question: "How can I use  Flygate to manage my travel bookings?",
      answer:
        "  Trips creates a travel itinerary for you that will give you flight status alerts, can be shared with friends and more. Simply forward your booking confirmations to trips@ .ae or use the   app and sync your email account to keep all your travel plans organised in one app, even if you didn’t book with  . You can share your holiday plans with friends and family and also check out your travel stats for past holidays, like how far you’ve travelled, your most popular cities and how many times you’ve travelled around the world. Even if you don’t have signal, don’t worry, as you can access Trips to check out your itineraries whilst on the road. Your data is safe and secure with us and you won’t have to re-enter credit card info when booking future trips. If you want to make changes or cancel bookings, then you should contact the travel provider, which is provided on the booking confirmation.",
    },
    {
      question: "What are  Price Alerts?",
      answer:
        "Instead of manually checking back in on the price of your next flight or stay, let   do the hard work for you with   Price Alerts. Once you’ve saved your search, our data will determine how the price will rise or fluctuate over the coming days. You’ll then get a push notification letting you know when’s the perfect time to book.",
    },
  ]);

  return (
    <div>
      <h2 className={styles.frequentlyAskedQuestions}>
        Frequently asked questions about Our Services
      </h2>
      {faqs.map((faq, index) => (
        <Accordion key={index} sx={{ mb: 2, mr: 2, ml: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQs;
