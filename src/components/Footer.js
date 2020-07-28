import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { FaFacebookSquare } from "react-icons/fa";
import { BsFillBootstrapFill } from "react-icons/bs";
import bookig from "../images/booking5.png";
export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="SŁONECZKO-Jak u Mamy" />
        </Link>
      </div>
      <div className="socialMedia">
        <h3>Szukaj nas na:</h3>
        <span>
          <a href="https://www.facebook.com/SloneczkoJakUMamy/">
            <FaFacebookSquare />
          </a>
        </span>
        <span>
          <a href="https://www.booking.com/hotel/pl/osrodek-wypoczynkowy-quot-jak-u-mamy-quot.pl.html">
            <img src={bookig} />
          </a>
        </span>
      </div>
    </div>
  );
}
