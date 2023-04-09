import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Maps2(props) {
  const center = [48.135125, 11.58198];
  const coord = props.position;
  return (
    <MapContainer
      center={coord}
      zoom={10}
      style={{ width: "70vw", height: "80vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=V1toZixvpgQhycQ0RwiK"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <Marker position={coord}>
        <Popup>
          Position.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Maps2;
