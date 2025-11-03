import React, { useState } from "react";
import Axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => setCity(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city) return;

    try {
      const res = await Axios.get(
        https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=643d6c8f0049d7732aab38687b0f0807&units=metric
      );
      
      setWeather({
        name: res.data.name,
        temp: res.data.main.temp,
        description: res.data.weather[0].description,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
        icon: https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png
      });

      setError("");
      setCity("");
    } catch (err) {
      setError("City not found!");
      setWeather(null);
    }
  };

  return (
    <div style={{ 
      border: "3px solid lightblue", 
      boxShadow: "1px 1px 5px 3px lightgreen", 
      margin: "50px auto", 
      width: "400px", 
      padding: "30px", 
      backgroundColor: "#f0f0f0", 
      textAlign: "center",
      borderRadius: "10px"
    }}>
      <h1 style={{ color: "brown" }}>Weather App</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City"
          value={city}
          onChange={handleChange}
          style={{ fontSize: "20px", padding: "5px", width: "70%" }}
        />
        <button type="submit" style={{ fontSize: "18px", marginLeft: "10px" }}>
          Get Weather
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px" }}>
          <h2>{weather.name}</h2>
          <img src={weather.icon} alt="weather icon" />
          <p>Temperature: {weather.temp} °C</p>
          <p>Condition: {weather.description}</p>
          <p>Humidity: {weather.humidity}%</p>
          <p>Wind Speed: {weather.wind} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
