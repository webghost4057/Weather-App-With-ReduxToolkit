import React, { useState, useEffect } from "react";

const WeatherApi = (country) => {
    const [result, setResult] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${country}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '1d2af5842dmshf36e97524bbb861p13527ejsn272b35cd1cf9',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
            try {
                const response = await fetch(url, options);
                const data = await response.json();
                setResult(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();

    }, [country]);

    return result;
};

export default WeatherApi;
