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
        <Banner title="Dom wypoczynkowy" subtitle="słoneczko - jak u mamy">
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
