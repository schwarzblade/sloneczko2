import React, { useRef, useEffect } from "react";
import Title from "./Title";
import { FaUtensils, FaCocktail, FaTruck, FaMountain } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const state = {
  services: [
    {
      icon: <FaUtensils />,
      title: "regionalne potrawy",
      info:
        "Produkty na potrawy serwowane w naszym ośrodku pochodzą od lokalnych wytwórców co gwarantuje ich najwyższa jakośc i wspaniały smak",
    },
    {
      icon: <FaCocktail />,
      title: "imprezy okolicznościowe",
      info:
        "Urodziny , imieniny, KOmunie, Chrzty, 18-nastki zorganuizujemy niezpomnine imprezy okolicznościowe",
    },
    {
      icon: <FaTruck />,
      title: "catering",
      info: "Obiady, pełny catering na dwóz, zadzwoń",
    },
    {
      icon: <FaMountain />,
      title: "wspaniałem miejsce na aktywny wypoczynek",
      info:
        "Cisza i spokój zdala od zgiełku miast,szlaki turystyczne po Beskidzie Wyspowym, trasy rowerowe ",
    },
  ],
};
export default function Services() {
  useEffect(() => {
    const serviceItem1 = document.getElementById("0");
    const serviceItem2 = document.getElementById("1");
    const serviceItem3 = document.getElementById("2");
    const serviceItem4 = document.getElementById("3");

    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      [serviceItem1, serviceItem2, serviceItem3, serviceItem4],
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
          trigger: ".services",
          start: "top 20%",
          // markers: true,
        },
      }
    );
  });
  return (
    <section className="services">
      <Title title="usługi" />
      <div className="services-center">
        {state.services.map((item, index) => {
          return (
            <article key={index} id={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
