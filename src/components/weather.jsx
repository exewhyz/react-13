import { useEffect, useState } from "react";
import { useApi } from "../context/apiContext";

export default function Weather() {
  const { city } = useApi();
  const url = `http://api.weatherapi.com/v1/current.json?key=cc51a035fb6647b6bc445321250412&q=${city}`;

  const [weatherData, setWeatherData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => setError(err.message));
  }, [city]);
  return (
    <>
      {!error ? (
        <div>
          <h1>Weather of {weatherData?.location?.name}</h1>
          <h3>Temperature: {weatherData?.current?.temp_c}</h3>
        </div>
      ) : (
        <h3>{error}</h3>
      )}
    </>
  );
}
