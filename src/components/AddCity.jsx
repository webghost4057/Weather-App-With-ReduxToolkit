import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getWeatherDetail } from '../Features/weatherFeature';
import { Api_key } from '../ApiKeys';

const AddCity = () => {
  const [city, setCity] = useState('Gujranwala');
  const [country, setCountry] = useState('Pakistan')

  const dispatch = useDispatch();
  const details = useSelector(state => state.weather.details);
  const [convert_temp, setConvertTemp] = useState(null);

  useEffect(() => {
    if (details === null) {
      fetchData();
    } else {
      setConvertTemp(Math.floor(details.main.temp - 273.15));
    }
  }, [details]);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_key}`);
      if (!response.ok) {
        if (response.status === 404) {
          alert("Data Not Found Corresponding entered Credentials")
          throw new Error('City or country not found');
        } else {
          throw new Error('Failed to fetch weather data');
        }
      }
      const data = await response.json();
      dispatch(getWeatherDetail(data));
    } catch (error) {
      console.log("Error Found", error);
    }
  };




  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Weather App</h2>
          </div>
          <form className="mt-8 space-y-6 " onSubmit={(e) => { e.preventDefault(); fetchData(); }}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="city" className="sr-only">City</label>
                <input id="city" name="city" type="text" autoComplete="city" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)} />
              </div>
              <div>
                <label htmlFor="country" className="sr-only">Country</label>
                <input id="country" name="country" type="text" autoComplete="country" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)} />
              </div>
            </div>
            <div>
              <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Get Weather
              </button>
            </div>
          </form>
          <div className="bg-white rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-2">{city}, {country}</h3>
            <div className="flex items-center justify-center">
              <img className="w-20 h-20" src="http://openweathermap.org/img/wn/01d.png" alt="Weather icon" />
              <div className="ml-4">
                <p className="text-2xl font-semibold">{convert_temp}C</p>
                <p className="text-gray-500">Sunny</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default AddCity