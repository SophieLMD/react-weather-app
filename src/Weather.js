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
      <div className="row">
        <div className="col-3">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="rain"
          />{" "}
          9°C
        </div>
        <div className="col-3">
          <ul>
            <li>Precipitation: 92%</li>
            <li>Humidity: 92%</li>
            <li>Wind: 5mph</li>
          </ul>
        </div>
        <div className="col-6">
          <h2>Weather</h2>
          <ul>
            <li>Friday 20:00</li>
            <li>Rain</li>
          </ul>
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
