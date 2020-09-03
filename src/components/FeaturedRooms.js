import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import observers from "observers";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;

  componentDidMount() {
    const featured1 = document.getElementsByClassName("featured-rooms-center");

    const widthThreshold = window.innerWidth > 600 ? 1 : 0.3;

    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: widthThreshold,
      rootMargin: "20px",
    };
    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          entry.target.classList.remove("appear");
        } else {
          entry.target.classList.add("appear");
          // appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });
  }

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Pokoje" />
        <div className="featured-rooms-center fade-in">
          <p>
            <b>Pokój 1-osobowy </b>
            {rooms[3]}
          </p>
          <p>
            <b>Pokój 2-osobowy </b>
            {rooms[1]}
          </p>
          <p>
            <b>Pokój 3-osobowy </b>
            {rooms[0]}
          </p>
          <p>
            <b>Pokój 4-osobowy </b>
            {rooms[2]}
          </p>
        </div>
      </section>
    );
  }
}
