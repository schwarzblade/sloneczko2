import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel }) => {
  return (
    <div className="map">
      <h2 className="map-h2">Sprawdź gdzie nas szukać</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyD8LQPqDI8Xzg64ABVmSlTaVrjuOotSZ58",
            v: "3.31",
          }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
