# 🌤️ Weather App (Next.js)

A simple **one-page weather application built with Next.js** that allows users to search for **current weather conditions by city name** using a **free public API**.

This project uses the **Open-Meteo API**, which does **not require an API key**.

---

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Displays current temperature (°C)
- 💨 Shows wind speed
- ⚡ Fast client-side data fetching
- 🆓 Free API (no authentication required)
- 🧩 Single-page Next.js app (App Router)

---

## 🛠️ Tech Stack

- **Next.js 13+**
- **React Hooks**
- **JavaScript**
- **Open-Meteo API**
- **Inline CSS**

---

## 📦 Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
weather-app/
├── app/
│   └── page.js        # Main weather page
├── public/
├── package.json
├── README.md
```

---

## 🌐 Free API Used

### **Open-Meteo API**

* Website: [https://open-meteo.com](https://open-meteo.com)
* Documentation: [https://open-meteo.com/en/docs](https://open-meteo.com/en/docs)
* No API key required
* Free for personal and educational use

### Endpoints Used:

```
Geocoding:
https://geocoding-api.open-meteo.com/v1/search

Weather:
https://api.open-meteo.com/v1/forecast
```

---

## 🧪 Data Displayed

* City & Country
* Current Temperature (°C)
* Wind Speed (km/h)

---

## 🔮 Future Improvements

* 🌦️ Weather condition icons
* 📅 7-day weather forecast
* 🕒 Hourly forecast
* 📍 Location-based weather
* 🎨 Tailwind CSS styling
* 🌙 Dark / Light mode

---

## ⚠️ Notes

* City search is case-insensitive
* Weather data is based on nearest available coordinates
* This project is intended for **learning and demo purposes**

---

## 📜 License

MIT License — free to use, modify, and distribute.

---

## 🙌 Acknowledgements

* Open-Meteo for the free weather API
* Next.js team for the framework



Just tell me 👍
```
