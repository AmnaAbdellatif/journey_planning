import {useState,useEffect} from "react";
import axios from 'axios';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

function SearchList() {

const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // check if searchTerm is not an empty string
        if (searchTerm) {
          // make API call using axios
          axios.get(`https://mvvvip1.defas-fgi.de/mvv/XML_STOPFINDER_REQUEST`, { params: { language: 'de', outputFormat: 'RapidJSON',type_sf:'any',name_sf:'Suchtext'} })
            .then(response => {
              // update searchResults with the response data
              const data =response.data.locations
              setSearchResults(data);
              
          
              console.log('dataaaAPI',response.data);

            })
            .catch(error => {
              console.error(error);
            });
        }

      }, [searchTerm]);


      function handleInputChange(event) {
        setSearchTerm(event.target.value);
        console.log(setSearchTerm);
      }

return  (

    <div>



<Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Start"
        inputProps={{ 'aria-label': 'Start' }}
        value={searchTerm} onChange={handleInputChange}
        
      />
      
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>


{
      searchResults.filter(post => {
        if (searchTerm === '') {
          return post;
        } else if (post.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return post;
        }
      }).map((post, index) => (
        <div className="box" key={index}>
          <p>{post.name}</p>
        </div>
      ))
      
      
      }

    </div>


    








);

}




    export default SearchList;