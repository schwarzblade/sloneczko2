import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }

  static contextType = RoomContext;

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);
    console.log(room);
    if (!room) {
      return (
        <div className="error">
          <h3>Nie ma takich pokoi w naszym ośrodku...</h3>
          <Link to="/rooms" className="btn-primary">
            Wróc do listy pokoi
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;
    return (
      <StyledHero img={images[0]}>
        <Banner title={`${name} pokój`}>
          <Link to="/rooms" className="btn-primary">
            Powrót do pokoi
          </Link>
        </Banner>
      </StyledHero>
    );
  }
}
