import { useState, useContext } from "react";
import { VehicleDetails } from "./index";
import { getVehicleDetails } from "../api";
import { StyledForm } from "./Lookup.styles";
import { ThemeContext } from "../contexts/ThemeContext";

import {
  ToggleButtonGroup,
  ToggleButton,
  Button,
  TextField,
  LinearProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Lookup = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
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
        <StyledForm className="searchbar" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Registration Number"
            variant="outlined"
            size="small"
            onChange={handleChange}
            value={searchInput}
            placeholder="Enter vehicle registration plate here..."
            InputLabelProps={{
              style: {
                color: theme === "dark" ? "white" : "black",
              },
            }}
            inputProps={{
              style: {
                color: theme === "dark" ? "white" : "black",
              },
            }}
          />
          <Button
            size="small"
            variant="contained"
            data-testid="search-button"
            onClick={handleSubmit}
          >
            <SearchIcon fontSize="small" color="action" />
          </Button>
        </StyledForm>
      )}
      {vehicleDetails ? (
        <VehicleDetails
          vehicleDetails={vehicleDetails}
          setVehicleDetails={setVehicleDetails}
        />
      ) : null}
      <div style={{ position: "fixed", bottom: 0, left: 0, margin: "20px" }}>
        <ToggleButtonGroup
          value={theme}
          color="primary"
          exclusive
          onChange={toggleTheme}
          aria-label="theme toggle"
        >
          <ToggleButton
            value="light"
            aria-label="light mode"
            style={{ color: theme === "dark" ? "white" : "inherit" }}
          >
            𖤓
          </ToggleButton>
          <ToggleButton value="dark" aria-label="dark mode">
            ☾
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
