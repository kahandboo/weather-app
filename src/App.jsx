import { useState } from 'react'
import { SearchBar } from './components/SearchBar'
import { WeatherCard } from './components/WeatherCard'
import './App.css'

function App() {
  const [weatherData, setWeatherData] = useState(null);
  
  async function logJSONData() {
    try{
      const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
      const lat = 37.65835063513225;
      const lon = 126.83203459217358;
      const lang = "kr";

      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&appid=${apiKey}`)
        .then((res) => res.json())
        .then(data => setWeatherData(data));
    }catch (err) {
      console.error(err);
    }
  }

  return (
    <main>
      <SearchBar />
      <WeatherCard jsonData={weatherData} />
      <button onClick={logJSONData}>fetch 버튼</button>
    </main>
  )
}

export default App;
