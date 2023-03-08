import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Counter() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-04-07`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <section className="modal-main">
      <div className="modalBody">
        <h1>Wielkanoc dla Singli rozpoczyna się za:</h1>
        <div className="countdown-el countdown-container">
          <div className="days-c">
            <p className="big-text" id="days">
              {timeLeft.days}
            </p>
            <span>dni</span>
          </div>
          <div className="countdown-el hours-c">
            <p className="big-text" id="hours">
              {timeLeft.hours}
            </p>
            <span>godziny</span>
          </div>
          <div className="countdown-el minutes-c">
            <p className="big-text" id="minutes">
              {timeLeft.minutes}
            </p>
            <span>minuty</span>
          </div>
          <div className="countdown-el seconds-c">
            <p className="big-text" id="seconds">
              {timeLeft.seconds}
            </p>
            <span>sekundy</span>
          </div>
        </div>
        <Link to="/easter">
          <button className="button-newyears">
            <span>SPRAWDŹ OFERTE</span>
          </button>
        </Link>
      </div>
    </section>
  );
}
