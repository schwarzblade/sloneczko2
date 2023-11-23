import React from "react";
import { GoogleMap,  Marker, useJsApiLoader } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "600px",
  width: "100%",
};

const position = {
  lat: 49.67484,
  lng: 20.05593,
};

const OPTIONS = {
  minZoom: 1,
  maxZoom: 16,
}
export const Map = () => {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDFMToVKtM2vBGv6GYhRKs6p48HA_AFyyI"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(position);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={position}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options = {OPTIONS}
      >
        { /* Child components, such as markers, info windows, etc. */ }
          <Marker
          position={position}
          label="Słoneczko Jak u Mamy"
        />
      </GoogleMap>
  ) : <></>
}


export default React.memo(Map)