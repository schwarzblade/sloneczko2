import React, { useRef } from "react";
import Title from "./Title";
import { FaUtensils, FaCocktail, FaTruck, FaMountain } from "react-icons/fa";

import { useIntersection } from "react-use";

const state = {
  services: [
    {
      icon: <FaUtensils />,
      title: "regionalne potrawy",
      info:
        "Produkty na potrawy serwowane w naszym ośrodku pochodzą od lokalnych wytwórców, co gwarantuje ich najwyższą jakość i wspaniały smak",
    },
    {
      icon: <FaCocktail />,
      title: "imprezy okolicznościowe",
      info:
        "Urodziny , imieniny, Komunie, Chrzest, 18-nastki, zorganuizujemy niezpomnine imprezy okolicznościowe",
    },
    {
      icon: <FaTruck />,
      title: "catering",
      info:
        "Obiady, ciasta, na zamówienie z dowozem na terenie miasta Mszana Dolna, zadzwoń",
    },
    {
      icon: <FaMountain />,
      title: "wspaniałe miejsce na aktywny wypoczynek",
      info:
        "Cisza i spokój z dala od zgiełku miasta. Szlaki turystyczne po Beskidzie Wyspowym, trasy rowerowe ",
    },
  ],
};
export default function Services() {
  const sectionRef = useRef(null);

  const featured1 = document.getElementsByClassName("services-center");

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

  return (
    <section className="services">
      <Title title="usługi" />
      <div ref={sectionRef} className="services-center">
        {state.services.map((item, index) => {
          return (
            <article key={index} id={index} className="service fade-in">
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
