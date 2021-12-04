import "./App.css";
import { useState } from "react";
const api = {
  key: "d9092bc6d80d0c463b7e8f490c009304",
  base: "http://api.openweathermap.org/data/2.5/",
};

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
          console.log(result);
        });
    }
  };

  const datebuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };
  return (
    <div className="App">
      <div>
        <input
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </div>
      {typeof weather.main !== "undefined" ? (
        <div className="Location">
          <h2>{weather.name}</h2>
          <p>{datebuilder(new Date())}</p>
          <p>{Math.round(weather.main.temp)}Õ c</p>
          <p>{weather.weather[0].main}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
