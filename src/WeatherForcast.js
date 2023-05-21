import React, { useState } from "react";

import axios from "axios";
import "./WeatherForcast.css";

import WeatherForcastFirst from "./WeatherForcastFirst";

export default function WeatherForcast(props) {
  const [forcast, setForcast] = useState({ ready: false });

  function showForcast(response) {
    setForcast({
      ready: true,
      info: response.data.daily,
    });
  }
  function search() {
    let key = "fo6f2df46035dba40b34d91tf4b42c6e";
    let city = props.day.city;
    let forcastApi = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${key}&units=metric`;
    axios.get(forcastApi).then(showForcast);
  }
  if (forcast.ready) {
    return (
      <div className="forcast mt-4">
        <div className="row">
          {forcast.info.map(function (dailyForcast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForcastFirst data={dailyForcast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return search();
  }
}
