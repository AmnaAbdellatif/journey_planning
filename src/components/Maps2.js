import React ,{useState,useEffect} from 'react';
import { getLocationData } from '../services/ApiCaller/SerachService';
import {
  MapContainer,
  TileLayer,
  Polygon,
  Marker
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




function Maps2() {


    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);


useEffect(() => {
    // check if searchTerm is not an empty string
    if (searchTerm) {

        // make API call using axios

        getLocationData('de', 'RapidJSON', 'any', 'Suchtext').then((response) => {
            setSearchResults(response);
            console.log("poiiints",searchResults);

        })
            .catch((error) => {
                console.error('ERROR');
                console.log('erreur', error);
            });

    }
}, [searchTerm]);



        const center = [48.135125, 11.581980];    
  return (
    <MapContainer
      center={center}
      zoom={10}
      style={{ width: '80vw', height: '80vh' }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=V1toZixvpgQhycQ0RwiK"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

    
      {
         
        searchResults.map((state) => {
          console.log("locations coord",state.coord)
          const coordinates = state.coord[0].map((item) => [item[1], item[0]]);

            
          return (<Polygon
            pathOptions={{
              fillColor: '#FD8D3C',
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: 'white'
            }}
            positions={coordinates}
            eventHandlers={{
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  dashArray: "",
                  fillColor: "#BD0026",
                  fillOpacity: 0.7,
                  weight: 2,
                  opacity: 1,
                  color: "white",
                })
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: "3",
                  color: 'white',
                  fillColor: '#FD8D3C'
                });
              },
              click: (e) => {

              }
            }}
          />)
        })
      }
    </MapContainer>
  );
}

let DefaultIcon = L.icon({
    iconUrl: "/marker-icon.jpg",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
  });
  L.Marker.prototype.options.icon = DefaultIcon;

  
export default Maps2;