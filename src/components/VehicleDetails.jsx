import { List, ListItem, ListItemText } from "@mui/material";
// import { StyledListItemText } from "./VehicleDetails.styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import styled from "@emotion/styled";

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  color: theme === "dark" ? "white" : "black",
  '& .MuiTypography-root': {
    color: theme === "dark" ? "white" : "black",
 },
}));

export const VehicleDetails = ({ vehicleDetails }) => {
  const { theme } = useContext(ThemeContext);

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
    </List>
  );
};
