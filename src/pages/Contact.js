import React from "react";
import ContactForm from "../components/ContactForm";
import {Map} from "../components/Map";
import location from "../components/location";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

function Contact() {
  return (
    <>
      <ContactForm/>
      <Map/>
      <ScrollToTopBtn/>
    </>
  );
}

export default Contact;
