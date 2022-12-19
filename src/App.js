import React, { useState } from 'react';

import useWeather from './hooks/useWeather';
import './App.css';

const App = () => {
    const [query, setQuery] = useState('');
    const { weatherInfo, fetchWeather } = useWeather();

    const search = async (e) => {
        if (e.key === 'Enter') {
            fetchWeather(query);
            setQuery('');
        }
    }

    return (
        <div className="main-container">
            <input
                type="text"
                className="search"
                placeholder="Search your city"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={search}
            />

            {weatherInfo.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weatherInfo.name}</span>
                        <sup>{weatherInfo.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weatherInfo.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img
                            className="city-icon"
                            src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
                            alt={weatherInfo.weather[0].description}
                        />
                        <p>{weatherInfo.weather[0].description}</p>
                    </div>
                </div>

            )}
        </div>
    )
}

export default App;