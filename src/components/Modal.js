import React from "react";
import { ReactComponent } from "*.svg";

class Modal extends ReactComponent {
  constructor(props) {
    this.handleClose = this.handleClose;
    this.show = show;
  }

  render() {
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    const newYears = "26 Dec 2020";

    function countdown() {
      const newYearsDate = new Date(newYears);
      const currentDate = new Date();

      const totalSeconds = (newYearsDate - currentDate) / 1000;

      const days = Math.floor(totalSeconds / 3600 / 24);
      const hours = Math.floor(totalSeconds / 3600) % 24;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const seconds = Math.floor(totalSeconds) % 60;

      daysEl.innerHTML = days;
      hoursEl.innerHTML = hours;
      minutesEl.innerHTML = minutes;
      secondsEl.innerHTML = seconds;
    }
    countdown();

    setInterval(countdown, 1000);

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className="modalBody">
            <h1>Sylwester dla Singli rozpoczyna sie za:</h1>
            <div className="countdown-el countdown-container">
              <div className="days-c">
                <p className="big-text" id="days">
                  0
                </p>
                <span>dni</span>
              </div>
              <div className="countdown-el hours-c">
                <p className="big-text" id="hours">
                  0
                </p>
                <span>godziny</span>
              </div>
              <div className="countdown-el minutes-c">
                <p className="big-text" id="minutes">
                  0
                </p>
                <span>minuty</span>
              </div>
              <div className="countdown-el seconds-c">
                <p className="big-text" id="seconds">
                  0
                </p>
                <span>sekundy</span>
              </div>
            </div>
            {children}
            <button onClick={handleClose}>close</button>
          </div>
        </section>
      </div>
    );
  }
}
export default Modal;
