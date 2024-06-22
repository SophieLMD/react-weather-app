import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>Cardiff</h1>
      <div className="row mt-3 mb-4">
        <div className="col-4">
          <div className="clearfix d-flex justify-content-start">
            <img
              className="float-left"
              src={weatherData.iconUrl}
              alt={weatherData.description}
            />{" "}
            <div className="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C | F</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}kph</li>
          </ul>
        </div>
        <div className="col-4 position-relative">
          <div className="position-absolute top-0 start-50 text-end">
            <h2>Weather</h2>
            <ul>
              <li className="current-conditions">
                <FormattedDate date={props.data.date} />
              </li>
              <li className="current-conditions text-capitalize">
                {weatherData.description}
              </li>
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