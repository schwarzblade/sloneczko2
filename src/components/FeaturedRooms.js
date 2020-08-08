import React, { Component } from "react";
import { RoomContext } from "../context";
import Loading from "./Loading";
import Room from "./Room";
import Title from "./Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  componentDidMount() {
    const featured1 = document.getElementsByClassName(
      "featured-rooms-center"
    )[0];
    const featured2 = document.getElementsByClassName(
      "featured-rooms-center"
    )[1];
    const featured3 = document.getElementsByClassName(
      "featured-rooms-center"
    )[2];

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      [featured1, featured2, featured3],
      {
        y: "+=100",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: ".featured-rooms",
          start: "top 20%",
          // markers: true,
        },
      }
    );
  }

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room, index) => {
      return <Room key={room.id} room={room} id={index} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Pokoje" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
