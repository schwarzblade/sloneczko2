import React, { Component } from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/StyledHero";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
      balcony,
    } = room;

    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg}>
          <Banner title={`${name} pokój`}>
            <Link to="/rooms" className="btn-primary">
              Powrót do pokoi
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return (
                <Zoom>
                  {" "}
                  <img
                    key={index}
                    src={item}
                    alt={name}
                    width="100%"
                    height="100%"
                  />
                </Zoom>
              );
            })}
          </div>
        </section>
        <div className="single-room-info">
          <article className="desc">
            <h3>Opis:</h3>
            <p>{description}</p>
            <section className="room-extras">
              <h6>Dodatkowo</h6>
              <ul className="extras">
                {extras.map((item, index) => {
                  return <li key={index}>-{item}</li>;
                })}
              </ul>
            </section>
          </article>
          <article className="info">
            <h3>Info:</h3>
            <h6>Cena za noc: {price} PLN</h6>
            <h6>powierzchnia:{size} m&sup2;</h6>
            <h6>
              Ilośc mijesc:
              {capacity > 1 ? `${capacity} osoby` : `${capacity} osobowy`}
            </h6>
            <h6>Zwierzęta: {pets ? "dozwolone " : "nie dozwolone"}</h6>
            <h6>Śniadanie: {breakfast && "Za dopłatą 20 PLN "}</h6>
            <h6> {balcony && "Pokój Z balkonem"}</h6>
          </article>
        </div>
      </>
    );
  }
}
