import React, { useRef } from "react";
import Title from "./Title";
import { FaUtensils, FaCocktail, FaTruck, FaMountain } from "react-icons/fa";
import gsap from "gsap";

import { useIntersection } from "react-use";

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
  const sectionRef = useRef(null);

  const widthThreshold = window.innerWidth > 600 ? .8 : 0.3;

  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: widthThreshold,
  });

  const fromRight = (element) => {
    gsap.fromTo(
      element,
      1,
      {
        opacity: 0,
        x: 500,
      },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: "slow",

      }
    );
  };

  intersection && intersection.intersectionRatio > widthThreshold && fromRight(".fadeIn");

  return (
    <section className="services">
      <Title title="usługi" />
      <div ref={sectionRef} className="services-center">
        {state.services.map((item, index) => {
          return (
            <article key={index} id={index} className="service fadeIn">
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
