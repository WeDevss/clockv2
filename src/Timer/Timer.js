import React, { useState, useEffect } from "react";
import Countdown from "./Countdown";

export default function Timer() {
  const [counting, setCounting] = useState(false);
  const [time, setTime] = useState(10);
  const [key, setKey] = useState(0);

  const handleClick = (e) => {
    let timeInSeconds = e.target.value * 60;
    setTime(timeInSeconds);
    setCounting(false);
    setKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    let timerId;
    if (counting) {
      timerId = setInterval(() => {
        if (time === 1) {
          setCounting(!counting);
        }
        setTime((prevTime) => prevTime - 1);
      }, 10000);
    }

    return () => clearInterval(timerId);
  });

  return (
    <>
      <div className="col-6">
        <div className="timer-container py-4">
          <Countdown time={time} counting={counting} id={key} />
          <div className="time-button-wrapper d-flex justify-content-center align-items-center">
            <input
              type="number"
              placeholder="Number"
              className="numInp"
              onChange={handleClick}
            />
          </div>
          <div>
            <button
              className="btn start  text-white"
              onClick={() => {
                setCounting(!counting);
              }}
              disabled={time === 0}
            >
              {!counting ? "START" : "PAUSE"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
