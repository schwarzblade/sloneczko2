import React from "react";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";

const location = {
  //address: "JAK U MAMY-SŁONECZKO",
  lat: 49.67484,
  lng: 20.05593,
};

function Contact() {
  return (
    <>
      <ContactForm />;
      <Map location={location} zoomLevel={17} />
    </>
  );
}

export default Contact;
