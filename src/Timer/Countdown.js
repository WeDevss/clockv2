import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import moment from "moment";

const Countdown = (props) => {
  return (
    <div className="timer-circle-wrapper">
      <CountdownCircleTimer
        key={props.id}
        size={250}
        isPlaying={!!props.counting}
        duration={props.time}
        colors="#F3DF00"
      >
        {({ remainingTime }) =>
          moment()
            .hour(0)
            .minute(0)
            .second(remainingTime)
            .format("HH : mm : ss")
        }
      </CountdownCircleTimer>
    </div>
  );
};

export default Countdown;
