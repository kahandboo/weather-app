import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchString, setsearchString] = useState("");

  async function getJSONData() {
    try{
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const q = searchString;
      const lang = "kr";

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&lang=${lang}&appid=${apiKey}`)
        .then((res) => res.json())
        .then(data => setWeatherData(data));
    }catch (err) {
      console.error(err);
    }
  }

  return (
    <main>
      <SearchBar string={searchString} setString={setsearchString} handleClick={getJSONData}/>
      <WeatherCard jsonData={weatherData} />
    </main>
  )
}

export default App;
