import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export const Home = () => {
  return (
    <>
      <Hero>
        <Banner title="Ośrodek wczasowy" subtitle="nocleg od 50zł">
          <Link to="/rooms" className="btn-primary">
            nasze pokoje
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};
