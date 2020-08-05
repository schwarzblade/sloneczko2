import React, { Component, useState } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight, FaHamburger } from "react-icons/fa";
import { Link } from "react-router-dom";
import Burger from "./Burger/Burger";
import styled from "styled-components";
import Menu from "./Menu/Menu";

import { theme } from "../theme";
import { ThemeProvider } from "styled-components";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="SŁONECZKO-Jak u Mamy" />
            </Link>

            <div className="hamburgerMenu">
              {" "}
              <Burger open={open} setOpen={setOpen} />
              <Menu open={open} setOpen={setOpen} />
            </div>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Pokoje</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hamburgerMenu">
        {" "}
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} />
      </div>
    </>
  );
};

export default Navbar;
