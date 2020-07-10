import React, { Component } from "react";
import Title from "./Title";
import { FaUtensils, FaCocktail, FaTruck, FaMountain } from "react-icons/fa";
export default class Services extends Component {
  state = {
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
  render() {
    return (
      <section className="services">
        <Title title="usługi" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
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
}
