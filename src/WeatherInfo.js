import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon.js";
import TemperatureUnits from "./TemperatureUnits.js";
export default function WeatherInfo(props) {
  return (
    <div className="weatherInfo">
      <h1>{props.city}</h1>
      <div className="row mt-3 mb-4">
        <div className="col-4">
          <div className="clearfix d-flex justify-content-start">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={60} />
            </div>
            <div className="float-left">
              <TemperatureUnits celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-4">
          <ul>
            <li>
              Humidity: <strong>{props.data.humidity}%</strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind}kph</strong>
            </li>
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
                {props.data.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
