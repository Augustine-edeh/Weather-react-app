import { useState } from "react";
import ErrorMessage from "../Right Section/ErrorMessage";
import "./Home.css";

const Home = (props) => {
  // || API Key
  const APIKEY = "3ad3ba1e7be894670b88f65bf82f63d9";
  // || Declaring state value for Weather Data
  const [weatherData, setWeatherData] = useState();
  // || Declaring state value for city value
  const [enteredValue, setEnteredValue] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // || Prevent default-form-submission function
  const preventFormSubmit = () => {
    document
      .querySelector(".city-search__form")
      .addEventListener("submit", (e) => e.preventDefault());
  };

  // || Get Device Location function
  const getDeviceLocation = () => {
    // || Callback function for successful retrieval of device position
    const locationSuccessCallback = (position) => {
      const { latitude, longitude } = position.coords;
      console.log(latitude, longitude);

      const locationWeatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`;

      // || Getting the weather for device position gotten
      fetch(locationWeatherURL)
        .then((response) => response.json())
        .then((data) => {
          // setWeatherData(data);
          console.log(data);
          let countryAlphaCode = data.sys.country;
          // || Getting the country name
          fetch(`https://restcountries.com/v3.1/alpha/${countryAlphaCode}`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data[0].name.common);
              // || Lifting up the country-name state value to the OverallContainer component
              props.onCountryGotten(data[0].name.common);
            });

          // || Lifting up the weatherData state only when the there is no error fetching the weather
          if (data.cod === 200) {
            props.onGetWeather(data);
          }
        })
        .catch((error) => console.log(error));
    };

    // || Callback function for unsuccessful retrieval of device position
    const locationErrorCallback = (err) => {
      const errors = {
        1: "Permission denied. Please grant access to device location and try again.",
        2: "Position unavailable",
        3: "Request timeout",
      };
      window.alert(errors[err.code]);
    };
    // || Options object for geolocation API call
    const geolocationOptions = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    // || Getting device location (Latitude and Longitude function) Function
    navigator.geolocation.getCurrentPosition(
      locationSuccessCallback,
      locationErrorCallback,
      geolocationOptions
    );
  };

  const CitySearchHandler = async () => {
    // || Preventing the default submit event of the search-form
    preventFormSubmit();

    // || Fetching weather data
    let cityWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${enteredValue}&appid=${APIKEY}&units=metric`;

    try {
      const response = await fetch(cityWeatherURL);

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("City not found");
        } else {
          throw new Error(
            "Failed to fetch weather data. Check your internet & try again"
          );
        }
      }

      const weatherData = await response.json();
      // Two-way binding for the city search input value
      setEnteredValue("");
      // setWeatherData(dataRetrieved);
      console.log(weatherData);
      const cityName = weatherData.name;
      const countryAlphaCode = weatherData.sys.country;

      // let countryAlphaCode = weatherData.sys.country;

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
      console.log(countryData[0].name.common);
      const nameOfCountry = countryData[0].name.common;
      const countryName = () => {
        if (cityName.toLowerCase() === nameOfCountry.toLowerCase()) {
          return "";
        }
        return `, ${nameOfCountry}`;
      };
      // Lifting up the country name value to the OverallContainer component
      props.onCountryGotten(countryName);

      // Lifting up the weatherData state only when there is no error fetching the weather
      if (weatherData.cod === 200) {
        props.onGetWeather(weatherData);
      }
    } catch (error) {
      // Handle errors here
      console.error(error);
      // Two-way binding for the city search input value
      setEnteredValue("");
      setErrorMessage(error.message);
      setIsError(true);
    }
  };
  return (
    <section className="Home">
      <div className="Home__title">Weather App</div>
      <hr className="hr-1" />
      <section className="lower-sect">
        <form className="city-search__form">
          <input
            value={enteredValue}
            type="text"
            className="input"
            placeholder="Enter city name"
            onChange={(event) => {
              setEnteredValue(event.target.value);
              setIsError(false);
            }}
          />
          <button
            type="submit"
            className="city-search__submit"
            onClick={CitySearchHandler}
          >
            Search
          </button>
        </form>

        {isError ? <ErrorMessage errMessage={errorMessage} /> : ""}
        <div className="divider">
          <hr className="hr-2" />
          <span>or</span>
          <hr className="hr-2" />
        </div>
        <button
          typae="button"
          className="get-location_button"
          onClick={getDeviceLocation}
        >
          Get weather for Device Location
        </button>
      </section>
    </section>
  );
};
export default Home;
