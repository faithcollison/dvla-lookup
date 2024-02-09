import { useState } from "react";

import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";

import { VehicleDetails } from './index'
import { getVehicleDetails } from "../api";
import { StyledInput } from "./Lookup.styles"


export const Lookup = () => {
  const [searchInput, setSearchInput] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState();
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true)
    getVehicleDetails(searchInput).then((data) => {
      setVehicleDetails(data);
      setSearchInput("");
      setIsLoading(false)
    });
  }

  if(isLoading) {
    return <h2> Loading... </h2>
  }

  return (
    <div>
      <form className="searchbar">
        <label htmlFor="searchbar">
          <StyledInput
            type="text"
            id="searchbar"
            placeholder="Enter vehicle registration plate here..."
            onChange={handleChange}
            value={searchInput}
          />
        </label>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={handleSubmit}
        >
          <SearchIcon fontSize="large" color="action" />
        </Button>
      </form>
      { vehicleDetails? (
        <VehicleDetails vehicleDetails={vehicleDetails.data} />
      ) : null}
    </div>
  );
};

