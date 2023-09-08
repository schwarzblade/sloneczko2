import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

export const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="nasze pokoje">
          <Link to="/" className="btn-primary">
            Strona główna
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
      <ScrollToTopBtn/>
    </>
  );
};
