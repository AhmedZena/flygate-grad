import React from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { useState } from "react";
import classees from "./FlightSearchForm.module.css";
import AirportSelect from "./AirportSelect";
import { format, addDays, parseISO } from "date-fns";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function FlightSearchForm() {
  const [loading, setLoading] = useState(false); // Loading state added

  const [tripType, setTripType] = useState("oneWay");
  const [departureAirport, setDepartureAirport] = useState("");
  const [arrivalAirport, setArrivalAirport] = useState("");
  const [departureDate, setDepartureDate] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [returnDate, setReturnDate] = useState(new Date());
  const [classType, setClassType] = useState("economi");
  const [flexibleDates, setFlexibleDates] = useState(false);
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);

  const today = parseISO(format(new Date(), "yyyy-MM-dd"));

  const [dateFrom, setDateFrom] = useState(format(new Date(), "yyyy-MM-dd"));
  const [dateTo, setDateTo] = useState(
    format(addDays(new Date(), 3), "yyyy-MM-dd")
  );

  function modifyDate(dateString, numDays) {
    var date = new Date(dateString);
    date.setDate(date.getDate() + numDays);

    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, "0");
    var day = date.getDate().toString().padStart(2, "0");

    return year + "-" + month + "-" + day;
  }

  useEffect(() => {
    if (departureDate && flexibleDates) {
      if (
        departureDate === format(today, "yyyy-MM-dd") ||
        departureDate === format(addDays(today, 1), "yyyy-MM-dd") ||
        departureDate === format(addDays(today, 2), "yyyy-MM-dd") ||
        departureDate === format(addDays(today, 3), "yyyy-MM-dd")
      ) {
        console.log("first condition");
        setDateFrom(format(today, "yyyy-MM-dd"));
        setDateTo(modifyDate(departureDate, 3));

        console.log(`departureDate: ${departureDate}`);
        console.log(`date from: ${dateFrom}`);
        console.log(`date to: ${dateTo}`);
      } else {
        console.log("second condition");
        setDateFrom(modifyDate(departureDate, -3));
        setDateTo(modifyDate(departureDate, 3));

        console.log("second condition");
        console.log(`departureDate: ${departureDate}`);
        console.log(`date from: ${dateFrom}`);
        console.log(`date to: ${dateTo}`);
      }
    }
  }, [departureDate, flexibleDates, today]);

  const errorDiv = useRef(null);
  const navigate = useNavigate();

  // function to handle the departure airport selection
  const handleDepartureAirportSelect = (airportName) => {
    setDepartureAirport(airportName);
  };

  // function to handle the arrival airport selection
  const handleArrivalAirportSelect = (airportName) => {
    setArrivalAirport(airportName);
  };

  // function to handle the trip type selection
  const handleTripTypeChange = (event) => {
    setTripType(event.target.value);
  };

  const handleDepartureDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = format(new Date(), "yyyy-MM-dd");

    if (selectedDate >= currentDate) {
      setDepartureDate(selectedDate);
    }
  };

  const handleReturnDateChange = (event) => {
    const selectedDate = event.target.value;
    const currentDate = format(new Date(), "yyyy-MM-dd");

    if (selectedDate >= currentDate) {
      setReturnDate(selectedDate);
    }
  };

  // function to handle the class type selection
  const handleClassTypeChange = (event) => {
    setClassType(event.target.value);
  };

  // function to handle the flexible dates selection
  const handleFlexibleDatesChange = (event) => {
    setFlexibleDates(event.target.checked);
  };

  // function to handle the number of adults selection
  const handleNumAdultsChange = (event) => {
    const num = event.target.value;
    setNumAdults(num);
    if (num === 0) {
      setNumChildren(0);
    }
  };

  // function to handle the number of children selection
  const handleNumChildrenChange = (event) => {
    const num = event.target.value;
    setNumChildren(num);
  };

  // function to handle the search button click
  const handleSearch = async (event) => {
    console.log(`tripType: ${tripType}
    departureAirport: ${departureAirport}
    arrivalAirport: ${arrivalAirport}
    departureDate: ${departureDate}
    returnDate: ${returnDate}
    classType: ${classType}
    flexibleDates: ${flexibleDates}
    numAdults: ${numAdults}
    numChildren: ${numChildren}`);

    event.preventDefault();

    // Validate form inputs
    if (departureAirport === "" || arrivalAirport === "") {
      errorDiv.current.innerHTML = "Please fill all the fields";
      toast.error("Please fill all the fields");
      return;
    }

    const regExpDate = /^\d{4}-\d{2}-\d{2}$/;

    if (tripType === "oneWay" && regExpDate.test(departureDate) === false) {
      errorDiv.current.innerHTML = "Please enter a valid date";
      toast.error("Please enter a valid date");
      return;
    }

    if (
      tripType === "return" &&
      (regExpDate.test(departureDate) === false ||
        regExpDate.test(returnDate) === false)
    ) {
      errorDiv.current.innerHTML = "Please enter a valid date";
      toast.error("Please enter a valid date");
      return;
    }

    if (departureDate > returnDate) {
      errorDiv.current.innerHTML =
        "Please make sure the return date is after the departure date";
      toast.error(
        "Please make sure the return date is after the departure date"
      );
      return;
    }

    if (flexibleDates) {
      console.log(`flexibleDates: ${flexibleDates}`);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        airportFrom: departureAirport,
        airportTo: arrivalAirport,
        dateFrom: dateFrom,
        dateTo: dateTo,
        class: classType,
        no: numAdults + numChildren,
      });
      console.log(raw);
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      setLoading(true); // Start the loading state
      fetch(
        "http://40.115.44.233:3000/api/flight/from-to-elastic-date-class-no",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) =>
          navigate("/ResultsOneWay", {
            state: {
              flights: result,
              tripType,
              departureAirport,
              arrivalAirport,
              departureDate,
              returnDate,
              classType,
              numAdults,
              numChildren,
              flexibleDates,
            },
          })
        )
        .catch((error) => console.log("error", error))
        .finally(() => setLoading(false)); // Stop the loading state
    } else {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify({
        airportFrom: departureAirport,
        airportTo: arrivalAirport,
        date: departureDate,
        class: classType,
        no: numAdults + numChildren,
      });
      console.log(raw);

      let requestOptions = {
        method: "post",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(
        "http://40.115.44.233:3000/api/flight/from-to-date-class-no",
        requestOptions
      )
        .then((response) => response.json())
        .then((result) =>
          navigate("/ResultsOneWay", {
            state: {
              flights: result,
              tripType,
              departureAirport,
              arrivalAirport,
              departureDate,
              returnDate,
              numAdults,
              numChildren,
              classType,
              flexibleDates,
            },
          })
        )
        .catch((error) => console.log("error", error))
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className={classees.searchFlights}>
        <FormControl component="fieldset" variant="outlined">
          <FormLabel component="legend">Trip Type</FormLabel>
          <RadioGroup
            row
            aria-label="tripType"
            name="tripType"
            value={tripType}
            onChange={handleTripTypeChange}
          >
            <FormControlLabel
              value="oneWay"
              control={<Radio color="primary" />}
              label="One Way"
              variant="outlined"
            />
            <FormControlLabel
              value="return"
              control={<Radio color="primary" />}
              label="Round"
            />
          </RadioGroup>
        </FormControl>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <AirportSelect
              onSelect={handleDepartureAirportSelect}
              type="depature"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AirportSelect
              onSelect={handleArrivalAirportSelect}
              type="arrival"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
            <TextField
              id="departureDate"
              label="Departure Date"
              variant="outlined"
              type="date"
              value={departureDate}
              onChange={handleDepartureDateChange}
              fullWidth
              InputLabelProps={{ shrink: true }}
              inputProps={{ min: format(new Date(), "yyyy-MM-dd") }} // Add this line
            />
          </Grid>
          {tripType === "return" && (
            <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
              <TextField
                id="returnDate"
                label="Return Date"
                variant="outlined"
                type="date"
                value={returnDate}
                onChange={handleReturnDateChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                inputProps={{ min: format(new Date(), "yyyy-MM-dd") }} // Add this line
              />
            </Grid>
          )}
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
            <InputLabel id="numAdults-label">Adults</InputLabel>
            <Select
              labelId="numAdults-label"
              id="numAdults"
              value={numAdults}
              onChange={handleNumAdultsChange}
              fullWidth
              variant="outlined"
            >
              {[...Array(10).keys()].map((i) => (
                <MenuItem key={i} value={i + 1}>
                  {i + 1}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
            <InputLabel id="numChildren-label">Children</InputLabel>
            <Select
              labelId="numChildren-label"
              id="numChildren"
              value={numChildren}
              onChange={handleNumChildrenChange}
              fullWidth
              disabled={numAdults === 0}
              variant="outlined"
            >
              {[...Array(10).keys()].map((i) => (
                <MenuItem key={i} value={i}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          <Grid item xs={12} sm={6} style={{ marginTop: "10px" }}>
            <FormControl
              variant="outlined"
              className={classees.formControl}
              fullWidth
            >
              <InputLabel id="classType-label">Class Type</InputLabel>
              <Select
                labelId="classType-label"
                id="classType"
                value={classType}
                onChange={handleClassTypeChange}
                label="Class Type"
                variant="outlined"
              >
                <MenuItem value="first">First</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="economi">Economy</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <FormControlLabel
          control={
            <Checkbox
              checked={flexibleDates}
              onChange={handleFlexibleDatesChange}
              name="flexibleDates"
            />
          }
          label="Dates are flexible (+/- 3 days)"
        />
        {/* div to show eror */}
        <div className={classees.errorDiv} ref={errorDiv}></div>
        <br />

        {/* Conditional rendering based on the loading state using tailwind css */}

        {loading ? (
          <Button
            variant="contained"
            color="primary"
            className={classees.searchBtn}
            disabled
          >
            <span className="spinner-border spinner-border-sm"></span>
            Loading...
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            className={classees.searchBtn}
            onClick={handleSearch}
          >
            Search
          </Button>
        )}
      </div>

      <ToastContainer />
    </>
  );
}

export default FlightSearchForm;
