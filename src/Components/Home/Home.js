import { useState } from "react";
import "./Home.css";

const LandingPage = (props) => {
  // || API Key
  const APIKEY = "3ad3ba1e7be894670b88f65bf82f63d9";
  // || Declaring state value for Weather Data
  const [weatherData, setWeatherData] = useState();
  // || Declaring state value for city value
  const [enteredValue, setEnteredValue] = useState("");

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
          setWeatherData(data);
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

  const CitySearchHandler = () => {
    // || Preventing the default submit event of the search-form
    preventFormSubmit();

    // || Fetching weather data
    let cityWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${enteredValue}&appid=${APIKEY}&units=metric`;
    fetch(cityWeatherURL)
      .then((response) => response.json())
      .then((dataRetrieved) => {
        // || Two way binding for the city search input value
        setEnteredValue("");
        setWeatherData(dataRetrieved);
        console.log(dataRetrieved);
        let countryAlphaCode = dataRetrieved.sys.country;
        // || Getting the country name
        fetch(`https://restcountries.com/v3.1/alpha/${countryAlphaCode}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data[0].name.common);
            // || Lifting up the country name value to the OverallContainer component
            props.onCountryGotten(data[0].name.common);
          });

        // || Lifting up the weatherData state only when the there is no error fetching the weather
        if (dataRetrieved.cod === 200) {
          props.onGetWeather(dataRetrieved);
        }
      })
      .catch((error) => {
        // || Two way binding for the city search input value
        setEnteredValue("");
      });
  };
  return (
    <section className="LandingPage">
      <div className="LandingPage__title">Weather App</div>
      <hr className="hr-1" />
      <section className="lower-sect">
        <form className="city-search__form">
          <input
            value={enteredValue}
            type="text"
            className="input"
            placeholder="Enter city name"
            onChange={(event) => setEnteredValue(event.target.value)}
          />
          <button
            type="submit"
            className="city-search__submit"
            onClick={CitySearchHandler}
          >
            Search
          </button>
        </form>
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
export default LandingPage;
