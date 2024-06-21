import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain.png",
    });
  }
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-entry"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
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
                  <FormattedDate date={weatherData.date} />
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
  } else {
    const apiKey = "866a208a73eeff02182218e9441647a1";
    let city = "London";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}
