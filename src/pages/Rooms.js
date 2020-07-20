import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";

export const Rooms = () => {
  return (
    <Hero hero="roomsHero">
      <Banner title="nasze pokoje">
        <Link to="/" className="btn-primary">
          Strona główna
        </Link>
      </Banner>
    </Hero>
  );
};