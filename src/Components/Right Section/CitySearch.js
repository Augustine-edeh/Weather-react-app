import { useState } from "react";
import "./CitySearch.css";
const APIKEY = "3ad3ba1e7be894670b88f65bf82f63d9";

const CitySearch = (props) => {
  const [enteredCity, setEnteredCity] = useState("");

  const onChangeHandler = (e) => {
    setEnteredCity((prev) => e.target.value);
    props.onError(false);
    console.log(enteredCity);
  };

  const CitySearchHandler = async (e) => {
    e.preventDefault();
    setEnteredCity("");

    // || Search for city weather
    let cityWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${APIKEY}&units=metric`;

    try {
      const response = await fetch(cityWeatherURL);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found");
        } else {
          throw new Error(
            "Failed to fetch weather. Check your internet & try again"
          );
        }
      }

      const weatherData = await response.json();
      const cityName = weatherData.name;
      const countryAlphaCode = weatherData.sys.country;

      // || Fetching country name(for location component)
      const countryResponse = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryAlphaCode}`
      );

      if (!countryResponse.ok) {
        if (countryResponse.status === 404) {
          throw new Error("Country not found");
        } else {
          throw new Error("Failed to fetch country data");
        }
      }

      const countryData = await countryResponse.json();
      const nameOfCountry = countryData[0].name.common;
      const countryName = () => {
        if (cityName.toLowerCase() === nameOfCountry.toLowerCase()) {
          return "";
        }
        return `, ${nameOfCountry}`;
      };
      props.onUpdateCountry(countryName);
      props.logger(weatherData);
      console.log(weatherData);
    } catch (error) {
      // Handle errors here
      console.error(error);
      props.onErrorMessage(error.message);
      props.onError(true);
    }
  };

  return (
    <div className="CitySearch">
      <form onSubmit={CitySearchHandler}>
        <input type="text" value={enteredCity} onChange={onChangeHandler} />
        <button>22Search</button>
      </form>
    </div>
  );
};
export default CitySearch;
