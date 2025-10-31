import React, { useState } from 'react'
import '../styles/WeatherCard.css'

export function WeatherCard({ jsonData }) {
    function convertKelvinToCelsius(temp) {
        return Math.round(temp - 273.15);
    }

    if (!jsonData) return <div>Loading...</div>;

    return(
        <div className='container-weathercard'>
            <div className='location'>위치 {jsonData.name}</div>
            <div className='weather-main'>날씨 {jsonData.weather[0].main}</div>
            <div className='description'>설명 {jsonData.weather[0].description}</div>
            <div className='main-temp'>평균 기온 {convertKelvinToCelsius(jsonData.main.temp)}°C</div>
            <div className='min-temp'>최저 기온 {convertKelvinToCelsius(jsonData.main.temp_min)}°C</div>
            <div className='max-temp'>최고 기온 {convertKelvinToCelsius(jsonData.main.temp_max)}°C</div>
        </div>
    )
}

export default WeatherCard;