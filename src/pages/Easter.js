import React from "react";
import { AiOutlineForward } from "react-icons/ai";

import { AiOutlineClockCircle } from "react-icons/ai";
export default function Easter() {
  return (
    <div className="newyearsoffer">
      {" "}
      <h2 className="newyear-header">Wielkanoc 2023</h2>
      <h2>
        <p className="newyear-header"> Termin: 07.04.2023r. - 10.04.2023 r.</p>
      </h2>
      <div className="center">
        <h2>Jesteś singlem, singielką?</h2>
        <p>
        Zapraszamy singli 30+, 40+, 50+ do wspólnego spędzenia Świąt Wielkanocnych. Spotykamy się pensjonacie w Mszanie Dolnej, który słynie z doskonałej kuchni. Na miejscu mamy do dyspozycji 2-osobowe lub 3- osobowe pokoje, dużą salę kominkową, saunę i banię na zewnątrz.
        </p>{" "}
        <span className="newyear-center">Program:</span>
        <ul className="newyear-list">
          <li>
            <AiOutlineForward />
            <span className="date">07.04.2023</span> <br />
            <AiOutlineClockCircle />
            16.00-18.00 - Zakwaterowanie (pokoje 2,3 osobowe) <br />{" "}
            <AiOutlineClockCircle />
            18.00 - Obiadokolacja
            <br /> <AiOutlineClockCircle />
            19.00 - Impreza integracyjna (zimna płyta)
          </li>
          <li>
            <AiOutlineForward />
            <span className="date">08.04.2023</span>
            <br /> <AiOutlineClockCircle />
            9.00 -10.00 - Śniadanie. <br /> <AiOutlineClockCircle />
            10.00 - Wędrówka na szczyt Beskidu Wypowego.
            <br />
            <AiOutlineClockCircle />
            17.00 - Obiad. <br />
            <AiOutlineClockCircle />
            19.00 –Ognisko z kiełbaskami i grzańcem.<br />
          </li>
          <li>
            <AiOutlineForward />
            <span className="date">09.04.2023</span> <br />
            <AiOutlineClockCircle />
            9.00 -11.00 Uroczyste śniadanie Wielkanocne.
            <br /> <AiOutlineClockCircle />
            11.00.Wyjazd do term w Szaflarach.
            <br /> <AiOutlineClockCircle />
            17.00 - Obiadokolacja.
            <br /> <AiOutlineClockCircle />
            20.00 – Impreza integracyjna, kapela góralska, (zimna płyta).
          </li>
          <li>
            <AiOutlineForward />
            <span className="date">10.04.2023</span>
            <br /> <AiOutlineClockCircle />
            9.00-10.00 - Śniadanie.
            <br /> <AiOutlineClockCircle />
            10.00-14.00 - Wykwaterowanie.
          </li>
        </ul>
        <br />
        <p className="newyearsoffer-footer">
          Cena: 990 zł Wielkanocny pobyt odbędzie się w Pensjonacie Słoneczko w Mszanie
          Dolnej, znany z doskonałej atmosfery i przepysznego domowego jedzenia.
          Miejsc mamy 50. Gwarantujemy, że połowę przeznaczamy dla kobiet,
          połowę dla mężczyzn.Dojazd we własnym zakresie, jednak jeśli
          będę widzieć, że np. 3- 4 osoby mieszkają w bliskiej od siebie
          okolicy, będę was ze sobą kontaktować w celu wspólnego przejazdu.
          Podczas całego pobytu korzystać możemy z sauny i bani z gorącą wodą w ogrodzie.
          <p>
            <h4> Zaliczka 400 zł.</h4>
          </p>
          <p>
            <h3 >
            Aby wziąć udział w naszym wydarzeniu proszę wypełnić formularz zgłoszeniowy: <a href="https://forms.gle/5qVeMWJNfaRApBHAA" target="_blank">link</a>
            </h3>
          </p>
        </p>
      </div>
    </div>
  );
}
