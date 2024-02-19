import { useState } from "react";

import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LinearProgress from "@mui/material/LinearProgress";

import { VehicleDetails } from "./index";
import { getVehicleDetails } from "../api";
import { StyledInput } from "./Lookup.styles";

export const Lookup = () => {
  const [searchInput, setSearchInput] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    getVehicleDetails(searchInput)
      .then((data) => {
        setVehicleDetails(data);
        setSearchInput("");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setIsError(true);
      });
  }

  if (isError) {
    return (
      <div>
        <p> Car not found </p>
        <p> Please try again </p>
      </div>
    );
  }

  return (
    <div>
      {isLoading ? (
        <LinearProgress />
      ) : (
        <form className="searchbar">
          <label htmlFor="searchbar"> Reg Plate
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
      )}
      {vehicleDetails ? (
        <VehicleDetails vehicleDetails={vehicleDetails} />
      ) : null}
    </div>
  );
};
