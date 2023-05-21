import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";
export default function WeatherForcastIcon(props) {
  const iconMapping = {
    "clear-sky-day": "CLEAR_DAY",

    "few-clouds-day": "PARTLY_CLOUDY_DAY",

    "scattered-clouds-day": "CLOUDY",

    "broken-clouds-day": "CLOUDY",

    "rain-day": "RAIN",

    "shower-rain-day": "SLEET",

    "thunderstorm-day": "CLOUDY",

    "snow-day": "SNOW",

    "mist-day": "FOG",
  };
  const iconMapping2 = {
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT ",

    "scattered-clouds-night": "CLOUDY ",

    "broken-clouds-night": "CLOUDY",

    "rain-night": "RAIN",

    "shower-rain-night": "SLEET ",

    "thunderstorm-night": "CLOUDY",

    "snow-night": "SNOW",

    "mist-night": "FOG ",
  };
  const defaults = {
    size: 55,
    animate: true,
  };
  let Icon = props.icon;

  if (iconMapping[Icon]) {
    return (
      <span className="img-fluid">
        <ReactAnimatedWeather
          icon={iconMapping[Icon]}
          color={"#ec6e4c"}
          size={defaults.size}
          animate={defaults.animate}
        />
      </span>
    );
  }
  if (iconMapping2[Icon]) {
    return (
      <span className="img-fluid">
        <ReactAnimatedWeather
          icon={iconMapping2[Icon]}
          color={"black"}
          size={defaults.size}
          animate={defaults.animate}
        />
      </span>
    );
  }
}
