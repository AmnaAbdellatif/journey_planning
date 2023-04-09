import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import * as React from 'react';
import { useState, useEffect } from "react";

import { getLocationData } from '../services/ApiCaller/SerachService';
import Maps from './Maps2';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Sidebar from './Sidebar';

function Searchlist() {

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [selected, setSelected] = useState('');



    useEffect(() => {
        // check if searchTerm is not an empty string
        if (searchTerm) {

            // make API call using axios

            getLocationData('de', 'RapidJSON', 'any', 'Suchtext').then((response) => {
                setSearchResults(response);

            })
                .catch((error) => {
                    console.error('ERROR');
                    console.log('erreur', error);
                });

        }
    }, [searchTerm]);




    function handleInputChange(event) {

        setSearchTerm(event.target.value);
        console.log("search term", searchTerm);


    }
    function handleSelect(e) {

        setSelected(e.target.value);
        console.log("seeel", selected);
    }
    return (

        <div>




            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid>
                    <Sidebar />

                </Grid>


                <Grid item xs={2} sm={4} md={4} >



                    <Stack spacing={2} sx={{ width: 300 }}>
                        <label style={{ fontWeight: 'bold' }}>Start </label>
                        <Autocomplete
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={searchResults.map((option) => option.name)
                            }
                            onClick={handleSelect}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search input"
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',

                                    }
                                    }
                                    value={searchTerm} onChange={handleInputChange} required


                                />

                            )}
                        />

                    </Stack>

                    <Stack spacing={2} sx={{ width: 300 }}>
                        <label style={{ fontWeight: 'bold' }}>Stop  </label>
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
                                        type: 'search'

                                    }
                                    }
                                    value={searchTerm} onChange={handleInputChange} required
                                />

                            )}

                        />

                    </Stack>

                    <br></br>
                    <Button variant="contained" color="success">
                        Search
                    </Button>
                </Grid>
                <Grid xs={8} >


                    <Maps />

                </Grid>

            </Grid>


        </div>

    );
}


export default Searchlist;