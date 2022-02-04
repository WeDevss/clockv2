import React from "react";
import DisplayStyle from "./DisplayComponentStyle";

function DisplayComponent(props) {
    const h = () => {
        if (props.time.h === 0) {
            return "";
        } else {
            return (
                <span className="mainColor">
          {props.time.h >= 10 ? props.time.h : "0" + props.time.h}
        </span>
            );
        }
    };
    return (
       <>
            <DisplayStyle>
                <div className="sekund d-flex justify-content-center">
                    {h()}
                    <span className="mainColor">
        {props.time.m >= 10 ? props.time.m : "0" + props.time.m}.
      </span>
                    <span className="mainColor">
        {props.time.s >= 10 ? props.time.s : "0" + props.time.s}
      </span>
                    <span>.{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
                </div>
            </DisplayStyle>
       </>
    );
}

export default DisplayComponent;