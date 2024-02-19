import { List, ListItem, ListItemText } from  "@mui/material"

export const VehicleDetails = ({ vehicleDetails }) => {

  return (
    <List data-testid="vehicle-details">
        <ListItem>
          <ListItemText
            primary="Registration Plate:"
            secondary={vehicleDetails.registrationNumber}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary="Make:" secondary={vehicleDetails.make} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Colour:"
            secondary={vehicleDetails.colour}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Fuel Type:"
            secondary={vehicleDetails.fuelType}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Manufactured in:"
            secondary={vehicleDetails.yearOfManufacture}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Tax due on:"
            secondary={vehicleDetails.taxDueDate}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="MOT status is:"
            secondary={`${vehicleDetails.motStatus} and expires on ${vehicleDetails.motExpiryDate}`}
          />
        </ListItem>
    </List>
  );
};

