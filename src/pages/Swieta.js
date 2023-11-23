import React from "react"
import swietaIMG from "../images/swieta24.jpg"
import { AiOutlineClockCircle, AiOutlineForward } from "react-icons/ai"
import ScrollToTopBtn from "../components/ScrollToTopBtn"
export const Swieta = () => {
return (
<div className="center">
<img src={swietaIMG} alt="ofertaswiateczna" width={"50%"} height={"50%"}/>
<div className="center">
<p>Cena za pobyt świąteczny z wyżywieniem i atrakcjami na święta to 1000 zł za osobę.</p> 
    <p>Zniżki dla dzieci:</p>
    <ul>
        <li> 0-2 lat  200 zł </li>
        <li> 3-7 lat 500 zł </li>
        <li> 8-15 lat 800 zł </li>
        <li> Od 16 lat 1000 zł </li>
    </ul>
    <p>Każdego dnia śniadanie i obiadokolacja</p>
    <span className="newyear-center">Program:</span>
        <ul className="newyear-list">
          <li>
            <AiOutlineForward />
            <span className="date">22.12.2023</span> <br />
            <AiOutlineClockCircle />
            12.00 - Zakwaterowanie (pokoje 2,3,4 osobowe) <br />{" "}
            <AiOutlineClockCircle />
            17.00 - 18.00 - Obiadokolacja
          </li>
          <li>
            <AiOutlineForward />
            <span className="date">23.12.2023</span>
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
            <span className="date">24.12.2023</span> <br />
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
            <span className="date">25.12.2023</span>
            <br /> <AiOutlineClockCircle />
            9.00-10.00 - Śniadanie.
            <br /> <AiOutlineClockCircle />
            10.00-14.00 - Wykwaterowanie.
          </li>
          <li>
            <AiOutlineForward />
            <span className="date">26.12.2023</span>
            <br /> <AiOutlineClockCircle />
            9.00-10.00 - Śniadanie.
            <br /> <AiOutlineClockCircle />
            10.00-14.00 - Wykwaterowanie.
          </li>
        </ul>
    </div>
    <br/>
    <p>Do dyspozycji gości sauna i bania z jacuzzi po wcześniejszym ustaleniu godziny.</p>
    <ScrollToTopBtn/>
  </div>
)
}