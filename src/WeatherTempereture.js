import React, { useState } from "react";

export default function WeatherTempereture(props) {
  const [units, setUnits] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();

    setUnits("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnits("celcius");
  }

  if (units === "celcius") {
    return (
      <div className="zero ms-3">
        <span className="degree">{Math.round(props.celcius)}</span>
        <span className="unit">
          ℃ |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            ℉
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="zero ms-3">
        <span className="degree">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <a href="/" onClick={showCelcius}>
            ℃
          </a>{" "}
          | ℉
        </span>
      </div>
    );
  }
}
