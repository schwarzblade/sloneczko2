import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";
import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import bookig from "../../images/booking5.png";

const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      <Link className="linkItems" to="/">
        <span role="img" aria-label="home">
          🏠
        </span>
        Home
      </Link>
      <Link className="linkItems" to="/rooms">
        <span role="img" aria-label="price">
          &#x1f4b8; Pokoje
        </span>
      </Link>
      <Link className="linkItems" to="/contact">
        <span role="img" aria-label="contact">
          &#x1f4e9;{" "}
        </span>
        Kontakt
      </Link>
      <Link className="linkItems" to="/aboutus">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        O nas
      </Link>
      <div className="hamburgerSocialMedia">
        <span>
          <a href="https://www.facebook.com/SloneczkoJakUMamy/">
            <FaFacebookSquare />
          </a>
        </span>
        <span>
          <a href="https://www.booking.com/hotel/pl/osrodek-wypoczynkowy-quot-jak-u-mamy-quot.pl.html">
            <img src={bookig} alt="bookingLogo" />
          </a>
        </span>
      </div>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
