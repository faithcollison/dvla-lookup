import { useState } from "react";
import CarDetails from "./CarDetails";
import { getVehicleDetails } from "../api";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import styled from '@emotion/styled'

const StyledInput = styled.input`
width: 80%;
padding: 10px;
margin: 10px;
box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
border-radius: 10px;
`;

const Lookup = () => {
  const [searchInput, setSearchInput] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState({});

  function handleChange(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getVehicleDetails(searchInput).then((data) => {
      setVehicleDetails(data);
      setSearchInput("");
    });
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
      {Object.keys(vehicleDetails).length > 0 ? (
        <CarDetails vehicleDetails={vehicleDetails.data} />
      ) : null}
    </div>
  );
};
export default Lookup;
