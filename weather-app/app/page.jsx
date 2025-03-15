"use client";

import { useState } from "react";

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getWeather = async () => {
    if (!city) return;

    setLoading(true);
    setError("");
    setWeather(null);

    try {
      // Step 1: Get latitude & longitude
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) {
        setError("City not found");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Step 2: Get weather data
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      setWeather({
        city: `${name}, ${country}`,
        temperature: weatherData.current_weather.temperature,
        windspeed: weatherData.current_weather.windspeed,
        weathercode: weatherData.current_weather.weathercode,
      });
    } catch (err) {
      setError("Failed to fetch weather data");
    }

    setLoading(false);
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.title}>🌤️ Weather App</h1>

      <div style={styles.search}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button style={styles.button} onClick={getWeather}>
          Search
        </button>
      </div>

      {loading && <p>Loading weather...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather && (
        <div style={styles.card}>
          <h2>{weather.city}</h2>
          <p>🌡️ Temperature: {weather.temperature}°C</p>
          <p>💨 Wind Speed: {weather.windspeed} km/h</p>
        </div>
      )}
    </main>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px",
    background: "#0f172a",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    marginBottom: "30px",
  },
  search: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginBottom: "30px",
  },
  input: {
    padding: "10px",
    width: "220px",
    borderRadius: "8px",
    border: "none",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    background: "#38bdf8",
    cursor: "pointer",
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "12px",
    maxWidth: "300px",
    margin: "0 auto",
  },
};
