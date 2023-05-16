import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [load, setLoad] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showTemp(response) {
    setLoad({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,

      wind: response.data.wind.speed,
      city: response.data.name,
      impSrc: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
    let newDate = new Date(response.data.dt * 1000);
    console.log(newDate);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let key = "a39d99e6ced537cd2e2f653ab550f5cf";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(apiUrl).then(showTemp);
  }
  if (load.ready) {
    return (
      <div>
        <div className="app">
          <div className="container">
            <form onSubmit={handleSubmit}>
              <div className="row ">
                <div className="col-9 ms-3">
                  <input
                    placeholder="Enter a city"
                    className="  form-control search-form me-4"
                    type="search"
                    onChange={handleChange}
                  />
                </div>
                <input className="btn btn-primary col-2" type="submit" />
              </div>
            </form>
          </div>
          <h3 className="text-muted ms-3 mb-4">{load.city}</h3>
          <div className="container mb-2">
            <div className="row">
              <div className="col-8">
                <img
                  src={load.impSrc}
                  alt={load.description}
                  className="img-fluid"
                />
                <div className="zero ms-3">
                  <span className="degree">{Math.round(load.temperature)}</span>
                  <span className="unit"> ℃</span>
                </div>
                <div className="description text-muted ">
                  <div className="info">
                    Humidity: {Math.round(load.humidity)}%
                  </div>
                  <div className="info">
                    Wind Speed: {Math.round(load.wind)} km/h
                  </div>
                </div>
              </div>
              <div className="col-4 ">
                <div className="right">
                  <div className="weather">Weather</div>
                  <div className="date">Friday 05:00</div>
                  <div className="more-info">{load.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="link text-muted">
          Coded by Armita Mir,{" "}
          <a
            href="https://github.com/Armita2oo3/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <h4>Loading...</h4> {search()};
      </div>
    );
  }
}
