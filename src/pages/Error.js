import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <Hero>
        <Banner title="404" subtitle="upss coś poszło nie tak...">
          <Link to="/" className="btn-primary">
            strona główna
          </Link>
        </Banner>
      </Hero>
    </>
  );
};
