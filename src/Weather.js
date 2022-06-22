import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";

export default function Weather(props) {
  function handleResponse(response) {
    alert(` The weather in ${response.data.name} ${response.data.main.temp}°C`);
  }
  let apiKey = "d6cf4095257656fcf43141e0422dab2e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <Audio type="puff" color="#00BFFF" height={100} width={100} timeout={300} />
  );
}
