import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import PropTypes from "prop-types";

import { List, ListItem, ListItemText, Button } from "@mui/material";
import styled from "@emotion/styled";

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme === "dark" ? "white" : "black",
  "& .MuiTypography-root": {
    color: theme === "dark" ? "white" : "black",
  },
}));

export const VehicleDetails = ({ vehicleDetails, setVehicleDetails }) => {
  const { theme } = useContext(ThemeContext);
  function handleReset() {
    setVehicleDetails();
  }

  return (
    <List data-testid="vehicle-details">
      <ListItem>
        <StyledListItemText
          theme={theme}
          primary="Registration Plate:"
          secondary={vehicleDetails.registrationNumber}
        />
      </ListItem>
      <ListItem>
        <StyledListItemText
          theme={theme}
          primary="Make:"
          secondary={vehicleDetails.make}
        />
      </ListItem>
      <ListItem>
        <StyledListItemText
          theme={theme}
          primary="Colour:"
          secondary={vehicleDetails.colour}
        />
      </ListItem>
      <ListItem>
        <StyledListItemText
          theme={theme}
          primary="Fuel Type:"
          secondary={vehicleDetails.fuelType}
        />
      </ListItem>
      <ListItem>
        <StyledListItemText
          theme={theme}
          primary="Manufactured in:"
          secondary={vehicleDetails.yearOfManufacture}
        />
      </ListItem>
      <ListItem>
        <StyledListItemText
          theme={theme}
          primary="Tax due on:"
          secondary={vehicleDetails.taxDueDate}
        />
      </ListItem>
      <ListItem>
        <StyledListItemText
          theme={theme}
          primary="MOT status is:"
          secondary={`${vehicleDetails.motStatus} and expires on ${vehicleDetails.motExpiryDate}`}
        />
      </ListItem>
      <p>
        <Button variant="outlined" color="error" onClick={handleReset}>
          {" "}
          Clear{" "}
        </Button>
      </p>
    </List>
  );
};

VehicleDetails.propTypes = {
  vehicleDetails: PropTypes.object.isRequired,
  setVehicleDetails: PropTypes.object.isRequired,
};
