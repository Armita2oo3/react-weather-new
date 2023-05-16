import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./Weather.css";
export default function WeatherIcon(props) {
  const iconMapping = {
    "01d": "CLEAR_DAY",

    "02d": "PARTLY_CLOUDY_DAY",

    "03d": "CLOUDY",

    "04d": "CLOUDY",

    "09d": "RAIN",

    "10d": "SLEET",

    "11d": "CLOUDY",

    "13d": "SNOW",

    "50d": "FOG",

    "01n": "CLEAR_NIGHT",
    "02n": "PARTLY_CLOUDY_NIGHT",

    "03n": "CLOUDY",

    "04n": "CLOUDY",

    "09n": "RAIN",

    "10n": "SLEET",

    "11n": "CLOUDY",

    "13n": "SNOW",

    "50n": "FOG",
  };

  const defaults = {
    size: 54,
    animate: true,
  };
  return (
    <span className="img-fluid">
      <ReactAnimatedWeather
        icon={iconMapping[props.icon]}
        color={"black"}
        size={defaults.size}
        animate={defaults.animate}
      />
    </span>
  );
}
