import IconButton from "@mui/material/IconButton";
// import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { getVehicleDetails } from "../api";

const SearchBar = ({ setSearchInput, searchInput, setVehicleDetails }) => {
  function handleSubmit(event) {
    event.preventDefault();
    getVehicleDetails(searchInput).then((data) => {
      setVehicleDetails(data);
      setSearchInput("");
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setSearchInput(e.target.value);
          }}
          label="Enter registration plate"
          variant="filled"
          placeholder="Search..."
          size="small"
        />
        <IconButton type="submit" aria-label="search"> Go!
          {/* <SearchIcon style={{ fill: "blue" }} /> */}
        </IconButton>
      </form>
    </>
  );
};
export default SearchBar;
