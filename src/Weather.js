import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Weather.css";
export default function Weather() {
  return (
    <div>
      <div className="app">
        <div className="container">
          <form>
            <div className="row ">
              <div className="col-9 ms-3">
                <input
                  placeholder="Enter a city"
                  className="  form-control search-form me-4"
                  type="search"
                />
              </div>
              <input
                placeholder="Search"
                className="btn btn-primary col-2"
                type="submit"
              />
            </div>
          </form>
        </div>
        <h3 className="text-muted ms-3 mb-4">New York</h3>
        <div className="container mb-2">
          <div className="row">
            <div className="col-8">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="sunny"
                className="img-fluid"
              />
              <div className="zero ms-3">
                <span className="degree">18</span>
                <span className="unit"> ℃</span>
              </div>
              <div className="description text-muted ">
                <div className="info">Precipitation: 1%</div>
                <div className="info">Humidity: 57%</div>
                <div className="info">Wind: 6 km/h</div>
              </div>
            </div>
            <div className="col-4 ">
              <div className="right">
                <div className="weather">Weather</div>
                <div className="date">Friday 05:00</div>
                <div className="more-info">clear</div>
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
}
