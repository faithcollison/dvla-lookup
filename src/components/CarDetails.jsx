import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const CarDetails = ({vehicleDetails}) => {
  const hasVehicleDetails = Object.keys(vehicleDetails).length > 0

    return (
        <List>
        {hasVehicleDetails && (
          <>
            <ListItem>
              <ListItemText primary="Registration Plate:" secondary={vehicleDetails.data.registrationNumber} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Make:" secondary={vehicleDetails.data.make} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Colour:" secondary={vehicleDetails.data.colour} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fuel Type:" secondary={vehicleDetails.data.fuelType} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Manufactured in:" secondary={vehicleDetails.data.yearOfManufacture} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Tax due on:" secondary={vehicleDetails.data.taxDueDate} />
            </ListItem>
            <ListItem>
              <ListItemText primary="MOT status is:" secondary={`${vehicleDetails.data.motStatus} and expires on ${vehicleDetails.data.motExpiryDate}`} />
            </ListItem>
          </>
        )}
      </List>
    )
}
export default CarDetails