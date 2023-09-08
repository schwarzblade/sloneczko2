import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_MAP_API_KEY } from "../config";
const mapContainerStyle = {
  height: "600px",
  width: "100%",
};

const position = {
  lat: 49.67484,
  lng: 20.05593,
};

const onLoad = (marker) => {
  console.log("marker: ", marker);
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 18,
};
export const Map = () => {
  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAP_API_KEY}>
      <GoogleMap
        id="marker-example"
        mapContainerStyle={mapContainerStyle}
        zoom={15}
        center={position}
        options={OPTIONS}
        onZoomChanged
      >
        <Marker
          onLoad={onLoad}
          position={position}
          label="Słoneczko Jak u Mamy"
        />
      </GoogleMap>
    </LoadScript>
  );
};

