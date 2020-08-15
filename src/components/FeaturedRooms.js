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

    const faders = document.querySelectorAll(".fade-in");
    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px 0px 0px",
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
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
