import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="weather">
      <form>
        <div class="row">
          <div class="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-entry"
              autoFocus="on"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Cardiff</h1>
      <div className="row mt-3 mb-4">
        <div className="col-4">
          <div className="clearfix d-flex justify-content-start">
            <img
              className="float-left"
              src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
              alt="rain"
            />{" "}
            <div className="float-left">
              <span className="temperature">9</span>
              <span className="unit">°C | F</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitation: 92%</li>
            <li>Humidity: 92%</li>
            <li>Wind: 5mph</li>
          </ul>
        </div>
        <div className="col-4 position-relative">
          <div className="position-absolute top-0 start-50 text-end">
            <h2>Weather</h2>
            <ul>
              <li className="current-conditions">Friday 20:00</li>
              <li className="current-conditions">Rain</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="weather-links">
        <span>
          <a href="">Temperature</a> | <a href=""> Precipitation </a> |{" "}
          <a href="">Wind</a>
        </span>
      </div>
    </div>
  );
}
