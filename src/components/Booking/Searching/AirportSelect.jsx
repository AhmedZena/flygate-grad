import React, { useState, useEffect } from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";

const AirportSelect = ({ onSelect, type }) => {
  const [airports, setAirports] = useState([]);
  const [selectedAirport, setSelectedAirport] = useState("");

  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const response = await fetch("http://40.115.44.233:3000/api/airport");
        const data = await response.json();
        setAirports(data);
        // console.log("Airports:", data);
      } catch (error) {
        console.error("Error fetching airports:", error);
      }
    };

    fetchAirports();
  }, []);

  const handleAirportChange = (event, value) => {
    const airportName = value ? value.AP_name : "";
    setSelectedAirport(airportName);
    onSelect(airportName);
  };

  const getOptionLabel = (option) => {
    return `${option.AP_name} (${option.AP_city}, ${option.AP_country})`;
  };

  return (
    <Autocomplete
      options={airports}
      getOptionLabel={getOptionLabel}
      onChange={handleAirportChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={`Select ${type} Airport`}
          variant="outlined"
        />
      )}
    />
  );
};

export default AirportSelect;
