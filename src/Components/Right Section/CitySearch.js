import { useState } from "react";
import "./CitySearch.css";
const APIKEY = "3ad3ba1e7be894670b88f65bf82f63d9";

const CitySearch = (props) => {
  const [enteredCity, setEnteredCity] = useState("");

  const onChangeHandler = (e) => {
    setEnteredCity((prev) => e.target.value);
    console.log(enteredCity);
  };

  const CitySearchHandler = async (e) => {
    e.preventDefault();
    setEnteredCity("");

    // || Search for city weather
    let cityWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&appid=${APIKEY}&units=metric`;

    fetch(cityWeatherURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("There was an error");
        }
        return response.json();
      })
      .then((weatherData) => {
        let countryAlphaCode = weatherData.sys.country;
        fetch(`https://restcountries.com/v3.1/alpha/${countryAlphaCode}`)
          .then((response) => response.json())
          .then((data) => {
            props.onUpdateCountry(data[0].name.common);

            // || Lifting up the country-name state value to the OverallContainer component
          });
        props.logger(weatherData);
        console.log(weatherData);
      });
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
