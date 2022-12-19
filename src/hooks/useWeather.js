import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const URL = 'https://api.openweathermap.org/data/2.5/weather';

if (!API_KEY) {
    console.log('warning, api key is required');
}

const useWeather = (query) => {
    const [weatherInfo, setWeatherInfo] = useState({});

    const fetchWeather = async (query) => {
        const { data } = await axios.get(URL, {
            params: {
                q: query,
                units: 'metric',
                APPID: API_KEY,
            }
        })

        setWeatherInfo(data);
    }

    useEffect(() => {
        if (query) {
            fetchWeather(query);
        }
    }, [query]);

    return { weatherInfo, fetchWeather }
}

export default useWeather;