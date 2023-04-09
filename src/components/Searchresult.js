import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import * as React from "react";
import { useState, useEffect } from "react";
import { getLocationData } from "../services/ApiCaller/SerachService";
import Maps from "./Maps2";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Sidebar from "./common/Sidebar/Sidebar";

function Searchlist() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selected, setSelected] = useState([48.135125, 11.58198]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // check if searchTerm is not an empty string
  
    if (searchTerm) {
      // make API call using axios

      getLocationData("de", "RapidJSON", "any", "Suchtext")
        .then((response) => {
         
          setSearchResults(response);
        })
        .catch((error) => {
          console.error("ERROR");
          console.log("erreur", error);
        });
    }
  }, [searchTerm]);

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
    console.log("search term", searchTerm);
  }
  function handleSelect(e, newValue) {
    setOpen(false);
    console.log("seeel", newValue);
    const item = searchResults.filter((option) => option.name == newValue);
    setSelected(item[0].coord);
  }
  return (
    <>
      {/* <Header /> */}
      <Grid container columns={{ xs: 4, md: 12 }}>
        <Grid item xs={2}>
          <Sidebar />
        </Grid>
        <Grid xs={2}>
          <Stack spacing={2}>
            <label style={{ fontWeight: "bold" }}>Start </label>
            <Autocomplete
              open={open}
              onOpen={() => {
                setOpen(true);
              }}
              onClose={() => {
                setOpen(false);
              }}
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={searchResults.map((option) => option.name)}
              onChange={handleSelect}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  value={searchTerm}
                  onChange={handleInputChange}
                  required
                />
              )}
            />
          </Stack>

          <Stack spacing={2}>
            <label style={{ fontWeight: "bold" }}>Stop </label>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              options={searchResults.map((option) => option.name)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                  value={searchTerm}
                  onChange={handleInputChange}
                  required
                />
              )}
            />
          </Stack>

          <br></br>
          <Button variant="contained" style={{ background: "#FF0000" }}>
            Search
          </Button>
        </Grid>
        <Grid xs={4} ml={5} sm={4} md={4}>
          <Maps position={selected} />
        </Grid>
      </Grid>
    </>
  );
}

export default Searchlist;
