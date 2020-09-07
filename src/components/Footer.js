import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

import { BsArrowBarRight } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import bookig from "../images/booking5.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="SŁONECZKO-Jak u Mamy" />
        </Link>
        <div className="footerInfo">
          <ul className="owner">
            <li>Lucyna Zając</li>
            <li>tel.(018)331-01-99</li>
            <li>kom.694-842-268</li>
            <li>ul.Stawowa 35</li>
            <li>34 -730 Mszana Dolna</li>
          </ul>
          <ul className="footerNav">
            <li>
              <Link to="/">
                <BsArrowBarRight /> Home
              </Link>
            </li>
            <li>
              <Link to="/rooms">
                <BsArrowBarRight /> Pokoje
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <BsArrowBarRight /> Kontakt
              </Link>
            </li>
            <li>
              <Link to="/aboutus">
                <BsArrowBarRight /> O nas
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="socialMedia">
        <h3>Szukaj nas na:</h3>

        <div
          className="fb-page"
          data-href="https://www.facebook.com/SloneczkoJakUMamy/"
          data-tabs=""
          data-width=""
          data-height=""
          data-small-header="false"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="false"
        >
          <blockquote
            cite="https://www.facebook.com/SloneczkoJakUMamy/"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/SloneczkoJakUMamy/">
              Dom Wypoczynkowy Słoneczko
            </a>
          </blockquote>
        </div>

        <span>
          <a href="https://www.booking.com/hotel/pl/osrodek-wypoczynkowy-quot-jak-u-mamy-quot.pl.html">
            <img src={bookig} alt="bookingLogo" />
          </a>
        </span>
      </div>
    </div>
  );
}
