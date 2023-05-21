import React, { useState } from "react";
import WeatherForcastIcon from "./WeatherForcastIcon";

export default function WeatherForcastFirst(props) {
  const [information, setInformation] = useState({ ready: false });
  function moreInfo() {
    let date = new Date(props.data.time * 1000);

    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    console.log(props);
    setInformation({
      ready: true,
      tempMax: props.data.temperature.maximum,
      tempMin: props.data.temperature.minimum,
      icons: props.data.condition.icon,
      dates: days[day],
    });
  }
  if (information.ready) {
    return (
      <span>
        <div className="day mb-2">{information.dates}</div>
        <div>
          <WeatherForcastIcon icon={information.icons} />
        </div>
        <div className="mt-3">
          <span className="max">{Math.round(information.tempMax)}° </span>
          <span className="min">{Math.round(information.tempMin)}°</span>
        </div>
      </span>
    );
  } else {
    return moreInfo();
  }
}
