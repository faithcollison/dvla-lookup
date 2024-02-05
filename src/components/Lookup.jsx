import { useState } from "react";
import CarDetails from "./CarDetails";
// import SearchBar from "./SearchBar";
import { getVehicleDetails } from "../api";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
// import IconButton from "@mui/material/IconButton";
// // import SearchIcon from "@mui/icons-material/Search";
// import TextField from "@mui/material/TextField";
// // import SearchBar from "material-ui-search-bar";

const Lookup = () => {
  const [searchInput, setSearchInput] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState([]);

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
          <input
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
      {/* <SearchBar setSearchInput={setSearchInput} searchInput={searchInput} setVehicleDetails={setVehicleDetails} /> */}
      <CarDetails vehicleDetails={vehicleDetails} />
    </div>
  );
};
export default Lookup;
