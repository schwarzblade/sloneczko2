import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function Room({ room }) {
  const { name, slug, images, price } = room;
  return (
    <div>
      <article className="room">
        <div className="img-container">
          <div className="img-hover-zoom">
            <img src={images[0]} alt="pokój" />
          </div>
          <div className="price-top">
            <h6>Cena: PLN{price}</h6>
            <p>za noc</p>
          </div>
          <Link to={`/rooms/${slug}`} className="btn-primary room-link">
            Szczegóły
          </Link>
          <p className="room-info">{name}</p>
        </div>
      </article>
    </div>
  );
}

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
