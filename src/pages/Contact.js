import React from "react";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
import location from "../components/location";

function Contact() {
  return (
    <>
      <ContactForm />;
      <Map location={location} zoomLevel={15} />
    </>
  );
}

export default Contact;
